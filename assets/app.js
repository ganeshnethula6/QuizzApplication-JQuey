function checkBoxOptionsLoad(data) {
  console.log(typeof data);
  let dynamicOptions = `<div class="checkbox-type">
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
  let question = `${questionNUmber + 1} ${value.question}`;
  $("#question").text(question);
}
function loadOptions(data) {
  if (data.type === "checkBox") {
    console.log(data);
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
function startQuiz() {
  let data = JSON.parse(localStorage.getItem("data"));
  if (data) {
    loadQuestion(data[0], 0);
    loadOptions(data[0]);
  }
}
function handleAnswers(e) {
  // $(".shape")
  //   .removeClass("circle pill square rectangle")
  //   .addClass($(e.target).val());
  console.log($(e.target).val());
}
$(function () {
  startQuiz();
  $("[name='option']").on("change", handleAnswers);
});
