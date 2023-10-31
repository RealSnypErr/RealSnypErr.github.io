var operation;
var num1;
var num2;

document.getElementById("b_1").addEventListener('click', function(){numClick("1")})
document.getElementById("b_2").addEventListener('click', function(){numClick("2")})
document.getElementById("b_3").addEventListener('click', function(){numClick("3")})
document.getElementById("b_4").addEventListener('click', function(){numClick("4")})
document.getElementById("b_5").addEventListener('click', function(){numClick("5")})
document.getElementById("b_6").addEventListener('click', function(){numClick("6")})
document.getElementById("b_7").addEventListener('click', function(){numClick("7")})
document.getElementById("b_8").addEventListener('click', function(){numClick("8")})
document.getElementById("b_9").addEventListener('click', function(){numClick("9")})
document.getElementById("b_0").addEventListener('click', function(){numClick("0")})
document.getElementById("op_add").addEventListener('click', function(){setOperation("+")})
document.getElementById("op_min").addEventListener('click', function(){setOperation("-")})
document.getElementById("op_mul").addEventListener('click', function(){setOperation("*")})
document.getElementById("op_div").addEventListener('click', function(){setOperation("/")})
document.getElementById("op_eql").addEventListener('click', function(){evaluate()})
document.getElementById("op_c").addEventListener('click', function(){document.getElementById("panel").innerHTML = 0})

function numClick(inNum){
    var cNum = document.getElementById("panel").innerHTML;
    if (cNum == 0){
        document.getElementById("panel").innerHTML = inNum;
    }
    else {
        document.getElementById("panel").innerHTML = cNum + inNum;
    }
    
}

function setOperation(op){
    num1 = document.getElementById("panel").innerHTML;
    operation = op;
    document.getElementById("panel").innerHTML = 0
}

function evaluate(){
    num2 = document.getElementById("panel").innerHTML;
    if (num2 == 0 && operation == "/"){
        result = "Error";
    }
    else {
        var result = eval(num1+operation+num2);
    }
    document.getElementById("panel").innerHTML = result.toString().substring(0,9);
}