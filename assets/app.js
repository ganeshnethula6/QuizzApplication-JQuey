let questionNo = 1;
let level = 1;
let quesNo = 1;
let level1Tab = true;
let level2Tab = false;
let answers = [];
let queData = JSON.parse(localStorage.getItem("data"));
function checkBoxOptionsLoad(que) {
  $("fieldset").empty();
  let dynamicOptions = `
                        <legend>Select a Answer: </legend>
                        <div class="checkbox-type">
                         <label for="option-1">${que.options[0]}</label>
                         <input type="radio" name="radioOption" value="1" id="option-1">
                         <label for="option-2">${que.options[1]}</label>
                         <input type="radio" name="radioOption" value="2" id="option-2">
                         <label for="option-3">${que.options[2]}</label>
                         <input type="radio" name="radioOption" value="3" id="option-3">
                         <label for="option-4">${que.options[3]}</label>
                         <input type="radio" name="radioOption" value="4" id="option-4">
                        </div>
                        `;
  $("fieldset").append(dynamicOptions);
  $(".checkbox-type").controlgroup({
    direction: "vertical",
  });
  $("input[type='radio']").checkboxradio();
}
function loadQuestion(value, questionNo) {
  quesNo = questionNo <= 4 ? questionNo : questionNo - 4;
  let question = `${quesNo}. ${value.question}`;
  $("#question").text(question);
}
function dragDropOptionsLoad(que) {
  var dynamicOptions = ` <legend>Select the Answer</legend>
                        <div class="dragDrop">
                            <div class="drag-option">
                                <div  class="drag-options">1</div>
                                <div class="drag-options"><span>2</span></div>
                                <div class="drag-options"><span>3</span></div>
                                <div class="drag-options"><span>4</span></div>
                            </div>
                            <div id="droppable" class="droppable">
                                <p>Drop here</p>
                            </div>
                        </div>
  
  `;
  $("fieldset").empty();
  $("fieldset").append(dynamicOptions);
  $(".drag-options").draggable();
  $("#droppable").droppable({
    accept: ".drag-options",
    drop: function (event, ui) {
      $(this).addClass("ui-state-highlight").find("p").html("Dropped!");
      console.log(ui.target);
    },
  });
}
function selectableOptionsLoad(que) {
  var dynamicOptions = `                         <legend> Select the Answer</legend>
                                                <div class="selectableBox">
                                                <p id="feedback">
                                                    <span>You&apos;ve selected:</span> <span id="select-result">none</span>.
                                                </p>
                                                <ol id="selectable">
                                                    <li class="selectable-option"><span>1</span></li>
                                                    <li class="selectable-option"><span>2</span></li>
                                                    <li class="selectable-option"><span>3</span></li>
                                                    <li class="selectable-option"><span>4</span></li>
                                                </ol>
                                              </div>`;
  $("fieldset").empty();
  $("fieldset").append(dynamicOptions);
  $("#selectable").selectable({
    stop: function () {
      var result = $("#select-result").empty();
      $(".ui-selected", this).each(function () {
        var index = $("#selectable li").index(this);
        result.append(" #" + (index + 1));
      });
    },
  });
}
function sliderOptionsLoad(que) {
  var dynamicOptions = `
                          <legend> Select the Answer</legend>
                            <div class="sliderBox">
                                  <p>
                                      <label for="amount">Maximum price:</label>
                                       <input type="text" id="amount" readonly style="border:0; color:#f6931f; font-weight:bold;">
                                 </p>
         
                                <div id="slider-range-min"></div>
                             </div>
                            `;
  $("fieldset").empty();
  $("fieldset").append(dynamicOptions);
  $("#slider-range-min").slider({
    range: "min",
    value: 37,
    min: 1,
    max: 700,
    slide: function (event, ui) {
      $("#amount").val("$" + ui.value);
    },
  });
  $("#amount").val("$" + $("#slider-range-min").slider("value"));
}
function selectMenuOptionsLoad(que) {
  var dynamicOptions = `                    <legend> Select the Answer</legend>
  <div class="selectMenuBox">
      <select name="primeMinister" id="primeMinister">
          <option>Nehru</option>
          <option >Rahul Gandhi</option>
          <option>KCR</option>
          <option>Narendra Modi</option>
        </select>
  </div>`;
  $("fieldset").empty();
  $("fieldset").append(dynamicOptions);
  $("#primeMinister").selectmenu();
}
function spinnerOptionsLoad(que) {
  var dynamicOptions = `<legend> Select the Answer</legend>
  <div class="spinnerBox">
          <label for="spinner">Amount to donate:</label>
          <input id="spinner" name="spinner" value="5">
  </div>`;
  $("fieldset").empty();
  $("fieldset").append(dynamicOptions);
  $("#spinner").spinner({
    min: 5,
    max: 2500,
    step: 25,
    start: 1000,
    numberFormat: "C",
  });
}
function sortableOptionsLoad(que) {
  var dynamicOptions = `  <legend> Select the Answer</legend>
  <div class="sortableBox">
      <ul id="sortable">
          <li class="ui-state-default">Item 1</li>
          <li class="ui-state-default">Item 2</li>
          <li class="ui-state-default">Item 3</li>
          <li class="ui-state-default">Item 4</li>
        </ul>
  </div>`;
  $("fieldset").empty();
  $("fieldset").append(dynamicOptions);
  $("#sortable").sortable({
    placeholder: "ui-state-highlight",
  });
  $("#sortable").disableSelection();
}
function datePickerOptionsLoad(que) {
  var dynamicOptions = `    <legend> Select the Answer</legend>
                            <div class="datePickerBox">
                                   <p>Date: <input type="text" id="datepicker"></p>
                            </div>
                            `;

  $("fieldset").empty();
  $("fieldset").append(dynamicOptions);
  $("#datepicker").datepicker({
    altFormat: "COOKIE ",
    changeMonth: true,
    changeYear: true,
    showAnim: "fadeIn",
  });
}
function loadOptions(que) {
  if (que.type === "checkBox") {
    checkBoxOptionsLoad(que);
  } else if (que.type === "dragDrop") {
    dragDropOptionsLoad(que);
  } else if (que.type === "selectable") {
    selectableOptionsLoad(que);
  } else if (que.type === "slider") {
    sliderOptionsLoad();
  } else if (que.type === "selectMenu") {
    selectMenuOptionsLoad();
  } else if (que.type === "spinner") {
    spinnerOptionsLoad();
  } else if (que.type === "sortable") {
    sortableOptionsLoad();
  } else if (que.type === "datePicker") {
    datePickerOptionsLoad();
  }
}
function startQuiz(questionNo) {
  if (queData) {
    loadQuestion(queData[questionNo - 1], questionNo);
    loadOptions(queData[questionNo - 1]);
    if (level == 1) {
      var stepperItems = $(".stepper-item");
      for (let index = 0; index < stepperItems.length; index++) {
        element = stepperItems[index];
        $(element).removeClass("active");
      }
      $("#levelTab-1").addClass("active");
      $("#level").text(`Level: ${level}`);
    } else if (level == 2) {
      $("#level").text(`Level: ${level}`);
      var stepperItems = $(".stepper-item");
      for (let index = 0; index < stepperItems.length; index++) {
        element = stepperItems[index];
        $(element).removeClass("active");
      }
      $("#levelTab-1").addClass("active");
      $("#levelTab-2").addClass("active");
    }
  }
}
function handleRadioBoxAnswer(e) {
  console.log($(e.target).val());
}
function prevQuesion(obj) {
  if (questionNo == 1) {
    obj.prop({
      disabled: true,
    });
    return;
  }
  questionNo--;
  if (questionNo == 1) {
    obj.prop({
      disabled: true,
    });
  }
  if (questionNo <= 4) {
    level = 1;
  } else {
    level = 2;
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
  if (questionNo <= 4) {
    level = 1;
  } else {
    level = 2;
  }
  startQuiz(questionNo);
}
function loadTabQuestions(level) {
  $(".qa-num").empty();
  var dynamic = ``;
  queData.forEach((element, index) => {
    var qNo = level == 1 ? index + 1 : index + 1 - 4;
    if (element.level == level) {
      dynamic += `<div class="que">
        <span>${qNo}</span>
      </div>`;
    }
  });
  $(".qa-num").append(dynamic);
}
function changeQuestionsStatus(level) {}
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

  $("[name='radioOption']").on("change", handleRadioBoxAnswer);

  $("#droppable").on("dropactivate", function (event, ui) {
    console.log(ui);
  });
  $(".btn").on("click", function (event) {
    // if (questionNo == 5) {
    //   level1Tab = false;
    //   level2Tab = true;
    //   // $(".qa-cont").effect("slide", 2000);
    // } else if (questionNo == 4) {
    //   level1Tab = true;
    //   level2Tab = false;
    // }
    if ($(this).get(0) == $("#prevBtn").get(0)) {
      // if (level1Tab && !level2Tab) {
      //   $(".qa-cont").effect("slide");
      // } else if (level1Tab && !level2Tab) {
      //   $(".qa-cont").effect("slide");
      // }
      prevQuesion($(this));
    } else {
      nextQuesion($(this));
    }
  });
  loadTabQuestions(level);
  $(".que-num").on("load", function () {});
});
