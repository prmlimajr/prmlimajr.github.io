// Início da descrição de nível de conhecimento das tecnologias
let descricaoSkill = document.getElementById('skills')
let javaTech = document.getElementById('java')
let pyTech = document.getElementById('python')
let htmlTech = document.getElementById('html')
let cssTech = document.getElementById('css')
let jsTech = document.getElementById('js')
let phpTech = document.getElementById('php')
let sqlTech = document.getElementById('sql')

javaTech.addEventListener('click', () =>{
    descricaoSkill.innerHTML = 'Java é a linguagem utilizada durante as aulas das disciplinas de programação na Faculdade, por isso mesmo é a linguagem de programação que eu tenho mais horas de estudos. Eu domino todos os conceitos básicos da programação imperativa e tenho noções de Orientação a Objetos, que é um assunto que será abordado nas aulas durante o primeiro semestre de 2020.'
})

pyTech.addEventListener('click', () =>{
    descricaoSkill.innerHTML = 'Python foi a primeira linguagem de programação com a qual eu tive contato. Iniciei os estudos na língua de maneira autodidata. Atualmente eu posso dizer que o que eu consigo fazer com Java eu consigo fazer com Python. Além disso, eu estou frequentando um curso extracurricular de programação em Python, ministrado pela Fuctura Tecnologias.'
})

htmlTech.addEventListener('click', () =>{
    descricaoSkill.innerHTML = 'Desenvolvimento de aplicações voltadas para a internet é um dos meus maiores focos e interesses. Aprendi HTML de maneira autodidata e acrescentei aos conhecimentos com um curso extracurricular ministrado pela Design Culture.'
})

cssTech.addEventListener('click', () =>{
    descricaoSkill.innerHTML = 'Estudei o CSS de maneira autodidata a princípio, tendo em vista que o desenvolvimento de aplicações voltadas para a internet é um dos meus maiores focos e interesses. Acrescentei aos meus conhecimentos com um curso extracurricular ministrado pela Design Culture.'
})

jsTech.addEventListener('click', () => {
    descricaoSkill.innerHTML = 'Aprendi o JavaScript através de curso extracurricular ministrado pela Design Culture voltado para Desenvolvimento em Front End. Gostei bastante da linguagem e desde então estou sempre estudando-a. '
})

phpTech.addEventListener('click', () => {
    descricaoSkill.innerHTML = 'Minha história com o PHP começou através da necessidade. Ao participar de um processo seletivo de estágio, um dos requisitos de avaliação foi a execução de um sistema de cadastro de usuários a ser desenvolvido em PHP. Eu não fui selecionado para a vaga mas entreguei o projeto concluído no prazo e me diverti bastante com esta linguagem. Você pode acessar o projeto abaixo em meu portfólio.'
})

sqlTech.addEventListener('click', () => {
    descricaoSkill.innerHTML = 'Banco de dados adotado na graduação. Passei um semestre inteiro estudando os modelos relacionais de banco de dados e sua modelagem. Durante todo o primeiro semestre de 2020 continuarei a estudar na Faculdade, na disciplina de Projeto de Banco de Dados.'
})
// Fim da descrição de nível de conhecimento das tecnologias


// Início do Carrossel dos Quotes
let referencias = document.getElementById('card-ref')
let btnVolta = document.getElementById('volta')
let btnProximo = document.getElementById('vai')
let quotes = ['<p><span class="quote">"</span>Paulinho é uma execelente pessoa e será uma ótima escolha para integrar à sua equipe. É um menino muito dedicado e estudioso. Nunca me deu um aperreio.<span class="quote">"</span></p><p class="assina">- Mainha</p>', '<p><span class="quote">"</span>Contratar Paulo foi a escolha certa para a nossa empresa. Pense num cabra esforçado.<span class="quote">"</span></p><p class="assina">- Você depois que me contratou</p>', '<p><span class="quote">"</span>Esse cara vai longe.<span class="quote">"</span></p><p class="assina">- Motorista do Uber que me levou até Garanhuns</p>']
let contador = 1

referencias.innerHTML = '<p><span class="quote">"</span>Paulinho é uma execelente pessoa e será uma ótima escolha para integrar à sua equipe. É um menino muito dedicado e estudioso. Nunca me deu um aperreio.<span class="quote">"</span></p><p class="assina">- Mainha</p>'

btnProximo.addEventListener('click', () => {
    referencias.innerHTML = quotes[contador]
    console.log(contador)
    if (contador >= quotes.length-1) {
        contador = 0
    } else {
        contador++
    }
})

btnVolta.addEventListener('click', () => {
    referencias.innerHTML = quotes[contador]
    console.log(contador)
    if (contador == 0) {
        contador = 2
    } else {
        contador--
    }
})

// Quantos anos eu tenho hoje?
let quemSouEu = document.getElementById('quem-descricao')
function idade(anoAniversario, mesAniversario, diaAniversario) {
    let data = new Date()
    anoAtual = data.getFullYear()
    mesAtual = data.getMonth()
    diaAtual = data.getDate()

    quantosAnos = anoAtual - anoAniversario
    
    if (mesAtual < mesAniversario || mesAtual == mesAniversario && diaAtual < diaAniversario) {
        quantosAnos--
    }
    return quantosAnos    
}

quemSouEu.innerHTML = `Oi, eu sou Paulo. Tenho ${idade(1985, 8, 3)} anos e sou estudante do curso de Ciência da Computação, na Uninassau, atualmente no terceiro período. Nasci e me criei em Recife, Pernambuco.`
