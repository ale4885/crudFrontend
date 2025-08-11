import {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory
} from "../services/categoryService.js";

document.addEventListener("DOMContentLoaded", ()=>{
    const tableBody = document.querySelector("#categoriesTable tbody");
    const form = document.getElementById("categoryForm");
    const modal = new bootstrap.Modal(document.getElementById("categoryModal"));
    const lblModal = document.getElementById("categoryModalLabel");
    const btnAdd = document.getElementById("btnAddCategory"); //Botón para abrir modal 

    init(); //Este método permite cargar las categorías en la tabla

    btnAdd.addEventListener("click", ()=>{
        form.reset();
        form.categoryId.value = "";
        lblModal.textContent = "Agregar Categoria";
        modal.show();
    })
});