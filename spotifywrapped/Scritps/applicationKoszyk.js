document.addEventListener("DOMContentLoaded", () => {
  
    const saveKoszykToLocalStorage = () => {
      localStorage.setItem("koszyk", JSON.stringify(koszyk));
    };
  
    const updateKoszykList = () => {
      koszykList.innerHTML = koszyk
        .map((item) => `<li>${item}</li>`)
        .join("");
    };
  
    const showNotification = (message, button) => {
      const notification = document.createElement("div");
      notification.className = "notification";
      notification.textContent = message;
  
      const rect = button.getBoundingClientRect();
      notification.style.position = "absolute";
      notification.style.top = `${rect.bottom + window.scrollY + 10}px`;
      notification.style.left = `${rect.left + window.scrollX}px`;
  
      document.body.appendChild(notification);
  
      setTimeout(() => notification.remove(), 3000);
    };
  
    document.querySelectorAll(".add-to-cart").forEach((button) => {
      button.addEventListener("click", () => {
        const item = button.dataset.item;
        koszyk.push(item);
        saveKoszykToLocalStorage();
        updateKoszykList();
        showNotification(`${item} dodano do koszyka!`, button);
      });
    });
  
    koszykButton.addEventListener("click", () => {
      koszykModal.style.display = "block";
    });
  
    closeKoszyk.addEventListener("click", () => {
      koszykModal.style.display = "none";
    });
  
    updateKoszykList();
  });
  