/*
CS1371 final project done by Angad Daryani
Instructor: Kantwon Rogers
Assigned Recitation: A03
Attended Recitation: D05
Programed between 24th-26th November 2017
*/

function calculate() {
	var testWeight = document.getElementById("w1").value;
    var testScore = document.getElementById("s1").value;
    var hwkWeight = document.getElementById("w2").value;
    var hwkScore = document.getElementById("s2").value;
    var quizWeight = document.getElementById("w3").value;
    var quizScore = document.getElementById("s3").value;
    var classWeight = document.getElementById("w4").value;
    var classScore = document.getElementById("s4").value;
    var extraWeight = document.getElementById("w5").value;
    var extraScore = document.getElementById("s5").value;
    var finalWeight = document.getElementById("w6").value;
    var desiredScore = document.getElementById("s6").value;


    /*
     getting the raw values
    */
    var test_raw = parseInt(testScore)*(parseInt(testWeight)/100);
    var hwk_raw = parseInt(hwkScore)*(parseInt(hwkWeight)/100);
    var quiz_raw = parseInt(quizScore)*(parseInt(quizWeight)/100);
    var cp_raw = parseInt(classScore)*(parseInt(classWeight)/100);
    var extra_raw = parseInt(extraScore)*(parseInt(extraWeight)/100); 

    var scoreNeeded = (parseInt(desiredScore) - test_raw - hwk_raw - quiz_raw - cp_raw - extra_raw)/(parseInt(finalWeight)/100);
    
    if (scoreNeeded>100)
    	document.getElementById('result').innerHTML = "You unfortunately cannot score that grade. Don't be disappointed. You have so many more semesters to prove yourself!";
    else
    		document.getElementById('result').innerHTML = "You need a " + scoreNeeded + " to get a " + parseInt(desiredScore) + " in the class";
};

function autoload() {
	// get url
	var url = "http://cs1371.gatech.edu/getClassInfo/?class=" + document.getElementById("classesList").value;
	console.log(url);

	// We initiate a GET request to the REST API
	var xhr = new XMLHttpRequest();

	// We define which URL to hit for getting the data
	xhr.open("GET", url, false);
	xhr.send();

	// .status should return 200, meaning that the REST API is working well and URL is valid
	console.log(xhr.status);

	// We recieve the data from the url (aka. response) and parse the JSON 
	var response = JSON.parse(xhr.response);

	// Now you can extract whatever you want form the response
	var test = response['test']; // This is the weight for test
	(document.getElementById('w1')).value = test;

	var hw = response['homework']; // This is the weight for homework
	(document.getElementById('w2')).value = hw;

	var qz = response['quiz']; // This is the weight for quiz
	(document.getElementById('w3')).value = qz;

	var cp = response['class_participation']; // This is the weight for class participation
	(document.getElementById('w4')).value = cp;

	var fe = response['final_exam']; // This is the weight for final exam
	(document.getElementById('w6')).value = fe;
};
