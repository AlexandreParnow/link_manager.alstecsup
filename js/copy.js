//lista de installs
let copiainstall1 = () => {
    //O texto que será copiado
    const texto = "EU SOU UMA COPIA DO TEXTO";
    //Cria um elemento input (pode ser um textarea)
    let inputTest = document.createElement("input");
    inputTest.value = texto;
    //Anexa o elemento ao body
    document.body.appendChild(inputTest);
    //seleciona todo o texto do elemento
    inputTest.select();
    //executa o comando copy
    //aqui é feito o ato de copiar para a area de trabalho com base na seleção
    document.execCommand('copy');
    //remove o elemento
    document.body.removeChild(inputTest);
};

