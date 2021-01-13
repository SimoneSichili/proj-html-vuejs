var app = new Vue(
    {
        el: '#root',
        data: {
            icona: "<i class='fab fa-twitter'></i>",
            currentNavIndex: 0,
            navElements: [
                {
                    url: "#",
                    text: "Home"
                },
                {
                    url: "#",
                    text: "Pages"
                },
                {
                    url: "#",
                    text: "Portfolio"
                },
                {
                    url: "#",
                    text: "Blog"
                },
                {
                    url: "#",
                    text: "Shop"
                },
                {
                    url: "#",
                    text: "Elements"
                },
            ],
            socialIcons: [
                {
                    url: "https://twitter.com/",
                    class: "fa-twitter"
                },
                {
                    url: "https://www.pinterest.com/",
                    class: "fa-pinterest-p"
                },
                {
                    url: "https://www.facebook.com/",
                    class: "fa-facebook-f"
                },
                {
                    url: "https://www.linkedin.com/",
                    class: "fa-linkedin-in"
                }
            ],
            footerElements: [
                {
                    top: 'maree.qode@gmail.com',
                    bottom: '+44645 321 789'
                },
                {
                    top: 'Avenue d’Auderghem 10',
                    bottom: '1040 Brussels, Belgium'
                },
            ]
        },
        methods: {
            scrollToTop: function() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
        },
    }
);