//creating shapedata objects
const shapeData = {
    circle: {
    label:"2.Enter the Radius",
    name1:"CIRCLE",
    propertyArray:["RADIUS","AREA","PERIMETER"],
      propertys:["r","𝝅r2","2𝝅r"],
      side:0,
      area: () =>  Math.PI * (inputval ** 2),
      perimeter: () =>2 * Math.PI * inputval,
    },
    square: {
      label:"2. Enter the Side",
      name1:"SQUARE",
      propertyArray:["SIDE","AREA","PERIMETER"],
      propertys:["s","a*a","4*a"],
      side:0,
      area: () => inputval ** 2,
      perimeter: () =>inputval * 4,
    },
    triangle: {
      label:"2. Enter Side(Base & Height)",
      name1:"EQUILATERAL TRIANGLE",
      propertyArray:["SIDE","AREA","PERIMETER"],
      propertys:["s","0.4333*s*s","3*s"],
      side:0,
      
      area: () =>(inputval * Math.sqrt(3)) / 4,
      perimeter: () => inputval * 3,
    },
}
// intiallizing the all tags
const sections = document.querySelectorAll("section");
const shapeSection = document.querySelector("#select-shape");
const valueSection = document.querySelector("#value-section");
const resultSection = document.querySelector("#result");
const shapeButtons = document.querySelectorAll(".shape");
const nextButton = document.querySelector("#next-btn");
const valueInput = document.querySelector("#value-input");
const calButton=document.querySelector("#calculate-btn")
const heading=document.querySelector("#heading")
const heading1=document.querySelector("#shapename")
const startagain=document.querySelector("#start-again")
const tickmarks=document.querySelectorAll(".tick");
//checking the clicked button and shape and display the next button
function shapeFun(id){
    
    selectedShape=id;
    heading.innerHTML=shapeData[selectedShape].label;
    nextButton.style.display="block";
    tickmarks.forEach((tick)=>{
      tick.style.display="none";
    
    })
    document.querySelector("#"+selectedShape+ " .tick").style.display = "block";
}

//next button event listener
function nextBtn(id){
    shapeSection.style.display="none";
    valueSection.style.display="block";

}
//creating an empty table

table=document.querySelector("#table");
function cal(id){
    inputval=valueInput.value;
    if(valueInput.value==""){
        alert("please enter the number");
        table.innerHTML=""

    }
    else{
        valueSection.style.display="none";
        resultSection.style.display="block";
        table.innerHTML=""
      };
  

    sectionOneDiv=document.querySelector("#"+selectedShape);
    sectionTwoDiv=document.querySelector(".shape1")
    sectionTwoDiv.setAttribute("id",selectedShape)
    table=document.querySelector("#table");
    propertycalArray=[inputval,(shapeData[selectedShape].area()).toFixed(2)+" sq cm",(shapeData[selectedShape].perimeter()).toFixed(2)+" sq "];

    heading1.innerHTML=shapeData[selectedShape].name1
    for(i=0;i<3;i++){
        row=document.createElement("div");
        row.setAttribute("class","side");
        var col1=document.createElement("div");
        col1.setAttribute("class","property");
        col1.style.color="white";
        col1.innerHTML=shapeData[selectedShape].propertyArray[i]
        var col2=document.createElement("div");
        col2.setAttribute("class","formula");
        col2.style.color="white";
        col2.innerHTML=shapeData[selectedShape].propertys[i]
        var col3=document.createElement("div");
        col3.setAttribute("class","values");
        col3.style.color="white";
        col3.innerHTML=propertycalArray[i]
        row.append(col1,col2,col3)
        table.append(row)
    }
    
}
function startAgain(id){
  resultSection.style.display="none"
  shapeSection.style.display="block"
  nextButton.style.display="none"
  valueInput.value=""
  table.innerHTML=""
  tickmarks.forEach((tick)=>{
    tick.style.display="none";
  
  })
  
}