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
const skills =["JavaScript", "Mathematica", "Microsoft Suite", "LaTex", "Salesforce", "SQL", "Tableu", "Spanish", "Portuguese"];

//FIND SKILLS SECTION AND UNORDERED LIST
const skillsSection = document.querySelector('#skills'); //select skills selection by ID
var skillsList = skillsSection.querySelector("ul"); //select <ul> element inside skills 

//LOOP THRU SKILLS ARRAY AND CREATE <li> FOR EACH
for (let i = 0; i < skills.length; i++){
    var skill = document.createElement("li"); //create <li> for each skill
    skill.innerText = skills[i]; //set inner text of li to current skill
    skillsList.appendChild(skill); //append <li> to the <ul>
}


//HANDLE MESSAGE FORM SUBMIT
//find form element by name attribute
//messageForm variable uses "DOM Selection" to select leave_message form by name attribute
const messageForm = document.querySelector('form[name="leave_message"]');

//EVENT LISTENER is added to handle form submit
messageForm.addEventListener('submit', function(event){
    //no page reload
    event.preventDefault();

    //GET VALUES from form
    const name = event.target.usersName.value;
    const email = event.target.usersEmail.value;
    const message = event.target.usersMessage.value;

    //LOG form
    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Message: ',  message);

    //FIND message section and ul
    const messageSection = document.querySelector('#messages'); //selects section
    const messageList = messageSection.querySelector('ul'); //selects ul list 

    //NEW <li> ELEMENT to hold userMessage
    const newMessage = document.createElement('li');

    //NEW <a> ELEMENT for usersName that links to email
    const userLink = document.createElement('a'); //clickable <a> tag
    userLink.href = `mailto:${name}`;  //sets 'href' attribute to mailto: name prefix
    userLink.innerText = name;  // name as clickable text

    //<SPAN> for userMessage
    const userMessage = document.createElement('span'); //new <span> tag for the message text
    userMessage.innerText = `: ${message}`; //sets text of <span> tag to be ': message'

    //BUTTON to remove message
    const removeButton = document.createElement('button'); //create removeButton
    removeButton.innerText = 'Remove'; //button text says "remove"
    removeButton.type = 'button'; //set button type to button

    //EVENT LISTENER to remove button
    removeButton.addEventListener('click', function() {
        const entry = removeButton.parentNode;  //grab the parent <li> element, holds entire userMessage
        entry.remove();  //removes <li> element from the DOM
    });

    //APPEND the user name link, message, and the remove button to <li>
    newMessage.appendChild(userLink);
    newMessage.appendChild(userMessage);
    newMessage.appendChild(removeButton);

    //APPEND the new <li> with the message to the <ul> 
    messageList.appendChild(newMessage); //adds the new message <li> item to the current <ul> in message section

    //clear form
    messageForm.reset();
});
////////////////////////////////LESSON 13//////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//DOM Selectors (grab html elements)
//DOM SELECTION for projectSection (parent) and for projectsList (child)
const projectSection = document.getElementById("projects"); //document is global variable then gets html element by id
//console.log("projectSection: ", projectSection);  //MUST CONSOLE LOG when interacting with html element to ensure match
 const projectsList = projectSection.querySelector("ul");  //querySelector can select by (classname . ), (tagname "ul"), (id #)
//console.log("projectsList: ", projectsList);  






//FETCH (get projects from github API) /FETCH REQUEST, then method pass it a function that returns the response JSON data
fetch("https://api.github.com/users/gastoncodesdreams/repos")
.then((response) => {          //pass response parameter into .then callback fnc
    return response.json();   //convert from json
})
.then((repositories) => {    //data is now a javascript object 
   
    // LOOP thru repos array and parse project data 
    for (let i= 0; i < repositories.length; i++){
        const project = repositories[i].name;          //GRAB project data, name is a string [index array to get specific object]
        const li = document.createElement("li");       //CREATE DOM (html) elements
        li.innerText = project;                       // INSERT project data into DOM elmnt i.e <li> gastoncodesdreams </li>
        projectsList.appendChild(li);                 // ADD DOM elmnts to page

    }
   // console.log("repositories: ", repositories);
}).catch((error) => {
    const errorMessage = document.createElement("p");  //CREATE error message, add paragraph tab
    errorMessage.innerText = error.message;            //SET innertext to error.message
    errorMessage.classList.add("error");               //ADD class called error
    projectSection.appendChild(errorMessage);
});