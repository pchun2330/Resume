function moveLoader() {
    const loader = document.querySelector('.loader');
    loader.style.bottom = '30%';
    loader.style.left = '85%';
    loader.style.borderColor = 'rgba(136, 120, 154, 0.3)';
}

function resetLoader() {
    const loader = document.querySelector('.loader');
    loader.style.bottom = '10%';
    loader.style.left = '10%';
    loader.style.borderColor = 'rgba(136, 120, 154, 1)';
}
  

var phone = document.querySelector(".circle.phone span");
var hiddensvg = document.querySelector(".circle.phone svg");

function togglePhone() {
    
    var phoneStyle = window.getComputedStyle(phone);
    
    if (phoneStyle.display === "none") {
        hiddensvg.style.display = "none";
        phone.style.display = "inline-block";
    } else {
        hiddensvg.style.display = "block";
        phone.style.display = "none"; 
    }
}



let btntop = document.querySelector("#top");

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btntop.style.display = "block";
    } else {
        btntop.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}