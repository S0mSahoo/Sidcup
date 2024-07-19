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

var targets = document.querySelectorAll('#nav *, .card')
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
    padding: '1rem 7rem',
    duration: 0.5,
    scrollTrigger: {
        trigger: '#nav',
        start: 'top -10%',
        end: 'top 5%',
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