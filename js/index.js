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



programParts = 41;
for (let i = 0; i < programParts; i++) {
    notUsedProgramParts[i] = i;
    howManyPP[i] = 0;
    howManyAV[i] = 0;
}
nowLearning = false;
strategiesArray = Array();

whoStart = function () {
    red = Array();
    blue = Array();
    coins = Array();
    step = 0;
    thereIsWinner = "no";
    allPlace = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    freePlace = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    temporaryArray = Array();
    //nowLearning = false;
    gameNow = Array();
    strategy = "nothing";
    previousStrategy = Array();
    for (let i = 1; i < 10; i++) {
        document.querySelector(`#millTbody tr td[name='${i}']`).innerHTML = "";
        document.querySelector(`#millTbody tr td[name='${i}']`).style["background-color"] = "#dbdbdb"
    };
    document.querySelector("#endOfGame").innerHTML = " - ";
    if (document.querySelector("#computer").checked == true &&
        document.querySelector("#withLearntStrategy").checked == false &&
        //document.querySelector("#withLearningMemory").checked == false && 
        nowLearning == false) {
        stepShowsColor = 1;
        firstStep = "computer"; step = 1;
        nowTheComputerStep();
        //avArray[avArray.length] = av;
        computerStep = true;
        stepOnTheBoard(number);
        computerStep = false;
        isWinner();
    };
    if (document.querySelector("#computer").checked == true &&
        document.querySelector("#withLearntStrategy").checked == true) {
        firstStep = "computer"; step = 1; stepShowsColor = 1;
        console.error("coins", coins)
        gameByLearntMemory(); stepOnTheBoard(number); isWinner();
        console.error("coins", coins)
    }
    if (document.querySelector("#gamer").checked == true) {
        stepShowsColor = 0;
        firstStep = "gamer"; step = 0;
        computerStep = false;
    };
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
    hereNow_ = hereNow;
    bluringOrNot(hereNow_);
}

gameWithNotRandom = function (hereNow) {
    document.querySelector("#labelForProgram").innerHTML = "a program";
    document.querySelector("#labelForProgram").style.color = "black";
    hereNow_ = hereNow;
    bluringOrNot(hereNow_);
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

sometimesBlurSwitchOn();


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
    }
    if (sometimesBlurSwithOffBoolean == false) { sometimesBlurSwitchOn(); }
}

whoIsThePartner = function () {
    if (document.querySelector("#withProgram").checked == true) { partner = "program" };
    if (document.querySelector("#withRandom").checked == true) { partner = "random" };
    //if (document.querySelector("#twoPeople").checked == true) { partner = "nobody" };
    //gameWithRandom();
}
whoIsThePartner();

allRunsUntilNow = 0;
allRuns = 0;
learning = function () {
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
    document.querySelector("#learningGameButton").style.boxShadow = "none"
    nowLearning = true;
    timeStart = new Date();
    limit = document.querySelector("#runningNumber").value;
    limit = parseInt(limit);

    if (document.querySelector("#notIndependentResult").checked == false) {
        allRuns = limit;
        allRunsUntilNow = limit;
        learningMemory = Array();

        whoWon = { red: 0, blue: 0, undecided: 0 };
        howManyAV = Array();
        howManyPP = Array();
        for (let i = 0; i < programParts; i++) {
            notUsedProgramParts[i] = i;
            howManyPP[i] = 0;
            howManyAV[i] = 0;
        }
        strategiesArray = Array();
        //eddig
        allSteps = Array();
        redWonStrategiesArray = Array();

        //learningMemory = Array();
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
        if (s % 10000 == 0) { console.log("s=", s) }
        //avArray = Array();
        learningStepByStep();
        /*if (nowLearning == true && thereIsWinner == "red") {
            redWonStrategiesArray[redWonStrategiesArray] = avArray;
            break;
        };*/
        /*if (nowLearning == true && thereIsWinner == "undecided") {
            console.log("coins:", coins);
            console.log("avArray", avArray);
            break;
        };*/
        allSteps[s] = coins;

        if (document.querySelector("#withRandomEngine").checked == false) {
            avArray[avArray.length] = thereIsWinner;
            strategiesArray[strategiesArray.length] = avArray;
        }

        /* if (avArray.includes(25) == true && thereIsWinner == "undecided") {
             console.log(coins)
             console.log(avArray)
             break;
         }
 
         if (avArray.includes(0) == true && thereIsWinner == "undecided") {
             console.log(coins)
             console.log(avArray)
             break;
         }*/
        if (thereIsWinner == "red") {
            //coins[coins.length] = "RED";
            learningMemoryRedWon[learningMemoryRedWon.length] = coins.slice(0);
        };
        if (thereIsWinner == "blue") {
            //coins[coins.length] = "BLUE";
            learningMemoryBlueWon[learningMemoryBlueWon.length] = coins.slice(0);
        };
        if (thereIsWinner == "undecided") {
            //coins[coins.length] = "UNDECIDED";
            learningMemoryUndecided[learningMemoryUndecided.length] = coins.slice(0);
        };
        learningMemory[learningMemory.length] = coins.slice(0);
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
    nowLearning = false;
};



learningStepByStep = function () {


    starting();
    avArray = Array();
    avArrayStep = Array();
    avArrayStep[0] = "-";

    while (thereIsWinner == "no") {
        if (document.querySelector("#withLearningMemory").checked == true) {
            if (partner == "program") {
                if (firstStep == "computer") {
                    stepShowsColor = 1;
                    nowTheComputerStep();
                    computerStep = true;
                    stepOnTheBoard(number);
                    computerStep = false;
                    isWinner();

                    if (thereIsWinner == "no") {
                        gameWithLearningMemory();
                        stepOnTheBoard(number);
                        isWinner();
                    };
                }
                if (firstStep == "gamer") {
                    stepShowsColors = 2;
                    gameWithLearningMemory();
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
                    stepShowsColor = 1;
                    myNumber = Math.floor(Math.random() * freePlace.length);
                    number = freePlace[myNumber];
                    stepOnTheBoard(number);
                    isWinner();

                    if (thereIsWinner == "no") {
                        gameWithLearningMemory();
                        stepOnTheBoard(number);
                        isWinner();
                    };
                }
                if (firstStep == "gamer") {
                    stepShowsColor = 2;
                    gameWithLearningMemory();
                    stepOnTheBoard(number);
                    isWinner();
                    if (thereIsWinner == "no") {
                        myNumber = Math.floor(Math.random() * freePlace.length);
                        number = freePlace[myNumber];
                        stepOnTheBoard(number);
                        isWinner();
                    };
                }
            }
            if (thereIsWinner != "no") { improveShortMemory() };
        }
        if (document.querySelector("#withComputer").checked == true) {
            if (partner == "random") {
                if (firstStep == "computer") {
                    stepShowsColor = 1;
                    nowTheComputerStep();
                    computerStep = true;
                    stepOnTheBoard(number);
                    computerStep = false;
                    isWinner();

                    if (thereIsWinner == "no") {
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
                    stepShowsColors = 2;
                    defenceOrAttack(myId = checkBoxForCleverRandom2.id);
                    if (number == 0) {
                        myNumber = Math.floor(Math.random() * freePlace.length);
                        number = freePlace[myNumber];
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
        }

        if (document.querySelector("#withRandomEngine").checked == true) {
            stepShowsColor = 1;
            defenceOrAttack(myId = checkBoxForCleverRandom1.id);
            if (number == 0) {
                chance = Math.floor(Math.random() * freePlace.length);
                number = freePlace[chance];
            }
            stepOnTheBoard(number);
            isWinner();
            if (thereIsWinner == "no") {
                defenceOrAttack(myId = checkBoxForCleverRandom2.id)
                if (number == 0) {
                    chance = Math.floor(Math.random() * freePlace.length);
                    number = freePlace[chance];
                }
                stepOnTheBoard(number);
                isWinner();
            }
        };
        if (document.querySelector("#withLearntStrategy").checked == true) {

        }
    };
};

defenceOrAttack = function (myId) {
    number = 0; numberBlue = 0; numberRed = 0
    if (document.querySelector(`#${myId}`).checked == true) {
        for (let i = 0; i < red.length - 1; i++) {
            for (let j = i + 1; j < red.length; j++) {
                place = 15 - red[i] - red[j];
                if (freePlace.includes(place) == true) { numberRed = place }
            }
        }
        for (let i = 0; i < blue.length - 1; i++) {
            for (let j = i + 1; j < blue.length; j++) {
                place = 15 - blue[i] - blue[j];
                if (freePlace.includes(place) == true) { numberBlue = place }
            }
        }
        if (coins[coins.length - 2] == "blue") { number = numberBlue }
        if (coins[coins.length - 2] == "red") { number = numberRed }
        //console.log("ACTIVE", numberBlue, numberRed)
    }
    if (number != 0 && nowLearning == false) { console.log("defenceOrAttack") }
}

check2 = function () {
    for (i = 0; i < learningMemory.length; i++) {
        if (learningMemory[i][learningMemory[i].length - 1] == "RED") {
            console.log("red", i);
        }
    }
}

improveShortMemory = function () {
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
        if (coins[coins.length - 1] == "BLUE") { blueWonMemory[blueWonMemory.length] = coins.slice(0) }
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
cleaningTheMemory = function () {
    if (learningMemory.length == 0) {
        alert("Először futtasson tanulójátékot!");
        document.querySelector("#learningGameButton").style.boxShadow = "5px 10px black"
    }
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
        for (let i = 0; i < learningMemory.length; i++) {
            if (memoryCleaner[i] == "need") { shortMemory[shortMemory.length] = learningMemory[i].slice(0) }
        }
        learningMemory = shortMemory.slice(0);
        blueWonMemory = Array();
        redWonMemory = Array();
        undecidedMemory = Array();
        blueWonBigFilterArray1 = Array();
        for (let i = 0; i < learningMemory.length; i++) {
            if (learningMemory[i][learningMemory[i].length - 1] == "BLUE") {
                blueWonMemory[blueWonMemory.length] = learningMemory[i].slice(0);
                blueWonBigFilterArray1[blueWonBigFilterArray1.length] = i;
            }
            if (learningMemory[i][learningMemory[i].length - 1] == "RED") {
                redWonMemory[redWonMemory.length] = learningMemory[i].slice(0);
            }
            if (learningMemory[i][learningMemory[i].length - 1] == "UNDECIDED") {
                undecidedMemory[undecidedMemory.length] = learningMemory[i].slice(0);
            }
        }

        timeFinish = new Date();
        whereShowTime = "#runTimeForCleaning"
        showTime(whereShowTime);
        document.querySelector("#limitForShowing").innerHTML = allRuns;;
        percentage = Math.floor((shortMemory.length / allRuns) * 100);
        percentage2 = Math.floor((blueWonMemory.length / allRuns) * 100);
        percentage3 = Math.floor((redWonMemory.length / allRuns) * 100);
        percentage4 = Math.floor((undecidedMemory.length / allRuns) * 100);
        document.querySelector("#MemoryLengthForShowing").innerHTML = `${shortMemory.length} (${percentage} %)`;
        document.querySelector("#blueWonForShowing").innerHTML = `${blueWonMemory.length}  (${percentage2} %)`;
        document.querySelector("#redWonForShowing").innerHTML = `${redWonMemory.length}  (${percentage3} %)`;
        document.querySelector("#undecidedForShowing").innerHTML = `${undecidedMemory.length}  (${percentage4} %)`;
    }
    cleaningIsDone = true;
    if (document.querySelector("#autoClean2").checked == true) { cleaningTheMemory2() }
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
        verticalReflection();
        horizontalReflection();
        centralReflection();
        rotation90Degree(); firstCopy = copy.slice();
        originalArray = firstCopy.slice(0);
        verticalReflection();
        horizontalReflection();
        centralReflection();
        rotation90Degree(); firstCopy = copy.slice();
        originalArray = firstCopy.slice(0);
        centralReflection();
        //verticalReflection();
        //horizontalReflection();
        rotation90Degree(); firstCopy.slice(0)
        originalArray = firstCopy.slice(0);
        centralReflection();
        //verticalReflection();
        //horizontalReflection();
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
}

rotation90Degree = function () {
    copy = Array();
    for (let j = 0; j < originalArray.length; j++) {
        if (originalArray[j] == "blue" || originalArray[j] == "red" ||
            originalArray[j] == "BLUE" || originalArray[j] == "RED") { copy[j] = originalArray[j] }
        if (originalArray[j] == 1) { copy[j] = 7 }
        if (originalArray[j] == 2) { copy[j] = 4 }
        if (originalArray[j] == 3) { copy[j] = 1 }
        if (originalArray[j] == 4) { copy[j] = 8 }
        if (originalArray[j] == 5) { copy[j] = 5 }
        if (originalArray[j] == 6) { copy[j] = 2 }
        if (originalArray[j] == 7) { copy[j] = 9 }
        if (originalArray[j] == 8) { copy[j] = 6 }
        if (originalArray[j] == 9) { copy[j] = 3 }
    }
    for (let k = deleteFromThis + 1; k < blueWonMemory.length; k++) {
        //for (let k = 0; k < blueWonMemory.length; k++) {
        index = 0;
        //if (blueWonMemory[k].length == copy.length) {
        if (blueWonMemory[k].length == copy.length && k != dontDeleteThis) {
            for (let m = 0; m < copy.length; m++) {
                if (blueWonMemory[k][m] == copy[m]) {
                    index = index + 1;
                }
            }
        }
        if (index == copy.length) { needDelete[needDelete.length] = k }
    }
    return copy;
};

copy = Array();
verticalReflection = function () {
    for (let j = 0; j < originalArray.length; j++) {
        if (originalArray[j] == "blue" || originalArray[j] == "red" ||
            originalArray[j] == "BLUE" || originalArray[j] == "RED") { copy[j] = originalArray[j] }
        if (originalArray[j] == 1) { copy[j] = 1 }
        if (originalArray[j] == 2) { copy[j] = 4 }
        if (originalArray[j] == 3) { copy[j] = 7 }
        if (originalArray[j] == 4) { copy[j] = 2 }
        if (originalArray[j] == 5) { copy[j] = 5 }
        if (originalArray[j] == 6) { copy[j] = 8 }
        if (originalArray[j] == 7) { copy[j] = 3 }
        if (originalArray[j] == 8) { copy[j] = 6 }
        if (originalArray[j] == 9) { copy[j] = 9 }
    }
    for (let k = deleteFromThis + 1; k < blueWonMemory.length; k++) {
        //for (let k = 0; k < blueWonMemory.length; k++) {
        index = 0;
        //if (blueWonMemory[k].length == copy.length) {
        if (blueWonMemory[k].length == copy.length && k != dontDeleteThis) {
            for (let m = 0; m < copy.length; m++) {
                if (blueWonMemory[k][m] == copy[m]) {
                    index = index + 1;
                }
            }
        }
        if (index == copy.length) { needDelete[needDelete.length] = k }
    }
    return copy;
}

horizontalReflection = function () {
    for (let j = 0; j < originalArray.length; j++) {
        if (originalArray[j] == "blue" || originalArray[j] == "red" ||
            originalArray[j] == "BLUE" || originalArray[j] == "RED") { copy[j] = originalArray[j] }
        if (originalArray[j] == 1) { copy[j] = 9 }
        if (originalArray[j] == 2) { copy[j] = 6 }
        if (originalArray[j] == 3) { copy[j] = 3 }
        if (originalArray[j] == 4) { copy[j] = 8 }
        if (originalArray[j] == 5) { copy[j] = 5 }
        if (originalArray[j] == 6) { copy[j] = 2 }
        if (originalArray[j] == 7) { copy[j] = 7 }
        if (originalArray[j] == 8) { copy[j] = 4 }
        if (originalArray[j] == 9) { copy[j] = 1 }
    }
    for (let k = deleteFromThis + 1; k < blueWonMemory.length; k++) {
        //for (let k = 0; k < blueWonMemory.length; k++) {
        index = 0;
        //if (blueWonMemory[k].length == copy.length) {
        if (blueWonMemory[k].length == copy.length && k != dontDeleteThis) {
            for (let m = 0; m < copy.length; m++) {
                if (blueWonMemory[k][m] == copy[m]) {
                    index = index + 1;
                }
            }
        }
        if (index == copy.length) { needDelete[needDelete.length] = k }
    }
    return copy;
}

centralReflection = function () {
    for (let j = 0; j < originalArray.length; j++) {
        if (originalArray[j] == "blue" || originalArray[j] == "red" ||
            originalArray[j] == "BLUE" || originalArray[j] == "RED") { copy[j] = originalArray[j] }
        if (originalArray[j] == 1) { copy[j] = 9 }
        if (originalArray[j] == 2) { copy[j] = 8 }
        if (originalArray[j] == 3) { copy[j] = 7 }
        if (originalArray[j] == 4) { copy[j] = 6 }
        if (originalArray[j] == 5) { copy[j] = 5 }
        if (originalArray[j] == 6) { copy[j] = 4 }
        if (originalArray[j] == 7) { copy[j] = 3 }
        if (originalArray[j] == 8) { copy[j] = 2 }
        if (originalArray[j] == 9) { copy[j] = 1 }
    }
    for (let k = deleteFromThis + 1; k < blueWonMemory.length; k++) {
        //for (let k = 0; k < blueWonMemory.length; k++) {
        index = 0;
        //if (blueWonMemory[k].length == copy.length) {
        if (blueWonMemory[k].length == copy.length && k != dontDeleteThis) {
            for (let m = 0; m < copy.length; m++) {
                if (blueWonMemory[k][m] == copy[m]) {
                    index = index + 1;
                }
            }
        }
        if (index == copy.length) { needDelete[needDelete.length] = k }
    }
    return copy;
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
                    }
                    if (strategySignal == 2) {
                        break
                    }
                }
                if (strategySignal == 2) { break }
            }
            if (strategySignal == 2) {
                ultimateMemory3[ultimateMemory3.length] = ultimateMemory[i];
                blueWonBigFilterArray3[blueWonBigFilterArray3.length] = blueWonBigFilterArray2[i];
                yellowLines[ultimateMemory3.length - 1] = myYellow;
                thereIsStrategy = true;
                break;
            }
        }
        if (strategySignal == 2) { break }
    }
}

itHasStrategyFunction = function () {
    yellowLines = Array();
    for (let i = 0; i < ultimateMemory.length; i++) {
        thereIsStrategy = false;
        myYellow = Array();
        for (let difference = 0; difference < 19; difference++) {
            if (thereIsStrategy == false) {
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
    for (let i = 0; i < stepNumber; i++) {
        if (myGame[i] == "blue") {
            document.querySelector(`#littleTbody2 td[name='${myGame[i + 1]}']`).innerHTML = "&#128309"
        }
        if (myGame[i] == "red") {
            document.querySelector(`#littleTbody2 td[name='${myGame[i + 1]}']`).innerHTML = "&#128308"
        }
    }
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
                rotation90DegreePatterns(originalArray); firstCopy = copy.slice();
                noNeedFunctionForPatterns(myArray = patternsArray2);
                originalArray = firstCopy.slice(0);
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
    showPatterns();
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
                if (index == myBorder) { break }
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
    for (let i = 0; i < blueWonBigFilterArray8.length; i++) {
        myArray = Array();
        myArrayForKeys = Array();
        for (let j = 0; j < 15; j++) {
            if (blueWonBigFilterArray8[i][j] == "blue") {
                myArray[myArray.length] = blueWonBigFilterArray8[i][j + 1];
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
        learntStrategies2[learntStrategies2.length] = myArrayOne;
        learntStrategies2[learntStrategies2.length] = myArrayTwo;
        learntStrategies2[learntStrategies2.length] = myArrayThree;

    }

    learntStrategies2a = Array();
    for (let i = 0; i < learntStrategies2.length; i++) {
        for (let k = 0; k < 3; k++) {
            for (let m = 0; m < 3; m++) {
                for (let n = 0; n < 3; n++) {
                    if (k != m && m != n && k != n) {
                        myArray = Array();
                        myArray = [learntStrategies2[i][k], learntStrategies2[i][m], learntStrategies2[i][n]]
                        learntStrategies2a[learntStrategies2a.length] = myArray;
                    }
                }
            }
        }
    }


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

    learntStrategies3 = Array();
    for (let i = 0; i < learntStrategies2a.length; i++) {
        if (noNeed.includes(i) == false) {
            learntStrategies3[learntStrategies3.length] = learntStrategies2a[i];
        }
    }

    patternsArray6 = Array();
    for (let i = 0; i < learntStrategies3.length; i++) {
        pattern = ["nothing", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"];
        for (let j = 0; j < learntStrategies3[i].length; j++) {
            pattern[learntStrategies3[i][j]] = "blue";
        }
        patternsArray6[patternsArray6.length] = pattern;
    }

    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    patternsArray5 = patternsArray6.slice(0);
    learntStrategies = learntStrategies3.slice(0);





    document.querySelector("#numberOfBasicPatterns").innerHTML = patternsArray5.length;
    gameNumberB = 0;
    showBasicPatterns();
};

showBasicPatterns = function () {
    for (let i = 1; i < 10; i++) {
        document.querySelector(`#littleTbody4 td[name='${i}']`).innerHTML = ""
        document.querySelector(`#littleTbody4 td[name='${i}']`).style["background-color"] = "#dbdbdb"
    }
    for (let i = 1; i < 10; i++) {
        document.querySelector(`#littleTbody5 td[name='${i}']`).innerHTML = ""
        document.querySelector(`#littleTbody5 td[name='${i}']`).style["background-color"] = "#dbdbdb"
    }
    for (let i = 1; i < patternsArray5[gameNumberB].length; i++) {
        if (patternsArray5[gameNumberB][i] == "blue") { document.querySelector(`#littleTbody4 td[name='${i}']`).innerHTML = "&#128309" }
    }
    //for (let i = 0; i < yellowLines5[gameNumberB].length; i++) {
    //document.querySelector(`#littleTbody4 td[name='${yellowLines5[gameNumberB][i]}']`).style["background-color"] = "#ffff66"
    //}
    for (let i = 0; i < 3; i++) {
        document.querySelector(`#littleTbody5 td[name='${learntStrategies[gameNumberB][i]}']`).innerHTML = [i + 1]
    }
    document.querySelector("#numberOfGame4").innerHTML = `${gameNumberB + 1}. `;
};

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

gameByLearntMemoryStepByStep = function (myArray, keys) {
    signal = 0;
    if (blue.length == 0 && red.length == 0) {
        number = myArray[0];
        strategicalSteps[strategicalSteps.length] = number;
    }
    for (let j = 0; j < blue.length; j++) {
        if (myArray.includes(blue[j]) == true) {
            signal = signal + 1;
        }
        if (signal == blue.length) {
            //console.error("most")
            for (let k = 0; k < myArray.length; k++) {
                if (blue.includes(myArray[k]) == false &&
                    red.includes(myArray[k]) == false) {
                    signalTwo = 0;
                    for (let g = 0; g < keys.length; g++) {
                        //console.log(freePlace)
                        //console.log(keys)
                        if (freePlace.includes(keys[g]) == true) {
                            signalTwo = signalTwo + 1
                        }
                    }
                    //console.log(signalTwo)
                    if (signalTwo >= 2) {
                        strategicalSteps[strategicalSteps.length] = myArray[k]
                    }
                }
            }
        }
    }
    signal = 0;
    for (let j = 0; j < red.length; j++) {
        if (myArray.includes(red[j]) == true) {
            signal = signal + 1;
        }
        if (signal == 1 || signal == 2) {
            for (let k = 0; k < myArray.length; k++) {
                if (blue.includes(myArray[k]) == false &&
                    red.includes(myArray[k]) == false) {
                    signalTwo = 0;
                    signalTwoArray = Array();
                    for (let g = 0; g < keys.length; g++) {
                        //console.log(freePlace)
                        //console.log(keys)
                        if (freePlace.includes(keys[g]) == true) {
                            signalTwo = signalTwo + 1;
                            signalTwoArray[signalTwoArray.length] = keys[g];
                        }
                    }
                    if (signalTwo >= 2) {
                        for (let m = 0; m < myArray.length; m++) {
                            if (freePlace.includes(myArray[m]) == true)
                                strategicalStepsForDefence[strategicalStepsForDefence.length] = myArray[m]
                        }
                        defenceArray = Array();
                        for (let s = 0; s < myArray.length; s++) {
                            if (freePlace.includes(myArray[s]) == true)
                                defenceArray[defenceArray.length] = myArray[s];
                            defenceArray = defenceArray.concat(signalTwoArray)
                        }
                        stepsForDefenceArray[stepsForDefenceArray.length] = defenceArray;
                        /*if (signal == 1 && myArray[0] == red[0] && blue.length == 0 && myArray.length == 3) {
                            strategicalStepsForDefenceImportant[strategicalStepsForDefenceImportant.length] = myArray[1];
                        }*/
                    }
                }
            }
        }
    }
}

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

stepsForDefenceArray = Array();
gameByLearntMemory = function () {
    stepsForDefenceArray = Array();
    number = -10;
    strategicalSteps = Array();
    strategicalStepsForDefence = Array();
    strategicalStepsForDefenceImportant = Array();
    //if (blue.length <= 2) {
    for (let i = 0; i < learntStrategies.length; i++) {
        myArray = learntStrategies[i].slice(0);
        keys = learntStrategiesKeyPlaces[i].slice(0);
        copy = Array(); myCopy = Array();
        gameByLearntMemoryStepByStep(myArray, keys);
        for (let j = 0; j < 4; j++) {
            if (j > 0) {
                rotation90DegreeForLearnt(myArray);
                myCopy = copy.slice(0);
                myArray = copy.slice(0);
                rotation90DegreeForLearnt(keys);
                myKeys = keys.slice(0);
                keys = myKeys.slice(0);
                gameByLearntMemoryStepByStep(myCopy, myKeys);
            }
            verticalReflectionForLearnt(myArray); myCopy = copy.slice(0);
            verticalReflectionForLearnt(keys); myKeys = copy.slice(0);
            gameByLearntMemoryStepByStep(myCopy, myKeys);
            horizontalReflectionForLearnt(myArray); myCopy = copy.slice(0);
            horizontalReflectionForLearnt(keys); myKeys = copy.slice(0);
            gameByLearntMemoryStepByStep(myCopy, myKeys);
            centralReflectionForLearnt(myArray); myCopy = copy.slice(0);
            centralReflectionForLearnt(keys); myKeys = copy.slice(0);
            gameByLearntMemoryStepByStep(myCopy, myKeys);
        }
    }
    // }
    if (strategicalSteps.length > 0) {
        chance = Math.floor(Math.random() * strategicalSteps.length);
        number = strategicalSteps[chance];
    }
    if (strategicalStepsForDefence.length > 0) {
        chance = Math.floor(Math.random() * strategicalStepsForDefence.length);
        number = strategicalStepsForDefence[chance];
    }
    /*if (strategicalStepsForDefenceImportant.length > 0) {
        chance = Math.floor(Math.random() * strategicalStepsForDefenceImportant.length);
        number = strategicalStepsForDefenceImportant[chance];
    }*/
    previousNumber = number;
    defenceOrAttack(id = withLearntStrategy.id);
    number = numberRed;
    if (numberBlue != 0) { number = numberBlue }
    if (number == 0) { number = previousNumber }
    console.log("gép ezt lépi:", number)
    if (number == -10) {
        chance = Math.floor(Math.random() * freePlace.length);
        number = freePlace[chance];
        console.log("RND")
    }
    if (stepsForDefenceArray.length > 0) {
        everyArrayHasIt = Array();
        max = 0;
        for (let i = 0; i < 10; i++) {
            index = 0;
            for (let j = 0; j < stepsForDefenceArray.length; j++) {
                if (stepsForDefenceArray[j].includes(i) == true) {
                    index = index + 1;
                    if (index > max) { max = index }
                }
            }
            if (index == stepsForDefenceArray.lengt) {
                everyArrayHasIt[everyArrayHasIt.length] = i;
            }
        }
    }
}

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
    clearingLittleTable();
    starting();
    document.querySelector("#infoAboutNoStrategy").style.display = "none";
    document.querySelector("#infoAboutAvoidStrategy").style.display = "none";
};

putCoin = function (this_) {
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
                    stepOnTheBoard(number);
                    isWinner();
                };
            };
        };
        if (document.querySelector("#withLearningMemory").checked == true) {
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
                    console.log("number:", number)
                    if (number == 0) {
                        gameWithLearningMemory();
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
                    gameByLearntMemory();
                    stepOnTheBoard(number);
                    isWinner();
                };
            };
        }
    };

};

gameWithLearningMemory = function () {
    number = 0;
    min = 0;
    if (blueWonMemory.length == 0) {
        blueWonMemory = learningMemoryBlueWon;
        undecidedMemory = learningMemoryUndecided;
        redWonMemory = learningMemoryRedWon;
    };
    if (coins.length == 0) {
        number = Math.floor(Math.random() * 9)
    }
    nextStepArray = Array();
    nextStepArray2 = Array();
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
                    }
                }
            }

            if (nextStepArray2.length > 0) {
                chance = Math.floor(Math.random() * nextStepArray2.length);
                number = nextStepArray2[chance];
                if (nowLearning == false) { console.log(nextStepArray2) };
            }

            if (nextStepArrayUndecided.length > 0) {
                chance = Math.floor(Math.random() * nextStepArrayUndecided.length);
                number = nextStepArrayUndecided[chance];
                if (nowLearning == false) { console.log("undecided") };
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
                            console.log("redWonStep:", nextStepRedWon);
                            break
                        }
                        if (index == coins.length) { break };
                    };
                }


            }


            //if (nextStepArray2.length == 0 && nextStepArrayUndecided.length == 0 &&
            //redWonStep == 0) {
        }

    }
    if (number == 0) {
        chance = Math.floor(Math.random() * freePlace.length);
        number = freePlace[chance];
        if (nowLearning == false) { console.log("RND") };
    }
}

exNumber = 1;
nowTheComputerStep = function () {
    document.querySelector(`#millTbody tr td[name='${exNumber}']`).style["background-color"] = "#dbdbdb";
    available = false;
    requiredPlace = 0;
    firstStrategy = "nothing";
    av = -10;
    pp = -10;
    computerWon = false;
    strategy = "nothing";
    requiredPlace = 0;

    theComputerPlaysNow();

    if (blinkingMemory[step - 2] == "on") { blinkingMemory[step] = "on" };

    number = requiredPlace;
    if (nowLearning == false) {
        document.querySelector(`#millTbody td[name='${number}']`).style["background-color"] = "#eedc82";
    };
    exNumber = number;
    strategyArray[step] = strategy;
    ppArray[ppArray.length] = pp;
};

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




    if (available == false && red.length > 1) {
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
        /*if (red[red.length - 1] == round[(round.indexOf(blue[0]) + 1) % 8] ||
            red[red.length - 1] == round[(round.indexOf(blue[0]) + 4) % 7]) {
            chance = Math.ceil(Math.random() * 2);
            if (chance == 1) { requiredPlace = 5 };
            if (chance == 2) { requiredPlace = round[(round.indexOf(red[red.length - 1]) + 4) % 8] };
            strategy = "defence-from-little-triangle";
            available = true;
        };*/
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

    /* if (blue.length == 1 && corner.includes(blue[0]) == true && freePlace.includes(5) == true) {
         chance = Math.ceil(Math.random() * 2);
         if (chance == 2) {
             strategy = "crocodile's jaw";
             index = round.indexOf(blue[0]);
             if (freePlace.includes(round[(index + 4) % 8]) == true) {
                 requiredPlace = round[(index + 4) % 8];
                 available = true;
             }
     
     
     
     
         };
     };*/


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
        //blinkTextFunction();
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
        //if (nowLearning == false) { console.error("lucky eyes") };
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
            strategy = "random step";
            available = true; av = 28; checkAv();
            if (nowLearning == false) { noStrategy() };
            pp = 28; checkProgramParts();

        } else {
            let place = Math.floor(Math.random() * freePlace.length);
            requiredPlace = freePlace[place];
            strategy = "random step";
            available = true; av = 29; checkAv();
            if (nowLearning == false) { noStrategy() };
            pp = 29; checkProgramParts();
        };
    };

    if (blue.length == 0 && corner.includes(red[0]) == true) {
        //requiredPlace = 5;
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
        //console.log("most");
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
        /*if (cross.includes(red[red.length - 1]) == true) {
            if (chance == 1) {
                requiredPlace = round[(round.indexOf(red[0]) + 1) % 8];
                nextPlace = round[(round.indexOf(red[0]) + 2) % 8]
            }
            if (chance == 2) {
                requiredPlace = round[(round.indexOf(red[0]) + 7) % 8];
                nextPlace = round[(round.indexOf(red[0]) + 6) % 8]
            }
        }*/
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

    /*if (blue.length == 1 && corner.includes(blue[blue.length - 1]) &&
        red[red.length - 1] == round[(round.indexOf(blue[blue.length - 1]) + 4) % 8]) {
        if (nowLearning == false) { noStrategy() };
    };*/

}


check = function () {
    for (let k = 0; k < strategiesArray.length; k++) {
        if (strategiesArray[k][strategiesArray[k].length - 1] == "undecided" &&
            strategiesArray[k].includes(39) == true) {
            console.log("k=", k)
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
    if (thereIsWinner != "no") {
        if (thereIsWinner == "red") { alert("Győzött a piros."); }
        else { alert("Győzött a kék.") }
    }
    else {
        stepOnTheBoard(number);
    };
};



stepOnTheBoard = function (number) {
    if (computerStep == true) { previousStrategy[previousStrategy.length] = strategy; }
    if (document.querySelector(`#millTbody td[name='${number}']`).innerHTML == "") { stepShowsColor = stepShowsColor + 1; step = step + 1; };
    if (stepShowsColor % 2 == 1 && document.querySelector(`#millTbody td[name='${number}']`).innerHTML == "") { document.querySelector(`#millTbody td[name='${number}']`).innerHTML = "&#128308"; red[red.length] = number; colors[number] = "red"; nowStep = "red"; }
    if (stepShowsColor % 2 == 0 && document.querySelector(`#millTbody td[name='${number}']`).innerHTML == "") { document.querySelector(`#millTbody td[name='${number}']`).innerHTML = "&#128309"; blue[blue.length] = number; colors[number] = "blue"; nowStep = "blue" }
    coins[coins.length] = nowStep;
    coins[coins.length] = number;

    temporaryArray = Array();
    for (let i = 0; i < freePlace.length; i++) {
        if (freePlace[i] != number) { temporaryArray[temporaryArray.length] = freePlace[i] }
    };
    freePlace = Array();
    freePlace = temporaryArray.slice(0);
    temporaryArray = Array();
    if (strategy == "nothing") { document.querySelector("#strategyOfEngine").innerHTML = " - " }
    else { document.querySelector("#strategyOfEngine").innerHTML = strategy; }

    //if (step > 4) { isWinner() };

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
    //if (document.querySelector("#divForBr").children[0].id=="newBr") {
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
    if (red.length > 0) {
        freePlace.push(red[red.length - 1]);
        colors[red[red.length - 1]] = "empty";
    }
    if (blue.length > 0) {
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
};

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

