(function (){

    'use strict'

    const time = document.querySelector('#time');
    const greeting = document.querySelector('#greeting');
    const name = document.querySelector('#name');
    const focus = document.querySelector('#focus');

    function showTime(){
        let today = new Date();
        let hour = today.getHours();
        let minute = today.getMinutes();
        let second = today.getSeconds();
        time.innerHTML = `${addZero(hour)} : ${addZero(minute)} : ${addZero(second)}`;
        setTimeout(showTime, 1000);
    };

    function addZero(time){
        return (Number(time) < 10 ? '0' : '') + time;
    };

    function setBgGreet(){
        let today = new Date();
        let hour = today.getHours();

        if(hour >= 5 && hour < 12){
            document.body.style.background = "url(https://source.unsplash.com/daily) no-repeat center center/cover";
            greeting.textContent = 'Bom Dia, ';
            document.body.style.color = 'white';
        } else if (hour >= 12 && hour < 18) {
            document.body.style.background = "url(https://source.unsplash.com/daily) no-repeat center center/cover";
            greeting.textContent = 'Boa Tarde, ';
            document.body.style.color = 'white';
        } else {
            document.body.style.background = "url(https://source.unsplash.com/daily) no-repeat center center/cover";
            greeting.textContent = 'Boa Noite, ';
            document.body.style.color = 'white';
        };
    };

    function getName(){
        if(localStorage.getItem('name') === null){
            name.textContent = '[Digite seu nome]';
        } else {
            name.textContent = localStorage.getItem('name');
        }
    };

    function setName(e){
        if(e.type === 'keypress') {
            if (e.which == 13 || e.keyCode == 13) {
                localStorage.setItem('name', e.target.innerText);
                name.blur();
            }
        } else {
            localStorage.setItem('name', e.target.innerText);
        }
    };

    function getFocus(){
        if(localStorage.getItem('focus') === null){
            focus.textContent = '[Digite seu objetivo]';
        } else {
            focus.textContent = localStorage.getItem('focus');
        }
    };

    function setFocus(e){
        if(e.type === 'keypress') {
            if (e.which == 13 || e.keyCode == 13) {
                localStorage.setItem('focus', e.target.innerText);
                focus.blur();
            }
        } else {
            localStorage.setItem('focus', e.target.innerText);
        }
    };
     
    name.addEventListener('keypress', setName);
    name.addEventListener('blur', setName);
    focus.addEventListener('keypress', setFocus);
    focus.addEventListener('blur', setFocus);

    showTime();
    setBgGreet();
    getName();
    getFocus();

})();

