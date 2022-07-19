//Произвольный массив а
a = [1,2,4,5,7,56,1,0,154,3,0,null,'a','string','zero',0,'0'];

function arrayElementsTypes(arr){
    //Объявляю переменные счетчики
    let zeros = 0;
    let evens = 0;
    let odds = 0;

    //Цикл перебора элементов
    arr.forEach(element => {
        //Проверка, является ли элемент вообще числом, в противном случае, он нас не интересует
        if(typeof(element) == "number"){
            //Отделяю нули, потому что ноль четный
            if(element == 0){zeros++;} else {
                //Деление на 2 с остатком, если остатка нет, значит элемент четный
                if(element % 2 == 0){evens++;} else {odds++;}
            }
        }
    })
    //Вывожу результат
    console.log('Четных: ', evens, ' Нечетных: ', odds,' Нулей: ',zeros)
}


//Вызываю функцию
arrayElementsTypes(a);