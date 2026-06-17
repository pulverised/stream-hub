const buttons = document.querySelectorAll(".connect-btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".service-card");

        const service =
            card.dataset.service;

        localStorage.setItem(
            service,
            JSON.stringify({
                connected:true
            })
        );

        button.textContent =
            "Connected ✓";

        button.style.background =
            "#2ecc71";
    });

});
