$(document).ready(function(){
    // Collapse card when button is clicked
    
    $('[data-card-widget="collapse"]').click(function() {
    var $card = $(this).closest('.card');
    var $sectionToShow = $card.find('.show-this-in-collapsed-view');
    var $cardBody = $card.find('.card-body');

    // Toggle collapse icon
    $(this).toggleClass('collapsed');

    // Toggle card body without animation
    $cardBody.toggle();

    // Check if card body is visible
    if ($cardBody.is(':visible')) {
        // Card body is visible, hide section
        $sectionToShow.hide();
    } else {
        // Card body is hidden, show section
        $sectionToShow.show();
    }

    // Toggle card collapse state
    $card.toggleClass('collapsed-card');
});

});







let progress = document.querySelector(".progress span");
let steps = document.querySelectorAll(".step");
let btnNext = document.querySelector(".btn-next");
let btnPrev = document.querySelector(".btn-prev");
let countSteps = steps.length;
let step = 1;

btnNext.addEventListener("click", () => {
    let widthProgress = (step / (countSteps - 1)) * 100;
    btnPrev.classList.remove("disabled");
    btnPrev.removeAttribute("disabled");
    if (step + 1 <= countSteps) {
        step++;
        // add class active on step
        let newStep = document.querySelector(`[data-step="${step}"]`);
        progress.style.width = `${widthProgress}%`;
        newStep.classList.add("active");
    }
    if (step === countSteps) {
        btnNext.classList.add("disabled");
        btnNext.setAttribute("disabled", "disabled");
    }
});

btnPrev.addEventListener("click", () => {
    btnNext.classList.remove("disabled");
    btnNext.removeAttribute("disabled");
    if (step > 1) {
        let newStep = document.querySelector(`[data-step="${step}"]`);
        newStep.classList.remove("active");
        step--;
        let widthProgress = ((step - 1) / (countSteps - 1)) * 100;
        progress.style.width = `${widthProgress}%`;
    }
    if (step === 1) {
        btnPrev.classList.add("disabled");
        btnPrev.setAttribute("disabled", "disabled");
    }
});

$(document).ready(function() {
    $('#yesRadio').click(function() {
        $('#myModal22').modal('show'); // Show the modal when "Yes" is clicked
    });
});


$(function () {
        $("#datepicker")
          .datepicker({
            autoclose: true,
            todayHighlight: true,
          })
          .datepicker("update", new Date());
      });







