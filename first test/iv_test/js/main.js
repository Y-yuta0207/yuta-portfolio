'use strict';
{
    const open = document.getElementById('open');
    const modal = document.getElementById('modal');
    const mask = document.getElementById('mask');
    const close = document.getElementById('close2');

    open.addEventListener('click', () => {
        modal.classList.remove('hidden');
        mask.classList.remove('hidden');
    });

    close2.addEventListener('click', () => {
        modal.classList.add('hidden');
        mask.classList.add('hidden');
    });

    mask.addEventListener('click', () => {
        modal.classList.add('hidden');
        mask.classList.add('hidden');
    });

    const pics_src = ["./test2.img/header0.jpg","./test2.img/header1.jpg","./test2.img/header2.jpg","./test2.img/header3.jpg"];
    let num = -1;

    function slidshow_timer(){
        if (num === 3){
            num = 0;
        }
        else {
            num ++;
        }
        document.getElementById("header_pic").src = pics_src[num];
    }
    setInterval(slidshow_timer, 3000);
}
'use strict';
{

    const target = document.querySelector('#consept_p');

    function callback(entries) {
        console.log(entries[0]);

        if(!entries[0].isIntersecting) {
            return;
        }

        entries[0].target.classList.add('appear');
    }

    const options = {
        threshold: 0.8,
    };

    const observer = new IntersectionObserver(callback, options);

    observer.observe(target);
    
}
'use strict';
{
    const target = document.querySelector('#menulist');

    function callback(entries) {
        console.log(entries[0]);

        if(!entries[0].isIntersecting) {
            return;
        }

        entries[0].target.classList.add('appear');
    }

    const options = {
        threshold: 0.8,
    };

    const observer = new IntersectionObserver(callback, options);

    observer.observe(target);
}
'use strict';
{
    const target = document.querySelector('#menulist2');

    function callback(entries) {
        console.log(entries[0]);

        if(!entries[0].isIntersecting) {
            return;
        }

        entries[0].target.classList.add('appear');
    }

    const options = {
        threshold: 0.8,
    };

    const observer = new IntersectionObserver(callback, options);

    observer.observe(target);
}
'use strict';
{
    const target = document.querySelector('#location_list');

    function callback(entries) {
        console.log(entries[0]);

        if(!entries[0].isIntersecting) {
            return;
        }

        entries[0].target.classList.add('appear');
    }

    const options = {
        threshold: 0.8,
    };

    const observer = new IntersectionObserver(callback, options);

    observer.observe(target);
}
'use strict';
{
    const target = document.querySelector('#location_list2');

    function callback(entries) {
        console.log(entries[0]);

        if(!entries[0].isIntersecting) {
            return;
        }

        entries[0].target.classList.add('appear');
    }

    const options = {
        threshold: 0.8,
    };

    const observer = new IntersectionObserver(callback, options);

    observer.observe(target);
}
'use strict';
{
    
const open = document.getElementById('sp_menu');
const hum_nav = document.getElementById('hum_nav');
const close = document.getElementById('close');
// const header = document.getElementById('header_title');

    open.addEventListener('click', () => {
        hum_nav.classList.remove('hum_menu');
        close.classList.remove('batu');
        // header.classList.add('header');
        
});

    hum_nav.addEventListener('click', () => {
        hum_nav.classList.add('hum_menu');
        close.classList.add('batu');
        // header.classList.remove('header');
    });
    close.addEventListener('click', () => {
        hum_nav.classList.add('hum_menu');
        close.classList.add('batu');
        // header.classList.remove('header');
    });
}