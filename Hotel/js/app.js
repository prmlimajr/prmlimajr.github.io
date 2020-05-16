(function () {

    'use strict'

    const top = document.getElementById('top');
    const about = document.getElementById('about');
    const contact = document.getElementById('contact');
    const modalBtn = document.getElementById('modalBtn');
    const modal = document.getElementById('modal');
    const btnSubmit = document.getElementById('btnSubmit');

    function contemClasse(elemento, classe) {
        for (let i = 0; i < elemento.classList.length; i++) {
            if (elemento.classList[i] == classe) {
                return true;
            }
        }
        return false;
    }

    top.addEventListener('click', ()=>{
        top.className = 'current';
        if(contemClasse(about, 'current') || contemClasse(contact, 'current')){
            about.classList.remove('current');
            contact.classList.remove('current');
        }
    });
    
    about.addEventListener('click', ()=>{
        about.classList.add('current');
        if(contemClasse(top, 'current') || contemClasse(contact, 'current')){
            contact.classList.remove('current');
            top.classList.remove('current');
        }
    });

    contact.addEventListener('click', ()=>{
        contact.className = 'current';
        if(contemClasse(about, 'current') || contemClasse(top, 'current')){
            about.classList.remove('current');
            top.classList.remove('current');
        }
    });

    modalBtn.addEventListener('click', ()=>{
        modal.style.display = 'block';
    });

    window.onclick = (evt)=> {
        if(evt.target == modal) {
            modal.style.display = 'none';
        }
    };

    btnSubmit.addEventListener('click',(evt)=>{
        evt.preventDefault();
    })


})()