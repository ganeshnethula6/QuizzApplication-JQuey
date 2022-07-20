let data = [
  {
    question: "Javascript is an _______ language?",
    options: {
      1: "Object Oriented",
      2: "Object based",
      3: "Procedural",
      4: "None of the above",
    },
    actualAnswer: "Object Oriented",
    markedAnswer: "",
    isMarkedTrue: false,
    type: "checkBox",
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
