const pesquisa = document.getElementById("pesquisa");
const ordenacao = document.getElementById("ordenacao");
const corpoTabela = document.querySelector("#tabelaPersonagens tbody");
const nenhumResultado = document.getElementById("nenhumResultado");

pesquisa.addEventListener("input", filtrar);

ordenacao.addEventListener("change", ordenar);

function filtrar() {

    const texto = pesquisa.value.toLowerCase();
    const linhas = corpoTabela.querySelectorAll("tr");

    let encontrados = 0;

    linhas.forEach(function(linha) {

        const conteudo = linha.textContent.toLowerCase();

        if (conteudo.includes(texto)) {
            linha.style.display = "";
            encontrados++;
        } else {
            linha.style.display = "none";
        }

    });

    if (encontrados === 0) {
        nenhumResultado.style.display = "block";
    } else {
        nenhumResultado.style.display = "none";
    }
}

function ordenar() {

    const tipo = ordenacao.value;

    if (tipo === "original") {
        location.reload();
        return;
    }

    const linhas = Array.from(corpoTabela.querySelectorAll("tr"));

    let coluna;

    if (tipo === "nome") {
        coluna = 0;
    }

    if (tipo === "universo") {
        coluna = 1;
    }

    if (tipo === "poder") {
        coluna = 2;
    }

    linhas.sort(function(a, b) {

        const valorA = a.cells[coluna].textContent;
        const valorB = b.cells[coluna].textContent;

        return valorA.localeCompare(valorB);
    });

    linhas.forEach(function(linha) {
        corpoTabela.appendChild(linha);
    });

    filtrar();
}