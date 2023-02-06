$('#login-button').click(function (event) {
    let userName = document.getElementById("userName").value;
    let pwd = document.getElementById("pwd").value;
    if ((userName == "Mine" || userName == "mine" || userName == "MINE") && (pwd == "Có" || pwd == "có" || pwd == "Cóoo" || pwd == "Yes" || pwd == "Yep" || or || pwd == "yes" || pwd == "YES")) {
        $('#h').text("HI JOYCE");
        event.preventDefault();
        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
        setTimeout(function () {
            location.href = "BirthdayCake.html";
        }, 4000);
    } else {
        alert("Oops, You're not Joyce. You are Mine.");
    }
});
