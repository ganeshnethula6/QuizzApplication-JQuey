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
    level: 2,
  },
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
    level: 2,
  },
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
    level: 2,
  },
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
