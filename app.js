// add new task and send event
let form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  let script_card = document.getElementById('placeholder-card')
  let conteudo_html = script_card.innerHTML

  let title = document.getElementById('input').value;

  conteudo_html = conteudo_html.replace("@title", title);
  
  $container = $('#main');
  $card = $(conteudo_html)

  $container.append($card);
});

// line-through when task is done
function taskDone() {
  let $task = $('#task-title');
  $task.css({'text-decoration': 'line-through'});
};

$('#done').click(taskDone);

// delete task
function cardDelete() {
  let $delete = $('#card');

  $delete.remove();
};

$('#delete').click(cardDelete);