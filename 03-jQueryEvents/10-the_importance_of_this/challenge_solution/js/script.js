$(document).ready(function() {

    $(".stream-nav").on("click", function() {   
        var allStreams = ".card";
        var thisStream = "." + this.id + "-card";
        $(allStreams).removeClass("card-highlight");
        $(thisStream).addClass("card-highlight");
    });
});


