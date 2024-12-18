const menu = document.querySelector("#menu");
const menuContainer = document.querySelector("#menuContainer");
const menuClose = document.querySelector("#menu--close");
// ---------------------------------------------------------------
const koszyk = JSON.parse(localStorage.getItem("koszyk")) || [];
    const koszykList = document.getElementById("koszykList");
    const koszykButton = document.getElementById("koszykButton");
    const koszykModal = document.getElementById("koszykModal");
    const closeKoszyk = document.getElementById("closeKoszyk");