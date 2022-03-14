// alert();
		// document.write();
		// console.log();
		// prompt();
		// switch();

		/************Первое занятие***************/
/*	var value = 3;
		while (value < 10){
		document.write (value);
		value = value + 1;
	}
		document.write ("<br>wrong<br>");
*/


/*		var value = 3;
		while (value < 5){
		alert (value);
		value = value + 1;
	}
		alert ("wrong");
*/
	 /************Второе занятие***************/

/*		var price = 20;
		var discont = 25;
		var total = price - (price * (discont / 100));
			alert(total);
*/
/*		var name = "Evgeny";
		var secondName = "Mitin";
		var myString = name + secondName; //операция конкатенации [только строки]
			alert(myString);
*/
/*		var number = 11;
		while(number > 0){
			document.write("Numder больше нуля<br>");   // while, for, for in, forEach
			number = number - 1;
		}
			document.write("Numder меньше нуля");
*/
	/************Третье занятие***************/

/*		var name = prompt("Введите ваше имя");
		alert("Hello! " + name);
		if (name == "Evgeny") {
			alert("Hello! Крассавчик")
		} else {
			alert ("Пошел вон")
		}
		
		console.log('Hello! Evgeny');
*/

/*		var age = prompt("Сколько Вам лет?");
				if(age <= 12){
					alert('Ты младенец!')
		} else  if(age <= 17){
					alert('Ты подросток!')
		} else  if(age <= 30){
					alert('Ты в расцвеце сил!')
		} else  if(age <= 45){
					alert('Пора садить дерево и растить сына!')
		} else  if(age >= 60){
					alert('Тебе скоро на пенсию!')
		}
*/


	/************Четвертое занятие***************/

/*		var x = prompt ('Insert first namber');
		var y = prompt ('Insert second namber');
		var z = prompt ('Insert 1 for "+", Insert 2 for "-", Insert 3 for "*", Insert 4 for "/"');
		var result;

		var x = parseInt(x); // - используются только числовые значения "x"
		var y = parseInt(y);

		switch(z) {
			case '1': result= x+y;
				break;
			case '2': result= x-y;
				break;
			case '3': result= x*y;
				break;
			case '4': result= x/y;
				break;
			default: result= 'Wrong Insert!';
		}
		alert(result);
*/


						/*****домашка четвертого занятия********/

				/*		var x = prompt ('Insert first namber');
						var y = prompt ('Insert second namber');
						var z = prompt ('Insert 1 for "+", Insert 2 for "-", Insert 3 for "*", Insert 4 for "/"');
						var result;

						var x = parseInt(x); // - используются только числовые значения "x"
						var y = parseInt(y);

								if(z==1){
									alert(result= x+y);
						} else  if(z==2){
									alert(result= x-y);
						} else  if(z==3){
									alert(result= x*y);
						} else  if(z==4){
									alert(result= x/y);
						} else  if(z>4){
									alert(result= 'Wrong Insert!');
						}  else  if(z<1){
									alert(result= 'Wrong Insert!');
					    }
				*/

				/***************НЕ ДОДЕЛАНАЯ ДОМАШКА**********ГДЕ ОШИБКА?*/
				/*		var age = prompt("Сколько Вам лет?");
						var result;


						// 		if(age <= 12){
						// 			alert('Ты младенец!')
						// } else  if(age <= 17){
						// 			alert('Ты подросток!')
						// } else  if(age <= 30){
						// 			alert('Ты в расцвеце сил!')
						// } else  if(age <= 45){
						// 			alert('Пора садить дерево и растить сына!')
						// } else  if(age >= 60){
						// 			alert('Тебе скоро на пенсию!')
						// }


						switch(age){
							case 'age <= 12': result = 'Ты младенец!';
								break;
							case 'age <= 17': result = 'Ты подросток!';
								break;
							case 'age <= 30': result = 'Ты в расцвеце сил!';
								break;
							case 'age <= 45': result = 'Пора садить дерево и растить сына!';
								break;
							case 'age >= 60': result = 'Тебе скоро на пенсию!';
								break;
						}
							alert(result);
				*/

	/************Седьмое*****занятие***************/
	

/*	var studentName = 'Nick';
	var age = 23;

		if (age > 17){
			console.log(studentName + ' Уже окончил школу');
		} else {
			console.log(studentName + ' еще учится в школе');
		}
	var studentName = 'Mike';
	var age = 13;

		if (age > 17){
			console.log(studentName + ' Уже окончил школу');
		} else {
			console.log(studentName + ' еще учится в школе');
		}
	var studentName = 'Kate';
	var age = 53;

		if (age > 17){
			console.log(studentName + ' Уже окончил школу');
		} else {
			console.log(studentName + ' еще учится в школе');
		}
	var studentName = 'Pit';
	var age = 17;

		if (age > 17){
			console.log(studentName + ' Уже окончил школу');
		} else {
			console.log(studentName + ' еще учится в школе');
		}
*/

	// Упрощение кода с помощью фунции 
 
/*	function checkStudent(name, age){
		if (age > 17){
			console.log(name + ' Уже окончил школу');
		} else {
			console.log(name + ' еще учится в школе');
		}
	}

	checkStudent('Nick', 23);
	checkStudent('Mike', 13);
	checkStudent('Kate', 53);
	checkStudent('Pit', 17);

	alert(checkStudent);
*/
	// Функция "return"

/*	function checkage(age){
		var message;

		if (age < 10){
			message = 'Ты ребенок';
		} else if (age < 20 && age > 10){
			message = 'Ты подросток';
		} else {
			message = 'Ты взрослый человек';
		}
		return message;
	}
	var status = checkage(41);
	console.log(status);
*/

	/************Восьмое*****занятие*******Массивы********/

/*	var scores = [60, 50, 60, 58, 54, 54, 58, 50, 50, 54];
	var solution = scores[1];
	alert(solution);

	var rows = ['vanilla', 'latte', 'chocolate'];
	alert(rows[1]) // вывод элемента массива по индексу
	rows[1] = true; // замена элемента масива по индексу
	var numRows = rows.length; // подсчет колличества элементов в массиве
	
	function makePhrases(){
		var phrase1 = ['24/7', 'Каждый день', 'Сегодны', 'Постоянно', 'Непрерывно'];
		var phrase2 = ['мы', 'команда', 'компания', 'сотрудники', 'персонал'];
		var phrase3 = ['работаем не покладая рук', 'отдыхаем на работе', 'делаем чудеса'];

		var random1 = Math.floor(Math.random() * phrase1.length);
		var random2 = Math.floor(Math.random() * phrase2.length);
		var random3 = Math.floor(Math.random() * phrase3.length);

		var Phrase = phrase1[random1] + ' ' + phrase2[random2] + ' ' + phrase3[random3];
		alert(Phrase);
	}
	makePhrases();
*/	

	/************Девятое*****занятие*****Цикл FOR********/

	//Пример while
	var i = 0
	while(i < 4){
		output = i;
		console.log(output);
		i = i + 1;               // i++ = i=i+1 - сокращенная запись
	}							// i-- = i=i-1 - сокращенная запись

	//Пример for
	for(var i = 0; i < 4; i = i + 1){
		output = i;
		console.log(output);
	}


	/************Десятое*****занятие*************Объект**Свойство**Значение********/

	var cadi = {
		made: 'cadillac',  //  свойства перечисляются через запятую
		model: 'GM',
		year: 1955,
		color: 'yellow',
		passengers: 2,
		convertible: true,
		mile: 12878   //  в конце запятая не ставится
	};

	var newObj = {};   // Пустой объект

	alarm (codi.model) // Пример обращения к свойству объекта

	delete cadi.year;   // удаление свойства объекта

	cadi.color = 'red'; // замена значения свойства

	cadi.state = 'new'; // добавление нового свойства и его значения




