// Задача 20.
// Реализовать функцию подсчета объема памяти занимаемого данными в LocalStorage для предыдущей задачи.
// При изменении данных в localStorage в консоль должен выводиться объем занятой памяти / максимальный размер хранилища.

// https://habr.com/ru/articles/500834/
export const getMemoryInfoLocalStorage = async () => { 
  if(navigator.storage && navigator.storage.estimate) {
      const quota = await navigator.storage.estimate();
    // quota.usage -> количество используемых байт
    // quota.quota -> количество доступных байт
      const percentageUsed = (quota.usage / quota.quota) * 100;
      console.log(`Вы использовали ${percentageUsed}% хранилища`);
      const remaining = quota.quota - quota.usage;
      console.log(`Вам доступно еще ${remaining} байт`);
  }
}
// getMemoryInfoLocalStorage();