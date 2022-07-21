let questionNo = 1;
console.log(questionNo);
let level = 1;
function checkBoxOptionsLoad(data) {
  $("fieldset").empty();
  let dynamicOptions = `
                        <legend>Select a Answer: </legend>
                        <div class="checkbox-type">
                         <label for="option-1">${data.options[0]}</label>
                         <input type="radio" name="option" value="1" id="option-1">
                         <label for="option-2">${data.options[1]}</label>
                         <input type="radio" name="option" value="2" id="option-2">
                         <label for="option-3">${data.options[2]}</label>
                         <input type="radio" name="option" value="3" id="option-3">
                         <label for="option-4">${data.options[3]}</label>
                         <input type="radio" name="option" value="4" id="option-4">
                        </div>
                        `;
  $("fieldset").append(dynamicOptions);
  $(".checkbox-type").controlgroup({
    direction: "vertical",
  });
  let options = $("input[type='radio']").checkboxradio();
}
function loadQuestion(value, questionNUmber) {
  let question = `${questionNUmber}. ${value.question}`;
  $("#question").text(question);
}
function loadOptions(data) {
  if (data.type === "checkBox") {
    checkBoxOptionsLoad(data);
  } else if (data.type === "dragDrop") {
  } else if (data.type === "selectable") {
  } else if (data.type === "slider") {
  } else if (data.type === "selectMenu") {
  } else if (data.type === "spinner") {
  } else if (data.type === "sortable") {
  } else if (data.type === "datePicker") {
  }
}
function startQuiz(questionNo) {
  let data = JSON.parse(localStorage.getItem("data"));
  if (data) {
    loadQuestion(data[questionNo - 1], questionNo);
    loadOptions(data[questionNo - 1]);
  }
}
function handleAnswers(e) {
  console.log($(e.target).val());
}
function prevQuesion(obj) {
  questionNo--;
  if (questionNo == 1) {
    $(this).prop({
      disabled: true,
    });
  }
  $("#nxtBtn").text("Next");
  startQuiz(questionNo);
}
function nextQuesion(obj) {
  if (questionNo >= 1 && questionNo < 8) {
    questionNo++;
  }
  if (questionNo === 1) {
    $("#prevBtn").prop({
      disabled: true,
    });
    $("#nxtBtn").text("Next");
  } else if (questionNo === 8) {
    $("#nxtBtn").text("Submit");
  } else {
    $("#prevBtn").prop({
      disabled: false,
    });
    $("#nxtBtn").text("Next");
  }
  startQuiz(questionNo);
}

$(function () {
  if (questionNo == 1) {
    $("#prevBtn").prop({
      disabled: true,
    });
    startQuiz(questionNo);
  } else {
    $("#prevBtn").prop({
      disabled: false,
    });
  }

  $("[name='option']").on("change", handleAnswers);
  $(".btn").on("click", function (event) {
    if ($(this).get(0) == $("#prevBtn").get(0)) {
      prevQuesion($(this));
    } else {
      nextQuesion($(this));
    }
  });
});
