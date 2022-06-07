
// Const  for validating instance variables 
const form = document.querySelector(".form"),
    names = document.querySelector("input[name='name']"),
    selectEmptySpace = document.querySelector(".select-tayp-selector"),
    colorInput = document.querySelector(".input-selector-color"),
    phrase = document.querySelector("textarea"),
    checkboxCheck = document.querySelector("input[name='robotTalk']"),
    checkboxJump = document.querySelector("input[name='robotJump']"),
    checkboxWinks = document.querySelector("input[name='robotWinks']"),
    errorMsgInputName = document.querySelector(".errorInputName"),
    errorMsgSelectTayp = document.querySelector(".errorSelectTayp"),
    errorMsgSelectColor = document.querySelector(".errorSelectColor"),
    errorTextArea = document.querySelector(".errorTextArea")

const liNew = document.createElement("li"),
    inputJump = document.querySelector(".input-checkbox-jump"),
    buttonNext = document.querySelector(".buttonNext"),
    buttonPrevious = document.querySelector(".buttonPrevious"),
    buttonClearLocalStorage = document.querySelector(".clearLocalStorage"),
    liWraper = document.querySelector(".ulWraper"),
    divTextWraper = document.querySelector(".text-wrap"),
    section2 = document.querySelector("#slide-2"),
    liInstnc = document.querySelector(".liSectionForm "),
    messageInputSends = document.querySelector(".messageInputSend"),
    divRobotLegLeft = document.querySelector(".robotLegLeft"),
    divRobotLegRight = document.querySelector(".robotHandRight"),
    pRobotRibon = document.querySelector(".bubble"),
    divRobotBorder = document.querySelector(".robot"),
    divfemaleRobotSkirt = document.querySelector(".femaleRobotShelf"),
    divRobotMouthSpeak = document.querySelector(".robotMouthSpeak"),
    divRobotEyeLeft = document.querySelector(".robotEyeLeft"),
    ulWraper = document.querySelector(".ulWraper")
    let indexRobotLocalStorage = localStorage.length;

let arrayDeserialization = [{}];


let countIdRobot = 0;
let robotObjectArrays = [{}];
let countClick = 0;
let countButtonClick = 0;
let messageDataCopy = [{}];
let count = 0;
let items = [];
let track = ""
let textJump;
let textWinks;
let textTalk;
let countSection = 0;
let countupStyleVisible = 0;
let counteDownStyleVisible = 0;
let robotObject = {
    name: "",
    type: "",
    color: "",
    jump: false,
    winks: false
}

function createRobotSection(robotObjectArray) {
    textTalkTable()
    jumpTextTable()
    textWinksTable()
    // Const  for robot createlement instance variables   section id="slide-1" class="factory-section"
    const liRobotFirstSectionChaild = document.createElement("li")
    const messageRobotTalck = document.createElement("div")
    messageRobotTalck.className = "messageRobotTalck"

    const sectionRobotFactory = document.createElement("section"),
        h1TagNameRobot = document.createElement("h1"),
        formWraper = document.createElement("form"),
        divRobotBorder = document.createElement("div"),
        divRobotParagrphForm = document.createElement("div"),
        divRobotHead = document.createElement("div"),
        divRobotEyeLeft = document.createElement("div"),
        divRobotEyeRight = document.createElement("div"),
        divRobotMouth = document.createElement("div"),
        divRobotMouthSpeak = document.createElement("div"),
        divRobotBody = document.createElement("div"),
        divfemaleRobotSkirt = document.createElement("div"),
        divRobotHandLeft = document.createElement("div"),
        divRobotHandRight = document.createElement("div"),
        divRobotLegLeft = document.createElement("div"),
        divRobotLegRight = document.createElement("div"),
        hRobotTitle = document.createElement("h4"),
        pRobotRibon = document.createElement("p")
    
    countIdRobot++

    robotObject = {
        id: `${countIdRobot}`,
        name: `${names.value}`,
        type: `${selectEmptySpace.value}`,
        color: `${colorInput.value}`,
        phrase: `${phrase.value}`,
        talk: `${textTalk}`,
        jump: `${textJump}`,
        winks: `${textWinks}`
    }
    
    robotObjectArrays[countButtonClick] = robotObject;

console.log(robotObjectArrays);
  
  
    

    liRobotFirstSectionChaild.className = "liSectionForm"
    sectionRobotFactory.className = "factory-section"
    h1TagNameRobot.className = "basic-robot-title"
    h1TagNameRobot.textContent = "Basic Robot"
    divRobotBorder.className = "robot"
    divRobotParagrphForm.className = "text-wrap"
    formWraper.className = "content-wrapper"

    liRobotFirstSectionChaild.id = `${countIdRobot}`;
    sectionRobotFactory.id = `${countIdRobot}`;
    h1TagNameRobot.id = `${countIdRobot}`;
    formWraper.id = `${countIdRobot}`;

    const messagesLabel = document.createElement("label"),
        messagesInput = document.createElement("input"),
        messagesInputSend = document.createElement("button"),
        messageHeader = document.createElement("header"),
        messageH4 = document.createElement("h4")


    messagesLabel.className = "messagesLabel"
    messagesLabel.textContent = "send messages"
    messagesInput.className = "messageInput"
    messagesInput.id = countIdRobot
    messagesInput.placeholder = "write message here"
    messagesInputSend.className = "messageInputSend"
    messagesInputSend.textContent = "send"
    messageH4.className = "messageH4"
    messageH4.textContent = "Last messages"



    divCreateElementRobot(divRobotHead, "robotHead", robotObjectArray[countButtonClick].color, robotObjectArray[countButtonClick].id)
    divCreateElementRobot(divRobotEyeLeft, "robotEyeLeft", robotObjectArray[countButtonClick].color, robotObjectArray[countButtonClick].id)
    divCreateElementRobot(divRobotEyeRight, "robotEyeRight", robotObjectArray[countButtonClick].color, robotObjectArray[countButtonClick].id)
    divCreateElementRobot(divRobotMouth, "robotMouth", robotObjectArray[countButtonClick].color, robotObjectArray[countButtonClick].id)
    divCreateElementRobot(divRobotMouthSpeak, "robotMouthSpeak", robotObjectArray[countButtonClick].color, robotObjectArray[countButtonClick].id)
    divCreateElementRobotBody(divRobotBody, "robotBody", robotObjectArray[countButtonClick].color, robotObjectArray[countButtonClick].id)
    divCreateElementRobot(divRobotHandLeft, "robotHandLeft", robotObjectArray[countButtonClick].color, robotObjectArray[countButtonClick].id)
    divCreateElementRobot(divRobotHandRight, "robotHandRight", robotObjectArray[countButtonClick].color, robotObjectArray[countButtonClick].id)
    divCreateElementRobot(divRobotLegLeft, "robotLegLeft", robotObjectArray[countButtonClick].color, robotObjectArray[countButtonClick].id)
    divCreateElementRobot(divRobotLegRight, "robotLegRight", robotObjectArray[countButtonClick].color, robotObjectArray[countButtonClick].id)
    divCreatElementfamaleRobotSkirt(divfemaleRobotSkirt, "femaleRobotShelf", robotObjectArray[countButtonClick].color, robotObjectArray[countButtonClick].id)
    createElementRobotTitle(hRobotTitle, "title-robot1", robotObjectArray[countButtonClick].name, robotObjectArray[countButtonClick].id)
    creatElementRobotPhrase(pRobotRibon, "bubble", robotObjectArray[countButtonClick].phrase, robotObjectArray[countButtonClick].id)

    ulWraper.appendChild(liRobotFirstSectionChaild)
    liRobotFirstSectionChaild.appendChild(sectionRobotFactory)
    sectionRobotFactory.appendChild(h1TagNameRobot)
    h1TagNameRobot.appendChild(formWraper)
    formWraper.appendChild(divRobotBorder)
    divRobotBorder.appendChild(divRobotHead)

    divRobotBorder.append(divRobotEyeLeft, divRobotEyeRight, divRobotMouth, divRobotBody,
        divRobotHandLeft, divRobotHandRight, divRobotLegLeft, divRobotLegRight, hRobotTitle)

    formWraper.appendChild(divRobotParagrphForm)
    divRobotParagrphForm.appendChild(messagesLabel)
    divRobotParagrphForm.appendChild(messagesInput)
    divRobotParagrphForm.appendChild(messagesInputSend)
    divRobotParagrphForm.appendChild(messageHeader)
    messageHeader.appendChild(messageH4)
    divRobotParagrphForm.appendChild(messageRobotTalck)


    track = document.querySelectorAll(".liSectionForm")
    const slidess = Array.from(track)

    


    if (liRobotFirstSectionChaild.id >= 1) {

        slidess[countupStyleVisible].style.visibility = "visible"
        slidess[countupStyleVisible].classList.add("curendSlide")


    }
    if (liRobotFirstSectionChaild.id > 1) {

        slidess[counteDownStyleVisible].style.visibility = "hidden"
        slidess[counteDownStyleVisible].classList.remove("curendSlide")
        counteDownStyleVisible++
       
        countupStyleVisible++
        slidess[countupStyleVisible].style.visibility = "visible"
        slidess[countupStyleVisible].classList.add("curendSlide")

    }
  
    //   validateFirstButtonClick(countButtonClick)

    //functions initialize data options in teable  
    if (checkboxJump.checked) {
        divRobotLegLeft.classList.remove("robotLegLeft")
        divRobotLegLeft.classList.add('jumpingLeg');

        divRobotLegRight.classList.remove("robotLegRight")
        divRobotLegRight.classList.add("jumpingRight")


    }

    if (robotObject.type === "female" && checkboxCheck.checked && phrase.value != "") {
        divRobotBorder.appendChild(pRobotRibon)
    } else if (selectEmptySpace.value == "male" && checkboxCheck.checked && phrase.value != "") {
        divRobotBorder.appendChild(pRobotRibon)

    }
    if (robotObject.type === "female") {
        divRobotBorder.appendChild(divfemaleRobotSkirt)
    }


    if (checkboxCheck.checked && phrase.value != "") {
        divRobotBorder.appendChild(divRobotMouthSpeak)
        divRobotBorder.appendChild(pRobotRibon)
        pRobotRibon.style.display = "block"
    }
    // if no robot type is selected, an error occurs
    if (checkboxCheck.checked) {
        setTimeout(function () {
            // divRobotBorder.removeChild(divRobotMouthSpeak)
            divRobotMouthSpeak.style.display = "none"
            pRobotRibon.style.display = "none"
            //divRobotBorder.removeChild(pRobotRibon)
        }, 10000)
    }


    if (checkboxWinks.checked) {

        divRobotEyeLeft.classList.remove("robotEyeLeft");
        divRobotEyeLeft.classList.add("robotEyeLeftWinks");
    }
    if (countButtonClick >= 1) {
        buttonNext.style.display = "block"
        buttonPrevious.style.display = "block"
    } else {
        console.log("problem");
    }

    //Button Click Messages Input "Send" 
    messagesInputSend.addEventListener("click", (e) => {
        e.preventDefault();
        if (messagesInput.value === "") {
            alert("Please type message")
        } else {
            dataMessage(messagesInput)
         
        }
    })
    items.push(robotObject)
    slides = document.querySelectorAll(".liSectionForm");
    countButtonClick++
}


function createElementRobotTitle(element, classNames, title, id) {
    element.setAttribute("class", classNames);
    element.textContent = title;
    element.id = id
}

function creatElementRobotPhrase(element, classNames, phrase) {
    element.setAttribute("class", classNames);
    element.textContent = phrase;
}
// Function for createElement robot body male   
function divCreateElementRobotBody(element, classNames, color, id) {
    element.setAttribute("class", classNames);
    element.setAttribute("style", `border-top: 63px solid${color};`)
    element.id = id
}
//  Function for createElement robot Skirt 
function divCreatElementfamaleRobotSkirt(element, classNames, color) {
    element.setAttribute("class", classNames);
    element.setAttribute("style", `border-bottom: 34px solid ${color};`);

}
// Function for createElement robot     
function divCreateElementRobot(element, classNames, color, id) {
    element.setAttribute("class", classNames);
    element.setAttribute("style", `background-color:${color};`)
    element.id = id
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
    } else {
        textTalk = "";
    }
}
//A function that performs the effect of "jumping"   
function jumpTextTable() {
    if (checkboxJump.checked) {
        textJump = "can jump";
    } else {
        textJump = "";
    }
   
}




//   A function that performs the effect of "winking"     
function textWinksTable() {
    if (checkboxWinks.checked) {
        textWinks = "can winks";
    } else {
        textWinks = "";
    }
}

//Create data mesages 
function dataMessage(messagesInput) {
    console.log(items);


    let inputId = Number(messagesInput.getAttribute("id").slice(-1))
    const robotObjectss = Object.values(items[inputId - 1])
 
    let data = new Date();
    let dataHours = data.getHours();
    let dataMinutes = data.getMinutes();

    document.querySelectorAll(".messageRobotTalck").forEach((item) => {
        const messageRobotOne = document.createElement("div")
        messageRobotOne.className = "messageRobotOne"
        item.insertAdjacentElement("afterbegin", messageRobotOne);
        const messageRobotName = document.createElement("p"),
            messageRobotText = document.createElement("p"),
            messageSpanData = document.createElement("span")


        messageRobotName.className = "messageRobotName"
        messageRobotText.className = "messageRobotText"
        messageSpanData.className = "messageSpanData"


        messageRobotOne.appendChild(messageRobotName)
        messageRobotOne.appendChild(messageSpanData)
        messageRobotOne.append(messageRobotText)

        messageRobotName.textContent = robotObjectss[1];
        messageRobotName.style.color = robotObjectss[3];
        messageRobotText.textContent = messagesInput.value;
        messageSpanData.textContent = `${dataHours} : ${dataMinutes}`


    })

}

// Event listener on button name:"create" 
form.addEventListener("submit", (e) => {
    e.preventDefault();

    createRobotSection(robotObjectArrays)
    localStorage.setItem(`robot-${indexRobotLocalStorage}`, JSON.stringify(robotObjectArrays));
    console.log(robotObjectArrays);
    indexRobotLocalStorage++
    onChangeTextArea(checkboxCheck)
    slides = document.querySelectorAll(".liSectionForm");
    maxSlide++;
    curSlide++;
    moveToSlide()
   
    count++
    validateFormNameAlert(names, "Name can't be blank");
    validateFormSelectAlert(selectEmptySpace, "Please choose the type");
    validateFormInputColorAlert(colorInput, "Choose color")
    validateFormChekboxAlert(phrase, checkboxCheck, "Can't be blank")
    console.log(robotObjectArrays);
});


let slides = "";
let curSlide = 0;
let maxSlide = 0;

function moveToSlide() {
    slides.forEach((s, i) => {
        s.style.transform = `translateX(${80 * (i - curSlide + 1)}%)`

    });
}
function nextSlide() {
    maxSlide = slides.length;
    console.log(slides);
    console.log(maxSlide);
    if (curSlide === maxSlide) {
        curSlide = 1;
        slides.forEach((m) => {
            m.style.visibility = "visible"
        })

    } else {
        curSlide++;

    }
    // function move slide left and right
    moveToSlide();
}
function prevSlide() {
   
    slides.forEach((m) => {
        m.style.visibility = "visible"
    })

    if (curSlide === 1) {
        curSlide = maxSlide;

    } else {
        curSlide--;

    }
    moveToSlide();
}

//click Button "Previos"
buttonPrevious.addEventListener("click", (prevSlide))


let countss = 0;
//click Button "Next"
buttonNext.addEventListener("click", (nextSlide))

// Validate alert composition  
let validateFormNameAlert = (clas, mesage) => {
    if (clas.value == "") {
        errorMsgInputName.textContent = mesage;
        clas.style.border = "2px solid red";
    } else {
        errorMsgInputName.textContent = "";
        clas.style.border = "2px solid green";
    }

}

let validateFormSelectAlert = (clas, mesage) => {
    if (clas.value == "") {
        errorMsgSelectTayp.textContent = mesage;
        clas.style.border = "2px solid red";
    } else {
        errorMsgSelectTayp.textContent = ""
        clas.style.border = "2px solid green";
    }
}

let validateFormInputColorAlert = (clas, mesage) => {
    if (clas.value == "#e96126") {
        errorMsgSelectColor.textContent = mesage;
        clas.style.border = "2px solid red";
    } else {
        errorMsgSelectColor.textContent = "";
        clas.style.border = "2px solid green";
    }
}

let validateFormChekboxAlert = (clas, checkbox, mesage) => {
    if (checkbox.checked && clas.value == "") {
        errorTextArea.textContent = mesage;
        clas.style.border = "2px solid red";
    }
}



const buttonShowCreatedRobots = document.querySelector(".show-created-robots-button")

const scoreDiv = document.querySelector(".scoreDiv")
let tableHeaders = ["name", "taype", "color", "options"]
let robotCount = document.createElement("h3")
scoreDiv.append(robotCount)

//create robot table body
const createscoreBoardTable = () => {

    

    if (count > 0) {
        robotCount.textContent = `${count} :robots found`
        robotCount.className = "robotCount"

        // Remove all children from scoreboard div (if any)
        while (scoreDiv.firstChild) scoreDiv.removeChild(scoreDiv.firstChild)
        let scoreBoardTable = document.createElement("table")
        scoreBoardTable.className = "scoreBoardTable"

        let scoreBoardTableHead = document.createElement("thead")
        scoreBoardTableHead.className = "scoreBoardTableHead"

        let scoreBoardTableHeaderRow = document.createElement("tr")
        scoreBoardTableHeaderRow.className = "scoreBoardTableBodyRow"
        tableHeaders.forEach(header => {
            let scoreHeader = document.createElement("th")
            scoreHeader.textContent = header
            scoreBoardTableHeaderRow.append(scoreHeader)
        })
        scoreBoardTableHead.append(scoreBoardTableHeaderRow)
        scoreBoardTable.append(scoreBoardTableHead)
        let scoreBoardTableBody = document.createElement("tbody")
        scoreBoardTableBody.className = "scosreBoardTable-body"
        scoreBoardTable.append(scoreBoardTableBody)

        scoreDiv.append(scoreBoardTable)


    } else {
        robotCount.textContent = "No robots created yet"
        robotCount.className = "robotCount"
    }

}
// create robot table data
const appendScores = (singleScore) => {

    const scoreBoardTable = document.querySelector(".scoreBoardTable")
    let scoreBoardTableBodyRow = document.createElement('tr')
    scoreBoardTableBodyRow.className = "scoreBoardTableBodyRow"

    let usernameData = document.createElement('td')
    let hrefNameDataTag = document.createElement("a")
    hrefNameDataTag.textContent = `${singleScore.name} ${singleScore.id}`

    //Use function "eventListenerNameDataTableRow()"
    hrefNameDataTag.href = `javascript:eventListenerNameDataTableRow(${singleScore.id});`
    usernameData.append(hrefNameDataTag)
    let tapyData = document.createElement("td")
    tapyData.textContent = singleScore.tayp
    tapyData.className = "nameTableId"


    let colorData = document.createElement("td")
    let colorInput = document.createElement("input")
    colorInput.type = "color"
    colorInput.id = `${singleScore.id}`
    colorInput.value = singleScore.color
    colorData.append(colorInput)

    let optionsData = document.createElement("td")
    optionsData.textContent = `${singleScore.jump},${singleScore.talk},${singleScore.winks}`

    scoreBoardTableBodyRow.append(usernameData, tapyData, colorData, optionsData)
    scoreBoardTable.append(scoreBoardTableBodyRow)
}

function eventListenerNameDataTableRow(currentId) {
    let sumari = Array.from(track)
    const setAttributeSumari = (slide) => {

    }
    sumari.forEach(setAttributeSumari)


    function sarchArray(id) {
        return id.id == `${currentId}`

    }
    sumari.forEach((m) => {
        m.style.visibility = "hidden"
    })
    if (sumari.find(sarchArray)) {
        let result = sumari.find(sarchArray)
        result.style.transform = `translateX(${0}%)`

        result.style.visibility = "visible"

    }

  

}

//Click button "ShowCreatedRobots"
buttonShowCreatedRobots.addEventListener("click", (e) => {
    e.preventDefault()

    createscoreBoardTable()
    if (count > 0) {
        for (const score of robotObjectArrays) {
            appendScores(score)
        }
    }

})

buttonClearLocalStorage.addEventListener("click", (e)=>{
    e.preventDefault()
    localStorage.clear()
})
console.log(localStorage.length);

if(localStorage.length >= 1){
   
   
for (let i = 0; i < localStorage.length; i++) {
    var localRobot =[] ;
    var myObject=[{}];
    var keyString =localStorage.key(i)
     localRobot = localStorage.getItem(keyString)
     console.log(i);
     console.log(localRobot);
    var deserializationRobotData =[]
    deserializationRobotData= JSON.parse(localRobot)
    
     
 
     myObject[i] = deserializationRobotData[i];
       console.log(deserializationRobotData);
    createRobotSection(deserializationRobotData)
     console.log(myObject[i].id);
     count++
}
    
}