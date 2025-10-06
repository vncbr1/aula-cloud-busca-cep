function listarLogs(){ //função para listar os logs
    let logs = JSON.parse(localStorage.getItem('logs')) || []; 
    console.log(logs);
    //Seleciona o elemento da página onde a lista será exibida
    let listaLogs = document.querySelector("#lista-logs")
    listItems = ""
     //O for percorre cada log para montar o HTML da lista.
    for(let log of logs){
        listItems += `
        <li class="collection-item">
          Busquei no(a) ${log.tipo} na URL ${log.url} em ${log.data}
          <a onclick="montarLogs('${log.url}')" class="waves-effect waves-light red-text"><i class="material-icons left">remove_red_eye </i></a>
        </li>
        `
    }
    //Insere o conteúdo na página
    listaLogs.innerHTML = listItems;
}