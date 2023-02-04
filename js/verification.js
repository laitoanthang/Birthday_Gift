$('#login-button').click(function (event) {
    let userName = document.getElementById("userName").value;
    let pwd = document.getElementById("pwd").value;
    if ((userName == "Mine" || userName == "mine") && (pwd == "Có" || pwd == "Cóo" || pwd == "Cóoo" || pwd == "Yes" || pwd == "Yep" || or || pwd == "Yup" || pwd == "YES")) {
        $('#h').text("HI THERE");
        event.preventDefault();
        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
        setTimeout(function () {
            location.href = "BirthdayCake.html";
        }, 4000);
    } else {
        alert("Oops, You're not Giang. You are Mine.");
    }
});
