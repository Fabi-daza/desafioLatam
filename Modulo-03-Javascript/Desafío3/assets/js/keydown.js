var color
document.addEventListener("keydown", function(event){
    switch(event.key){
        case "a":
            color="aquamarine"
            break
        case "s":
            color="violet"
            break
        case "d":
            color="gray"
            break
        default:
            color = null
            break
    } 
  })
document.getElementById('caja1').addEventListener("click", function(event){
    event.target.style.backgroundColor = color //"'" + color + "'"
})
document.getElementById('caja2').addEventListener("click", function(event){
    event.target.style.backgroundColor = color
})
document.getElementById('caja3').addEventListener("click", function(event){
    event.target.style.backgroundColor = color
})
document.getElementById('caja4').addEventListener("click", function(event){
    event.target.style.backgroundColor = color
})