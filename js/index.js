myValue1 = "db/db.json";
myValue2 = "db/db2.json";
$(document).ready(function () {
    $("#forLoadMyValue1").load(myValue1);
})
$(document).ready(function () {
    $("#forLoadMyValue2").load(myValue2);
})






s = 0;
previousS = -10;
previousBlue = -10
firstStep = String();
notUsedProgramParts = Array();
howManyPP = Array();
howManyAV = Array();
previousHowManyAV = -100
previousRequiredPlace = -100
allSteps = Array();
previousStrategy = Array();
learningMemory2 = Array();
partner = "";
hereNow_ = "nothing";
blueWonMemory = Array();
redWonMemory = Array();
undecidedMemory = Array();
shortMemory = Array();
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
IPlayWith = "noData";
defenceArray = Array();
strategicalSteps = Array();
strategicalStepsForStart = Array();
thisWasStrategicalSteps = Array();
strategicalStepsForDefence = Array();
strategicalStepsForDefence2 = Array();
strategicalStepsForDefence3 = Array();
strategicalStepsForDefence4 = Array();
strategicalStepsForDefence5 = Array();
myStoredGame = Array();
myStoredGameIndex = Number();
learntStep = false;
textForStepOfEngine = "";
stepOfEngineArray = Array();
myStoredGameHistory = Array();
store = "";
myStrategy = Array();
myStrategyArray = Array();
strategyOfEngineHistory = Array();
//variable for testing
numberOfSomething = Number();
myImportantDefenceStep = 0;
somethingForTest = Array();
redWonMemoryFake = Array();
blueWonMemoryFake = Array();
undecidedMemoryFake = Array();
blueWonMemoryStrategies = Array();
redWonMemoryStrategies = Array();
undecidedMemoryStrategies = Array();
blueWonMemoryStrategiesFake = Array();
redWonMemoryStrategiesFake = Array();
undecidedMemoryStrategiesFake = Array();
everyArrayHasIt4Attack = Array();
almostEveryArrayHasIt4Attack = Array();
everyArrayHasIt4Defence = Array();
almostEveryArrayHasIt4Defence = Array();
whatWeStepArray = Array();
forbiddenPlace = -10;
forbiddenPlacesArray = Array();
sensitivePlaces_ = Array();
sensitivePlacesAll = Array();
forbiddenPlacesForcesToStepHere = Array();
strategicalStepsForDefence4 = Array();
strategicalStepsForStart = Array();
strategicalSteps = Array();
strategicalStepsForStart = Array();
strategicalStepsForDefence = Array();
strategicalStepsForDefence2 = Array();
strategicalStepsForDefence3 = Array();
strategicalStepsForDefence4 = Array();
everyArrayHasIt4Defence = Array();
almostEveryArrayHasIt4Defence = Array();
everyArrayHasIt4Attack = Array();
almostEveryArrayHasIt4Attack = Array();
strategicalStepsWithMaxOccurrance = Array();
firstDefenceStep = Array();
myImportantDefenceStep = Array();
myImportantDefenceStep2 = Array();
myImportantDefenceStep3 = Array();
forbiddenPlacesForcesToStepHere = Array();
pleaseNotThis = 0;
myWonMemory = Array();
noStep = false;

programParts = 41;
for (let i = 0; i < programParts; i++) {
    notUsedProgramParts[i] = i;
    howManyPP[i] = 0;
    howManyAV[i] = 0;
}
nowLearning = false;
strategiesArray = Array();

whoStart = function () {
    IPlayWith = "blue"
    red = Array();
    blue = Array();
    coins = Array();
    step = 0;
    thereIsWinner = "no";
    allPlace = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    freePlace = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    temporaryArray = Array();
    gameNow = Array();
    strategy = "nothing";
    previousStrategy = Array();
    for (let i = 1; i < 10; i++) {
        document.querySelector(`#millTbody tr td[name='${i}']`).innerHTML = "";
        document.querySelector(`#millTbody tr td[name='${i}']`).style["background-color"] = "#dbdbdb"
    };
    document.querySelector("#endOfGame").innerHTML = " - ";
    if (document.querySelector("#computer").checked == true && nowLearning == false) { firstStep = "computer" };
    if (document.querySelector("#gamer").checked == true && nowLearning == false) { firstStep = "gamer" };

    //if (nowLearning == false) {
    if (firstStep == "computer") { step = 1; stepShowsColor = 1; }
    if (firstStep == "gamer") { step = 0; stepShowsColor = 2; }
    //}

    if (document.querySelector("#computer").checked == true &&
        document.querySelector("#withLearntStrategy").checked == false &&
        document.querySelector("#withSimulatedLearntStrategy").checked == false &&
        document.querySelector("#withSimulatedAI").checked == false &&
        nowLearning == false) {
        //stepShowsColor = 1;

        //firstStep = "computer"; step = 1;
        nowTheComputerStep();
        computerStep = true;
        stepOnTheBoard(number);
        computerStep = false;
        isWinner();
    };
    if (document.querySelector("#computer").checked == true &&
        document.querySelector("#withSimulatedLearntStrategy").checked == true &&
        document.querySelector("#withSimulatedAI").checked == false &&
        nowLearning == false) {
        //stepShowsColor = 1;
        //firstStep = "computer"; step = 1;
        nowTheComputerStep();
        computerStep = true;
        stepOnTheBoard(number);
        computerStep = false;
        isWinner();
    };
    if (document.querySelector("#computer").checked == true
        && document.querySelector("#withLearntStrategy").checked == true
        && document.querySelector("#withSimulatedAI").checked == false
        && nowLearning == false) {
        //firstStep = "computer"; step = 1; stepShowsColor = 1;
        gameByLearntMemory(); stepOnTheBoard(number); isWinner();
        exNumber = number;
    }
    if (document.querySelector("#gamer").checked == true
        && document.querySelector("#withSimulatedAI").checked == false) {
        freePlace = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        //stepShowsColor = 0;
        //firstStep = "gamer"; step = 0;
        computerStep = false;
        //showRightSideInfo();
    };
    if (document.querySelector("#withSimulatedAI").checked == true && nowLearning == true
        //if (partner == "simulatedAI"
        && nowLearning == true) {
        if (firstStep == "computer") { step = 1; stepShowsColor = 1; }
        if (firstStep == "gamer") { step = 0; stepShowsColor = 2; }
        //gameByLearntMemory(); stepOnTheBoard(number); isWinner();
    }
    if (document.querySelector("#withSimulatedAI").checked == true && nowLearning == false) {
        if (firstStep == "computer") {
            step = 1; stepShowsColor = 1;
            number = Math.ceil(Math.random() * 9);
            stepOnTheBoard(number); isWinner();
        }
    }
    if (document.querySelector("#withLearningMemory").checked == true
        && nowLearning == true) {
        if (firstStep == "computer") { step = 1; stepShowsColor = 1; }
        if (firstStep == "gamer") { step = 0; stepShowsColor = 2; }
        gameWithLearningMemory(); stepOnTheBoard(number); isWinner();
    }
    if (document.querySelector("#withLearningMemory").checked == true && red.length == 0 && blue.length == 0 && firstStep == "computer") {

        if (firstStep == "computer") { step = 1; stepShowsColor = 1; }
        if (firstStep == "gamer") { step = 0; stepShowsColor = 2; }
        number = Math.ceil(Math.random() * 9)
        textForStepOfEngine = `Az első lépés: random.`
        learntStep = false;
        //console.log("number", number)
        stepOnTheBoard(number); isWinner();
    }
    if (document.querySelector("#withStoredLearningMemory").checked == true
        && nowLearning == true) {
        if (firstStep == "computer") { step = 1; stepShowsColor = 1; }
        if (firstStep == "gamer") { step = 0; stepShowsColor = 2; }
        gameWithLearningMemory(); stepOnTheBoard(number); isWinner();
    }
    if (document.querySelector("#withStoredLearningMemory").checked == true && red.length == 0 && blue.length == 0 && firstStep == "computer") {

        if (firstStep == "computer") { step = 1; stepShowsColor = 1; }
        if (firstStep == "gamer") { step = 0; stepShowsColor = 2; }
        number = Math.ceil(Math.random() * 9)
        textForStepOfEngine = `Az első lépés: random.`
        learntStep = false;
        //console.log("number", number)
        stepOnTheBoard(number); isWinner();
    }
    exNumber = number;
}

starting = function () {
    red = Array();
    blue = Array();
    coins = Array();
    step = 0;
    thereIsWinner = "no";
    freePlace = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    temporaryArray = Array();
    //nowLearning = false;
    gameNow = Array();
    strategy = "nothing";
    document.querySelector("#strategyOfEngine").innerHTML = "";
    whenBlinkingStarts = 0;
    for (let i = 1; i < 10; i++) {
        document.querySelector(`#millTbody tr td[name='${i}']`).innerHTML = "";
        document.querySelector(`#millTbody tr td[name='${i}']`).style["background-color"] = "#dbdbdb"
    };
    document.querySelector("#endOfGame").innerHTML = " - ";
    line1 = Array(); line2 = Array(); line = Array();
    document.querySelector("#infoBox").style.visibility = "hidden";
    strategyArray = Array();
    winnerStrategy = Array();
    triangle = Object();
    colors = Array();
    computerWonArray = Array();
    blinkingMemory = Array();
    pp = -10;
    ppArray = Array();
    for (let i = 0; i < 9; i++) { colors[i] = "empty" };
    whereToPut = Array();
    computerWon = false;
    whatWeStepArray = Array();
    stepOfEngineArray = Array();
    myStrategy = Array();
    textForStepOfEngine = "";
    learntStep = false;

    whoStart();

};

gameNowEmpty = function () {
    gameNow[0] = "notForUse";
    for (let i = 1; i < 10; i++) {
        gameNow[i] = "empty"
    };
};

learningMemory = Array();
learningMemoryBlueWon = Array();
learningMemoryRedWon = Array();
learningMemoryUndecided = Array();
shortMemory = Array();
redWon = Array();
blueWon = Array();
nobodyWon = Array();
whoWon = { red: 0, blue: 0, undecided: 0 };

upright = [4, 9, 7, 6, 2];
rightdown = [2, 7, 1, 8, 6];
downleft = [6, 1, 3, 4, 8];
leftup = [8, 3, 9, 2, 4];
circle = [upright, rightdown, downleft, leftup];
Tup = [4, 2, 5, 1, 9];
Tright = [2, 6, 5, 3, 7];
Tdown = [8, 6, 5, 9, 1];
Tleft = [4, 8, 5, 7, 3];
Tmodel = [Tup, Tright, Tdown, Tleft];
corner = [4, 2, 6, 8];
round = [4, 9, 2, 7, 6, 1, 8, 3];
cross = [9, 7, 1, 3];
showTableIndex = 0;
avArray = Array();
avArrayStep = Array();
avArrayStep[0] = "-"

gameWithRandom = function (hereNow) {
    if (document.querySelector("#withRandomEngine").checked == true) {
        document.querySelector("#withRandom").checked = true;
        document.querySelector("#labelForProgram").innerHTML = "<s>a program</s>";
        document.querySelector("#labelForProgram s").style.color = "#808080"
    }
    if (document.querySelector("#withSimulatedLearntStrategy").checked == false) {
        document.querySelector("#labelForSimulatedAI").innerHTML = "a szimuláltMI";
        document.querySelector("#labelForSimulatedAI").style.color = "black";
    }

    hereNow_ = hereNow;
    bluringOrNot(hereNow_);
    gameWithSimulatedOrNOt();
    newGame();

}

gameWithAI = function (hereNow) {
    hereNow_ = hereNow;
    //document.querySelector("#normal2").checked = true;
    estimatedRunningNumberOninput();
    gameWithNotRandom(hereNow_)
}

gameWithNotRandom = function (hereNow) {

    myConfirm1 = false; myConfirm2 = false;
    myMemory = Number()
    if (document.querySelector("#withLearningMemory").checked == true &&
        learningMemory.length == 0) {
        myConfirm1 = confirm("A tanulómemória jelenleg üres. Először futtassa le a 'Tanulójáték', a 'Memória tisztítása - 1' és a 'Memória tisztítása - 2' programrészeket. Különben a gép csak random lépéseket tesz. Ha az 'OK' gombra kattint, akkor ez a három programrészlet automatikusan lefut (kb. 15 mp.).")
        myMemory = 1;
    }
    if (document.querySelector("#withLearningMemory").checked == true &&
        learningMemory.length > 0) {
        gameWithLearningMemory();
    }
    if (document.querySelector("#withLearntStrategy").checked == true &&
        learningMemory.length == 0) {
        myConfirm2 = confirm("A tanulómemória jelenleg üres. Először futtassa le a 'Tanulójáték', a 'Memória tisztítása - 1' és a 'Memória tisztítása - 2' programrészeket. Különben a gép csak random lépéseket tesz. Ha az 'OK' gombra kattint, akkor ez a három programrészlet automatikusan lefut (kb. 15 mp.).")
        myMemory = 2;
    }
    if (document.querySelector("#withLearntStrategy").checked == true) {
        document.querySelector("#normal").checked = true;
    }
    if (myConfirm1 == true || myConfirm2 == true) {

        //running3In1();

    }
    if (document.querySelector("#withSimulatedLearntStrategy").checked == false) {
        document.querySelector("#labelForSimulatedAI").innerHTML = "a szimuláltMI";
        document.querySelector("#labelForSimulatedAI").style.color = "black"
    }
    if (document.querySelector("#withStoredLearningMemory").checked == true) {
        prepareForStoredLeraningMemory()
    }
    document.querySelector("#labelForProgram").innerHTML = "a program";
    document.querySelector("#labelForProgram").style.color = "black";
    hereNow_ = hereNow;
    bluringOrNot(hereNow_);
    gameWithSimulatedOrNOt();
    //newGame();

}

function prepareForStoredLeraningMemory() {

}

running3In1 = function () {
    memory1 = document.querySelector("#withLearningMemory").checked;
    memory2 = document.querySelector("#withLearntStrategy").checked;
    document.querySelector("#withLearningMemory").checked = false;
    document.querySelector("#withLearntStrategy").checked = false;
    document.querySelector("#withComputer").checked = true;
    document.querySelector("#computer").checked = true;
    document.querySelector("#withRandom").checked = true;
    document.querySelector("#checkBoxForCleverRandom2").checked = true;
    document.querySelector("#runningNumber").value = 10000;
    learning(); cleaningTheMemory(); cleaningTheMemory2();
    document.querySelector("#runningNumber").value = 1000;
    document.querySelector("#withLearningMemory").checked = memory1;
    document.querySelector("#withLearntStrategy").checked = memory2;
    if (myMemory == 1) { document.querySelector("#withLearningMemory").checked = true };
    if (myMemory == 2) { document.querySelector("#withLearntStrategy").checked = true };
    newGame();
}

sometimesBlurSwitchOn = function () {
    myLength = document.querySelectorAll(".sometimesBlurMain button").length;
    for (let i = 0; i < myLength; i++) {
        document.querySelectorAll(".sometimesBlurMain button")[i].disabled = true;
    }
    myLength = document.querySelectorAll(".sometimesBlurMain input").length;
    for (let i = 0; i < myLength; i++) {
        document.querySelectorAll(".sometimesBlurMain input")[i].disabled = true;
    }
    document.querySelector(".sometimesBlurMain select").disabled = true;
}

//sometimesBlurSwitchOn();


sometimesBlurSwitchOff = function () {
    document.querySelector(".sometimesBlurMain").classList.remove("blur");
    myLength = document.querySelectorAll(".sometimesBlurMain button").length;
    for (let i = 0; i < myLength; i++) {
        document.querySelectorAll(".sometimesBlurMain button")[i].disabled = false;
    }
    myLength = document.querySelectorAll(".sometimesBlurMain input").length;
    for (let i = 0; i < myLength; i++) {
        document.querySelectorAll(".sometimesBlurMain input")[i].disabled = false;
    }
    document.querySelector(".sometimesBlurMain select").disabled = false;
}

bluringOrNot = function () {
    if (hereNow_.getAttribute("id") == "twoPeople") {
        for (let i = 0; i < document.querySelectorAll(".sometimesBlur").length; i++) {
            document.querySelectorAll(".sometimesBlur")[i].classList.add("blur");
        }
        myLength = document.querySelectorAll(".sometimesBlur button").length;
        for (let i = 0; i < myLength; i++) {
            document.querySelectorAll(".sometimesBlur button")[i].disabled = true
        }
        myLength = document.querySelectorAll(".sometimesBlur input").length;
        for (let i = 0; i < myLength; i++) {
            document.querySelectorAll(".sometimesBlur input")[i].disabled = true
        }
        document.querySelector("#gamer").checked = true;
        document.querySelector("#computer").disabled = true;
        for (let i = 1; i < 10; i++) {
            document.querySelector(`#millTbody td[name='${i}']`).style["background-color"] = "#dbdbdb";
            document.querySelector(`#millTbody td[name='${i}']`).innerHTML = ""
        }
        newGame();
    }
    if (hereNow_.getAttribute("id") != "twoPeople") {
        for (let i = 0; i < document.querySelectorAll(".sometimesBlur").length; i++) {
            document.querySelectorAll(".sometimesBlur")[i].classList.remove("blur");
        }

        myLength = document.querySelectorAll(".sometimesBlur button").length;
        for (let i = 0; i < myLength; i++) {
            document.querySelectorAll(".sometimesBlur button")[i].disabled = false;
        }
        myLength = document.querySelectorAll(".sometimesBlur input").length;
        for (let i = 0; i < myLength; i++) {
            document.querySelectorAll(".sometimesBlur input")[i].disabled = false;
        }
        document.querySelector("#computer").disabled = false;
        //document.querySelector("#computer").checked = true;
        //starting();
    }
    if (sometimesBlurSwithOffBoolean == false) { sometimesBlurSwitchOn(); }
}

whoIsThePartner = function () {
    if (document.querySelector("#withProgram").checked == true) { partner = "program" };
    if (document.querySelector("#withRandom").checked == true) { partner = "random" };
    if (document.querySelector("#withSimulatedAI").checked == true) { partner = "simulatedAI" };
    if (document.querySelector("#withLearningMemory_").checked == true) { partner = "learningMemory" };
    if (document.querySelector("#withStoredLearningMemory").checked == true) { partner = "storedLearningMemory" }
    estimatedRunningNumberOninput()
}


estimatedRunningNumberOninput = function () {
    limit = document.querySelector("#runningNumber").value;
    limit = parseInt(limit);
    if (document.querySelector("#withSimulatedLearntStrategy").checked == true) {
        if (document.querySelector("#withSimulatedAI").checked == true) {
            appRunTime = limit * 0.082;
        }
        if (document.querySelector("#withRandom").checked == true) {
            appRunTime = limit * 0.056;
        }
        if (document.querySelector("#withProgram").checked == true) {
            appRunTime = limit * 0.052;
        }
        if (document.querySelector("#withLearningMemory_").checked == true) {
            appRunTime = 0;
            document.querySelector("#estimatedRunTime").innerHTML = "?"
        }
        if (appRunTime > 0) {
            whereShowTime = "#estimatedRunTime"
            showTime2(whereShowTime, appRunTime)
        }
    }
}


allRunsUntilNow = 0;
allRuns = 0;

$(document).ready(function () {
    $("#learningGameButton").click(function () {
        mySpinner
    })
});

mySpinner = function () {
    document.querySelector("#spinner_tanulojatek").style.visibility = "visible";
    //learningWithSpinner();
}

learningWithSpinner = function () {
    //setTimeout(learning(), 0)
    nowLearning = true;
    myPromise = new Promise((resolve, reject) => {
        learning();
        if (nowLearning == false) { resolve("hidden") }
    })

    console.log(document.querySelector("#spinner_tanulojatek").style.visibility)
    myPromise.then(data => { document.querySelector("#spinner_tanulojatek").style.visibility = data; console.log(data) })
}

function clickMakeInputsInactive() {
    if (document.querySelector("#withChange").checked == true) {
        for (let i = 0; i < document.querySelectorAll("input[name='partnerForGame']").length; i++) {
            document.querySelectorAll("input[name='partnerForGame']")[i].disabled = true;
        }
        for (let i = 0; i < document.querySelectorAll("input[name='typeOfGame']").length; i++) {
            document.querySelectorAll("input[name='typeOfGame']")[i].disabled = true;
        }
        document.querySelector("#checkBoxForCleverRandom1").disabled = true;
        document.querySelector("#checkBoxForCleverRandom2").disabled = true;
        document.querySelector("#cleverGame").disabled = true;
        document.querySelector("#cleverGame2").disabled = true;
    }
    if (document.querySelector("#withChange").checked == false) {
        for (let i = 0; i < document.querySelectorAll("input[name='partnerForGame']").length; i++) {
            document.querySelectorAll("input[name='partnerForGame']")[i].disabled = false;
        }
        for (let i = 0; i < document.querySelectorAll("input[name='typeOfGame']").length; i++) {
            document.querySelectorAll("input[name='typeOfGame']")[i].disabled = false;
        }
        document.querySelector("#checkBoxForCleverRandom1").disabled = false;
        document.querySelector("#checkBoxForCleverRandom2").disabled = false;
        document.querySelector("#cleverGame").disabled = false;
        document.querySelector("#cleverGame2").disabled = false;
    }
}

wasLearning = false;
learning = function () {
    if (document.querySelector("#withStoredLearningMemory").checked == true) { prepareForStoredLeraningMemory() }

    myWonMemory = Array();
    for (let i = 0; i < document.querySelectorAll(".forLightBlue").length; i++) {
        document.querySelectorAll(".forLightBlue")[i].classList.remove("lightBlue")
    }
    for (let i = 1; i < 10; i++) {
        document.querySelector(`#littleTbody2 td[name='${i}']`).innerHTML = "";
        document.querySelector(`#littleTbody2 td[name='${i}']`).style["background-color"] = "#dbdbdb";
    }
    for (let i = 1; i < 10; i++) {
        document.querySelector(`#littleTbody3 td[name='${i}']`).innerHTML = ""
        document.querySelector(`#littleTbody3 td[name='${i}']`).style["background-color"] = "#dbdbdb"
    }
    for (let i = 1; i < 10; i++) {
        document.querySelector(`#littleTbody4 td[name='${i}']`).innerHTML = ""
        document.querySelector(`#littleTbody4 td[name='${i}']`).style["background-color"] = "#dbdbdb"
    }
    for (let i = 1; i < 10; i++) {
        document.querySelector(`#littleTbody5 td[name='${i}']`).innerHTML = ""
        document.querySelector(`#littleTbody5 td[name='${i}']`).style["background-color"] = "#dbdbdb"
    }
    for (let i = 1; i < 10; i++) {
        document.querySelector(`#littleTbody6 td[name='${i}']`).innerHTML = ""
        document.querySelector(`#littleTbody6 td[name='${i}']`).style["background-color"] = "#dbdbdb"
    }
    for (let i = 1; i < 10; i++) {
        document.querySelector(`#littleTbody7 td[name='${i}']`).innerHTML = ""
        document.querySelector(`#littleTbody7 td[name='${i}']`).style["background-color"] = "#dbdbdb"
    }
    document.querySelector("#numberOfBasicPatterns").innerHTML = " - "
    document.querySelector("#numberOfGame").innerHTML = " - ";
    document.querySelector("#numberOfGame2").innerHTML = ` - `
    document.querySelector("#numberOfPatterns").innerHTML = " - ";
    document.querySelector("#numberOfGame").innerHTML = " - ";
    document.querySelector("#nine").innerHTML = " - ";
    document.querySelector("#lessThanNine").innerHTML = " - ";
    document.querySelector("#itHasStrategy").innerHTML = " -";
    document.querySelector("#itDoesNotHaveStrategy").innerHTML = " -"
    document.querySelector("#all").innerHTML = " -"
    document.querySelector("#all2").innerHTML = " -"
    document.querySelector("#learningGameButton").style.boxShadow = "none"
    document.querySelector("#all2").classList.remove("lightBlue")


    document.querySelector("#MemoryLengthForShowing").innerHTML = " - ";
    document.querySelector("#blueWonForShowing").innerHTML = " - ";
    document.querySelector("#redWonForShowing").innerHTML = " - ";
    document.querySelector("#undecidedForShowing").innerHTML = " - ";


    blueWonMemory = Array();
    redWonMemory = Array();
    undecidedMemory = Array();

    nowLearning = true;
    timeStart = new Date();
    limit = document.querySelector("#runningNumber").value;
    limit = parseInt(limit);

    if (document.querySelector("#notIndependentResult").checked == false) {
        allRuns = limit;
        allRunsUntilNow = limit;
        learningMemory = Array();
        shortMemory = Array();

        whoWon = { red: 0, blue: 0, undecided: 0 };
        howManyAV = Array();
        howManyPP = Array();
        for (let i = 0; i < programParts; i++) {
            notUsedProgramParts[i] = i;
            howManyPP[i] = 0;
            howManyAV[i] = 0;
        }
        strategiesArray = Array();
        allSteps = Array();
        redWonStrategiesArray = Array();

        strategiesWhenRedWon = Array();
        strategiesWhenBlueWon = Array();
        strategiesWhenUndecided = Array();
        for (let i = 0; i < programParts; i++) {
            strategiesWhenRedWon[i] = 0;
            strategiesWhenBlueWon[i] = 0;
            strategiesWhenUndecided[i] = 0;
        }

    };
    if (document.querySelector("#notIndependentResult").checked == true) {
        allRuns = allRuns + limit;
        learningMemory = shortMemory.slice(0);
    };
    for (s = 0; s < limit; s++) {
        if (s % 1000 == 0) { console.log("s=", s) }

        learningStepByStep();
        //if(red[0]==9 && blue[0]==6 && coins[0]=="red"){console.log("most");break}
        allSteps[s] = coins;

        if (document.querySelector("#withRandomEngine").checked == false) {
            avArray[avArray.length] = thereIsWinner;
            strategiesArray[strategiesArray.length] = avArray;
        }

        if (thereIsWinner == "red") {
            learningMemoryRedWon[learningMemoryRedWon.length] = coins.slice(0);
        };
        if (thereIsWinner == "blue") {
            learningMemoryBlueWon[learningMemoryBlueWon.length] = coins.slice(0);
        };
        if (thereIsWinner == "undecided") {
            learningMemoryUndecided[learningMemoryUndecided.length] = coins.slice(0);
        };
        learningMemory[learningMemory.length] = coins.slice(0);
        strategiesArray[strategiesArray.length] = strategyArray;
        learningMemory2[learningMemory2.length] = coins.slice(0);


    };
    if (document.querySelector("#withLearningMemory").checked == false) {
        shortMemory = learningMemory.slice(0);
    }

    for (let i = 0; i < shortMemory.length; i++) {
        if (shortMemory[i][shortMemory[i].length - 1] == "red") { shortMemory[i].pop(); redWon[redWon.length] = shortMemory[i].slice(0) };
        if (shortMemory[i][shortMemory[i].length - 1] == "blue") { shortMemory[i].pop(); blueWon[blueWon.length] = shortMemory[i].slice(0) };
        if (shortMemory[i][shortMemory[i].length - 1] == "undecided") { shortMemory[i].pop(); nobodyWon[nobodyWon.length] = shortMemory[i].slice(0) };
    }



    for (let i = 0; i < programParts; i++) {
        document.querySelector(`#resultsOneOfProgramParts td[name='${i}']`).innerHTML = howManyPP[i];
        document.querySelector(`#resultsTwoOfProgramParts td[name='${i}']`).innerHTML = howManyAV[i];
    };


    if (document.querySelector("#noTable").checked == false) {
        infoAboutStrategies();
    }
    timeFinish = new Date;
    whereShowTime = "#runTime"
    showTime(whereShowTime);
    /*time = (timeFinish - timeStart) / 1000;
    sec = Math.ceil(time % 60);
    min = Math.floor(time / 60) % 60;
    hour = Math.floor(time / 3600);
    document.querySelector("#runTime").innerHTML = `${hour} óra, ${min} perc, ${sec} másodperc`;*/

    document.querySelector("#runTimeForCleaning").innerHTML = " - ";
    document.querySelector("#limitForShowing").innerHTML = " - ";
    document.querySelector("#MemoryLengthForShowing").innerHTML = " - ";
    if (document.querySelector("#autoClean").checked == true) { cleaningTheMemory(); }

    appRunTime = 0.000000085 * (learningMemory.length) ** 2;
    whereShowTime = "#apprRunTimeForCleaning"
    showTime2(whereShowTime, appRunTime);
    showBasicPatterns3();
    newGame();

    nowLearning = false;
    wasLearning = true;

};



learningStepByStep = function () {
    //a computer kék a gamer piros
    if (document.querySelector("#stepAlternately").checked == true) {
        if (s % 2 == 0) { firstStep = "computer" }
        if (s % 2 == 1) { firstStep = "gamer" }
    }
    if (document.querySelector("#stepAlternatelyBlue").checked == true) {
        firstStep = "computer"
    }
    if (document.querySelector("#stepAlternatelyRed").checked == true) {
        firstStep = "gamer"
    }

    //if (document.querySelector("#withSimulatedAI").checked == true) {




    //}
    starting();
    avArray = Array();
    avArrayStep = Array();
    avArrayStep[0] = "-";

    while (thereIsWinner == "no") {
        if (document.querySelector("#withChange").checked == false) {
            if (document.querySelector("#withLearningMemory").checked == true
                || document.querySelector("#withStoredLearningMemory").checked == true
            ) {
                if (partner == "program") {
                    if (firstStep == "computer") {
                        //if (coins.length == 0) { stepShowsColor = 1; step = 1 }
                        nowTheComputerStep();
                        computerStep = true;
                        stepOnTheBoard(number);
                        computerStep = false;
                        isWinner();

                        if (thereIsWinner == "no") {
                            defenceOrAttack(id = "checkBoxForCleverRandom2");
                            if (number == 0) {
                                gameWithLearningMemory();
                            }
                            stepOnTheBoard(number);
                            isWinner();
                        };
                    }
                    if (firstStep == "gamer") {
                        //if (coins.length == 0) { stepShowsColor = 2; step = 0 }
                        defenceOrAttack(id = "checkBoxForCleverRandom2");
                        if (number == 0) {
                            gameWithLearningMemory();
                        }

                        stepOnTheBoard(number);
                        isWinner();
                        if (thereIsWinner == "no") {
                            nowTheComputerStep();
                            computerStep = true;
                            stepOnTheBoard(number);
                            computerStep = false;
                            isWinner();
                            //console.log("s", s, "red", red, "blue", blue, "av", av, "coins", coins, "avArray", avArray);
                        };
                    }
                }
                if (partner == "random" && thereIsWinner == "no") {
                    //miért kell a thereIsWinner == "no" ???????????????
                    //??????????????????????????????????????????????????
                    if (firstStep == "computer") {
                        //stepShowsColor = 1; step = 1
                        defenceOrAttack(myId = checkBoxForCleverRandom2.id);

                        if (number == 0) {
                            myNumber = Math.floor(Math.random() * freePlace.length);
                            number = freePlace[myNumber];
                        }
                        stepOnTheBoard(number);
                        isWinner();

                        if (thereIsWinner == "no") {
                            gameWithLearningMemory();
                            stepOnTheBoard(number);
                            isWinner();
                        };
                    }
                    if (firstStep == "gamer") {
                        //stepShowsColor = 2; step = 0
                        gameWithLearningMemory();
                        stepOnTheBoard(number);
                        isWinner();
                        if (thereIsWinner == "no") {
                            defenceOrAttack(myId = checkBoxForCleverRandom2.id);

                            if (number == 0) {
                                myNumber = Math.floor(Math.random() * freePlace.length);
                                number = freePlace[myNumber];
                            }
                            stepOnTheBoard(number);
                            isWinner();
                        };
                    }
                }

                if (partner == "learningMemory" || partner == "storedLearningMemory") {
                    prepareGameWithStoredLearningMemory();
                    if (firstStep == "computer") {
                        //a learningMemory csak olyan játékokat ismer, amelyek ugyanazzal s színnel kezdődnek, ezért itt cserélni kell a színeket
                        stepShowsColor = 1; step = 1

                        changeColor();
                        gameWithLearningMemory()
                        changeColorBack();
                        stepOnTheBoard(number);
                        isWinner();
                        if (thereIsWinner == "no") {
                            changeColor();
                            gameWithLearningMemory()
                            changeColorBack();
                            stepOnTheBoard(number);
                            isWinner();
                            //console.log("s", s, "red", red, "blue", blue, "av", av, "coins", coins, "avArray", avArray);
                        };
                        changeColorBack();
                    }
                    if (firstStep == "gamer") {
                        //stepShowsColor = 2; step = 0

                        gameWithLearningMemory()
                        stepOnTheBoard(number);
                        isWinner();
                        if (thereIsWinner == "no") {
                            gameWithLearningMemory()
                            stepOnTheBoard(number);
                            isWinner();
                            //console.log("s", s, "red", red, "blue", blue, "av", av, "coins", coins, "avArray", avArray);
                        };
                    }

                }
                if (thereIsWinner != "no") { improveShortMemory() };
            }

            //if (document.querySelector("#withSimulatedLearntStrategy").checked == true) {

            //}



            if (document.querySelector("#withComputer").checked == true) {
                if (partner == "random") {
                    if (firstStep == "computer") {
                        //stepShowsColor = 1;
                        nowTheComputerStep();
                        computerStep = true;
                        stepOnTheBoard(number);
                        computerStep = false;
                        isWinner();

                        if (thereIsWinner == "no") {
                            //stepShowsColor = 2;
                            defenceOrAttack(myId = checkBoxForCleverRandom2.id);

                            if (number == 0) {
                                myNumber = Math.floor(Math.random() * freePlace.length);
                                number = freePlace[myNumber];
                            };
                            //avArray[avArray.length] ="-";
                            mostNem = false
                            //mostNem = true; nowTheComputerStep(); mostNem = false;
                            stepOnTheBoard(number);
                            isWinner();
                        };
                    };
                    if (firstStep == "gamer") {
                        //stepShowsColor = 1;
                        defenceOrAttack(myId = checkBoxForCleverRandom2.id);
                        if (number == 0) {
                            myNumber = Math.floor(Math.random() * freePlace.length);
                            number = freePlace[myNumber];
                        }
                        stepOnTheBoard(number);
                        isWinner();
                        if (thereIsWinner == "no") {
                            //stepShowColors = 2;
                            nowTheComputerStep();
                            computerStep = true;
                            stepOnTheBoard(number);
                            computerStep = false;
                            isWinner();
                            //console.log("s", s, "red", red, "blue", blue, "av", av, "coins", coins, "avArray", avArray);
                        };
                    };
                };
                if (partner == "program") {
                    stepShowsColor = 1;
                    nowTheComputerStep();
                    stepOnTheBoard(number);
                    isWinner();
                    if (thereIsWinner == "no") {
                        nowTheComputerStep();
                        computerStep = true;
                        stepOnTheBoard(number);
                        computerStep = false;
                        isWinner();
                        //console.log("s", s, "red", red, "blue", blue, "av", av, "coins", coins, "avArray", avArray);
                    };

                }
                if (partner == "simulatedAI") {
                    if (firstStep == "computer") {

                        if (coins.length == 0) { stepShowsColor = 1; }
                        nowTheComputerStep();
                        stepOnTheBoard(number);
                        isWinner();

                        if (thereIsWinner == "no") {
                            if (coins.length == 0) { stepShowsColor = 1; }
                            gameByLearntMemory();
                            computerStep = true;
                            stepOnTheBoard(number);
                            computerStep = false;
                            isWinner();
                        };

                    }
                    if (firstStep == "gamer") {
                        if (coins.length == 0) { stepShowsColor = 2 };
                        gameByLearntMemory();
                        stepOnTheBoard(number);
                        isWinner();

                        if (thereIsWinner == "no") {
                            if (coins.length == 0) { stepShowsColor = 2; }
                            nowTheComputerStep();
                            computerStep = true;
                            stepOnTheBoard(number);
                            computerStep = false;
                            isWinner();

                        };
                    }
                }
            }

            if (document.querySelector("#withRandomEngine").checked == true) {
                if (firstStep == "computer") {
                    number = 0;
                    IPlayWith = "red";

                    if (coins.length == 0) { stepShowsColor = 2; }
                    defenceOrAttack(myId = checkBoxForCleverRandom1.id);
                    if (number == 0) {
                        chance = Math.floor(Math.random() * freePlace.length);
                        number = freePlace[chance];
                    }
                    //computerStep = true;
                    stepOnTheBoard(number);
                    //computerStep = false;
                    isWinner();
                    number = 0;
                    if (thereIsWinner == "no") {
                        defenceOrAttack(myId = checkBoxForCleverRandom2.id);
                        if (number == 0) {
                            chance = Math.floor(Math.random() * freePlace.length);
                            number = freePlace[chance];
                        }
                        stepOnTheBoard(number);
                        isWinner();
                    };
                    IPlayWith = "noData"
                }
                if (firstStep == "gamer") {
                    if (coins.length == 0) { stepShowsColor = 1; }
                    number = 0;
                    defenceOrAttack(myId = checkBoxForCleverRandom2.id);
                    if (number == 0) {
                        chance = Math.floor(Math.random() * freePlace.length);
                        number = freePlace[chance];
                    }
                    stepOnTheBoard(number);
                    isWinner();
                    number = 0;
                    if (thereIsWinner == "no") {
                        defenceOrAttack(myId = checkBoxForCleverRandom1.id);
                        if (number == 0) {
                            chance = Math.floor(Math.random() * freePlace.length);
                            number = freePlace[chance];
                        }
                        //computerStep = true;
                        stepOnTheBoard(number);
                        //computerStep = false;
                        isWinner();
                        //console.log("s", s, "red", red, "blue", blue, "av", av, "coins", coins, "avArray", avArray);
                    };
                }
                //}
            };
            if (document.querySelector("#withLearntStrategy").checked == true) {
                if (partner == "program") {
                    if (firstStep == "computer") {
                        IPlayWith = "red";

                        stepShowsColor = 1;
                        nowTheComputerStep();
                        computerStep = true;
                        stepOnTheBoard(number);
                        computerStep = false;
                        isWinner();

                        if (thereIsWinner == "no") {
                            gameByLearntMemory();
                            stepOnTheBoard(number);
                            isWinner();
                        };
                        IPlayWith = "noData"
                    }
                    if (firstStep == "gamer") {
                        stepShowsColor = 2;
                        gameByLearntMemory();
                        stepOnTheBoard(number);
                        isWinner();
                        if (thereIsWinner == "no") {
                            nowTheComputerStep();
                            computerStep = true;
                            stepOnTheBoard(number);
                            computerStep = false;
                            isWinner();
                            //console.log("s", s, "red", red, "blue", blue, "av", av, "coins", coins, "avArray", avArray);
                        };
                    }
                }
                if (partner == "random") {
                    if (firstStep == "computer") {

                        stepShowsColor = 1;

                        chance = Math.floor(Math.random() * freePlace.length);
                        number = freePlace[chance];

                        computerStep = true;
                        stepOnTheBoard(number);
                        computerStep = false;
                        isWinner();

                        if (thereIsWinner == "no") {
                            gameByLearntMemory();
                            stepOnTheBoard(number);
                            isWinner();
                        };
                    }
                    if (firstStep == "gamer") {
                        stepShowsColor = 2;
                        gameByLearntMemory();
                        stepOnTheBoard(number);
                        isWinner();
                        if (thereIsWinner == "no") {

                            chance = Math.floor(Math.random() * freePlace.length);
                            number = freePlace[chance];

                            computerStep = true;
                            stepOnTheBoard(number);
                            computerStep = false;
                            isWinner();
                            //console.log("s", s, "red", red, "blue", blue, "av", av, "coins", coins, "avArray", avArray);
                        };
                    }
                }
            }
            if (document.querySelector("#withSimulatedLearntStrategy").checked == true) {
                gameWithSimulatedOrNOt();
                if (partner == "program") {
                    if (firstStep == "computer") {
                        //IPlayWith = "red";

                        //stepShowsColor = 1;step=1
                        nowTheComputerStep();
                        computerStep = true;
                        stepOnTheBoard(number);
                        computerStep = false;
                        isWinner();

                        if (thereIsWinner == "no") {
                            gameByLearntMemory();
                            stepOnTheBoard(number);
                            isWinner();
                        };
                        //IPlayWith = "noData"
                    }
                    if (firstStep == "gamer") {
                        //stepShowsColor = 2;step=0;
                        gameByLearntMemory();
                        stepOnTheBoard(number);
                        isWinner();
                        if (thereIsWinner == "no") {
                            nowTheComputerStep();
                            computerStep = true;
                            stepOnTheBoard(number);
                            computerStep = false;
                            isWinner();
                            //console.log("s", s, "red", red, "blue", blue, "av", av, "coins", coins, "avArray", avArray);
                        };
                    }
                }
                if (partner == "random") {
                    if (firstStep == "computer") {
                        IPlayWith = "red";
                        stepShowsColor = 1;

                        chance = Math.floor(Math.random() * freePlace.length);
                        number = freePlace[chance];

                        computerStep = true;
                        stepOnTheBoard(number);
                        computerStep = false;
                        isWinner();

                        if (thereIsWinner == "no") {
                            gameByLearntMemory();
                            stepOnTheBoard(number);
                            isWinner();
                        };
                        IPlayWith = "noData";
                    }
                    if (firstStep == "gamer") {

                        stepShowsColor = 2;
                        gameByLearntMemory();
                        stepOnTheBoard(number);
                        isWinner();
                        if (thereIsWinner == "no") {

                            chance = Math.floor(Math.random() * freePlace.length);
                            number = freePlace[chance];

                            computerStep = true;
                            stepOnTheBoard(number);
                            computerStep = false;
                            isWinner();
                            //console.log("s", s, "red", red, "blue", blue, "av", av, "coins", coins, "avArray", avArray);
                        };

                    }
                }
                if (partner == "simulatedAI") {
                    if (firstStep == "computer") {

                        stepShowsColor = 1;
                        gameByLearntMemory();
                        stepOnTheBoard(number);
                        isWinner();

                        if (thereIsWinner == "no") {
                            gameByLearntMemory();
                            computerStep = true;
                            stepOnTheBoard(number);
                            computerStep = false;
                            isWinner();
                        };

                    }
                    if (firstStep == "gamer") {
                        stepShowsColor = 2;
                        gameByLearntMemory();
                        stepOnTheBoard(number);
                        isWinner();

                        if (thereIsWinner == "no") {
                            stepShowsColor = 2;
                            gameByLearntMemory();
                            computerStep = true;
                            stepOnTheBoard(number);
                            computerStep = false;
                            isWinner();

                        };
                    }
                    //if(red[0]==9 && blue[0]==6 && coins[0]=="red"){console.log("most");break}
                    //console.log(red[0],blue[0],coins[0])

                }
            }
        }
        else {
            /*chance=Math.ceil(Math.random()*2);
            if(chance==1){IPlayWith=="red";stepShowsColor = 1};
            if(chance==2){IPlayWith=="blue";stepShowsColor = 2};*/
            //computer - random
            if (s % 4 == 0) {
                nowTheComputerStep();
                computerStep = true;
                stepOnTheBoard(number);
                computerStep = false;
                isWinner();

                if (thereIsWinner == "no") {
                    //stepShowsColor = 2;
                    defenceOrAttack(myId = checkBoxForCleverRandom2.id);

                    if (number == 0) {
                        myNumber = Math.floor(Math.random() * freePlace.length);
                        number = freePlace[myNumber];
                    };
                    //avArray[avArray.length] ="-";
                    mostNem = false
                    //mostNem = true; nowTheComputerStep(); mostNem = false;
                    stepOnTheBoard(number);
                    isWinner();
                };
            };
            //computer - computer
            if (s % 4 == 1) {
                stepShowsColor = 1;
                nowTheComputerStep();
                stepOnTheBoard(number);
                isWinner();
                if (thereIsWinner == "no") {
                    nowTheComputerStep();
                    computerStep = true;
                    stepOnTheBoard(number);
                    computerStep = false;
                    isWinner();
                }
            }
            //random - computer
            if (s % 4 == 2) {
                number = 0;
                defenceOrAttack(myId = checkBoxForCleverRandom1.id);
                if (number == 0) {
                    chance = Math.floor(Math.random() * freePlace.length);
                    number = freePlace[chance];
                }
                //computerStep = true;
                stepOnTheBoard(number);
                //computerStep = false;
                isWinner();
                number = 0;
                if (thereIsWinner == "no") {
                    defenceOrAttack(myId = checkBoxForCleverRandom2.id);
                    if (number == 0) {
                        chance = Math.floor(Math.random() * freePlace.length);
                        number = freePlace[chance];
                    }
                    stepOnTheBoard(number);
                    isWinner();
                };
            }
            //random - random
            if (s % 4 == 3) {
                if (coins.length == 0) { stepShowsColor = 1; }
                number = 0;
                defenceOrAttack(myId = checkBoxForCleverRandom2.id);
                if (number == 0) {
                    chance = Math.floor(Math.random() * freePlace.length);
                    number = freePlace[chance];
                }
                stepOnTheBoard(number);
                isWinner();
                number = 0;
                if (thereIsWinner == "no") {
                    defenceOrAttack(myId = checkBoxForCleverRandom1.id);
                    if (number == 0) {
                        chance = Math.floor(Math.random() * freePlace.length);
                        number = freePlace[chance];
                    }
                    //computerStep = true;
                    stepOnTheBoard(number);
                    //computerStep = false;
                    isWinner();
                };
            }

        }

    };
};

function storedGamesOnclick() {
    wasLearening = true;
    prepareForStoredLeraningMemory();
    //document.querySelector("#numberOfBuiltedInGames").innerHTML=memoryFromLoad.game[0].game.length;
    if (document.querySelector("#withStoredLearningMemory").checked == true) {
        if (document.querySelector("#storedGamesMemoria1").checked == true) {
            memoryFromLoad1 = document.querySelector("#forLoadMyValue1").innerHTML
            memoryFromLoad1 = JSON.parse(memoryFromLoad1);
            myWonMemory_FromLoad = document.querySelector("#forLoadMyValue1").innerHTML
            myWonMemory_FromLoad = JSON.parse(myWonMemory_FromLoad)
            shortMemory = memoryFromLoad1.game[0].game;
        }
        if (document.querySelector("#storedGamesMemoria2").checked == true) {
            memoryFromLoad2 = document.querySelector("#forLoadMyValue2").innerHTML
            memoryFromLoad2 = JSON.parse(memoryFromLoad2);
            shortMemory = memoryFromLoad2.game[0].game;
            myWonMemory_FromLoad = document.querySelector("#forLoadMyValue2").innerHTML
            myWonMemory_FromLoad = JSON.parse(myWonMemory_FromLoad);
        }
        blueWonMemory = Array();
        redWonMemory = Array();
        undecidedMemory = Array();
        for (let i = 0; i < shortMemory.length; i++) {
            if (shortMemory[i][shortMemory[i].length - 1] == "BLUE") {
                blueWonMemory[blueWonMemory.length] = shortMemory[i];
            }
            if (shortMemory[i][shortMemory[i].length - 1] == "RED") {
                redWonMemory[redWonMemory.length] = shortMemory[i];
            }
            if (shortMemory[i][shortMemory[i].length - 1] == "UNDECIDED") {
                undecidedMemory[undecidedMemory.length] = shortMemory[i];
            }
        }
    }
    myWonMemory = Array();
    if (document.querySelector("#radioBlue").checked == true) { myWonMemory = blueWonMemory.slice(0) }
    if (document.querySelector("#radioRed").checked == true) { myWonMemory = redWonMemory.slice(0) }
    if (document.querySelector("#radioUndecided").checked == true) { myWonMemory = undecidedMemory.slice(0) }
    //makeSimulatedStrategies();

    stepNumber = 1;
    gameNumber5 = 0;
    document.querySelector("#blueWonNumber").innerHTML = blueWonMemory.length;
    document.querySelector("#redWonNumber").innerHTML = redWonMemory.length;
    document.querySelector("#undecidedNumber").innerHTML = undecidedMemory.length;
    //if (document.querySelector("#radioBlue").checked == true) { myWonMemory = blueWonMemory.slice(0) }
    //if (document.querySelector("#radioRed").checked == true) { myWonMemory = redWonMemory.slice(0) }
    //if (document.querySelector("#radioUndecided").checked == true) { myWonMemory = undecidedMemory.slice(0) }
    document.querySelector("#gameNumberInfo").innerHTML = myWonMemory.length;
    gameNumber5 = 1;
    stepNumber = 1;
    gameNumber6 = 0;
    showTheGames();
    //whatWeShow();
    //showTheStoredGameSteps();
    /*if (document.querySelector("#storedGamesMemoria1").checked == true) {
        document.querySelector("#numberOfBuiltedInGames").innerHTML = memoryFromLoad1.game[0].game.length;
    }
    if (document.querySelector("#storedGamesMemoria2").checked == true) {
        document.querySelector("#numberOfBuiltedInGames").innerHTML = memoryFromLoad2.game[0].game.length;
    }*/
}

//setTimeout(function(){storedGamesOnclick()},100);

changeColor = function () {
    itWasBlue = blue.slice(0);
    itWasRed = red.slice(0);
    blue = itWasRed.slice(0)
    red = itWasBlue.slice(0)
}
changeColorBack = function () {
    blue = itWasBlue.slice(0)
    red = itWasRed.slice(0)
}

defenceOrAttack = function (myId) {
    if (document.querySelector(`#${myId}`).checked == true) {
        defenceOrAttack2();
    }
    //if (number != 0 && nowLearning == false) { console.log("defenceOrAttack") }
    //if (number != 0 && nowLearning == false) { console.log("numberBlue", numberBlue) }
    //if (number != 0 && nowLearning == false) { console.log("numberRed", numberRed) }
}

defenceOrAttack2 = function () {
    foundIt = false;
    number = 0; numberBlue = 0; numberRed = 0; numberRedArray = Array(); numberBlueArray = Array();
    for (let i = 0; i < red.length - 1; i++) {
        for (let j = i + 1; j < red.length; j++) {
            place = 15 - red[i] - red[j];
            if (freePlace.includes(place) == true) {
                numberRed = place;
                numberRedArray[numberRedArray.length] = place;
            }
        }
    }
    for (let i = 0; i < blue.length - 1; i++) {
        for (let j = i + 1; j < blue.length; j++) {
            place = 15 - blue[i] - blue[j];
            if (freePlace.includes(place) == true) {
                numberBlue = place;
                numberBlueArray[numberBlueArray.length] = place
            }
        }
    }
    if (coins[coins.length - 2] == "blue") {
        if (numberBlue != 0) { number = numberBlue }
        if (numberRed != 0 && number == 0) { number = numberRed }
    }
    if (coins[coins.length - 2] == "red") {
        if (numberRed != 0) { number = numberRed }
        if (numberBlue != 0 && number == 0) { number = numberBlue }
    }
    if (number != 0) { foundIt = true }
    return number, numberRed, numberBlue
}

check2 = function () {
    for (i = 0; i < learningMemory.length; i++) {
        if (learningMemory[i][learningMemory[i].length - 1] == "RED") {
            console.log("red", i);
        }
    }
}

blueWonMemoryOriginalIndex = Array();
function improveShortMemory() {
    wantIt = 0;
    for (let i = 0; i < shortMemory.length; i++) {
        index = 0;
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] == shortMemory[i][j]) {
                index = index + 1;
            }
        }
        if (index == coins.length) { wantIt = wantIt + 1 }
    }
    if (wantIt == 0) {
        shortMemory[shortMemory.length] = coins.slice(0);
        if (coins[coins.length - 1] == "BLUE") { blueWonMemory[blueWonMemory.length] = coins.slice(0); }
        if (coins[coins.length - 1] == "RED") { redWonMemory[redWonMemory.length] = coins.slice(0) }
        if (coins[coins.length - 1] == "UNDECIDED") { undecidedMemory[undecidedMemory.length] = coins.slice(0) }
    }
    if (shortMemory.length == 0) { shortMemory[shortMemory.length] = coins.slice(0); }
}

infoAboutStrategies = function () {
    strategiesWhenRedWon = Array();
    strategiesWhenBlueWon = Array();
    strategiesWhenUndecided = Array();
    for (let i = 0; i < programParts; i++) {
        strategiesWhenRedWon[i] = 0;
        strategiesWhenBlueWon[i] = 0;
        strategiesWhenUndecided[i] = 0;
    }
    for (let i = 0; i < strategiesArray.length; i++) {
        if (strategiesArray[i][strategiesArray[i].length - 1] == "red") {
            for (let j = 0; j < strategiesArray[i].length - 1; j++) {
                strategiesWhenRedWon[strategiesArray[i][j]] = strategiesWhenRedWon[strategiesArray[i][j]] + 1;
            }
        };
        if (strategiesArray[i][strategiesArray[i].length - 1] == "blue") {
            for (let j = 0; j < strategiesArray[i].length - 1; j++) {
                strategiesWhenBlueWon[strategiesArray[i][j]] = strategiesWhenBlueWon[strategiesArray[i][j]] + 1;
            }
        };
        if (strategiesArray[i][strategiesArray[i].length - 1] == "undecided") {
            for (let j = 0; j < strategiesArray[i].length - 1; j++) {
                strategiesWhenUndecided[strategiesArray[i][j]] = strategiesWhenUndecided[strategiesArray[i][j]] + 1;
            }
        };

        for (let i = 0; i < programParts; i++) {
            document.querySelector(`#redWonId td[name='${i}']`).innerHTML = strategiesWhenRedWon[i];
            document.querySelector(`#blueWonId td[name='${i}']`).innerHTML = strategiesWhenBlueWon[i];
            document.querySelector(`#undecidedId td[name='${i}']`).innerHTML = strategiesWhenUndecided[i];
        };
    }
};

clearTable = function () {
    for (let i = 0; i < programParts; i++) {
        document.querySelector(`#redWonId td[name='${i}']`).innerHTML = "-";
        document.querySelector(`#blueWonId td[name='${i}']`).innerHTML = "-";
        document.querySelector(`#undecidedId td[name='${i}']`).innerHTML = "-";
    }
}

info = function (a) {
    sum = 0;
    for (let i = 0; i < strategiesArray.length; i++) {
        for (let j = 0; j < strategiesArray[i].length; j++) {
            if (strategiesArray[i][j] == a) { sum = sum + 1 }
        }
    }
}

cleaningIsDone = false;
appRunTime = 0;
shortMemoryOriginalIndex = Array();
cleaningTheMemory = function () {
    if (learningMemory.length == 0 || learningMemory.length == 36833) {
        alert("Először futtasson tanulójátékot!");
        document.querySelector("#learningGameButton").style.boxShadow = "5px 10px black"
    }
    else {
        cleaningIsDone = true;
        document.querySelector("#cleaningTheMemoryButton1").style.boxShadow = "none";
        myConfirm = true;
        if (document.querySelector("#autoClean").checked == false) {
            if (appRunTime > 60) {
                myConfirm = confirm(`A futásidő becsült értéke ${hour2} óra, ${min2} perc, ${sec2} mp`)
            }
        }
        if (myConfirm == true) {
            timeStart = new Date();
            memoryCleaner = Array();
            for (let i = 0; i < learningMemory.length; i++) { memoryCleaner[i] = "need" }
            for (let i = 0; i < learningMemory.length; i++) {
                if (i % 10000 == 0) { console.log("cleaning:", i, "length", learningMemory.length) };
                for (let j = i + 1; j < learningMemory.length; j++) {
                    if (learningMemory[i].length == learningMemory[j].length) {
                        index = 0;
                        for (let k = 0; k < learningMemory[i].length; k++) {
                            if (learningMemory[i][k] == learningMemory[j][k]) {
                                index = index + 1;
                            }
                        }
                        if (index == learningMemory[i].length) { memoryCleaner[i] = "noNeed"; }
                    }
                }
            }
            shortMemory = Array();
            myStrategyArray2 = Array();
            for (let i = 0; i < learningMemory.length; i++) {
                if (memoryCleaner[i] == "need") {
                    shortMemory[shortMemory.length] = learningMemory[i].slice(0)
                    shortMemoryOriginalIndex[shortMemoryOriginalIndex.length] = i;
                    myStrategyArray2[myStrategyArray2.length] = myStrategyArray[i].slice(0);
                }
            }
            learningMemory = shortMemory.slice(0);
            blueWonMemory = Array();
            redWonMemory = Array();
            undecidedMemory = Array();
            blueWonMemoryStrategies = Array();
            redWonMemoryStrategies = Array();
            undecidedMemoryStrategies = Array();
            blueWonBigFilterArray1 = Array();
            for (let i = 0; i < learningMemory.length; i++) {
                if (learningMemory[i][learningMemory[i].length - 1] == "BLUE") {
                    blueWonMemory[blueWonMemory.length] = learningMemory[i].slice(0);
                    blueWonMemoryOriginalIndex[blueWonMemoryOriginalIndex.length] = shortMemoryOriginalIndex[i];
                    blueWonMemoryStrategies[blueWonMemoryStrategies.length] = myStrategyArray2[i].slice(0);
                    blueWonBigFilterArray1[blueWonBigFilterArray1.length] = i;
                }
                if (learningMemory[i][learningMemory[i].length - 1] == "RED") {
                    redWonMemory[redWonMemory.length] = learningMemory[i].slice(0);
                }
                if (learningMemory[i][learningMemory[i].length - 1] == "UNDECIDED") {
                    undecidedMemory[undecidedMemory.length] = learningMemory[i].slice(0);
                    undecidedMemoryStrategies[undecidedMemoryStrategies.length] = myStrategyArray2[i].slice(0);
                }
            }

            timeFinish = new Date();
            whereShowTime = "#runTimeForCleaning"
            showTime(whereShowTime);
            document.querySelector("#limitForShowing").innerHTML = allRuns;;
            percentage = Math.floor((shortMemory.length / allRuns) * 100);
            percentage2 = Math.floor((blueWonMemory.length / shortMemory.length) * 100);
            percentage3 = Math.floor((redWonMemory.length / shortMemory.length) * 100);
            percentage4 = Math.floor((undecidedMemory.length / shortMemory.length) * 100);
            document.querySelector("#MemoryLengthForShowing").innerHTML = `${shortMemory.length} (${percentage} %)`;
            document.querySelector("#blueWonForShowing").innerHTML = `${blueWonMemory.length}  (${percentage2} %)`;
            document.querySelector("#redWonForShowing").innerHTML = `${redWonMemory.length}  (${percentage3} %)`;
            document.querySelector("#undecidedForShowing").innerHTML = `${undecidedMemory.length}  (${percentage4} %)`;
        }
        if (blueWonMemory.length > 0) { showGames() };
        if (document.querySelector("#autoClean2").checked == true) { cleaningTheMemory2() }
        makeFakeMemoryForGameWithLearningMemory();
        
    }
    whatWeShow();
   
}

makeFakeMemoryForGameWithLearningMemory = function () {
    redWonMemoryFake = Array();
    blueWonMemoryFake = Array();
    undecidedMemoryFake = Array();
    blueWonMemoryStrategiesFake = Array();
    redWonMemoryStrategiesFake = Array();
    undecidedMemoryStrategiesFake = Array();

    for (let i = 0; i < blueWonMemory.length; i++) {
        myArray = Array();
        for (let j = 0; j < blueWonMemory[i].length; j++) {
            myValue = 0;
            if (blueWonMemory[i][j] == "blue") { myValue = "red" }
            if (blueWonMemory[i][j] == "red") { myValue = "blue" }
            if (blueWonMemory[i][j] == "BLUE") { myValue = "RED" }
            if (blueWonMemory[i][j] == "RED") { myValue = "BLUE" }
            if (myValue == 0) { myValue = blueWonMemory[i][j] }
            myArray[myArray.length] = myValue;
            myStrategies = blueWonMemoryStrategies[i].slice(0);
        }
        if (myArray[myArray.length - 1] == "BLUE") {
            blueWonMemoryFake[blueWonMemoryFake.length] = myArray;
            blueWonMemoryStrategiesFake[blueWonMemoryStrategiesFake.length] = myStrategies;
        }
        if (myArray[myArray.length - 1] == "RED") {
            redWonMemoryFake[redWonMemoryFake.length] = myArray;
            redWonMemoryStrategiesFake[redWonMemoryStrategiesFake.length] = myStrategies
        }
        if (myArray[myArray.length - 1] == "UNDECIDED") {
            undecidedMemoryFake[undecidedMemoryFake.length] = myArray;
            undecidedMemoryStrategiesFake[undecidedMemoryStrategiesFake.length] = myStrategies
        }
    }
    for (let i = 0; i < redWonMemory.length; i++) {
        myArray = Array();
        for (let j = 0; j < redWonMemory[i].length; j++) {
            myValue = 0;
            if (redWonMemory[i][j] == "blue") { myValue = "red" }
            if (redWonMemory[i][j] == "red") { myValue = "blue" }
            if (redWonMemory[i][j] == "BLUE") { myValue = "RED" }
            if (redWonMemory[i][j] == "RED") { myValue = "BLUE" }
            if (myValue == 0) { myValue = redWonMemory[i][j] }
            myArray[myArray.length] = myValue;
            if (redWonMemoryStrategies.length == 0) { myStrategies = "-" }
            else { myStrategies = redWonMemoryStrategies[i].slice(0) };
        }
        if (myArray[myArray.length - 1] == "BLUE") {
            blueWonMemoryFake[blueWonMemoryFake.length] = myArray;
            blueWonMemoryStrategiesFake[blueWonMemoryStrategiesFake.length] = myStrategies;
        }
        if (myArray[myArray.length - 1] == "RED") {
            redWonMemoryFake[redWonMemoryFake.length] = myArray;
            redWonMemoryStrategiesFake[redWonMemoryStrategiesFake.length] = myStrategies
        }
        if (myArray[myArray.length - 1] == "UNDECIDED") {
            undecidedMemoryFake[undecidedMemoryFake.length] = myArray;
            undecidedMemoryStrategiesFake[undecidedMemoryStrategiesFake.length] = myStrategies
        }
    }
    for (let i = 0; i < undecidedMemory.length; i++) {
        myArray = Array();
        for (let j = 0; j < undecidedMemory[i].length; j++) {
            myValue = 0;
            if (undecidedMemory[i][j] == "blue") { myValue = "red" }
            if (undecidedMemory[i][j] == "red") { myValue = "blue" }
            //if(undecidedMemory[i][j]=="BLUE"){myValue="RED"}
            //if(undecidedMemory[i][j]=="RED"){myValue="BLUE"}
            if (myValue == 0) { myValue = undecidedMemory[i][j] }
            myArray[myArray.length] = myValue;
            myStrategies = undecidedMemoryStrategies[i].slice(0);
        }
        if (myArray[myArray.length - 1] == "BLUE") {
            blueWonMemoryFake[blueWonMemoryFake.length] = myArray;
            blueWonMemoryStrategiesFake[blueWonMemoryStrategiesFake.length] = myStrategies;
        }
        if (myArray[myArray.length - 1] == "RED") {
            redWonMemoryFake[redWonMemoryFake.length] = myArray;
            redWonMemoryStrategiesFake[redWonMemoryStrategiesFake.length] = myStrategies
        }
        if (myArray[myArray.length - 1] == "UNDECIDED") {
            undecidedMemoryFake[undecidedMemoryFake.length] = myArray;
            undecidedMemoryStrategiesFake[undecidedMemoryStrategiesFake.length] = myStrategies
        }

    }
}

sometimesBlurSwithOffBoolean = false;
cleaningTheMemory2 = function () {
    timeStart = new Date();

    sometimesBlurSwitchOff();
    sometimesBlurSwithOffBoolean = true;

    ultimateMemory = Array();
    ultimateMemory2 = Array();
    ultimateMemory3 = Array();
    ultimateMemory4 = Array();
    ultimateMemory9 = Array();
    blueWonBigFilterArray2 = Array();
    if (cleaningIsDone == false) {
        alert("Először futtassa a felette lévő memóriatisztítást!");
        document.querySelector("#cleaningTheMemoryButton1").style.boxShadow = "5px 10px black"
    }
    needDelete = Array();
    for (let i = 0; i < blueWonMemory.length - 1; i++) {
        deleteFromThis = i;
        dontDeleteThis = i;
        originalArray = blueWonMemory[i].slice(0);
        for (let j = 0; j < 4; j++) {
            if (j > 0) {
                rotation90Degree(originalArray);
                noNeedFunction(deleteFromThis, blueWonMemory, copy);
                originalArray = copy.slice(0);
            }
            verticalReflection(originalArray);
            noNeedFunction(deleteFromThis, blueWonMemory, copy);
            centralReflection(copy);
            noNeedFunction(deleteFromThis, blueWonMemory, copy);
            horizontalReflection(originalArray);
            noNeedFunction(deleteFromThis, blueWonMemory, copy);
            centralReflection(copy);
            noNeedFunction(deleteFromThis, blueWonMemory, copy);
            centralReflection(originalArray);
            noNeedFunction(deleteFromThis, blueWonMemory, copy);
        }
    }
    for (let i = 0; i < blueWonMemory.length; i++) {
        if (needDelete.includes(i) == false) {
            ultimateMemory[ultimateMemory.length] = blueWonMemory[i].slice(0);
            blueWonBigFilterArray2[blueWonBigFilterArray2.length] = blueWonBigFilterArray1[i];
            if (blueWonMemory[i].length < 19) {
                ultimateMemory2[ultimateMemory2.length] = blueWonMemory[i].slice(0);
            }
            if (blueWonMemory[i].length == 19) {
                ultimateMemory9[ultimateMemory9.length] = blueWonMemory[i].slice(0);
            }
        }
        document.querySelector("#all").innerHTML = ultimateMemory.length;
        document.querySelector("#nine").innerHTML = ultimateMemory9.length;
        document.querySelector("#lessThanNine").innerHTML = ultimateMemory2.length;
    }
    itHasStrategyFunction();
    gameNumber = 0;
    stepNumber = 1;
    showTheGamesFromTheUltimateMemories();
    timeFinish = new Date();
    showTime("#strategyTime");
    lookingForPatterns();
    document.querySelector("#numberOfStoredGames").innerHTML = `${shortMemory.length}`;
    document.querySelector("#numberOfStoredGames1").innerHTML = `${shortMemory.length}`;
    document.querySelector("#numberOfStoredGames3").innerHTML = `${shortMemory.length}`;
    showBasicPatterns();
    //showBasicPatterns3();
    showGames();
    gameNumber6 = 0;
    stepNumber = 1;

}

rotation90DegreeArray = [7, 4, 1, 8, 5, 2, 9, 6, 3];
rotation90Degree = function () {
    copy = Array();
    for (let j = 0; j < originalArray.length; j++) {
        if (originalArray[j] == "blue" || originalArray[j] == "red" ||
            originalArray[j] == "BLUE" || originalArray[j] == "RED") { copy[j] = originalArray[j] }
        if (originalArray[j] == 1) { copy[j] = rotation90DegreeArray[originalArray[j]] }
    }
    return copy;
};

copy = Array();
verticalReflectionArray = [1, 4, 7, 2, 5, 8, 3, 6, 9];
verticalReflection = function () {
    for (let j = 0; j < originalArray.length; j++) {
        if (originalArray[j] == "blue" || originalArray[j] == "red" ||
            originalArray[j] == "BLUE" || originalArray[j] == "RED") { copy[j] = originalArray[j] }
        if (originalArray[j] == 1) { copy[j] = verticalReflectionArray[originalArray[j]] }
    }
    return copy;
}

horizontalReflectionArray = [9, 6, 3, 8, 5, 2, 7, 4, 1];
horizontalReflection = function () {
    for (let j = 0; j < originalArray.length; j++) {
        if (originalArray[j] == "blue" || originalArray[j] == "red" ||
            originalArray[j] == "BLUE" || originalArray[j] == "RED") { copy[j] = originalArray[j] }
        if (originalArray[j] == 1) { copy[j] = horizontalReflectionArray[originalArray[j]] }
    }
    return copy;
}

centralReflectionArray = [9, 8, 7, 6, 5, 4, 3, 2, 1]
centralReflection = function () {
    for (let j = 0; j < originalArray.length; j++) {
        if (originalArray[j] == "blue" || originalArray[j] == "red" ||
            originalArray[j] == "BLUE" || originalArray[j] == "RED") { copy[j] = originalArray[j] }
        if (originalArray[j] == 1) { copy[j] = centralReflectionArray[originalArray[j]] }
    }
    return copy;
}

noNeedFunction = function (deleteFromThis, blueWonMemory, copy) {
    for (let k = deleteFromThis + 1; k < blueWonMemory.length; k++) {
        index = 0;
        if (blueWonMemory[k].length == copy.length && k != dontDeleteThis) {
            for (let m = 0; m < copy.length; m++) {
                if (blueWonMemory[k][m] == copy[m]) {
                    index = index + 1;
                }
            }
        }
        if (index == copy.length) { needDelete[needDelete.length] = k }
    }
}

blueWonBigFilterArray3 = Array();
engagedPlaces = Array();
lookingForStrategy = function (difference, i) {

    temporaryMemory = Array();
    engagedPlaces = Array();
    for (let j = 0; j < ultimateMemory[i].length - difference; j++) {
        if (ultimateMemory[i][j - 1] == "blue") {
            temporaryMemory[temporaryMemory.length] = ultimateMemory[i][j];
        }
        if (numbers.includes(ultimateMemory[i][j])) {
            engagedPlaces[engagedPlaces.length] = ultimateMemory[i][j];
        }
    }

    strategySignal = 0;
    for (let k = 1; k < 10; k++) {
        if (engagedPlaces.includes(k) == false) {
            for (let m = 0; m < temporaryMemory.length; m++) {
                for (let n = m + 1; n < temporaryMemory.length; n++) {
                    if (temporaryMemory[n] + temporaryMemory[m] + k == 15) {
                        strategySignal = strategySignal + 1;
                        if (strategySignal == 1) {
                            myYellow[0] = temporaryMemory[n];
                            myYellow[1] = temporaryMemory[m];
                            myYellow[2] = k;
                        }
                        if (strategySignal == 2) {
                            myYellow[3] = temporaryMemory[n];
                            myYellow[4] = temporaryMemory[m];
                            myYellow[5] = k;

                        }
                        if (strategySignal == 3) {
                            myYellow[6] = temporaryMemory[n];
                            myYellow[7] = temporaryMemory[m];
                            myYellow[8] = k;

                        }
                    }
                    //if (strategySignal == 2) {
                    //break
                    //}
                }
                //if (strategySignal == 2) { break }
            }
            if (strategySignal == 2 && noMore == true) {
                ultimateMemory3[ultimateMemory3.length] = ultimateMemory[i];
                blueWonBigFilterArray3[blueWonBigFilterArray3.length] = blueWonBigFilterArray2[i];
                yellowLines[ultimateMemory3.length - 1] = myYellow;
                thereIsStrategy = true;
                noMore = false;
                //break;
            }
            if (strategySignal == 3) {
                yellowLines[ultimateMemory3.length - 1] = myYellow;
            }
        }
        //if (strategySignal == 2) { break }
    }
}

itHasStrategyFunction = function () {
    yellowLines = Array();
    ultimateMemory3 = Array();
    for (let i = 0; i < ultimateMemory.length; i++) {
        thereIsStrategy = false;
        myYellow = Array();
        for (let difference = 0; difference < 19; difference++) {
            if (thereIsStrategy == false) {
                noMore = true;
                lookingForStrategy(difference, i);
            }
        }
        if (thereIsStrategy == false) { ultimateMemory4[ultimateMemory4.length] = ultimateMemory[i].slice(0); }
    }
    document.querySelector("#itHasStrategy").innerHTML = ultimateMemory3.length;
    document.querySelector("#itDoesNotHaveStrategy").innerHTML = ultimateMemory4.length;
}

nostep = false;
showTheGamesFromTheUltimateMemories = function () {
    for (let i = 0; i < document.querySelectorAll(".forLightBlue").length; i++) {
        document.querySelectorAll(".forLightBlue")[i].classList.add("lightBlue")
    }
    document.querySelector("#numberOfGame").innerHTML = `${gameNumber + 1}. `;
    if (document.querySelector("#nineStep").checked == true) {
        myUltimateMemoryArray = ultimateMemory9.slice(0);
    }
    if (document.querySelector("#lessThanNineStep").checked == true) {
        myUltimateMemoryArray = ultimateMemory2.slice(0);
    }
    if (document.querySelector("#itHasStrategyStep").checked == true) {
        myUltimateMemoryArray = ultimateMemory3.slice(0);
    }
    noStep = false;
    if (document.querySelector("#itDoesNotHaveStrategyStep").checked == true) {
        myUltimateMemoryArray = ultimateMemory4.slice(0);
        if (ultimateMemory4.length == 0) {
            stepNumber = 0; gameNumber = 0;
            document.querySelector("#numberOfGame").innerHTML = " - "
            noStep = true;
        }
    }
    if (document.querySelector("#anyStep").checked == true) {
        myUltimateMemoryArray = ultimateMemory.slice(0);
    }
    myGame = myUltimateMemoryArray[gameNumber];
    for (let i = 1; i < 10; i++) {
        document.querySelector(`#littleTbody2 td[name='${i}']`).innerHTML = "";
    }
    if (myUltimateMemoryArray.length > 0) {
        for (let i = 0; i < stepNumber; i++) {
            if (myGame[i] == "blue") {
                document.querySelector(`#littleTbody2 td[name='${myGame[i + 1]}']`).innerHTML = "&#128309"
            }
            if (myGame[i] == "red") {
                document.querySelector(`#littleTbody2 td[name='${myGame[i + 1]}']`).innerHTML = "&#128308"
            }
        }
    }

    if (yellowLines.length > 0) {
        for (let i = 1; i < 10; i++) {
            if (document.querySelector("#itHasStrategyStep").checked == true &&
                yellowLines[gameNumber].includes(i)) {
                document.querySelector(`#littleTbody2 td[name='${i}']`).style["background-color"] = "#ffff66"
            }
            else {
                document.querySelector(`#littleTbody2 td[name='${i}']`).style["background-color"] = "#dbdbdb"
            }
        }
    }

}














noNeedFunctionForPatterns = function (myArray) {
    for (let i = 0; i < myArray.length - 1; i++) {
        for (let j = i + 1; j < myArray.length; j++) {
            index = 0;
            for (let k = 0; k < 10; k++) {
                if (myArray[i][k] == myArray[j][k]) {
                    index = index + 1;
                }
            }
            if (index == 10) { noNeed[noNeed.length] = j }
        }
    }
};

noNeedFunctionForPatternsWithElement = function (myArray, newVersion, original) {
    for (let i = 0; i < myArray.length; i++) {
        index = 0;
        index2 = 0;
        for (let k = 0; k < 10; k++) {
            if (myArray[i][k] == newVersion[k]) {
                index = index + 1;
            }
            for (let k = 0; k < 10; k++) {
                if (myArray[i][k] == original[k]) {
                    index2 = index2 + 1;
                }
                if (index == 10 && index2 != 10) { noNeed[noNeed.length] = j }
            }
        }
    };
};

noNeedFunctionForPatterns2 = function (myArray, myCopy, myOriginalIndex) {
    for (let g = myOriginalIndex + 1; g < myArray.length; g++) {
        index = 0;
        for (let d = 0; d < 10; d++) {
            if (myArray[g][d] == myCopy[d] && g != myOriginalIndex) {
                index = index + 1;
            }
        }
        if (index == 10 && g != myOriginalIndex) {
            noNeed[noNeed.length] = g;
        }
    }
}

blueWonBigFilterArray4 = Array();
blueWonBigFilterArray5 = Array();



lookingForPatterns = function () {
    patternsArray = Array();
    patternsArray2 = Array();
    patternsArray3 = Array();
    myColor = "blue";
    myArray = ultimateMemory3.slice(0);
    for (let i = 0; i < myArray.length; i++) {
        pattern = ["nothing", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"];
        for (let j = 0; j < myArray[i].length; j++) {
            if (myArray[i][j] == myColor) { pattern[myArray[i][j + 1]] = myColor }
        }
        patternsArray[patternsArray.length] = pattern;
    }

    yellowLines2 = Array();
    yellowLines3 = Array();
    noNeed = Array();
    noNeedFunctionForPatterns(myArray = patternsArray);

    for (let i = 0; i < patternsArray.length; i++) {
        if (noNeed.includes(i) == false) {
            patternsArray2[patternsArray2.length] = patternsArray[i].slice(0)
            blueWonBigFilterArray4[blueWonBigFilterArray4.length] = blueWonBigFilterArray3[i];
            yellowLines2[yellowLines2.length] = yellowLines[i].slice(0)
        }
    }

    for (let i = 0; i < patternsArray2.length - 1; i++) {
        originalArray = patternsArray2[i].slice(0);
        originalArray2 = Array();
        copy = patternsArray2[i].slice(0);
        for (let j = 0; j < 4; j++) {
            if (j > 0) {
                rotation90DegreePatterns(originalArray);
                noNeedFunctionForPatterns(myArray = patternsArray2);
                originalArray = copy.slice(0);
            }
            noNeedFunctionForPatterns(myArray = patternsArray2);
            verticalReflectionPatterns(originalArray);
            noNeedFunctionForPatterns(myArray = patternsArray2);
            centralReflectionPatterns(originalArray2);
            noNeedFunctionForPatterns(myArray = patternsArray2);
            horizontalReflectionPatterns(originalArray);
            noNeedFunctionForPatterns(myArray = patternsArray2);
            centralReflectionPatterns(originalArray2);
            noNeedFunctionForPatterns(myArray = patternsArray2);
            centralReflectionPatterns(originalArray);
            noNeedFunctionForPatterns(myArray = patternsArray2);
        }
    }

    for (let i = 0; i < patternsArray2.length; i++) {
        if (noNeed.includes(i) == false) {
            patternsArray3[patternsArray3.length] = patternsArray2[i].slice(0)
            blueWonBigFilterArray5[blueWonBigFilterArray5.length] = blueWonBigFilterArray4[i];
            yellowLines3[yellowLines3.length] = yellowLines2[i].slice(0)
        }
    }
    document.querySelector("#numberOfPatterns").innerHTML = patternsArray3.length;
    gameNumberP = 0;
    if (patternsArray3.length > 0) { showPatterns() };
    lookingForBasicPatterns();
}

rotation90DegreeArray = ["nothing", 7, 4, 1, 8, 5, 2, 9, 6, 3];
rotation90DegreePatterns = function (originalArray) {
    copy = Array();
    copy = ["nothing", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"];
    for (let t = 0; t < 10; t++) {
        if (originalArray[t] == "blue") { copy[rotation90DegreeArray[t]] = "blue" }
    };
    return copy;
}

verticalReflectionArray = ["nothing", 1, 4, 7, 2, 5, 8, 3, 6, 9];
verticalReflectionPatterns = function (originalArray) {
    copy = Array();
    copy = ["nothing", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"];
    for (let t = 0; t < 10; t++) {
        if (originalArray[t] == "blue") { copy[verticalReflectionArray[t]] = "blue" };
    }
    return copy;
}

horizontalReflectionArray = ["nothing", 9, 6, 3, 8, 5, 2, 7, 4, 1];
horizontalReflectionPatterns = function (originalArray) {
    copy = Array();
    copy = ["nothing", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"];
    for (let t = 0; t < 10; t++) {
        if (originalArray[t] == "blue") { copy[horizontalReflectionArray[t]] = "blue" };
    }
    return copy;
}

centralReflectionArray = ["nothing", 9, 8, 7, 6, 5, 4, 3, 2, 1];
centralReflectionPatterns = function (originalArray) {
    copy = Array();
    copy = ["nothing", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"];
    for (let t = 0; t < 10; t++) {
        if (originalArray[t] == "blue") { copy[centralReflectionArray[t]] = "blue" }
    }
    return copy;
}

showPatterns = function () {
    for (let i = 1; i < 10; i++) {
        document.querySelector(`#littleTbody3 td[name='${i}']`).innerHTML = ""
        document.querySelector(`#littleTbody3 td[name='${i}']`).style["background-color"] = "#dbdbdb"
    }
    for (let i = 1; i < patternsArray3[gameNumberP].length; i++) {
        if (patternsArray3[gameNumberP][i] == "blue") { document.querySelector(`#littleTbody3 td[name='${i}']`).innerHTML = "&#128309" }
    }
    for (let i = 0; i < yellowLines3[gameNumberP].length; i++) {
        document.querySelector(`#littleTbody3 td[name='${yellowLines3[gameNumberP][i]}']`).style["background-color"] = "#ffff66"
    }
    document.querySelector("#numberOfGame2").innerHTML = `${gameNumberP + 1}. `;
}

forwardInMemory2 = function () {
    dontChange = false;
    if (gameNumberP < patternsArray3.length - 1) { gameNumberP = gameNumberP + 1; dontChange = true };
    if (gameNumberP == patternsArray3.length - 1 && dontChange == false) { gameNumberP = 0 };
    showPatterns();
}

backInMemory2 = function () {
    if (gameNumberP > -1) { gameNumberP = gameNumberP - 1 };
    if (gameNumberP == -1) { gameNumberP = patternsArray3.length - 1 };
    showPatterns();
}

stepInputIsChanged = function () {
    stepNumber = 1;
    gameNumber = 0;
    showTheGamesFromTheUltimateMemories();
}

forwardInMemory = function () {
    if (gameNumber < myUltimateMemoryArray.length - 1) { gameNumber = gameNumber + 1 };
    if (gameNumber == myUltimateMemoryArray.length) { gameNumber = 0 };
    stepNumber = 1;
    if (noStep == true) { stepNumber = 0 };
    showTheGamesFromTheUltimateMemories();
}

backInMemory = function () {
    if (gameNumber > -1) { gameNumber = gameNumber - 1 };
    if (gameNumber == -1) { gameNumber = myUltimateMemoryArray.length - 1 };
    stepNumber = 1;
    if (noStep == true) { stepNumber = -1 };
    showTheGamesFromTheUltimateMemories();
}

forwardInTable = function () {

    if (noStep == false && stepNumber < myGame.length - 3) {
        stepNumber = stepNumber + 2;
        showTheGamesFromTheUltimateMemories();
    };
}

backInTable = function () {
    if (stepNumber > 2 && noStep == false) {
        stepNumber = stepNumber - 2;
        showTheGamesFromTheUltimateMemories();
    };
}

learntStrategies = Array();
patternsArray4 = Array();
yellowLines4 = Array();
blueWonBigFilterArray6 = Array();
blueWonBigFilterArray7 = Array();
blueWonBigFilterArray8 = Array();
originalArray = Array();
lookingForBasicPatterns = function () {
    myBorder = document.querySelector("#maxStep").value;
    myBorder = parseInt(myBorder);
    patternsArray4 = Array();
    yellowLines4 = Array();
    for (let i = 0; i < patternsArray3.length; i++) {
        index = 0;
        for (let j = 1; j < 10; j++) {
            if (patternsArray3[i][j] == "blue") {
                index = index + 1
            }
        }
        if (index == myBorder) {
            patternsArray4[patternsArray4.length] = patternsArray3[i].slice(0);
            blueWonBigFilterArray6[blueWonBigFilterArray6.length] = blueWonBigFilterArray5[i]
            yellowLines4[yellowLines4.length] = yellowLines3[i].slice(0);
        }
    }

    patternsArray5 = Array();
    yellowLines5 = Array();
    noNeed = Array();

    for (let i = 0; i < patternsArray4.length - 1; i++) {
        originalArray = patternsArray4[i].slice(0);
        originalArray2 = Array();
        for (let j = 0; j < 4; j++) {
            if (j > 0) {
                rotation90DegreePatterns(originalArray);
                originalArray = copy.slice();
            }
            noNeedFunctionForPatterns2(patternsArray4, copy, i)
            verticalReflectionPatterns(originalArray); originalArray2 = copy.slice();
            noNeedFunctionForPatterns2(patternsArray4, copy, i)
            centralReflectionPatterns(originalArray2);
            noNeedFunctionForPatterns2(patternsArray4, copy, i)
            horizontalReflectionPatterns(originalArray); originalArray2 = copy.slice();
            noNeedFunctionForPatterns2(patternsArray4, copy, i)
            centralReflectionPatterns(originalArray2);
            noNeedFunctionForPatterns2(patternsArray4, copy, i)
            centralReflectionPatterns(originalArray);
            noNeedFunctionForPatterns2(patternsArray4, copy, i)
        }
    }

    blueWonBigFilterArray7 = Array();
    for (let i = 0; i < patternsArray4.length; i++) {
        if (noNeed.includes(i) == false) {
            patternsArray5[patternsArray5.length] = patternsArray4[i].slice(0)
            blueWonBigFilterArray7[blueWonBigFilterArray7.length] = blueWonBigFilterArray6[i];
            yellowLines5[yellowLines5.length] = yellowLines4[i].slice(0)
        }
    }

    blueWonBigFilterArray8 = Array();
    for (let i = 0; i < learningMemory.length; i++) {
        if (blueWonBigFilterArray7.includes(i) == true) {
            blueWonBigFilterArray8[blueWonBigFilterArray8.length] = learningMemory[i];
        }
    }
    learntStrategies = Array();
    learntStrategiesKeyPlaces = Array();
    for (let m = 0; m < blueWonBigFilterArray8.length; m++) {
        myArray = Array();
        myArrayForKeys = Array();
        for (let j = 0; j < 15; j++) {
            if (blueWonBigFilterArray8[m][j] == "blue") {
                myArray[myArray.length] = blueWonBigFilterArray8[m][j + 1];
            }
        }
        for (let i = 0; i < myArray.length - 1; i++) {
            for (let j = i + 1; j < myArray.length; j++) {
                key = 15 - myArray[i] - myArray[j];
                if (key < 10 && key > 0 && key != myArray[i] && key != myArray[j]) {
                    myArrayForKeys[myArrayForKeys.length] = key;
                }
            }
        }
        learntStrategies[learntStrategies.length] = myArray;
        learntStrategiesKeyPlaces[learntStrategiesKeyPlaces.length] = myArrayForKeys;
    }

    learntStrategies2 = Array();
    one = Number(); two = Number(); three = Number();
    for (let i = 0; i < learntStrategies.length; i++) {
        myArray = learntStrategies[i];
        for (let j = 0; j < myArray.length - 2; j++)
            for (let k = j + 1; k < myArray.length - 1; k++)
                for (let m = k + 1; m < myArray.length; m++) {
                    if (myArray[j] + myArray[k] + myArray[m] == 15) {
                        one = myArray[j];
                        two = myArray[k];
                        three = myArray[m];
                    }
                }
        myArrayOne = Array(); myArrayTwo = Array(); myArrayThree = Array();
        for (let j = 0; j < myArray.length; j++) {
            if (myArray[j] != one) { myArrayOne[myArrayOne.length] = myArray[j] }
            if (myArray[j] != two) { myArrayTwo[myArrayTwo.length] = myArray[j] }
            if (myArray[j] != three) { myArrayThree[myArrayThree.length] = myArray[j] }
        }
        temporaryArray = Array();
        temporaryArray = [myArrayOne, myArrayTwo, myArrayThree];
        for (let j = 0; j < temporaryArray.length; j++) {
            for (let m = 0; m < temporaryArray[j].length - 1; m++) {
                index = 0;
                for (let n = m + 1; n < temporaryArray[j].length; n++) {
                    for (let s = 1; s < 10; s++) {
                        if (temporaryArray[j].includes(s) == false &&
                            temporaryArray[j][m] + temporaryArray[j][n] + s == 15) {
                            index = index + 1
                        }
                    }
                }
                if (index > 1) {
                    learntStrategies2[learntStrategies2.length] = temporaryArray[j];
                }
            }
        }
    }

    learntStrategies2a = Array();
    for (let i = 0; i < learntStrategies2.length; i++) {
        for (let k = 0; k < 3; k++) {
            for (let m = 0; m < 3; m++) {
                for (let n = 0; n < 3; n++) {
                    if (k != m && m != n && k != n) {
                        myArray = Array();
                        myArray = [learntStrategies2[i][k], learntStrategies2[i][m], learntStrategies2[i][n]]
                        index1 = 0; index2 = 0;
                        weNeedIt = false;
                        for (let s = 1; s < 10; s++) {
                            if (myArray[0] != s && myArray[1] != s &&
                                myArray[0] + myArray[1] + s == 15) {
                                index1 = 1
                            }
                        }
                        for (let z = 0; z < myArray.length - 1; z++) {
                            for (let w = z + 1; w < myArray.length; w++) {
                                for (let q = 1; q < 10; q++) {
                                    if (myArray[z] != q && myArray[w] != q &&
                                        myArray[z] + myArray[w] + q == 15) {
                                        index2 = index2 + 1;
                                    }
                                }
                            }
                        }
                        if (index1 == 1 && index2 > 2) { weNeedIt = true };
                        if (index1 == 0) { weNeedIt = true };
                        if (weNeedIt == true) {
                            learntStrategies2a[learntStrategies2a.length] = myArray;
                        }
                    }
                }
            }
        }
    }

    learntStrategies2a.sort();
    myArray = learntStrategies2a.slice(0);
    noNeed = Array();
    for (let i = 0; i < learntStrategies2a.length; i++) {
        myOriginalIndex = i;
        originalArray = learntStrategies2a[i].slice(0);
        originalArray2 = Array;
        copy = Array(); myCopy = Array();
        myCopy = learntStrategies2a[i].slice(0);
        noNeedFunctionForPatterns2(myArray, myCopy, myOriginalIndex)
        for (let j = 0; j < 4; j++) {
            if (j > 0) {
                rotation90DegreeForLearnt(originalArray);
                myCopy = copy.slice(0);
                originalArray = copy.slice(0);
                noNeedFunctionForPatterns2(myArray, myCopy, myOriginalIndex)
            }
            verticalReflectionForLearnt(originalArray); myCopy = copy.slice(0);
            noNeedFunctionForPatterns2(myArray, myCopy, myOriginalIndex); originalArray2 = copy.slice;
            centralReflectionForLearnt(originalArray2); myCopy = copy.slice(0);
            noNeedFunctionForPatterns2(myArray, myCopy, myOriginalIndex)
            horizontalReflectionForLearnt(originalArray); myCopy = copy.slice(0); originalArray2 = copy.slice();
            noNeedFunctionForPatterns2(myArray, myCopy, myOriginalIndex)
            centralReflectionForLearnt(originalArray2); myCopy = copy.slice(0);
            noNeedFunctionForPatterns2(myArray, myCopy, myOriginalIndex)
            centralReflectionForLearnt(originalArray); myCopy = copy.slice(0);
            noNeedFunctionForPatterns2(myArray, myCopy, myOriginalIndex)
        }
    }
    //innen
    /*
    learntStrategies2b = Array();
    variations = [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]]
    for (let i = 0; i < learntStrategies2a.length; i++) {
        for (let j = 0; j < variations.length; j++) {
            learntStrategies2b[learntStrategies2b.length] =
                [learntStrategies2a[i][variations[j][0]],
                learntStrategies2a[i][variations[j][1]],
                learntStrategies2a[i][variations[j][2]]];
        }
 
    }
    noNeedFunctionForArrayOfArrays(learntStrategies2b)
    learntStrategies2c = myArray2.slice(0)
 
 
 
 
 
 
    learntStrategies3 = Array();
    for (let i = 0; i < learntStrategies2c.length; i++) {
        if (noNeed.includes(i) == false) {
            learntStrategies3[learntStrategies3.length] = learntStrategies2c[i];
        }
    }
   
 
 learntStrategiesKeyPlaces3 = Array();
    for (let m = 0; m < learntStrategies3.length; m++) {
        myArray = learntStrategies3[m].slice(0);
        myArrayForKeys = Array();
        for (let i = 0; i < myArray.length - 1; i++) {
            for (let j = i + 1; j < myArray.length; j++) {
                key = 15 - myArray[i] - myArray[j];
                if (key < 10 && key > 0 && key != myArray[i] && key != myArray[j]) {
                    myArrayForKeys[myArrayForKeys.length] = key;
                }
            }
        }
        learntStrategiesKeyPlaces3[learntStrategiesKeyPlaces3.length] = myArrayForKeys;
    }
    */


    //idáig

    for (let i = 0; i < learntStrategies2a.length; i++) {
        learntStrategies2a[i].sort()
    }
    noNeedFunctionForArrayOfArrays(learntStrategies2a)
    learntStrategies2a = myArray2.slice(0)

    learntStrategiesKeyPlaces2a = Array();
    for (let m = 0; m < learntStrategies2a.length; m++) {
        myArray = learntStrategies2a[m].slice(0);
        myArrayForKeys = Array();
        for (let i = 0; i < myArray.length - 1; i++) {
            for (let j = i + 1; j < myArray.length; j++) {
                key = 15 - myArray[i] - myArray[j];
                if (key < 10 && key > 0 && key != myArray[i] && key != myArray[j]) {
                    myArrayForKeys[myArrayForKeys.length] = key;
                }
            }
        }
        myArrayForKeys.sort();
        learntStrategiesKeyPlaces2a[learntStrategiesKeyPlaces2a.length] = myArrayForKeys;
    }

    makeAllVariationFunction(learntStrategies2a, learntStrategiesKeyPlaces2a)
    learntStrategies3 = simulatedStrategiesArray2.slice(0)
    learntStrategiesKeyPlaces3 = simulatedKeys2.slice(0)




    console.error("learntStrategiesKeyPlaces3", learntStrategiesKeyPlaces3)

    patternsArray6 = Array();
    for (let i = 0; i < learntStrategies3.length; i++) {
        pattern = ["nothing", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"];
        for (let j = 0; j < learntStrategies3[i].length; j++) {
            pattern[learntStrategies3[i][j]] = "blue";
        }
        patternsArray6[patternsArray6.length] = pattern;
    }

    thisWasPatternsArray6 = patternsArray6.slice(0);
    thisWasLearntStrategies3 = learntStrategies3.slice(0);
    thisWasLearntStrategiesKeyPlaces3 = learntStrategiesKeyPlaces3.slice(0);
    document.querySelector("#all2").innerHTML = patternsArray6.length;
    document.querySelector("#numberOfStoredStrategies3").innerHTML = patternsArray6.length;
    document.querySelector("#storedStrategies20").innerHTML = patternsArray6.length;

    document.querySelector("#numberOfBasicPatterns").innerHTML = patternsArray5.length;
    gameNumberB = 0;
    gameNumberC = 0;
};


showBasicPatterns = function () {
    if (blueWonMemory.length == 0) { patternsArray6 = Array() }
    for (let i = 1; i < 10; i++) {
        document.querySelector(`#littleTbody4 td[name='${i}']`).innerHTML = ""
        document.querySelector(`#littleTbody4 td[name='${i}']`).style["background-color"] = "#dbdbdb"
    }
    for (let i = 1; i < 10; i++) {
        document.querySelector(`#littleTbody5 td[name='${i}']`).innerHTML = ""
        document.querySelector(`#littleTbody5 td[name='${i}']`).style["background-color"] = "#dbdbdb"
    }

    if (patternsArray5.length > 0) {
        for (let i = 1; i < patternsArray5[gameNumberB].length; i++) {
            if (patternsArray5[gameNumberB][i] == "blue") { document.querySelector(`#littleTbody4 td[name='${i}']`).innerHTML = "&#128309" }
        }

        for (let i = 0; i < 3; i++) {
            document.querySelector(`#littleTbody5 td[name='${learntStrategies[gameNumberB][i]}']`).innerHTML = [i + 1]
        }
    }

    document.querySelector("#numberOfGame4").innerHTML = `${gameNumberB + 1}. `;
    document.querySelector("#numberOfGame5").innerHTML = `${gameNumberC + 1}. `
    document.querySelector("#all2").innerHTML = patternsArray6.length;
    document.querySelector("#all2").classList.add("lightBlue")

    //gameNumberC = 0;
    for (let i = 1; i < 10; i++) {
        document.querySelector(`#littleTbody6 td[name='${i}']`).innerHTML = ""
        document.querySelector(`#littleTbody6 td[name='${i}']`).style["background-color"] = "#dbdbdb"
    }
    for (let i = 1; i < 10; i++) {
        document.querySelector(`#littleTbody7 td[name='${i}']`).innerHTML = ""
        document.querySelector(`#littleTbody7 td[name='${i}']`).style["background-color"] = "#dbdbdb"
    }
    if (patternsArray6.length > 0) {
        for (let i = 1; i < patternsArray6[gameNumberC].length; i++) {
            if (patternsArray6[gameNumberC][i] == "blue") { document.querySelector(`#littleTbody6 td[name='${i}']`).innerHTML = "&#128309" }
        }
    }
    if (learntStrategies3.length > 0) {
        for (let i = 0; i < 3; i++) {
            document.querySelector(`#littleTbody7 td[name='${learntStrategies3[gameNumberC][i]}']`).innerHTML = [i + 1]
        }
    }
}

forwardInMemory3 = function () {
    dontChance = false;
    if (gameNumberB < patternsArray5.length - 1) { gameNumberB = gameNumberB + 1; dontChance = true; };
    if (gameNumberB == patternsArray5.length - 1 && dontChance == false) { gameNumberB = 0 };
    showBasicPatterns();
}

backInMemory3 = function () {
    dontChance = false;
    if (gameNumberB > 0) { gameNumberB = gameNumberB - 1; dontChance = true; };
    if (gameNumberB == 0 && dontChance == false) { gameNumberB = patternsArray5.length - 1 };
    showBasicPatterns();
}

forwardInMemory4 = function () {
    dontChance = false;
    if (gameNumberC < patternsArray6.length - 1) { gameNumberC = gameNumberC + 1; dontChance = true; };
    if (gameNumberC == patternsArray6.length - 1 && dontChance == false) { gameNumberC = 0 };
    if (only3 == true) { showBasicPatterns3() }
    else { showBasicPatterns(); }
}

backInMemory4 = function () {
    dontChance = false;
    if (gameNumberC > 0) { gameNumberC = gameNumberC - 1; dontChance = true; };
    if (gameNumberC == 0 && dontChance == false) { gameNumberC = patternsArray6.length - 1 };
    if (only3 == true) { showBasicPatterns3() }
    else { showBasicPatterns(); }
}

gameNumberD = 1

forwardInMemory5 = function () {
    dontChance = false;
    if (gameNumberD < simulatedStrategiesArray3.length - 1) { gameNumberD = gameNumberD + 1; dontChance = true; };
    if (gameNumberD == simulatedStrategiesArray3.length - 1 && dontChance == false) { gameNumberD = 0 };
    showBasicPatterns5();
}

backInMemory5 = function () {
    dontChance = false;
    if (gameNumberD > 0) { gameNumberD = gameNumberD - 1; dontChance = true; };
    if (gameNumberD == 0 && dontChance == false) { gameNumberD = simulatedStrategiesArray3.length - 1 };
    showBasicPatterns5();
}

showBasicPatterns5 = function () {
    for (let i = 1; i < 10; i++) {
        document.querySelector(`#littleTbody8 td[name='${i}']`).innerHTML = ""
        document.querySelector(`#littleTbody8 td[name='${i}']`).style["background-color"] = "#dbdbdb"
    }
    for (let i = 1; i < 10; i++) {
        document.querySelector(`#littleTbody9 td[name='${i}']`).innerHTML = ""
        document.querySelector(`#littleTbody9 td[name='${i}']`).style["background-color"] = "#dbdbdb"
    }

    for (let i = 0; i < 3; i++) {
        document.querySelector(`#littleTbody8 td[name='${simulatedStrategiesArray3[gameNumberD][i]}']`).innerHTML = "&#128309"
    }

    for (let i = 0; i < 3; i++) {
        document.querySelector(`#littleTbody9 td[name='${simulatedStrategiesArray3[gameNumberD][i]}']`).innerHTML = i + 1
    }

    document.querySelector("#numberOfGame6").innerHTML = `${gameNumberD + 1}. `;
    //document.querySelector("#numberOfGame9").innerHTML = `${gameNumberD + 1}. `
    document.querySelector("#all3").innerHTML = simulatedStrategiesArray3.length;
    document.querySelector("#all3").classList.add("lightBlue")

    //gameNumberC = 0;

}



showTime = function (whereShowTime) {
    time = (timeFinish - timeStart) / 1000;
    sec = Math.ceil(time % 60);
    min = Math.floor(time / 60) % 60;
    if (sec == 60) { min = min + 1; sec = 0 };
    hour = Math.floor(time / 3600);
    if (min == 60) { hour = hour + 1; min = 0 };
    document.querySelector(`${whereShowTime}`).innerHTML = `${hour} óra, ${min} perc, ${sec} mp`;
};

showTime2 = function (whereShowTime, time) {
    sec2 = Math.ceil(time % 60);
    min2 = Math.floor(time / 60) % 60;
    hour2 = Math.floor(time / 3600);
    document.querySelector(`${whereShowTime}`).innerHTML = `${hour2} óra, ${min2} perc, ${sec2} mp`;
}
estimatedRunningNumberOninput();
whoIsThePartner();

buildingStrategyForAttact = function (myArray, keys) {

    //strategicalStepsForStart

    signal = 0
    if (colorArrayMe.length == 1 && colorArrayRival == 0) {
        for (let j = 0; j < colorArrayMe.length; j++) {
            //colorArrayMe: eredetileg a blue
            /*if (myArray[j] == colorArrayMe[j]) {
                signal = signal + 1;
            }*/
            signal = 0;
            signalNon = 0
            goAhead = true
            for (let j = 0; j < myArray.length; j++) {
                if (myArray[j] == colorArrayMe[j] && goAhead == true) {
                    signal = signal + 1;
                }
                if (myArray[j] != colorArrayMe[j]) {
                    goAhead = false;
                    if (freePlace.includes(myArray[j]) == true) {
                        signalNon = signalNon + 1
                    }
                }
            }

            if (signal == 1 && signalNon == 2) {
                for (let k = signal; k < myArray.length; k++) {
                    /*if (blue.includes(myArray[k]) == false &&
                        red.includes(myArray[k]) == false) {*/
                    if (freePlace.includes(myArray[k]) == true) {
                        signalTwo = 0;
                        for (let g = 0; g < keys.length; g++) {
                            if (freePlace.includes(keys[g]) == true) {
                                signalTwo = signalTwo + 1
                            }
                        }
                        if (signalTwo == 2 && freePlace.includes(myArray[1]) == true) {
                            strategicalStepsForStart[strategicalStepsForStart.length] = myArray[1];
                        }
                        if (signalTwo == 2 && freePlace.includes(myArray[2]) == true) {
                            strategicalStepsForStart[strategicalStepsForStart.length] = myArray[2];
                        }
                    }
                }
            }

        }

    }


    signal = 0
    if (colorArrayMe.length > 1) {
        for (let j = 0; j < colorArrayMe.length; j++) {
            //colorArrayMe: eredetileg a blue
            /*if (myArray[j] == colorArrayMe[j]) {
                signal = signal + 1;
            }*/
            signal = 0;
            goAhead = true
            for (let j = 0; j < colorArrayMe.length; j++) {
                if (myArray[j] == colorArrayMe[j] && goAhead == true) {
                    signal = signal + 1;
                }
                if (myArray[j] != colorArrayMe[j]) { goAhead = false }
            }


            if (signal == colorArrayMe.length) {
                for (let k = signal; k < myArray.length; k++) {
                    /*if (blue.includes(myArray[k]) == false &&
                        red.includes(myArray[k]) == false) {*/
                    if (freePlace.includes(myArray[k]) == true) {
                        signalTwo = 0;
                        for (let g = 0; g < keys.length; g++) {
                            if (freePlace.includes(keys[g]) == true) {
                                signalTwo = signalTwo + 1
                            }
                        }
                        if (signalTwo == 2 && freePlace.includes(myArray[signal]) == true) {
                            strategicalSteps[strategicalSteps.length] = myArray[signal]
                        }
                    }
                }
            }

        }
    }

}

sensitivePlaces_ = Array();
sensitivePlacesAll = Array();
lookingForForbiddenPlace = function (friendArray, enemyArray) {
    //forbiddenPlacesArray = Array();
    forbiddenPlace = -10;
    sensitivePlace1 = 0;
    sensitivePlace2 = 0;
    sensitivePlaces_ = Array();
    sensitivePlacesAll = Array();

    for (let k = 0; k < friendArray.length; k++) {
        for (let i = 0; i < freePlace.length - 1; i++) {
            for (let j = i + 1; j < freePlace.length; j++) {
                if (friendArray[k] != freePlace[i] && friendArray[k] != freePlace[j] &&
                    friendArray[k] + freePlace[i] + freePlace[j] == 15) {
                    sensitivePlace1 = freePlace[i];
                    sensitivePlace2 = freePlace[j];
                    sensitivePlaces_ = [sensitivePlace1, sensitivePlace2]
                    sensitivePlacesAll[sensitivePlacesAll.length] = sensitivePlaces_
                    //console.log(sensitivePlace1, sensitivePlace2)
                    for (let m = 0; m < sensitivePlaces_.length; m++) {
                        other = (m + 1) % 2;
                        fSignal = 0;
                        for (let n = 0; n < enemyArray.length; n++) {
                            for (let r = 0; r < freePlace.length; r++) {
                                if (freePlace[r] != sensitivePlaces_[m] &&
                                    sensitivePlaces_[m] + enemyArray[n] + freePlace[r] == 15) {
                                    fSignal = fSignal + 1
                                }
                            }
                            if (fSignal == 2) {
                                forbiddenPlace = sensitivePlaces_[other];
                                forbiddenPlacesArray[forbiddenPlacesArray.length] = forbiddenPlace;
                                fSignal = 0;
                            }
                        }

                    }

                }
            };
        };
    }


    forbiddenPlacesForcesToStepHere = Array();
    myArray = Array();
    if (forbiddenPlacesArray.length > 0) {
        myArray = Array()
        for (let i = 0; i < sensitivePlacesAll.length; i++) {
            myArray = myArray.concat(sensitivePlacesAll[i]);
        }
    }
    if (myArray.length > 0) {
        for (let i = 0; i < myArray.length; i++) {
            if (forbiddenPlacesArray.includes(myArray[i]) == false &&
                freePlace.includes(myArray[i]) == true) {
                forbiddenPlacesForcesToStepHere[forbiddenPlacesForcesToStepHere.length] = myArray[i];
            }
        }
    }
}




buildingStrategyForDefence = function (myArray, keys) {

    beCareful = false;
    if (forbiddenPlacesArray.length == 0) {
        lookingForForbiddenPlace(colorArrayMe, colorArrayRival);
    }

    number_myImportantDefenceStep = -10
    if (colorArrayRival.length == 2) {
        goAhead = true
        signal = 0;
        for (let j = 0; j < colorArrayRival.length; j++) {
            if (myArray[j] == colorArrayRival[j] && goAhead == true) {
                signal = signal + 1;
            }
            if (myArray[j] != colorArrayRival[j]) { goAhead = false }
        }
        if (signal == colorArrayRival.length) {
            for (let k = signal; k < myArray.length; k++) {
                if (freePlace.includes(myArray[k]) == true) {
                    signalTwo = 0;
                    signalTwoArray = Array();
                    for (let g = 0; g < keys.length; g++) {
                        if (freePlace.includes(keys[g]) == true) {
                            signalTwo = signalTwo + 1;
                            signalTwoArray[signalTwoArray.length] = keys[g];
                        }
                    }
                    defenceArray = Array();
                    if (signalTwo >= 2) {
                        defenceArray = Array();
                        for (let m = 0; m < myArray.length; m++) {
                            if (freePlace.includes(myArray[m]) == true) {
                                defenceArray[defenceArray.length] = myArray[m]
                            }
                        }
                        if (signalTwo > 0) {
                            defenceArray = defenceArray.concat(signalTwoArray)
                        }

                        strategicalStepsForDefence[strategicalStepsForDefence.length] = defenceArray;
                        if (nowLearning == false) { console.log(strategicalStepsForDefence) }
                    }
                }
            }
        }
    }
    //myImportantDefenceStep = 0;
    sensitivePlaces = Array();
    previousNumber = number;
    defenceOrAttack2()
    myExNumber = number;
    number = previousNumber;
    if (colorArrayRival.length > 0 && myExNumber == 0) {
        signal = 0; signal2 = 0; sensitivePlace1 = 0; sensitivePlace2 = 0; index = -10;
        sameElement = Array();
        myImportantDefenceStepArray = Array();
        goAhead4 = false;
        if (colorArrayRival.length > 2) {
            for (let j = 0; j < colorArrayRival.length; j++) {
                if (myArray[j] == colorArrayRival[j]) {
                    signal = signal + 1;
                    if (signal == 1) { sameElement[0] = myArray[j] }
                    if (signal == 2) { sameElement[1] = myArray[j] }
                }
                if (myArray[j] != colorArrayRival[j] &&
                    freePlace.includes(myArray[j]) == true) {
                    sensitivePlace1 = myArray[j];
                    sensitivePlaces[sensitivePlaces.length] = sensitivePlace1;
                }
            }
            keySignal = 0;
            if (signal == 2) {
                for (let i = 0; i < keys.length; i++) {
                    if (freePlace.includes(keys[i]) == true) {
                        keySignal = keySignal + 1;
                    }
                }
            }

            keySignal2 = 0;
            if (signal == 2 && keySignal >= 2) {
                sensitivePlace2 = 0;
                for (let m = 0; m < allVariationOfGames2.length; m++) {
                    if (allVariationOfGames2[m][0] == sameElement[0] &&
                        allVariationOfGames2[m][1] == sameElement[1] &&
                        allVariationOfGames2[m][2] != sensitivePlace1 &&
                        freePlace.includes(allVariationOfGames2[m][2]) == true) {
                        sensitivePlace2 = allVariationOfGames2[m][2]
                        for (let i = 0; i < allVariationOfKeys2[m].length; i++) {
                            if (freePlace.includes(allVariationOfKeys2[m][i]) == true) {
                                keySignal2 = keySignal2 + 1;
                            }
                        }
                        //console.log(coins, sensitivePlace1, sensitivePlace2)
                        //goAhead3 = true;
                    }
                }
                if (nowLearning == false) { console.log("keySignal2", keySignal2) }
            }
            goAhead4 = false;
            if (keySignal2 >= 1) {
                mySpecArray = Array();
                for (let i = 0; i < colorArrayMe.length; i++) {
                    for (let j = 0; j < freePlace.length; j++) {
                        for (let k = 0; k < freePlace.length; k++) {
                            if (colorArrayMe[i] + freePlace[j] + freePlace[k] == 15 &&
                                colorArrayMe[i] != freePlace[j] && colorArrayMe[i] != freePlace[k] &&
                                freePlace[j] != freePlace[k]) {

                                mySpecArray[0] = colorArrayMe[i];
                                mySpecArray[1] = freePlace[j];
                                mySpecArray[2] = freePlace[k];
                                myImportantDefenceStepArray[myImportantDefenceStepArray.length] = mySpecArray;
                                //console.log(coins,mySpecArray)
                                goAhead4 = true;
                                //console.log( myImportantDefenceStepArray.length)
                            }
                        }
                    }
                }
            }

        }
        //?????????????????????????????????????????????????????????????
        //három napig kerestem a hibát, így tudtam megoldani, de nem teljesen értem
        //innen
        myImportantDefenceStep = -10;
        if (coins.length == 6 && colorArrayMe[0] == 5 && corner.includes(colorArrayRival[0]) == true &&
            colorArrayRival[0] + colorArrayMe[1] == 10) {
            myImportantDefenceStep = round[(round.indexOf(colorArrayRival[0]) + 2) % 8]
        }
        //idáig

        number_myImportantDefenceStep = -10
        if (goAhead4 == true && myImportantDefenceStepArray.length > 0 && myImportantDefenceStep == -10) {
            numberOfSomething = numberOfSomething + 1;
            //console.log( myImportantDefenceStepArray.length)
            chance = Math.floor(Math.random() * myImportantDefenceStepArray.length)
            myImportantDefenceStep = myImportantDefenceStepArray[chance][2];
            number_myImportantDefenceStep = myImportantDefenceStep
            //console.log(coins, myImportantDefenceStep, s)
            myImportantDefenceStepArray = Array();
        }
    };


};
colorArrayMe = Array();

colorArrayRival = Array()
gameByLearntMemoryStepByStep = function (myArray, keys) {
    signal = 0;
    if (blue.length == 0 && red.length == 0) {
        number = myArray[0];
        strategicalSteps[strategicalSteps.length] = number;
    }
    colorArrayMe = blue.slice(0);
    colorArrayRival = red.slice(0);
    if (IPlayWith == "red") {
        colorArrayMe = red.slice(0);
        colorArrayRival = blue.slice(0);
    }

    buildingStrategyForAttact(myArray, keys);
    buildingStrategyForDefence(myArray, keys);
};

//óramutató járásával ellenkező irányba forgat
rotationArrayForLearnt = ["nothing", 7, 4, 1, 8, 5, 2, 9, 6, 3];
rotation90DegreeForLearnt = function (myArray) {
    copy = Array();
    for (let i = 0; i < myArray.length; i++) {
        copy[i] = rotationArrayForLearnt[myArray[i]];
    }
    return copy;
}

verticalReflectionArrayForLearnt = ["nothing", 1, 4, 7, 2, 5, 8, 3, 6, 9];
verticalReflectionForLearnt = function (myArray) {
    copy = Array();
    for (let i = 0; i < myArray.length; i++) {
        copy[i] = verticalReflectionArrayForLearnt[myArray[i]];
    }
    return copy;
}

horizontalReflectionArrayForLearnt = ["nothing", 9, 6, 3, 8, 5, 2, 7, 4, 1];
horizontalReflectionForLearnt = function (myArray) {
    copy = Array();
    for (let i = 0; i < myArray.length; i++) {
        copy[i] = horizontalReflectionArrayForLearnt[myArray[i]];
    }
    return copy;
}

centralReflectionArrayForLearnt = ["nothing", 9, 8, 7, 6, 5, 4, 3, 2, 1];
centralReflectionForLearnt = function (myArray) {
    copy = Array();
    for (let i = 0; i < myArray.length; i++) {
        copy[i] = centralReflectionArrayForLearnt[myArray[i]];
    }
    return copy;
}

whatWeStep = "";
stepsForDefenceArray = Array();
defenceStepArray = Array();

allVariationOfGames = Array();
allVariationOfKeys = Array();
makeAllVariationOfLearntMemory = function () {
    for (let i = 0; i < learntStrategies3.length; i++) {
        dontRepetiteItIndex = i;
        myArray = learntStrategies3[i].slice(0);
        keys = learntStrategiesKeyPlaces3[i].slice(0);
        copy = Array(); myCopy = Array();
        myCopy2 = Array(); myKeys2 = Array();

        allVariationOfGames[allVariationOfGames.length] = myArray;
        allVariationOfKeys[allVariationOfKeys.length] = keys;
        for (let j = 0; j < 4; j++) {
            if (j > 0) {
                rotation90DegreeForLearnt(myArray);
                myArray = copy.slice(0);
                rotation90DegreeForLearnt(keys);
                keys = copy.slice(0);
                allVariationOfGames[allVariationOfGames.length] = myArray;
                allVariationOfKeys[allVariationOfKeys.length] = keys;
            }
            verticalReflectionForLearnt(myArray); myCopy = copy.slice(0);
            verticalReflectionForLearnt(keys); myKeys = copy.slice(0);
            allVariationOfGames[allVariationOfGames.length] = myCopy;
            allVariationOfKeys[allVariationOfKeys.length] = myKeys;

            centralReflectionForLearnt(myCopy); myCopy2 = copy.slice(0);
            centralReflectionForLearnt(myKeys); myKeys2 = copy.slice(0);
            allVariationOfGames[allVariationOfGames.length] = myCopy2;
            allVariationOfKeys[allVariationOfKeys.length] = myKeys2;

            horizontalReflectionForLearnt(myArray); myCopy = copy.slice(0);
            horizontalReflectionForLearnt(keys); myKeys = copy.slice(0);
            allVariationOfGames[allVariationOfGames.length] = myCopy;
            allVariationOfKeys[allVariationOfKeys.length] = myKeys;

            centralReflectionForLearnt(myCopy); myCopy2 = copy.slice(0);
            centralReflectionForLearnt(myKeys); myKeys2 = copy.slice(0);
            allVariationOfGames[allVariationOfGames.length] = myCopy2;
            allVariationOfKeys[allVariationOfKeys.length] = myKeys2;

            centralReflectionForLearnt(myArray); myCopy = copy.slice(0);
            centralReflectionForLearnt(keys); myKeys = copy.slice(0);
            allVariationOfGames[allVariationOfGames.length] = myCopy;
            allVariationOfKeys[allVariationOfKeys.length] = myKeys;
        }
    }
    noNeedFunctionForArrayOfArrays(allVariationOfGames)
    allVariationOfGames2 = myArray2.slice(0)
    allVariationOfKeys2 = Array();
    for (let i = 0; i < allVariationOfKeys.length; i++) {
        if (noNeed.includes(i) == false) {
            allVariationOfKeys2[allVariationOfKeys2.length] = allVariationOfKeys[i];
        }
    }
    //ezt még véletlenül se:
    //noNeedFunctionForArrayOfArrays(allVariationOfKeys)
    //allVariationOfKeys2 = myArray2.slice(0)
}

commonElementsInArrayOfArrays = function (myArray) {
    myArray2 = Array();
    for (let i = 1; i < 10; i++) {
        index = 0;
        for (let j = 0; j < myArray.length; j++) {
            for (let k = 0; k < myArray[j].length; k++) {
                if (myArray[j][k] == i) {
                    //itt fontos, hogy egy Array-ban egy érték csak egyszer szerepelhet
                    index = index + 1
                }
            }
        }
        if (index == myArray.length) { myArray2[myArray2.length] = i }
    }
    return myArray2;

}

myImportantDefenceStepArray = Array();
gameByLearntMemory = function () {
    number_strategicalStepsForDefence = -10;
    number_firstDefenceStep = -10
    number_strategicalSteps = -10;
    number_myImportantDefenceStep = -10;
    number_everyArrayHasIt4Defence = -10;
    number_everyArrayHasIt4Attack = -10;
    number_almostEveryArrayHasIt4Defence = -10;
    number_almostEveryArrayHasIt4Attack = -10;
    //myImportantDefenceStepArray2 = Array();
    //myImportantDefenceStepArray3 = Array();
    //myImportantDefenceStepArray = Array();
    //stepsForDefenceArray = Array();
    number = -10;
    //strategicalSteps = Array();
    //strategicalStepsForDefence = Array();
    //strategicalStepsForDefenceImportant = Array();
    //defenceStep = Array();

    allMemoriesCopy = Array();
    allKeysCopy = Array();
    for (let i = 0; i < learntStrategies3.length; i++) {
        myArray = learntStrategies3[i].slice(0);
        keys = learntStrategiesKeyPlaces3[i].slice(0);
        copy = Array(); myCopy = Array();
        myCopy2 = Array(); myKeys2 = Array();

        allMemoriesCopy[allMemoriesCopy.length] = myArray;
        allKeysCopy[allKeysCopy.length] = keys;
        for (let j = 0; j < 4; j++) {
            if (j > 0) {
                rotation90DegreeForLearnt(myArray);
                myArray = copy.slice(0);
                rotation90DegreeForLearnt(keys);
                keys = copy.slice(0);
                allMemoriesCopy[allMemoriesCopy.length] = myArray;
                allKeysCopy[allKeysCopy.length] = keys;
            }
            verticalReflectionForLearnt(myArray); myCopy = copy.slice(0);
            verticalReflectionForLearnt(keys); myKeys = copy.slice(0);
            allMemoriesCopy[allMemoriesCopy.length] = myCopy;
            allKeysCopy[allKeysCopy.length] = myKeys;

            centralReflectionForLearnt(myCopy); myCopy2 = copy.slice(0);
            centralReflectionForLearnt(myKeys); myKeys2 = copy.slice(0);
            allMemoriesCopy[allMemoriesCopy.length] = myCopy2;
            allKeysCopy[allKeysCopy.length] = myKeys2;

            horizontalReflectionForLearnt(myArray); myCopy = copy.slice(0);
            horizontalReflectionForLearnt(keys); myKeys = copy.slice(0);
            allMemoriesCopy[allMemoriesCopy.length] = myCopy;
            allKeysCopy[allKeysCopy.length] = myKeys;


            centralReflectionForLearnt(myCopy); myCopy2 = copy.slice(0);
            centralReflectionForLearnt(myKeys); myKeys2 = copy.slice(0);
            allMemoriesCopy[allMemoriesCopy.length] = myCopy2;
            allKeysCopy[allKeysCopy.length] = myKeys2;

            centralReflectionForLearnt(myArray); myCopy = copy.slice(0);
            centralReflectionForLearnt(keys); myKeys = copy.slice(0);
            allMemoriesCopy[allMemoriesCopy.length] = myCopy;
            allKeysCopy[allKeysCopy.length] = myKeys;
        }
    }

    //for (let i = 0; i < allMemoriesCopy.length; i++) {
    //allMemoriesCopy[i].sort();
    //}
    allMemoriesCopy2 = Array();
    allKeysCopy2 = Array();
    noNeedFunctionForArrayOfArrays(allMemoriesCopy);
    for (let i = 0; i < allMemoriesCopy.length; i++) {
        if (noNeed.includes(i) == false) {
            allMemoriesCopy2[allMemoriesCopy2.length] = allMemoriesCopy[i];
            allKeysCopy2[allKeysCopy2.length] = allKeysCopy[i]
        }
    }


    //innen

    searchingCorrespondenceArray = Array();
    for (let i = 0; i < allMemoriesCopy2.length; i++) {
        myArray = allMemoriesCopy2[i].slice(0);
        keys = allKeysCopy2[i].slice(0);
        goAhead = true;
        signal = 0;
        signalTwo = 0;
        for (let j = 0; j < colorArrayRival.length; j++) {
            if (myArray[j] == colorArrayRival[j] && goAhead == true) {
                signal = signal + 1;
            }
            if (myArray[j] != colorArrayRival[j]) { goAhead = false }
        }
        if (signal == colorArrayRival.length) {
            for (let k = signal; k < myArray.length; k++) {
                signalThree = 0
                if (freePlace.includes(myArray[k]) == true) {
                    signalTwo = 0;
                    for (let g = 0; g < keys.length; g++) {
                        if (freePlace.includes(keys[g]) == true) {
                            signalTwo = signalTwo + 1;
                        }
                    }
                }
                if (signalTwo >= 2) { signalThree = signalThree + 1 }
            }
            //pl. 4-6, akkor több harmadik elem is lehet különböző nyertes stratégiákhoz, ezek a
            //harmadik elemek kerülnek be a searchingCorrespondenceArray Array-aiba
            if (signalThree > 0) {
                searchingCorrespondenceArray[searchingCorrespondenceArray.length] = myArray[2];
            }
        }

    }

    //idáig

    for (let i = 0; i < allMemoriesCopy.length; i++) {
        gameByLearntMemoryStepByStep(allMemoriesCopy[i], allKeysCopy[i])
    }

    //allMemoriesCopy = Array();
    //allKeysCopy = Array();

    //allMemoriesCopy[allMemoriesCopy.length]=
    //allKeysCopy[allKeysCopy.length]=

    //a strategicalStepsForDefence arrayokból áll, az ismétlődő (azonos) array-okat stűri ki
    if (strategicalStepsForDefence.length > 0) {
        noNeedFunctionForArrayOfArrays(strategicalStepsForDefence);
        strategicalStepsForDefence2 = myArray2.slice(0);
    }




    //if (document.querySelector("#attack").checked == true || document.querySelector("#attack2").checked == true) {

    number_strategicalStepsForStart = -10;
    if (strategicalStepsForStart.length > 0) {
        chance = Math.floor(Math.random() * strategicalStepsForStart.length);
        number_strategicalStepsForStart = strategicalStepsForStart[chance];
    }

    strategicalStepsAll = Array();
    for (let i = 0; i < strategicalSteps.length; i++) {
        strategicalStepsAll = strategicalStepsAll.concat(strategicalSteps[i])
    }

    //noNeedFunctionForArray(strategicalStepsAll);
    strategicalStepsShort = myArray2.slice(0);
    strategicalStepsShort.sort();

    strategicalStepsOccurrance = [-10, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < strategicalStepsAll.length; i++) {
        strategicalStepsOccurrance[strategicalStepsAll[i]] += 1
    }
    maxSSO = 0;
    for (let i = 0; i < strategicalStepsOccurrance.length; i++) {
        if (maxSSO < strategicalStepsOccurrance[i]) { maxSSO = strategicalStepsOccurrance[i] }
    }
    strategicalStepsWithMaxOccurrance = Array();
    for (let i = 0; i < strategicalStepsOccurrance.length; i++) {
        if (strategicalStepsOccurrance[i] == maxSSO && maxSSO > 0) {
            strategicalStepsWithMaxOccurrance[strategicalStepsWithMaxOccurrance.length] = strategicalStepsOccurrance.indexOf(maxSSO)
        }
    }

    number_strategicalStepsWithMaxOccurrance = -10;
    if (strategicalStepsWithMaxOccurrance.length > 0) {
        chance = Math.floor(Math.random() * strategicalStepsWithMaxOccurrance.length);
        number_strategicalStepsWithMaxOccurrance = strategicalStepsWithMaxOccurrance[chance];
    }

    if (strategicalSteps.length > 0) {
        everyArrayHasIt4Attack = Array();
        almostEveryArrayHasIt4Attack = Array();
        max = 0;
        for (let i = 1; i < 10; i++) {
            index = 0;

            if (strategicalSteps.includes(i) == true) {
                index = index + 1;
                if (index > max) { max = index }

            }
            if (index == strategicalSteps.lengt) {
                everyArrayHasIt4Attack[everyArrayHasIt4Attack.length] = i;
            }
            for (let j = 0; j < strategicalSteps.length; j++) {
                if (strategicalSteps.includes(i) == true) {
                    index = index + 1;
                    if (index == max) {
                        almostEveryArrayHasIt4Attack[everyArrayHasIt4Attack.length] = i;
                    }
                }
            }

        }
        document.querySelector("#stepOfEngine").innerHTML = "tanult stratégiai lépés (védekezés)";
        whatWeStep = "tanult stratégiai lépés (védekezés)";
    }
    if (myImportantDefenceStep != 0) {
        number = myImportantDefenceStep;
        somethingForTest[somethingForTest.length] = myImportantDefenceStep
        //console.log(coins, myImportantDefenceStep, s)
        myImportantDefenceStep = 0
    }
    //}



    //a strategicalStepsForDefence array-okból áll,
    //ez kiszűri azokat az elemeket, amelyeket minden array tartalmaz (tkp. az összes Array metszete) és berakja a defenceStep-be
    testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    defenceStep = Array();
    if (strategicalStepsForDefence.length > 0) {
        for (let j = 0; j < testArray.length; j++) {
            index = 0;
            for (let k = 0; k < strategicalStepsForDefence.length; k++) {
                if (strategicalStepsForDefence[k].includes(testArray[j]) == true) {
                    index = index + 1;
                    if (index == strategicalStepsForDefence.length) {
                        defenceStep[defenceStep.length] = testArray[j];
                    }
                }
            }
        }

    }
    number_firstDefenceStep = -10
    if (defenceStep.length > 0) {
        chance = Math.floor(Math.random() * defenceStep.length)
        number_firstDefenceStep = defenceStep[chance];
    }



    if (defenceStep.length == 0 && strategicalStepsForDefence.length > 1) {
        number = strategicalStepsForDefence[strategicalStepsForDefence.length - 1][strategicalStepsForDefence[strategicalStepsForDefence.length - 1].length - 1]
        if (strategicalStepsForDefence[strategicalStepsForDefence.length - 1].length == 5) {
            number = strategicalStepsForDefence[strategicalStepsForDefence.length - 1][0];
        }
    }

    //ha a kék lép
    noNeed = Array();
    if (coins[coins.length - 2] == "red") {
        number_ = 0;
        noNeed = Array();
        for (let k = 0; k < strategicalSteps.length; k++) {
            number_ = strategicalSteps[k];
            dontForceHimToWinForBlue(number_);
            if (pleaseNotThis == true) { noNeed[noNeed.length] = number_ }
            //if (pleaseNotThis == true) { console.log("most", coins, number_) }
        }

    }

    if (coins[coins.length - 2] == "blue") {
        number_ = 0;
        noNeed = Array();
        for (let k = 0; k < strategicalSteps.length; k++) {
            number_ = strategicalSteps[k];
            dontForceHimToWinForRed(number_);
            if (pleaseNotThis == true) { noNeed[noNeed.length] = number_ }
            //if (pleaseNotThis == true) { console.log("most", coins, number_) }
        }

    }

    thisWasStrategicalSteps = strategicalSteps.slice(0);
    strategicalSteps = Array();
    for (let k = 0; k < thisWasStrategicalSteps.length; k++) {
        if (noNeed.includes(thisWasStrategicalSteps[k]) == false) {
            strategicalSteps[strategicalSteps.length] = thisWasStrategicalSteps[k];
        }
    }
    if (thisWasStrategicalSteps.length != strategicalSteps.length) {
    }


    if (strategicalSteps.length > 0) {
        chance = Math.floor(Math.random() * strategicalSteps.length);
        number_strategicalSteps = -10;
        number_strategicalSteps = strategicalSteps[chance];
        //console.log("chance", chance)
        document.querySelector("#stepOfEngine").innerHTML = "tanult stratégiai lépés (támadás felépítése)"
        whatWeStep = "tanult stratégiai lépés (támadás felépítése)";
    }

    if (strategicalStepsWithMaxOccurrance.length > 0) {
        number_strategicalStepsWithMaxOccurrance = -10;
        chance = Math.floor(Math.random() * strategicalStepsWithMaxOccurrance.length);
        number_strategicalStepsWithMaxOccurrance = strategicalStepsWithMaxOccurrance[chance];
    }




    /*if (strategicalStepsForDefence.length > 0 && red.length == 2 && blue.length == 1) {
        number = strategicalStepsForDefence[strategicalStepsForDefence.length - 1][0]
    }*/

    //commonElementsInArrayOfArrays(strategicalStepsForDefence2);
    //strategicalStepsForDefence3 = myArray2.slice(0);


    strategicalStepsForDefence3 = Array();
    for (let i = 0; i < strategicalStepsForDefence2.length; i++) {
        strategicalStepsForDefence3 = strategicalStepsForDefence3.concat(strategicalStepsForDefence2[i])
    }

    strategicalStepsForDefence4 = Array();
    if (nowLearning == false) { console.log(strategicalStepsForDefence3) }
    if (nowLearning == false) { console.log("forbiddenPlacesArray", forbiddenPlacesArray) }
    if (nowLearning == false) { console.log("searchingCorrespondenceArray", searchingCorrespondenceArray) }
    for (let i = 0; i < strategicalStepsForDefence3.length; i++) {
        if (forbiddenPlacesArray.includes(strategicalStepsForDefence3[i]) == false &&
            freePlace.includes(strategicalStepsForDefence3[i]) == true)
            strategicalStepsForDefence4[strategicalStepsForDefence4.length] = strategicalStepsForDefence3[i]
    }

    strategicalStepsForDefence5 = Array();
    if (coins[coins.length - 2] == "red") { myFriendsArray = blue.slice(0) }
    if (coins[coins.length - 2] == "blue") { myFriendsArray = red.slice(0) }
    if (searchingCorrespondenceArray.length > 0 && coins.length > 0) {
        for (let i = 0; i < myFriendsArray.length; i++) {
            for (let j = 0; j < freePlace.length; j++) {
                for (let k = 0; k < searchingCorrespondenceArray.length; k++) {
                    if (myFriendsArray[i] + freePlace[j] + strategicalStepsForDefence4[k] == 15
                        && searchingCorrespondenceArray.includes(strategicalStepsForDefence4[k]) == true
                    ) {
                        strategicalStepsForDefence5[strategicalStepsForDefence5.length] = strategicalStepsForDefence4[k]
                        //console.log("strategicalStepsForDefence5",strategicalStepsForDefence5)
                    }
                }
            }
        }
    }

    //strategicalStepsForDefence5 = strategicalStepsForDefence5.slice(0)



    if (strategicalStepsForDefence5.length > 0) {
        chance = Math.floor(Math.random() * strategicalStepsForDefence5.length);
        number_strategicalStepsForDefence = -10;
        number_strategicalStepsForDefence = strategicalStepsForDefence5[chance]
    }



    //if (document.querySelector("#defence").checked == true || document.querySelector("#defence2").checked == true) {
    if (strategicalStepsForDefence.length > 0) {
        everyArrayHasIt4Defence = Array();
        almostEveryArrayHasIt4Defence = Array();
        max = 0;
        for (let i = 1; i < 10; i++) {
            index = 0;
            for (let j = 0; j < strategicalStepsForDefence.length; j++) {
                if (strategicalStepsForDefence[j].includes(i) == true) {
                    index = index + 1;
                    if (index > max) { max = index }
                }
            }
            if (index == strategicalStepsForDefence.lengt) {
                everyArrayHasIt4Defence[everyArrayHasIt4Defence.length] = i;
            }
            for (let j = 0; j < strategicalStepsForDefence.length; j++) {
                if (strategicalStepsForDefence[j].includes(i) == true) {
                    index = index + 1;
                    if (index == max) {
                        almostEveryArrayHasIt4Defence[almostEveryArrayHasIt4Defence.length] = i;
                    }
                }
            }

        }
        number_almostEveryArrayHasIt4Defence = -10;
        if (almostEveryArrayHasIt4Defence.length > 0) {
            chance = Math.floor(Math.random() * almostEveryArrayHasIt4Defence.length);
            number_almostEveryArrayHasIt4Defence = almostEveryArrayHasIt4Defence[chance]
        }
        number_everyArrayHasIt4Defence = -10;
        if (everyArrayHasIt4Defence.length > 0) {
            chance = Math.floor(Math.random() * everyArrayHasIt4Defence.length);
            number_everyArrayHasIt4Defence = everyArrayHasIt4Defence[chance]
        }
        document.querySelector("#stepOfEngine").innerHTML = "tanult stratégiai lépés (védekezés)";
        whatWeStep = "tanult stratégiai lépés (védekezés)";
    }
    //}

    number = -10;
    if (withLearntStrategy.checked == true) {
        defenceOrAttack(id = withLearntStrategy.id);
    }
    if (withSimulatedLearntStrategy.checked == true) {
        defenceOrAttack(id = withSimulatedLearntStrategy.id);
    }

    if (numberRed != 0) { number = numberRed };
    if (numberBlue != 0) { number = numberBlue }
    if (numberBlue != 0) {
        document.querySelector("#stepOfEngine").innerHTML = "automatikus győztes lépés";
        whatWeStep = "automatikus győztes lépés";
    }
    if (numberRed != 0) {
        document.querySelector("#stepOfEngine").innerHTML = "automatikus védekezés";
        whatWeStep = "automatikus védekezés"
    }

    if (number == 0) { number = -10 }





    if (document.querySelector("#attack").checked == true || document.querySelector("#attack2").checked == true) {
        if (number_myImportantDefenceStep != -10 && number == -10) { number = number_myImportantDefenceStep }
        if (number_strategicalStepsWithMaxOccurrance != -10 &&
            freePlace.includes(number_strategicalStepsWithMaxOccurrance) == true && number == -10) { number = number_strategicalStepsWithMaxOccurrance }
        if (number_everyArrayHasIt4Attack != -10 &&
            freePlace.includes(number_everyArrayHasIt4Attack) == true && number == -10) { number = number_everyArrayHasIt4Attack }
        if (number_strategicalStepsForStart != -10 && number == -10) { number = number_strategicalStepsForStart }
        if (number_firstDefenceStep != -10 && number == -10) { number = number_firstDefenceStep }
        if (number_strategicalStepsForDefence != -10 && number == -10) { number = number_strategicalStepsForDefence }
        if (number_strategicalSteps != -10 && number == -10) { number = number_strategicalSteps }
        if (number_everyArrayHasIt4Defence != -10 &&
            freePlace.includes(number_everyArrayHasIt4Defence) == true && number == -10) { number = number_everyArrayHasIt4Defence }
        if (number_almostEveryArrayHasIt4Defence != -10 &&
            freePlace.includes(number_almostEveryArrayHasIt4Defence) == true && number == -10) { number = number_almostEveryArrayHasIt4Defence }
        if (number_almostEveryArrayHasIt4Attack != -10 &&
            freePlace.includes(number_almostEveryArrayHasIt4Attack) == true && number == -10) { number = number_almostEveryArrayHasIt4Attack }
    }
    if (document.querySelector("#defence").checked == true || document.querySelector("#defence2").checked == true) {

        if (forbiddenPlacesForcesToStepHere.length > 0 && number == -10) {
            chance = Math.floor(Math.random() * forbiddenPlacesForcesToStepHere.length);
            number = forbiddenPlacesForcesToStepHere[chance];
            if (nowLearning == false) {
                console.log("lépés a forbiddenPlacesForcesToStepHere miatt");
                console.log("forbiddenPlacesForcesToStepHere", forbiddenPlacesForcesToStepHere)
                console.log("forbiddenPlacesArray", forbiddenPlacesArray)
            }
        }
        forbiddenPlacesForcesToStepHere = Array();

        if (number_strategicalStepsForDefence != -10 && number == -10) { number = number_strategicalStepsForDefence }
        if (number_myImportantDefenceStep != -10 && number == -10) { number = number_myImportantDefenceStep }
        if (number_firstDefenceStep != -10 && number == -10) { number = number_firstDefenceStep }
        if (number_everyArrayHasIt4Defence != -10 &&
            freePlace.includes(number_everyArrayHasIt4Defence) == true && number == -10) { number = number_everyArrayHasIt4Defence }
        if (number_almostEveryArrayHasIt4Defence != -10 &&
            freePlace.includes(number_almostEveryArrayHasIt4Defence) == true && number == -10) { number = number_almostEveryArrayHasIt4Defence }
        if (number_strategicalSteps != -10 && number == -10) { number = number_strategicalSteps }
        if (number_strategicalStepsWithMaxOccurrance != -10 &&
            freePlace.includes(number_strategicalStepsWithMaxOccurrance) == true && number == -10) { number = number_strategicalStepsWithMaxOccurrance }
        if (number_everyArrayHasIt4Attack != -10 &&
            freePlace.includes(number_everyArrayHasIt4Attack) == true && number == -10) { number = number_everyArrayHasIt4Attack }
        if (number_almostEveryArrayHasIt4Attack != -10 &&
            freePlace.includes(number_almostEveryArrayHasIt4Attack) == true && number == -10) { number = number_almostEveryArrayHasIt4Attack }
    }

    /*if (number_myImportantDefenceStep != -10 && number == -10) {
        number = number_myImportantDefenceStep;
        strategyOfEngineHistory[strategyOfEngineHistory.length] = "myImportantDefenceStep"
    }
    if (number_strategicalStepsForStart != -10 && number == -10) { number = number_strategicalStepsForStart }
    if (number_firstDefenceStep != -10 && number == -10) { number = number_firstDefenceStep }
    if (number_strategicalStepsForDefence != -10 && number == -10) { number = number_strategicalStepsForDefence }
    if (number_strategicalSteps != -10 && number == -10) { number = number_strategicalSteps }
    if (number_strategicalStepsWithMaxOccurrance != -10 &&
        freePlace.includes(number_strategicalStepsWithMaxOccurrance) == true && number == -10) { number = number_strategicalStepsWithMaxOccurrance }
    if (number_everyArrayHasIt4Defence != -10 &&
        freePlace.includes(number_everyArrayHasIt4Defence) == true && number == -10) { number = number_everyArrayHasIt4Defence }
    if (number_almostEveryArrayHasIt4Defence != -10 &&
        freePlace.includes(number_almostEveryArrayHasIt4Defence) == true && number == -10) { number = number_almostEveryArrayHasIt4Defence }
    if (number_everyArrayHasIt4Attack != -10 &&
        freePlace.includes(number_everyArrayHasIt4Attack) == true && number == -10) { number = number_everyArrayHasIt4Attack }
    if (number_almostEveryArrayHasIt4Attack != -10 &&
        freePlace.includes(number_almostEveryArrayHasIt4Attack) == true && number == -10) { number = number_almostEveryArrayHasIt4Attack }*/

    if (nowLearning == false) {
        console.error("strategicalStepsForDefence", number_strategicalStepsForDefence)
        console.error("strategicalSteps", number_strategicalSteps)
        console.error("strategicalStepsForStart", number_strategicalStepsForStart)
        console.error("firstDefenceStep", number_firstDefenceStep)
        console.error("strategicalStepsWithMaxOccurrance", number_strategicalStepsWithMaxOccurrance)
        console.error("everyArrayHasIt4Attack", number_everyArrayHasIt4Attack)
        console.error("almostEveryArrayHasIt4Attack", number_almostEveryArrayHasIt4Attack)
        console.error("everyArrayHasIt4Defence", number_everyArrayHasIt4Defence)
        console.error("almostEveryArrayHasIt4Defence", number_almostEveryArrayHasIt4Defence)
        console.log(everyArrayHasIt4Attack, almostEveryArrayHasIt4Attack, everyArrayHasIt4Defence, almostEveryArrayHasIt4Defence)
        console.log(strategicalStepsForDefence)
        console.log(strategicalSteps)
        console.log(strategicalStepsForDefence4)
        console.log(strategicalStepsForDefence5)
    }

    if (number == -10) {
        chance = Math.floor(Math.random() * freePlace.length);
        number = freePlace[chance];
        document.querySelector("#stepOfEngine").innerHTML = "random"
        if (nowLearning == false) { console.log("RND") };
    }

    //ha ez a négy nem lenne itt, akkor lenne mesterséges intelligencia !!!
    if (blue.length <= 1 && red[0] != 5 && blue[0] != 5 && red.length == 0) {
        number = 5;
        document.querySelector("#stepOfEngine").innerHTML = "automatikusan belép középre"
        whatWeStep = "automatikusan belép középre";
    }
    if (red.length <= 1 && red[0] != 5 && blue[0] != 5 && blue.length == 0) {
        number = 5;
        document.querySelector("#stepOfEngine").innerHTML = "automatikusan belép középre"
        whatWeStep = "automatikusan belép középre";
    }
    if (blue.length == 1 && blue[0] == 5 && red.length == 0) {
        chance = Math.floor(Math.random() * 4)
        number = corner[chance];
        document.querySelector("#stepOfEngine").innerHTML = "automatikusan a sarokba lép"
        whatWeStep = "automatikusan a sarokba lép";
    }
    if (red.length == 1 && red[0] == 5 && blue.length == 0) {
        chance = Math.floor(Math.random() * 4)
        number = corner[chance];
        document.querySelector("#stepOfEngine").innerHTML = "automatikusan a sarokba lép"
        whatWeStep = "automatikusan a sarokba lép";
    }
    if (nowLearning == false) { showRightSideInfo() };
    strategicalSteps = Array();
    strategicalStepsForStart = Array();
    strategicalStepsForDefence = Array();
    strategicalStepsForDefence2 = Array();
    strategicalStepsForDefence3 = Array();
    strategicalStepsForDefence4 = Array();
    strategicalStepsForDefence5 = Array();
    everyArrayHasIt4Defence = Array();
    almostEveryArrayHasIt4Defence = Array();
    everyArrayHasIt4Attack = Array();
    almostEveryArrayHasIt4Attack = Array();
    strategicalStepsWithMaxOccurrance = Array();
    firstDefenceStep = Array();
    myImportantDefenceStep = Array();
    myImportantDefenceStep2 = Array();
    myImportantDefenceStep3 = Array();
    forbiddenPlacesForcesToStepHere = Array();
    forbiddenPlacesArray = Array();
    whatWeStepArray[whatWeStepArray.length] = whatWeStep;

}


dontForceHimToWinForBlue = function (number_) {
    pleaseNotThis = false;

    blueWas = Array(); redWas = Array(); freePlacesWas = Array(); freePlaceWas2 = Array();
    blueWas = blue.slice(0);
    redWas = red.slice(0);
    freePlaceWas = freePlace.slice(0);
    blue.push(number_);
    freePlace = Array();
    for (let i = 0; i < freePlaceWas.length; i++) {
        if (freePlaceWas[i] != number_) {
            freePlace[freePlace.length] = freePlaceWas[i];
        }
    }
    defenceOrAttack2();
    if (numberBlue != 0) {
        red.push(numberBlue);
        freePlaceWas2 = freePlace.slice(0);
        freePlace = Array();
        for (let i = 0; i < freePlaceWas2.length; i++) {
            if (freePlaceWas2[i] != numberBlue) {
                freePlace[freePlace.length] = freePlaceWas2[i];
            }
        }
        defenceOrAttack2();
        if (numberRedArray.length >= 2) {
            pleaseNotThis = true;
            defenceOrAttack2();
            if (numberBlueArray.length >= 2) {
                pleaseNotThis = false;
            }
        }


    }
    blue = blueWas.slice(0);
    red = redWas.slice(0);
    freePlace = freePlaceWas.slice(0);
    return pleaseNotThis
}

dontForceHimToWinForRed = function (number_) {
    pleaseNotThis = false;

    blueWas = Array(); redWas = Array(); freePlacesWas = Array(); freePlaceWas2 = Array();
    blueWas = blue.slice(0);
    redWas = red.slice(0);
    freePlaceWas = freePlace.slice(0);
    red.push(number_);
    freePlace = Array();
    for (let i = 0; i < freePlaceWas.length; i++) {
        if (freePlaceWas[i] != number_) {
            freePlace[freePlace.length] = freePlaceWas[i];
        }
    }
    defenceOrAttack2();
    if (numberRed != 0) {
        blue.push(numberRed);
        freePlaceWas2 = freePlace.slice(0);
        freePlace = Array();
        for (let i = 0; i < freePlaceWas2.length; i++) {
            if (freePlaceWas2[i] != numberRed) {
                freePlace[freePlace.length] = freePlaceWas2[i];
            }
        }
        defenceOrAttack2();
        if (numberBlueArray.length >= 2) {
            pleaseNotThis = true;
            defenceOrAttack2();
            if (numberRedArray.length >= 2) {
                pleaseNotThis = false;
            }
        }


    }
    blue = blueWas.slice(0);
    red = redWas.slice(0);
    freePlace = freePlaceWas.slice(0);
    return pleaseNotThis
}


/*dontForceHimToWin = function (number_) {
    pleaseNotThis = false;
    blueWas = Array(); redWas = Array(); freePlacesWas = Array(); freePlaceWas2 = Array();
    blueWas = blue.slice(0);
    redWas = red.slice(0);
    freePlaceWas = freePlace.slice(0);
    blue.push(number_);
    freePlace = Array();
    for (let i = 0; i < freePlaceWas.length; i++) {
        if (freePlaceWas[i] != number_) {
            freePlace[freePlace.length] = freePlaceWas[i];
        }
    }
    defenceOrAttack2();
    if (numberBlue != 0) {
        red.push(numberBlue);
        freePlaceWas2 = freePlace.slice(0);
        freePlace = Array();
        for (let i = 0; i < freePlaceWas2.length; i++) {
            if (freePlaceWas2[i] != numberBlue) {
                freePlace[freePlace.length] = freePlaceWas2[i];
            }
        }
        defenceOrAttack2();
        if (numberRedArray.length >= 2) {
            pleaseNotThis = true;
            defenceOrAttack2();
            if (numberBlueArray.length >= 2) {
                pleaseNotThis = false;
            }
        }


    }
    blue = blueWas.slice(0);
    red = redWas.slice(0);
    freePlace = freePlaceWas.slice(0);
}*/


/*noNeedFunctionForArray = function (myArray) {
    noNeed = Array();
    for (let i = 0; i < myArray.length - 1; i++) {
        for (let j = i + 1; j < myArray.length; j++) {
            index = 0;
            if (myArray[i].length == myArray[j].length) {
                for (let k = 0; k < myArray[i].length; k++) {
                    if (myArray[i][k] == myArray[j][k]) {
                        index = index + 1;
                    }
                }
            }
            if (index == myArray[i].length) {
                noNeed[noNeed.length] = j
            }
        }
    }
    myNewArray = Array();
    for (let i = 0; i < myArray.length; i++) {
        if (noNeed.includes(i) == false) {
            myNewArray[myNewArray.length] = myArray[i];
        }
    }
   
    return myNewArray
}*/

showTableIndex = 0;
clearingLittleTable = function () {
    //line1 = Array(); line2 = Array(); line = Array();
    if (showTableIndex == 1) { clearInterval(showTable); }
    if (blinkText_ == 1) {
        clearInterval(showBlinkTextFunction);
        while (document.querySelector("#divForBr").children.length > 1) {
            area = document.querySelector("#divForBr");
            sector = document.querySelector("#newBr");
            area.removeChild(sector);
        };
        if (document.querySelector("#divForBr").children.length == 0) {
            area = document.querySelector("#divForBr");
            newBr = document.createElement("br");
            newBr.id = "newBr";
            area.appendChild(newBr);
        }
        document.querySelector("#computerWon").innerHTML = "";
    };
    //document.querySelector("#computerWon").innerHTML = "";
    for (let i = 1; i < 10; i++) {
        document.querySelector(`#littleTbody tr td[name='${i}']`).setAttribute("style", "background-color:#dbdbdb");
        document.querySelector(`#littleTbody tr td[name='${i}']`).innerHTML = "";
    };
    document.querySelector("#theWinnerStrategy").innerHTML = " - ";
    document.querySelector("#infoBox").style.visibility = "hidden";
};

newGame = function () {
    allPP = Array();
    avArray = Array();
    strategyOfEngineHistory = Array();
    clearingLittleTable();
    starting();
    closeStoredGame();
    document.querySelector("#infoAboutNoStrategy").style.display = "none";
    document.querySelector("#infoAboutAvoidStrategy").style.display = "none";
    document.querySelector("#stepOfEngine").innerHTML = "";
    showRightSideInfo();
};

IPlayWithWas = "";
putCoin = function (this_) {
    document.querySelector("#stepOfEngine").innerHTML = "";
    document.querySelector("#showButton").style["display"] = "none"
    closeStoredGame();
    if (blinkText_ == 1) { clearInterval(showBlinkTextFunction) };
    number = this_.getAttribute("name");
    number = parseInt(number);
    if (freePlace.includes(number) == false) { alert("Oda nem léphet, foglalt hely.") }
    else {
        if (document.querySelector("#twoPeople").checked == true) {
            gameForTwoPeople(number);
        }
        if (document.querySelector("#withComputer").checked == true) {
            if (thereIsWinner != "no") { alert("Nincs több lépése!"); }
            else {
                stepOnTheBoard(number);
                isWinner();
                if (thereIsWinner == "no") {
                    if (firstStep == "computer") { if (allPP[s].length > 0) { allPP[s] = allPP[s] + "/" } }
                    nowTheComputerStep();
                    computerStep = true;
                    stepOnTheBoard(number);
                    computerStep = false;
                    isWinner();
                };
            };
        };
        if (document.querySelector("#withRandomEngine").checked == true) {
            if (thereIsWinner != "no") { alert("Nincs több lépése!"); }
            else {
                stepOnTheBoard(number);
                isWinner();
                if (thereIsWinner == "no") {
                    if (firstStep == "computer") { if (allPP[s].length > 0) { allPP[s] = allPP[s] + "/" } }
                    defenceOrAttack(myId = checkBoxForCleverRandom1.id)
                    if (number == 0) {
                        chance = Math.floor(Math.random() * freePlace.length);
                        number = freePlace[chance];
                    }
                    else {
                        if (document.querySelector("#withLearningMemory").checked == true) {
                            document.querySelector("#stepOfEngine").innerHTML = `nem tanult, nyertes / védekező lépés`
                            stepOfEngineArray[stepOfEngineArray.length] = "nem tanult, nyertes / védekező lépés";
                            document.querySelector("#showButton").style["display"] = "none"
                            closeStoredGame();
                        }
                    }
                    stepOnTheBoard(number);
                    isWinner();
                };
            };
        };
        if (document.querySelector("#withLearningMemory").checked == true
            || document.querySelector("#withStoredLearningMemory").checked == true
        ) {
            if (thereIsWinner != "no") { alert("Nincs több lépése!"); }
            else {
                stepOnTheBoard(number);
                isWinner();

                if (thereIsWinner == "no") {
                    number = 0;

                    if (firstStep == "computer") {
                        thisWasBlue = blue.slice(0);
                        thisWasRed = red.slice(0);
                        red = thisWasBlue.slice(0);
                        blue = thisWasRed.slice(0);
                    }

                    defenceOrAttack(myId = cleverGame.id)
                    if (number == 0) {
                        gameWithLearningMemory();
                    }
                    else {
                        if (document.querySelector("#withLearningMemory").checked == true) {
                            document.querySelector("#stepOfEngine").innerHTML = `nem tanult, nyertes / védekező lépés`
                            stepOfEngineArray[stepOfEngineArray.length] = "nem tanult, nyertes / védekező lépés";
                            document.querySelector("#showButton").style["display"] = "none"
                            closeStoredGame();
                        }
                    }
                    if (firstStep == "computer") {
                        red = thisWasRed.slice(0);
                        blue = thisWasBlue.slice(0);
                    }

                    stepOnTheBoard(number);
                    isWinner();
                };

            };
        }
        if (document.querySelector("#withLearntStrategy").checked == true) {
            if (thereIsWinner != "no") { alert("Nincs több lépése!"); }
            else {

                stepOnTheBoard(number);
                isWinner();
                if (thereIsWinner == "no") {
                    IPlayWithWas = IPlayWith;
                    if (firstStep == "gamer") { IPlayWith = "blue" }
                    gameByLearntMemory();
                    IPlayWith = IPlayWithWas;
                    stepOnTheBoard(number);
                    isWinner();
                };
            };
        }
        if (document.querySelector("#withSimulatedLearntStrategy").checked == true) {
            if (thereIsWinner != "no") { alert("Nincs több lépése!"); }
            else {
                stepOnTheBoard(number);
                isWinner();
                if (thereIsWinner == "no") {
                    IPlayWithWas = IPlayWith;
                    if (firstStep == "gamer") { IPlayWith = "blue" }
                    gameByLearntMemory();
                    IPlayWith = IPlayWithWas;
                    stepOnTheBoard(number);
                    isWinner();
                };
            };
        }
        if (document.querySelector("#withSimulatedAI").checked == true /*&& nowLearning == true*/) {
            if (thereIsWinner != "no") { alert("Nincs több lépése!"); }
            else {
                stepOnTheBoard(number);
                isWinner();
                if (thereIsWinner == "no") {
                    IPlayWithWas = IPlayWith;
                    if (firstStep == "gamer") { IPlayWith = "blue" }
                    gameByLearntMemory();
                    IPlayWith = IPlayWithWas;
                    stepOnTheBoard(number);
                    isWinner();
                };
            };
        }
    };
};


check = function () {
    for (let i = 0; i < blueWonMemory.length; i++) {
        if (blueWonMemory[i][0] == "red" && blueWonMemory[blueWonMemory.length - 1] == "BLUE") {
            console.log(blueWonMemory[i]);
        }
    }
}

function prepareGameWithStoredLearningMemory() {
    blueWonMemory = Array();
    for (let i = 0; i < learningMemory.length; i++) {
        if (learningMemory[i][learningMemory[i].length - 1] == "BLUE") {
            blueWonMemory[blueWonMemory.length] = learningMemory[i];
        }
    }
    redWonMemory = Array();
    for (let i = 0; i < learningMemory.length; i++) {
        if (learningMemory[i][learningMemory[i].length - 1] == "RED") {
            redWonMemory[redWonMemory.length] = learningMemory[i];
        }
    }
    undecidedMemory = Array();
    for (let i = 0; i < learningMemory.length; i++) {
        if (learningMemory[i][learningMemory[i].length - 1] == "UNDECIDED") {
            undecidedMemory[undecidedMemory.length] = learningMemory[i];
        }
    }
}

gameWithLearningMemory = function () {
    itWasBlueWonMemory = blueWonMemory.slice(0);
    itWasRedWonMemory = redWonMemory.slice(0);
    itWasUndecidedMemory = undecidedMemory.slice(0);
    blueWonMemory = blueWonMemory.concat(blueWonMemoryFake)
    //console.log(blueWonMemoryFake, blueWonMemoryFake)
    redWonMemory = redWonMemory.concat(redWonMemoryFake)
    undecidedMemory = undecidedMemory.concat(undecidedMemoryFake)

    itWasBlueWonMemoryStrategies = blueWonMemoryStrategies.slice();
    itWasRedWonMemoryStrategies = redWonMemoryStrategies.slice();
    itWasUndecidedMemoryStrategies = undecidedMemoryStrategies.slice();
    blueWonMemoryStrategies = blueWonMemoryStrategies.concat(blueWonMemoryStrategiesFake);
    redWonMemoryStrategies = redWonMemoryStrategies.concat(redWonMemoryStrategiesFake);
    undecidedMemoryStrategies = undecidedMemoryStrategies.concat(undecidedMemoryStrategiesFake);







    //console.log(blueWonMemory)
    number = 0;
    min = 0;
    /*if (blueWonMemory.length == 0) {
        blueWonMemory = learningMemoryBlueWon;
        undecidedMemory = learningMemoryUndecided;
        redWonMemory = learningMemoryRedWon;
    };*/

    nextStepArray = Array();
    nextStepArray2 = Array();
    nextStepArray2GameNumber = Array();
    nextStepArrayUndecidedGameNumber = Array();
    nextStepArrayUndecided = Array();
    nextStepRedWon = Number();
    nextStepBlueWon = Number();
    redWonStep = 0;
    if (coins.length > 0) {
        nextStepRedWon = 0;
        importantBlue = false;
        if (number == 0) {
            for (let i = 0; i < blueWonMemory.length; i++) {
                index = 0;
                for (let j = 0; j < coins.length; j++) {
                    if (blueWonMemory[i][j] == coins[j]) {
                        index = index + 1;
                    }
                }
                if (index == coins.length) {
                    myArray = Array();
                    myArray[0] = blueWonMemory[i][coins.length + 1];
                    myArray[1] = blueWonMemory[i].length;
                    myArray[2] = i;
                    nextStepArray[nextStepArray.length] = myArray;
                }
            }
            if (nextStepArray.length > 0) {
                min = nextStepArray[0][1];
                for (let i = 0; i < nextStepArray.length; i++) {
                    if (nextStepArray[i][1] < min) {
                        min = nextStepArray[i][1];
                    }
                }
                nextStepAray2 = Array();
                for (let i = 0; i < nextStepArray.length; i++) {
                    if (nextStepArray[i][1] == min) {
                        nextStepArray2[nextStepArray2.length] = nextStepArray[i][0]
                        nextStepArray2GameNumber[nextStepArray2GameNumber.length] = nextStepArray[i][2]
                    }
                }
            }
            if (min == coins.length + 3) {
                importantBlue = true;
            }

            if (nextStepArray.length == 0) {
                for (let i = 0; i < undecidedMemory.length; i++) {
                    index = 0;
                    for (let j = 0; j < coins.length; j++) {
                        if (undecidedMemory[i][j] == coins[j]) {
                            index = index + 1;
                        }
                    }
                    if (index == coins.length) {
                        //myArray = Array();
                        //myArray[0] = undecidedMemory[i][coins.length + 1];
                        //myArray[1] = undecidedMemory[i].length;
                        nextStepArrayUndecided[nextStepArrayUndecided.length] = undecidedMemory[i][coins.length + 1];
                        nextStepArrayUndecidedGameNumber[nextStepArrayUndecidedGameNumber.length] = i;
                    }
                }
            }

            if (nextStepArray2.length > 0) {
                chance = Math.floor(Math.random() * nextStepArray2.length);
                number = nextStepArray2[chance];
                if (nowLearning == false) {
                    console.log(nextStepArray2, "tanult lépés!")
                    console.log("tan. memória játék száma:", nextStepArray2GameNumber[chance])
                    textForStepOfEngine = `tanult lépés (cél: nyerni).`
                    learntStep = true;
                    document.querySelector("#textBeforeStoredGame").innerHTML = `A játék sorszáma: ${nextStepArray2GameNumber[chance]}. a ${blueWonMemory.length} db. eltárolt nyertes játékból`
                    document.querySelector("#showButton").style["display"] = "initial"
                    myStoredGame = blueWonMemory[nextStepArray2GameNumber[chance]].slice();
                    myStoredGameIndex = nextStepArray2GameNumber[chance];
                    store = "blueWonMemory"
                    myStoredGameHistory[myStoredGameHistory.length] = myStoredGame;
                    stepNumber = 1;
                    showTheStoredGameSteps();
                };
            }

            if (nextStepArrayUndecided.length > 0) {
                //if (nextStepArray.length > 0) {
                chance = Math.floor(Math.random() * nextStepArrayUndecided.length);
                number = nextStepArrayUndecided[chance];
                if (nowLearning == false) { console.log("undecided") };
                textForStepOfEngine = `tanult lépés (cél: döntetlen).`
                learntStep = true;
                document.querySelector("#textBeforeStoredGame").innerHTML = `A játék sorszáma: ${nextStepArrayUndecidedGameNumber[chance]}. a ${undecidedMemory.length} db. eltárolt döntetlen játékból`
                document.querySelector("#showButton").style["display"] = "initial"
                myStoredGame = undecidedMemory[nextStepArrayUndecidedGameNumber[chance]].slice(0);
                myStoredGameIndex = nextStepArrayUndecidedGameNumber[chance];
                store = "undecidedMemory";
                myStoredGameHistory[myStoredGameHistory.length] = myStoredGame;
                stepNumber = 1;
                if (nowLearning == false) { showTheStoredGameSteps() };
            }
            if (importantBlue == false) {
                for (let i = 0; i < redWonMemory.length; i++) {

                    if (redWonMemory[i].length == coins.length + 5) {
                        index = 0;
                        for (let j = 0; j < coins.length; j++) {
                            if (redWonMemory[i][j] == coins[j]) {
                                index = index + 1;
                            }
                        }
                        if (index == coins.length) {
                            nextStepRedWon = redWonMemory[i][redWonMemory[i].length - 2];
                            number = nextStepRedWon;
                            //console.log("redWonStep:", nextStepRedWon);
                            break
                        }
                        if (index == coins.length) { break };
                    };
                }
            }
        }
    }
    theNumberWas = number;
    defenceOrAttack2();
    //console.log("foundIt", foundIt)
    if (foundIt == false) { number = theNumberWas }

    if (number == 0) {
        chance = Math.floor(Math.random() * freePlace.length);
        number = freePlace[chance];
        if (nowLearning == false) { console.log("RND") };
        textForStepOfEngine = `nem tanult, random lépés`
        learntStep = false;
        document.querySelector("#showButton").style["display"] = "none"
        closeStoredGame();
        //console.log("number_", number)
    }
    document.querySelector("#stepOfEngine").innerHTML = textForStepOfEngine;
    stepOfEngineArray[stepOfEngineArray.length] = textForStepOfEngine;
    myStore = Array();
    if (store == "blueWonMemory") { myStore = blueWonMemoryStrategies };
    if (store == "undecidedMemory") { myStore = undecidedMemoryStrategies };
    //if (learntStep == true) { document.querySelector("#strategyOfEngine").innerHTML = myStore[myStoredGameIndex][coins.length / 2 - 1] };
    //strategyOfEngineHistory[strategyOfEngineHistory.length] = myStore[myStoredGameIndex][coins.length / 2 - 1]

    blueWonMemory = itWasBlueWonMemory.slice(0)
    redWonMemory = itWasRedWonMemory.slice(0);
    undecidedMemory = itWasUndecidedMemory.slice(0)


    blueWonMemoryStrategies = itWasBlueWonMemoryStrategies.slice(0);
    redWonMemoryStrategies = itWasRedWonMemoryStrategies.slice(0);
    undecidedMemoryStrategies = itWasUndecidedMemoryStrategies.slice(0);



}

forwardInTable10 = function () {

    if (noStep == false && stepNumber < myStoredGame.length - 3) {
        stepNumber = stepNumber + 2;
        showTheStoredGameSteps();
    };
}

backInTable10 = function () {
    if (stepNumber > 2 && noStep == false) {
        stepNumber = stepNumber - 2;
        showTheStoredGameSteps();
    };
}

showTheStoredGameSteps = function () {
    storedGamesOnclick();
    for (let i = 1; i < 10; i++) {
        document.querySelector(`#littleTbody10 td[name='${i}']`).innerHTML = "";
    }
    for (let i = 0; i < stepNumber; i++) {
        if (myWonMemory[gameNumber5][i] == "blue") {
            document.querySelector(`#littleTbody10 td[name='${myStoredGame[i + 1]}']`).innerHTML = "&#128309"
        }
        if (myWonMemory[gameNumber5][i] == "red") {
            document.querySelector(`#littleTbody10 td[name='${myStoredGame[i + 1]}']`).innerHTML = "&#128308"
        }
    }
}

showStoredGame = function () {
    document.querySelector("#storedGame").style.display = "initial"
}

closeStoredGame = function () {
    document.querySelector("#storedGame").style.display = "none"
}

exNumber = 1;
nowTheComputerStep = function () {

    available = false;
    requiredPlace = 0;
    firstStrategy = "nothing";
    av = -10;
    pp = -10;
    computerWon = false;
    strategy = "nothing";
    requiredPlace = 0;
    wasChanged = false;
    if (coins[coins.length - 2] == "blue") {
        blueWas = Array(); redWas = Array();
        blueWas = blue.slice(0);
        redWas = red.slice(0);
        blue = redWas.slice(0);
        red = blueWas.slice(0);
        wasChanged = true;
    }
    theComputerPlaysNow();
    if (wasChanged == true) {
        blue = blueWas.slice(0);
        red = redWas.slice(0);
    }
    if (blinkingMemory[step - 2] == "on") { blinkingMemory[step] = "on" };
    number = requiredPlace;

    strategyArray[step] = strategy;
    ppArray[ppArray.length] = pp;
};

makeLightYellowTheActualStep = function (number, exNumber) {
    if (nowLearning == false) {
        document.querySelector(`#millTbody tr td[name='${exNumber}']`).style["background-color"] = "#dbdbdb";
        document.querySelector(`#millTbody td[name='${number}']`).style["background-color"] = "#eedc82";
        exNumber = number;
    };
}



theComputerPlaysNow = function () {
    avArray[avArray.length] = "/";

    if (available == false && blue.length > 1) {
        if (blue.length == 2) {

            let place = 15 - blue[0] - blue[1];
            if (freePlace.includes(place) == true) {
                requiredPlace = place; available = true;
                strategy = "winner step";
                av = 0; checkAv();
            };
        }
        if (blue.length > 2 && available == false) {
            for (let i = 0; i < blue.length - 1; i++) {
                for (let j = i + 1; j < blue.length; j++) {
                    let place = 15 - blue[i] - blue[j];

                    if (freePlace.includes(place) == true) {

                        requiredPlace = place; available = true;
                        previousRequiredPlace = requiredPlace;
                        strategy = "winner step"; av = 0; checkAv();
                    }
                }
                if (available == true) { break };
            };
        };

        pp = 0; checkProgramParts();
    };

    if (available == false && red.length > 1 && strategy != "winner step") {
        for (let i = 0; i < red.length - 1; i++) {
            for (let j = i + 1; j < red.length; j++) {
                let place = 15 - red[i] - red[j];
                for (let k = 0; k < freePlace.length; k++) {
                    if (freePlace[k] == place) {
                        requiredPlace = place; available = true;
                        av = 1; checkAv();
                    }
                    if (available == true) { break };
                }
                if (available == true) { break };
            }
            if (available == true) { break; };
        }
        if (available == true) { strategy = "defence"; }
        pp = 1; checkProgramParts();
    }

    chanceFirstStep = -10;
    if (blue.length == 0 && red.length == 0) {
        chanceFirstStep = Math.ceil(Math.random() * 9);
        if (chanceFirstStep >= 1 && chanceFirstStep <= 4) {
            requiredPlace = 0;
            while (freePlace.includes(requiredPlace) == false) {
                index = Math.floor(Math.random() * cross.length);
                requiredPlace = cross[index];
            };
            strategy = "trying-from-the-side";
            available = true; av = 2; checkAv()
            chanceFromTheSide = Math.ceil(Math.random() * 2);
        };
        pp = 2; checkProgramParts();
    };

    if (blue.length == 0 && chanceFirstStep == 9) {
        requiredPlace = 5;
        strategy = "winner-from-the-middle"
        available = true; av = 32; checkAv();
        pp = 32; checkProgramParts();
    };

    if (blue.length == 1 &&
        previousStrategy[previousStrategy.length - 1] == "winner-from-the-middle" &&
        corner.includes(red[red.length - 1]) == true) {
        requiredPlace = round[(round.indexOf(red[red.length - 1]) + 4) % 8];
        strategy = "winner-from-the-middle";
        available = true; av = 39; checkAv();
        pp = 39; checkProgramParts();
    }


    if (available != true && blue.length == 1 &&
        previousStrategy[previousStrategy.length - 1] == "trying-from-the-side") {
        if (red[red.length - 1] == round[(round.indexOf(blue[0]) + 4) % 8]) { strategy = "little-triangle-in-the-corner" }
        else { strategy = "the-large-X" };
        if (red[red.length - 1] == 5) {
            chance = Math.ceil(Math.random() * 2);
            if (chance == 1) { strategy = "little-triangle-in-the-corner" };
            if (chance == 2) { strategy = "large-L" };
        };
        av = 3; checkAv();
        pp = 3; checkProgramParts();
    };

    if (blue.length == 0 && available == false &&
        chanceFirstStep >= 5 && chanceFirstStep <= 8) {
        requiredPlace = 0;
        while (freePlace.includes(requiredPlace) == false) {
            chance = Math.floor(Math.random() * 4);
            requiredPlace = corner[chance];
        };
        available = true; av = 4; checkAv()
        strategy = "trying-from-the-corner";
        pp = 4; checkProgramParts();
    }


    if (blue.length == 1 && strategy == "the-large-X") {
        index = round.indexOf(blue[0]);
        if (red.includes(round[(index + 3) % 8]) == true ||
            red.includes(round[(index + 2) % 8]) == true) {
            index1 = (index + 1) % 8;
            requiredPlace = round[index1];
            element = round[index1];
            available = true; av = 5; checkAv()
            pp = 5; checkProgramParts();
        };
        if (red.includes(round[(index + 5) % 8]) == true ||
            red.includes(round[(index + 6) % 8]) == true) {
            index2 = (index + 7) % 8;
            requiredPlace = round[index2];
            element = round[index2];
            available = true; av = 6; checkAv()
            pp = 6; checkProgramParts();
        };
        if (available == true) {
            line1 = [blue[0], 5, round[(round.indexOf(blue[0]) + 4) % 8]];
            line2 = [element, 5, round[(round.indexOf(element) + 4) % 8]];
            line = [blue[0], 5, round[(round.indexOf(blue[0]) + 4) % 8], element, round[(round.indexOf(element) + 4) % 8]];
            winnerStrategy = "the-large-X";
            if (nowLearning == false) { blinkTextFunction() };
            computerWon = true;
            av = 7; checkAv()
            pp = 7; checkProgramParts();

        }
        if (available == false) { strategy = "nothing" };
    };

    if (blue.length == 2 && previousStrategy[previousStrategy.length - 1] == "the-large-X" && red.includes(5) == false && available == false) {
        requiredPlace = 5; available = true; av = 8; checkAv()
        pp = 8; checkProgramParts();
    };

    if (blue.length == 1 && corner.includes(blue[0]) == true &&
        cross.includes(red[red.length - 1]) == true && available == false) {
        requiredPlace = 5; strategy = "put-in-the-centre"; available = true; av = 9; checkAv()
        winnerStrategy = "put-in-the-centre";
        if (nowLearning == false) { blinkTextFunction() };
        computerWon = true;
        pp = 9; checkProgramParts();
    }

    //NE TÖRÖLD KI!
    if (blue.length == 1 && corner.includes(blue[0]) == true &&
        corner.includes(red[red.length - 1]) == true && available == false) {
        continueLoop = true;
        while (continueLoop == true) {
            chance = Math.floor(Math.random() * 4);
            let place = corner[chance];
            if (freePlace.includes(place) == true) {
                requiredPlace = place;
                continueLoop = false;
                available = true; av = 10; checkAv();
                strategy = "big-triangle";

                line1 = [round[(round.indexOf(red[0]) + 2) % 8], round[(round.indexOf(red[0]) + 3) % 8],
                round[(round.indexOf(red[0]) + 4) % 8]];
                line2 = [round[(round.indexOf(red[0]) + 4) % 8], round[(round.indexOf(red[0]) + 5) % 8],
                round[(round.indexOf(red[0]) + 6) % 8]];
                line1_ = line1.slice(0);
                line = line1_.concat(line2);

                if (nowLearning == false) { blinkTextFunction() };
                //computerWon = true; ez ne legyen true, lásd: coins=[7,6,8,4], kell a lucky-eyes
            }
        }
        pp = 10; checkProgramParts()
    };

    //NE TÖRÖLD KI!
    /*if (blue.length > 0 && available==true) {
        //egyik sarokban van már kék és csak az egyikben
        blueCounter = 0;
        redCounter = 0;
        letsContinue = false;
        requiredPlaceArray = Array();
        for (let i = 0; i < round.length; i++) {
            if (colors[round[i]] == "blue") { blueCounter = blueCounter + 1; index = round.indexOf(i); };
            if (colors[round[i]] == "red") { redCounter = redCounter + 1 };
        };
        if (blueCounter == 1 && redCounter <= 1) {
            letsContinue = true;
        };
        if (letsContinue == true) {
            if (freePlace.includes(round[(index + 1) % 8]) == true &&
                freePlace.includes(round[(index + 2) % 8]) == true &&
                freePlace.includes(round[(index + 3) % 8]) == true &&
                freePlace.includes(round[(index + 4) % 8]) == true &&
                freePlace.includes(5) == true) {
                requiredPlaceArray[requiredPlaceArray.length] = round[(index + 4) % 8]
            }
            if (freePlace.includes(round[(index + 4) % 8]) == true &&
                freePlace.includes(round[(index + 5) % 8]) == true &&
                freePlace.includes(round[(index + 6) % 8]) == true &&
                freePlace.includes(round[(index + 7) % 8]) == true &&
                freePlace.includes(5) == true) {
                requiredPlaceArray[requiredPlaceArray.length] = round[(index + 4) % 8]
            }
            if (freePlace.includes(round[(index + 1) % 8]) == true &&
                freePlace.includes(round[(index + 2) % 8]) == true &&
                freePlace.includes(round[(index + 6) % 8]) == true &&
                freePlace.includes(round[(index + 7) % 8]) == true) {
                requiredPlaceArray[requiredPlaceArray.length] = round[(index + 2) % 8]
                requiredPlaceArray[requiredPlaceArray.length] = round[(index + 6) % 8]
            }
        }
        if (requiredPlaceArray.length > 0) {
            chance = Math.floor(Math.random() * requiredPlaceArray.length);
            requiredPlace = requiredPlaceArray[chance];
            available = true;
            //console.log("most")
            av = 35; checkAv();
            strategy="big-triangle"
        }
        pp = 35; checkProgramParts()
 
    }*/

    if (available == false && blue.length == 2 && corner.includes(blue[0]) == true && corner.includes(blue[1]) == true &&
        corner.includes(red[red.length - 2]) == true) {
        let place = 20 - blue[0] - blue[1] - red[red.length - 2];
        if (freePlace.includes(place) == true) {
            requiredPlace = place;
            available = true; av = 11; checkAv();
            computerWon = true;
            strategy = "big-triangle";
        }

        pp = 11; checkProgramParts();

    };

    if (available != true && blue.length == 1 && cross.includes(blue[0]) == true && corner.includes(red[red.length - 1]) == true) {
        continueLoop = true;
        while (continueLoop == true) {
            chance = Math.floor(Math.random() * 4);
            let place = corner[chance];
            if (freePlace.includes(place) == true &&
                place != round[(round.indexOf(blue[0]) + 1) % 8] &&
                place != round[(round.indexOf(blue[0]) + 7) % 8]) {
                requiredPlace = place;
                continueLoop = false;
                available = true; av = 12; checkAv()
            }
        }
        pp = 12; checkProgramParts()
    }

    if (blue.length == 1 && strategy == "large-L" && red[0] == 5 && available == false) {
        {
            chance = Math.ceil(Math.random() * 2);
            index = round.indexOf(blue[0]);
            if (chance == 1) {
                index1 = (index + 3) % 8;
            }
            else {
                index1 = (index + 5) % 8;
            };
            requiredPlace = round[index1];
            strategy = "large-L";
            available = true; av = 13; checkAv()
        };
        pp = 13; checkProgramParts();
    };

    if (blue.length == 2 && available == false && strategy != "little-triangle-in-the-corner") {
        chance = Math.ceil(Math.random() * 3);
        if (chance == 3) {
            for (let i = 0; i < circle.length; i++) {
                cArray = circle[i];
                howManyRed = 0;
                howManyBlue = 0;
                blue_ = Array();
                for (let j = 0; j < cArray.length - 1; j++) {
                    for (let k = 0; k < blue.length; k++) {
                        if (cArray[j] == blue[k]) {
                            howManyBlue = howManyBlue + 1;
                            blue_[blue_.length] = blue[k];
                        }
                    };
                    for (let k = 0; k < red.length; k++) {
                        if (cArray[j] == red[k]) { howManyRed = howManyRed + 1; }
                    };
                };
                if (howManyBlue == 2 && howManyRed == 0 && freePlace.includes(cArray[cArray.length - 1])) {
                    available = true; av = 14; checkAv(); requiredPlace = cArray[cArray.length - 1];
                    strategy = "large-L";

                    blue_.push(requiredPlace);
                    index1 = -1; index2 = -1;
                    for (let i = 0; i < blue_.length; i++) {
                        if (corner.includes(blue_[i]) == true && index1 == -1) { index1 = blue_[i] };
                        if (corner.includes(blue_[i]) == true && index1 != -1 && index1 != blue_[i]) { index2 = blue_[i] };
                    }
                    indexCross = -1;
                    for (let i = 0; i < blue_.length; i++) {
                        if (cross.includes(blue_[i]) == true) { indexCross = blue_[i] };
                    }
                    line1 = [round[(round.indexOf(indexCross) + 1) % 8], indexCross, round[(round.indexOf(indexCross) + 7) % 8]]
                    if ((round.indexOf(index1) + 2) % 8 == round.indexOf(index2)) {
                        line2 = [index1, round[round.indexOf(index1) + 1], index2];
                    }
                    if ((round.indexOf(index2) + 2) % 8 == round.indexOf(index1)) {
                        line2 = [index2, round[round.indexOf(index2) + 1], index1];
                    }
                    line = line1.concat(line2);
                    winnerStrategy = strategy;


                    if (nowLearning == false) { blinkTextFunction() };
                    computerWon = true;
                };
                if (available == true) { break };
            };
        };
        pp = 14; checkProgramParts();
    };

    if (available == false && blue.length == 2 && previousStrategy[previousStrategy.length - 1] == "put-in-the-centre") {
        chance = Math.ceil(Math.random() * 2);
        if (chance == 1) {
            //egyébként middle-triangle
            if (freePlace.includes(round[(round.indexOf(blue[0]) + 1) % 8]) == true &&
                freePlace.includes(round[(round.indexOf(blue[0]) + 2) % 8]) == true &&
                freePlace.includes(round[(round.indexOf(blue[0]) + 5) % 8]) == true) {
                requiredPlace = round[(round.indexOf(blue[0]) + 1) % 8];
                available = true; av = 15; checkAv();
                computerWon = true;
                strategy = "little-triangle";
                winnerStrategy = strategy;
                pp = 15; checkProgramParts();
            }
            if (freePlace.includes(round[(round.indexOf(blue[0]) + 3) % 8]) == true &&
                freePlace.includes(round[(round.indexOf(blue[0]) + 6) % 8]) == true &&
                freePlace.includes(round[(round.indexOf(blue[0]) + 7) % 8]) == true) {
                requiredPlace = round[(round.indexOf(blue[0]) + 7) % 8];
                available = true; av = 16; checkAv();
                computerWon = true;
                strategy = "little-triangle";
                winnerStrategy = strategy;
                pp = 16; checkProgramParts();
            };
        };
    }

    if (blue.length == 1 && corner.includes(blue[0]) == true && cross.includes(red[0]) == true && available == false) {
        requiredPlace = 5;
        available = true; av = 17; checkAv()
        strategy = "medium-triangle";
        for (let i = 0; i < 4; i++) {
            index = 0;
            if (colors[corner[i]] == "empty" &&
                corner[i] != round[(round.indexOf(blue[0]) + 4) % 8] &&
                corner[i] != blue[0]) { index = corner[i]; break }
        };
        line1 = [index, 5, round[(round.indexOf(index) + 4) % 8]];
        pp = 17; checkProgramParts();
    };

    //általános medium-triangle keresés
    if (strategy != "defence" && blue.length > 1 && strategy != "winner step" && strategy != "little-triangle" && computerWon != true) {
        triangle = Object();
        whereToPut = Array();
        lines = Array();
        if (strategy == "defence") {
            firstStrategy = "defence";
            whereToPut[0] = requiredPlace;
            blue_ = Array(); blue_[0] = blue[0]; blue_[1] = blue[1]; blue_[2] = requiredPlace;
            allCoins = blue_.concat(red);
            for (let i = 0; i < blue_.length - 1; i++) {
                for (let j = i + 1; j < blue_.length; j++) {
                    index = 15 - blue_[i] - blue_[j];
                    if (allCoins.includes(index) == false &&
                        allPlace.includes(index)) {
                        myLine = [blue_[i], blue_[j], index]
                        lines[lines.length] = myLine;

                    }
                }
            }
            if (lines.length > 1) {
                line = lines[0].concat(lines[1]);
                line1 = lines[0];
                line2 = lines[1];
                available = true; av = 18; checkAv()
                if (line1 == undefined || line2 == undefined) { strategy = "defence" }
                else {
                    strategy = "medium-triangle";
                    if (nowLearning == false) { blinkTextFunction() };
                    computerWon = true;
                };
            }
            pp = 18; checkProgramParts();
        }
        else {
            for (let i = 0; i < corner.length; i++) {
                triangle.index1 = corner[i]; triangle.index2 = 5; triangle.index3 = round[(round.indexOf(corner[i]) + 2) % 8];
                blueIndex = 0; redIndex = 0; emptyIndex = 0; blues = Array(); empties = Array();
                for (let k = 0; k < Object.values(triangle).length; k++) {
                    if (colors[Object.values(triangle)[k]] == "red") { redIndex = redIndex + 1 };
                    if (colors[Object.values(triangle)[k]] == "blue") { blueIndex = blueIndex + 1; blues[blues.length] = Object.values(triangle)[k]; };
                    if (colors[Object.values(triangle)[k]] == "empty") { emptyIndex = emptyIndex + 1; empties[0] = Object.values(triangle)[k]; };
                };
                if (blueIndex == 2 && redIndex == 0 && emptyIndex == 1) {
                    if (freePlace.includes(15 - blues[0] - empties[0]) == true &&
                        freePlace.includes(15 - blues[1] - empties[0]) == true) {
                        whereToPut[whereToPut.length] = empties[0];
                        myLine = Array();
                        myLine = [15 - blues[0] - empties[0], blues[0], empties[0], 15 - blues[1] - empties[0], blues[1], empties[0]];
                        lines[lines.length] = myLine;
                    };
                };
            };
            pp = 18; checkProgramParts();
        };
        if (whereToPut.length > 0 && firstStrategy != "defence") {
            chance = Math.floor(Math.random() * whereToPut.length);
            requiredPlace = whereToPut[chance];
            available = true; av = 19; checkAv()
            strategy = "medium-triangle";
            line = lines[chance];
            line1 = [lines[chance][0], lines[chance][1], lines[chance][2]];
            line2 = [lines[chance][3], lines[chance][4], lines[chance][5]];
            if (nowLearning == false) { blinkTextFunction() };
            computerWon = true;
            pp = 19; checkProgramParts();
        };

    };

    if (available == false && strategy != "little-triangle-in-the-corner") {
        for (let i = 0; i < circle.length; i++) {
            cArray = circle[i];
            howManyRed = 0;
            howManyBlue = 0;
            cornerFree = false;
            for (let j = 0; j < cArray.length - 1; j++) {
                for (let k = 0; k < red.length; k++) {
                    if (cArray[j] == red[k]) { howManyRed = howManyRed + 1; }
                };
                for (let k = 0; k < blue.length; k++) {
                    if (cArray[j] == blue[k]) { howManyBlue = howManyBlue + 1; }
                };
            };
            for (let k = 0; k < freePlace.length; k++) {
                if (freePlace[k] == cArray[cArray.length - 1]) {
                    cornerFree = true;
                }
            }
            if (howManyRed == 2 && howManyBlue == 0 && cornerFree == true) {
                available = true; requiredPlace = cArray[cArray.length - 1];
                strategy = "defence-from-large-L";
                if (available == true) { av = 20; checkAv(); }
                pp = 20; checkProgramParts()
            };
            if (howManyRed == 0 && howManyBlue == 2 && cornerFree == true) {
                available = true; requiredPlace = cArray[cArray.length - 1];
                strategy = "large-L";
                if (available == true) { av = 21; checkAv(); }
                pp = 21; checkProgramParts()
                computerWon = true;
                if (nowLearning == false) { blinkTextFunction() };
                line1 = [cArray[0], cArray[1], cArray[4]];
                line2 = [cArray[2], cArray[3], cArray[4]]
                line = cArray.slice(0);
            };
            if (available == true) { break };
            pp = 20; checkProgramParts();
        };
    };

    if (available == false) {
        for (let i = 0; i < Tmodel.length; i++) {
            TArray = Tmodel[i];
            howManyRed = 0;
            howManyBlue = 0
            for (let j = 0; j < TArray.length - 1; j++) {
                for (let k = 0; k < red.length; k++) {
                    if (TArray[j] == red[k]) { howManyRed = howManyRed + 1; }
                };
                for (let k = 0; k < blue.length; k++) {
                    if (TArray[j] == blue[k]) { howManyBlue = howManyBlue + 1; }
                };
            };
            if (howManyRed == 0 && howManyBlue == 2 && freePlace.includes(TArray[TArray.length - 1])) {
                available = true; requiredPlace = TArray[TArray.length - 1];
                strategy = "Tmodel";
                if (available == true) { av = 22; checkAv(); }
                pp = 22; checkProgramParts();
            };
            if (howManyRed == 2 && howManyBlue == 0 && freePlace.includes(TArray[TArray.length - 1])) {
                available = true; requiredPlace = TArray[TArray.length - 1];
                if (available == true) { av = 23; checkAv(); }
                strategy = "defence-from-Tmodel"
                pp = 23; checkProgramParts();
            };
            if (available == true) { break };
        };
        pp = 23; checkProgramParts();
    };

    if (strategy == "little-triangle-in-the-corner" && available == false && blue.length == 1 &&
        cross.includes(blue[blue.length - 1]) == true) {
        whereToPut = Array();
        candidate = Array();
        needBeFree = Array();
        if (red[red.length - 1] == 5 ||
            red[red.length - 1] == round[(round.indexOf(blue[blue.length - 1]) + 4) % 8]) {
            whereToPut[0] = round[(round.indexOf(blue[blue.length - 1]) + 2) % 8];
            candidate[0] = round[(round.indexOf(blue[blue.length - 1]) + 1) % 8]
            needBeFree[0] = round[(round.indexOf(blue[blue.length - 1]) + 3) % 8]
            needBeFree[1] = round[(round.indexOf(blue[blue.length - 1]) + 7) % 8]
            whereToPut[1] = round[(round.indexOf(blue[blue.length - 1]) + 6) % 8];
            candidate[1] = round[(round.indexOf(blue[blue.length - 1]) + 7) % 8]
            needBeFree[2] = round[(round.indexOf(blue[blue.length - 1]) + 1) % 8]
            needBeFree[3] = round[(round.indexOf(blue[blue.length - 1]) + 5) % 8]
        };
        if (red[red.length - 1] == round[(round.indexOf(blue[blue.length - 1]) + 2) % 8] ||
            red[red.length - 1] == round[(round.indexOf(blue[blue.length - 1]) + 3) % 8]) {
            whereToPut[0] = round[(round.indexOf(blue[blue.length - 1]) + 6) % 8];
            candidate[0] = round[(round.indexOf(blue[blue.length - 1]) + 7) % 8];
            needBeFree[0] = round[(round.indexOf(blue[blue.length - 1]) + 1) % 8];
            needBeFree[1] = round[(round.indexOf(blue[blue.length - 1]) + 5) % 8];
        };
        if (red[red.length - 1] == round[(round.indexOf(blue[blue.length - 1]) + 5) % 8] ||
            red[red.length - 1] == round[(round.indexOf(blue[blue.length - 1]) + 6) % 8]) {
            whereToPut[0] = round[(round.indexOf(blue[blue.length - 1]) + 2) % 8];
            candidate[0] = round[(round.indexOf(blue[blue.length - 1]) + 1) % 8];
            needBeFree[0] = round[(round.indexOf(blue[blue.length - 1]) + 3) % 8];
            needBeFree[1] = round[(round.indexOf(blue[blue.length - 1]) + 7) % 8];
        };
        if (whereToPut.length > 0) {
            chanceLTITC = Math.floor(Math.random() * whereToPut.length);
            requiredPlace = whereToPut[chanceLTITC];
            nextPlace = candidate[chanceLTITC];
            //nextPlace = candidate[0];
            available = true; av = 24; checkAv();
            strategy = "little-triangle-in-the-corner2";
            littleTriangleInTheCorner = Array();
            littleTriangleInTheCorner[0] = blue[blue.length - 1];
            littleTriangleInTheCorner[1] = requiredPlace;
            littleTriangleInTheCorner[2] = nextPlace;
        };
        pp = 24; checkProgramParts();
    };

    if (available == true && blue.length == 2
        && previousStrategy[previousStrategy.length - 1] == "little-triangle-in-the-corner2"
        && strategy != "defence" && strategy != "winner step"

        && freePlace.includes(nextPlace) == true &&
        freePlace.includes(needBeFree[chanceLTITC * 2]) == true &&
        freePlace.includes(needBeFree[chanceLTITC * 2 + 1]) == true) {
        requiredPlace = nextPlace;
        available = true; av = 25; checkAv();
        line1 = [nextPlace, round[(round.indexOf(nextPlace) + 1) % 8], round[(round.indexOf(nextPlace) + 2) % 8]];
        line2 = [nextPlace, round[(round.indexOf(nextPlace) + 6) % 8], round[(round.indexOf(nextPlace) + 7) % 8]];
        line = line1.concat(line2);
        if (nowLearning == false) { blinkTextFunction() };
        computerWon = true;
        pp = 25; checkProgramParts();
    };

    if (computerWon == false && strategy != "defence" && strategy != "winner step" &&
        freePlace.length > 2 && blue.length > 1) {
        available_ = false;
        for (let i = 0; i < freePlace.length; i++) {
            index = freePlace[i];
            blue.push(index);
            freePlace_ = Array();
            for (let h = 0; h < freePlace.length; h++) {
                if (freePlace[h] != index) { freePlace_[freePlace_.length] = freePlace[h] }
            }
            thisIsTheRightPlace = 0;
            for (let j = 0; j < blue.length - 1; j++) {
                for (let k = j + 1; k < blue.length; k++) {
                    myNumber = 15 - blue[j] - blue[k];
                    if (freePlace_.includes(myNumber) == true) {
                        thisIsTheRightPlace = thisIsTheRightPlace + 1;
                        if (thisIsTheRightPlace == 1) {
                            line1[0] = blue[j]; line1[1] = blue[k]; line1[2] = myNumber;
                        }
                        if (thisIsTheRightPlace == 2) {
                            line2[0] = blue[j]; line2[1] = blue[k]; line2[2] = myNumber;
                            line = line1.concat(line2);
                            requiredPlace = index; available_ = true; av = 26; checkAv();
                            strategy = "lucky-eyes";
                            computerWon = true;
                            if (nowLearning == false) { blinkTextFunction() };
                        };
                        if (available_ == true) { break };
                    };
                    if (available_ == true) { break };
                };
                if (available_ == true) { break };
            };
            blue.pop(index);
        };
        if (available_ == true) { available = true };
        pp = 26; checkProgramParts();
    };

    if (computerWon == false && strategy != "defence" && strategy != "winner step" &&
        freePlace.length > 1 && red.length > 1) {
        trickyCombination = 0;
        requiredPlaceArray = Array();
        for (let i = 0; i < freePlace.length; i++) {
            index = freePlace[i];
            red.push(index);
            freePlace_ = Array();
            for (let h = 0; h < freePlace.length; h++) {
                if (freePlace[h] != index) { freePlace_[freePlace_.length] = freePlace[h] }
            }
            thisIsTheRightPlace = 0;
            for (let j = 0; j < red.length - 1; j++) {
                for (let k = j + 1; k < red.length; k++) {
                    myNumber = 15 - red[j] - red[k];
                    if (freePlace_.includes(myNumber) == true) {
                        thisIsTheRightPlace = thisIsTheRightPlace + 1;
                        if (thisIsTheRightPlace == 2) {
                            requiredPlace = index; available = true; av = 27; checkAv();
                            strategy = "lucky-eyes-for-defence";
                            trickyCombination = trickyCombination + 1;
                            requiredPlaceArray[requiredPlaceArray.length] = requiredPlace;
                        };
                    };
                };
            };
            red.pop();
        };
        if (trickyCombination > 2) {
            available = false;
            requiredPlaceArray2 = Array();
            for (let i = 0; i < blue.length; i++) {
                index = blue[i];
                for (let k = 0; k < freePlace.length - 1; k++) {
                    for (let j = k + 1; j < freePlace.length; j++) {
                        if (index + freePlace[k] + freePlace[j] == 15) {
                            if (requiredPlaceArray.includes(freePlace[j]) == false) { requiredPlaceArray2[requiredPlaceArray2.length] = freePlace[k]; }
                            if (requiredPlaceArray.includes(freePlace[k]) == false) { requiredPlaceArray2[requiredPlaceArray2.length] = freePlace[j]; }
                        }
                    }
                }
            }
            if (requiredPlaceArray2.length > 0) {
                chance = Math.floor(Math.random() * requiredPlaceArray2.length);
                requiredPlace = requiredPlaceArray2[chance];
                strategy = "lucky-eyes-for-defence-pretending-attack";
                available = true; av = 38; checkAv();
            }
        };
        pp = 27; checkProgramParts();
    };

    if (available == false && computerWon == false) {
        if (blue.length == 1 && red.length == 0) {
            if (freePlace.includes(round[(round.indexOf(blue[0]) + 3) % 8]) == true) {
                requiredPlace = round[(round.indexOf(blue[0]) + 3) % 8]
            }
            if (freePlace.includes(round[(round.indexOf(blue[0]) + 5) % 8]) == true) {
                requiredPlace = round[(round.indexOf(blue[0]) + 5) % 8]
            }
            strategy = "defence-from-L";
            available = true; av = 28; checkAv();
            if (nowLearning == false) { noStrategy() };
            pp = 28; checkProgramParts();
            //console.log("mostELSŐ!!!! s=", s, coins, requiredPlace)

        }
    }
    if (available == false && computerWon == false) {
        let place = Math.floor(Math.random() * freePlace.length);
        requiredPlace = freePlace[place];
        strategy = "random step";
        available = true; av = 29; checkAv();
        if (nowLearning == false) { noStrategy() };
        pp = 29; checkProgramParts();
        //console.log("most!!!!", s, coins, requiredPlace)
    };


    if (blue.length == 0 && corner.includes(red[0]) == true) {
        requiredPlace = round[(round.indexOf(red[0]) + 4) % 8]
        available = true;
        if (available == true) { av = 30; checkAv() };
        pp = 30; checkProgramParts();
    }

    if (strategy != "defence" && strategy != "winner step" && blue.length == 1 && cross.includes(red[0]) == true
        && previousStrategy[previousStrategy.length - 1] == "winner-from-the-middle") {
        chance = Math.ceil(Math.random() * 6);
        if (chance == 1) { requiredPlace = round[(round.indexOf(red[0]) + 1) % 8] }
        if (chance == 2) { requiredPlace = round[(round.indexOf(red[0]) + 2) % 8] }
        if (chance == 3) { requiredPlace = round[(round.indexOf(red[0]) + 3) % 8] }
        if (chance == 4) { requiredPlace = round[(round.indexOf(red[0]) + 5) % 8] }
        if (chance == 5) { requiredPlace = round[(round.indexOf(red[0]) + 6) % 8] }
        if (chance == 6) { requiredPlace = round[(round.indexOf(red[0]) + 7) % 8] }
        available = true;
        strategy = "winner-from-the-middle"
        if (available == true) { av = 31; checkAv() };
        pp = 31; checkProgramParts();
    }

    if (strategy != "defence" && strategy != "winner step" && blue.length == 2 && previousStrategy[previousStrategy.length - 1] == "winner-from-the-middle") {
        chance = Math.ceil(Math.random() * 2);
        if (corner.includes(red[red.length - 1]) == true) {
            if (chance == 1) {
                requiredPlace = round[(round.indexOf(red[0]) + 2) % 8];
                nextPlace = round[(round.indexOf(red[0]) + 3) % 8]
            }
            if (chance == 2) { requiredPlace = round[(round.indexOf(red[0]) + 6) % 8] }
        }
        if (available == true) { av = 33; checkAv() };
        pp = 33; checkProgramParts();
    }

    if (blue.length == 2 && strategy == "winner-from-the-middle") {
        requiredPlace = nextPlace;
        available = true;
        av = 40; checkAv();
        pp = 40; checkProgramParts()
    }

    if (red.length == 1 && red[0] == 5) {
        requiredPlace = -100;
        while (freePlace.includes(requiredPlace) == false) {
            chance = Math.floor(Math.random() * 4);
            requiredPlace = corner[chance];
        }

        av = 34; checkAv();
        pp = 34; checkProgramParts();
    }

    if (blue.length == 0 && red.length == 1 && red[0] != 5) {
        requiredPlace = 5;
        av = 36; checkAv();
        pp = 36; checkProgramParts();
        strategy = "defence-from-winner-combination";
    }

    if (blue.length == 1 && red.length == 2 && corner.includes(red[0]) == true &&
        round[(round.indexOf(red[0]) + 4) % 8] == red[1]) {
        chance = Math.floor(Math.random() * 4);
        requiredPlace = cross[chance];
        av = 37; checkAv();
        pp = 37; checkProgramParts();
        strategy = "defence-from-big-triangle";
    }
}

check = function () {
    for (let k = 0; k < strategiesArray.length; k++) {
        if (strategiesArray[k][strategiesArray[k].length - 1] == "undecided" &&
            strategiesArray[k].includes(39) == true) {
        }
    }
}

allPP = Array();
checkProgramParts = function () {
    if (available == false && notUsedProgramParts[pp] != "a" && pp != "nothing") { notUsedProgramParts[pp] = "u" };
    if (available == true && pp != -10) { notUsedProgramParts[pp] = "a" };
    howManyPP[pp] = howManyPP[pp] + 1;
    allPP[s] = allPP[s] + pp + "-";
};

checkAVsteps = Array();
checkAv = function () {
    howManyAV[av] = howManyAV[av] + 1;
    avArray[avArray.length] = av;
    avArrayStep[avArrayStep.length] = step;
    if (av == 0) { checkAVsteps[checkAVsteps.length] = s; }
};

noStrategy = function () {
    document.querySelector("#infoAboutNoStrategy").style.display = "initial";
};

gameForTwoPeople = function (number) {
    if (document.querySelector("#blueStarts").checked == true && coins.length == 0) { step = 1; stepShowsColor = 1; }
    if (document.querySelector("#redStarts").checked == true && coins.length == 0) { step = 0; stepShowsColor = 2; }
    if (thereIsWinner != "no") {
        if (thereIsWinner == "red") { alert("Győzött a piros."); }
        else { alert("Győzött a kék.") }
    }
    else {
        stepOnTheBoard(number);
    };
};

function engineContinues() {
    learntStrategies3 = simulatedStrategiesArray3.slice(0);
    learntStrategiesKeyPlaces3 = simulatedKeys3.slice(0);
    if (document.querySelector("#twoPeople").checked == true) {
        alert("Nem választotta ki, hogy melyik gép játsszon.")
    }
    else {
        //if (coins[coins.length - 2] == "red") { IPlayWith = "blue" }
        //if (coins[coins.length - 2] == "blue") { IPlayWith = "red" }
        //if (coins[coins.length - 2] == "red") {




        if (document.querySelector("#withComputer").checked == true) {
            if (thereIsWinner == "no") {
                wasChanged = false;
                if (coins[coins.length - 2] == "blue") {
                    blueWas = Array(); redWas = Array();
                    blueWas = blue.slice(0);
                    redWas = red.slice(0);
                    blue = redWas.slice(0);
                    red = blueWas.slice(0);
                    wasChanged = true;
                }
                nowTheComputerStep();
                if (wasChanged == true) {
                    blue = blueWas.slice(0);
                    red = redWas.slice(0);
                }
                stepOnTheBoard(number);
                isWinner();
            }
        }
        if (document.querySelector("#withSimulatedLearntStrategy").checked == true) {
            if (thereIsWinner == "no") {
                gameByLearntMemory();
                learntStrategies3 = simulatedStrategiesArray3.slice(0);
                stepOnTheBoard(number);
                isWinner();
            }
        }
        if (document.querySelector("#withStoredLearningMemory").checked == true) {
            if (document.querySelector("#storedGamesMemoria1").checked == true) {
                memoryFromLoad1 = document.querySelector("#forLoadMyValue1").innerHTML
                learningMemory = memoryFromLoad1.game[0].game;
            }
            if (document.querySelector("#storedGamesMemoria2").checked == true) {
                memoryFromLoad2 = document.querySelector("#forLoadMyValue2").innerHTML
                learningMemory = memoryFromLoad2.game[0].game;
            }
            gameWithLearningMemory();
            stepOnTheBoard(number);
            isWinner();
        }



        //console.log("!!!!!!!!!",number,IPlayWith)
        //IPlayWith = "noData";
        //}
        //else {alert("Az utolsó lépés piros kell hogy legyen.")}

    }



}

stepOnTheBoard = function (number) {

    if (document.querySelector(`#millTbody td[name='${number}']`).innerHTML == "") { stepShowsColor = stepShowsColor + 1; step = step + 1; };
    if (nowLearning == true) {
        if (firstStep == "computer" && coins.length == 0) { step = 1; stepShowsColor = 1; }
        if (firstStep == "gamer" && coins.length == 0) { step = 0; stepShowsColor = 2; }
    }



    //if (firstStep == "computer" && coins.length == 0) { step = 1; stepShowsColor = 1; }
    //if (firstStep == "gamer" && coins.length == 0) { step = 0; stepShowsColor = 2; }

    if (computerStep == true) { previousStrategy[previousStrategy.length] = strategy; }
    if (stepShowsColor % 2 == 1 && document.querySelector(`#millTbody td[name='${number}']`).innerHTML == "") {
        document.querySelector(`#millTbody td[name='${number}']`).innerHTML = "&#128308"; red[red.length] = number; colors[number] = "red"; nowStep = "red";
    }
    if (stepShowsColor % 2 == 0 && document.querySelector(`#millTbody td[name='${number}']`).innerHTML == "") {
        document.querySelector(`#millTbody td[name='${number}']`).innerHTML = "&#128309"; blue[blue.length] = number; colors[number] = "blue"; nowStep = "blue";
        makeLightYellowTheActualStep(number, exNumber); exNumber = number
    }

    //innen
    //ez itt a gányolás
    //valami miatt (?) nowLearning= true értéknél, ha a red kezd, akkor: 
    //red-blue-blue-red-blue-red-stb lépéssor lesz
    if (coins[coins.length - 2] == "blue" && nowStep == "blue") {
        nowStep = "red";
        colors[number] = "red"; blue.pop(); red.push(number); stepShowsColor = stepShowsColor + 1; step = step + 1
    }
    //idáig



    coins[coins.length] = nowStep;
    coins[coins.length] = number;



    temporaryArray = Array();
    for (let i = 0; i < freePlace.length; i++) {
        if (freePlace[i] != number) { temporaryArray[temporaryArray.length] = freePlace[i] }
    };
    freePlace = Array();
    freePlace = temporaryArray.slice(0);
    temporaryArray = Array();
    if (document.querySelector("#withComputer").checked == true) {
        if (strategy == "nothing") { document.querySelector("#strategyOfEngine").innerHTML = " - " }
        else {
            document.querySelector("#strategyOfEngine").innerHTML = strategy;
            //if (isWinner != "no"){ strategyOfEngineHistory[strategyOfEngineHistory.length] = strategy }
        }
        myStrategy[myStrategy.length] = strategy;
    }
    colorArrayMe = blue.slice(0);
    colorArrayRival = red.slice(0);
    //showRightSideInfo();
};

isWinner = function () {
    if (thereIsWinner == "no") {
        for (let i = 0; i < red.length; i++) {
            for (let j = i + 1; j < red.length; j++) {
                for (let k = j + 1; k < red.length; k++) {
                    if (red[i] + red[j] + red[k] == 15) {
                        thereIsWinner = "red";
                    }
                }
            }
        };
    };
    if (thereIsWinner == "no") {
        for (let i = 0; i < blue.length; i++) {
            for (let j = i + 1; j < blue.length; j++) {
                for (let k = j + 1; k < blue.length; k++) {
                    if (blue[i] + blue[j] + blue[k] == 15) {
                        thereIsWinner = "blue";
                    }
                }
            }
        }
    }
    if (thereIsWinner == "no" && freePlace.length == 0) { thereIsWinner = "undecided" };
    if (thereIsWinner == "no") { document.querySelector("#endOfGame").innerHTML = "a játék folyamatban"; }
    if (thereIsWinner == "red") { document.querySelector("#endOfGame").innerHTML = "nyert a piros"; whoWon.red = whoWon.red + 1; }
    if (thereIsWinner == "blue") { document.querySelector("#endOfGame").innerHTML = "nyert a kék"; whoWon.blue = whoWon.blue + 1 }
    if (thereIsWinner == "undecided") { document.querySelector("#endOfGame").innerHTML = "döntetlen"; whoWon.undecided = whoWon.undecided + 1 }

    allGames = whoWon.red + whoWon.blue + whoWon.undecided;
    percentage = Math.ceil(100 * whoWon.undecided / allGames);
    if (thereIsWinner != "no") {
        document.querySelector("#scoreRed").innerHTML = whoWon.red;
        document.querySelector("#scoreBlue").innerHTML = whoWon.blue;
        document.querySelector("#scoreUndecided").innerHTML = `${whoWon.undecided} (${percentage} %)`;
    }

    if (thereIsWinner == "red") {
        coins[coins.length] = "RED"
    }
    if (thereIsWinner == "blue") {
        coins[coins.length] = "BLUE"
    }
    if (thereIsWinner == "undecided") {
        coins[coins.length] = "UNDECIDED"
    }
    if (thereIsWinner != "no") { myStrategyArray[myStrategyArray.length] = myStrategy };
    if (document.querySelector("#withLearningMemory").checked == true && thereIsWinner != "no") {
        strategyOfEngineHistory[strategyOfEngineHistory.length] = "the-last-step"
    }
    if (thereIsWinner != "no" && document.querySelector("#withSimulatedAI").checked == true && nowLearning == true) {
        if (firstStep == "computer") { step = 1; stepShowsColor = 1; }
        if (firstStep == "gamer") { step = 0; stepShowsColor = 2; }
    }
    if (thereIsWinner != "no" && document.querySelector("#withLearningMemory").checked == true) {
        if (firstStep == "computer") { step = 1; stepShowsColor = 1; }
        if (firstStep == "gamer") { step = 0; stepShowsColor = 2; }
    }

}

deleteScore = function () {
    document.querySelector("#scoreRed").innerHTML = " - ";
    document.querySelector("#scoreBlue").innerHTML = " - ";
    document.querySelector("#scoreUndecided").innerHTML = " - ";
    whoWon.red = 0;
    whoWon.blue = 0;
    whoWon.undecided = 0;
}

showLineStep = 0;
showLine = function () {
    showLineStep = showLineStep + 1;
    if (showLineStep % 2 == 0) {
        for (let i = 0; i < line2.length; i++) {
            document.querySelector(`#littleTbody tr td[name='${line2[i]}']`).innerHTML = "";
        }
        for (let i = 0; i < line1.length; i++) {
            document.querySelector(`#littleTbody tr td[name='${line1[i]}']`).innerHTML = "x";
        }
        //document.querySelector(`#littleTbody tr td[name='${5}']`).innerHTML = "x"
    };
    if (showLineStep % 2 == 1) {
        for (let i = 0; i < line1.length; i++) {
            document.querySelector(`#littleTbody tr td[name='${line1[i]}']`).innerHTML = "";
        }
        for (let i = 0; i < line2.length; i++) {
            document.querySelector(`#littleTbody tr td[name='${line2[i]}']`).innerHTML = "x";
        }
    };
};

showBlinkText = 0;
area = document.querySelector("#divForBr");

blinkText_ = 0;
blinkText = function () {

    showBlinkText = showBlinkText + 1;
    if (showBlinkText % 2 == 1) {
        while (document.querySelector("#divForBr").children.length > 0) {
            newBr_ = document.querySelector("#newBr");
            area.removeChild(newBr_);
        };
        document.querySelector("#computerWon").innerHTML = "A gép nyert!";
    }
    if (showBlinkText % 2 == 0) {
        newBr = document.createElement("br");
        newBr.id = "newBr";
        if (document.querySelector("#divForBr").children.length == 0) {
            area.appendChild(newBr)
        };
        document.querySelector("#computerWon").innerHTML = "";
    }
}

blinkTextFunction = function () {
    document.querySelector("#infoAboutNoStrategy").style.display = "none";
    document.querySelector("#infoAboutAvoidStrategy").style.display = "none";
    document.querySelector("#infoAboutComputerWins").style.display = "none";
    myArray = Array();
    myArray[0] = line; myArray[1] = line1; myArray[2] = line2;
    computerWonArray[step] = myArray;
    blinkingMemory[step] = "on"

    winnerStrategy = strategy;
    whenBlinkingStarts = step;
    document.querySelector("#infoBox").style.visibility = "visible";
    if (strategy != "winner step") { document.querySelector("#theWinnerStrategy").innerHTML = winnerStrategy; }
    showBlinkTextFunction = setInterval(blinkText, 300);
    for (let i = 0; i < 9; i++) {
        document.querySelectorAll("#littleTbody tr td")[i].innerHTML = "";
    };
    blinkText_ = 1;
};

showTheTable = function () {
    if (showTableIndex == 1) { clearInterval(showTable); }

    clearInterval(showBlinkTextFunction);
    if (document.querySelector("#divForBr").childElementCount == 1) {
        area = document.querySelector("#divForBr");
        sector = document.querySelector("#newBr");
        area.removeChild(sector);

    };
    document.querySelector("#computerWon").innerHTML = "A gép nyert!";
    for (let i = 0; i < line.length; i++) {
        document.querySelector(`#littleTbody tr td[name='${line[i]}']`).setAttribute("style", "background-color:#b1b100");
    }
    showTable = setInterval(showLine, 1000);
    showTableIndex = 1;
};

stepBack = function () {
    previousStrategy.pop();
    available = false;
    if (red.length == 0 && blue.length == 0) { freePlace = [1, 2, 3, 4, 5, 6, 7, 8, 9] }
    if (red.length > 0 && freePlace.length < 8) {
        freePlace.push(red[red.length - 1]);
        colors[red[red.length - 1]] = "empty";
    }
    if (blue.length > 0 && freePlace.length < 8) {
        freePlace.push(blue[blue.length - 1]);
        colors[blue[blue.length - 1]] = "empty";
    }
    index = avArrayStep[avArrayStep.length - 1];
    if (avArrayStep.length > 0 && avArray.length > 1) {
        while (avArrayStep[avArrayStep.length - 1] == index) {
            avArray.pop();
            avArrayStep.pop();
        }
    };
    if (coins.length >= 3) {
        if (coins[coins.length - 1] == "BLUE" || coins[coins.length - 1] == "RED" ||
            coins[coins.length - 1] == "UNDECIDED") { coins.pop() }
        coins.pop(); coins.pop(); coins.pop(); coins.pop();
        red.pop(); blue.pop(); step = step - 2;
        strategyArray.pop(); strategyArray.pop();
    };
    for (let i = 0; i < 9; i++) {
        document.querySelectorAll("#millTbody tr td")[i].style["background-color"] = "#dbdbdb";
        document.querySelectorAll("#millTbody tr td")[i].innerHTML = "";
    };
    for (let i = 0; i < red.length; i++) {
        document.querySelector(`#millTbody tr td[name='${red[i]}']`).innerHTML = "&#128308";
    };
    for (let i = 0; i < blue.length; i++) {
        document.querySelector(`#millTbody tr td[name='${blue[i]}']`).innerHTML = "&#128309";
    };
    blinkingMemory.pop(); blinkingMemory.pop();
    if (blinkingMemory[step - 1] != "on") {
        clearingLittleTable()
    };
    if (strategyArray[step] != "nothing") { document.querySelector("#strategyOfEngine").innerHTML = strategyArray[step - 1]; }
    else { document.querySelector("#strategyOfEngine").innerHTML = " - " };
    strategy = strategyArray[step - 1];
    if (strategy != "winner step") { winnerStrategy = strategy; };
    document.querySelector("#theWinnerStrategy").innerHTML = winnerStrategy;
    if (thereIsWinner == "blue") {
        thereIsWinner = "no";
        whoWon.blue = whoWon.blue - 1;
        document.querySelector("#scoreBlue").innerHTML = whoWon.blue;
        document.querySelector("#endOfGame").innerHTML = "a játék folyamatban";
    };
    if (thereIsWinner == "red") {
        thereIsWinner = "no";
        whoWon.red = whoWon.red - 1;
        document.querySelector("#scoreRed").innerHTML = whoWon.red;
        document.querySelector("#endOfGame").innerHTML = "a játék folyamatban";
    };
    if (thereIsWinner == "undecided") {
        thereIsWinner = "no";
        whoWon.undecided = whoWon.undecided - 1;
        document.querySelector("#scoreUndecided").innerHTML = whoWon.undecided;
        document.querySelector("#endOfGame").innerHTML = "a játék folyamatban";
    };
    document.querySelector("#infoAboutNoStrategy").style.display = "none";
    document.querySelector("#infoAboutAvoidStrategy").style.display = "none";
    showBlinkText = 1;
    //if (showTableIndex == 1) { clearInterval(showTable); }
    whatWeStepArray.pop();
    if (whatWeStepArray.length > 0) {
        document.querySelector("#stepOfEngine").innerHTML = whatWeStepArray[whatWeStepArray.length - 1]
    }
    else { document.querySelector("#stepOfEngine").innerHTML = " - " }
    //showRightSideInfo();
    stepOfEngineArray.pop();
    //document.querySelector("#stepOfEngine").innerHTML = stepOfEngineArray[stepOfEngineArray.length - 1];
    if (stepOfEngineArray.length > 0) {
        document.querySelector("#showButton").style["display"] = "initial";
        myStoredGame = myStoredGameHistory[myStoredGameHistory.length - 1];
    }
    strategyOfEngineHistory.pop();
    if (strategyOfEngineHistory.length > 0) {
        document.querySelector("#strategyOfEngine").innerHTML = strategyOfEngineHistory[strategyOfEngineHistory.length - 1]
    }
    else { document.querySelector("#strategyOfEngine").innerHTML = " - " }
};

noNeedFunctionForArray = function (myArray) {
    noNeed = Array();
    myArray2 = Array();
    for (let i = 0; i < myArray.length - 1; i++) {
        for (let j = i + 1; j < myArray.length; j++) {
            if (myArray[i] == myArray[j]) {
                noNeed[noNeed.length] = j;
            }
        }
    }
    for (let i = 0; i < myArray.length; i++) {
        if (noNeed.includes(i) == false) {
            myArray2[myArray2.length] = myArray[i];
        }
    }
    return myArray2;
}

noNeedFunctionForArrayOfArrays = function (myArray) {
    noNeed = Array();
    myArray2 = Array();
    for (let i = 0; i < myArray.length - 1; i++) {
        for (let j = i + 1; j < myArray.length; j++) {
            index = 0;
            if (myArray[i].length == myArray[j].length) {
                for (let k = 0; k < myArray[i].length; k++) {
                    if (myArray[i][k] == myArray[j][k]) {
                        index = index + 1
                    }
                    if (index == myArray[i].length) {
                        noNeed[noNeed.length] = j;
                    }
                }
            }


        }
    }
    for (let i = 0; i < myArray.length; i++) {
        if (noNeed.includes(i) == false) {
            myArray2[myArray2.length] = myArray[i];
        }
    }
    return myArray2;
}

coinsInfo = Array();
showRightSideInfo = function () {
    coinsInfo = Array();
    for (let i = 0; i < coins.length; i++) {
        if (numbers.includes(coins[i]) == true) {
            coinsInfo[coinsInfo.length] = coins[i];
        }
    }
    document.querySelector("#coinsInfo").innerHTML = coinsInfo;
    document.querySelector("#blueInfo").innerHTML = blue;
    document.querySelector("#redInfo").innerHTML = red;
    document.querySelector("#freePlaceInfo").innerHTML = freePlace;

    noNeedFunctionForArray(strategicalSteps);
    myArray2.sort();
    if (strategicalSteps.length > 0) { document.querySelector("#egy").innerHTML = myArray2 }
    noNeedFunctionForArray(strategicalStepsForStart);
    myArray2.sort();
    if (strategicalStepsForStart.length > 0) { document.querySelector("#kettő").innerHTML = myArray2 }
    noNeedFunctionForArray(strategicalStepsForDefence5);
    myArray2.sort();
    if (strategicalStepsForDefence5.length > 0) { document.querySelector("#három").innerHTML = myArray2 }
    noNeedFunctionForArray(everyArrayHasIt4Defence);
    myArray2.sort();
    if (everyArrayHasIt4Defence.length > 0) { document.querySelector("#négy").innerHTML = myArray2 }
    noNeedFunctionForArray(almostEveryArrayHasIt4Defence);
    myArray2.sort();
    if (almostEveryArrayHasIt4Defence.length > 0) { document.querySelector("#öt").innerHTML = myArray2 }
    noNeedFunctionForArray(everyArrayHasIt4Attack);
    myArray2.sort();
    if (everyArrayHasIt4Attack.length > 0) { document.querySelector("#hat").innerHTML = myArray2 }
    noNeedFunctionForArray(almostEveryArrayHasIt4Attack);
    myArray2.sort();
    if (almostEveryArrayHasIt4Attack.length > 0) { document.querySelector("#hét").innerHTML = myArray2 }
    noNeedFunctionForArray(strategicalStepsWithMaxOccurrance);
    myArray2.sort();
    if (strategicalStepsWithMaxOccurrance.length > 0) { document.querySelector("#nyolc").innerHTML = myArray2 }
    noNeedFunctionForArray(firstDefenceStep);
    myArray2.sort();
    if (firstDefenceStep.length > 0) { document.querySelector("#kilenc").innerHTML = myArray2 }
    noNeedFunctionForArray(myImportantDefenceStep3);
    myArray2.sort();
    if (myImportantDefenceStep3.length > 0) { document.querySelector("#tíz").innerHTML = myArray2 }
    noNeedFunctionForArray(forbiddenPlacesForcesToStepHere);
    myArray2.sort();
    if (forbiddenPlacesForcesToStepHere.length > 0) { document.querySelector("#tizenegy").innerHTML = myArray2 }
    if (pleaseNotThis > 0 && pleaseNotThis < 10) { document.querySelector("#tizenkettő").innerHTML = ` ${pleaseNotThis}` }
    thisWasStrategicalSteps = Array();
    noNeedFunctionForArray(strategicalSteps);
    myArray2.sort();
    // if (myArray2.length > 0) { document.querySelector("#attackStrategiesFilteredInfo").innerHTML = myArray2; }
    //if (myArray2.length > 0) { document.querySelector("#tízenhárom").innerHTML = `filteredAttackStrategies: ${myArray2}` }

    //document.querySelector("#engineStepInfo").innerHTML = number;

    for (let i = 1; i < 10; i++) {
        document.querySelector(`#littleTbody8 td[name='${i}']`).style["background-color"] = "#dbdbdb";

    }
    //document.querySelector(`#littleTbody8 td[name='${number}']`).style["background-color"] = "rgb(238, 220, 130)";
}

buildingTable = function () {
    area1 = document.querySelector("#numberOfProgramParts");
    area2 = document.querySelector("#resultsOneOfProgramParts");
    area3 = document.querySelector("#resultsTwoOfProgramParts");
    area4 = document.querySelector("#redWonId");
    area5 = document.querySelector("#blueWonId");
    area6 = document.querySelector("#undecidedId");


    for (let i = 0; i < programParts; i++) {
        newTd = document.createElement("td");
        area1.appendChild(newTd);
        newTd.innerHTML = i;
        newTd = document.createElement("td");
        area2.appendChild(newTd);
        newTd.setAttribute("name", i);
        newTd.innerHTML = " - ";
        newTd = document.createElement("td");
        area3.appendChild(newTd);
        newTd.setAttribute("name", i);
        newTd.innerHTML = " - ";
        newTd = document.createElement("td");
        area4.appendChild(newTd);
        newTd.setAttribute("name", i);
        newTd.innerHTML = " - ";
        newTd = document.createElement("td");
        area5.appendChild(newTd);
        newTd.setAttribute("name", i);
        newTd.innerHTML = " - ";
        newTd = document.createElement("td");
        area6.appendChild(newTd);
        newTd.setAttribute("name", i);
        newTd.innerHTML = " - ";
    }
}
buildingTable();

starting();
whoStart();
gameNowEmpty();

simulatedStrategiesArray = Array();
simulatedKeys = Array();
simulatedStrategiesArray = [[2, 4, 6], [2, 7, 5], [8, 5, 7], [4, 5, 2], [6, 3, 8], [4, 3, 6], [1, 9, 2], [9, 2, 7], [9, 5, 7]];
simulatedKeys = [[5, 7, 9], [6, 8, 3], [2, 3], [6, 8, 9], [1, 4], [5, 8], [4, 5], [4, 6], [1, 3]];
simulatedStrategiesArray2 = Array();
simulatedStrategiesArray3 = Array();

makeAllVariationFunction = function (simulatedStrategiesArray, simulatedKeys) {
    simulatedStrategiesArray2 = Array();
    simulatedStrategiesArray3 = Array();
    simulatedKeys2 = Array();
    simulatedKeys3 = Array();
    for (let i = 0; i < simulatedStrategiesArray.length; i++) {
        if (simulatedKeys[i].length == 3) {
            for (let m = 0; m < 3; m++) {
                for (let n = 0; n < 3; n++) {
                    for (let s = 0; s < 3; s++) {
                        if (n != m && n != s && m != s) {
                            myArray = Array();
                            myArray[n] = simulatedStrategiesArray[i][0];
                            myArray[m] = simulatedStrategiesArray[i][1];
                            myArray[s] = simulatedStrategiesArray[i][2];
                            simulatedStrategiesArray2[simulatedStrategiesArray2.length] = myArray.slice(0);
                            simulatedKeys2[simulatedKeys2.length] = simulatedKeys[i].slice(0);
                        }
                    }
                }
            }
        }
        if (simulatedKeys[i].length == 2) {
            for (let j = 0; j < 2; j++) {
                for (let m = j + 1; m < 3; m++) {
                    indexDS = 0;
                    for (let s = 1; s < 10; s++) {
                        if (simulatedStrategiesArray[i][j] != s &&
                            simulatedStrategiesArray[i][m] != s &&
                            simulatedStrategiesArray[i][j] + simulatedStrategiesArray[i][m] + s != 15) {
                            indexDS = indexDS + 1
                        }
                    }
                    if (indexDS == 7) {
                        centralElement = simulatedStrategiesArray[i][3 - j - m]
                        simulatedStrategiesArray2[simulatedStrategiesArray2.length] =
                            [simulatedStrategiesArray[i][j],
                            simulatedStrategiesArray[i][m],
                                centralElement];
                        simulatedStrategiesArray2[simulatedStrategiesArray2.length] =
                            [simulatedStrategiesArray[i][m],
                            simulatedStrategiesArray[i][j],
                                centralElement];
                        simulatedKeys2[simulatedKeys2.length] =
                            simulatedKeys[i];
                        simulatedKeys2[simulatedKeys2.length] =
                            simulatedKeys[i];
                    }

                }
            }
        }

    }
    return simulatedStrategiesArray2, simulatedKeys2

}

makeAllVariationFunction(simulatedStrategiesArray, simulatedKeys)

makeSimulatedStrategies = function () {

    makeAllVariationFunction(simulatedStrategiesArray, simulatedKeys)
    simulatedStrategiesArray3 = simulatedStrategiesArray2.slice(0)
    simulatedKeys3 = simulatedKeys2.slice(0);

    /*simulatedStrategiesArray2 = Array();
    simulatedStrategiesArray3 = Array();
    simulatedKeys2 = Array();
    simulatedKeys3 = Array();
    for (let i = 0; i < simulatedStrategiesArray.length; i++) {
        for (let m = 0; m < 3; m++) {
            for (let n = 0; n < 3; n++) {
                for (let s = 0; s < 3; s++) {
                    if (n != m && n != s && m != s) {
                        myArray = Array();
                        myArray[n] = simulatedStrategiesArray[i][0];
                        myArray[m] = simulatedStrategiesArray[i][1];
                        myArray[s] = simulatedStrategiesArray[i][2];
                        simulatedStrategiesArray2[simulatedStrategiesArray2.length] = myArray.slice(0);
                        simulatedKeys2[simulatedKeys2.length] = simulatedKeys[i].slice(0);
                    }
                }
            }
        }
    }*/



    noNeed = Array();

    /*myArray = simulatedStrategiesArray2.slice(0);
    noNeed = Array();
    for (let i = 0; i < simulatedStrategiesArray2.length; i++) {
        myOriginalIndex = i;
        originalArray = simulatedStrategiesArray2[i].slice(0);
        originalArray2 = Array;
        copy = Array(); myCopy = Array();
        myCopy = simulatedStrategiesArray2[i].slice(0);
 
        noNeedFunctionForPatterns2(myArray, myCopy, myOriginalIndex)
        for (let j = 0; j < 4; j++) {
            if (j > 0) {
                rotation90DegreeForLearnt(originalArray);
                myCopy = copy.slice(0);
                originalArray = copy.slice(0);
                noNeedFunctionForPatterns3(myArray, myCopy, myOriginalIndex)
            }
            verticalReflectionForLearnt(originalArray); myCopy = copy.slice(0);
            noNeedFunctionForPatterns3(myArray, myCopy, myOriginalIndex); originalArray2 = copy.slice(0);
            centralReflectionForLearnt(originalArray2); myCopy = copy.slice(0);
            noNeedFunctionForPatterns3(myArray, myCopy, myOriginalIndex)
            horizontalReflectionForLearnt(originalArray); myCopy = copy.slice(0); originalArray2 = copy.slice(0);
            noNeedFunctionForPatterns3(myArray, myCopy, myOriginalIndex)
            centralReflectionForLearnt(originalArray2); myCopy = copy.slice(0);
            noNeedFunctionForPatterns3(myArray, myCopy, myOriginalIndex)
            centralReflectionForLearnt(originalArray); myCopy = copy.slice(0);
            noNeedFunctionForPatterns3(myArray, myCopy, myOriginalIndex)
        }
    };*/
    //cleaningThesimulatedStrategiesArray();
    makeNewPatternsArray6();
    //patternsArray6 = newPatternsArray6.slice(0);
    gameNumberC = 0;
    //showBasicPatterns3();
}

noNeedFunctionForPatterns3 = function (myArray, myCopy, myOriginalIndex) {
    for (let g = myOriginalIndex + 1; g < myArray.length; g++) {
        index = 0;
        for (let d = 0; d < 3; d++) {
            if (myArray[g][d] == myCopy[d] && g != myOriginalIndex) {
                index = index + 1;
            }
        }
        if (index == 3 && g != myOriginalIndex) {
            noNeed[noNeed.length] = g;
        }
    }
}

cleaningThesimulatedStrategiesArray = function () {
    for (let i = 0; i < simulatedStrategiesArray2.length; i++) {
        if (noNeed.includes(i) == false) {
            simulatedStrategiesArray3[simulatedStrategiesArray3.length] = simulatedStrategiesArray2[i];
            simulatedKeys3[simulatedKeys3.length] = simulatedKeys2[i];
        }
    }
}

makeNewPatternsArray6 = function () {
    newPatternsArray6 = Array();
    for (let i = 0; i < simulatedStrategiesArray3.length; i++) {
        myArray = ["nothing", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"];
        for (let j = 0; j < simulatedStrategiesArray3[i].length; j++) {
            myArray[simulatedStrategiesArray3[i][j]] = "blue";
        }
        newPatternsArray6[newPatternsArray6.length] = myArray;
    }

}

only3 = false;
showBasicPatterns3 = function () {
    if (blueWonMemory.length == 0) { patternsArray6 = Array() }
    document.querySelector(".sometimesBlurMain").classList.remove("blur");
    myLength = document.querySelectorAll(".sometimesBlurMain button").length;
    for (let i = 0; i < myLength; i++) {
        document.querySelectorAll(".sometimesBlurMain button")[i].disabled = false;
    }
    myLength = document.querySelectorAll(".sometimesBlurMain input").length;
    for (let i = 0; i < myLength; i++) {
        document.querySelectorAll(".sometimesBlurMain input")[i].disabled = false;
    }
    document.querySelector(".sometimesBlurMain select").disabled = false;
    learntStrategies2 = simulatedStrategiesArray3.slice(0);

    document.querySelector("#all2").innerHTML = patternsArray6.length;
    document.querySelector("#all2").classList.add("lightBlue")
    document.querySelector("#numberOfGame5").innerHTML = `${gameNumberC + 1}. `

    for (let i = 1; i < 10; i++) {
        document.querySelector(`#littleTbody6 td[name='${i}']`).innerHTML = ""
        document.querySelector(`#littleTbody6 td[name='${i}']`).style["background-color"] = "#dbdbdb"
    }
    for (let i = 1; i < 10; i++) {
        document.querySelector(`#littleTbody7 td[name='${i}']`).innerHTML = ""
        document.querySelector(`#littleTbody7 td[name='${i}']`).style["background-color"] = "#dbdbdb"
    }
    if (patternsArray6.length > 0) {
        for (let i = 1; i < patternsArray6[gameNumberC].length; i++) {
            if (patternsArray6[gameNumberC][i] == "blue") { document.querySelector(`#littleTbody6 td[name='${i}']`).innerHTML = "&#128309" }
        }


        for (let i = 0; i < 3; i++) {
            document.querySelector(`#littleTbody7 td[name='${simulatedStrategiesArray3[gameNumberC][i]}']`).innerHTML = [i + 1]
        }
    }
}

patternsArray6 = Array();
learntStrategies3 = Array();
learntStrategiesKeyPlaces3 = Array();
thisWasPatternsArray6 = Array();
thisWasLearntStrategies3 = Array();
thisWasLearntStrategiesKeyPlaces3 = Array()
gameWithSimulatedOrNOt = function () {
    //thisWasPatternsArray6 = patternsArray6.slice(0);
    //thisWasLearntStrategies3 = learntStrategies3.slice(0);
    //thisWasLearntStrategiesKeyPlaces3 = learntStrategiesKeyPlaces3.slice(0);
    if (document.querySelector("#withSimulatedLearntStrategy").checked == true) {
        only3 = true;
        patternsArray6 = newPatternsArray6.slice(0);
        learntStrategies3 = simulatedStrategiesArray3.slice(0);
        learntStrategiesKeyPlaces3 = simulatedKeys3.slice(0);
        thisWasPatternsArray6 = patternsArray6.slice(0);
        thisWasLearntStrategies3 = learntStrategies3.slice(0);
        thisWasLearntStrategiesKeyPlaces3 = learntStrategiesKeyPlaces3.slice(0);

        makeSimulatedStrategies();
    }
    if (document.querySelector("#withSimulatedLearntStrategy").checked == false) {
        only3 = false;
        patternsArray6 = thisWasPatternsArray6.slice(0);
        learntStrategies3 = thisWasLearntStrategies3.slice(0);
        learntStrategiesKeyPlaces3 = thisWasLearntStrategiesKeyPlaces3.slice(0);

        for (let i = 1; i < 10; i++) {
            document.querySelector(`#littleTbody6 td[name='${i}']`).innerHTML = ""
            document.querySelector(`#littleTbody6 td[name='${i}']`).style["background-color"] = "#dbdbdb"
        }
        for (let i = 1; i < 10; i++) {
            document.querySelector(`#littleTbody7 td[name='${i}']`).innerHTML = ""
            document.querySelector(`#littleTbody7 td[name='${i}']`).style["background-color"] = "#dbdbdb"
        }
        document.querySelector("#all2").innerHTML = " - ";
        document.querySelector("#all2").classList.remove("lightBlue")
        document.querySelector("#numberOfGame5").innerHTML = " - "
    }
}

makeSimulatedStrategies();

function whatWeShow() {
    if (document.querySelector("#withStoredLearningMemory").checked == true &&
        wasLearning == false) {
        storedGamesOnclick()
    }
    if (document.querySelector("#withStoredLearningMemory").checked == true &&
        wasLearning == true) {
        prepareGameWithStoredLearningMemory();
    }
    console.log("length", blueWonMemory.length)
    //else {
    myWonMemory = Array();
    if (document.querySelector("#radioBlue").checked == true) { myWonMemory = blueWonMemory.slice(0) }
    if (document.querySelector("#radioRed").checked == true) { myWonMemory = redWonMemory.slice(0) }
    if (document.querySelector("#radioUndecided").checked == true) { myWonMemory = undecidedMemory.slice(0) }
    showGames();
    //}

}

showGames = function () {
    document.querySelector("#gamesInLearningMemory").innerHTML = learningMemory.length;
    document.querySelector("#blueWonNumber").innerHTML = blueWonMemory.length;
    document.querySelector("#redWonNumber").innerHTML = redWonMemory.length;
    document.querySelector("#undecidedNumber").innerHTML = undecidedMemory.length;
    if (document.querySelector("#radioBlue").checked == true) { myWonMemory = blueWonMemory.slice(0) }
    if (document.querySelector("#radioRed").checked == true) { myWonMemory = redWonMemory.slice(0) }
    if (document.querySelector("#radioUndecided").checked == true) { myWonMemory = undecidedMemory.slice(0) }
    document.querySelector("#gameNumberInfo").innerHTML = myWonMemory.length;
    gameNumber5 = 1;
    stepNumber = 1;
    gameNumber6 = 0;
    if (document.querySelector("#withStoredLearningMemory").checked == true &&
    wasLearning == false) {showTheStoredGameSteps();}
    showTheGames();
}

forwardInMemory6 = function () {
    if (myWonMemory.length == 0) {
        alert("Az 'adott szín nyert' játszmatára üres. Válasszon egy másik színt, amennyiben a 'tanulómemóriában eltárolt játékok száma' nem nulla! (Ugyanebben a hasábban feljebb.) Amennyiben nulla, futtassa a 'tanulójáték' programrészt!")
    }
    else {
        dontChance = false;
        if (gameNumber5 < myWonMemory.length - 1) { gameNumber6 = gameNumber6 + 1; dontChance = true; };
        if (gameNumber5 == myWonMemory.length - 1 && dontChance == false) { gameNumber5 = 0 };
        document.querySelector("#numberOfGame6").innerHTML = `${gameNumber6 + 1}.`
        for (let i = 1; i < 10; i++) {
            document.querySelector(`#littleTbody9 td[name='${i}']`).innerHTML = "";
        }
        stepNumber = 1;
        showTheGames();
    }
}

backInMemory6 = function () {
    if (myWonMemory.length == 0) {
        alert("Az 'adott szín nyert' játszmatára üres. Válasszon egy másik színt, amennyiben a 'tanulómemóriában eltárolt játékok száma' nem nulla. (Ugyanebben a hasábban feljebb.)")
    }
    else {
        dontChance = false;
        if (gameNumber6 > 1) { gameNumber6 = gameNumber6 - 1; dontChance = true; };
        if (gameNumber6 == 1 && dontChance == false) { gameNumber5 = myWonMemory.length - 1 };
        document.querySelector("#numberOfGame6").innerHTML = `${gameNumber6}.`
        for (let i = 1; i < 10; i++) {
            document.querySelector(`#littleTbody9 td[name='${i}']`).innerHTML = "";
        }
        stepNumber = 1;
        showTheGames();
    }
}

forwardInTable6 = function () {
    if (myWonMemory.length == 0) {
        alert("Az 'adott szín nyert' játszmatára üres. Válasszon egy másik színt, amennyiben a 'tanulómemóriában eltárolt játékok száma' nem nulla. (Ugyanebben a hasábban feljebb.)")
    }
    else {
        if (stepNumber < myWonMemory[gameNumber6].length - 1) {
            stepNumber = stepNumber + 2;
            showTheGames();
        };
    }
}

backInTable6 = function () {
    if (myWonMemory.length == 0) {
        alert("Az 'adott szín nyert' játszmatára üres. Válasszon egy másik színt, amennyiben a 'tanulómemóriában eltárolt játékok száma' nem nulla. (Ugyanebben a hasábban feljebb.)")
    }
    else {
        if (stepNumber > 2) {
            stepNumber = stepNumber - 2;
            showTheGames();
        };
    }
}

showTheGames = function () {
    document.querySelector("#numberOfGame6_").innerHTML = `${gameNumber6}. `;
    for (let i = 1; i < 10; i++) {
        document.querySelector(`#littleTbody11 td[name='${i}']`).innerHTML = "";
    }
    for (let i = 0; i < stepNumber; i++) {
        if (myWonMemory[gameNumber6][i] == "blue") {
            document.querySelector(`#littleTbody11 td[name='${myWonMemory[gameNumber6][i + 1]}']`).innerHTML = "&#128309"
        }
        if (myWonMemory[gameNumber6][i] == "red") {
            document.querySelector(`#littleTbody11 td[name='${myWonMemory[gameNumber6][i + 1]}']`).innerHTML = "&#128308"
        }
    }
}

infoLink = function () {
    window.open("info.html", "", "width=1200,height=700")
}

learntStrategies3 = simulatedStrategiesArray.slice(0);
learntStrategiesKeyPlaces3 = simulatedKeys.slice(0);
makeAllVariationOfLearntMemory();
showBasicPatterns5();

miez1 = function () {
    document.querySelector("#infoMiEz1").style.display = "initial";
    if (learningMemory.length == 0) { document.querySelector("#ingredientForThreeInOne1").style.display = "initial"; }
    if (learningMemory.length > 0) { document.querySelector("#ingredientForThreeInOne1").style.display = "none"; }
}
closeInfoMiEz1 = function () {
    document.querySelector("#infoMiEz1").style.display = "none";
}

threeInOne1 = function () {
    closeInfoMiEz1();
    myMemory = 1;
    running3In1();
}
miez2 = function () {
    document.querySelector("#infoMiEz2").style.display = "initial";
}
closeInfoMiEz2 = function () {
    document.querySelector("#infoMiEz2").style.display = "none";
}
miez3 = function () {
    document.querySelector("#infoMiEz3").style.display = "initial";
    if (learningMemory.length == 0) { document.querySelector("#ingredientForThreeInOne3").style.display = "initial"; }
    if (learningMemory.length > 0) { document.querySelector("#ingredientForThreeInOne3").style.display = "none"; }
}
closeInfoMiEz3 = function () {
    document.querySelector("#infoMiEz3").style.display = "none";
}

threeInOne3 = function () {
    closeInfoMiEz3();
    myMemory = 2;
    running3In1();
}

document.querySelector("#numberOfStoredStrategies4").innerHTML = simulatedStrategiesArray3.length
document.querySelector("#numberOfStoredStrategies4a").innerHTML = simulatedStrategiesArray3.length

miez4 = function () {
    document.querySelector("#infoMiEz4").style.display = "initial";
}
closeInfoMiEz4 = function () {
    document.querySelector("#infoMiEz4").style.display = "none";
}

firstMakeTripletsToDiscovereStrategiesByLOGIC = function () {
    //az összeset legyártja
    allTripletsByLogic = Array();
    for (let i = 1; i < 8; i++) {
        for (let j = i + 1; j < 9; j++) {
            for (let k = j + 1; k < 10; k++) {
                myArray = [i, j, k];
                allTripletsByLogic[allTripletsByLogic.length] = myArray;
            }
        }
    }
    return allTripletsByLogic
}

firstMakeTripletsToDiscovereStrategiesByRND = function () {
    //csak egyet csinál
    basis = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    number1 = Math.floor(Math.random() * 9);
    myNumber1 = basis.splice(number1, 1);
    number2 = Math.floor(Math.random() * 8);
    myNumber2 = basis.splice(number2, 1);
    number3 = Math.floor(Math.random() * 7);
    myNumber3 = basis.splice(number3, 1)
    myArray = [myNumber1[0], myNumber2[0], myNumber3[0]];
    console.log(myArray)
    return myArray;
}

chosen = [[0, 1], [0, 2], [1, 2]];
littleArray = Array();
cKeys = Array();
keys4DiscoveredStrategies = Array();
choseStrategiesFromTriplets = function (myArray) {
    littleArray = Array();
    cSignal = 0;
    cKeys_ = Array();
    for (let i = 0; i < chosen.length; i++) {
        for (let j = 1; j < 10; j++) {
            if (myArray.includes(j) == false &&
                myArray[chosen[i][0]] + myArray[chosen[i][1]] + j == 15) {
                cKeys_[cKeys_.length] = j;
                cSignal = cSignal + 1;
                if (cSignal == 2) {
                }
            }
        }
    }
    if (cSignal >= 2) {
        littleArray = [myArray[0], myArray[1], myArray[2]];
        littleArray.sort();
        cKeys = cKeys_.slice(0);
    }
    //console.log(littleArray)
    return littleArray, cKeys
}

discoveredStrategiesArray = Array();
discoverStrategiesByRND = function () {
    discoveredStrategiesArray = Array();
    while (discoveredStrategiesArray.length < 100) {

        firstMakeTripletsToDiscovereStrategiesByRND()
        choseStrategiesFromTriplets(myArray)
        if (littleArray.length > 0) {
            discoveredStrategiesArray[discoveredStrategiesArray.length] = littleArray
            keys4DiscoveredStrategies[keys4DiscoveredStrategies.length] = cKeys
        }
    }
    return discoveredStrategiesArray
}

discoverStrategiesByLOGIC = function () {
    discoveredStrategiesArray = Array();
    keys4DiscoveredStrategies = Array()
    firstMakeTripletsToDiscovereStrategiesByLOGIC();
    for (let m = 0; m < allTripletsByLogic.length; m++) {
        myArray = allTripletsByLogic[m]
        choseStrategiesFromTriplets(myArray)
        if (littleArray.length > 0) {
            discoveredStrategiesArray[discoveredStrategiesArray.length] = littleArray;
            keys4DiscoveredStrategies[keys4DiscoveredStrategies.length] = cKeys;
        }
    }
    needDelete = Array();
    for (let i = 0; i < discoveredStrategiesArray.length - 1; i++) {
        deleteFromThis = i;
        dontDeleteThis = i;
        originalArray = discoveredStrategiesArray[i].slice(0);
        for (let j = 0; j < 4; j++) {
            if (j > 0) {
                rotation90DegreeNumbers(originalArray);
                noNeedFunction(deleteFromThis, discoveredStrategiesArray, copy);
                originalArray = copy.slice(0);
            }
            verticalReflectionNumbers(originalArray);
            noNeedFunction(deleteFromThis, discoveredStrategiesArray, copy);
            centralReflectionNumbers(copy);
            noNeedFunction(deleteFromThis, discoveredStrategiesArray, copy);
            horizontalReflectionNumbers(originalArray);
            noNeedFunction(deleteFromThis, discoveredStrategiesArray, copy);
            centralReflectionNumbers(copy);
            noNeedFunction(deleteFromThis, discoveredStrategiesArray, copy);
            centralReflectionNumbers(originalArray);
            noNeedFunction(deleteFromThis, discoveredStrategiesArray, copy);
        }
    }
    discoveredStrategiesArray2 = Array();
    keys4DiscoveredStrategies2 = Array();
    for (let i = 0; i < discoveredStrategiesArray.length; i++) {
        if (needDelete.includes(i) == false) {
            discoveredStrategiesArray2[discoveredStrategiesArray2.length] = discoveredStrategiesArray[i].slice(0);
            keys4DiscoveredStrategies2[keys4DiscoveredStrategies2.length] = keys4DiscoveredStrategies[i].slice(0);
        }
    }
    discoveredStrategiesArray3 = Array();
    keys4DiscoveredStrategies3 = Array();
    basicStrategies = 0

    makeAllVariationFunction(discoveredStrategiesArray2, keys4DiscoveredStrategies2)

    discoveredStrategiesArray3 = simulatedStrategiesArray2.slice(0);
    keys4DiscoveredStrategies3 = simulatedKeys2.slice(0)
    /*variations = [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]]
    for (let i = 0; i < discoveredStrategiesArray2.length; i++) {
        if (keys4DiscoveredStrategies2[i].length == 3) {
            basicStrategies = basicStrategies + 1
            for (let j = 0; j < variations.length; j++) {
                discoveredStrategiesArray3[discoveredStrategiesArray3.length] =
                    [discoveredStrategiesArray2[i][variations[j][0]],
                    discoveredStrategiesArray2[i][variations[j][1]],
                    discoveredStrategiesArray2[i][variations[j][2]]];
 
                keys4DiscoveredStrategies3[keys4DiscoveredStrategies3.length] =
                    keys4DiscoveredStrategies2[i];
                
            }
        }
        if (keys4DiscoveredStrategies2[i].length == 2) {
            for (let j = 0; j < 2; j++) {
                for (let m = j + 1; m < 3; m++) {
                    indexDS = 0;
                    for (let s = 1; s < 10; s++) {
                        if (discoveredStrategiesArray2[i][j] != s &&
                            discoveredStrategiesArray2[i][m] != s &&
                            discoveredStrategiesArray2[i][j] + discoveredStrategiesArray2[i][m] + s != 15) {
                            indexDS = indexDS + 1
                        }
                    }
                    if (indexDS == 6) {
                        centralElement = discoveredStrategiesArray2[i][3 - j - m]
                        discoveredStrategiesArray3[discoveredStrategiesArray3.length] =
                            [discoveredStrategiesArray2[i][j],
                            discoveredStrategiesArray2[i][m],
                                centralElement];
                        discoveredStrategiesArray3[discoveredStrategiesArray3.length] =
                            [discoveredStrategiesArray2[i][m],
                            discoveredStrategiesArray2[i][j],
                                centralElement];
                        keys4DiscoveredStrategies3[keys4DiscoveredStrategies3.length] =
                            keys4DiscoveredStrategies2[i];
                        keys4DiscoveredStrategies3[keys4DiscoveredStrategies3.length] =
                            keys4DiscoveredStrategies2[i];
                    }
 
                }
            }
        }
    }*/

    patternsArray6 = Array();
    for (let i = 0; i < discoveredStrategiesArray3.length; i++) {
        pattern = ["nothing", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"];
        for (let j = 0; j < discoveredStrategiesArray3[i].length; j++) {
            pattern[discoveredStrategiesArray3[i][j]] = "blue";
        }
        patternsArray6[patternsArray6.length] = pattern;
    }
    document.querySelector("#all4").innerHTML = discoveredStrategiesArray3.length;
    document.querySelector("#all4").classList.add("lightBlue")
    document.querySelector("#storedStrategies20").innerHTML = discoveredStrategiesArray3.length;
    learntStrategies3 = discoveredStrategiesArray3.slice(0);
    learntStrategiesKeyPlaces3 = keys4DiscoveredStrategies3.slice(0);
}

rotation90DegreeArray = ["nothing", 7, 4, 1, 8, 5, 2, 9, 6, 3];
rotation90DegreeNumbers = function (originalArray) {
    copy = Array();
    for (let t = 0; t < originalArray.length; t++) {
        copy[t] = rotation90DegreeArray[originalArray[t]]
    };
    copy.sort();
    return copy;
}

verticalReflectionArray = ["nothing", 1, 4, 7, 2, 5, 8, 3, 6, 9];
verticalReflectionNumbers = function (originalArray) {
    copy = Array();
    for (let t = 0; t < originalArray.length; t++) {
        copy[t] = verticalReflectionArray[originalArray[t]]
    }
    copy.sort();
    return copy;
}

horizontalReflectionArray = ["nothing", 9, 6, 3, 8, 5, 2, 7, 4, 1];
horizontalReflectionNumbers = function (originalArray) {
    copy = Array();
    for (let t = 0; t < originalArray.length; t++) {
        copy[t] = horizontalReflectionArray[originalArray[t]]
    }
    copy.sort();
    return copy;
}

centralReflectionArray = ["nothing", 9, 8, 7, 6, 5, 4, 3, 2, 1];
centralReflectionNumbers = function (originalArray) {
    copy = Array();
    for (let t = 0; t < originalArray.length; t++) {
        copy[t] = centralReflectionNumbers[originalArray[t]]
    }
    copy.sort();
    return copy;
}

gameNumberE = 1;
forwardInMemory7 = function () {
    dontChance = false;
    if (gameNumberE < discoveredStrategiesArray3.length - 1) { gameNumberE = gameNumberE + 1; dontChance = true; };
    if (gameNumberE == discoveredStrategiesArray3.length - 1 && dontChance == false) { gameNumberE = 0 };
    showBasicPatterns7();
}

backInMemory7 = function () {
    dontChance = false;
    if (gameNumberE > 0) { gameNumberE = gameNumberE - 1; dontChance = true; };
    if (gameNumberE == 0 && dontChance == false) { gameNumberE = discoveredStrategiesArray3.length - 1 };
    showBasicPatterns7();
}

showBasicPatterns7 = function () {
    for (let i = 1; i < 10; i++) {
        document.querySelector(`#littleTbody12 td[name='${i}']`).innerHTML = ""
        document.querySelector(`#littleTbody12 td[name='${i}']`).style["background-color"] = "#dbdbdb"
    }
    for (let i = 1; i < 10; i++) {
        document.querySelector(`#littleTbody13 td[name='${i}']`).innerHTML = ""
        document.querySelector(`#littleTbody13 td[name='${i}']`).style["background-color"] = "#dbdbdb"
    }

    for (let i = 0; i < 3; i++) {
        document.querySelector(`#littleTbody12 td[name='${discoveredStrategiesArray3[gameNumberE][i]}']`).innerHTML = "&#128309"
    }

    for (let i = 0; i < 3; i++) {
        document.querySelector(`#littleTbody13 td[name='${discoveredStrategiesArray3[gameNumberE][i]}']`).innerHTML = i + 1
    }

    document.querySelector("#numberOfGame7").innerHTML = `${gameNumberE + 1}. `;
    //document.querySelector("#numberOfGame9").innerHTML = `${gameNumberE + 1}. `
    document.querySelector("#all4").innerHTML = discoveredStrategiesArray3.length;
    document.querySelector("#all4").classList.add("lightBlue")

    //gameNumberC = 0;

}

myData = Object();
myData2 = Object();
myFetch = function () {
    fetchInit = {
        method: "GET",
        headers: new Headers(),
        mode: "cors",
        cache: "default"
    }

    fetch("http://localhost:3000/users", fetchInit).then(response => response.json()).then(data => console.log(data[0].name))
}

myFetch2 = function () {
    data = { game: learningMemory }
    fetchInit = {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }

    fetch(`http://localhost:3000/game`, fetchInit)
}

myFetch3 = function () {
    data = { game: learningMemory }
    fetchInit = {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }

    fetch(`http://localhost:3000/game`, fetchInit)
}








