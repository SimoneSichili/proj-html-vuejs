var app = new Vue(
    {
        el: '#root',
        data: {
            currentNavIndex: 0,
            currentItem: null,
            currentImage: 0,
            logo: {
                url: "#",
                imgUrl: "img/logo-sidearea-1.png",
                alt: "Maree Logo"
            },
            navElements: [
                {
                    url: "#",
                    text: "Home",
                    dropdownItems: [
                        {
                            url: "#",
                            text: "Main Home"
                        },
                        {
                            url: "#",
                            text: "Floating Portfolio"
                        },
                        {
                            url: "#",
                            text: "Portfolio Pinterest"
                        },
                        {
                            url: "#",
                            text: "Animated Slider"
                        },
                        {
                            url: "#",
                            text: "Portfolio Metro"
                        },
                        {
                            url: "#",
                            text: "Portfolio Gallery"
                        },
                        {
                            url: "#",
                            text: "Interactive Links"
                        },
                        {
                            url: "#",
                            text: "Split Slider Showcase"
                        },
                        {
                            url: "#",
                            text: "Portfolio Carousel"
                        },
                        {
                            url: "#",
                            text: "Landing"
                        },   
                    ],
                },
                {
                    url: "#",
                    text: "Pages",
                    dropdownItems: [
                        {
                            url: "#",
                            text: "About Us"
                        },
                        {
                            url: "#",
                            text: "About Me"
                        },
                        {
                            url: "#",
                            text: "What We Offer"
                        },
                        {
                            url: "#",
                            text: "Working process"
                        },
                        {
                            url: "#",
                            text: "Our Team"
                        },
                        {
                            url: "#",
                            text: "Pricing Plans"
                        },
                        {
                            url: "#",
                            text: "Contact Us"
                        },
                        {
                            url: "#",
                            text: "Coming Soon"
                        },
                        {
                            url: "#",
                            text: " 404 Error Page"
                        }, 
                    ],                   
                },
                {
                    url: "#",
                    text: "Portfolio"
                },
                {
                    url: "#",
                    text: "Blog",
                    dropdownItems: [
                        {
                            url: "#",
                            text: "Right Sidebar"
                        },
                        {
                            url: "#",
                            text: "Left Sidebar"
                        },
                        {
                            url: "#",
                            text: "Centered"
                        },
                        {
                            url: "#",
                            text: "Post Types"
                        },
                    ], 
                },
                {
                    url: "#",
                    text: "Shop",
                    dropdownItems: [
                        {
                            url: "#",
                            text: "Product List"
                        },
                        {
                            url: "#",
                            text: "Product Single"
                        },
                        {
                            url: "#",
                            text: "Shop Layouts"
                        },
                        {
                            url: "#",
                            text: "Three Columns"
                        },
                        {
                            url: "#",
                            text: "Three Columns Wide"
                        },
                        {
                            url: "#",
                            text: "Four Columns"
                        },
                        {
                            url: "#",
                            text: "Four Columns Wide"
                        },
                        {
                            url: "#",
                            text: "Five Columns"
                        },
                        {
                            url: "#",
                            text: "Five Columns Wide"
                        },
                        {
                            url: "#",
                            text: "Shop Pages"
                        },
                    ],
                },
                {
                    url: "#",
                    text: "Elements"
                },
            ],
            galleryCards: [
                {
                    imgUrl: "img/h-2-port-img-1.jpg",
                    title: "All these illustrations",
                    subtitle: "Illustration"
                },
                {
                    imgUrl: "img/h-2-port-img-2.jpg",
                    title: "Type and illustrations",
                    subtitle: "Illustration"
                },
                {
                    imgUrl: "img/h-2-port-img-3.jpg",
                    title: "Draw and illustrate",
                    subtitle: "Illustration"
                },
                {
                    imgUrl: "img/h-2-port-img-4.jpg",
                    title: "Illustrations of novels",
                    subtitle: "Illustration"
                },
                {
                    imgUrl: "img/h-2-port-img-5.jpg",
                    title: "Dreams are illustrations",
                    subtitle: "Illustration"
                },
                {
                    imgUrl: "img/h-2-port-img-6.jpg",
                    title: "Illustration of novels",
                    subtitle: "Illustration"
                },
            ],
            processElements: [
                {
                    icon: "fas fa-lightbulb",
                    title: "First theres an idea",
                    paragraph: "Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself."
                },
                {
                    icon: "far fa-comment",
                    title: "Then we talk about",
                    paragraph: "Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself."
                },
                {
                    icon: "fas fa-cloud",
                    title: "And we think about",
                    paragraph: "Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself."
                },
                {
                    icon: "fas fa-pencil-ruler",
                    title: "So we draw along",
                    paragraph: "Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself."
                },
            ],
            blogArticles:  [
                {
                    dateTop: "07",
                    dateBottom: "MAY '21",
                    url: "#",
                    imgUrl: "img/h-2-blog-img-1.jpg",
                    title: "This way, loves: a detailed guide through new design",
                    author: "By Emily Fields"
                },
                {
                    dateTop: "07",
                    dateBottom: "MAY '21",
                    url: "#",
                    imgUrl: "img/h-2-blog-img-2.jpg",
                    title: "I try to give people a different way of looking art",
                    author: "By Emily Fields"
                },
                {
                    dateTop: "07",
                    dateBottom: "MAY '21",
                    url: "#",
                    imgUrl: "img/h-2-blog-img-3.jpg",
                    title: "Introduce Richard Laperrière of those amazing features",
                    author: "By Emily Fields"
                },
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
        },
        methods: {
            scrollToTop: function() {
                document.documentElement.scrollTop = 0;
            },
            showDropdown: function(itemIndex) {
                this.currentItem = itemIndex;
            },
            nextImage: function () {
                this.currentImage++;

                if(this.currentImage > 2) {
                    this.currentImage = 0
                }
            },
            prevImage: function () {
                this.currentImage--;

                if(this.currentImage < 0) {
                    this.currentImage = 2
                }
            },
        },
    }
);

