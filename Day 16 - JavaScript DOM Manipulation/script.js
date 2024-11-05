const addButton = document.getElementById("add-button");
const itemList = document.getElementById("item-list");

addButton.addEventListener("click", function () {
    const itemInput = document.getElementById("item-input");
    const newItemText = itemInput.value;

    if (newItemText.trim() !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = newItemText;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function () {
            itemList.removeChild(listItem);
        });

        listItem.appendChild(removeButton);
        itemList.appendChild(listItem);
        itemInput.value = "";
    }
});
