// reference https://www.c-sharpcorner.com/article/asp-net-mvc5-jquery-form-validator/

$(document).ready(function () {
    $('#registerFormPractice').validate({
        errorClass: 'help-block animation-slideDown', // You can change the animation class for a different entrance animation - check animations page  
        errorElement: 'div',
        errorPlacement: function (error, e) {
            e.parents('.form-group > div').append(error);
        },
        highlight: function (e) {

            $(e).closest('.form-group').removeClass('has-success has-error').addClass('has-error');
            $(e).closest('.help-block').remove();
        },
        success: function (e) {
            e.closest('.form-group').removeClass('has-success has-error');
            e.closest('.help-block').remove();
        },
        rules: {
            'FirstName': {
                required: true,
            },

            'LastName': {
                required: true,
            }
        },
        messages: {
            'FirstName': 'Please enter First Name',
            'LastName': 'Plesae enter Last Name'
        }
    });
});  