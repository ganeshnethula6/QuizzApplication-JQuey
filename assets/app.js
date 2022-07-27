let questionNo = 1;

let level = 1;
let quesNo = 1;
let level1Tab = true;
let level2Tab = false;
let answers = [];
let marks = 0;
let progressbar;
let progressbarCount = 0;
// let queData = JSON.parse(localStorage.getItem("data"));
let queData = data;
function checkBoxOptionsLoad(que) {
  $("fieldset").empty();
  let dynamicOptions = `
                        <legend>Select a Answer: </legend>
                        <div class="checkbox-type">
                         <label for="option-1">${que.options[0]}</label>
                         <input type="radio" name="radioOption" value="13" id="option-1">
                         <label for="option-2">${que.options[1]}</label>
                         <input type="radio" name="radioOption" value="14" id="option-2">
                         <label for="option-3">${que.options[2]}</label>
                         <input type="radio" name="radioOption" value="15" id="option-3">
                         <label for="option-4">${que.options[3]}</label>
                         <input type="radio" name="radioOption" value="20" id="option-4">
                        </div>
                        `;
  $("fieldset").append(dynamicOptions);
  if (data[questionNo - 1].isMarkedTrue) {
    $(data[questionNo - 1].markedOption).prop("checked", true);
  }
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
  var dynamicOptions = ``;
  if (data[questionNo - 1].isMarkedTrue) {
    dynamicOptions = data[questionNo - 1].markedOption;
  } else {
    dynamicOptions = ` <legend>Drag the option into dropbox</legend>
                        <div class="dragDrop">
                            <div class="drag-option">
                                <div  class="drag-options" id="option-1"><span>2</span></div>
                                <div class="drag-options" id="option-2"><span>4</span></div>
                                <div class="drag-options" id="option-3"><span>5</span></div>
                                <div class="drag-options" id="option-4"><span>6</span></div>
                            </div>
                            <div id="droppable" class="droppable">
                                <p>Drop here</p>
                            </div>
                        </div>
  
  `;
  }
  $("fieldset").empty();
  $("fieldset").append(dynamicOptions);
  $(".drag-options").draggable();
  $("#droppable").droppable({
    accept: ".drag-options",
    drop: function (event, ui) {
      $(this).addClass("ui-state-highlight").find("p").html("Dropped!");
      console.log($(ui.draggable.get(0)).find("span").text());
      data[questionNo - 1].markedAnswer = $(ui.draggable.get(0))
        .find("span")
        .text();
      if (!data[questionNo - 1].isMarkedTrue) {
        progressbar.progressbar("value", ++progressbarCount);
        changeQuestionsStatus(level, quesNo);
      }
      data[questionNo - 1].isMarkedTrue = true;
      data[questionNo - 1].markedOption = $("fieldset").html();
    },
  });
}

function selectableOptionsLoad(que) {
  var dynamicOptions = `                         <legend> Multiple Select(CTRL + click)</legend>
                                                <div class="selectableBox">
                                                <ol id="selectable">
                                                    <li class="selectable-option "><span>1</span></li>
                                                    <li class="selectable-option"><span>2</span></li>
                                                    <li class="selectable-option"><span>3</span></li>
                                                    <li class="selectable-option"><span>4</span></li>
                                                </ol>
                                              </div>`;
  $("fieldset").empty();
  $("fieldset").append(dynamicOptions);
  if (data[questionNo - 1].isMarkedTrue) {
    var mark = data[questionNo - 1].markedAnswer.split("");
    mark.forEach((value, index) => {
      $(".selectable-option").each(function (i, v) {
        if (i + 1 == value) {
          $(v).addClass("ui-selected");
        }
      });
    });
  }
  $("#selectable").selectable({
    stop: function () {
      var ans = "";
      $(".ui-selected", this).each(function () {
        var index = $("#selectable li").index(this);
        ans += ans == "" ? Number(index + 1) : "," + Number(index + 1);
      });
      if (ans) {
        if (!data[questionNo - 1].isMarkedTrue) {
          progressbar.progressbar("value", ++progressbarCount);
          changeQuestionsStatus(level, quesNo);
        }
        data[questionNo - 1].isMarkedTrue = true;
        data[questionNo - 1].markedAnswer = ans;
        data[questionNo - 1].markedOption = $("fieldset").html();
      } else {
        data[questionNo - 1].isMarkedTrue = false;
        progressbar.progressbar("value", --progressbarCount);
      }
    },
  });
}
function sliderOptionsLoad(que) {
  var dynamicOptions = `
                          <legend> Drag the Slider</legend>
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
    value: 0,
    min: 1,
    max: 700,
    slide: function (event, ui) {
      if (!data[questionNo - 1].isMarkedTrue) {
        progressbar.progressbar("value", ++progressbarCount);
        changeQuestionsStatus(level, quesNo);
      }
      data[questionNo - 1].isMarkedTrue = true;
      data[questionNo - 1].markedAnswer = Number(ui.value);
      data[questionNo - 1].markedOption = $("fieldset").html();
      $("#amount").val(
        Number(ui.value).toLocaleString("hi-IN", {
          style: "currency",
          currency: "INR",
          maximumFractionDigits: 0,
        })
      );
    },
  });
  if (data[questionNo - 1].isMarkedTrue) {
    $("#slider-range-min").slider("value", data[questionNo - 1].markedAnswer);
  }
  $("#amount").val($("#slider-range-min").slider("value"));
}
function selectMenuOptionsLoad(que) {
  var dynamicOptions = `                   
    <legend> Select the Answer</legend>
     <div class="selectMenuBox">
         <select name="primeMinister" id="primeMinister">
             <option value=''>Select</option>
             <option value='Nehru'>Nehru</option>
             <option  value='Rahul Gandhi' >Rahul Gandhi</option>
             <option  value='KCR'>KCR</option>
             <option  value='Narendra Modi'>Narendra Modi</option>
           </select>
     </div>`;

  $("fieldset").empty();
  $("fieldset").append(dynamicOptions);
  if (data[questionNo - 1].isMarkedTrue) {
    $(
      `#primeMinister option[value='${data[questionNo - 1].markedAnswer}']`
    ).prop("selected", "selected");
  }
  $("#primeMinister").selectmenu({
    change: function (event, ui) {
      if (!data[questionNo - 1].isMarkedTrue) {
        progressbar.progressbar("value", ++progressbarCount);
        changeQuestionsStatus(level, quesNo);
      }
      data[questionNo - 1].isMarkedTrue = true;
      data[questionNo - 1].markedAnswer = ui.item.value;
    },
    close: function (event, ui) {
      data[questionNo - 1].markedOption = $("fieldset").html();
    },
  });
}
function spinnerOptionsLoad(que) {
  var dynamicOptions = `<legend> Select the Answer Or Use arrows</legend>
  <div class="spinnerBox">
          <label for="spinner">Enter the Answer:</label>
          <input type='number' id="spinner"  value='0' name="spinner">
  </div>`;
  $("fieldset").empty();
  $("fieldset").append(dynamicOptions);
  $("#spinner").spinner({
    min: 0,
    step: 1,
    change: function (event, ui) {
      if (!data[questionNo - 1].isMarkedTrue) {
        progressbar.progressbar("value", ++progressbarCount);
        changeQuestionsStatus(level, quesNo);
      }
      data[questionNo - 1].isMarkedTrue = true;
      data[questionNo - 1].markedAnswer = $("#spinner").val();
      data[questionNo - 1].markedOption = $("fieldset").html();
    },
  });
  if (data[questionNo - 1].isMarkedTrue) {
    $("#spinner").val(data[questionNo - 1].markedAnswer);
  }
}
function sortableOptionsLoad(que) {
  var dynamicOptions = ``;
  if (data[questionNo - 1].isMarkedTrue) {
    dynamicOptions = data[questionNo - 1].markedOption;
  } else {
    dynamicOptions = `<legend> Sort the Answer</legend>
  <div class="sortableBox">
      <ul id="sortable">
          <li class="ui-state-default" value="4" id="sortOption4">4</li>
          <li class="ui-state-default" value="1"  id="sortOption1">1</li>
          <li class="ui-state-default" value="3" id="sortOption3">3</li>
          <li class="ui-state-default" value="2" id="sortOption2">2</li>
          
        </ul>
  </div>`;
  }
  $("fieldset").empty();
  $("fieldset").append(dynamicOptions);
  $("#sortable").sortable({
    placeholder: "ui-state-highlight",
    change: function (event, ui) {
      var sortedIDs = $("#sortable").sortable("toArray");
    },
    stop: function (event, ui) {
      var ans = [];
      $("#sortable")
        .children()
        .each(function (index, value) {
          ans[index] = value.value;
        });
      if (!data[questionNo - 1].isMarkedTrue) {
        progressbar.progressbar("value", ++progressbarCount);
        changeQuestionsStatus(level, quesNo);
      }
      data[questionNo - 1].isMarkedTrue = true;
      data[questionNo - 1].markedAnswer = ans.toString();
      data[questionNo - 1].markedOption = $("fieldset").html();
    },
  });
  $("#sortable").disableSelection();
}
function datePickerOptionsLoad(que) {
  var dynamicOptions = `    <legend> Select the Answer</legend>
                            <div class="datePickerBox">
                                   <p>Date: <input type="text" readonly id="datepicker"></p>
                            </div>
                            `;
  $("fieldset").empty();
  $("fieldset").append(dynamicOptions);
  if (data[questionNo - 1].isMarkedTrue) {
    $("#datepicker").val(data[questionNo - 1].markedAnswer);
  }
  $("#datepicker").datepicker({
    altFormat: "COOKIE ",
    changeMonth: true,
    changeYear: true,
    showAnim: "fadeIn",
    onClose: function () {
      if (!data[questionNo - 1].isMarkedTrue) {
        progressbar.progressbar("value", ++progressbarCount);
        changeQuestionsStatus(level, quesNo);
      }
      data[questionNo - 1].isMarkedTrue = true;
      data[questionNo - 1].markedAnswer = $(this).val();
      data[questionNo - 1].markedOption = $("fieldset").html();
    },
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
  data[questionNo - 1].markedAnswer = $(e.target).val();
  if (!data[questionNo - 1].isMarkedTrue) {
    progressbar.progressbar("value", ++progressbarCount);
    changeQuestionsStatus(level, quesNo);
  }
  data[questionNo - 1].isMarkedTrue = true;
  data[questionNo - 1].markedOption = "#" + $(e.target).attr("id");
}
function prevQuesion(obj) {
  if (questionNo == 1) {
    obj.prop({
      disabled: true,
    });
    return;
  }
  questionNo--;
  console.log("question", questionNo, data[questionNo - 1].isMarkedTrue);
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

  if (questionNo == 4) {
    // Run the effect
    $(".qa-cont").effect("scale", { percent: 90 }, 500, callback);

    // Callback function to bring a hidden box back
    function callback() {
      setTimeout(function () {
        $(".qa-cont").removeAttr("style").hide().fadeIn();
      }, 500);
    }
  }
  $("#nxtBtn").text("Next");
  startQuiz(questionNo);
}

function nextQuesion(obj) {
  if (!data[questionNo - 1].isMarkedTrue) {
    console.log(data[questionNo - 1].isMarkedTrue);
    errorDialog.dialog("open");
    return;
  }
  if (questionNo >= 1 && questionNo < 8) {
    questionNo++;
  } else {
    evalateMarks();
    return;
  }
  if (questionNo === 1) {
    $("#prevBtn").prop({
      disabled: true,
    });
    $("#nxtBtn").text("Next");
  } else if (questionNo === 8) {
    $("#nxtBtn").text("Submit");
    $("#nxtBtn").attr("name", "sbtBtn");
  } else {
    $("#nxtBtn").attr("name", "nextBtn");
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
  if (questionNo == 5 && !data[questionNo].isMarkedTrue) {
    // Run the effect
    $(".qa-cont").effect("scale", { percent: 90 }, 500, callback);

    // Callback function to bring a hidden box back
    function callback() {
      setTimeout(function () {
        $(".qa-cont").removeAttr("style").hide().fadeIn();
      }, 500);
      loadTabQuestions(2);
      startQuiz(questionNo);
    }

    return;
  }
  startQuiz(questionNo);
}

function loadTabQuestions(level) {
  $(".qa-num").empty();
  var dynamic = ``;
  queData.forEach((element, index) => {
    var qNo = level == 1 ? index + 1 : index + 1 - 4;
    if (element.level == level && element.isMarkedTrue) {
      dynamic += `<div class="que attemted" data-level="${level}" data-queNo="${qNo}" id="tabQue${
        index + 1
      }">
        <span>${qNo}</span>
      </div>`;
    } else if (element.level == level && !element.isMarkedTrue) {
      dynamic += `<div class="que" data-level="${level}" data-queNo="${qNo}" id="tabQue${
        index + 1
      }">
        <span>${qNo}</span>
      </div>`;
    }
  });
  $(".qa-num").append(dynamic);
}
function changeQuestionsStatus(level, quesNo) {
  $(`#tabQue${questionNo}`).addClass("attemted");
}

function evalateMarks() {
  var totalMarks = 0;
  resultDialog.dialog("open");
  data.forEach((element, index) => {
    console.log(element.actualAnswer, element.markedAnswer);
    console.log(element.actualAnswer == element.markedAnswer);
    if (element.actualAnswer == element.markedAnswer) {
      totalMarks++;
    }
  });
  $("#resultBox").empty();
  $("#resultBox").append(`
  <span>Your Score is:</span>
  <p>${totalMarks}/8</p>
  <span>Press cancel button to restart quiz</span>
  `);
}

$(function () {
  var progressLabel = $(".progress-label");
  progressbar = $("#progressbar").progressbar({
    max: 8,
    value: true,
    change: function () {
      progressLabel.text(progressbar.progressbar("value"));
    },
    complete: function () {
      progressLabel.text("Complete!");
    },
  });

  errorDialog = $("#errorDialog").dialog({
    autoOpen: false,
  });

  resultDialog = $("#resultModal").dialog({
    autoOpen: false,
    modal: true,
    maxHeight: 640,
    maxWidth: 1360,
    height: 500,
    width: 1100,
    show: { effect: "scale", duration: 800 },
    close: function () {
      window.location.reload();
    },
  });

  $("button[name='nextBtn']").on("click");
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
    if ($(this).get(0) == $("#prevBtn").get(0)) {
      prevQuesion($(this));
    } else if ($(this).get(0) == $("#nxtBtn").get(0)) {
      nextQuesion($(this));
    }
  });
  loadTabQuestions(level);
});
