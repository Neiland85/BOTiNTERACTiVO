const list = document.getElementById('list');
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  let item = document.createElement('li');
  item.textContent = `Item ${i}`;
  fragment.appendChild(item);
}
list.appendChild(fragment);

