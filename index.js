var readlineSync = require("readline-sync")
console.log("-----WELCOME TO BASED QUIZ-----")

var username = prompt("Write your username to begin game: ")
console.log("Welcome " + username + " !!")
console.log("------------------------------")

questionOne = {
  question: "What's common bw dark humour and food? ",
  a: "Both are made by women",
  b: "Not everyone gets it",
  c: "Salt",
  d: "None of the above",
  answer: "b"
}
questionTwo = {
  question: "What will you say to a guy who invented zero? ",
  a: "My bank balance is empty because of you",
  b: "Nothing",
  c: "Thank you",
  d: "Get a life ",
  answer: "B"
}
questionThree = {
  question: "Why should you never trust stairs? ",
  a: "Because there's water spilled on them",
  b: "Because they're prone to cheating",
  c: "Because they're always upto something",
  d: "We should trust them idk",
  answer: "C"
}
questionFour = {
  question: "Why are ants immune to covid? ",
  a: "Because they listen to modji",
  b: "Because they have been vaccinated already",
  c: "Because they have enough food for winters",
  d: "Because they have small anty-bodies",
  answer: "D"
}
questionFive = {
  question: "What should you say to the family of a kid who is kidnapped? ",
  a: "My deepest condolences",
  b: "Let him go",
  c: "Do you have some sugar?",
  d: "Wake him up",
  answer: "D"
}
questionSix = {
  question: "Helen Keller walks into a bar and then ",
  a: "Walks into a table",
  b: "Dances on floor",
  c: "Drinks vodka",
  d: "Reads a book to bartender",
  answer: "A"
}
questionSeven = {
  question: "What is the least spoken language in the world? ",
  a: "Hindi",
  b: "Mandarin",
  c: "Sign-language",
  d: "Russian",
  answer: "C"
}
questionEight = {
  question: "How do you motivate a kid on wheelchair? ",
  a: "Stand up for yourself",
  b: "We are with you",
  c: "Call police",
  d: "Only God can help you ",
  answer: "A"
}
questionNine = {
  question: "How to do you help a disabled kid? ",
  a: "GIve him water",
  b: "Go to settings and enable",
  c: "Give him bible",
  d: "Ignore him",
  answer: "B"
}
questionTen = {
  question: "What does a cannibal do after dumping his girlfriend? ",
  a: "Misses her",
  b: "Goes to gym",
  c: "Wipe his ass",
  d: "Makes another girlfriend",
  answer: "C"
}


var questionList = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen]
var score = 0
var quitGame = false
var check = 0

function quiz(question, answer) {
  console.log(question.question)
  console.log("YOUR OPTIONS ARE: ")
  console.log("A. " + question.a)
  console.log("B. " + question.b)
  console.log("C. " + question.c)
  console.log("D. " + question.d)
  var userAnswer = readlineSync.question("Your answer: ").toLowerCase()
  console.log("------------------------------")

  if (userAnswer == answer.toLowerCase()) {
    console.log("You are right!")
    score = score + 10000
    console.log("You have won Rs. " + score)
  } else {
    console.log("You wrong haha go home.")
    quitGame = true
  }

}


for (var i = 1; i <= questionList.length; i++) {
  var currentQue = questionList[i - 1]

  if (!quitGame) {
    console.log("------------------------------")
    if (i == 6) {
      console.log("CONGRATULATIONS, YOU HAVE ASCENDED TO LEVEL 2...")
      console.log("RS. 50,000 ADDED TO YOUR BANK BALANCE")
      console.log("------------------------------")
      check = check + score
    }
    if (i == 8) {
      console.log("CONGRATULATIONS, THIS IS LEVEL 3")
      console.log("RS 70,000 ADDED TO YOUR BANK BALANCE")
      console.log("------------------------------")
      check = check + score
    }
    console.log("YOUR " + i + " QUESTION IS...")
    console.log(quiz(currentQue, currentQue.answer))
  } else {
    break
  }

}


console.log("YOUR PRIZE MONEY IS " + check)