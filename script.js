const item = document.getElementById('item');
const box = document.getElementById('box');

item.addEventListener('dragstart', e=>{
  e.dataTransfer.setData('text', 'dragged');
});

box.addEventListener('dragover', e=>{
  e.preventDefault();
});

box.addEventListener('drop', ()=>{
  box.innerText = 'Dropped!';
});
