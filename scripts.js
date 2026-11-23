const body = document.querySelector("body");
const tenis = document.querySelector(".imagem-tenis");
const botaoCarrinho = document.querySelector(".botao-carrinho");
const botoesCor = document.querySelectorAll(".botoes");
const toast = document.getElementById("toast");
const toastIcon = toast.querySelector("i");

function mudarVisual(corFundo, corBotao, imagem, elementoClicado) {
    // Evita reiniciar a animação se clicar na cor que já está ativa
    if (elementoClicado.classList.contains("ativo")) return;

    tenis.classList.add("troca-efeito");

    // Atualiza cores do fundo, do botão e da borda do toast
    body.style.background = corFundo;
    botaoCarrinho.style.background = corBotao;
    toast.style.borderLeftColor = corFundo;
    toastIcon.style.color = corFundo;

    // Atualiza qual bolinha está selecionada
    botoesCor.forEach(btn => btn.classList.remove("ativo"));
    elementoClicado.classList.add("ativo");

    // Troca a imagem após a transição de saída
    setTimeout(() => {
        tenis.src = imagem;
        tenis.classList.remove("troca-efeito");
    }, 400);
}

let timeoutToast;
function adicionarCarrinho() {
    toast.classList.add("mostrar");

    clearTimeout(timeoutToast);
    timeoutToast = setTimeout(() => {
        toast.classList.remove("mostrar");
    }, 3000);
}