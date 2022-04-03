let datahoje = new Date()
//console.log(datahoje)
let dataevento = new Date(2021,3,20)
//console.log(dataevento)
let datanascimento = new Date(1989,5,15)
let numeroparticipantes = ["fernando","felipe","diego","thiago"]
    if (dataevento<datahoje) {
        console.log("marcar evento")      
    } else {
        console.log("data invalida")       
                
    }
    if (datanascimento > 6570) {
        console.log("idade válida")        
    } else {
        console.log("idade invalida")
    }
    if (numeroparticipantes.length <= 100) {
        console.log("tenha um bom evento")                
    } else {
        console.log("numero máximo de participantes atingido!")
    }
    console.log(numeroparticipantes)
