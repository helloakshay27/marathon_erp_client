

  $(document).ready(function() {


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
        window.location.href = "/componets/erp_sidebar.html";
    });
});
  



$(document).ready(function () {
    // Hide OTP and Create Password forms initially
    $("#otpForm, #createPasswordForm,#forgetPasswordContainer").hide();


$(".forget-btn").click(function(){
    $("#forgetPasswordContainer").show();
    $("#loginForm").hide();



});


    // Submit forget password form
    $("#forgetPasswordForm").submit(function (event) {
        event.preventDefault();
        var email = $("#forgetEmail").val();
        // Perform AJAX request to send OTP to the provided email
        // Upon success, show OTP form and hide forget password form
        // You can simulate success for demonstration purpose
        // Replace the following lines with actual AJAX call
        $("#forgetPasswordForm").hide();
        $("#otpForm").show();
    });

    // Submit OTP form
    $("#otpForm").submit(function (event) {
        event.preventDefault();
        var otp = $("#otp").val();
        // Perform AJAX request to verify OTP
        // Upon success, show create new password form and hide OTP form
        // You can simulate success for demonstration purpose
        // Replace the following lines with actual AJAX call
        $("#otpForm").hide();
        $("#createPasswordForm").show();
    });

    // Submit create password form
    $("#createPasswordForm").submit(function (event) {
        event.preventDefault();
        var newPassword = $("#newPassword").val();
        var confirmPassword = $("#confirmPassword").val();
        // Perform validation for password matching, length, etc.
        // If validation passes, proceed to update password
        // You can simulate success for demonstration purpose
        // Replace the following lines with actual password update logic
        alert("Password updated successfully!");
        // Redirect user to login page or any other desired action
    });
});