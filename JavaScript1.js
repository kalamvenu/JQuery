
$(document).ready(function () {
    var text_value1 = $("#text1").val();

    var text_value2 = $("#text2").val();

    var result = text_value1 + text_value2;

    $("button").click(function () {

        alert('result is'+result);
    });

});

