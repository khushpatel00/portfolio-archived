// ["#000000","#00020b","#000315","#000420","#00052a","#000735","#00083f","#000949","#000a53"]
let nav = document.querySelector('nav');
let isNavBarOpen = false;
let banner = document.getElementById('banner');

let mouseX = 0; // position to be animated
let mouseY = 0;
let targetX = 0; //actual position
let targetY = 0;
let ease = 0.1; 

document.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
});

function animate() {
    mouseX += (targetX - mouseX) * ease;
    mouseY += (targetY - mouseY) * ease;

    banner.style.background = `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(0, 13, 71, 1) 0%, rgba(0, 0, 0, 1) 100%)`;
    
    // Continue the animation
    requestAnimationFrame(animate);
}

animate();
