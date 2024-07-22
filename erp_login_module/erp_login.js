

$(document).ready(function() {




    var selectedContent = $('input[name="contentSelector"]:checked').val();
        $('#' + selectedContent).show();

        $('input[name="contentSelector"]').on('click', function() {
          var selectedContent = $('input[name="contentSelector"]:checked').val();
          $('.contentpo').hide();
          $('#' + selectedContent).show();
        });





    $(".password-toggle").click(function() {
        // Find the password input element
        var passwordInput = $("#password");

        // Toggle password visibility
        if (passwordInput.attr("type") === "password") {
            passwordInput.attr("type", "text");
            $(this).html('<i class="fas fa-eye"></i>');

        } else {
            passwordInput.attr("type", "password");
            $(this).html('<i class="fas fa-eye-slash"></i>');

        }
    });




    












    // Add event listener to form submission
    $("#loginForm").submit(function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Redirect to a particular HTML page
        window.location.href = "/erp_home_module/erp_home.html";
    });

    $("#forgetPasswordForm").submit(function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Redirect to a particular HTML page
        window.location.href = "/erp_login_module/erp_otp.html";
    });

    $("#otpForm").submit(function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Redirect to a particular HTML page
        window.location.href = "/erp_login_module/erp_createpass.html";
    });


    otpForm
});
  



