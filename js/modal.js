(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector("[data-modal-open]"),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector("[data-modal-close]"),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle("is-open");
  }
})();

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.modal form');
    const btnSend = document.querySelector('.button-send');

    btnSend.addEventListener('click', () => {
        const name = form.querySelector('#user-name').value.trim();
        const phone = form.querySelector('#user-phone').value.trim();
        const email = form.querySelector('#user-email').value.trim();
        const comment = form.querySelector('#user-comment').value.trim();
        const privacy = form.querySelector('#user-privacy').checked;

        // Простий email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Простой номер телефона (+ цифри)
        const phoneRegex = /^\+?\d{7,15}$/;

        let errors = [];

        if (!name) errors.push("Name is required");
        if (!phone || !phoneRegex.test(phone)) errors.push("Phone is invalid");
        if (!email || !emailRegex.test(email)) errors.push("Email is invalid");
        if (!privacy) errors.push("You must accept the Privacy Policy");

        if (errors.length > 0) {
            alert(errors.join("\n"));
            return;
        }

        // Якщо все ок
        const data = {
            name,
            phone,
            email,
            comment,
            privacy
        };

        console.log("Form data:", data); // тут замість цього можна відправити на сервер

        alert("Your form was successfully submitted!");

        form.reset();
    });
});