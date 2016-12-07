window.onload = function(){
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