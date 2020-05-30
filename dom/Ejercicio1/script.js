function clean () {
    document.querySelectorAll(".inputText").forEach (function (input) {
        input.value = null;
    })
} 