document.getElementById("lampada").addEventListener("click",function() {
    let img = document.getElementById
    ("lampada");
    if (img.src.match("lampada1.png")) {
        img.src = "lampadaLigada.png";
    } else {
        img.src = "lampada1.png";
    }
})