//FOOTER CREATED
const aFooter = document.createElement('footer');
aFooter.className = 'footer';
aFooter.setAttribute("id", "myfooter");
document.body.appendChild(aFooter);
console.log(aFooter);

//GET CURRENT YEAR
var today = new Date();
var thisYear = today.getFullYear();
console.log(thisYear);

//FIND FOOTER ELEMENT
var newFooter = document.querySelector("footer");
console.log(newFooter);

//CREATE COPYRIGHT
var aCopyright = document.createElement("p");
const copyrightSymbol = '\u00A9';
var copyrightText = copyrightSymbol + "Gaston Tarque " + thisYear;
aCopyright.innerHTML = copyrightText;
console.log(aCopyright);

//APPEND COPYRIGHT TO FOOTER
aFooter.appendChild(aCopyright); //append copyright paragraph
console.log(aFooter); 

//SKILLS SECTION
const skills =["JavaScript", "Mathematica", "Microsoft Suite", "LaTex", "Salesforce", "SQL", "Tableu"];

//FIND SKILLS SECTION AND UNORDERED LIST
const skillsSection = document.querySelector('#skills'); //select skills selection by ID
var skillsList = skillsSection.querySelector("ul"); //select <ul> element inside skills 

//LOOP THRU SKILLS ARRAY AND CREATE <li> FOR EACH
for (let i = 0; i < skills.length; i++){
    var skill = document.createElement("li"); //create <li> for each skill
    skill.innerText = skills[i]; //set inner text of li to current skill
    skillsList.appendChild(skill); //append <li> to the <ul>
}