let bola = document.getElementById("bola");
let barra = document.getElementById("barra");
let fundo = document.getElementById("fundo");
let header = document.getElementById("header");
let body = document.getElementById("body");
let section01 = document.getElementById("section-01");
let section02 = document.getElementById("section-02");

let ativos = {
    dark(){
        bola.classList.toggle("ativo");
        barra.classList.toggle("ativo");
        fundo.classList.toggle("ativo");
        header.classList.toggle("ativo");
        body.classList.toggle("ativo");
        section01.classList.toggle("ativo");
        section02.classList.toggle("ativo");

    }
}

barra.addEventListener('click', () => {
    ativos.dark()
})