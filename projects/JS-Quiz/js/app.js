$(document).ready(function () {
    $("#startButton").click(function () {
        $('#start').css("display", "none");
        $('#secQuiz').addClass('showQuiz').slideDown('slow');
        startQuiz();

        function startQuiz() {
            var data = [
                {
                    ques: "What is the value of +’string’ ?",
                    option: ["NAN", "Object ", "Undefined"],
                    ans: "NAN",
                    correct: 0
                        },
                {
                    ques: "What is a special data type in Javascript?",
                    option: ["Boolean", "Object ", "Undefined"],
                    ans: "Undefined",
                    correct: 0
                        },
                {
                    ques: "Which of the following has a truthy value?",
                    option: ["null", "undefined", "none of these"],
                    ans: "none of these",
                    correct: 0
                        },
                {
                    ques: "What does typeof alert return?",
                    option: ["string", "function", "object"],
                    ans: "function",
                    correct: 0
                        },
                {
                    ques: "What does the number method toFixed() return?",
                    option: ["Returns a String", "Returns an Integer", "Returns a number with decimals"],
                    ans: "Returns a String",
                    correct: 0
                        },
                {
                    ques: "If k = true, what does Number(k) return?",
                    option: ["true", "false", "1"],
                    ans: "1",
                    correct: 0
                        }
    ];
            var count = data.length;
            var resultArray = [];



            function setUp(dataSet) {
                for (var i = 0; i < dataSet.length; i++) {
                    $("#quizSec").append('<div id="' + i + '"><p class="question">' + dataSet[i].ques + '</p><br/>' + formatRadioButtons(dataSet[i].option, i) + '<p class="footer"><p class="startBtn">start over</p><p class="nextBtn">next</p></p></div>');
                }

                //This hides all the newly created questions, except the first:
                for (var i = dataSet.length - 1; i > 0; i--) {
                    $('#' + i).hide();
                }
            }

            function formatRadioButtons(ary, qNum) {
                var answers = [];
                for (i = 0; i < ary.length; i++) {
                    answers.push('<label><input type="radio" name="' + qNum + '" value="' + ary[i] + '">' + ary[i] + '</label>');
                }
                return answers.join(" ");

            }



            function addUpScore(dataSet) {
                return resultArray.reduce(function (previousValue, currentValue, index, array) {
                    return previousValue + currentValue;
                });
            }



            function checkAnswer(answer, qNum, dataSet) {
                if (answer == dataSet[qNum].ans) {
                    dataSet[qNum].correct = 1;
                    resultArray.push(dataSet[qNum].correct);
                    $("#results").text('You\'re score is: ' + addUpScore(dataSet) + ' correct out of ' + dataSet.length + '.');
                } else {
                    resultArray.push(dataSet[qNum].correct);
                    $("#results").text('You\'re score is: ' + addUpScore(dataSet) + ' correct out of ' + dataSet.length + '.');
                }
            }

            function scoreMsg(percentage) {
                var msg = null;
                if (percentage <= 100 && percentage >= 80) {
                    msg = "Good job!";
                    return msg;
                } else if (percentage <= 79 && percentage >= 50) {
                    msg = "Not bad!";
                    return msg;
                } else {
                    msg = "You should brush up a little!";
                    return msg;
                }
            }
            setUp(data);
            $(".nextBtn").click(function (event) {
                var qNum = $(this).closest("div").attr("id");
                var userInput = $('input[name=' + qNum + ']:radio:checked').val();
                if (count > 1) {
                    checkAnswer(userInput, qNum, data);
                    $("#" + qNum).hide();
                    $("#" + qNum).next().show();
                    count--;
                } else if (count == 1) {
                    checkAnswer(userInput, qNum, data);
                    var percentage = (100 / data.length) * addUpScore(data);
                    $("#results").text('You\'re final score is: ' + percentage.toFixed(2) + '%');
                    $("#quizSec").find("div").remove();
                    $("#results").append('<p>' + scoreMsg(percentage) + '</p><br/>');
                    $('#quiz').hide();
                } else {
                    return false;
                }
            });

        }
        $(".startBtn").click(function () {
            location.reload(true);
        });
    });
});