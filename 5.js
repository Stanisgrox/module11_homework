//Входные числа x и n
var x = 8;
var n = 2;

/*
const numberPower = (num, pow) => {
    result = Math.pow(num,pow);
    console.log(result);
};
*/

const numberPower = (num, pow) => {
    //Установка результата на 1, чтобы избежать умножения на ноль.
    let result = 1;
    //Любое число в 0 степени дает 1
    if (pow == 0){
        console.log(result);
        return;}
    //Подсчет степени
    for (let i = 1; i < n+1; i++) {
        result = result*num;
    }
    //Вывод результата
    console.log(result);
};


numberPower(x,n);