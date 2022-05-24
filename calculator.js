


function do_add() {
    let firstNumber = document.getElementById('in1').value;//get the value(.value) of the element which id is in1 and assign it to variable firstNumber
    let secondNumber = document.getElementById('in2').value;//get the value(.value) of the element which id is in1 and assign it to variable secondNumber
    let sumValues = parseInt(firstNumber) + parseInt(secondNumber);//convert the value currently stored in variable firstNumber and secondNumber to integer
    let showComputation = firstNumber + "+" + secondNumber + "=" + sumValues;//add up the vlues of firstNumber, secondNumber and sumValues and then assign the total to showComputation
    let resultOfSum = document.getElementById('result').innerHTML = showComputation;//Please why do we have double equal signs on this line? Can it be separated for better understanding?
    console.log(firstNumber, "+", secondNumber, ":", showComputation);
    if (firstNumber == "") {
        alert('Hey! There exists an empty input for the first value');
        clearResult();
        return false;
    }
    if (secondNumber == "") {
        alert("Hey! second value is empty.");
        clearResult();
        return false;
    }

}
function clearResult() {
    document.getElementById('result').innerHTML = "";
}


function do_minus() {
    let x1 = document.getElementById('in1').value;
    let x2 = document.getElementById('in2').value;
    let z = parseInt(x1) - parseInt(x2);
    let z1 = 'in1' + "+" - 'in2' + "=" + z;
    let r = document.getElementById('result').innerHTML = z1;
    if (x1 == "") {
        alert('Hey! There exists an empty input for the first value');
        clearResult();
        return false;
    }
    if (x2 == "") {
        alert("Hey! second value is empty.");
        clearResult();
        return false;
    }
    console.log(x1, "+", x2, ":", z1)

}

function do_divide() {
    let x1 = document.getElementById('in1').value;
    let x2 = document.getElementById('in2').value;
    let z = parseInt(x1) / parseInt(x2);
    let z1 = 'in1' + "+" / 'in2' + "=" + z;
    let r = document.getElementById('result').innerHTML = z1;
    if (x1 == "") {
        alert('Hey! There exists an empty input for the first value');
        clearResult();
        return false;
    }
    if (x2 == "") {
        alert("Hey! second value is empty.");
        clearResult();
        return false;
    }
    console.log(x1, "+", x2, ":", z1)

}

function showImg() {
    var img = document.getElementById('calc');
    img.style.visibility = 'visible';

}
function hideImg() {
    var img = document.getElementById('calc');
    img.style.visibility = 'hidden';

}