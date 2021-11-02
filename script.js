/* Create Dark Mode Using jQuery */
$(function() {

    var clicks = 0;
    $(".switch").click(function() {
        // Dark mode
        if (clicks % 2 === 0) {
            $(".switch").css({
                "background": "linear-gradient(65deg,hsl(210, 78%, 56%),hsl(146, 68%, 55%)",
            });

            $(".dot").css({
                "left": "25%",
            });

            $("header").css({
                "background-color": "hsl(232, 19%, 15%)",
            });

            $("body").css({
                "background-color": "hsl(230, 17%, 20%)",
            });

            $("h1, .sec-title, .followers-number, .today-num").css({
                "color": "white",
            });

            $(".total, .themes-box").css({
                "color": "hsl(228, 34%, 66%)",
            });

            $(".social-box, .index").css({
                "background-color": "hsl(228, 28%, 20%)",
            });

            $(".account, .follower-txt, .describe").css({
                "color": "hsl(228, 34%, 66%)",
            });
        }
        
        // Light mode
        else {
            $(".switch").css({
                "background": "hsl(230, 22%, 74%)",
            });

            $(".dot").css({
                "left": "75%",
            });

            $("header").css({
                "background-color": "hsl(225, 100%, 98%)",
            });

            $("body").css({
                "background-color": "white",
            });

            $("h1, .followers-number, .today-num").css({
                "color": "hsl(230, 17%, 14%)",
            });

            $(".total, .themes-box").css({
                "color": "hsl(240, 5%, 70%)",
            });

            $(".sec-title").css({
                "color": "hsl(240, 5%, 60%)",
            });

            $(".social-box, .index").css({
                "background-color": "hsl(227, 47%, 96%)",
            });

            $(".account").css({
                "color": "hsl(240, 5%, 50%)",
            });

            $(".follower-txt").css({
                "color": "hsl(240, 5%, 60%)",
            });

            $(".describe").css({
                "color": "hsl(240, 5%, 30%)",
            });
        }

        clicks++;
    });

});