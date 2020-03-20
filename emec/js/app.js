(function (){
    'use strict'
    let blue = document.querySelector('#blue');
    let yellow = document.querySelector('#yellow');
    let red = document.querySelector('#red');
    let content = document.querySelector('#content');
    let activities = document.querySelector('#atividades');
    let activitiesImg = [
        {img: "img/vistoria.jpg", txt: "Vistorias Técnicas"}, 
        {img: "img/orientação.jpg", txt: "Orientação Técnica"}, 
        {img: "img/projetos.jpg", txt: "Elaboração de Projetos"}, 
        {img: "img/laudos.jpg", txt: "Elaboração de Laudos"}, 
        {img: "img/serviços.jpg", txt: "Acompanhamento dos Serviços"}
    ];
    let activitiesImgOnDisplay = 0;

    blue.addEventListener('click',()=>{
        blueCard();
    });

    yellow.addEventListener('click',()=>{
        yellowCard();
    });

    red.addEventListener('click', ()=>{
        redCard();
    });

    function blueCard(){
        content.classList = 'content-blue';
        content.innerHTML = '<img src="img/missão.png" alt="Missão" class="montanha-img"><p class="montanha-texto">Promover o suporte técnico relacionado ao cumprimento da legislação vigente do município.</p>'
    };

    function yellowCard(){
        content.classList = 'content-yellow';
        content.innerHTML = '<img src="img/olho.png" alt="Visão" class="olho-img"><p class="olho-texto">Servir como uma atividade de assistência à comunidade da região metropolitana do Recife, oferecendo aos dicentes qualificação e aos nossos clientes a certeza da competência e da confiança dos serviços de suporte técnicos.</p>'
    };

    function redCard(){
        content.classList = 'content-red';
        content.innerHTML = '<img src="img/estrela.png" alt="Valores" class="estrela-img"><div class="estrela-texto"><p>Excelência e Qualidade</p><p>Aprendizado</p><p>Entusiasmo</p><p>Ética e Transparência</p><div>'
    }

    function displayNextImage(){
        activities.innerHTML = `<img src=${activitiesImg[activitiesImgOnDisplay].img} alt=${activitiesImg[activitiesImgOnDisplay].txt} class="vistoria"><p class="atividades-desc" id="atividades-desc">${activitiesImg[activitiesImgOnDisplay].txt}</p>`
        
        activitiesImgOnDisplay === activitiesImg.length - 1 ? activitiesImgOnDisplay = 0 : activitiesImgOnDisplay++;
    };

    setInterval(displayNextImage, 3000);

})()
