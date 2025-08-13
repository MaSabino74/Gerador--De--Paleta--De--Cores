document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os elementos HTML que vamos manipular
    const generateBtn = document.getElementById('generate-btn');
    const colorBoxes = document.querySelectorAll('.color-box');

    // Função para gerar uma cor hexadecimal aleatória
    const generateRandomHexColor = () => {
        // Gera um número aleatório e converte para hexadecimal (de 0 a F)
        // O `substring(2, 8)` pega os 6 caracteres hexadecimais
        return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
    };

    // Função principal para gerar a paleta de cores
    const generatePalette = () => {
        colorBoxes.forEach(box => {
            // Gera uma nova cor para cada bloco
            const newColor = generateRandomHexColor();
            
            // Atualiza o background-color do bloco
            box.style.backgroundColor = newColor;
            
            // Atualiza o texto com o código hexadecimal
            const hexCodeElement = box.querySelector('.hex-code');
            hexCodeElement.textContent = newColor;
            
            // Ajusta a cor do texto para ser legível
            // (um extra legal para cores claras ou escuras)
            hexCodeElement.style.color = getTextColor(newColor);
        });
    };

    // Função para determinar a cor do texto com base no brilho da cor de fundo
    const getTextColor = (hexColor) => {
        // Converte o hexadecimal para valores RGB
        const r = parseInt(hexColor.substring(1, 3), 16);
        const g = parseInt(hexColor.substring(3, 5), 16);
        const b = parseInt(hexColor.substring(5, 7), 16);

        // Calcula o brilho (luminância)
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        
        // Retorna branco para cores escuras, preto para cores claras
        return brightness > 128 ? '#000' : '#FFF';
    };

    // Adiciona um evento de clique no botão
    generateBtn.addEventListener('click', generatePalette);

    // Gera a primeira paleta quando a página é carregada
    generatePalette();
});
