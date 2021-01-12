var app = new Vue(
    {
        el: '#root',
        data: {
            icona: "<i class='fab fa-twitter'></i>",
            currentNavIndex: 0,
            navElements: [
                "Home",
                "Pages",
                "Portfolio",
                "Blog",
                "Shop",
                "Elements"
            ],
            socialIcons: [
                "<a href='#'><i class='fab fa-twitter'></i></a>",
                "<a href='#'><i class='fab fa-pinterest-p'></i></a>",
                "<a href='#'><i class='fab fa-facebook-f'></i></a>",
                "<a href='#'><i class='fab fa-linkedin-in'></i></a>"
            ],
            footerElements: [
                {
                    top: '<a href="#"><img src="img/logo-sidearea-1.png" alt="Maree Logo"></a>',
                    bottom: '<p>Let’s Get Creative</p>'
                },
                {
                    top: '<a href="#">maree.qode@gmail.com</a>',
                    bottom: '<p>+44645 321 789</p>'
                },
                {
                    top: '<p>Avenue d’Auderghem 10</p>',
                    bottom: '<p>1040 Brussels, Belgium</p>'
                },
            ]
        },
    }
);