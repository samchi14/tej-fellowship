//display when page loads
alert('Hello TEJ!');

//on clicking say hello
function myHelloFunction(){
    alert("Hello there!");
}

//on clicking +
function myAddFunction(){
    var value = document.getElementById('number').value;
    value++;
    document.getElementById('number').value = value;
}

//on clicking -
function mySubtractFunction(){
    var value = document.getElementById('number').value;
    value--;
    document.getElementById('number').value = value;
}