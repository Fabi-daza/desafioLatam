let button = document.getElementById("btn")

button.addEventListener("click", ingresarProducto)
button.addEventListener("click", colorSelect)

function ingresarProducto() {
    let tituloProducto = document.getElementById("name")
    let cantidadProductos = document.getElementById("amount").value
    let precioProducto = document.getElementById("price")
    let valorProducto = precioProducto.innerHTML
    let total = cantidadProductos * valorProducto

    document.getElementById("title").innerHTML = tituloProducto.innerHTML;
    document.getElementById("cantidad").innerHTML = cantidadProductos;
    document.getElementById("precio").innerHTML = "$" + total;
}

function colorSelect() {
    let selectColor = document.getElementById("color-selector").value
    let colorPicker = document.querySelector(".color-picked")
    let imagenMostrada = document.querySelector(".img-product")

    if (selectColor == "white") {
        colorPicker.style.backgroundColor = "#FFFFFF";
        imagenMostrada.setAttribute("src", "./assets/img/case-white1.png");
    } else {
        colorPicker.style.backgroundColor = "#FFC0CB";
        imagenMostrada.setAttribute("src", "./assets/img/case-pink1.png");
    }
}

