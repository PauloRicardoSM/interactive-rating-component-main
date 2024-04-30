//This function will make the review card disappear and make the thank you card appear.
function submit() {
    document.getElementById('ratingCard').style.display = 'none';
    document.getElementById('thankYouCard').style.display = 'block';
}

//This function will make the "rating" id tag change to the rating the user chose.
function rate(value) {
    let res = document.getElementById('rating')
    res.innerHTML = value 
}

//This function will make the buttons change color based on what the user clicks.
function changeColor(button , value) {
    let buttons = document.getElementsByClassName('buttonRate')

    //the "for" will loop through the "buttonRate" elements checking and changing the background color if necessary.
    for (let i = 0; i < buttons.length; i++) {
        if (parseInt(buttons[i].innerHTML) < value) {
            buttons[i].style.backgroundColor = 'hsl(217, 12%, 63%)'
            buttons[i].style.color = 'white'
        } else if (parseInt(buttons[i].innerHTML) == value) {
            buttons[i].style.backgroundColor = 'hsl(25, 97%, 53%)'
            buttons[i].style.color = 'white'
        } else if (parseInt(buttons[i].innerHTML) > value) {
            buttons[i].style.backgroundColor = '';
            buttons[i].style.color = '';
        }
    }
}