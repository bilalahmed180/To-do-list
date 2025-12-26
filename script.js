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
box.style.background = "#eabc52ff";
box.style.boxShadow = "4px 9px 900px 20px";
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


button.addEventListener("click", function () {
    const value = input.value;
    const item = document.createElement("li");

    item.style.listStyle = "none";
    item.style.padding = "5px";
    item.style.fontSize = "20px";
    item.style.margin = "15px 0px";
    item.style.backgroundColor = "#5064315e";
    item.style.borderRadius = "3px";
    item.style.display = "flex";
    item.style.justifyContent = "space-between";
    item.textContent = value;

    list.appendChild(item);
    input.value = "";

    const deleteBtn = document.createElement("button");

    deleteBtn.innerHTML = '<i class="ri-delete-bin-fill"></i>';
    deleteBtn.style.color = "red";
    deleteBtn.style.border = "none";
    deleteBtn.style.float = "right";
    deleteBtn.style.fontSize = "24px";
    deleteBtn.style.backgroundColor = "transparent";

    item.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function () {
        item.remove();

    })
})

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        const value = input.value;
        const item = document.createElement("li");

        item.style.listStyle = "none";
        item.style.padding = "5px 8px";
        item.style.fontSize = "20px";
        item.style.margin = "15px 0px";
        item.style.backgroundColor = "#5064315e";
        item.style.borderRadius = "3px";
        item.style.display = "flex";
        item.style.justifyContent = "space-between";
        item.textContent = value;

        list.appendChild(item);
        input.value = "";

        const deleteBtn = document.createElement("button");

        deleteBtn.innerHTML = '<i class="ri-delete-bin-fill"></i>';
        deleteBtn.style.color = "red";
        deleteBtn.style.border = "none";
        deleteBtn.style.fontSize = "24px";
        deleteBtn.style.backgroundColor = "transparent";


        item.appendChild(deleteBtn);


        deleteBtn.addEventListener("click", function () {
            item.remove();

        })
    }
})

