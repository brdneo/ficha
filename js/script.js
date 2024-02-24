function atualizarHorario() {
    var dataAtual = new Date();
    flatpickrInstance.setDate(dataAtual, false);
}

var flatpickrInstance = flatpickr("#datepicker", {
    enableTime: true,
    dateFormat: "d/m/Y   -   H:i",
    defaultDate: new Date(),
});

setInterval(atualizarHorario, 1000);

flatpickr("#datepicker-03", {
    dateFormat: "d/m/Y",
});

flatpickr("#datepicker-02", {
    dateFormat: "d/m/Y",
    defaultDate: "01/01/2024",
});

document.addEventListener("DOMContentLoaded", function () {
    var input = document.getElementById("datepicker-03");
    input.value = "/        /"; // Define o valor inicial como " / / "
});

function formatarCEP(input) {
    var cep = input.value.replace(/\D/g, "");
    cep = cep.replace(/^(\d{5})(\d)/, "$1-$2");
    input.value = cep;
}
function formatarCNPJ(input) {
    var cnpj = input.value.replace(/\D/g, "");
    cnpj = cnpj.replace(/^(\d{2})(\d)/, "$1.$2");
    cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    cnpj = cnpj.replace(/\.(\d{3})(\d)/, ".$1/$2");
    cnpj = cnpj.replace(/(\d{4})(\d)/, "$1-$2");
    input.value = cnpj;
}

const toggleButtons = document.querySelectorAll(".toggle-button");

toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
        toggleButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        document.getElementById("opcao").value =
            button.getAttribute("data-value");
    });
});

const fieldset = document.querySelector(".title-02-section");

const fieldsetAside = document.querySelector(".title-03-section");

const select = document.getElementById("select-motivo");

const twoColumns = document.querySelector(".two-columns");

select.addEventListener("change", function () {
    if (select.value === "opt2") {
        // para mudar a opção de ativação faça a substituição por aqui. Por exemplo: select.value === "opt3"
        fieldset.classList.add("active");
        fieldsetAside.classList.add("active");
        twoColumns.classList.add("active");
    } else {
        fieldset.classList.remove("active");
        fieldsetAside.classList.remove("active");
        twoColumns.classList.remove("active");
    }
});
