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
            sliderElements: [
                {
                    title: "Projects made with <span>love</span>",
                    paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequatur ducimus dolorem commodi!",
                    btnUrl: "#",
                    class: "illustration1",
                    images: [
                        {
                            id: "slider1-1",
                            imgUrl: "img/short-slider-rev-1-img-1.png",
                            alt: "Slider-1-1"
                        },
                        {
                            id: "slider1-2",
                            imgUrl: "img/short-slider-rev-1-img-2.png",
                            alt: "Slider-1-2"
                        },
                        {
                            id: "slider1-3",
                            imgUrl: "img/short-slider-rev-1-img-3.png",
                            alt: "Slider-1-3"
                        },
                        {
                            id: "slider1-5",
                            imgUrl: "img/short-slider-rev-1-img-5.png",
                            alt: "Slider-1-5"
                        },
                        {
                            id: "slider1-4",
                            imgUrl: "img/short-slider-rev-1-img-4.png",
                            alt: "Slider-1-4"
                        },
                        {
                            id: "slider1-6",
                            imgUrl: "img/short-slider-rev-1-img-6.png",
                            alt: "Slider-1-6"
                        },
                        {
                            id: "slider1-7",
                            imgUrl: "img/short-slider-rev-1-img-7.png",
                            alt: "Slider-1-7"
                        },
                        {
                            id: "slider1-8",
                            imgUrl: "img/short-slider-rev-1-img-8.png",
                            alt: "Slider-1-8"
                        },
                        {
                            id: "slider1-9",
                            imgUrl: "img/short-slider-rev-1-img-9.png",
                            alt: "Slider-1-9"
                        },
                        {
                            id: "slider1-10",
                            imgUrl: "img/short-slider-rev-1-img-10.png",
                            alt: "Slider-1-10"
                        },
                    ],
                },
                {
                    title: "Our full folio full of <span>joy</span>",
                    paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequatur ducimus dolorem commodi!",
                    btnUrl: "#",
                    class: "illustration2",
                    images: [
                        {
                            id: "slider2-2",
                            imgUrl: "img/short-slider-rev-1-img-2.png",
                            alt: "Slider-2-2"
                        },
                        {
                            id: "slider2-6",
                            imgUrl: "img/short-slider-rev-1-img-6.png",
                            alt: "Slider-2-6"
                        },
                        {
                            id: "slider2-11",
                            imgUrl: "img/h-2-slider-img-11.png",
                            alt: "Slider-2-11"
                        },
                        {
                            id: "slider2-12",
                            imgUrl: "img/h-2-slider-img-12.png",
                            alt: "Slider-2-12"
                        },
                        {
                            id: "slider2-13",
                            imgUrl: "img/h-2-slider-img-13.png",
                            alt: "Slider-2-13"
                        },
                        {
                            id: "slider2-14",
                            imgUrl: "img/h-2-slider-img-14.png",
                            alt: "Slider-2-14"
                        },
                    ],
                },
                {
                    title: "Devotion that never <span>ends</span>",
                    paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequatur ducimus dolorem commodi!",
                    btnUrl: "#",
                    class: "illustration3",
                    images: [
                        {
                            id: "slider3-2",
                            imgUrl: "img/short-slider-rev-1-img-2.png",
                            alt: "Slider-3-2"
                        },
                        {
                            id: "slider2-6",
                            imgUrl: "img/short-slider-rev-1-img-6.png",
                            alt: "Slider-3-6"
                        },
                        {
                            id: "slider3-12",
                            imgUrl: "img/h-2-slider-img-12.png",
                            alt: "Slider-3-12"
                        },
                        {
                            id: "slider3-13",
                            imgUrl: "img/h-2-slider-img-13.png",
                            alt: "Slider-3-13"
                        },
                        {
                            id: "slider3-14",
                            imgUrl: "img/h-2-slider-img-14.png",
                            alt: "Slider-3-14"
                        },
                        {
                            id: "slider3-15",
                            imgUrl: "img/h-2-slider-img-15.png",
                            alt: "Slider-3-15"
                        },
                        {
                            id: "slider3-16",
                            imgUrl: "img/h-2-slider-img-16.png",
                            alt: "Slider-3-16"
                        },
                        {
                            id: "slider3-17",
                            imgUrl: "img/h-2-slider-img-17.png",
                            alt: "Slider-3-17"
                        },
                    ],
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

                if(this.currentImage > this.sliderElements.length - 1) {
                    this.currentImage = 0
                }
            },
            prevImage: function () {
                this.currentImage--;

                if(this.currentImage < 0) {
                    this.currentImage = this.sliderElements.length - 1
                }
            },
        },
    }
);

