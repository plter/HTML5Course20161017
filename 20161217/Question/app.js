/**
 * Created by plter on 2016/12/17.
 */

angular.module("app", []).controller("main", function ($scope, $http) {

    $scope.questions = [];
    $scope.questionIndex = 0;
    $scope.currentQuestion = {};
    $scope.score = 0;
    $scope.scoreSubmited = false;

    var form = document.querySelector("form");

    function checkCurrentAnswer() {
        if (form["answer"].value == $scope.currentQuestion.correct) {
            $scope.score++;
        }
    }

    function addListeners() {
        $scope.btnNextClicked = function () {
            if ($scope.questionIndex < $scope.questions.length - 1) {
                checkCurrentAnswer();

                $scope.questionIndex++;
                showCurrentQuestion();
            }
        };

        $scope.btnSubmitClicked = function () {
            checkCurrentAnswer();
            $scope.scoreSubmited = true;
        }
    }

    function showCurrentQuestion() {
        $scope.currentQuestion = $scope.questions[$scope.questionIndex];
    }

    function showFirstQuestion() {
        $scope.questionIndex = 0;
        showCurrentQuestion();
    }

    function loadData() {
        $http.get("questions.json").then(function (result) {
            $scope.questions = result.data;
            showFirstQuestion();
        });
    }


    function init() {
        addListeners();
        loadData();
    }

    init();
});