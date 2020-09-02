/* eslint-disable class-methods-use-this */
export default class Task {
  constructor() {
    this.pinned = false;
    this.text = '';
  }

  add() {
    const input = document.querySelector('.tasks-input');

    const task = document.createElement('li');
    task.classList.add('task');
    const taskText = document.createElement('div');
    taskText.textContent = input.value;
    this.text = input.value;
    task.appendChild(taskText);
    const tick = document.createElement('input');
    tick.classList.add('tick');
    tick.setAttribute('type', 'checkbox');
    task.appendChild(tick);

    const tasks = document.querySelector('.tasks');
    tasks.appendChild(task);
    input.value = '';
  }

  throwError() {
    const errorWindow = document.querySelector('.error-window');
    errorWindow.style.display = 'block';
    const closeButton = document.querySelector('.ok-btn');
    closeButton.addEventListener('click', () => {
      errorWindow.style.display = 'none';
    });
    const input = document.querySelector('.tasks-input');
    input.value = '';
  }

  pin(e) {
    const task = e.target.closest('.task');
    const pinnedTasks = document.querySelector('.pinned-tasks');
    pinnedTasks.appendChild(task);
    const noPinText = document.querySelector('.no-pinned');
    noPinText.style.display = 'none';
  }

  unpin(e) {
    const task = e.target.closest('.task');
    const pinnedTasks = document.querySelector('.pinned-tasks');
    pinnedTasks.removeChild(task);
    const allTasks = document.querySelector('.tasks');
    allTasks.appendChild(task);
    const noPinText = document.querySelector('.no-pinned');
    if (pinnedTasks.querySelector('.task') === null) {
      noPinText.style.display = 'block';
    }
  }
}
