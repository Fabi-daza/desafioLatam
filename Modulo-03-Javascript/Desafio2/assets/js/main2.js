function sumar(){
    let sticker1 = document.getElementById("sticker-1").value
    let sticker2 = document.getElementById("sticker-2").value
    let sticker3 = document.getElementById("sticker-3").value
    let suma = parseInt(sticker1) + parseInt(sticker2) + parseInt(sticker3)
    return suma
}
document.getElementById("verficar-stickers").addEventListener("click", ()=>{
    let suma = sumar()
    if(suma >10){
        document.getElementById("resultado-suma").innerHTML = "Lo siento :( llevas demasiados stickers tienes 10 como máximo"
    }else{
        document.getElementById("resultado-suma").innerHTML = "Llevas" + " " + suma + " " + "stickers, puedes realizar tu compra"
    }
})
 

