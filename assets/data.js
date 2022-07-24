let data = [
  {
    question: "What is the sum of 5 numbers? 1+2+3+4+5=?",
    options: [13, 14, 15, 20],
    actualAnswer: "Object Oriented",
    markedAnswer: "",
    isMarkedTrue: false,
    type: "checkBox",
    level: 1,
  },
  {
    question: "Place the odd number in the drop box.",
    options: [2, 4, 5, 6],
    actualAnswer: 5,
    markedAnswer: "",
    isMarkedTrue: false,
    type: "dragDrop",
    level: 1,
  },
  {
    question: "Select the even numbers?",
    options: [1, 2, 3, 4],
    actualAnswer: "2,3",
    markedAnswer: "",
    isMarkedTrue: false,
    type: "selectable",
    level: 1,
  },
  {
    question:
      "Each of the 3 items costs 50 rupees. So what was the total price of the three items?",
    options: [200, 450, 150, 600],
    actualAnswer: 150,
    markedAnswer: "",
    isMarkedTrue: false,
    type: "slider",
    level: 1,
  },
  {
    question: "Who is the current Prime Minister of India?",
    options: ["Nehru", "KCR", "Narendra Modi", "Rahul Gandhi"],
    actualAnswer: "Narendra Modi",
    markedAnswer: "",
    isMarkedTrue: false,
    type: "selectMenu",
    level: 2,
  },
  {
    question:
      "How long has it been since India gained independence from Britain?",
    options: [72, 74, 70, 80],
    actualAnswer: 72,
    markedAnswer: "",
    isMarkedTrue: false,
    type: "spinner",
    level: 2,
  },
  {
    question: `Rearrange the words such that they are in ascending order?`,
    options: [2, 4, 1, 3],
    actualAnswer: "1,2,3,4",
    markedAnswer: "",
    isMarkedTrue: false,
    type: "sortable",
    level: 2,
  },
  {
    question: "When is India's Independence Day celebrated?",
    options: [],
    actualAnswer: "08/15/1947",
    markedAnswer: "",
    isMarkedTrue: false,
    type: "datePicker",
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
