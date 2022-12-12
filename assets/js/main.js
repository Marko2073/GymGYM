let hamburger=document.querySelector("#hamburger");
let navMenu=document.querySelector(".nav-menu");
hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
window.addEventListener("scroll",()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
})
window.onclick = function(event) {
	if (event.target != hamburger) {
		hamburger.classList.remove("active");
		navMenu.classList.remove("active");
	
	}
  }

let links=['Home','Trainers','Schedule','Contact','About'];
let paths=['/GymGYM/index.html','/GymGYM/index.html#trainers','/GymGYM/index.html#schedule','/GymGYM/index.html#contact-us','/GymGYM/about.html'];
navMenu.innerHTML="";

for(let i=0; i<links.length;i++)
{
    navMenu.innerHTML+=`<li class="nav-item">
    <a href="${paths[i]}" class="nav-link">${links[i]}</a></li>`
}

let schedueTable=document.querySelector("#schedule_table");

let Training=["Strength Training","Muscle Training","Power Training"];
let Time=["10:00AM - 18:30AM","10:00AM - 19:00AM","08:00AM - 20:00AM"];
let Trainer=["Bret D. Bowers","Hector T. Daigl","Paul D. Newman"];
schedueTable.innerHTML+=`<tbody>`;
for(let i=0; i<Time.length;i++)
{
    schedueTable.innerHTML+=`<tr>
                            <td class="day-time">${Training[i]}</td>
                            <td class="monday ts-item show" data-tsmeta="monday">${Time[i]}</td>
                            <td>${Trainer[i]}</td>                                     
                        </tr>`
}
schedueTable.innerHTML+=`</tbody>`;

let features_items=document.querySelector(".features-items");
let features_items1=document.querySelector(".features-items1");
features_items.innerHTML="";
features_items1.innerHTML="";
let icons1=["assets/images/features-first-icon.png","assets/images/features-first-icon.png","assets/images/features-first-icon.png"];
let headings1=["Basic Fitness","Bodybuilding","Cardio training"];
let icons=["assets/images/features-first-icon.png","assets/images/features-first-icon.png","assets/images/features-first-icon.png"];
let headings=["Full body workout","Functional training","Bodypump"];
let aboutPrograms1=["The program called body toning is typically for women, which emphasizes those parts of the female body that are first affected by cellulite and fat deposits.",
                    "Bodybuilding is a sport that is based on the development of harmonious muscle musculature or the aspiration to bring our body to perfection.",
                    "Cardio training activates large muscle groups, and the exercise intensity is adjusted to a range of 55-90% of the maximum heart rate calculated for each individual."];
let aboutPrograms=["Full body workout is quality training for engaging the muscles of the whole body. It is a fitness program that is a combination of cardio and strength exercises.",
                    "The program is intended for everyone. The trainer is there to take care of the regularity of your movement, and to adapt each exercise to your physical form.",
                    "The combination of science-backed movements, great music and motivating instructors will allow you to achieve more than when you train alone."];
for(let i=0;i<icons1.length;i++)
{features_items.innerHTML+=`
    <li class="feature-item">
    <div class="left-icon">
        <img src="${icons1[i]}" alt="First One">
    </div>
    <div class="right-content">
        <h4>${headings1[i]}</h4>
        <p>${aboutPrograms1[i]}</p>
    </div>
    </li>`;

}
for(let i=0;i<icons.length;i++)
{features_items1.innerHTML+=`
    <li class="feature-item">
    <div class="left-icon">
        <img src="${icons[i]}" alt="First One">
    </div>
    <div class="right-content">
        <h4>${headings[i]}</h4>
        <p>${aboutPrograms[i]}</p>
    </div>
    </li>`;

}

var trainerS = document.getElementById('trainer');
	var trainers = ['Choose...', 'Bret D. Bowers', 'Hector T. Daigl', 'Paul D. Newman'];
	var subjectValues = ['choose', '1', '2', '3'];

	for (let i = 0; i < trainers.length; i++) {
		let option = document.createElement('option');
		option.append(trainers[i]);
		option.setAttribute('value', subjectValues[i]);
		trainerS.appendChild(option);
	}
var programS = document.getElementById('program');
	var programs = ['Choose...', 'Basic Fitness', 'Bodybuilding', 'Cardio Training', 'Full Body Workout', 'Functional Training', 'Bodypump'];
	var programsValues = ['choose', '1', '2', '3', '4', '5', '6'];

	for (let i = 0; i < programs.length; i++) {
		let option = document.createElement('option');
		option.append(programs[i]);
		option.setAttribute('value', programsValues[i]);
		programS.appendChild(option);
	}


	const fullName = document.getElementById('name');
	const email = document.getElementById('email');
	const trainer = document.getElementById('trainer');
	const program = document.getElementById('program');
	const message = document.getElementById('message');
	const checkBox = document.getElementById('agree');
	const submit = document.getElementById('submit');
	var errorMessages = document.querySelectorAll('#form span');

	var nameChc = false;
	var emailChc = false;
	var selectChc = false;
	var programChc = false;
	var messageChc = false;
	var checkBoxChc= false;

	var nameRegex = /^[A-ZČĆŽĐŠ][a-zćčžđš]{1,14}\s([A-ZČĆŽĐŠ][a-zćčžđš]{1,14})?\s?[A-ZČĆŽŠĐ][a-zćčžđš]{1,19}$/;
	var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	//Check name

	function checkName() {
		if (fullName.value.match(nameRegex)) {
			fullName.classList.remove('fail')
			fullName.classList.add('success');
			errorMessages[1].textContent = "";
			nameChc = true;
		} else if (fullName.value.length < 1) {
			errorMessages[1].textContent = "Field can't be empty.";
			nameChc = false;
		} else {
			errorMessages[1].textContent = "Change the format of the name. Example: Marko Markovic";
			nameChc = false;
		}
	}

	fullName.addEventListener('focus', () => {
		fullName.classList.add('fail');
	});

	fullName.addEventListener('blur', checkName);

	//Check email

	function checkEmail() {
		if (email.value.match(emailRegex)) {
			email.classList.remove('fail')
			email.classList.add('success');
			errorMessages[3].textContent = "";
			emailChc = true;
		} else if (email.value.length < 1) {
			errorMessages[3].textContent = "Field can't be empty.";
			emailChc = false;
		} else {
			errorMessages[3].textContent = "Change the format of the email. Example: someone@gmail.com";
			emailChc = false;
		}
	}

	email.addEventListener('focus', () => {
		email.classList.add('fail');
	});

	email.addEventListener('blur', checkEmail);

	//trainer check

	function checkTrainer() {
		let selectedValue = trainer.options[trainer.selectedIndex].value;
		if (selectedValue == "choose") {
			trainer.classList.add('fail');
			errorMessages[5].textContent = "Please choose the trainer";
			selectChc = false;
		} else {
			trainer.classList.remove('fail');
			trainer.classList.add('success');
			errorMessages[5].textContent = "";
			selectChc = true;
		}
	}

	trainer.addEventListener('blur', checkTrainer);

	function checkProgram() {
		let selectedValue = program.options[program.selectedIndex].value;
		if (selectedValue == "choose") {
			program.classList.add('fail');
			errorMessages[7].textContent = "Please choose the program";
			programChc = false;
		} else {
			program.classList.remove('fail');
			program.classList.add('success');
			errorMessages[7].textContent = "";
			programChc = true;
		}
	}

	program.addEventListener('blur', checkProgram);

	//Message check


	function checkMessage() {
		if (message.value < 1) {
			errorMessages[9].textContent = "Field can't be empty.";
			message.classList.add('fail');
			messageChc = false;
		} else {
			errorMessages[9].textContent = "";
			message.classList.remove('fail');
			message.classList.add('success');
			messageChc = true;
		}
	}

	message.addEventListener('blur', checkMessage);

	//Checkbox check

	function checkCheckbox() {
		if (checkBox.checked) {
			checkBoxChc = true;
			errorMessages[11].textContent = "";
		} else {
			errorMessages[11].textContent = "You have to agree in order to send.";
		}
	}

	//Submit check

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		checkName();
		checkEmail();
		checkTrainer();
		checkProgram();
		checkMessage();
		checkCheckbox();
		if (nameChc && emailChc && selectChc && programChc && messageChc && checkBoxChc) {
			alert("Successfully sent!");
			setTimeout("location.reload(true);", 0);
		}
	});




