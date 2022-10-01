document.body.onscroll = function() {
    const reveals = document.querySelectorAll(".reveal");
  
    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
            if (!element.classList.contains('active')) {
                let delay = element.getAttribute('delay');
                delay = (delay == null ? 0 : delay);
                setTimeout(function() {
                    element.classList.add("active");
                }, parseInt(delay))
            }
        } else if (elementTop > windowHeight) {
            if (element.classList.contains('active')) {
                element.classList.remove("active");
            }
        }
    })
};
