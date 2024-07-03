


// function loco() {
//   gsap.registerPlugin(ScrollTrigger);

//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector("body"),
//     smooth: true,
//     lerp: 0.1,


//   });
//   locoScroll.on("scroll", ScrollTrigger.update);

//   ScrollTrigger.scrollerProxy("body", {
//     scrollTop(value) {
//       return arguments.length
//         ? locoScroll.scrollTo(value, 0, 0)
//         : locoScroll.scroll.instance.scroll.y;
//     },
//     getBoundingClientRect() {
//       return {
//         top: 0,
//         left: 0,
//         width: window.innerWidth,
//         height: window.innerHeight,
//       };
//     },
//     pinType: document.querySelector("body").style.transform
//       ? "transform"
//       : "fixed",
//   });

//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//   ScrollTrigger.refresh();
// }

// loco();


// function loco() {
//   gsap.registerPlugin(ScrollTrigger);

//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector("body"),
//     smooth: true,
//     lerp: 0.1,
//     smartphone: {
//       smooth: true
//     },
//     tablet: {
//       smooth: true
//     }
//   });

//   locoScroll.on("scroll", ScrollTrigger.update);

//   ScrollTrigger.scrollerProxy("body", {
//     scrollTop(value) {
//       return arguments.length
//         ? locoScroll.scrollTo(value, 0, 0)
//         : locoScroll.scroll.instance.scroll.y;
//     },
//     getBoundingClientRect() {
//       return {
//         top: 0,
//         left: 0,
//         width: window.innerWidth,
//         height: window.innerHeight,
//       };
//     },
//     pinType: document.querySelector("body").style.transform
//       ? "transform"
//       : "fixed",
//   });

//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//   ScrollTrigger.refresh();
// }




const video = document.getElementById("vid");
video.playbackRate = 0.5;

var clutter = ``;

document
  .querySelector(`.aboutme p`)
  .textContent.split(` `)
  .forEach(function (dets) {
    clutter += `<span> ${dets} <span>`;

    document.querySelector(`.aboutme p`).innerHTML = clutter;
  });

function gs() {
  var t1 = gsap.timeline();

  t1.to(`main`, {
    autoAlpha: 1,
  })

  gsap.to(`nav`, {
    backgroundColor: `#000`,
    duration: 0.8,
    height:`80px`,
    scrollTrigger:{
      trigger:`nav`,
      scroller:`body`,
      start:`top -20%`,
      end: `top -11%`,
      scrub:1,
    }
  })

  t1.from(".welcome h1", {
    x: -1800,
    duration: 1,
    stagger: 0.5,
    opacity: 0.2,
    ease: "power4.Out",
  });

  t1.to(".welcome", {
    delay: 1,
    y: -950,
  });

  t1.from("#vid", {
    duration: 1,
    scrub: true,
    opacity: 0,
  });

  t1.from(
    "nav img, nav a",
    {
      y: -100,
      duration: 1,
      delay: 0.2,
      opacity: 0,
      stagger: 0.5,
    }
  );

  t1.from(".texts h2, .texts h3, .texts p, .hire-btn", {
    x: -500,
    duration: 1,
    opacity: 0,
    stagger: 0.3,
  });

  t1.from(".profile img", {
    x: -800,
    opacity: 0,
    duration: 0.6,
    ease: "power1.out",
  });

  t1.from(".texts button", {
    y: -5,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1,
  });

  t1.from(`.aboutme p span`, {
    scrollTrigger: {
      trigger: `.aboutme p span`,
      start: `top bottom`,
      end: `bottom 70%`,
      scroller: `body`,
      scrub: 5,
    },
    stagger: 2,
    color: `rgb(63, 63, 63)`,
  });

  t1.from(`.animh1`, {
    scrollTrigger: {
      trigger:`.animh1`,
      start:`top bottom`,
      end: `bottom 70%`,
      scroller:`body`,
      scrub:5,
    },
    y:100,
    opacity:0,
    stagger:2,
  })

  t1.from(`#des-1, #des-2, #des-3, #des-4, #des-5`, {
    scrollTrigger: {
      trigger: `#des-1, #des-2, #des-3, #des-4, #des-5`,
      start: `top 90%`,
      end: `bottom 90%`,
      scroller: `body`,
      scrub: 5,
    },

    opacity: 0,
    stagger: 0.2,
  });

  t1.from(`#dev-1, #dev-2, #dev-3, #dev-4, #dev-5, #dev-6`, {
    scrollTrigger: {
      trigger: `#des-1, #des-2, #des-3, #des-4, #des-5, #dev-6`,
      start: `top 90%`,
      end: `bottom 90%`,
      scroller: `body`,
      scrub: 5,
    },

    opacity: 0,
    stagger: 0.2,
  });

  gsap.from(`#scrolltab1, #scrolltab2, #scrolltab3`, {
    scrollTrigger: {
      trigger: `#scrolltab1, #scrolltab2, #scrolltab3`,
      start: `top 90%`,
      end: `bottom 90%`,
      scroller: `body`,
      scrub: 5,
    },
    x: -1800,
    opacity: 0,
    stagger: 0.2,
  });

  gsap.from(`.table h2, .table p`, {
    scrollTrigger: {
      trigger: `.table h2, .table p`,
      start: `top 90%`,
      end: `bottom 90%`,
      scroller: `body`,
      scrub: 5,
    },
    opacity: 0,
    stagger: 0.2,
  });

  gsap.from(`.quote span`, {
    scrollTrigger: {
      trigger: `.quote span`,
      start: `top 90%`,
      end: `bottom 90%`,
      scroller: `body`,
      scrub: 5,
    },
    opacity: 0,
    stagger: 0.2,
  });

  gsap.from(`#work h2`, {
    scrollTrigger: {
      trigger: `.work h2`,
      start: `top 90%`,
      end: `bottom 90%`,
      scroller: `body`,
      scrub: 5,
    },
    opacity: 0,
    stagger: 0.2,
  });

  gsap.from(`.project-1`, {
    scrollTrigger: {
      trigger: `.project-1, .project-2`,
      start: `top 90%`,
      end: `bottom 90%`,
      scroller: `body`,
      scrub: 5,
    },
    x: -1000,
    opacity: 0,
    stagger: 0.2,
    rotate: -360,
  });

  gsap.from(`.project-2`, {
    scrollTrigger: {
      trigger: `.project-2`,
      start: `top 90%`,
      end: `bottom 90%`,
      scroller: `body`,
      scrub: 5,
    },
    x: 1000,
    opacity: 0,
    stagger: 0.2,
    rotate: 360,
  });

  gsap.from(`.graph1, .graph2,.graph3`, {
    scrollTrigger: {
      trigger: `.graph1,graph2,.graph3`,
      start: `top 100%`,
      end: `bottom 90%`,
      scroller: `body`,
      scrub: 5,
    },
    y: 200,
    opacity: 0,
    stagger: 0.1,
  });
}

gs();

Shery.mouseFollower({
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet(".profile .texts", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});



