let descricaoSkill = document.getElementById('skills')
let javaTech = document.getElementById('java')
let pyTech = document.getElementById('python')
let htmlTech = document.getElementById('html')
let cssTech = document.getElementById('css')
let jsTech = document.getElementById('js')
let phpTech = document.getElementById('php')
let sqlTech = document.getElementById('sql')
let quemSouEu = document.getElementById('quem-descricao')
let referencias = document.getElementById('card-ref')
let btnVolta = document.getElementById('volta')
let btnProximo = document.getElementById('vai')
let quotes = ['<p><span class="quote">"</span>Paulinho é uma execelente pessoa e será uma ótima escolha para integrar à sua equipe. É um menino muito dedicado e estudioso. Nunca me deu um aperreio.<span class="quote">"</span></p><p class="assina">- Mainha</p>', '<p><span class="quote">"</span>Contratar Paulo foi a escolha certa para a nossa empresa. Pense num cabra esforçado.<span class="quote">"</span></p><p class="assina">- Você depois que me contratou</p>', '<p><span class="quote">"</span>Esse cara vai longe.<span class="quote">"</span></p><p class="assina">- Motorista do Uber que me levou até Garanhuns</p>']
let contador = 0

javaTech.addEventListener('click', () =>{
    descricaoSkill.innerHTML = 'Java é a linguagem utilizada durante as aulas das disciplinas de programação na Faculdade, por isso mesmo é uma das linguagens de programação que eu tenho mais horas de estudos. Eu domino os conceitos básicos e de de programação orientada a objetos e estruturas de dados.'
})

pyTech.addEventListener('click', () =>{
    descricaoSkill.innerHTML = 'Python foi a primeira linguagem de programação com a qual eu tive contato. Iniciei os estudos na língua de maneira autodidata. Consigo programar alguma coisa com a linguagem e tenho interesse em aprender mais sobre ela, principalmente o framework Django.'
})

htmlTech.addEventListener('click', () =>{
    descricaoSkill.innerHTML = 'Desenvolvimento de aplicações voltadas para a internet é um dos meus maiores focos e interesses. Aprendi HTML através de estudos extra curriculares. Participei de bootcamps na IGTI, cursos na Udemy e curso presencial através da Design Culture.'
})

cssTech.addEventListener('click', () =>{
    descricaoSkill.innerHTML = 'Estudei o CSS de maneira autodidata a princípio, tendo em vista que o desenvolvimento de aplicações voltadas para a internet é um dos meus maiores focos e interesses. Aprendi muita coisa através de cursos na Udemy.'
})

jsTech.addEventListener('click', () => {
    descricaoSkill.innerHTML = 'O JavaScript é a linguagem que eu mais me dedico ao estudo. Tenho bastante interesse em atuar com esta tecnologia, por isso me dedico a estudar a linguagem e sua aplicação no frontend e no backend. Participei de bootcamps na IGTI para desenvolvimento Fullstack, cursos na Udemy e Rocketseat e curso presencial na Deseign Culture.'
})

phpTech.addEventListener('click', () => {
    descricaoSkill.innerHTML = 'Minha história com o PHP começou através da necessidade. Ao participar de um processo seletivo de estágio, um dos requisitos de avaliação foi a execução de um sistema de cadastro de usuários a ser desenvolvido em PHP. Eu não fui selecionado para a vaga mas entreguei o projeto concluído no prazo e me diverti bastante com esta linguagem. Tenho interesse em aprender mais sobre ela no futuro.'
})

sqlTech.addEventListener('click', () => {
    descricaoSkill.innerHTML = 'Banco de dados adotado na graduação. Tenho conhecimento na modelagem e construção do banco de dados.'
})
    
referencias.innerHTML = '<p><span class="quote">"</span>Paulinho é uma execelente pessoa e será uma ótima escolha para integrar à sua equipe. É um menino muito dedicado e estudioso. Nunca me deu um aperreio.<span class="quote">"</span></p><p class="assina">- Mainha</p>'

btnProximo.addEventListener('click', () => {
    referencias.innerHTML = quotes[contador]
    if (contador >= quotes.length-1) {
        contador = 0
    } else {
        contador++
    }
})

btnVolta.addEventListener('click', () => {
    referencias.innerHTML = quotes[contador]
    if (contador === 0) {
        contador = 2
    } else {
        contador--
    }
})

function idade(anoAniversario, mesAniversario, diaAniversario) {
    let data = new Date()
    anoAtual = data.getFullYear()
    mesAtual = data.getMonth()
    diaAtual = data.getDate()

    quantosAnos = anoAtual - anoAniversario
    
    if (mesAtual < mesAniversario || mesAtual === mesAniversario && diaAtual < diaAniversario) {
        quantosAnos--
    }
    return quantosAnos    
}

quemSouEu.innerHTML = `${idade(1985, 8, 3)}`
