//paso 1: html y css
//paso 2: dar color a las tarjetas
let colors = ["rgb(244, 236, 238)", "rgb(238, 187, 200)", "rgb(239, 146, 169)", "rgb(236, 107, 139)", "rgb(231, 72, 112)", "rgb(231, 25, 77)"]
let cuadros = document.querySelectorAll("div.square")

// paso 3: el contenido de la pagina
let pickedColor = document.querySelector("#colorDisplay")
pickedColor.textContent = colors[4]
const body = document.body

let colorFondo = "#000000"
body.style.backgroundColor = colorFondo

//paso 4: funcion change color
// setea un color en todos los cuadros, cuando se selecciona el ganador
const changeColor = function (color) {
    for (let i = 0; i < cuadros.length; i++) {
        cuadros[i].style.backgroundColor = color
    }        
}
// me retorna un color aleatorio de mi array `colors`
const pickColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
}

pickedColor.textContent = pickColor();



//paso 4 Agarra el elemento con el id= message
let mensaje = document.querySelector("#message")



for (let i = 0; i < cuadros.length; i++) {
    cuadros[i].style.backgroundColor = colors[i] //paso 2 usando for Loop
    cuadros[i].addEventListener("click", function () {  //paso 4
        console.log(pickedColor.textContent)
        console.log(body.style.backgroundColor)
        // paso 4 y botones
        if (this.style.backgroundColor == pickedColor.textContent) {
            changeColor(pickedColor.textContent)
            mensaje.textContent = "Correcto"
            console.log("correcto")
            reset.textContent = "Play Again?"
        } else {
            this.style.backgroundColor = body.style.backgroundColor
            mensaje.textContent = "Intentalo nuevamente" //paso 4 
            console.log("Intentalo nuevamente")
        }

    })
}
console.log(body)


const getRandomArray = (arrayOriginal) => {
    const result = []
    for(let i = 0; i < arrayOriginal.length; ){
       const random = Math.floor(Math.random() * arrayOriginal.length)
       if(result.indexOf(arrayOriginal[random]) !== -1){
          continue
       }
       result.push(arrayOriginal[random])
       i++
    }
    return result
 }
// boton play egain
let reset = document.querySelector("#reset")
reset.addEventListener("click", function () {
     pickedColor.textContent = pickColor()
     var newColors = getRandomArray(colors)
     for (let i = 0; i < cuadros.length; i++) {
        cuadros[i].style.backgroundColor = newColors[i]
        mensaje.textContent = " "
    } 
})

// boton easy y hard 
let botonEasy = document.querySelector("#easyButton")
let botonHard = document.querySelector("#hardButton")

botonEasy.addEventListener("click", function() {
    botonEasy.classList.add("selected")
    botonHard.classList.remove("selected")
    colors = ["rgb(244, 236, 238)", "rgb(238, 187, 200)", "rgb(239, 146, 169)"]
    
    for (let i = 0; i < cuadros.length; i++) {
        if (colors.length > i) {
            cuadros[i].style.backgroundColor = colors[i] 
        } else { 
            cuadros[i].style.display = "none"
        }
    }
    pickedColor.textContent = pickColor()
})

   

botonHard.addEventListener("click", function() {
    botonHard.classList.add("selected")
    botonEasy.classList.remove("selected")
    colors = ["rgb(244, 236, 238)", "rgb(238, 187, 200)", "rgb(239, 146, 169)", "rgb(236, 107, 139)", "rgb(231, 72, 112)", "rgb(231, 25, 77)"]
    pickedColor.textContent = pickColor()

    for (let i = 0; i < cuadros.length; i++) {
       cuadros[i].style.backgroundColor = colors[i] 
       cuadros[i].style.display = "block"
    }
    

})



