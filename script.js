document.body.style.margin = "0px"

const main = document.createElement("main");

main.style.height = "100vh";
main.style.backgroundColor = "#1e432cff";
main.style.display = "flex";
main.style.justifyContent = "center";
main.style.alignItems = "center";

document.body.appendChild(main);

const box = document.createElement("div");

box.style.width = "350px";
box.style.height = "350px";

box.style.width = "350px";
box.style.background = "#eabc52ff";
box.style.boxShadow = "4px 9px 900px 20px";
box.style.overflowY = "auto";
box.style.borderRadius = "20px";
box.style.padding = "0px 30px";

main.appendChild(box);

const h1 = document.createElement("h1");

h1.textContent = "To-Do List";
h1.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";

box.appendChild(h1);

const inputBox = document.createElement("div");
inputBox.style.display = "flex";
inputBox.style.gap = "5px";
inputBox.style.width = "100%";

const input = document.createElement("input");
input.setAttribute("placeholder", "Enter Your Task");
input.style.width = "100%";
input.style.padding = "3px";
input.style.fontSize = "18px";

const button = document.createElement("button");
button.innerHTML = '<i class="ri-add-large-line"></i>';
button.style.padding = "3px 5px";
button.style.fontSize = "28px";
button.style.color = "white";
button.style.backgroundColor = "green";
button.style.border = "none";
button.style.borderRadius = "2px";

box.appendChild(inputBox);
inputBox.appendChild(input);
inputBox.appendChild(button);

const listBox = document.createElement("div");
box.appendChild(listBox);

const list = document.createElement("ul");
list.style.padding = "0";
listBox.appendChild(list);


function addTask() {
    const value = input.value.trim();
    if (value === "") return;

    const item = document.createElement("li");

    item.style.listStyle = "none";
    item.style.padding = "5px 8px";
    item.style.fontSize = "20px";
    item.style.margin = "15px 0px";
    item.style.backgroundColor = "#5064315e";
    item.style.borderRadius = "3px";
    item.style.display = "flex";
    item.style.justifyContent = "space-between";
    item.style.alignItems = "center";

    const textSpan = document.createElement("span");
    textSpan.textContent = value;

    const sideBtn = document.createElement("span");

    const editBtn = document.createElement("button");
    editBtn.innerHTML = '<i class="ri-pencil-fill"></i>';
    editBtn.style.border = "none";
    editBtn.style.background = "transparent";
    editBtn.style.fontSize = "22px";
    editBtn.style.marginRight = "10px";
    editBtn.style.color = "blue";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="ri-delete-bin-fill"></i>';
    deleteBtn.style.border = "none";
    deleteBtn.style.background = "transparent";
    deleteBtn.style.fontSize = "22px";
    deleteBtn.style.color = "red";

    sideBtn.append(editBtn, deleteBtn);
    item.append(textSpan, sideBtn);
    list.appendChild(item);

    input.value = "";

    deleteBtn.addEventListener("click", function () {
        item.remove();
    });

    editBtn.addEventListener("click", function () {
        const editInput = document.createElement("input");
        editInput.value = textSpan.textContent;
        editInput.style.width = "100%";
        editInput.style.background = "transparent";
        editInput.style.border = "none";
        editInput.style.fontSize = "18px";

        const saveBtn = document.createElement("button");
        saveBtn.innerHTML = '<i class="ri-save-fill"></i>';
        saveBtn.style.marginLeft = "10px";
        saveBtn.style.border = "none";
        saveBtn.style.background = "transparent";
        saveBtn.style.borderRadius = "7px";
        saveBtn.style.color = "green";
        saveBtn.style.fontSize = "24px";

        item.innerHTML = "";
        item.append(editInput, saveBtn);

        saveBtn.addEventListener("click", function () {
            textSpan.textContent = editInput.value.trim();
            item.innerHTML = "";
            item.append(textSpan, sideBtn);
        });
    });
}




button.addEventListener("click", function () {
    addTask();
})

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
})

