const btn = document.getElementById("btn")
const input = document.getElementById("input-task")
const tasks = document.getElementById("tasks")
const total = document.getElementById("total")
const realizadas = document.getElementById("check")

data = []

function getInput() {
    taskData = input.value
    data.push({
        description: taskData,
        estado: false
    })
    input.value = ""
    tableFill()
}
btn.addEventListener("click", getInput)
function tableFill() {
    tasks.innerHTML = ""
    data.forEach((val, index) => {
        tasks.innerHTML += ` 
        <tr>
        <td align="center">${index}</td>
        <td>${val.description}</td>
        <td align="center"><input type="checkbox" onclick="checkTask(${index})" ${val.estado ? "checked" : "notchecked"}></td>
        <td align="center"><a onclick="deleteTask(${index})"><img src="./assets/img/delete.png"></a></td>
        </tr>
        `
    });
    total.innerHTML = data.length
    realizadas.innerText = data.filter(val => val.estado === true).length
}
function deleteTask(id){
    data.splice(id,1)
    tableFill()
}
function checkTask(id){
    data[id].estado = data[id].estado ? false : true
    tableFill()
}
