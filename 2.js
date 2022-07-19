// Переменная a - вход. Можно использовать и prompt(), но он не работает на nodejs в VSCode
a = 999;

function isPrimeNumber(num){
    //Проверка, не является ли число нулем или единицей
    if ((num == 1) || (num == 0)){return "0 и 1 не являются составными числами";}
    //Проверка, не больше ли число, чем тысяча
    if(num >1000) {return "Число больше 1000";}
    //Цикл деления
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {return false;}
    }
    return true;  
}

console.log(isPrimeNumber(a));