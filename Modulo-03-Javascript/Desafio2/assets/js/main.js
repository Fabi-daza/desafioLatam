let borde = true
document.getElementById("img").addEventListener("click",function(){
    if(borde){
        this.className = "con-borde"
        borde = false
    }else{
        this.className = "sin-borde"
        borde = true
    }
})



