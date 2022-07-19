//Числа, которые будут сложены
var a = 255;
var b = 200;

//Функция foo принимает первое чилсло, а функция bar второе, возвращая сумму
function foo(num1){
    return function bar(num2){
        let num3 = num1+num2;
        return num3;
    }
}

//с есть функция bar
c = foo(a);

//Вывод в консоль bar(b)
console.log(c(b));