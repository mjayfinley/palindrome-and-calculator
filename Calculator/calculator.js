var firstNumberTextBox = document.getElementById("firstNumberTextBox")
var secondNumberTextBox = document.getElementById("secondNumberTextBox")
var operand = ""
var addButton = document.getElementById("addButton")
var subtractButton = document.getElementById("subtractButton")
var multiplyButton = document.getElementById("multiplyButton")
var divideButton = document.getElementById("divideButton")
var equalButton = document.getElementById("equalButton")
var clearButton = document.getElementById("clearButton")
var h2 = document.getElementById("heading2")

addButton.addEventListener('click',function(){
  operand = "+"
})

subtractButton.addEventListener('click',function(){
  operand = "-"
})

multiplyButton.addEventListener('click',function(){
  operand = "*"
})

divideButton.addEventListener('click',function(){
  operand = "/"
})

equalButton.addEventListener('click',function(){
   if(operand == "+") {
     h2.innerHTML = parseInt(firstNumberTextBox.value) + parseInt(secondNumberTextBox.value)
     firstNumberTextBox.value = ""
     secondNumberTextBox.value = ""
   } else if(operand == "-") {
     h2.innerHTML = parseInt(firstNumberTextBox.value) - parseInt(secondNumberTextBox.value)
     firstNumberTextBox.value = ""
     secondNumberTextBox.value = ""
   }else if(operand == "*") {
     h2.innerHTML = parseInt(firstNumberTextBox.value) * parseInt(secondNumberTextBox.value)
     firstNumberTextBox.value = ""
     secondNumberTextBox.value = ""
   }else if(operand == "/") {
     h2.innerHTML = parseInt(firstNumberTextBox.value) / parseInt(secondNumberTextBox.value)
     firstNumberTextBox.value = ""
     secondNumberTextBox.value = ""
   }
})

clearButton.addEventListener('click',function(){
  firstNumberTextBox.value = ""
  secondNumberTextBox.value = ""
})
