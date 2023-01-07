

fetch('../assets/js/dptos.json')
.then(val => val.json())
.then(dptos => {
    const main = document.getElementById("main")
    const inputDormitorios = document.getElementById("dormitorios")
    const inputSupDesde = document.getElementById("s-desde")
    const inputSupHasta = document.getElementById("s-hasta")
    const buttonBuscar = document.getElementById("buscar")
    const textTotal = document.getElementById("total")

    var total

    function setTotal(array){
        textTotal.innerText = array.length
    }

    function alterMain(array){
        dptosHTML = array.map(val => `
        <a href="#" class="item">
            <div class="item-img">
                <img src="${val.src}"> 
            </div>
            <div class="item-content">
                <span >${val.nombre}</span>
                <span >UF ${val.precio}</span>
                <span >${val.tipo}</span>
                <span >${val.descripcion}</span>
                <span >Superficie Util ${val.superficie} m²</span>
                <span >${val.dormitorios} Dormitorios</span>
            </div>
        </a>
        `)
        let articles = dptosHTML.join("")
        main.innerHTML = articles
    }

    function init(){
        alterMain(dptos)
        setTotal(dptos)
    }

    function filterByRooms(array){
        numCuartos = inputDormitorios.value
        if(!numCuartos){
            alert("Debes ingresar el número de dormitorios")
            return null
        }
        arrayFilter = array.filter(val => val.dormitorios === +numCuartos)
        return arrayFilter
    }

    function filterByMeters(array){
        metersDesde = inputSupDesde.value
        metersHasta = inputSupHasta.value
        if(!metersHasta || !metersDesde){
            alert("no rellenaste todos los campos de metros!!!")
            return null
        }
        arrayFilter = array.filter(val => val.superficie >= +metersDesde && val.superficie <= +metersHasta)
        return arrayFilter
    }

    buttonBuscar.addEventListener('click',function(){
        finalArray = filterByRooms(dptos) != null ? filterByRooms(dptos) : dptos
        finalArray = filterByMeters(finalArray) != null ? filterByMeters(finalArray) : finalArray
        alterMain(finalArray)
        setTotal(finalArray)
    })

    init()
})
