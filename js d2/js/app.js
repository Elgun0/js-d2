 var btn=document.getElementsByClassName("accord-btn")
 for(var i=0;i<btn.length;i++){
    btn[i].onclick=function(){
        this.nextElementSibling.classList.toggle("active")
    }   
}
