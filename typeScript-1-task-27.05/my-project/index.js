// Const  for validating instance variables 
var form = document.querySelector(".form"), names = document.querySelector("input[name='name']");
var selectEmptySpace = document.querySelector(".select-tayp-selector");
var colorInput = document.querySelector(".input-selector-color");
var phrase = document.querySelector(".textarea");
var checkboxCheck = document.querySelector("input[name='robotTalk']"), checkboxJump = document.querySelector("input[name='robotJump']"), checkboxWinks = document.querySelector("input[name='robotWinks']"), errorMsgInputName = document.querySelector(".errorInputName"), errorMsgSelectTayp = document.querySelector(".errorSelectTayp"), errorMsgSelectColor = document.querySelector(".errorSelectColor"), errorTextArea = document.querySelector(".errorTextArea");
var liNew = document.createElement("li"), inputJump = document.querySelector(".input-checkbox-jump"), buttonNext = document.querySelector(".buttonNext"), buttonPrevious = document.querySelector(".buttonPrevious"), liWraper = document.querySelector(".ulWraper"), divTextWraper = document.querySelector(".text-wrap"), section2 = document.querySelector("#slide-2"), liInstnc = document.querySelector(".liSectionForm "), messageInputSends = document.querySelector(".messageInputSend"), divRobotLegLeft = document.querySelector(".robotLegLeft"), divRobotLegRight = document.querySelector(".robotHandRight"), pRobotRibon = document.querySelector(".bubble"), divRobotBorder = document.querySelector(".robot"), divfemaleRobotSkirt = document.querySelector(".femaleRobotShelf"), divRobotMouthSpeak = document.querySelector(".robotMouthSpeak"), divRobotEyeLeft = document.querySelector(".robotEyeLeft");
var ulWraper = document.querySelector(".ulWraper");
var messagesInputt = document.querySelector(".messageInput");
var countIdRobot;
var robotObjectArray;
var countClick;
var countButtonClick;
var messageDataCopy = [{}];
var count;
var items;
var track;
var textJump;
var textWinks;
var textTalk;
var countSection;
var countupStyleVisible = 0;
var counteDownStyleVisible = 0;
var robotObject;
function createRobotSection(robotObjectArray, names) {
    textTalkTable();
    jumpTextTable();
    textWinksTable();
    // Const  for robot createlement instance variables   section id="slide-1" class="factory-section"
    var liRobotFirstSectionChaild = document.createElement("li");
    var messageRobotTalck = document.createElement("div");
    messageRobotTalck.className = "messageRobotTalck";
    var sectionRobotFactory = document.createElement("section"), h1TagNameRobot = document.createElement("h1"), formWraper = document.createElement("form"), divRobotBorder = document.createElement("div"), divRobotParagrphForm = document.createElement("div"), divRobotHead = document.createElement("div"), divRobotEyeLeft = document.createElement("div"), divRobotEyeRight = document.createElement("div"), divRobotMouth = document.createElement("div"), divRobotMouthSpeak = document.createElement("div"), divRobotBody = document.createElement("div"), divfemaleRobotSkirt = document.createElement("div"), divRobotHandLeft = document.createElement("div"), divRobotHandRight = document.createElement("div"), divRobotLegLeft = document.createElement("div"), divRobotLegRight = document.createElement("div"), hRobotTitle = document.createElement("h4"), pRobotRibon = document.createElement("p");
    countIdRobot++;
    var robotObjects = { id: countIdRobot,
        name: "".concat(names.value),
        type: "".concat(selectEmptySpace),
        color: "".concat(colorInput),
        phrase: "".concat(phrase),
        talk: "".concat(textTalk),
        jump: "".concat(textJump),
        winks: "".concat(textWinks)
    };
    robotObject = {
        id: parseFloat(robotObjects.id),
        name: String(robotObjects.name),
        type: String(robotObjects.type),
        color: String(robotObjects.color),
        phrase: String(robotObjects.phrase),
        talk: String(robotObjects.talk),
        jump: String(robotObjects.jump),
        winks: String(robotObjects.winks)
    };
    console.log(robotObject);
    robotObjectArray[countButtonClick] = robotObject;
    liRobotFirstSectionChaild.className = "liSectionForm";
    sectionRobotFactory.className = "factory-section";
    h1TagNameRobot.className = "basic-robot-title";
    h1TagNameRobot.textContent = "Basic Robot";
    divRobotBorder.className = "robot";
    divRobotParagrphForm.className = "text-wrap";
    formWraper.className = "content-wrapper";
    liRobotFirstSectionChaild.setAttribute("id", "".concat(countIdRobot));
    sectionRobotFactory.setAttribute("id", "".concat(countIdRobot));
    h1TagNameRobot.setAttribute("id", "".concat(countIdRobot));
    formWraper.setAttribute("id", "".concat(countIdRobot));
    var messagesLabel = document.createElement("label"), messagesInputt = document.createElement("input"), messagesInputSend = document.createElement("button"), messageHeader = document.createElement("header"), messageH4 = document.createElement("h4");
    messagesLabel.className = "messagesLabel";
    messagesLabel.textContent = "send messages";
    messagesInputt.className = "messageInput";
    messagesInputt.setAttribute("id", "".concat(countIdRobot));
    messagesInputt.placeholder = "write message here";
    messagesInputSend.className = "messageInputSend";
    messagesInputSend.textContent = "send";
    messageH4.className = "messageH4";
    messageH4.textContent = "Last messages";
    divCreateElementRobot(divRobotHead, "robotHead", robotObject.color, robotObject.id);
    divCreateElementRobot(divRobotEyeLeft, "robotEyeLeft", robotObject.color, robotObject.id);
    divCreateElementRobot(divRobotEyeRight, "robotEyeRight", robotObject.color, robotObject.id);
    divCreateElementRobot(divRobotMouth, "robotMouth", robotObject.color, robotObject.id);
    divCreateElementRobot(divRobotMouthSpeak, "robotMouthSpeak", robotObject.color, robotObject.id);
    divCreateElementRobotBody(divRobotBody, "robotBody", robotObject.color, robotObject.id);
    divCreateElementRobot(divRobotHandLeft, "robotHandLeft", robotObject.color, robotObject.id);
    divCreateElementRobot(divRobotHandRight, "robotHandRight", robotObject.color, robotObject.id);
    divCreateElementRobot(divRobotLegLeft, "robotLegLeft", robotObject.color, robotObject.id);
    divCreateElementRobot(divRobotLegRight, "robotLegRight", robotObject.color, robotObject.id);
    divCreatElementfamaleRobotSkirt(divfemaleRobotSkirt, "femaleRobotShelf", robotObject.color);
    createElementRobotTitle(hRobotTitle, "title-robot1", robotObject.name, robotObject.id);
    creatElementRobotPhrase(pRobotRibon, "bubble", robotObject.phrase);
    ulWraper.appendChild(liRobotFirstSectionChaild);
    liRobotFirstSectionChaild.appendChild(sectionRobotFactory);
    sectionRobotFactory.appendChild(h1TagNameRobot);
    h1TagNameRobot.appendChild(formWraper);
    formWraper.appendChild(divRobotBorder);
    divRobotBorder.appendChild(divRobotHead);
    divRobotBorder.append(divRobotEyeLeft, divRobotEyeRight, divRobotMouth, divRobotBody, divRobotHandLeft, divRobotHandRight, divRobotLegLeft, divRobotLegRight, hRobotTitle);
    formWraper.appendChild(divRobotParagrphForm);
    divRobotParagrphForm.appendChild(messagesLabel);
    divRobotParagrphForm.appendChild(messagesInputt);
    divRobotParagrphForm.appendChild(messagesInputSend);
    divRobotParagrphForm.appendChild(messageHeader);
    messageHeader.appendChild(messageH4);
    divRobotParagrphForm.appendChild(messageRobotTalck);
    track = document.querySelectorAll(".liSectionForm");
    var slidess = Array.from(track);
    console.log(slidess);
    if (Number(liRobotFirstSectionChaild.getAttribute("id")) >= 1) {
        slidess[countupStyleVisible].setAttribute('style', 'visibility:visible');
        slidess[countupStyleVisible].classList.add("curendSlide");
    }
    if (Number(liRobotFirstSectionChaild.getAttribute("id"))) {
        slidess[counteDownStyleVisible].style.visibility = "hidden";
        slidess[counteDownStyleVisible].classList.remove("curendSlide");
        counteDownStyleVisible++;
        console.log(counteDownStyleVisible);
        countupStyleVisible++;
        slidess[countupStyleVisible].style.visibility = "visible";
        slidess[countupStyleVisible].classList.add("curendSlide");
    }
    console.log(liRobotFirstSectionChaild.id);
    console.log(countSection);
    //   validateFirstButtonClick(countButtonClick)
    //functions initialize data options in teable  
    if (checkboxJump.checked) {
        divRobotLegLeft.classList.remove("robotLegLeft");
        divRobotLegLeft.classList.add('jumpingLeg');
        divRobotLegRight.classList.remove("robotLegRight");
        divRobotLegRight.classList.add("jumpingRight");
    }
    if (robotObject.type === "female" && checkboxCheck.checked && phrase.value != "") {
        divRobotBorder.appendChild(pRobotRibon);
    }
    else if (selectEmptySpace.value == "male" && checkboxCheck.checked && phrase.value != "") {
        divRobotBorder.appendChild(pRobotRibon);
    }
    if (robotObject.type === "female") {
        divRobotBorder.appendChild(divfemaleRobotSkirt);
    }
    if (checkboxCheck.checked && phrase.value != "") {
        divRobotBorder.appendChild(divRobotMouthSpeak);
        divRobotBorder.appendChild(pRobotRibon);
        pRobotRibon.style.display = "block";
    }
    // if no robot type is selected, an error occurs
    if (checkboxCheck.checked) {
        setTimeout(function () {
            // divRobotBorder.removeChild(divRobotMouthSpeak)
            divRobotMouthSpeak.style.display = "none";
            pRobotRibon.style.display = "none";
            //divRobotBorder.removeChild(pRobotRibon)
        }, 10000);
    }
    if (checkboxWinks.checked) {
        divRobotEyeLeft.classList.remove("robotEyeLeft");
        divRobotEyeLeft.classList.add("robotEyeLeftWinks");
    }
    if (countButtonClick >= 1) {
        buttonNext.style.display = "block";
        buttonPrevious.style.display = "block";
    }
    else {
        console.log("problem");
    }
    //Button Click Messages Input "Send" 
    messagesInputSend.addEventListener("click", function (e) {
        e.preventDefault();
        if (messagesInputt.value === "") {
            alert("Please type message");
        }
        else {
            dataMessage(messagesInputt);
            console.log(robotObjectArray);
        }
    });
    items.push(robotObject);
}
function createElementRobotTitle(element, classNames, title, id) {
    element.setAttribute("class", classNames);
    element.textContent = title;
    element.setAttribute("id", "".concat(id));
}
function creatElementRobotPhrase(element, classNames, phrase) {
    element.setAttribute("class", classNames);
    element.textContent = phrase;
}
// Function for createElement robot body male   
function divCreateElementRobotBody(element, classNames, color, id) {
    element.setAttribute("class", classNames);
    element.setAttribute("style", "border-top: 63px solid".concat(color, ";"));
    element.setAttribute("id", "".concat(id));
}
//  Function for createElement robot Skirt 
function divCreatElementfamaleRobotSkirt(element, classNames, color) {
    element.setAttribute("class", classNames);
    element.setAttribute("style", "border-bottom: 34px solid ".concat(color, ";"));
}
// Function for createElement robot     
function divCreateElementRobot(element, classNames, color, id) {
    element.setAttribute("class", classNames);
    element.setAttribute("style", "background-color:".concat(color, ";"));
    element.setAttribute("id", "".concat(id));
    //element.cloneNode(true);
}
// Verification function phrase is cheked checkbox "can talk"
function onChangeTextArea(checkboxCheck) {
    phrase.disabled = checkboxCheck.checked ? false : true;
}
//    A function that performs the effect of "talking" to the ribbon and then stopping it  
function textTalkTable() {
    if (checkboxCheck.checked) {
        textTalk = "can Talk";
    }
    else {
        textTalk = "";
    }
}
//A function that performs the effect of "jumping"   
function jumpTextTable() {
    if (checkboxJump.checked) {
        textJump = "can jump";
    }
    else {
        textJump = "";
    }
}
//   A function that performs the effect of "winking"     
function textWinksTable() {
    if (checkboxWinks.checked) {
        textWinks = "can winks";
    }
    else {
        textWinks = "";
    }
}
//Create data mesages 
function dataMessage(messagesInput) {
    console.log(items);
    var inputId = Number(messagesInputt.getAttribute("id").slice(-1));
    var robotObjectss = Object.values(items[inputId - 1]);
    console.log(robotObjectss);
    console.log();
    var data = new Date();
    var dataHours = data.getHours();
    var dataMinutes = data.getMinutes();
    document.querySelectorAll(".messageRobotTalck").forEach(function (item) {
        var messageRobotOne = document.createElement("div");
        messageRobotOne.className = "messageRobotOne";
        item.insertAdjacentElement("afterbegin", messageRobotOne);
        var messageRobotName = document.createElement("p"), messageRobotText = document.createElement("p"), messageSpanData = document.createElement("span");
        messageRobotName.className = "messageRobotName";
        messageRobotText.className = "messageRobotText";
        messageSpanData.className = "messageSpanData";
        messageRobotOne.appendChild(messageRobotName);
        messageRobotOne.appendChild(messageSpanData);
        messageRobotOne.append(messageRobotText);
        messageRobotName.setAttribute("textContent", "".concat(robotObjectss[1]));
        messageRobotName.setAttribute("color", "".concat(robotObjectss[3]));
        messageRobotText.textContent = messagesInput.value;
        messageSpanData.textContent = "".concat(dataHours, " : ").concat(dataMinutes);
    });
}
// Event listener on button name:"create" 
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    e.preventDefault();
    createRobotSection(robotObjectArray, names);
    onChangeTextArea(checkboxCheck);
    slides = document.querySelectorAll(".liSectionForm");
    maxSlide++;
    curSlide++;
    moveToSlide();
    countButtonClick++;
    count++;
    validateFormNameAlert(names, "Name can't be blank");
    validateFormSelectAlert(selectEmptySpace, "Please choose the type");
    validateFormInputColorAlert(colorInput, "Choose color");
    validateFormChekboxAlert(phrase, checkboxCheck, "Can't be blank");
});
var slides;
var curSlide = 0;
var maxSlide = 0;
function moveToSlide() {
    slides.forEach(function (s, i) {
        s.style.transform = "translateX(".concat(80 * (i - curSlide + 1), "%)");
    });
}
function nextSlide() {
    maxSlide = slides.length;
    console.log(slides);
    if (curSlide === maxSlide) {
        curSlide = 1;
        slides.forEach(function (m) {
            m.style.visibility = "visible";
        });
    }
    else {
        curSlide++;
    }
    // function move slide left and right
    moveToSlide();
}
function prevSlide() {
    console.log(slides);
    slides.forEach(function (m) {
        m.style.visibility = "visible";
    });
    if (curSlide === 1) {
        curSlide = maxSlide;
    }
    else {
        curSlide--;
    }
    moveToSlide();
}
//click Button "Previos"
buttonPrevious.addEventListener("click", (prevSlide));
var countss = 0;
//click Button "Next"
buttonNext.addEventListener("click", (nextSlide));
// Validate alert composition  
var validateFormNameAlert = function (clas, mesage) {
    if (clas.value == "") {
        errorMsgInputName.textContent = mesage;
        clas.style.border = "2px solid red";
    }
    else {
        errorMsgInputName.textContent = "";
        clas.style.border = "2px solid green";
    }
};
var validateFormSelectAlert = function (clas, mesage) {
    if (clas.value == "") {
        errorMsgSelectTayp.textContent = mesage;
        clas.style.border = "2px solid red";
    }
    else {
        errorMsgSelectTayp.textContent = "";
        clas.style.border = "2px solid green";
    }
};
var validateFormInputColorAlert = function (clas, mesage) {
    if (clas.value == "#e96126") {
        errorMsgSelectColor.textContent = mesage;
        clas.style.border = "2px solid red";
    }
    else {
        errorMsgSelectColor.textContent = "";
        clas.style.border = "2px solid green";
    }
};
var validateFormChekboxAlert = function (clas, checkbox, mesage) {
    if (checkbox.checked && clas.value == "") {
        errorTextArea.textContent = mesage;
        clas.style.border = "2px solid red";
    }
};
var buttonShowCreatedRobots = document.querySelector(".show-created-robots-button");
var scoreDiv = document.querySelector(".scoreDiv");
var tableHeaders = ["name", "taype", "color", "options"];
var robotCount = document.createElement("h3");
scoreDiv.append(robotCount);
//create robot table body
var createscoreBoardTable = function () {
    console.log(robotObjectArray);
    if (count > 0) {
        robotCount.textContent = "".concat(count, " :robots found");
        robotCount.className = "robotCount";
        // Remove all children from scoreboard div (if any)
        while (scoreDiv.firstChild)
            scoreDiv.removeChild(scoreDiv.firstChild);
        var scoreBoardTable = document.createElement("table");
        scoreBoardTable.className = "scoreBoardTable";
        var scoreBoardTableHead = document.createElement("thead");
        scoreBoardTableHead.className = "scoreBoardTableHead";
        var scoreBoardTableHeaderRow_1 = document.createElement("tr");
        scoreBoardTableHeaderRow_1.className = "scoreBoardTableBodyRow";
        tableHeaders.forEach(function (header) {
            var scoreHeader = document.createElement("th");
            scoreHeader.textContent = header;
            scoreBoardTableHeaderRow_1.append(scoreHeader);
        });
        scoreBoardTableHead.append(scoreBoardTableHeaderRow_1);
        scoreBoardTable.append(scoreBoardTableHead);
        var scoreBoardTableBody = document.createElement("tbody");
        scoreBoardTableBody.className = "scosreBoardTable-body";
        scoreBoardTable.append(scoreBoardTableBody);
        scoreDiv.append(scoreBoardTable);
    }
    else {
        robotCount.textContent = "No robots created yet";
        robotCount.className = "robotCount";
    }
};
// create robot table data
var appendScores = function (singleScore) {
    var scoreBoardTable = document.querySelector(".scoreBoardTable");
    var scoreBoardTableBodyRow = document.createElement('tr');
    scoreBoardTableBodyRow.className = "scoreBoardTableBodyRow";
    var usernameData = document.createElement('td');
    var hrefNameDataTag = document.createElement("a");
    hrefNameDataTag.textContent = "".concat(singleScore.name, " ").concat(singleScore.id);
    //Use function "eventListenerNameDataTableRow()"
    hrefNameDataTag.href = "javascript:eventListenerNameDataTableRow(".concat(singleScore.id, ");");
    usernameData.append(hrefNameDataTag);
    var tapyData = document.createElement("td");
    var typeData = document.querySelector(".nameTableId");
    typeData.setAttribute("textContent", "".concat(singleScore.type));
    tapyData.className = "nameTableId";
    var colorData = document.createElement("td");
    var colorInput = document.createElement("input");
    colorInput.type = "color";
    colorInput.id = "".concat(singleScore.id);
    colorInput.value = singleScore.color;
    colorData.append(colorInput);
    var optionsData = document.createElement("td");
    optionsData.textContent = "".concat(singleScore.jump, ",").concat(singleScore.talk, ",").concat(singleScore.winks);
    scoreBoardTableBodyRow.append(usernameData, tapyData, colorData, optionsData);
    scoreBoardTable === null || scoreBoardTable === void 0 ? void 0 : scoreBoardTable.append(scoreBoardTableBodyRow);
};
function eventListenerNameDataTableRow(currentId) {
    var sumari = Array.from(track);
    var setAttributeSumari = function () {
    };
    sumari.forEach(setAttributeSumari);
    console.log(sumari);
    function sarchArray(id) {
        return id.id == "".concat(currentId);
    }
    sumari.forEach(function (m) {
        m.style.visibility = "hidden";
    });
    if (sumari.find(sarchArray)) {
        var result = void 0;
        result = sumari.find(sarchArray);
        result.style.transform = "translateX(".concat(0, "%)");
        result.style.visibility = "visible";
        console.log(result);
    }
    console.log();
    console.log("dadada");
}
//Click button "ShowCreatedRobots"
buttonShowCreatedRobots.addEventListener("click", function (e) {
    e.preventDefault();
    createscoreBoardTable();
    if (count > 0) {
        for (var _i = 0, robotObjectArray_1 = robotObjectArray; _i < robotObjectArray_1.length; _i++) {
            var score = robotObjectArray_1[_i];
            appendScores(score);
        }
    }
});
