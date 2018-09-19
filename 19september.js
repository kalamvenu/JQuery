

$(document).ready(function () {

    //$("#test").mouseenter(function () {
    //    alert("You entered p");
    //});

    $("#test1").click(function () {

        $("p").siblings().css({ "color": "red"});
        $("p").eq(0).css({ "color": "red" });

        $("p").prop("color", "pink");
        $("p").removeProp("color", "pink");
        $("div").find("p");

    });

    $("#test1").dblclick(function () {
        $("#test1").fadeOut();
    });

    $("#test").click(function () {

        console.log($("#test1").attr("class"));

        console.log($("#test1").prop("class"));

        $("#test").attr("class", "1").append("some text");

        $("#test").prop("class", "2");

        $("#test1").attr("class", "1").html("<b>bold</b>");

        $("#test1").prop("class", "2");

        if (($("#test1").prop("class", "2")) > 0) {

            console.log($("#test1").attr("class"));
     
        }

        else {

            console.log($("#test1").prop("class"));
        }
        console.log($("#test1").offset());

        //console.log(v);
        //console.log(p);

        //console.log("hello");
       // var myDiv = $("#test");
       // myDiv.find("#test");
       ///myDiv.children("#test");

       // $("#test1").addClass("paragraph");
        ////alert("You entered p");

        //console.log($("#test").length);
    });

    
        $(".btnsub").click(function () {
            $("#test").remove();
        });
        $(".btnadd").click(function () {
            $("#test1").empty();
        });

        $(".btnhide").click(function () {
            $("#test1").hide(1000);
        });
        $(".btnshow").click(function () {
            $("#test1").show(1000);
        });

        $(".toggle").click(function () {
            $("#test1").toggle(1000);
        });

        $(".toggleclas").click(function () {
            $("p").toggleClass("blue");
        });

        $(".changecolor").click(function () {
            $("p").css("background-color", "yellow");
        });
    

    //$("#test").on("click", function () {
    //    alert("You entered on function");
    //});

    //$("#test").click(function (Func));

    //function Func() {
    //    $("#test").alert("called function");
    //}


    //$("#test").on({
    //    mouseenter: function () {
    //        $(this).css("background-color", "lightgray");
    //        //alert("color changed to lightgray");
    //    },
    //    mouseleave: function () {
    //        $(this).css("background-color", "lightblue");
    //       // alert("color changed to lightblue");
    //    },
    //    click: function () {
    //        $(this).css("background-color", "yellow");
    //       // alert("color changed to yellow");
    //    }
    //});

       
    });




//$("div").fadeOut().css("color", "red").text("hello world");


//$("p").click(function () {
//    $(this).hide();
//});