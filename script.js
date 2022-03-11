let span = document.querySelectorAll("span");

span.forEach((el, index1) => {
    el.addEventListener("click", function () {
        span.forEach((el, index2) => {
            if (index1 == index2) {
                el.parentElement.classList.toggle("active");
                el.innerHTML = "-";
                if (!el.parentElement.classList.contains("active")) {
                    el.textContent = "+";
                }
            }
            else if (index1 !== index2) {
                el.parentElement.classList.remove("active");
                el.innerHTML = "+";
            }
        })
    })
})