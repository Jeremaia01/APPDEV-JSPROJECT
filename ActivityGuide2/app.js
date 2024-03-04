const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () => {
    let sec = document.getElementById("sec").value

    if (sec>=86400){
        //y = `There are ` +sec+ ` seconds.`
        x = Math.floor(sec/86400)
        y = `There are ` +x+ ` day/s in ` +sec+ ` seconds.`
        document.getElementById("output1").innerHTML = y
    }
    else if (sec>=3600){
        x = Math.floor(sec/3600)
        y = `There are ` +x+ ` hour/s in ` +sec+ ` seconds.`
        document.getElementById("output1").innerHTML = y
    }
    else if (sec>=60){
        x = Math.floor(sec/60)
        y = `There are ` +x+ ` minute/s in ` +sec+ ` seconds.`
        document.getElementById("output1").innerHTML = y
    }

})
const btn2 = document.getElementById("btn2")
btn2.addEventListener("click", () => {
    let w = document.getElementById("weight").value

    if(w>10){
    y = `The Rate of Package with over 10 pounds is: $3.80`
    document.getElementById("output2").innerHTML = y
    }
    else if(w>6&&w<=10){
    y = `The Rate of Package with over 6 pounds but not more than 10 pounds is: $3.70`
    document.getElementById("output2").innerHTML = y
    }
    else if(w>2&&w<=6){
    y = `The Rate of Package with over 2 pounds but not more than 6 pounds is: $2.20`
    document.getElementById("output2").innerHTML = y
    }
    else if(w<=2){
    y = `The Rate of Package with less than or equal to 2 pounds is: $1.10`
    document.getElementById("output2").innerHTML = y
    }
})
const btn3 = document.getElementById("btn3")
btn3.addEventListener("click", () => {
    let p = document.getElementById("pur").value
    
    if(p<=19&&p>=10){
    x = Math.floor(p)*99
    w = Math.floor(x)*0.20
    t = Math.floor(x-w)
    y = `The total amount of your purchase after discount is: ` + t
    document.getElementById("output3").innerHTML = y
    }
    else if(p>=20&&p<=49){
    x = Math.floor(p)*99
    w = Math.floor(x)*0.30
    t = Math.floor(x-w)
    y = `The total amount of your purchase after discount is: ` + t
    document.getElementById("output3").innerHTML = y
    }
    else if(p>=50&&p<=99){
    x = Math.floor(p)*99
    w = Math.floor(x)*0.40
    t = Math.floor(x-w)
    y = `The total amount of your purchase after discount is: ` + t
    document.getElementById("output3").innerHTML = y
    }
    else if(p>=100){
    x = Math.floor(p)*99
    w = Math.floor(x)*0.50
    t = Math.floor(x-w)
    y = `The total amount of your purchase after discount is: ` + t
    document.getElementById("output3").innerHTML = y
    }
})
const btn4 = document.getElementById("btn4")
btn4.addEventListener("click", () => {
    let m = document.getElementById("mass").value

    n = Math.floor(m*9.8)

    if(n>1000){
    y = `The object with the weight of `+n+`N is too heavy.`
    document.getElementById("output4").innerHTML = y
    }
    else if(n<10){
    y = `The object with the weight of `+n+`N is too light.`
    document.getElementById("output4").innerHTML = y
    }
    else{
    y = `The object with the weight of `+n+`N is average.`
    document.getElementById("output4").innerHTML = y
    }
})