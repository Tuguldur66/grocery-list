const input = document.querySelector("input");
const submitBtn = document.querySelector("button");
const list = document.querySelector(".list");
const clearBtn = document.querySelector(".clear");

let editElement = null;
let isEditing = false;
submitBtn.addEventListener("click", () => {
  const value = input.value;

  if (value === "") return;

  if (isEditing) {
    editElement.textContent = value;
    submitBtn.textContent = "Submit";
    isEditing = false;
    editElement = null;
  } else {
    addItem(value);
  }

  input.value = "";
});
function addItem(text) {
  const li = document.createElement("li");

  li.innerHTML = `
    <p>${text}</p>
    <div class="actions">
      <button class= "edit">edit</button>
      <button class="delete">delete</button>
    </div>
  `;

  list.appendChild(li);

  li.querySelector(".delete").addEventListener("click", () => {
    li.remove();
  });

  li.querySelector(".edit").addEventListener("click", () => {
    input.value = li.firstElementChild.textContent;
    submitBtn.textContent = "Edit";
    isEditing = true;
    editElement = li.firstElementChild;
  });
}

clearBtn.addEventListener("click", () => {
  list.innerHTML = "";
});
