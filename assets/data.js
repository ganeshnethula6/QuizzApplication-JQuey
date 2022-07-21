let data = [
  {
    question: "Javascript is an _______ language?",
    options: [
      "Object Oriented",
      "Object based",
      "Procedural",
      "None of the above",
    ],
    actualAnswer: "Object Oriented",
    markedAnswer: "",
    isMarkedTrue: false,
    type: "checkBox",
    level: 1,
  },
  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    options: ["var", "let", "Both A and B", "None of the above"],
    actualAnswer: "Both A and B",
    markedAnswer: "",
    isMarkedTrue: false,
    type: "checkBox",
    level: 1,
  },
  {
    question:
      "Which of the following methods is used to access HTML elements using Javascript?",
    options: [
      "getElementbyId()",
      "getElementsByClassName()",
      "Both A and B",
      "None of the above",
    ],
    actualAnswer: "Both A and B",
    markedAnswer: "",
    isMarkedTrue: false,
    type: "checkBox",
    level: 1,
  },
  {
    question:
      "Upon encountering empty statements, what does the Javascript Interpreter do?",
    options: [
      "Throws an error",
      "Ignores the statements",
      "Gives a warning",
      "None of the above",
    ],
    actualAnswer: "Ignores the statements",
    markedAnswer: "",
    isMarkedTrue: false,
    type: "checkBox",
    level: 1,
  },
  {
    question:
      "Which of the following methods can be used to display data in some form using Javascript?",
    options: [
      "document.write()",
      "console.log()",
      "window.alert()",
      "All of the above",
    ],
    actualAnswer: "All of the above",
    markedAnswer: "",
    isMarkedTrue: false,
    type: "checkBox",
    level: 2,
  },
  {
    question: "How can a datatype be declared to be a constant type?",
    options: ["const", "let", "var", "constant"],
    actualAnswer: "const",
    markedAnswer: "",
    isMarkedTrue: false,
    type: "checkBox",
    level: 2,
  },
  {
    question: `When the switch statement matches the expression with the given labels, how is the comparison done?`,
    options: [
      "Both the datatype and the result of the expression are compared.",
      "Only the datatype of the expression is compared.",
      "Only the value of the expression is compared.",
      "None of the above",
    ],
    actualAnswer:
      "Both the datatype and the result of the expression are compared.",
    markedAnswer: "",
    isMarkedTrue: false,
    type: "checkBox",
    level: 2,
  },
  {
    question:
      "What keyword is used to check whether a given property is valid or not?",
    options: ["in", "is in", "exists", "lies"],
    actualAnswer: "in",
    markedAnswer: "",
    isMarkedTrue: false,
    type: "checkBox",
    level: 2,
  },
];
let localStorageData;
loadData();
function loadData() {
  localStorageData = localStorage.getItem("data");
  if (!localStorageData) {
    localStorage.setItem("data", JSON.stringify(data));
    console.log("Stored din locals");
    return;
  }
}
