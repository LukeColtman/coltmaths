function numberDrop() {
    document.getElementById("dropdown_number").classList.toggle("show");
}

function algebraDrop() {
    document.getElementById("dropdown_algebra").classList.toggle("show");
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


// Algebra Click Function

function algebraicManipulationClick() {
    document.getElementById("algebra_algebraicmanipulation").classList.toggle("show");
}

function coordinatesClick() {
    document.getElementById("algebra_coordinates").classList.toggle("show");
}

function equationsClick() {
    document.getElementById("algebra_equations").classList.toggle("show");
}

function formulaeClick() {
    document.getElementById("algebra_formulae").classList.toggle("show");
}

function functionMachinesClick() {
    document.getElementById("algebra_functionmachines").classList.toggle("show");
}

function functionsClick() {
    document.getElementById("algebra_functions").classList.toggle("show");
}

function graphsClick() {
    document.getElementById("algebra_graphs").classList.toggle("show");
}

function indexLawsClick() {
    document.getElementById("algebra_indexlaws").classList.toggle("show");
}

function inequalitiesClick() {
    document.getElementById("algebra_inequalities").classList.toggle("show");
}

function numericalSolutionsAndIterationClick() {
    document.getElementById("algebra_numericalsolutionsanditeration").classList.toggle("show");
}

function proofClick() {
    document.getElementById("algebra_proof").classList.toggle("show");
}

function sequencesClick() {
    document.getElementById("algebra_sequences").classList.toggle("show");
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