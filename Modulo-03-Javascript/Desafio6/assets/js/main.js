const divisas = ["uf", "ivp", "dolar", "dolar_intercambio", "euro", "ipc", "utm", "imacec", "tpm", "libra_cobre", "tasa_desempleo", "bitcoin"]

const ingresoMoneda = document.getElementById("input-ingreso")
const selectorDivisa = document.getElementById("select-divisa")
const button = document.getElementById("btn")
const results = document.getElementById("results")
const chart = document.getElementById("chart-container")

function createChart(dataObjt){
    chart.innerHTML =`<canvas id="chart"></canvas>`
    canvas = document.getElementById("chart")
    const data = {
        type: "line",
        data: {
            labels: dataObjt.dates,
            datasets: [{
                label: `ultimos 10 días`,
                data: dataObjt.data,
                fill: false,
                borderColor: `#0000ff `,
                tension:0.1
            },{
                label: 'entre 10 a 20 dias',
                data: dataObjt.data1,
                fill: false,
                borderColor: `#ff0000`,
                tension:0.1
            }
        ]
        }
    }

    new Chart(canvas,data)
}

async function convertirDivisa(){
    try {
        divisa = selectorDivisa.value
        result = await fetch(`https://mindicador.cl/api/${divisa}`)
        resultJson = await result.json()
        divisaClp = resultJson.serie[0].valor
        convertClp = +ingresoMoneda.value
        results.innerText = (convertClp/divisaClp).toFixed(2) + " " + divisa 
        const lastDays = {}
        lastDays.data = resultJson.serie.slice(0,10).map(val => val.valor).reverse()
        lastDays.data1 = resultJson.serie.slice(10,20).map(val => val.valor).reverse()
        lastDays.dates = resultJson.serie.slice(0,10).map(val => dayjs(val.fecha).format(`YYYY-MM-DD`)).reverse()
        createChart(lastDays)
        
    } catch (error) {
        
    }

}

divisas.forEach(val => selectorDivisa.innerHTML += `
    <option value=${val}>${val}</option>
`)
button.addEventListener('click', convertirDivisa)