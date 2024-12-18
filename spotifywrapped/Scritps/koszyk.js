document.addEventListener("DOMContentLoaded", () => {
  
    const updateKoszykList = () => {
      koszykList.innerHTML = koszyk
        .map((item, index) => {
          return `
            <li class="lista__content--item">
              ${item}
              <button class="remove-btn" data-index="${index}">Usuń</button>
            </li>
          `;
        })
        .join("");
    };
  
    const removeItemFromKoszyk = (index) => {
      koszyk.splice(index, 1);
      localStorage.setItem("koszyk", JSON.stringify(koszyk));
      updateKoszykList();
    };
  
    koszykList.addEventListener("click", (e) => {
      if (e.target.classList.contains("remove-btn")) {
        const index = e.target.dataset.index;
        removeItemFromKoszyk(index);
      }
    });
  
    updateKoszykList();
  });
  