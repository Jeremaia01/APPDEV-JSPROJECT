const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () => {
    let sec = document.getElementById("sec").value

    if (sec<60){
        // x = parseInt(sec)/60
        y = `There are ` +sec+ ` seconds.`
        document.getElementById("output1").innerHTML = y
    }
    else if (sec>=60){
        x = Math.floor(sec/60)
        y = `There are ` +x+ ` minute/s in ` +sec+ ` seconds.`
        document.getElementById("output1").innerHTML = y
    }

})