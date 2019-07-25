function myFunction() {
    document.getElementById("dropdown_number").classList.toggle("show");
}

// Number click functions

function arithmeticClick() {
    document.getElementById("number_arithmetic").classList.toggle("show");
}

function arithmeticClick() {
    document.getElementById("number_arithmetic").classList.toggle("show");
}

function bidmasClick() {
    document.getElementById("number_bidmas").classList.toggle("show");
}

function decimalsClick() {
    document.getElementById("number_decimals").classList.toggle("show");
}

function fractionsClick() {
    document.getElementById("number_fractions").classList.toggle("show");
}

function indicesClick() {
    document.getElementById("number_indices").classList.toggle("show");
}

function fdpClick() {
    document.getElementById("number_fdp").classList.toggle("show");
}

function negativesClick() {
    document.getElementById("number_negatives").classList.toggle("show");
}

function percentagesClick() {
    document.getElementById("number_percentages").classList.toggle("show");
}

function numberPropertiesClick() {
    document.getElementById("number_numberproperties").classList.toggle("show");
}

function recurringDecimalsClick() {
    document.getElementById("number_recurringdecimals").classList.toggle("show");
}

function roundingAndEstimatingClick() {
    document.getElementById("number_roundingandestimating").classList.toggle("show");
}

function standardFormClick() {
    document.getElementById("number_standardform").classList.toggle("show");
}

function surdClick() {
    document.getElementById("number_surds").classList.toggle("show");
}

function timetablesClick() {
    document.getElementById("number_timetables").classList.toggle("show");
}

function boundsClick() {
    document.getElementById("number_bounds").classList.toggle("show");
}

function usingCalculatorClick() {
    document.getElementById("number_usingcalculator").classList.toggle("show");
}




window.onclick = function(event) {
    if (!event.target.matches('.dropdown_topics_button') && !event.target.mathches('.dropdown_content')) {
        var dropdowns = document.getElementsByClassName("dropdown_content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    }