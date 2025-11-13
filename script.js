const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// 🔹 Load saved tasks when the page refreshes
window.addEventListener('load', loadTasks);

addBtn.addEventListener('click', addTask);
input.addEventListener('keydown', (event) => {
  if (event.key === "Enter") addTask();
});

function addTask() {
  const taskText = input.value.trim();
  if (taskText === '') return alert('Please enter a task');

  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = taskText;

  span.addEventListener('click', () => {
    console.log("call2");
    span.textContent=  value.trim();
    const inputEdit = document.createElement('input');
    inputEdit.type = 'text';
    inputEdit.value = currentText;
    li.replaceChild(inputEdit, span);
    // saveTasks(); // ✅ update when toggled
  });


  const delBtn = document.createElement('button');
  delBtn.textContent = 'Done';
  delBtn.className = 'delete';
  delBtn.addEventListener('click', () => {
    li.remove();
    saveTasks(); // ✅ update when deleted
  });

  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  input.value = '';
  saveTasks(); // ✅ only save after adding a full task
}

function saveTasks() {
  const tasks = [];
  taskList.querySelectorAll('li').forEach(li => {
    tasks.push({
      text: li.querySelector('span').textContent,
      completed: li.classList.contains('completed')
    });
  });
  sessionStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const savedTasks = JSON.parse(sessionStorage.getItem('tasks')) || [];
  savedTasks.forEach(task => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = task.text;
    if (task.completed) li.classList.add('completed');

    span.addEventListener('click', (e) => {
        
      console.log("call2", e);
        const text2 = e.target.outerHTML;
        const inptext = e.target.outerText;
        var inputEdit = document.createElement('input');
        inputEdit.type = 'text';
        inputEdit.value = inptext;
        li.replaceChild(inputEdit, span);
        
    });
    const updateBtn = document.createElement('button');
    updateBtn.textContent='edit';
    updateBtn.className='edit';
    updateBtn.addEventListener('click', () =>{
        li.replaceChild(span,inputEdit );
        saveTasks();

    })


    const delBtn = document.createElement('button');
    delBtn.textContent = 'Done';
    delBtn.className = 'delete';
    delBtn.addEventListener('click', () => {
      li.remove();
      saveTasks();
    });

    li.appendChild(span);
    li.append(updateBtn);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}
