var blinking = document.getElementById('blinking').innerHTML;
document.getElementById("nameBoxFade").animate([
        // keyframes
        { opacity: 1 }, 
        { opacity: 0.25 }
    ], { 
        // timing options
        duration: 2000,
        iterations: Infinity
});

var nameBoxFade = document.getElementById('nameBoxFade');
var navmenu = document.getElementById('navmenu');
if(typeof nameBoxFade !== 'undefined' && nameBoxFade !== null && typeof navmenu !== 'undefined' && navmenu !== null) {
    nameBoxFade.onclick = function(){
        nameBoxFade.remove();
        nameBox.style.display = "block";
        navmenu.classList.replace('slideUp','slideDown');
    };
}

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
    document.getElementById('servicesPic').classList.replace('slideIn','slideOut');
    document.getElementById('homepageContainer').classList.replace('slideRightLg','slideLeft');
    document.getElementById('homepageContainer').classList.replace('slideRightSm','slideLeft');
    document.getElementById('homepageContainer').classList.replace('slideRightXSm','slideLeft');
}

function aboutmeOpen(){
    document.getElementById('aboutme').classList.replace('slideOut','slideIn');
    document.getElementById('aboutmePic').classList.replace('slideOut','slideIn');
    document.getElementById('services').classList.replace('slideIn','slideOut');
    document.getElementById('servicesPic').classList.replace('slideIn','slideOut');
    document.getElementById('portfolio').classList.replace('slideIn','slideOut');
    document.getElementById('homepageContainer').classList.replace('slideRightLg','slideLeft');
}

function servicesOpen(){
    document.getElementById('aboutme').classList.replace('slideIn','slideOut');
    document.getElementById('aboutmePic').classList.replace('slideIn','slideOut');
    document.getElementById('services').classList.replace('slideOut','slideIn');
    document.getElementById('servicesPic').classList.replace('slideOut','slideIn');
    document.getElementById('portfolio').classList.replace('slideIn','slideOut');
    document.getElementById('homepageContainer').classList.replace('slideleft','slideRightXSm');
    document.getElementById('homepageContainer').classList.replace('slideRightLg','slideRightXSm');
    document.getElementById('homepageContainer').classList.replace('slideRightSm','slideRightXSm');
}

function portfolioOpen(){
    document.getElementById('aboutme').classList.replace('slideIn','slideOut');
    document.getElementById('aboutmePic').classList.replace('slideIn','slideOut');
    document.getElementById('services').classList.replace('slideIn','slideOut');
    document.getElementById('servicesPic').classList.replace('slideIn','slideOut');
    document.getElementById('portfolio').classList.replace('slideOut','slideIn');
    /*document.getElementById('homepageContainer').classList.replace('slideLeft','slideRightLg');
    document.getElementById('homepageContainer').classList.replace('slideRightSm','slideRightLg');
    document.getElementById('homepageContainer').classList.replace('slideRightXSm','slideRightLg');*/
    document.getElementById('homepageContainer').classList.replace('slideRightLg','slideLeft');
    document.getElementById('homepageContainer').classList.replace('slideRightSm','slideLeft');
    document.getElementById('homepageContainer').classList.replace('slideRightXSm','slideLeft');
}

function filter(which){
    if(which === 'all'){
        document.getElementById('filterAll').classList.add('active');

        document.getElementById('filterComm').classList.remove('active');
        let comm = Array.from(document.querySelectorAll('.comm'));
        comm.forEach((element,index) => {
            console.log(index);
            console.log(element);
            element.style.display = 'inline-block';
        });

        document.getElementById('filterShort').classList.remove('active');
        let short = Array.from(document.querySelectorAll('.short'));
        short.forEach((element,index) => {
            console.log(index);
            console.log(element);
            element.style.display = 'inline-block';
        });

        document.getElementById('filterPhoto').classList.remove('active');
        let photo = Array.from(document.querySelectorAll('.photo'));
        photo.forEach((element,index) => {
            console.log(index);
            console.log(element);
            element.style.display = 'inline-block';
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
                element.style.display = 'inline-block';
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
                element.style.display = 'inline-block';
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
                element.style.display = 'inline-block';
            });
        }
    }
}

function showEmailModal(){
    document.getElementById('emailModal').style.display = "block";
    document.getElementById('App').style.opacity = 0.25;
}

function closeEmailModal(){
    document.getElementById('emailModal').style.display = "none";
    document.getElementById('App').style.opacity = 1;
}

function emailMessage(){
    alert("in email");
    /*var email = document.getElementById('emailAddress').value;
    var message = document.getElementById('emailMessage').value;
    var ajax = new XMLHttpRequest();
    ajax.open("POST", 'email.php', true);
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajax.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            // Request finished. Do processing here.
            alert("here");
        }
    }
    ajax.send("email=test&message=testing message");*/
    var name = $('#emailName').val();
    var email = $('#emailAddress').val();
    var message = $('#emailMessage').val();
    var dataString = 'name='+name+'&email='+email+'&message='+message;
    $.ajax({
        type:"POST",
        url:"email.php",
        data:dataString,
        success:function(e){
            alert('success!');
        }
    });
}