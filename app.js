let slider = document.querySelector('.slider')
let list = document.querySelector('.slider_list');
let items = document.querySelectorAll('.slider_list_item');
let prev = document.getElementsByClassName('b_prev')[0];
let next = document.getElementsByClassName('b_next')[0];
// let test = document.getElementById('test');
// let test2 = document.getElementById('test2');

let active = 0;

/* slider */
next.onclick = function(){
    if(items[active+2].offsetLeft <= list.offsetWidth - slider.offsetWidth){
        active = active + 2;
        list.style.left = -items[active].offsetLeft + 'px';
    }
    else{
        active = items.length - 3;
        list.style.left = - (list.offsetWidth - slider.offsetWidth) + 'px';
    }
}
prev.onclick = function(){
    if(active - 2 >= 0){
        active -= 2;
        list.style.left = -items[active].offsetLeft + 'px';
    }
    else{
        active = 0;
        list.style.left=0;
    }    
}

/* slider_image */
    $(".ib_next").click(function(){
    
    let $this = $(this);
    let $islider = $this.closest('.image_slider');
    let $ilist = $islider.find('.image_slider_list');
    let $iitems = $islider.find('.image_slider_list_item');
    let activeIndex = $islider.data('activeIndex') || 0;

    if(activeIndex < $iitems.length - 1){
        activeIndex = activeIndex + 1;
        let newLeft = -$iitems[activeIndex].offsetLeft + 'px'
        $ilist.css('left', newLeft);
    }
    $islider.data('activeIndex', activeIndex);
});

$('.ib_prev').click(function(){
    let $this = $(this);
    let $islider = $this.closest('.image_slider');
    let $ilist = $islider.find('.image_slider_list');
    let $iitems = $islider.find('.image_slider_list_item');
    let activeIndex = $islider.data('activeIndex') || 0;

    if(activeIndex > 0){
        activeIndex = activeIndex - 1;
        let newLeft = -$iitems[activeIndex].offsetLeft + 'px';
        $ilist.css('left', newLeft);
    }
    $islider.data('activeIndex', activeIndex);
});

/*------------*/

function showBox(boxClass){
    const box = document.querySelector(`.${boxClass}`);
    if(box.style.display == 'block')
        box.style.display = 'none';
    else
        box.style.display = 'block';
}

document.addEventListener('click', function(event) {
    const box = document.querySelector('.guestSelector_box');
    const button = document.querySelector('.guestSelector');

    if(box.style.display === 'block')
        if(!box.contains(event.target) && !button.contains(event.target)){
            box.style.display = 'none';
        }
        
});


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
        button.style.borderBottom = '3px solid rgba(233, 233, 233, 0)';
    });

    switch (formClass) {
        case 'find_hotels':
            buttons[0].style.borderBottom = '3px solid rgba(255, 255, 255, 0.5)'; // Highlight the first button
            break;
        case 'find_flights':
            buttons[1].style.borderBottom = '3px solid rgba(255, 255, 255, 0.5)'; // Highlight the second button
            break;
        case 'find_cars':
            buttons[2].style.borderBottom = '3px solid rgba(255, 255, 255, 0.5)'; // Highlight the third button
            break;
        case 'notes_text':
            buttons[3].style.borderBottom = '3px solid rgba(255, 255, 255, 0.5)'; // Highlight the fourth button
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



function increaseValue(id){
    let input = document.getElementById(id);
    let currentValue = parseInt(input.value);
    if(input.value == "")
        input.value = 1;
    else if (currentValue < input.max) {
        input.value = currentValue + 1;
    }
    else if (currentValue > input.max)
        input.value = input.max;
    textUpdate();
}

function decreaseValue(id){
    let input = document.getElementById(id);
    let currentValue = parseInt(input.value);
    if(input.value == "")
        input.value = input.min;
    else if (currentValue > input.min){
        if(currentValue > input.max)
            input.value = input.min;
        else
            input.value = currentValue - 1;
    }
    textUpdate();
}

function textUpdate(){
    let adults = document.getElementById('adults');
    let childrens = document.getElementById('childrens');
    let rooms = document.getElementById('rooms');
    let text = document.getElementById('guestSelector_box--text');
    text.innerHTML = adults.value + " Người lớn, " + childrens.value + " Trẻ em, " + rooms.value + " phòng";
}

window.addEventListener('load', adjustLastChildWidth);
function adjustLastChildWidth() {
    const children = document.querySelectorAll('.searchbar_nav > button');
    let totalWidth = 0;

    //resize first four children width
    // Sum the width of the first four children
    for (let i = 0; i < 4; i++) {
        let style = window.getComputedStyle(children[i]);
        let width = parseInt(style.width);
        let paddingLeft = parseInt(style.paddingLeft);
        let paddingRight = parseInt(style.paddingRight);

        children[i].style.width = width + paddingLeft + paddingRight + 'px';
        totalWidth += children[i].offsetWidth;
    }

    // Set the width of the last child
    const parentWidth = document.querySelector('.searchbar_nav').offsetWidth;
    const lastChild = children[children.length - 1];
    
    lastChild.style.width = (parentWidth - totalWidth) + 'px';
}