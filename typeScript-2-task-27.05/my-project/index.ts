
    // Const  for validating instance variables 
        const form = document.querySelector(".form")as HTMLFormElement,
              names = document.querySelector<HTMLInputElement>("input[name='name']");
        const selectEmptySpace = document.querySelector<HTMLInputElement>(".select-tayp-selector");
        const colorInput = document.querySelector<HTMLInputElement>(".input-selector-color");
        const phrase = document.querySelector<HTMLInputElement>(".textarea");
        const checkboxCheck = document.querySelector<HTMLInputElement>("input[name='robotTalk']"),
              checkboxJump = document.querySelector<HTMLInputElement>("input[name='robotJump']"),
              checkboxWinks = document.querySelector<HTMLInputElement>("input[name='robotWinks']"),
              errorMsgInputName = document.querySelector<HTMLSpanElement>(".errorInputName"),
              errorMsgSelectTayp = document.querySelector<HTMLSpanElement>(".errorSelectTayp"),
              errorMsgSelectColor = document.querySelector<HTMLSpanElement>(".errorSelectColor"),
              errorTextArea = document.querySelector<HTMLSpanElement>(".errorTextArea")

          const liNew = document.createElement("li")as HTMLLIElement,
              inputJump = document.querySelector<HTMLInputElement>(".input-checkbox-jump"),
              buttonNext = document.querySelector<HTMLButtonElement>(".buttonNext"),
              buttonPrevious= document.querySelector<HTMLButtonElement>(".buttonPrevious"),
              liWraper = document.querySelector<HTMLUListElement>(".ulWraper"),
              divTextWraper = document.querySelector<HTMLDivElement>(".text-wrap"),
              liInstnc = document.querySelector<HTMLUListElement>(".liSectionForm "),
              messageInputSends = document.querySelector<HTMLInputElement>(".messageInputSend"),
              divRobotLegLeft = document.querySelector<HTMLDivElement>(".robotLegLeft"),
              divRobotLegRight = document.querySelector<HTMLDivElement>(".robotHandRight"),
              pRobotRibon = document.querySelector<HTMLDivElement>(".bubble"),
              divRobotBorder = document.querySelector<HTMLDivElement>(".robot"),
              divfemaleRobotSkirt = document.querySelector<HTMLDivElement>(".femaleRobotShelf"),
              divRobotMouthSpeak = document.querySelector<HTMLDivElement>(".robotMouthSpeak"),
              divRobotEyeLeft = document.querySelector<HTMLDivElement>(".robotEyeLeft")
          const ulWraper= document.querySelector<HTMLUListElement>(".ulWraper");
          const messagesInputt = document.querySelector<HTMLInputElement>(".messageInput");
              interface robotUser{
                id:number;  
                name:string;
                type?:string;
                color:string;
                phrase:string;
                talk:string;
                jump:string;
                winks:string;
            }   
        let countIdRobot:number;
        let robotObjectArray:[{}];
        let countClick:number;
        let countButtonClick:number;
        let messageDataCopy = [{}];
        let count:number;
        let items:[{}];
        let track:NodeListOf<HTMLElement>;
        let textJump:string;
        let textWinks:string;
        let textTalk:string;
        let countSection:number;
        let  countupStyleVisible:number = 0;
        let counteDownStyleVisible:number = 0;
       
        let robotObject:robotUser;

function createRobotSection (robotObjectArray:[{}],names:HTMLInputElement){
    textTalkTable()
    jumpTextTable()
    textWinksTable()       
    // Const  for robot createlement instance variables   section id="slide-1" class="factory-section"
        const liRobotFirstSectionChaild = document.createElement("li")as HTMLLIElement;
        const  messageRobotTalck = document.createElement("div")as HTMLDivElement;
               messageRobotTalck.className = "messageRobotTalck"

            const sectionRobotFactory = document.createElement("section")as HTMLElement,
                  h1TagNameRobot = document.createElement("h1")as HTMLElement,
                  formWraper = document.createElement("form")as HTMLFormElement,
                  divRobotBorder = document.createElement("div")as HTMLDivElement,
                  divRobotParagrphForm = document.createElement("div")as HTMLDivElement,
                  divRobotHead = document.createElement("div")as HTMLDivElement,
                  divRobotEyeLeft = document.createElement("div")as HTMLDivElement,
                  divRobotEyeRight = document.createElement("div")as HTMLDivElement,
                  divRobotMouth = document.createElement("div")as HTMLDivElement,
                  divRobotMouthSpeak = document.createElement("div")as HTMLDivElement,
                  divRobotBody = document.createElement("div")as HTMLDivElement,
                  divfemaleRobotSkirt = document.createElement("div")as HTMLDivElement,
                  divRobotHandLeft = document.createElement("div")as HTMLDivElement,
                  divRobotHandRight = document.createElement("div")as HTMLDivElement,
                  divRobotLegLeft = document.createElement("div")as HTMLDivElement,
                  divRobotLegRight = document.createElement("div")as HTMLDivElement,
                  hRobotTitle = document.createElement("h4")as HTMLElement,
                  pRobotRibon = document.createElement("p")as HTMLParagraphElement
                  
                  countIdRobot++
                 
                let robotObjects:any = {id:countIdRobot,
                    name:`${names.value}`,
                    type:`${selectEmptySpace}`,
                    color:`${colorInput}`,
                    phrase:`${phrase}`,
                    talk:`${textTalk}`,
                    jump:`${textJump}`,
                    winks:`${textWinks}`
                    }
                    robotObject = {
                        id:parseFloat(robotObjects.id),
                        name:String(robotObjects.name),
                        type:String(robotObjects.type),
                        color:String(robotObjects.color),
                        phrase:String(robotObjects.phrase),
                        talk:String(robotObjects.talk),
                        jump:String(robotObjects.jump),
                        winks:String(robotObjects.winks)

                    }
                    console.log(robotObject);
                    
                     robotObjectArray[countButtonClick] = robotObject;
                  
                  liRobotFirstSectionChaild.className = "liSectionForm";
                  sectionRobotFactory.className = "factory-section";
                  h1TagNameRobot.className = "basic-robot-title";
                   h1TagNameRobot.textContent = "Basic Robot";
                   divRobotBorder.className = "robot";
                   divRobotParagrphForm.className = "text-wrap";
                 formWraper.className = "content-wrapper";

                 liRobotFirstSectionChaild.setAttribute("id",`${countIdRobot}`);
                  sectionRobotFactory.setAttribute("id",`${countIdRobot}`);
                  h1TagNameRobot.setAttribute("id",`${countIdRobot}`);
                  formWraper.setAttribute("id",`${countIdRobot}`);

                  const messagesLabel = document.createElement("label"),
                  messagesInputt = document.createElement("input"),
                  messagesInputSend = document.createElement("button"),
                  messageHeader = document.createElement("header"),
                  messageH4 = document.createElement("h4")
                 
        
                    messagesLabel.className = "messagesLabel";
                  messagesLabel.textContent = "send messages";
                  messagesInputt.className = "messageInput";
                  messagesInputt.setAttribute("id",`${countIdRobot}`);
                  messagesInputt.placeholder = "write message here";
                  messagesInputSend.className = "messageInputSend";
                  messagesInputSend.textContent = "send";
                  messageH4.className = "messageH4";
                  messageH4.textContent = "Last messages";
                 
                 
                  
                    divCreateElementRobot(divRobotHead,"robotHead",robotObject.color,robotObject.id)
                    divCreateElementRobot(divRobotEyeLeft,"robotEyeLeft",robotObject.color,robotObject.id)
                    divCreateElementRobot(divRobotEyeRight,"robotEyeRight",robotObject.color,robotObject.id)
                    divCreateElementRobot(divRobotMouth,"robotMouth",robotObject.color,robotObject.id)
                    divCreateElementRobot(divRobotMouthSpeak,"robotMouthSpeak",robotObject.color,robotObject.id)
                    divCreateElementRobotBody(divRobotBody,"robotBody",robotObject.color,robotObject.id)
                    divCreateElementRobot(divRobotHandLeft,"robotHandLeft",robotObject.color,robotObject.id)
                    divCreateElementRobot(divRobotHandRight,"robotHandRight",robotObject.color,robotObject.id)
                    divCreateElementRobot(divRobotLegLeft,"robotLegLeft",robotObject.color,robotObject.id)
                    divCreateElementRobot(divRobotLegRight,"robotLegRight",robotObject.color,robotObject.id)
                    divCreatElementfamaleRobotSkirt(divfemaleRobotSkirt,"femaleRobotShelf",robotObject.color)
                    createElementRobotTitle(hRobotTitle,"title-robot1",robotObject.name,robotObject.id)
                    creatElementRobotPhrase(pRobotRibon,"bubble",robotObject.phrase)
                  
                ulWraper?.appendChild(liRobotFirstSectionChaild)
                liRobotFirstSectionChaild.appendChild(sectionRobotFactory)
                sectionRobotFactory.appendChild(h1TagNameRobot)
                h1TagNameRobot.appendChild(formWraper)
                formWraper.appendChild(divRobotBorder)
                divRobotBorder.appendChild(divRobotHead)
                  
                divRobotBorder.append(divRobotEyeLeft,divRobotEyeRight,divRobotMouth,divRobotBody,
                divRobotHandLeft,divRobotHandRight,divRobotLegLeft,divRobotLegRight,hRobotTitle)
                  
                formWraper.appendChild(divRobotParagrphForm)
                divRobotParagrphForm.appendChild(messagesLabel)
                divRobotParagrphForm.appendChild(messagesInputt)
                divRobotParagrphForm.appendChild(messagesInputSend)
                divRobotParagrphForm.appendChild(messageHeader)
                messageHeader.appendChild(messageH4)
                divRobotParagrphForm.appendChild(messageRobotTalck)


                track = document.querySelectorAll(".liSectionForm")
                  const slidess = Array.from(track)
                
                 console.log(slidess);
                  
                  
                  if (Number(liRobotFirstSectionChaild.getAttribute("id")) >= 1) {
                      
                        slidess[countupStyleVisible].setAttribute('style','visibility:visible')
                        slidess[countupStyleVisible].classList.add("curendSlide")
                        
                        
                    }   
                    if (Number(liRobotFirstSectionChaild.getAttribute("id"))) {
                        
                        slidess[counteDownStyleVisible].style.visibility = "hidden"
                        slidess[counteDownStyleVisible].classList.remove("curendSlide")
                        counteDownStyleVisible++
                        console.log(counteDownStyleVisible);
                        countupStyleVisible++
                        slidess[countupStyleVisible].style.visibility = "visible"
                        slidess[countupStyleVisible].classList.add("curendSlide")
                        
                    }
                console.log(liRobotFirstSectionChaild.id );
              console.log(countSection);

               //   validateFirstButtonClick(countButtonClick)
                
                  //functions initialize data options in teable  
                  if (checkboxJump?.checked ) {
                    divRobotLegLeft.classList.remove("robotLegLeft")
                      divRobotLegLeft.classList.add('jumpingLeg');
                      
                      divRobotLegRight.classList.remove("robotLegRight")
                      divRobotLegRight.classList.add("jumpingRight")
                      
                       
                  } 

                  if (robotObject.type ==="female" && checkboxCheck?.checked && phrase?.value != "" ) {
                    divRobotBorder.appendChild(pRobotRibon)
                  }else if(selectEmptySpace?.value == "male" && checkboxCheck?.checked && phrase?.value != "" ){
                    divRobotBorder.appendChild(pRobotRibon)
                    
                  }
                   if(robotObject.type === "female"){
                    divRobotBorder.appendChild(divfemaleRobotSkirt)
                  }
                  
                  
                  if (checkboxCheck?.checked && phrase?.value != "") {
                    divRobotBorder.appendChild(divRobotMouthSpeak)
                    divRobotBorder.appendChild(pRobotRibon)
                    pRobotRibon.style.display = "block"   
                  }
                  // if no robot type is selected, an error occurs
                  if (checkboxCheck?.checked) {
                       setTimeout(function(){
                       // divRobotBorder.removeChild(divRobotMouthSpeak)
                       divRobotMouthSpeak.style.display = "none"
                       pRobotRibon.style.display = "none"
                        //divRobotBorder.removeChild(pRobotRibon)
                       },10000)
                  }
                

                  if (checkboxWinks?.checked) {

                    divRobotEyeLeft.classList.remove("robotEyeLeft");
                    divRobotEyeLeft.classList.add("robotEyeLeftWinks");
                  }   
                  if (countButtonClick >= 1) {
                    buttonNext!.style.display = "block"
                     buttonPrevious!.style.display = "block"
                }else{
                     console.log("problem");
                 } 

            //Button Click Messages Input "Send" 
                  messagesInputSend.addEventListener("click", (e)=>{
                                e.preventDefault();
                                if (messagesInputt.value ==="") {
                                    alert("Please type message")
                                }else{
                                dataMessage(messagesInputt)
                                console.log(robotObjectArray);
                                }
                               }) 
                               items.push(robotObject)                   
}   


        function createElementRobotTitle(element:HTMLElement,classNames:string,title:string,id:number){
                 element.setAttribute("class",classNames);
                 element.textContent = title;
                 element.setAttribute("id",`${id}`)
        }  
    
        function creatElementRobotPhrase(element:HTMLElement,classNames:string,phrase:string){
            element.setAttribute("class",classNames);
            element.textContent = phrase;
        }
    // Function for createElement robot body male   
        function divCreateElementRobotBody(element:HTMLElement,classNames:string,color:string,id:number){
                element.setAttribute("class",classNames);
                element.setAttribute("style",`border-top: 63px solid${color};`)
                element.setAttribute("id",`${id}`)
        }
    //  Function for createElement robot Skirt 
        function divCreatElementfamaleRobotSkirt(element:HTMLElement,classNames:string,color:string){
            element.setAttribute("class",classNames);
            element.setAttribute("style",`border-bottom: 34px solid ${color};`);
            
        }
    // Function for createElement robot     
        function divCreateElementRobot(element:HTMLElement,classNames:string,color:string,id:number){
                 element.setAttribute("class",classNames);
                 element.setAttribute("style",`background-color:${color};`)
                 element.setAttribute("id",`${id}`) 
                 //element.cloneNode(true);
              }
      
       
   
    // Verification function phrase is cheked checkbox "can talk"
        function onChangeTextArea(checkboxCheck:HTMLInputElement){
            phrase!.disabled = checkboxCheck.checked ? false : true;
           
        }
      //    A function that performs the effect of "talking" to the ribbon and then stopping it  
        function textTalkTable():void{
            if (checkboxCheck?.checked) {
                textTalk = "can Talk";
            }else{
                textTalk = "";
            }
        }
   //A function that performs the effect of "jumping"   
        function jumpTextTable():void{
            if (checkboxJump?.checked) {
                textJump = "can jump";
            }else{
                textJump = "";
            }
        }
     
      
                
              
        //   A function that performs the effect of "winking"     
        function textWinksTable():void{
            if (checkboxWinks?.checked) {
                textWinks = "can winks";
            }else{
                textWinks = "";
            }
        }
      
        //Create data mesages 
         function dataMessage(messagesInput:HTMLInputElement) {
                    console.log(items);
                
                    
                    let inputId:number =  Number(messagesInputt?.getAttribute("id")!.slice(-1))
                    const robotObjectss = Object(items[inputId-1])
                    console.log(robotObjectss);
                    console.log();
                    let data = new Date();
                    let dataHours = data.getHours();
                    let dataMinutes =data.getMinutes(); 

                    document.querySelectorAll(".messageRobotTalck").forEach((item)=>{
                      const  messageRobotOne = document.createElement("div")
                      messageRobotOne.className = "messageRobotOne"
                      item.insertAdjacentElement("afterbegin", messageRobotOne );
                      const  messageRobotName =document.createElement("p"),
                             messageRobotText = document.createElement("p"),
                             messageSpanData = document.createElement("span")

                             
                             messageRobotName.className = "messageRobotName"
                             messageRobotText.className = "messageRobotText"
                             messageSpanData.className = "messageSpanData"

                             
                             messageRobotOne.appendChild(messageRobotName)
                             messageRobotOne.appendChild(messageSpanData)
                             messageRobotOne.append(messageRobotText)

                             messageRobotName.setAttribute("textContent",`${robotObjectss[1]}`);
                             messageRobotName.setAttribute("color",`${robotObjectss[3]}`);
                             messageRobotText.textContent = messagesInput.value;
                             messageSpanData.textContent = `${dataHours} : ${dataMinutes}`
                             

                    })
                   
                }
               
    // Event listener on button name:"create" 
                form?.addEventListener("submit", (e) => {
                e.preventDefault();
                
                createRobotSection (robotObjectArray,names!)
                onChangeTextArea(checkboxCheck!)
                slides = document.querySelectorAll(".liSectionForm");
                maxSlide++;
                curSlide++;
                moveToSlide()
                countButtonClick++
                count++
                validateFormNameAlert(names!,"Name can't be blank");
                validateFormSelectAlert(selectEmptySpace!,"Please choose the type");
                validateFormInputColorAlert(colorInput!,"Choose color")
                validateFormChekboxAlert(phrase!,checkboxCheck!,"Can't be blank")

        });
                  
          
            let slides:NodeListOf<HTMLElement>;
            let curSlide:number = 0;
            let maxSlide:number = 0;

        function moveToSlide(){
            slides.forEach((s, i) => {
                s.style.transform = `translateX(${80 * (i - curSlide + 1)}%)`
                
              });
        }
        function nextSlide() {
            maxSlide = slides.length;
            console.log(slides);
            if (curSlide === maxSlide) {
              curSlide = 1;
             slides.forEach((m)=>{
                 m.style.visibility ="visible"
             })
              
            } else {
              curSlide++;
             
            }
            // function move slide left and right
            moveToSlide();
          }
          function prevSlide() {
            console.log(slides);
            slides.forEach((m)=>{
                m.style.visibility ="visible"
            })

            if (curSlide === 1) {
              curSlide = maxSlide;
            
            } else {
              curSlide--;
           
            }
            moveToSlide();
          }

        //click Button "Previos"
        buttonPrevious?.addEventListener("click",(prevSlide))

       
        let countss = 0;
        //click Button "Next"
        buttonNext?.addEventListener("click", (nextSlide)) 
        
       // Validate alert composition  
        let validateFormNameAlert = (clas:HTMLInputElement,mesage:string)=>{
                if ( clas.value == ""){
                    errorMsgInputName!.textContent= mesage;
                    clas.style.border = "2px solid red";
                }else{
                    errorMsgInputName!.textContent= "";
                    clas.style.border = "2px solid green";
                }

        }
        
        let validateFormSelectAlert = (clas:HTMLInputElement,mesage:string)=>{
            if (clas.value == "") {
                errorMsgSelectTayp!.textContent = mesage; 
                clas.style.border = "2px solid red";
            }else{
                errorMsgSelectTayp!.textContent = ""
                    clas.style.border = "2px solid green";
                }
        }

        let validateFormInputColorAlert = (clas:HTMLInputElement,mesage:string)=>{
            if (clas.value == "#e96126") {
                errorMsgSelectColor!.textContent = mesage;
                clas.style.border = "2px solid red";
            }else{
                errorMsgSelectColor!.textContent="";
                clas.style.border = "2px solid green";
                }
        }

        let validateFormChekboxAlert =(clas:HTMLInputElement,checkbox:HTMLInputElement,mesage:string)=>{
            if (checkbox.checked && clas.value=="") {
                errorTextArea!.textContent = mesage;
                clas.style.border = "2px solid red";
            }  
        }
      
        
      
      const buttonShowCreatedRobots = document.querySelector(".show-created-robots-button")as HTMLButtonElement;

        const scoreDiv = document.querySelector(".scoreDiv")as HTMLDivElement
        let tableHeaders = ["name","taype","color","options"]
        let robotCount = document.createElement("h3")
        scoreDiv.append(robotCount)

        //create robot table body
        const createscoreBoardTable = ():void =>{
            
            console.log(robotObjectArray);
          
            
            if (count > 0 ) {
                 robotCount.textContent = `${count} :robots found`
                 robotCount.className = "robotCount"

// Remove all children from scoreboard div (if any)
while (scoreDiv.firstChild) scoreDiv.removeChild(scoreDiv.firstChild)
let scoreBoardTable = document.createElement("table")
    scoreBoardTable.className = "scoreBoardTable"

let scoreBoardTableHead = document.createElement("thead")
     scoreBoardTableHead.className = "scoreBoardTableHead"

let  scoreBoardTableHeaderRow = document.createElement("tr")
     scoreBoardTableHeaderRow.className = "scoreBoardTableBodyRow"
tableHeaders.forEach(header =>{
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


            }else{
                robotCount.textContent = "No robots created yet"
                robotCount.className = "robotCount"
            }

    }
    // create robot table data
    const appendScores = (singleScore:any) => {
       
        const scoreBoardTable = document.querySelector<HTMLTableRowElement>(".scoreBoardTable")
        let scoreBoardTableBodyRow = document.createElement('tr')as HTMLTableRowElement;
        scoreBoardTableBodyRow.className = "scoreBoardTableBodyRow"
       
        let usernameData = document.createElement('td')as HTMLTableCellElement;
        let hrefNameDataTag = document.createElement("a")as HTMLAnchorElement;
            hrefNameDataTag.textContent = `${singleScore.name} ${singleScore.id}`
         
            //Use function "eventListenerNameDataTableRow()"
            hrefNameDataTag.href = `javascript:eventListenerNameDataTableRow(${singleScore.id});`
            usernameData.append(hrefNameDataTag)
        let tapyData = document.createElement("td")
        const typeData = document.querySelector<HTMLTableCellElement >(".nameTableId");   
            typeData?.setAttribute("textContent",`${singleScore.type}`);
            tapyData.className = "nameTableId";
     

        let colorData = document.createElement("td")as HTMLTableCellElement;
        let colorInput = document.createElement("input")as HTMLInputElement;
            colorInput.type = "color"
            colorInput.id = `${singleScore.id}`
            colorInput.value = singleScore.color
            colorData.append(colorInput)
            
        let optionsData = document.createElement("td")as HTMLTableCellElement;
            optionsData.textContent = `${singleScore.jump},${singleScore.talk},${singleScore.winks}`
        
            scoreBoardTableBodyRow.append(usernameData,tapyData,colorData,optionsData)
            scoreBoardTable?.append(scoreBoardTableBodyRow)
    }

    function eventListenerNameDataTableRow(currentId:number):void{
        let sumari =Array.from(track)
        const setAttributeSumari = ()=>{
           
        }
        sumari.forEach(setAttributeSumari)
        
        
        console.log(sumari);
        function sarchArray(id:HTMLElement){
            return id.id == `${currentId}`
            
         }
         sumari.forEach((m)=>{
            m.style.visibility ="hidden"
        })
          if (sumari.find(sarchArray)) {
              let result:HTMLElement;
              result = sumari.find(sarchArray)!
              result.style.transform = `translateX(${0}%)`
              
              result.style.visibility = "visible"
            
              console.log(result);
          }

         console.log();
         console.log("dadada");
     
    }

    //Click button "ShowCreatedRobots"
    buttonShowCreatedRobots.addEventListener("click", (e)=>{
     e.preventDefault()
    
     createscoreBoardTable()
     if (count > 0) {
        for (const score of robotObjectArray) {
            appendScores(score)
         }
     }
     
    })