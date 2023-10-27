// Задача 24.
// Разработайте страницу, отображающую таблицу с данными.
// Требования:
// данные должны загружаться при загрузке страницы;
// необходимо реализовать сортировку по убыванию и по возрастания для всех колонок;
// необходимо реализовать клиентскую пагинацию (50 элементов на странице);
const link = 'http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true'

const backButton = document.querySelector('.back-button');
const forwardButton = document.querySelector('.forward-button');
const loadingNode = document.querySelector('.loading');
const tableNode = document.querySelector('table');

let sortDefaultMethod = 'default';
let count = 0;

const createElement = (parentNode, content) => { // создание ячейки
    const element = document.createElement('td');
    element.textContent = content;
    parentNode.appendChild(element);
}

const createElements = (data) => { 
    const tableNode = document.querySelector('.table');
    tableNode.innerHTML = '';

    for (let i = 0; i < data.length; i++) { 
        const tr = document.createElement('tr');

        createElement(tr, data[i].fname);
        createElement(tr, data[i].lname);
        createElement(tr, data[i].tel);
        createElement(tr, data[i].address);
        createElement(tr, data[i].city);
        createElement(tr, data[i].state);
        createElement(tr, data[i].zip);

        tableNode.appendChild(tr);
    }
}

const getData = async () => { 
    try {
        loadingNode.style.display = 'block';
        tableNode.style.opacity = '0';

        const response = await fetch(link);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error);
    } finally { 
        loadingNode.style.display = 'none';
        tableNode.style.opacity = '1';
    }
}

const prepareDataForTable = async (sortColumn, sortMethod) => {
    const data = await getData();
    
    if (sortMethod === 'default') {
        createElements(data.slice(count, count + 50));
    } else if (sortMethod === 'asc') {
        const sortedData = data.sort((a, b) => {
            if (a[sortColumn] < b[sortColumn]) {
                return -1;
            } else if (a[sortColumn] > b[sortColumn]) {
                return 1;
            } else {
                return 0;
            }
        });
        createElements(sortedData.slice(count, count + 50));
    } else { 
        const sortedData = data.sort((a, b) => {
            if (a[sortColumn] > b[sortColumn]) {
                return -1;
            } else if (a[sortColumn] < b[sortColumn]) {
                return 1;
            } else {
                return 0;
            }
        });
        createElements(sortedData.slice(count, count + 50));
    }
}

prepareDataForTable('', sortDefaultMethod);

backButton.addEventListener('click', () => { 
    if (!backButton.disabled) { 
        count -= 50;
        prepareDataForTable('', sortDefaultMethod);
    }

    if (count === 0) {
        backButton.disabled = true;
    } else { 
        backButton.disabled = false;
    }
});

forwardButton.addEventListener('click', () => { 
    count += 50;
    prepareDataForTable('', sortDefaultMethod);
    backButton.disabled = false;
});

tableNode.addEventListener('click', (e) => {
    const elementNode = e.target;
    if (!!elementNode.getAttribute('data-sort-field')) { 
        const sortColumn = elementNode.getAttribute('data-sort-field');
        const sortMethod = elementNode.getAttribute('data-method');

        elementNode.dataset.method = 'desc';
        if (sortMethod === 'default') {
            elementNode.dataset.method = 'asc';
            prepareDataForTable(sortColumn, 'asc');
        } else if (sortMethod === 'asc') {
            elementNode.dataset.method = 'desc';
            prepareDataForTable(sortColumn, 'desc');
        } else { 
            elementNode.dataset.method = 'default';
            prepareDataForTable(sortColumn, 'default');
        }
    }
});
