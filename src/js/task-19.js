// import { getMemoryInfoLocalStorage } from './task-20';

// Задача 19.
// Реализовать виджет, отображающий список постов из любого паблика в VK(подойдет любой паблик, где постов очень много).
// Например, с помощью этой функции API VK.Виджет должен иметь фиксированные размеры и возможность прокрутки.
// При прокрутке содержимого виджета до конца должны подгружаться новые посты.
// Необходимо реализовать возможность кэширования уже загруженных данных: если пользователь закрыл страницу,
// а потом снова открыл ее, виджет должен отображать все загруженные ранее данные
// (новые данные должны подгружаться из учетом уже загруженных ранее).
// При переполнении localStorage, данные, загруженные последними должны вытеснять данные загруженные первыми.

// 139923997
// getMemoryInfoLocalStorage();

const access_token = '0d59f4db0d59f4db0d59f4db2e0e4ffd9800d590d59f4db686a475e9cc18a0a20b2636a';
// https://api.vk.com/method/wall.get?owner_id=-139923997&access_token=0d59f4db0d59f4db0d59f4db2e0e4ffd9800d590d59f4db686a475e9cc18a0a20b2636a&v=5.131&count=1
let count = 0;

const createItemNode = (item) => { 
    // console.log(item);
    const photo = item.photoInfo.photo;
    const listNode = document.querySelector('.vk__posts');

    const li = document.createElement('li');

    if (!!item.text) { 
        const text = document.createElement('p');
        text.textContent = item.text;
        li.appendChild(text);
    }

    if (photo) { 
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = photo.url;
        img.style.width = photo.width + 'px';
        img.style.height = photo.height + 'px';

        div.append(img);

        li.appendChild(div);
    }

    listNode.append(li);
}

const getPosts = async () => { 
    try {
        const response = await fetch(`https://api.vk.com/method/wall.get?owner_id=-139923997&access_token=${access_token}&v=5.131&count=10`);
        const data = await response.json();
        // console.log(data.response.items);
        count = data.response.count;

      const newData = data.response.items.reduce((acc, el) => { 
        // const photo = el.attachments.find((el) => el.type === 'photo') || undefined;
        // console.log(!!photo.photo.sizes);

        const newItem = {
            id: el.id,
            text: el.text,
            likesCount: el.likes.count,
            commentsCount: el.comments.count,
            // photoInfo: {
            //   photo: !!photo.photo &&  photo.photo.sizes.find((el) => el.type === 'x') || null,
            //     id: el.attachments[0].photo.id,
            //     postId: el.attachments[0].photo.post_id,
            // },
        };
          
        return [...acc, newItem];
      },[]);
        // window.localStorage.setItem('posts', JSON.stringify(newData));
        // console.log(newData);

        // newData.forEach(elem => createItemNode(elem));
      return newData;
    } catch (error) {
        throw new Error(error);
    }
}

// const response = await getPosts();
// console.log(response);

async function checkPosition() {
  // Нам потребуется знать высоту документа и высоту экрана:
    const height = document.body.offsetHeight;
    const screenHeight = window.innerHeight;

  // Они могут отличаться: если на странице много контента,
  // высота документа будет больше высоты экрана (отсюда и скролл).

  // Записываем, сколько пикселей пользователь уже проскроллил:
    const scrolled = window.scrollY;

  // Обозначим порог, по приближении к которому
  // будем вызывать какое-то действие.
  // В нашем случае — четверть экрана до конца страницы:
    const threshold = height - screenHeight / 4;

  // Отслеживаем, где находится низ экрана относительно страницы:
    const position = scrolled + screenHeight;

    if (position >= threshold) {
      // Если мы пересекли полосу-порог, вызываем нужное действие.
        await getPosts();
    }
}

function throttle(callee, timeout) {
  let timer = null

  return function perform(...args) {
    if (timer) return

    timer = setTimeout(() => {
      callee(...args)

      clearTimeout(timer)
      timer = null
    }, timeout)
  }
}

;(() => {
  window.addEventListener('scroll', throttle(checkPosition, 250))
  window.addEventListener('resize', throttle(checkPosition, 250))
})()


async function fetchPosts() {
    const response = await getPosts();
    console.log('response', response);
}

function composePost(postData) {
  // Если ничего не передано, ничего не возвращаем:
  if (!postData) return

  // Обращаемся к шаблону, который создали ранее:
  const template = document.getElementById('post_template')

  // ...и вытаскиваем его содержимое.
  // В нашем случае содержимым будет «скелет» свита, элемент article.
  // Указываем, что нам необходимо его склонировать, а не использовать сам элемент,
  // иначе он изменится сам, и мы не сможем сделать несколько свитов:
  const post = template.content.cloneNode(true)

  // Из postData получаем всю необходимую информацию:
  const { title, body, likes, reposts } = postData

  // Добавляем соответствующие тексты и числа в нужные места в «скелете»:
  post.querySelector('h1').innerText = title
  post.querySelector('p').innerText = body
  post.querySelector('button:first-child').innerText += likes
  post.querySelector('button:last-child').innerText += reposts

  // Возвращаем созданный элемент,
  // чтобы его можно было добавить на страницу:
  return post
}


function appendPost(postData) {
  // Если данных нет, ничего не делаем:
  if (!postData) return

  // Храним ссылку на элемент, внутрь которого
  // добавим новые элементы-свиты:
  const main = document.querySelector('.vk__posts')

  // Используем функцию composePost,
  // которую напишем чуть позже —
  // она превращает данные в HTML-элемент:
  const postNode = composePost(postData)

  // Добавляем созданный элемент в main:
  main.append(postNode)
}
