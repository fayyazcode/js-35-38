//Q1

// function date() {
//    var dateToday = new Date()
//    document.write(dateToday)
// }
// date()

//Q2

// function user() {
//     var firstName=   prompt("Enter your first name")
//     var lastName=   prompt("Enter your Last name")
//     var fullName=firstName+ " "+lastName
//     document.write("Hello "+fullName)
//    }
//    user()

//Q3
// var first=+prompt("First number")
// var second=+prompt("Second number")
// function add(a,b) {
//     var plus=(a+b)
//    document.write(plus)
// }

// add(first,second)


//Q4

// var first=+prompt("First number")
// var operator=prompt("Enter operator")
// var second=+prompt("Second number")
// var res;
// function calc() {
//     if(operator=="+"){
//         res=(first+second)
//     }
//     else if(operator=="-"){
//         res=(first-second)
//     }
//     else if(operator=="*"){
//         res=(first*second)
//     }
//     else if(operator=="/"){
//         res=(first/second)
//     }
//     else{
//         document.write("Invalid input")
//     }
//     document.write(res)
// }
// calc()

//Q5
// var res;
// function square(a) {
//     res=a*a
//     document.write(res)
// }
// var num=+prompt("Enter Number to get squareroot")
// square(num)


//Q6
// var num=+prompt("Enter a number for factorial")
// var res=1;
// function fact(a) {
//     for(var i=1;i<=num;i++){
//         res=res*i
//     }
//     document.write(res)
    
// }
// fact()

//Q7

// var first=+prompt("First number")

// var last=+prompt("Last number")
// function num(){
// if(first<last){
//     for(var i=first;i<=last;i++){
//         var res=i
//         document.write(i+" ")
//     }
// }
// else if(last<first){
//     for(var i=first;i>=last;i--){
//         var res=i
//         document.write(i+" ")
//     }
// }
// else{
//     alert("invalid input")
// }
// }
// num()

//Q8

// var base=+prompt("Enter Base")

// var perp=+prompt("Enter Perpendicular")
// var hypo;
// var res;
// function first(){

//     function inner(){
//         hypo=((base*base)+(perp*perp))
//     }
//     inner()
//      res = Math.sqrt(hypo);
//     document.write(res)
// }

// first()


//Q9

// var first=+prompt("Enter Length ")

// var second=+prompt("Enter Height ")
// var res;
// function area(a,b){
//     res=(a*b)
//     document.write("area or rectangle is : "+res)
// }
// area(first,second)

//Q10
// var string=prompt("Enter a  word to check if it is palindrome")
// var stringRev = string.split('').reverse().join('');
// if(string === stringRev){
//     document.write("Its palindrome")
// }
// else if(string !== stringRev){
//     document.write("Its not palindrome")
// }
// else{"invalid input"}