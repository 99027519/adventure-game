function Level1() {
	console.log("Level1()");

	var opt1 = document.getElementById('button1');
	opt1.innerHTML = 'Loop verder';
	opt1.setAttribute("onClick", "javascript:Level2();");
	var opt2 = document.getElementById('button2');
	opt2.innerHTML = 'Ga terug naar huis';
	opt2.setAttribute("onClick", "javascript:Level6();");
	var opt3 = document.getElementById('button3');
	opt3.style.display = "inline-block";
	opt3.setAttribute("onClick", "javascript:Level7();");
	opt3.innerHTML = 'Zet je tent op';
	opt3.onClick = function(){
	}

	document.getElementById('level_title').innerHTML = 'level 1';
	document.getElementById('level_image').src = 'level1.jpg';
}

function Level2() {
	console.log("Level2()");

	var opt1 = document.getElementById('button1');
	opt1.innerHTML = 'Loop er naar toe';
	opt1.setAttribute("onClick", "javascript:Level3();");
	var opt1 = document.getElementById('button2');
	opt1.innerHTML = 'Ga terug naar huis';
	opt1.setAttribute("onClick", "javascript:Level6();");
	var opt3 = document.getElementById('button3');
	opt3.style.display = "none";
	opt3.innerHTML = 'Zet je tent op';
	opt3.onClick = function(){
		}
	var opt4 = document.getElementById('button4');
	opt4.style.display = "none";
	opt4.onClick = function(){
		}

	document.getElementById('level_title').innerHTML = 'level 2';
	document.getElementById('level_image').src = 'level2.jpg';
	document.getElementById('level_image2').style.display = "none";
}

function Level3() {
	console.log("Level3()");

	var opt1 = document.getElementById('button1');
	opt1.innerHTML = 'Schiet hem kapot!';
	opt1.setAttribute("onClick", "javascript:Level4();");
	var opt1 = document.getElementById('button2');
	opt1.innerHTML = 'Ren weg';
	opt1.setAttribute("onClick", "javascript:Level5();");

	document.getElementById('level_title').innerHTML = 'level 3';
	document.getElementById('level_image').src = 'level3.jpg';
	document.getElementById('level_image2').style.display = "none";
}

function Level4() {
	console.log("Level4()");

	var opt1 = document.getElementById('button1');
	opt1.innerHTML = 'Schiet';
	opt1.setAttribute("onClick", "javascript:Level9();");
	var opt2 = document.getElementById('button2');
	opt2.style.display = "none";
	opt2.innerHTML = 'Zet je tent op';
	opt2.onClick = function(){
			Level4();
		}

	document.getElementById('level_title').innerHTML = 'level 4';
	document.getElementById('level_image').src = 'level3.jpg';
	document.getElementById('level_image3').style.display = "block";
	document.getElementById('level_image2').style.display = "none";
}

function Level5() {
	console.log("Level5()");

	var opt1 = document.getElementById('button1');
	opt1.innerHTML = 'Je bent dood!';
	opt1.setAttribute("onClick", "javascript:Level100();");
	var opt2 = document.getElementById('button2');
	opt2.style.display = "none";
	opt2.innerHTML = 'Zet je tent op';
	opt2.onClick = function(){
			Level4();
		}
	document.getElementById('level_title').innerHTML = 'level 5';
	document.getElementById('level_image').src = 'level5.jpg';
	document.getElementById('level_image2').style.display = "none";
}

function Level6() {
	console.log("Level6()");

	var opt1 = document.getElementById('button1');
	opt1.innerHTML = 'Je bent veilig thuis!';
	opt1.setAttribute("onClick", "javascript:Level100();");
	var opt2 = document.getElementById('button2');
	opt2.style.display = "none";
	opt2.innerHTML = 'Zet je tent op';
	opt2.onClick = function(){
			Level4();
		}
		var opt3 = document.getElementById('button3');
	opt3.style.display = "none";
	opt3.innerHTML = 'Zet je tent op';
	opt3.onClick = function(){
			Level4();
		}
	document.getElementById('level_title').innerHTML = 'level 6';
	document.getElementById('level_image').src = 'level6.jpg';
	document.getElementById('level_image2').style.display = "none";
}

function Level7() {
	console.log("Level7()");

	var opt1 = document.getElementById('button1');
	opt1.innerHTML = 'Loop verder';
	opt1.setAttribute("onClick", "javascript:Level2();");
	var opt2 = document.getElementById('button2');
	opt2.style.display = "inline-block";
	opt2.setAttribute("onClick", "javascript:Level8();");
	opt2.innerHTML = 'Ga je tent in';
	opt2.onClick = function(){

		}
	var opt3 = document.getElementById('button3');
	opt3.style.display = "none";
	opt3.innerHTML = 'Zet je tent op';
	opt3.onClick = function(){
			Level4();
		}
	document.getElementById('level_title').innerHTML = 'level 7';
	document.getElementById('level_image').src = 'level1.jpg';
	document.getElementById('level_image2').style.display = "block";
}

function Level8() {
	console.log("Level8()");

	var opt1 = document.getElementById('button1');
	opt1.innerHTML = 'Je bent dood!';
	opt1.setAttribute("onClick", "javascript:Level100();");
	var opt2 = document.getElementById('button2');
	opt2.style.display = "none";
	opt2.innerHTML = 'Zet je tent op';
	opt2.onClick = function(){
			Level4();
		}
		var opt3 = document.getElementById('button3');
	opt3.style.display = "none";
	opt3.innerHTML = 'Zet je tent op';
	opt3.onClick = function(){
			Level4();
		}
	document.getElementById('level_title').innerHTML = 'level 8';
	document.getElementById('level_image').src = 'Einde2.jpg';
	document.getElementById('level_image2').style.display = "none";
}

function Level9() {
	console.log("Level9()");

	var opt1 = document.getElementById('button1');
	opt1.innerHTML = 'Ga verder';
	opt1.setAttribute("onClick", "javascript:Level10();");
	var opt2 = document.getElementById('button2');
	opt2.style.display = "none";
	opt2.innerHTML = 'Vil de beer';
	opt2.setAttribute("onClick", "javascript:Level8();");
	var opt3 = document.getElementById('button3');
	opt3.style.display = "none";
	opt3.innerHTML = 'Zet je tent op';
	opt3.onClick = function(){
			Level4();
		}
	document.getElementById('level_title').innerHTML = 'level 9';
	document.getElementById('level_image').src = 'Level9.jpg';
	document.getElementById('level_image3').style.display = "none";
	document.getElementById('level_image2').style.display = "none";
}

function Level10() {
	console.log("Level10()");

	var opt1 = document.getElementById('button1');
	opt1.innerHTML = 'Loop er naar toe';
	opt1.setAttribute("onClick", "javascript:Level11();");
	var opt2 = document.getElementById('button2');
	opt2.style.display = "inline-block";
	opt2.innerHTML = 'Doorlopen';
	opt2.setAttribute("onClick", "javascript:Level12();");
	var opt3 = document.getElementById('button3');
	opt3.style.display = "none";
	opt3.innerHTML = 'Zet je tent op';
	opt3.onClick = function(){
			Level4();
		}
	document.getElementById('level_title').innerHTML = 'level 10';
	document.getElementById('level_image').src = 'Level10.jpg';
}

function Level11() {
	console.log("Level11()");

	var opt1 = document.getElementById('button1');
	opt1.style.display = "none";
	opt1.innerHTML = 'Loop er naar toe';
	opt1.setAttribute("onClick", "javascript:Level11();");
	var opt2 = document.getElementById('button2');
	opt2.style.display = "none";
	opt2.innerHTML = 'Doorlopen';
	opt2.setAttribute("onClick", "javascript:Level12();");
	var opt3 = document.getElementById('button3');
	opt3.style.display = "none";
	opt3.innerHTML = 'Zet je tent op';
	opt3.onClick = function(){
			Level4();
		}
	var opt4 = document.getElementById('button4');
	opt4.style.display = "inline-block";
	opt4.setAttribute("onClick", "javascript:Level13();");
	document.getElementById('level_title').innerHTML = 'level 11';
	document.getElementById('level_image').src = 'Level11.jpg';
}

function Level13() {
	console.log("Level13()");

	var opt1 = document.getElementById('button1');
	opt1.style.display = "none";
	opt1.innerHTML = 'Loop er naar toe';
	opt1.setAttribute("onClick", "javascript:Level11();");
	var opt2 = document.getElementById('button2');
	opt2.style.display = "none";
	opt2.innerHTML = 'Doorlopen';
	opt2.setAttribute("onClick", "javascript:Level12();");
	var opt3 = document.getElementById('button3');
	opt3.style.display = "none";
	opt3.innerHTML = 'Zet je tent op';
	opt3.onClick = function(){
			Level4();
		}
	var opt4 = document.getElementById('button4');
	opt4.style.display = "none";
	opt4.setAttribute("onClick", "javascript:Level13();");
	var opt5 = document.getElementById('button4');
	opt5.style.display = "none";
	opt5.setAttribute("onClick", "javascript:Level13();");
	document.getElementById('level_title').innerHTML = 'level 13';
	document.getElementById('level_image').src = 'Level13.jpg';
}

