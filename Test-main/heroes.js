const ime_heroja = document.querySelector("#ime_heroja")
const level_heroja = document.querySelector("#level_heroja")
const klasa_heroja = document.querySelector("#klasa_heroja")
const stil_heroja = document.querySelector("#stil")
const osobine_heroja = document.querySelector("#osobine_heroja")
const kreiraj = document.querySelector("#kreiraj")
const tplHeroj = document.querySelector("#template-heroj")
const prikazi = document.querySelector("#prikazi")

kreiraj.onclick = () => {
    prikazi.innerHTML += tplHeroj.innerHTML.replace("{{ime_heroja}}", ime_heroja.value)
                                           .replace("{{level_heroja}}", level_heroja.value)
                                           .replace("{{klasa_heroja}}", klasa_heroja.value)
                                           .replace("{{stil_heroja}}", stil_heroja.value == "" ? 
                                           "./Heroes/nophoto.png" : stil_heroja.value)
                                           .replace("{{osobine_heroja}}", osobine_heroja.value)
}

