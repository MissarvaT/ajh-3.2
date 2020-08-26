/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import Task from './Task';

const input = document.querySelector('.tasks-input');
const tasks = [];
const noTasks = document.querySelector('.no-tasks');

input.addEventListener('keydown', (e) => {
  const task = new Task();
  const allTasks = Array.from(document.querySelectorAll('.all-tasks .task'));
  if (e.keyCode === 13 && input.value !== '') {
    task.add();
    tasks.push(task);
    allTasks.forEach((el) => el.style.display = 'flex');
    noTasks.style.display = 'none';
  } else if (e.keyCode === 13 && input.value === '') {
    task.throwError();
  } else {
    const tasksToHide = allTasks.filter((el) => !el.textContent.toLowerCase().startsWith(input.value.toLowerCase()));
    allTasks.forEach((el) => el.style.display = 'flex');
    tasksToHide.forEach((el) => {
      el.style.display = 'none';
    });
    if (allTasks.length === tasksToHide.length && allTasks.length !== 0) {
      noTasks.style.display = 'block';
    } else {
      noTasks.style.display = 'none';
    }
  }
});

const tasksList = document.querySelector('.tasks-list');
tasksList.addEventListener('click', (e) => {
  const tick = e.target.closest('.tick');
  const task = tasks.find((el) => el.text === e.target.closest('li').textContent);
  if (tick.checked) {
    task.pin(e);
    task.pinned = true;
  } else if (!tick.checked) {
    task.unpin(e);
    task.pinned = false;
  }
});
