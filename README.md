# Jogo do Número Secreto

Este é um simples jogo de adivinhação onde o jogador deve tentar descobrir um número secreto gerado aleatoriamente.

# 🎯 Objetivo

O jogador deve adivinhar um número secreto entre 1 e 10. A cada tentativa, o jogo informa se o número secreto é maior ou menor do que o chute do jogador. O jogo termina quando o jogador acerta o número secreto.

# 🛠️ Tecnologias Utilizadas

JavaScript

HTML

CSS (opcional, para estilização)

# 🚀 Como Jogar

O jogo exibe uma mensagem inicial informando que o número deve estar entre 1 e 10.

O jogador digita um número no campo de entrada e confirma.

O jogo verifica se o número digitado é igual ao número secreto:

Se for igual, exibe uma mensagem de acerto e mostra o número de tentativas realizadas.

Se for diferente, informa se o número secreto é maior ou menor e permite novas tentativas.

Após acertar o número, o jogador pode iniciar um novo jogo clicando no botão de reiniciar.

# 📜 Estrutura do Código

numeroAleatorio(): Gera um número aleatório entre 1 e 10, garantindo que não se repita antes que todos tenham sido sorteados.

exibirNumeroNaTela(tag, texto): Exibe um texto em um determinado elemento HTML.

textoDeExibicao(): Exibe as mensagens iniciais do jogo.

verificarChute(): Compara o número digitado pelo jogador com o número secreto e exibe mensagens de acerto ou erro.

limparCampos(): Limpa o campo de entrada após cada tentativa.

criarNovoJogo(): Reinicia o jogo gerando um novo número secreto e redefinindo as tentativas.

# 🎮 Demonstração

Basta copiar o código para um arquivo HTML com um campo de entrada e botões apropriados para interagir com o jogo.

Divirta-se jogando! 🎲
