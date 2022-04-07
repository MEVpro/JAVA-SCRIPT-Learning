# JAVA-SCRIPT-Learning
- let; - [*variable*]
- var; - [*variable*]
- const; - [*constant variable (can't be changed)*]
- i++; - [*The same as "i = i + 1"*]
- i--; - [*The same as "i = i - 1"*]
- console.log( ); - [*show result in browser console*]
- %;  - [*remainder ( !ex: 17 % 2 = 1; Explanation: 17/2=8,5 take 8 and 17-(8 * 2)=1; 17=2+2+2+2+2+2+2+2+1 ! 1-это остаток от целого деления)*]
- +=; - [*означает что я прибавляю то что идет после равно*]
- -=; - [*означает что я вычитаю то что идет после равно*]
- \*=; - [*означает что умножаю на то что идет после равно*]
- /=; - [*означает что делю на то что идет после равно*]
- \\'; - [*single quote*]
- \\"; - [*double quote*]
- \\\\; - [*backslash*]
- \n; -	[*newline*]
- \r; -	[*carriage return*]
- \t; -	[*tab*]
- \b; -	[*word boundary*]
- \f; -	[*form feed*]
- +; - [*concatenation operator - суммирует строчки "..."+"..."*]
- .length - [*count the number of characters*]<
- [0] - [*указывает букву в слове с номером 0*]<br>
          const lastName = "Lovelace";<br>
          firstLetterOfLastName = lastName[0];<br>
          console.log(firstLetterOfLastName);<br>
- Array - [*диапазон значений через запятую*]<br>
- .push() - [*takes one or more parameters and "pushes" them onto the end of the array*]<br>
- .unshift() - [*takes one or more parameters and "pushes" them onto the beggining of the array*]<br>
- .pop() - [*is used to pop a value off of the end of an array*]<br>
- .shift() - [*is used to pop a value off of the beggining of an array*]<br>
- function 
- length() - function counts wtat inside breckets<br>
- pow() - function возводит в степень<br>
- Math.abs() - Эта функция возвращает абсолютное значение переданного числа.
- Math.pow() - возводящая число в какую-нибудь степень, принимает два параметра: какое число возводить и в какую степень возводить.
- Math.ceil() - function always rounds a number up to the next largest integer.
- Math.max() - находит максимальное значение среди переданных параметров
- Math.min() - находит минимальное значение среди переданных параметров
- Math.random() - возвращает случайное число от 0 до 1
- typeof  - позволяет определить тип передаваемого операнд
- .toFixed() - округление до () знака после запятой
- ().toFixed() - округление () до () знака после запятой
- .toUpperCase() - возвращает ту же строку, но преобразуя все символы в верхний регистр
- .toLowerCase() - возвращает ту же строку, но преобразуя все символы в нижний регистр
- .trim() - method removes whitespace from both ends of a string and returns a new string
- .length() - method counts length of 
- .slice() - извлекает часть строки и возвращает новую строку без изменения оригинальной строки.
----
function greet() {
  return "hello world!";
}
----
function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(1, 2)
functionWithArgs(7, 9)
----
console.log(String.fromCharCode(37));
