'use strict'
{
    const slide_show = document.getElementById('slide-show');
    const slider = slide_show.children;
    const slide = document.querySelectorAll('li')[0];
    const copy_slide = slide.cloneNode(true);
    slide_show.insertBefore(copy_slide,null);
    console.log(slide_show);
    let currentIndex = 0;
    let timer;

    function moveSlider() {
    if (currentIndex === slider.length - 1 ) {
        currentIndex = 0;
        slide_show.classList.remove('transform-on');
        slide_show.classList.add('transform-off');
    }else{
         currentIndex++;
         slide_show.classList.add('transform-on');
         slide_show.classList.remove('transform-off');
    }
        // const sliderWidth = slider[0].getBoundingClientRect().width;
        const sliderWidth = slider[0].offsetWidth;
        slide_show.style.transform = `translateX(${ -1 * sliderWidth * currentIndex}px)`
    }
    const sliderWidth = slider[0].getBoundingClientRect().width;
    console.log(sliderWidth);

    setTimeout(function() {
        timer = setInterval(moveSlider,5000);
        moveSlider();
    },3000);
}
//     slide_show.addEventListener('mouseover',function(){
//         clearInterval(timer);
//     });
//     slide_show.addEventListener('mouseleave',function(){
//         timer = setInterval(moveSlider,5000);
//         moveSlider();
//     });
// 
