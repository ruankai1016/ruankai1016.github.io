function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        };
    }
};
//----------------------------导航栏------------------------------------------------------------
function fun1(){
    var jdNav = document.getElementById("jd-nav");
    var nav = jdNav.getElementsByTagName("li");
    for(var i=0; i<nav.length; i++){
        nav[i].onmouseover = function(){
            this.style.background = "#fff";
            this.style.color = "#fff";
            var navA= this.getElementsByTagName("a");
            for( var j=0; j<navA.length; j++){
                navA[j].style.color = "#c81623";
            }
        };
        nav[i].onmouseout = function(){
            this.style.background = "#c81623";
            this.style.color = "#fff";
            var navA= this.getElementsByTagName("a");
            for( var j=0; j<navA.length; j++){
                navA[j].style.color = "#fff";
            }
        };
    }
};
addLoadEvent(fun1);
//------------------------服装鞋包tab栏--------------------------------------------------------
function floor1(){
    var tabu = document.getElementById('clo-ua').getElementsByTagName('a');
    var tabd = document.getElementById('clo-ub').getElementsByClassName('clo-ubr');
    for (var i = 0; i < tabu.length; i++) {
        tabu[i].index = i;
        tabu[i].onmouseover = function() {
            for (var i = 0; i < tabu.length; i++) {
                tabu[i].className = '';
            }
            this.className = 'clo-selected';
            for (var i = 0; i < tabu.length; i++) {
                tabd[i].style.display = 'none';
            }
            tabd[this.index].style.display = 'block';
        };
    }
};
addLoadEvent(floor1);