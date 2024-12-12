       // Sample json data
       const data = [
        { title: "Create and schedule content", subtitle: "quicker. and simple and clean", buttonText: "Create Post" },
        { title: "Social Media 10x obsession with the data. contents", subtitle: "Faster with  " },
        { title: "Schedule to social media.best way to handle", subtitle: "Best contents now see on internet",  mostActive: "Most Active" },
        { title: "Write your content using AI and others", subtitle: "", content: ["Give me a 5 tips", "Here are five tips..."] },
        { title: "Maintain a consistent distance from the social media", subtitle: "posting schedule.", date: "August 2024"},
        { title: "Grow followers with non-stop content.", subtitle: "with non-stop content.", growth: "20,642" },
        { title: "Engage with your audience", subtitle: "like never before.", content: "Get real-time insights." },
        { title: "Boost your social presence", subtitle: "with powerful analytics.", rate: "8.9%" }
    ];

    // Inject content into boxes

    const elements = [
        { selector: '.create', content: `<h2>${data[0].title} <span class="create-subtitle">${data[0].subtitle}</span></h2>` },
        { selector: '.content', content: `<h2>${data[3].title}</h2><span class="white-color">${data[1].title}</span>` },
        { selector: '.media', content: `<h2 class="white-color">${data[1].title} <span >${data[1].subtitle}</span></h2>` },
        { selector: '.manage', content: `<h2>${data[3].title}</h2>` },
        { selector: '.posting', content: `<h2 class="white-color">${data[1].title}</h2` },
        { selector: '.schedule', content: `<h2 >${data[2].title} <p class="white-color ">${data[2].subtitle}</p></h2><img class="image" src="https://i.postimg.cc/jd3ssTrG/illustration-consistent-schedule.webp">` },
        { selector: '.audience', content: `<h2>${data[4].title} <span>${data[3].subtitle}</span></h2>` },
        { selector: '.followers', content: `<h2 class="white-color">${data[4].title} <span>${data[4].subtitle}</span></h2>` },

    ];

   //for mapping 
    elements.forEach(item => {
        const element = document.querySelector(item.selector);
        if (element) {
            element.innerHTML = item.content;
        }
    });
    