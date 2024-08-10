// hero section ----------------------------------------------------
gsap.to(
    "#name", {
        opacity: 1,
        duration: 1,
        y: 10,
    }
)
gsap.to(
    "#des", {
        opacity: 1,
        duration: 1,
        delay: 1,
        y: 10,
    }
)
gsap.to(
        "#vk", {
            opacity: 1,
            delay: 1,
            duration: 1,
        }
    )
    // rise ----------------------------------------------------
gsap.to(
    "#img1", {
        scale: 1,
        duration: 0.5,
        scrollTrigger: {
            trigger: "#img1",
            start: "top 85%", // animation starts when the top touches the 60% of the viewport height
            end: "bottom 10%", // animation ends when the bottom touches the 30% of the viewport height
            toggleActions: "play reverse restart reverse", // play pause resume reverse restart reset complete
            // onEnter onLeave onEnterBack onLeaveBack
        }
    }
)
gsap.to(
    "#s1", {
        x: 0,
        // scrollTrigger:"#box3",
        scrollTrigger: {
            trigger: "#s1",
            start: "top 85%", // animation starts when the top touches the 60% of the viewport height
            end: "bottom 10%", // animation ends when the bottom touches the 30% of the viewport height
            toggleActions: "play reverse restart reverse", // play pause resume reverse restart reset complete
            // onEnter onLeave onEnterBack onLeaveBack
        }
    }
)
gsap.to(
        "#p1", {
            x: 0,
            scrollTrigger: {
                trigger: "#p1",
                start: "top 85%", // animation starts when the top touches the 60% of the viewport height
                end: "bottom 10%", // animation ends when the bottom touches the 30% of the viewport height
                toggleActions: "play reverse restart reverse", // play pause resume reverse restart reset complete
                // onEnter onLeave onEnterBack onLeaveBack
            }
        }
    )
    // rise ----------------------------------------------------
gsap.to(
    "#img2", {
        scale: 1,
        duration: 0.5,
        scrollTrigger: {
            trigger: "#img2",
            start: "top 85%", // animation starts when the top touches the 60% of the viewport height
            end: "bottom 10%", // animation ends when the bottom touches the 30% of the viewport height
            toggleActions: "play reverse restart reverse", // play pause resume reverse restart reset complete
            // onEnter onLeave onEnterBack onLeaveBack

        }
    }
)
gsap.to(
    "#s2", {
        x: 0,
        scrollTrigger: {
            trigger: "#s2",
            start: "top 85%", // animation starts when the top touches the 60% of the viewport height
            end: "bottom 10%", // animation ends when the bottom touches the 30% of the viewport height
            toggleActions: "play reverse restart reverse", // play pause resume reverse restart reset complete
            // onEnter onLeave onEnterBack onLeaveBack
        }
    }
)
gsap.to(
        "#p2", {
            x: 0,
            scrollTrigger: {
                trigger: "#p2",
                start: "top 85%", // animation starts when the top touches the 60% of the viewport height
                end: "bottom 10%", // animation ends when the bottom touches the 30% of the viewport height
                toggleActions: "play reverse restart reverse", // play pause resume reverse restart reset complete
                // onEnter onLeave onEnterBack onLeaveBack
            }
        }
    )
    // rise ----------------------------------------------------
gsap.to(
    "#img3", {
        scale: 1,
        duration: 0.5,
        scrollTrigger: {
            trigger: "#img3",
            start: "top 85%", // animation starts when the top touches the 60% of the viewport height
            end: "bottom 10%", // animation ends when the bottom touches the 30% of the viewport height
            toggleActions: "play reverse restart reverse", // play pause resume reverse restart reset complete
            // onEnter onLeave onEnterBack onLeaveBack
        }
    }
)
gsap.to(
    "#s3", {
        x: 0,
        scrollTrigger: {
            trigger: "#s3",
            start: "top 85%", // animation starts when the top touches the 60% of the viewport height
            end: "bottom 10%", // animation ends when the bottom touches the 30% of the viewport height
            toggleActions: "play reverse restart reverse", // play pause resume reverse restart reset complete
            // onEnter onLeave onEnterBack onLeaveBack
        }
    }
)
gsap.to(
        "#p3", {
            x: 0,
            scrollTrigger: {
                trigger: "#p3",
                start: "top 85%", // animation starts when the top touches the 60% of the viewport height
                end: "bottom 10%", // animation ends when the bottom touches the 30% of the viewport height
                toggleActions: "restart none none none", // play pause resume reverse restart reset complete
                // onEnter onLeave onEnterBack onLeaveBack
            }
        }
    )
    // scrubbing ----------------------------------------------------
gsap.to(
    "#ag", {
        x: -600,
        scrollTrigger: {
            trigger: "#scrubbing",
            start: "top 70%", // animation starts when the top touches the 60% of the viewport height
            end: "bottom 10%", // animation ends when the bottom touches the 30% of the viewport height
            scrub: true,
            toggleActions: "restart none none none", // play pause resume reverse restart reset complete
            // onEnter onLeave onEnterBack onLeaveBack
        }
    }
)
gsap.to(
    "#k", {
        x: 600,
        scrollTrigger: {
            trigger: "#scrubbing",
            start: "top 70%", // animation starts when the top touches the 60% of the viewport height
            end: "bottom 10%", // animation ends when the bottom touches the 30% of the viewport height
            scrub: true,
            toggleActions: "restart none none none", // play pause resume reverse restart reset complete
            // onEnter onLeave onEnterBack onLeaveBack
        }
    }
)
gsap.to(
    "#cp", {
        x: -600,
        scrollTrigger: {
            trigger: "#scrubbing",
            start: "top 70%", // animation starts when the top touches the 60% of the viewport height
            end: "bottom 10%", // animation ends when the bottom touches the 30% of the viewport height
            scrub: true, //can use 'true' 
            toggleActions: "play reverse restart reverse", // play pause resume reverse restart reset complete
            // onEnter onLeave onEnterBack onLeaveBack
        }
    }
)

//typedJS ----------------------------------------------------
var typed = new Typed('#quote', {
    strings: ['Self-belief and hard work will always earn you success.', 'I never fear failure, I only fear not trying.', 'Your fear of failure can be your greatest motivator.', 'You have to be fearless and take risks in order to achieve greatness.', 'Passion and hard work can overcome any obstacle.', 'There is always room for improvement, no matter how good you think you are.', 'Success is not just about talent, it is about persistence and determination.', 'Do not let success get to your head, stay humble and grounded.', 'I do not believe in luck, I believe in hard work and preparation.'],
    typeSpeed: 50,
    loop: true,
});