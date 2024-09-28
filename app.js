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
    const forms = document.querySelectorAll('.form_display');
    forms.forEach(forms => forms.style.display = 'none');

    const selectedForm = document.querySelector(`.${formClass}`); // Added a dot to indicate class
    if (selectedForm) {
        selectedForm.style.display = 'block';
    }

    const nav = document.querySelector('.searchbar_nav');
    const buttons = nav.querySelectorAll('button'); // Get all buttons
    buttons.forEach((button, index) => {
        button.style.borderBottom = '2px solid rgba(0, 0, 0, 0.1)';
    });

    switch (formClass) {
        case 'find_hotels':
            buttons[0].style.borderBottom = '3px solid rgba(0, 0, 0, 0.3)'; // Highlight the first button
            break;
        case 'find_flights':
            buttons[1].style.borderBottom = '3px solid rgba(0, 0, 0, 0.3)'; // Highlight the second button
            break;
        case 'find_cars':
            buttons[2].style.borderBottom = '3px solid rgba(0, 0, 0, 0.3)'; // Highlight the third button
            break;
        case 'notes_text':
            buttons[3].style.borderBottom = '3px solid rgba(0, 0, 0, 0.3)'; // Highlight the fourth button
            break;
    }
}
function submitForm() {
    // Your form submission logic here
    alert("Form submitted!");
}

$(function() {
  $('input[name="daterange"]').daterangepicker({
    opens: 'left'
  }, function(start, end, label) {
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});

$(document).ready(function() {
    // Initialize Select2 on the correct element id
    $('#airport-province').select2();
});