const progress = document.querySelector('div.progress-done');
const progress2 = document.querySelector('div.progress-done2');
const progress3 = document.querySelector('div.progress-done3');
const progress4 = document.querySelector('div.progress-done4');
const progress5 = document.querySelector('div.progress-done5');
const mickey = document.getElementById('fleche');

setTimeout(() => {
    progress.style.opacity = 1;
    progress.style.width = progress.getAttribute('data-done') + '%';
}, 500)

setTimeout(() => {
    progress2.style.opacity = 1;
    progress2.style.width = progress2.getAttribute('data-done') + '%';
}, 500)

setTimeout(() => {
    progress3.style.opacity = 1;
    progress3.style.width = progress3.getAttribute('data-done') + '%';
}, 500)

setTimeout(() => {
    progress4.style.opacity = 1;
    progress4.style.width = progress4.getAttribute('data-done') + '%';
}, 500)

setTimeout(() => {
    progress5.style.opacity = 1;
    progress5.style.width = progress5.getAttribute('data-done') + '%';
}, 500)


$(document).ready(function(){
    //Inverse l'état de visibilité de h1 lors d'un clic sur #b1     
    $("#b1").click(function(){
        $("#T1").toggle();
        $("#T2").css("display", "none");
        $("#T3").css("display", "none");
        $("#T4").css("display", "none");
        $("#T5").css("display", "none");
    });
});

$(document).ready(function(){
    //Inverse l'état de visibilité de h1 lors d'un clic sur #b1     
    $("#b2").click(function(){
        $("#T2").toggle();
        $("#T1").css("display", "none");
        $("#T3").css("display", "none");
        $("#T4").css("display", "none");
        $("#T5").css("display", "none");
    });
});

$(document).ready(function(){
    //Inverse l'état de visibilité de h1 lors d'un clic sur #b1     
    $("#b3").click(function(){
        $("#T3").toggle();
        $("#T1").css("display", "none");
        $("#T2").css("display", "none");
        $("#T4").css("display", "none");
        $("#T5").css("display", "none");
    });
});

$(document).ready(function(){
    //Inverse l'état de visibilité de h1 lors d'un clic sur #b1     
    $("#b4").click(function(){
        $("#T4").toggle();
        $("#T1").css("display", "none");
        $("#T2").css("display", "none");
        $("#T3").css("display", "none");
        $("#T5").css("display", "none");
    });
});

$(document).ready(function(){
    //Inverse l'état de visibilité de h1 lors d'un clic sur #b1     
    $("#b5").click(function(){
        $("#T5").toggle();
        $("#T1").css("display", "none");
        $("#T2").css("display", "none");
        $("#T3").css("display", "none");
        $("#T4").css("display", "none");
    });
});

$(document).ready(function(){
    //Inverse l'état de visibilité de h1 lors d'un clic sur #b1     
    $("#letter").click(function(){
        $("#mail").css("visibility", "visible");
    });
});

$(document).ready(function(){
    //Inverse l'état de visibilité de h1 lors d'un clic sur #b1     
    $("#phone").click(function(){
        $("#number").css("visibility", "visible");
    });
});

mickey.addEventListener('click', () => window.scrollTo({
  top: 800,
  behavior: 'smooth',
}));

function disparition(){
  mickey.style.visibility="hidden";
};

mickey.onclick = disparition;