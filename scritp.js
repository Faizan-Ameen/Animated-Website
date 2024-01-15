 // Navbar Code 
 let mobile_btn = document.querySelector('.mobile_btn i');
 let header = document.querySelector('.nav_menu');
 var cursor = document.querySelector('.customcurso');
 var minicursor = document.querySelector('.minicursor')
 window.addEventListener('mousemove', function (e) {
     cursor.style.left = e.x + 'px'
     cursor.style.top = e.y + 'px'
     minicursor.style.left = e.x + 'px'
     minicursor.style.top = e.y + 'px'
     
 })
 // Starter AnimationEffect 
 window.addEventListener('load', function () {
     let start = document.querySelector('.starter');
     var bod = document.querySelector('body');
     bod.style.overflow = 'hidden';
     start.style.opacity = 1;
 })
 setInterval(() => {
     let start = document.querySelector('.starter');
     var bod = document.querySelector('body');
     bod.style.overflow = 'visible'
     start.style.opacity = 0
     start.style.zIndex= -1;
 }, 4200)
 mobile_btn.addEventListener('click', function () {
     header.classList.toggle('active')
 })