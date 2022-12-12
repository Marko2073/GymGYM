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

var select = document.getElementById('trainer');
	var trainers = ['Choose...', 'Bret D. Bowers', 'Hector T. Daigl', 'Paul D. Newman'];
	var subjectValues = ['choose', '1', '2', '3'];

	for (let i = 0; i < trainers.length; i++) {
		let option = document.createElement('option');
		option.append(trainers[i]);
		option.setAttribute('value', subjectValues[i]);
		select.appendChild(option);
	}


const fullName = document.getElementById('name');
	const email = document.getElementById('email');
	const address = document.getElementById('address');
	const subject = document.getElementById('trainer');
	const message = document.getElementById('message');
	const checkBox = document.getElementById('agree');
	const submit = document.getElementById('submit');
	var errorMessages = document.querySelectorAll('#form span');

	var nameApprove = false;
	var emailApprove = false;
	var selectApprove = false;
	var messageApprove = false;
	var checkBoxApprove = false;

	var nameRegex = /^[A-ZČĆŽĐŠ][a-zćčžđš]{1,14}\s([A-ZČĆŽĐŠ][a-zćčžđš]{1,14})?\s?[A-ZČĆŽŠĐ][a-zćčžđš]{1,19}$/;
	var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	//Check name

	function checkName() {
		if (fullName.value.match(nameRegex)) {
			fullName.classList.remove('fail')
			fullName.classList.add('success');
			errorMessages[1].textContent = "";
			nameApprove = true;
		} else if (fullName.value.length < 1) {
			errorMessages[1].textContent = "Field can't be empty.";
			nameApprove = false;
		} else {
			errorMessages[1].textContent = "Change the format of the name. Example: Marko Markovic";
			nameApprove = false;
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
			emailApprove = true;
		} else if (email.value.length < 1) {
			errorMessages[3].textContent = "Field can't be empty.";
			emailApprove = false;
		} else {
			errorMessages[3].textContent = "Change the format of the email. Example: someone@gmail.com";
			emailApprove = false;
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
			selectApprove = false;
		} else {
			trainer.classList.remove('fail');
			trainer.classList.add('success');
			errorMessages[5].textContent = "";
			selectApprove = true;
		}
	}

	trainer.addEventListener('blur', checkTrainer);

	//Message check

	function checkMessage() {
		if (message.value < 1) {
			errorMessages[7].textContent = "Field can't be empty.";
			message.classList.add('fail');
			messageApprove = false;
		} else {
			errorMessages[7].textContent = "";
			message.classList.remove('fail');
			message.classList.add('success');
			messageApprove = true;
		}
	}

	message.addEventListener('blur', checkMessage);

	//Checkbox check

	function checkCheckbox() {
		if (checkBox.checked) {
			checkBoxApprove = true;
			errorMessages[9].textContent = "";
		} else {
			errorMessages[9].textContent = "You have to agree in order to send.";
		}
	}

	//Submit check

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		checkName();
		checkEmail();
		checkTrainer();
		checkMessage();
		checkCheckbox();
		if (nameApprove && emailApprove && selectApprove && messageApprove && checkBoxApprove) {
			alert("Successfully sent!");
			setTimeout("location.reload(true);", 0);
		}
	});



