window.onload = mySubmit;

function mySubmit(){
	var oClass = document.getElementById('myclass');
	var oSno = document.getElementById('sno');
	var oName = document.getElementById('name');
	var oSubmit = document.getElementById('submit');
	oSubmit.onclick=function(){
		if (!oClass.value) {
			alert("班级不能为空");
		}
		else if (!oSno.value) {
			alert("学号不能为空");
		}
		else if (!oName.value) {
			alert("姓名不能为空");
		}
		else{
			countScores();
		}
	}
}

function countScores(){
	var scores = 0;
	var oExercise1_1 = document.getElementById('exercise1_1');
	var oExercise1_2_1 = document.getElementById('exercise1_2_1');
	var oExercise1_2_2 = document.getElementById('exercise1_2_2');
	var oExercise1_2_3 = document.getElementById('exercise1_2_3');
	var oExercise2_1 = document.getElementById('result2_1');
	var oExercise2_2 = document.getElementById('result2_2');
	var oExercise3_1_1 = document.getElementById('result3_1_1');
	var oExercise3_1_2 = document.getElementById('result3_1_2');
	var oExercise3_1_3 = document.getElementById('result3_1_3');
	var oExercise3_2_1 = document.getElementById('result3_2_1');
	var oExercise3_2_2 = document.getElementById('result3_2_2');
	var oExercise3_2_3 = document.getElementById('result3_2_3');
	var oExercise4_1 = document.getElementById('result4_1');
	var oExercise4_2 = document.getElementById('result4_2');
	if (oExercise1_1.value === '统一建模语言') {
		scores += 15;
	}
	if (oExercise1_2_1.value === '封装') {
		scores += 5;
	}
	if (oExercise1_2_2.value === '继承') {
		scores += 5;
	}
	if (oExercise1_2_3.value === '多态') {
		scores += 5;
	}
	if (oExercise2_1.checked === true) {
		scores += 10;
	}
	if (oExercise2_2.checked === true) {
		scores += 10;
	}
	if (oExercise3_1_1.checked === true &&  oExercise3_1_2.checked === true && oExercise3_1_3.checked === true) {
		scores += 15;
	}
	if (oExercise3_2_1.checked === true &&  oExercise3_2_2.checked === true && oExercise3_2_3.checked === true) {
		scores += 15;
	}
	if (oExercise4_1.checked === true) {
		scores += 10;
	}
	if (oExercise4_2.checked === true) {
		scores += 10;
	}
	var myScores = document.getElementById('scores');
	myScores.value = scores;
}
