const tasks = [
  { id: '1', text: 'Buy milk', done: false },
  { id: '2', text: 'Pick up Tom from airport', done: false },
  { id: '3', text: 'Visit party', done: false },
  { id: '4', text: 'Visit doctor', done: true },
  { id: '5', text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  listElem.innerHTML = '';

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ id, text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.dataset.id = id;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);
      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

//create button - click
// chose correct tool
// validation first

function onCreateTask() {
  const taskInputEl = document.querySelector('.task-input');
  if (!taskInputEl.value) {
    return;
  }
  // const id = tasks.length +1;
  tasks.push({ text: taskInputEl.value, done: false });
  taskInputEl.value = '';
  renderTasks(tasks);
}
const createBtnEl = document.querySelector('.create-task-btn');

// change task - algo
//1
//2
//1
const onUpdateTaskStatus = event => {
  // debugger;
  if (!event.target.classList.contains('list__item-checkbox')) {
    return;
  }
  const checkbox = event.target;
  const foundedTask = tasks.find(task => task.id === checkbox.dataset.id);
  //foundedTask.done = !foundedTask.done;
  foundedTask.done = checkbox.checked;
  renderTasks(tasks);
};

createBtnEl.addEventListener('click', onCreateTask);
listElem.addEventListener('click', onUpdateTaskStatus);
