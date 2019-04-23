setInterval(function() {

    var elem = document.getElementById('nameBox');
    var blinking = document.getElementById('blinking').innerHTML;
    if(typeof elem !== 'undefined' && elem !== null && blinking === 'true') {
        elem.classList.toggle('blinkingBorder');
    } else {
        elem.style.outline = 0;
    }

}, 1000);

var domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

domReady(function() {//vp-controls-wrapper
    //document.getElementById('homeVid').getElementsByClassName('vp-controls-wrapper').style.display = 'none';
    //document.getElementsByClassName('vp-controls-wrapper').style.display = 'none';
});


var nameBox = document.getElementById('nameBox');
var navmenu = document.getElementById('navmenu');
if(typeof nameBox !== 'undefined' && nameBox !== null && typeof navmenu !== 'undefined' && navmenu !== null) {
    nameBox.onclick = function(){
        navmenu.classList.replace('slideUp','slideDown');
    };
}

function whichClose(which){
    document.getElementById(which).classList.replace('slideIn','slideOut');
    document.getElementById('aboutmePic').classList.replace('slideIn','slideOut');
    document.getElementById('homepageContainer').classList.replace('slideRightLg','slideLeft');
}

function aboutmeOpen(){
    document.getElementById('aboutme').classList.replace('slideOut','slideIn');
    document.getElementById('aboutmePic').classList.replace('slideOut','slideIn');
    document.getElementById('services').classList.replace('slideIn','slideOut');
    document.getElementById('portfolio').classList.replace('slideIn','slideOut');
}

function servicesOpen(){
    document.getElementById('aboutme').classList.replace('slideIn','slideOut');
    document.getElementById('services').classList.replace('slideOut','slideIn');
    document.getElementById('portfolio').classList.replace('slideIn','slideOut');
}

function portfolioOpen(){
    document.getElementById('aboutme').classList.replace('slideIn','slideOut');
    document.getElementById('services').classList.replace('slideIn','slideOut');
    document.getElementById('portfolio').classList.replace('slideOut','slideIn');
    document.getElementById('homepageContainer').classList.replace('slideLeft','slideRightLg');
}

function filter(which){
    if(which === 'all'){
        document.getElementById('filterAll').classList.add('active');

        document.getElementById('filterComm').classList.remove('active');
        let comm = Array.from(document.querySelectorAll('.comm'));
        comm.forEach((element,index) => {
            console.log(index);
            console.log(element);
            element.style.display = 'inherit';
        });

        document.getElementById('filterShort').classList.remove('active');
        let short = Array.from(document.querySelectorAll('.short'));
        short.forEach((element,index) => {
            console.log(index);
            console.log(element);
            element.style.display = 'inherit';
        });

        document.getElementById('filterPhoto').classList.remove('active');
        let photo = Array.from(document.querySelectorAll('.photo'));
        photo.forEach((element,index) => {
            console.log(index);
            console.log(element);
            element.style.display = 'inherit';
        });

    } else if(which === 'comm'){
        let comm = Array.from(document.querySelectorAll('.comm'));
        document.getElementById('filterAll').classList.remove('active');
        if (document.getElementById('filterComm').classList.contains('active')){
            document.getElementById('filterComm').classList.remove('active');
            comm.forEach((element,index) => {
                console.log(index);
                console.log(element);
                element.style.display = 'none';
            });
            
        } else {
            document.getElementById('filterComm').classList.add('active');
            if (!document.getElementById('filterShort').classList.contains('active')){
                let active = Array.from(document.querySelectorAll('.short'));
                active.forEach((element,index) => {
                    console.log(index);
                    console.log(element);
                    element.style.display = 'none';
                });
            }
            if (!document.getElementById('filterPhoto').classList.contains('active')){
                let active = Array.from(document.querySelectorAll('.photo'));
                active.forEach((element,index) => {
                    console.log(index);
                    console.log(element);
                    element.style.display = 'none';
                });
            }
            comm.forEach((element,index) => {
                console.log(index);
                console.log(element);
                element.style.display = 'inherit';
            });
        }
        
    } else if(which === 'short'){
        let short = Array.from(document.querySelectorAll('.short'));
        document.getElementById('filterAll').classList.remove('active');
        if (document.getElementById('filterShort').classList.contains('active')){
            document.getElementById('filterShort').classList.remove('active');
            short.forEach((element,index) => {
                console.log(index);
                console.log(element);
                element.style.display = 'none';
            });
            
        } else {
            document.getElementById('filterShort').classList.add('active');
            if (!document.getElementById('filterComm').classList.contains('active')){
                let active = Array.from(document.querySelectorAll('.comm'));
                active.forEach((element,index) => {
                    console.log(index);
                    console.log(element);
                    element.style.display = 'none';
                });
            }
            if (!document.getElementById('filterPhoto').classList.contains('active')){
                let active = Array.from(document.querySelectorAll('.photo'));
                active.forEach((element,index) => {
                    console.log(index);
                    console.log(element);
                    element.style.display = 'none';
                });
            }
            short.forEach((element,index) => {
                console.log(index);
                console.log(element);
                element.style.display = 'inherit';
            });
        }
    } else if(which === 'photo'){
        let photo = Array.from(document.querySelectorAll('.photo'));
        document.getElementById('filterAll').classList.remove('active');
        if (document.getElementById('filterPhoto').classList.contains('active')){
            document.getElementById('filterPhoto').classList.remove('active');
            photo.forEach((element,index) => {
                console.log(index);
                console.log(element);
                element.style.display = 'none';
            });
            
        } else {
            document.getElementById('filterPhoto').classList.add('active');
            if (!document.getElementById('filterComm').classList.contains('active')){
                let active = Array.from(document.querySelectorAll('.comm'));
                active.forEach((element,index) => {
                    console.log(index);
                    console.log(element);
                    element.style.display = 'none';
                });
            }
            if (!document.getElementById('filterShort').classList.contains('active')){
                let active = Array.from(document.querySelectorAll('.short'));
                active.forEach((element,index) => {
                    console.log(index);
                    console.log(element);
                    element.style.display = 'none';
                });
            }
            photo.forEach((element,index) => {
                console.log(index);
                console.log(element);
                element.style.display = 'inherit';
            });
        }
    }
}