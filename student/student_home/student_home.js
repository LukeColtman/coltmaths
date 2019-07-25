function myFunction() {
    document.getElementById("dropdown_number").classList.toggle("show");
}

function surdClick() {
    document.getElementById("number_surds").classList.toggle("show");
}

function loiClick() {
    document.getElementById("number_loi").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropdown_topics_button')) {
        var dropdowns = document.getElementsByClassName("dropdown_topics_content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    }