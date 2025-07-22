const listaTarefas = document.getElementById('listaTarefas');
const contador = document.getElementById('contador');
const botaoAdicionar = document.getElementById('adicionarTarefa');

let tarefasConcluidas = 0;

function adicionarTarefa(titulo, etiquetaTexto) {
  const tarefa = document.createElement('div');
  tarefa.classList.add('tarefa');

  const textos = document.createElement('div');
  textos.classList.add('tarefa-textos');

  const tituloEl = document.createElement('div');
  tituloEl.classList.add('titulo');
  tituloEl.textContent = titulo;

  const rodape = document.createElement('div');
  rodape.classList.add('info-rodape');

  const etiqueta = document.createElement('span');
  etiqueta.classList.add('etiqueta');
  etiqueta.textContent = etiquetaTexto || 'sem etiqueta';

  const data = document.createElement('span');
  data.textContent = `Criado em: ${obterDataAtual()}`;

  rodape.appendChild(etiqueta);
  rodape.appendChild(data);

  textos.appendChild(tituloEl);
  textos.appendChild(rodape);

  const direita = document.createElement('div');

  const botao = document.createElement('button');
  botao.classList.add('botao-concluir');
  botao.textContent = 'Concluir';

  botao.addEventListener('click', () => {
    tarefa.classList.add('tarefa-concluida');
    tituloEl.style.textDecoration = 'line-through';

    tarefasConcluidas++;
    atualizarContador();

    botao.replaceWith(criarCheckSVG());
  });

  direita.appendChild(botao);

  tarefa.appendChild(textos);
  tarefa.appendChild(direita);

  listaTarefas.appendChild(tarefa);
}

function atualizarContador() {
  contador.textContent = `${tarefasConcluidas} tarefa concluída`;
}

function obterDataAtual() {
  const agora = new Date();
  return agora.toLocaleDateString('pt-BR');
}

function criarCheckSVG() {
  const img = document.createElement('img');
  img.src = 'data:image/svg+xml;utf8,<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16.5" r="16" fill="%2300D8A7"/><path d="M10.6667 17.1666L14 20.5L21.3334 13.1666" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  img.alt = 'Tarefa concluída';
  img.classList.add('icone-check');
  return img;
}

// Captura clique do botão + para adicionar tarefas personalizadas
botaoAdicionar.addEventListener('click', () => {
  const titulo = document.getElementById('inputTarefa').value.trim();
  const etiqueta = document.getElementById('inputEtiqueta').value.trim();
  if (titulo) {
    adicionarTarefa(titulo, etiqueta);
    document.getElementById('inputTarefa').value = '';
    document.getElementById('inputEtiqueta').value = '';
  }
});

// Aqui esta as tarefas usado no exemplo do desafio com fixo so para fica igual no exemplo.

// Lista inicial
adicionarTarefa('Implementar tela de listagem de tarefas', 'frontend');
adicionarTarefa('Criar endpoint para cadastro de tarefas', 'backend');
adicionarTarefa('Implementar protótipo da listagem de tarefas', 'ux');
