
// var userAge = 21

// var bool = false

// userAge = 15 

// var a = 10
// var b = 5



// var player1 =prompt("Qva,Makrateli,Furceli")
// var player2 =prompt("Qva,Makrateli,Furceli")

// if(player1==furceli && player2==qva) 
//     console.log("winner is player1")
 
//  else if(player1==makrateli && player2==furceli)  
//     console.log("winner is player1")
 
 
 
//  else if(player1==qva && player2==makrateli)
//     console.log("winner is player1")
 
//  else if(player1=player2) 
//    console.log("draw")
 
// else 
//    console.log("winner is player2")


// var a = 20

// var b = a>10 ? "OK" : "Nope"
// var action = Number (prompt("Enter Number"))

// switch(action) {
//  case 1: 
//  console.log("You Entered:" + action)
//      break
//  case 2:
//    console.log("You Entered:" + action)
//    break
//  case 3:
//    console.log("You Entered:" + action)
//    break
//  case 4:
//    console.log("You Entered:" + action)
//    break
//  default:
//    console.log("Tqven shemoiyvanet araswori mnishvneloba")
//    break
// }

// var year = Number(prompt("Enter year"))
// var yearresult = year % 4 ==0 && (year % 100==0 || year % 400 !=0)
// console.log(yearresult)

// switch(yearresult) {
//    case true: 
//    console.log("weliwadi aris nakiani")
//    break
//    case false:
//    console.log("weliwadi ar aris nakiani")
//    break
// }



var phy = prompt("enter mark of subject (1-5):")
var chem = prompt("enter mark of subject (1-5):")
var bio = prompt("enter mark of subject (1-5):")
var math = prompt("enter mark of subject (1-5):")
var comp = prompt("enter mark of subject (1-5):")


var sum = phy + chem + bio + math + comp
var grade = sum * 100 / 25

switch(grade >=90 && grade <100)
{
   case true:
      console.log("Grade A")
      break
      false
}
switch(grade >=70 && grade <80)
      {
       case true:
      console.log("Grade B")
      break
      } 
      switch(grade >=60 && grade <70)
      {
       case true:
      console.log("Grade C")
      break
      } 
      switch(grade >=50 && grade <60)
      {
       case true:
      console.log("Grade D")
      break
      } 
      switch(grade >=40 && grade <50)
      {
       case true:
      console.log("Grade E")
      break
      case false:
         console.log("Grade F")
         break
      } 
   