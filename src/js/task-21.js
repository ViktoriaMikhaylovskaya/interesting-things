// Задача 21. Вычислить размер коллстэка в основных браузерах: Chrome, Firefox, Opera и Safari (если есть возможность).

const maxCallstackSize = () => {
    let i = 0;

    const startDoomsday = () => {
        try {
            i++;
            startDoomsday();
        } catch(e) {
            console.error(e);
        }
    }


    startDoomsday();
    return i;
}

// console.log(maxCallstackSize()); // i = 9648
