function pass(){
    let pass1 = document.getElementById("pass-1").value
    let pass2 = document.getElementById("pass-2").value
    let pass3 = document.getElementById("pass-3").value
    let password = pass1 + pass2 + pass3
    return password
}
document.getElementById("verificar-pass").addEventListener("click",()=>{
    let password = pass()
    if(password == 911){
        document.getElementById("Resultado-Password").innerHTML = "Password 1 es correcto"
    }else if(password == 714){
        document.getElementById("Resultado-Password").innerHTML = "Password 2 es correcto"
    }else{
        document.getElementById("Resultado-Password").innerHTML = "Password incorrecto"
    }
})