// Задача 19.
// Реализовать виджет, отображающий список постов из любого паблика в VK(подойдет любой паблик, где постов очень много).
// Например, с помощью этой функции API VK.Виджет должен иметь фиксированные размеры и возможность прокрутки.
// При прокрутке содержимого виджета до конца должны подгружаться новые посты.
// Необходимо реализовать возможность кэширования уже загруженных данных: если пользователь закрыл страницу,
// а потом снова открыл ее, виджет должен отображать все загруженные ранее данные
// (новые данные должны подгружаться из учетом уже загруженных ранее).
// При переполнении localStorage, данные, загруженные последними должны вытеснять данные загруженные первыми.

const access_token = '0d59f4db0d59f4db0d59f4db2e0e4ffd9800d590d59f4db686a475e9cc18a0a20b2636a';
let count = 10;

const postObserver = new IntersectionObserver((entries, observer) => { 
  entries.forEach((entry) => { 
    if (entry.isIntersecting) { 
      observer.unobserve(entry.target);
      fetchPosts(count);
    }
  });

  count += 10;
}, { 
  root: document.querySelector('.vk__posts'),
});

async function getPosts(count) { 
  try {
    const response = await fetch(`https://api.vk.com/method/wall.get?owner_id=-139923997&access_token=${access_token}&v=5.131&count=${count}`);
    const data = await response.json();

    const newData = data.response.items
      .slice(count - 10)
      .reduce((acc, el) => { 
      const attachments = el.attachments.find((el) => el.type === 'photo') || undefined;
      const photoInfo = !!attachments ? attachments.photo.sizes.find((el) => el.type === 'x') : undefined;

      const newItem = {
        id: el.id,
        text: el.text,
        likesCount: el.likes.count,
        commentsCount: el.comments.count,
        attachments: {
          photo: !!photoInfo && photoInfo.url,
        },
      };
        
      return [...acc, newItem];
    }, []);
    
    return newData;
  } catch (error) {
    throw error;
  }
}

async function fetchPosts(count) {
  const response = await getPosts(count);
  appendPost(response);
  return response;
}

fetchPosts(count);

function composePost(postData) {
  // Если ничего не передано, ничего не возвращаем:
  if (!postData) return;

  // Обращаемся к шаблону, который создали ранее:
  const template = document.getElementById('post_template');

  // и вытаскиваем его содержимое.
  // В нашем случае содержимым будет «скелет» свита, элемент li.
  // Указываем, что нам необходимо его склонировать, а не использовать сам элемент,
  // иначе он изменится сам, и мы не сможем сделать несколько свитов:
  const post = template.content.cloneNode(true)

  // Из postData получаем всю необходимую информацию:
  const { text, likesCount, commentsCount, attachments } = postData;

  // Добавляем соответствующие тексты и числа в нужные места в «скелете»:
  if (text.length > 0) { 
    post.querySelector('p').innerText = text;
  }
  if (!!attachments.photo) { 
    post.querySelector('img').src = attachments.photo;
  }
  post.querySelector('.vk__likes').innerText = `Лайки: ${likesCount}`;
  post.querySelector('.vk__comments').innerText = `Комментарии: ${commentsCount}`;

  // Возвращаем созданный элемент,
  // чтобы его можно было добавить на страницу:
  return post;
}


function appendPost(postData) {
  // Если данных нет, ничего не делаем:
  if (!postData) return;

  // Храним ссылку на элемент, внутрь которого
  // добавим новые элементы-свиты:
  const main = document.querySelector('.vk__posts');

  // Используем функцию composePost,
  // она превращает данные в HTML-элемент:
  for (let i = 0; i < postData.length; i++) { 
    const postNode = composePost(postData[i]);
    // Добавляем созданный элемент в main:
    main.append(postNode);
  }

  const postCollection = document.querySelectorAll('.vk__posts li');
  postObserver.observe(postCollection[postCollection.length - 3]);
}
