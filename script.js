window.onload = function() {
    document.body.style.zoom = "90%";
};

const maravillas = [
    {
        titulo: "La Gran Pirámide de Guiza (Egipto)",
        imagen: "img/1.jpg",
        descripcion: "La Gran Pirámide de Guiza es un monumento arquitectónico sin igual y la única de las siete maravillas del mundo antiguo que todavía se encuentra en pie.",
        textoAdicional: "Construida alrededor del 2580 a.C. como tumba para el faraón Keops, esta maravilla de la ingeniería antigua se compone de aproximadamente 2.3 millones de bloques de piedra caliza, cada uno pesando varias toneladas. Se cree que su construcción involucró técnicas altamente avanzadas para la época, y su precisión geométrica es asombrosa. Además, durante siglos, la Gran Pirámide fue la estructura más alta del mundo, mostrando la ambición y la destreza arquitectónica de la antigua civilización egipcia."
    },
    {
        titulo: "Los Jardines Colgantes de Babilonia (Irak)",
        imagen: "img/2.jpg",
        descripcion: "Los Jardines Colgantes de Babilonia, si bien su existencia histórica a menudo es cuestionada, han capturado la imaginación de generaciones con su exuberante belleza.",
        textoAdicional: "Se dice que estos jardines fueron creados por el rey Nabucodonosor II para su esposa, Amytis, que extrañaba la exuberancia de su tierra natal. Rodeados de misterio y romanticismo, estos jardines presentaban una serie de terrazas escalonadas cubiertas de plantas y árboles exóticos, irrigados por un intrincado sistema de canales. Los jardines personifican la habilidad ingeniosa y la creatividad artística de la antigua Babilonia."
    },
    {
        titulo: "La Estatua de Zeus en Olimpia (Grecia)",
        imagen: "img/3.jpg",
        descripcion: "La Estatua de Zeus en Olimpia, creada por el famoso escultor Fidias, era una maravilla de la escultura griega antigua. Esta monumental representación de Zeus, el rey de los dioses, se encontraba en el templo de Olimpia y emanaba una presencia divina.",
        textoAdicional: "Hecha de marfil y oro, la estatua capturaba la majestuosidad y la gracia del dios griego. Cada detalle, desde las arrugas en su piel hasta la expresión en su rostro, estaba meticulosamente esculpido, elevando la estatua a un nivel de perfección artística sin igual."
    },
    {
        titulo: "El Templo de Artemisa en Éfeso (Turquía)",
        imagen: "img/4.jpg",
        descripcion: "El Templo de Artemisa en Éfeso fue una maravilla arquitectónica y una muestra impresionante del poder y la riqueza de la antigua ciudad de Éfeso. Con 127 columnas de mármol, cada una adornada con relieves intrincados, este templo era un tributo a la diosa Artemisa, la protectora de la ciudad.",
        textoAdicional: "La magnificencia de su arquitectura y su decoración artística lo convirtieron en un destino esencial para viajeros y peregrinos de todo el mundo antiguo, que quedaban maravillados por su esplendor y belleza."
    },
    {
        titulo: "El Mausoleo de Halicarnaso (Turquía)",
        imagen: "img/5.jpg",
        descripcion: "El Mausoleo de Halicarnaso, construido en memoria del rey Mausolo por su esposa Artemisia II, era una estructura monumental y una obra maestra de la arquitectura helenística.",
        textoAdicional: "Este mausoleo presentaba una variedad de esculturas y relieves elaborados, cada uno contando una historia diferente de la vida del rey y su legado. La estructura estaba adornada con estatuas impresionantes y frisos que representaban escenas mitológicas y batallas épicas. El Mausoleo de Halicarnaso es un testimonio de la habilidad artística y el amor duradero de Artemisia por su esposo."  
    },
    {
        titulo: "El Coloso de Rodas (Grecia)",
        imagen: "img/6.jpg",
        descripcion: "El Coloso de Rodas era una maravilla de la escultura y la ingeniería. Esta estatua gigantesca de bronce representaba al dios del sol, Helios, y se erguía majestuosamente en la entrada del puerto de Rodas.",
        textoAdicional: "Con una altura de aproximadamente 30 metros, esta estatua monumental era una muestra del dominio griego en la creación de obras de arte colosales. Su presencia imponente y su destreza técnica la convirtieron en una atracción asombrosa para los visitantes de la antigüedad."
    },
    {
        titulo: "El Faro de Alejandría (Egipto)",
        imagen: "img/7.jpg",
        descripcion: "El Faro de Alejandría, construido en la isla de Faro, era una maravilla de la ingeniería antigua. Con aproximadamente 100 metros de altura, esta estructura servía como faro para guiar a los navegantes nocturnos.",
        textoAdicional: "Su diseño incluía un espejo gigante que reflejaba la luz del sol durante la noche, iluminando el camino a través del mar Mediterráneo. Además de su función práctica, el faro estaba adornado con esculturas y relieves ornamentales, lo que lo convertía en una obra de arte arquitectónica además de un faro funcional. Su complejidad técnica y su belleza estética la convierten en una de las maravillas más emblemáticas del mundo antiguo."
    },
];

let indiceActual = 0;

$(document).ready(function() {
    $("#leerMas").click(function() {
        $("#textoAdicional").toggleClass("d-none");
        $("#leerMas").text($("#textoAdicional").hasClass("d-none") ? "Leer más" : "Leer menos");
    });

    $("#anterior").click(function() {
        indiceActual = (indiceActual - 1 + maravillas.length) % maravillas.length;
        mostrarMaravilla(indiceActual);
    });

    $("#siguiente").click(function() {
        indiceActual = (indiceActual + 1) % maravillas.length;
        mostrarMaravilla(indiceActual);
    });

    // Mostrar la primera maravilla al cargar la página
    mostrarMaravilla(indiceActual);
});

function mostrarMaravilla(indice) {
    const maravilla = maravillas[indice];
    $("#textoTitulo").text(maravilla.titulo);
    $("#descripcion").text(maravilla.descripcion);
    $("#textoAdicional").text(maravilla.textoAdicional);
    $("#imagenMaravilla").attr("src", maravilla.imagen);
}

