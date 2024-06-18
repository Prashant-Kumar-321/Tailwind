const selectOption = document.querySelector(".select-option");

const content = document.querySelector(".content"); 

const options = document.querySelectorAll(".content .options ul li");

const selectedValue = document.querySelector('#value'); 

const optionSearchField = document.querySelector('#option-search'); 



function hideShowOptions(event){
	/* Don't propagate this event to document */
	event.stopPropagation(); 

	if(content.style.display === "none" || content.style.display === ""){
		content.style.display = "block"; 
	}else{
		content.style.display = "none";
	}
	/* Add 'active' if not present and remove if present */
	selectOption.classList.toggle('active'); 
}; 


/* Hide the options list if it is visible */
const hideOptions = event => {
	if(content.style.display === 'block'){
		content.style.display = 'none'; 
		selectOption.classList.toggle('active'); 
	}
}; 

selectOption.onclick = hideShowOptions; 

document.addEventListener("click", hideOptions);

/* When i click on options i don't want this event propagate to doument */
content.addEventListener('click', (event)=>{
	event.stopPropagation(); 
}); 


options.forEach(option => {
	option.addEventListener('click', function(){
		const selectedOption = this.innerHTML;
		/* 'this' is pointing to the list time item which this event is associated with */
		selectedValue.value = selectedOption; 
	}); 
});

optionSearchField.onkeyup = function () {
	const target = this.value.toUpperCase(); 
	options.forEach(option => {
		textValue = option.textContent.toUpperCase();
		if(textValue.indexOf(target) > -1){
			option.style.display = 'block'; 
		}else{
			option.style.display = 'none'; 
		}
	}); 
}; 


/* To Do: 
	1. Refresh button 
	2. diffrenet them to page 
*/
