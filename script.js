var cursor = document.getElementById('cursor')
var c_blur = document.getElementById('c-blur')
document.addEventListener('mousemove', function (dets) {
    console.log(dets)
    requestAnimationFrame(() => {
        cursor.style.left = dets.x - 11 + 'px'
        cursor.style.top = dets.y - 11 + 'px'
        c_blur.style.left = dets.x - 150 + 'px'
        c_blur.style.top = dets.y - 150 + 'px'

    })
})

var targets = document.querySelectorAll('#ham-click h4, #cross, #nav img, #nav h4, #nav div, .card, .col, #foot-row-1 img, .links li, #address strong, #address h4, #foot-row-2 svg, #foot-row-3 span, #insta')
console.log(targets)
targets.forEach(element => {
    element.addEventListener('mouseenter', function () {
        cursor.style.scale = 4
        cursor.style.backgroundColor = 'transparent'
        cursor.style.outline = '0.1px solid #fff'
    })
    element.addEventListener('mouseleave', function () {
        cursor.style.scale = 1
        cursor.style.backgroundColor = '#b7eb27'
        cursor.style.outline = 'none'
    })
})

gsap.to("#nav", {
    backgroundColor: '#000',
    padding: '2rem 100px',
    duration: 0.5,
    scrollTrigger: {
        trigger: '#nav',
        start: 'top -10%',
        // markers: true,
        end: 'top -25%',
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: '#000',
    scrollTrigger: {
        trigger: '#main',
        start: 'top 20%',
        end: 'top -70%',
        scrub: 1
    }
})

document.querySelector('.active').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-record-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
</svg>`

gsap.from("#colon-1", {
    top: '2%',
    left: '5%',
    duration: 0.4,
    scrollTrigger:{
        trigger: '#reviews',
        // markers: true,
        end: 'top 30%',
        scrub: 1
    }
})
gsap.from("#colon-2", {
    bottom: '2%',
    right: '5%',
    duration: 0.6,
    scrollTrigger:{
        trigger: '#reviews',
        // markers: true,
        start: 'top 60%',
        end: 'top 90',
        scrub: 1
    }
})

gsap.from('#wait-div > h1', {
    top: '35px',
    duration: 0.8,
    scrollTrigger:{
        trigger: '#wait-div',
        // markers: true,
        start: 'top 80%',
        end: 'top 65%',
        scrub: 1
    }
})
var n = document.getElementById('ham-click')
document.getElementById('ham').addEventListener('click', function(){
    n.style.visibility = 'visible'
    n.style.opacity = '1'
})
document.getElementById('cross').addEventListener('click', function(){
    n.style.visibility = 'hidden'
    n.style.opacity = '0'
})