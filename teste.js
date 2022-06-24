function cadastro() {
    let foto = document.querySelector('#foto').value;
    let lista = document.querySelector('#lista').value;
    let slide = {
        foto: foto,
        lista: lista,
    };
    return slide
}

async function adicionar(slide,) { 
    let r = await fetch('vinhos/cadastrar') 
    return r.json()
}

async function listar(slide) {
    let r = await fetch('slide/listar') 
    return r.json()
}

let slide=[]

function mostrar_lista(slide) {
    let mensagem = '';
    let id = 0;
    let tbody = document.querySelector('#tbody');
    tbody.innerHTML = '';
    for (let slide of slide) {
        let linha = document.createElement('tr')
        let coluna = document.createElement('td')
        let coluna2 = document.createElement('td')
        let coluna3 = document.createElement('td')
        let coluna4 = document.createElement('td')
        let coluna5 = document.createElement('td')
        let botao = document.createElement('button')
        coluna.innerText = id
        coluna2.innerText = slide.foto
        coluna3.innerText = slide.lista
        botao.onclick = function (id) {
            return function () {
                controlar_edicao(slides_, id)
            }
        } (id);
        linha.appendChild(coluna)
        linha.appendChild(coluna2)
        linha.appendChild(coluna3)
        linha.appendChild(coluna4)
        linha.appendChild(coluna5)
        coluna5.appendChild(botao)
        tbody.appendChild(linha)
        id++ ;
    }
}

function mostrar_resultado(resultado) {
    let mensagem = document.querySelector('#mensagem');
    mensagem.innerHTML = resultado.ok;
    if (resultado.ok) {
        mensagem.classList.add('certa') 
        mensagem.classList.remove('errado') 
    }
    else {
        mensagem.classList.add('errado')
        mensagem.classList.remove('certa') 
    }
}

function mostrar_lista(slides) {
    alert('listar')
    alert(mensagem);
}

function imageOption(){
    document.getElementById("imageoption").src = "img1.jpg";
 }
