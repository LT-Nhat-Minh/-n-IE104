let slider = document.querySelector('.slider')
let list = document.querySelector('.slider_list');
let items = document.querySelectorAll('.slider_list_item');
let prev = document.getElementsByClassName('b_prev')[0];
let next = document.getElementsByClassName('b_next')[0];
// let test = document.getElementById('test');
// let test2 = document.getElementById('test2');

let active = 0;
let lengthItems = items.length -1;

next.onclick = function(){
    if(items[active+2].offsetLeft <= list.offsetWidth - slider.offsetWidth){
        active = active + 2;
        list.style.left = -items[active].offsetLeft - 100 + 'px';
    }
    else{
        list.style.left = - (list.offsetWidth - slider.offsetWidth) + 'px';
    }
}

prev.onclick = function(){
    if(active - 2 >= 0){
        active -= 2;
        list.style.left = -items[active].offsetLeft - 100 + 'px';
    }
    else{
        list.style.left=0;
    }    
}

function showForm(formClass){
    const forms = document.querySelectorAll('.search_form');
    forms.forEach(forms => forms.style.display = 'none');

    const selectedForm = document.querySelector(`.${formClass}`); // Added a dot to indicate class
    if (selectedForm) {
        selectedForm.style.display = 'block';
    }
}
function submitForm() {
    // Your form submission logic here
    alert("Form submitted!");
}
