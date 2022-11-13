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

function ContactMe() {
    let inputs = document.querySelectorAll('input, select, textarea')
    
    fetch(`https://laiba.warze.org/?formsubmission=yes&formfirstname=${inputs[0].value}&formlastname=${inputs[1].value}&formemail=${inputs[2].value}&formreason=${inputs[3].value}&formmessage=${inputs[4].value}`).then((r) => {
        swal({
            title: "Form Submitted!",
            text: "I've got your message and will get back to you as soon as possible. Thanks for stopping by!",
            icon: "success",
            button: "OKAY",
          });
    })
}