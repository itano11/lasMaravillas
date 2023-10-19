window.onload = function() {
    document.body.style.zoom = "90%";
};

const maravillas2 = [
    {
        titulo: "La Gran Muralla China (China)",
        imagen: "img/1moderna.jpg",
        descripcion: "Esta monumental estructura defensiva fue construida a lo largo de varios siglos para proteger al Imperio Chino de las invasiones nómadas del norte.",
        textoAdicional: "La Gran Muralla China es una red fortificada de muros y trincheras que se extienden a través del norte de China, con una longitud total de más de 21,000 millas (alrededor de 13,170 kilómetros). Es una de las estructuras más impresionantes del mundo y una maravilla de la ingeniería."
    },
    {
        titulo: "Petra (Jordania)",
        imagen: "img/2moderna.jpg",
        descripcion: "Petra es una antigua ciudad enclavada en las montañas del desierto de Jordania.",
        textoAdicional: "Es conocida por sus impresionantes estructuras esculpidas en acantilados de roca rosa, incluyendo el famoso Al-Khazneh ('El Tesoro'), que es el monumento más reconocible de Petra. La ciudad fue construida por los nabateos y fue un importante centro comercial y cultural en la antigüedad."
    },
    {
        titulo: "Cristo Redentor (Brasil)",
        imagen: "img/3moderna.jpg",
        descripcion: "Esta monumental estatua de Jesucristo está ubicada en la cima del Cerro del Corcovado en Río de Janeiro, Brasil.",
        textoAdicional: "Con una altura de aproximadamente 98 pies (30 metros) y con los brazos extendidos a unos 92 pies (28 metros), Cristo Redentor es un símbolo icónico de la cristiandad y una atracción turística muy visitada."
    },
    {
        titulo: "Machu Picchu (Perú)",
        imagen: "img/4moderna.jpg",
        descripcion: "Machu Picchu es una antigua ciudad inca ubicada en los Andes peruanos. Esta ciudadela arqueológica está situada en lo alto de una montaña y es famosa por su arquitectura sofisticada y paisajes impresionantes.",
        textoAdicional: "Machu Picchu es uno de los destinos turísticos más populares del mundo y una de las maravillas arqueológicas más importantes."
    },
    {
        titulo: "Chichén Itzá (México)",
        imagen: "img/5moderna.jpg",
        descripcion: "Chichén Itzá es una antigua ciudad maya situada en la península de Yucatán, México. Es conocida por su pirámide, El Castillo, que es una estructura escalonada con una plataforma superior.",
        textoAdicional: "Durante el equinoccio de primavera, la luz del sol crea una sombra que parece descender por la escalera principal, creando la ilusión de una serpiente descendente."  
    },
    {
        titulo: "El Coliseo (Italia)",
        imagen: "img/6moderna.jpg",
        descripcion: "El Coliseo, también conocido como el Anfiteatro Flavio, es un antiguo monumento romano ubicado en Roma, Italia. Construido en el siglo I d.C., este impresionante anfiteatro tenía una capacidad para hasta 80,000 espectadores y fue el escenario de diversos eventos, desde combates de gladiadores hasta representaciones teatrales.",
        textoAdicional: "Su arquitectura majestuosa, con sus característicos arcos y columnas, lo convierte en un símbolo duradero del esplendor del Imperio Romano. A pesar de los daños sufridos a lo largo de los años, el Coliseo sigue siendo un importante sitio turístico, mostrando la habilidad y la grandeza de la antigua Roma."
    },
    {
        titulo: "El Taj Mahal (India)",
        imagen: "img/7moderna.jpg",
        descripcion: "El Taj Mahal es un mausoleo de mármol blanco construido en la ciudad de Agra, India, por el emperador mogol Shah Jahan en memoria de su esposa Mumtaz Mahal.",
        textoAdicional: "Es considerado uno de los ejemplos más sobresalientes de la arquitectura mogol y ha sido reconocido como Patrimonio de la Humanidad por la UNESCO."
    },
];

let indiceActual2 = 0;

$(document).ready(function() {
    $("#leerMas2").click(function() {
        $("#textoAdicional2").toggleClass("d-none");
        $("#leerMas2").text($("#textoAdicional2").hasClass("d-none") ? "Leer más" : "Leer menos");
    });

    $("#anterior2").click(function() {
        indiceActual2 = (indiceActual2 - 1 + maravillas2.length) % maravillas2.length;
        mostrarMaravilla2(indiceActual2);
    });

    $("#siguiente2").click(function() {
        indiceActual2 = (indiceActual2 + 1) % maravillas2.length;
        mostrarMaravilla2(indiceActual2);
    });

    // Mostrar la primera maravilla al cargar la página
    mostrarMaravilla2(indiceActual2);
});

function mostrarMaravilla2(indice) {
    const maravilla2 = maravillas2[indice];
    $("#textoTitulo2").text(maravilla2.titulo);
    $("#descripcion2").text(maravilla2.descripcion);
    $("#textoAdicional2").text(maravilla2.textoAdicional);
    $("#imagenMaravilla2").attr("src", maravilla2.imagen);
}
