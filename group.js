//add
const addLista = document.querySelector(".add");
var lista = document.querySelector("ul");
const gene = (todo) => {
  const html = `
   <li class="list-group-item d-flex justify-content-between   align-items-center">
    <input type="checkbox" class="hide">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
   </li>
   `;
  lista.innerHTML += html;
};

addLista.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addLista.skriv.value.trim();
  gene(todo);
  addLista.reset();
});

//remove
lista.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
