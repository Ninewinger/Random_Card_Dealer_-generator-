window.onload = function () {
    let carta = document.getElementById("carta");
    let pinta1 = document.getElementById("pinta1");
    let pinta2 = document.getElementById("pinta2");
    let alto = document.getElementById("alto");
    let ancho = document.getElementById("ancho");
    let boton_generador = document.getElementById("boton_generador");
    let numero = document.getElementById("numero");
    let pes = document.getElementsByTagName("p")

    let num_y_letras = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    let pintas = ["♦", "♥", "♠", "♣"]

    let random_pinta = Math.floor(Math.random() * 4);
    let random_numero = Math.floor(Math.random() * 13);

    let contenido_random = (arr, rand) => {
        return arr[rand];
    }

    numero.innerHTML = contenido_random(num_y_letras, random_numero);
    let pintara = pintas[random_pinta];
    pinta1.innerHTML = pintara;
    pinta2.innerHTML = pintara

    if (pintara == "♦" || pintara == "♥") {
        for (p of pes) {
            p.classList.add("text-danger")
        }
    }


}