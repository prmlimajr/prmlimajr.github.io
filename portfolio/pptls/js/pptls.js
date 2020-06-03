let btnPapel = document.getElementById('papel')
let btnPedra = document.getElementById('pedra')
let btnTesoura = document.getElementById('tesoura')
let btnLagarto = document.getElementById('lagarto')
let btnSpock = document.getElementById('spock')
let desafio = document.getElementById('desafio')
let resultado = document.getElementById('resultado')
let placarPlayer1 = document.getElementById('placarP1')
let placarPlayer2 = document.getElementById('placarP2')
let btnReset = document.getElementById('reset')
let player2Opcoes = ['Pedra', 'Papel', 'Tesoura', 'Lagarto', 'Spock']
let player2Escolha = player2Opcoes[Math.floor(Math.random() * player2Opcoes.length)]
let acertoPlayer1 = 0
let acertoPlayer2 = 0
let explicacao = document.getElementById('explica')

btnPedra.addEventListener('click', ()=> {
    let player2Escolha = player2Opcoes[Math.floor(Math.random() * player2Opcoes.length)]

    desafio.innerHTML = `Você escolheu Pedra e seu oponente escolheu ${player2Escolha}.`

    if (player2Escolha == 'Pedra') {
        explicacao.innerHTML = ''
        resultado.innerHTML = `É um empate!`
    }
    else if (player2Escolha == 'Papel' || player2Escolha == 'Spock') {
        if (player2Escolha == 'Papel') {
            explicacao.innerHTML = `O Papel embrulha a Pedra.`
        } else {
            explicacao.innerHTML = `Spock arremessa a Pedra para longe.`
        } 
        resultado.innerHTML = `Você perdeu esta rodada!`
        acertoPlayer2++
        placarPlayer1.innerHTML = acertoPlayer1
        placarPlayer2.innerHTML = acertoPlayer2
    }
    else if (player2Escolha == 'Tesoura' || player2Escolha == 'Lagarto') {
        if (player2Escolha == 'Tesoura') {
            explicacao.innerHTML = `A Pedra quebra a Tesoura.`
        } else {
            explicacao.innerHTML = `A Pedra esmaga o Lagarto.`
        } 
        resultado.innerHTML = `Você ganhou esta rodada!`
        acertoPlayer1++
        placarPlayer1.innerHTML = acertoPlayer1
        placarPlayer2.innerHTML = acertoPlayer2
    }
})

btnPapel.addEventListener('click', ()=> {
    let player2Escolha = player2Opcoes[Math.floor(Math.random() * player2Opcoes.length)]

    desafio.innerHTML = `Você escolheu Papel e seu oponente escolheu ${player2Escolha}.`

    if (player2Escolha == 'Papel') {
        explicacao.innerHTML = ''
        resultado.innerHTML = `É um empate!`
    }
    else if (player2Escolha == 'Tesoura' || player2Escolha == 'Lagarto') {
        if (player2Escolha == 'Tesoura') {
            explicacao.innerHTML = `A Tesoura corta o Papel.`
        } else {
            explicacao.innerHTML = `O Lagarto come o Papel.`
        } 
        resultado.innerHTML = `Você perdeu esta rodada!`
        acertoPlayer2++
        placarPlayer1.innerHTML = acertoPlayer1
        placarPlayer2.innerHTML = acertoPlayer2
    }
    else if (player2Escolha == 'Pedra' || player2Escolha == 'Spock') {
        if (player2Escolha == 'Pedra') {
            explicacao.innerHTML = `O Papel embrulha a Pedra.`
        } else {
            explicacao.innerHTML = `O Papel refuta Spock.`
        } 
        resultado.innerHTML = `Você ganhou esta rodada!`
        acertoPlayer1++
        placarPlayer1.innerHTML = acertoPlayer1
        placarPlayer2.innerHTML = acertoPlayer2
    }
})

btnTesoura.addEventListener('click', ()=> {
    let player2Escolha = player2Opcoes[Math.floor(Math.random() * player2Opcoes.length)]

    desafio.innerHTML = `Você escolheu Tesoura e seu oponente escolheu ${player2Escolha}.`

    if (player2Escolha == 'Tesoura') {
        explicacao.innerHTML = ''
        resultado.innerHTML = `É um empate!`
    }
    else if (player2Escolha == 'Pedra' || player2Escolha == 'Spock') {
        if (player2Escolha == 'Pedra') {
            explicacao.innerHTML = `A Pedra quebra a Tesoura.`
        } else {
            explicacao.innerHTML = `Spock vaporiza a Tesoura.`
        } 
        resultado.innerHTML = `Você perdeu esta rodada!`
        acertoPlayer2++
        placarPlayer1.innerHTML = acertoPlayer1
        placarPlayer2.innerHTML = acertoPlayer2
    }
    else if (player2Escolha == 'Papel' || player2Escolha == 'Lagarto') {
        if (player2Escolha == 'Papel') {
            explicacao.innerHTML = `A Tesoura corta o Papel.`
        } else {
            explicacao.innerHTML = `A Tesoura decapita o Lagarto.`
        } 
        resultado.innerHTML = `Você ganhou esta rodada!`
        acertoPlayer1++
        placarPlayer1.innerHTML = acertoPlayer1
        placarPlayer2.innerHTML = acertoPlayer2
    }
})

btnLagarto.addEventListener('click', ()=> {
    let player2Escolha = player2Opcoes[Math.floor(Math.random() * player2Opcoes.length)]

    desafio.innerHTML = `Você escolheu Lagarto e seu oponente escolheu ${player2Escolha}.`

    if (player2Escolha == 'Lagarto') {
        explicacao.innerHTML = ''
        resultado.innerHTML = `É um empate!`
    }
    else if (player2Escolha == 'Pedra' || player2Escolha == 'Tesoura') {
        if (player2Escolha == 'Pedra') {
            explicacao.innerHTML = `A Pedra esmaga o Lagarto.`
        } else {
            explicacao.innerHTML = `A Tesoura decapita o Lagarto.`
        } 
        resultado.innerHTML = `Você perdeu esta rodada!`
        acertoPlayer2++
        placarPlayer1.innerHTML = acertoPlayer1
        placarPlayer2.innerHTML = acertoPlayer2
    }
    else if (player2Escolha == 'Papel' || player2Escolha == 'Spock') {
        if (player2Escolha == 'Papel') {
            explicacao.innerHTML = `O Lagarto come o Papel.`
        } else {
            explicacao.innerHTML = `O Lagarto envenena Spock.`
        } 
        resultado.innerHTML = `Você ganhou esta rodada!`
        acertoPlayer1++
        placarPlayer1.innerHTML = acertoPlayer1
        placarPlayer2.innerHTML = acertoPlayer2
    }
})

btnSpock.addEventListener('click', ()=> {
    let player2Escolha = player2Opcoes[Math.floor(Math.random() * player2Opcoes.length)]

    desafio.innerHTML = `Você escolheu Spock e seu oponente escolheu ${player2Escolha}.`

    if (player2Escolha == 'Spock') {
        explicacao.innerHTML = ''
        resultado.innerHTML = `É um empate!`
    }
    else if (player2Escolha == 'Papel' || player2Escolha == 'Lagarto') {
        if (player2Escolha == 'Papel') {
            explicacao.innerHTML = `O Papel refuta Spock.`
        } else {
            explicacao.innerHTML = `O Lagarto envenena Spock.`
        } 
        resultado.innerHTML = `Você perdeu esta rodada!`
        acertoPlayer2++
        placarPlayer1.innerHTML = acertoPlayer1
        placarPlayer2.innerHTML = acertoPlayer2
    }
    else if (player2Escolha == 'Pedra' || player2Escolha == 'Tesoura') {
        if (player2Escolha == 'Pedra') {
            explicacao.innerHTML = `Spock arremessa a Pedra para longe.`
        } else {
            explicacao.innerHTML = `Spock vaporiza a Tesoura.`
        } 
        resultado.innerHTML = `Você ganhou esta rodada!`
        acertoPlayer1++
        placarPlayer1.innerHTML = acertoPlayer1
        placarPlayer2.innerHTML = acertoPlayer2
    }
})

btnReset.addEventListener('click', ()=> {
    desafio.innerHTML = `Escolha sua arma para jogar!`
    resultado.innerHTML = ``
    acertoPlayer1 = 0
    acertoPlayer2 = 0
    placarPlayer1.innerHTML = acertoPlayer1
    placarPlayer2.innerHTML = acertoPlayer2
})