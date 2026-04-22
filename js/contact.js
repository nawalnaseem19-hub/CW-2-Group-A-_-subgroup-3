$(document).ready(function () {
    $('#booking-form').on('submit', function (e) {
        e.preventDefault();

        const name = $('#full-name').val()?.trim();
        const email = $('#email').val()?.trim();
        const date = $('#booking-date').val();
        const guestCount = parseInt($('#guest-count').val(), 10);

        $('#form-feedback').hide().removeClass('success error');

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const selectedDate = new Date(date);

        if (!name || !email || !date) {
            $('#form-feedback')
                .text("⚠️ Please fill in all required fields.")
                .addClass('error')
                .fadeIn();
        } else if (!/^[A-Za-z\s]+$/.test(name)) {
            $('#form-feedback')
                .text("⚠️ Name should contain only letters.")
                .addClass('error')
                .fadeIn();
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            $('#form-feedback')
                .text("⚠️ Please enter a valid email address.")
                .addClass('error')
                .fadeIn();
        } else if (selectedDate < today) {
            $('#form-feedback')
                .text("⚠️ Please choose a valid future check-in date.")
                .addClass('error')
                .fadeIn();
        } else if (isNaN(guestCount) || guestCount < 1 || guestCount > 10) {
            $('#form-feedback')
                .text("⚠️ Please enter a guest number between 1 and 10.")
                .addClass('error')
                .fadeIn();
        } else {
            $(this).fadeOut(300, function () {
                $('#form-feedback')
                    .html(`<h3>Success!</h3><p>Thank you, <strong>${name}</strong>. Your reservation for ${date} has been received.</p>`)
                    .addClass('success')
                    .fadeIn();
            });
        }
    });
});