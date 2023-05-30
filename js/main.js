gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const tl = gsap.timeline();

tl.from('.img-1', 2, {
    ease: "power4.out",
    scale: 1.2
})
tl.from('.img-6', 2, {
    ease: "power4.out",
    scale: 1.2
}, '>-2')
tl.from('.img-5', 2, {
    ease: "power4.out",
    scale: 1.2
}, '>-2')
tl.from('.img-2', 4, {
    ease: "expo.inOut",
    rotate: -3,
    x: '-100',
    y: '20'
}, '>-3')
tl.from('.img-3', 4, {
    ease: "expo.inOut",
    rotate: 3,
    x: '100',
    y: '20'
}, '>-4')
tl.from('.img-4', 2, {
    scale: 0.7,
    y: 70
}, '>-3')
tl.from('.img-7', 2, {
    rotate: 40,
    x: -180,
    y: 40
}, '>-2')
tl.from('.img-8', 3, {
    ease: "power4.out",
    rotate: -40,
    x: 250,
    y: 50
}, '>-2')
tl.from('.img-9', 4, {
    ease: "power4.out",
    opacity: 0
}, '>-1')
tl.fromTo('.header__top', 1, {
    y: -60
},
{
  y: 0
}, '>-5')
tl.to('.header__content', 2, {
    ease: "power4.out",
    y: 0,
    opacity: 1
}, '>-0.5')

const titles = gsap.utils.toArray('.title')
const advantagesItem = gsap.utils.toArray('.advantages__item')
const questionsFormItem = gsap.utils.toArray('.questions__form-item')

if(ScrollTrigger.isTouch !== 1){
    ScrollSmoother.create({
      wrapper: '.scroll-wrapper',
      content: '.scroll-content',
      smooth: 1.5,
      effects: true
    })
  
  gsap.fromTo('.img-7',
  {
    rotate: 0,
    x: 0,
    y: 0
  },
  {
    rotate: 40,
    x: -120,
    y: 40,
    scrollTrigger:{
      trigger: '.img-7',
      start: 50,
      end: 500,
      scrub: true
    }
  })

  gsap.fromTo('.img-8',
  {
    rotate: 0,
    x: 0,
    y: 0
  },
  {
    rotate: -40,
    x: 120,
    y: 50,
    scrollTrigger:{
      trigger: '.img-8',
      start: 50,
      end: 500,
      scrub: true
    }
  })
  titles.forEach(t=>{
    gsap.from(t,{
        x: -40,
        opacity: 0,
        scrollTrigger:{
            trigger: t,
            scrub: true
          }
      })
  })

  gsap.from('.about__text',{
    y: 85,
    scrollTrigger:{
        trigger: '.about__text',
        start: 300,
        end: 450,
        scrub: true
      }
  })

  gsap.from('.about__item-subtitle',{
    x: -25,
    y: -35,
    opacity: 0,
    scrollTrigger:{
        trigger: '.about__item-subtitle',
        start: 400,
        end: 600,
        scrub: true
      }
  })

  gsap.from('.tours__item',{
    y: 45,
    opacity: 0,
    scrollTrigger:{
        trigger: '.tours__item',
        start: 800,
        end: 1000,
        scrub: true
      }
  })
  advantagesItem.forEach(i=>{
    gsap.from(i,{
      y: 40,
      opacity: 0,
      scrollTrigger:{
          trigger: i,
          end: 1500,
          scrub: true
        }
    })
  })
 
  questionsFormItem.forEach(i=>{
    gsap.from(i,{
      y: 40,
      scale: .9,
      opacity: 0,
      scrollTrigger:{
          trigger: i,
          end: 1800,
          scrub: true
        }
    })
  })
}
