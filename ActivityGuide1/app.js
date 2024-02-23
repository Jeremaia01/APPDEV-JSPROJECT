const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () => {
    //get input from text box id
    let name = document.getElementById("name").value
    let address = document.getElementById("address").value
    let telephone = document.getElementById("telephone").value
    let major = document.getElementById("major").value

    //displaying the output
    let x = `
    Hello! ${name}, I see that you are from ${address} and you are pursuing ${major} and you can be contacted using ${telephone}
    `

    document.getElementById("output1").innerHTML = x

})

const btn2 = document.getElementById("btn2")
btn2.addEventListener("click", () => {
    let total = document.getElementById("tot").value

    profit = `Your annual profit is equal to: ` + total*0.23

    document.getElementById("output2").innerHTML = profit
})

const btn3 = document.getElementById("btn3")
btn3.addEventListener("click", () => {
    let hr = 5
    distance = hr * 60

    d = `The distance the car will travel in ` + hr + ` hours is: ` + distance + ` miles.`

    document.getElementById("output3").innerHTML = d
})

const btn4 = document.getElementById("btn4")
btn4.addEventListener("click", () => {
    let hr = 8
    distance = hr * 60

    d = `The distance the car will travel in ` + hr + ` hours is: ` + distance + ` miles.`

    document.getElementById("output3").innerHTML = d
})

const btn5 = document.getElementById("btn5")
btn5.addEventListener("click", () => {
    let hr = 12
    distance = hr * 60

    d = `The distance the car will travel in ` + hr + ` hours is: ` + distance + ` miles.`

    document.getElementById("output3").innerHTML = d
})

const btn6 = document.getElementById("btn6")
btn6.addEventListener("click", () => {
    let mil = document.getElementById("mil").value
    let gas = document.getElementById("gas").value
    
    mpg = mil/gas
    m = `The car's miles per gallon is: ` + mpg

    document.getElementById("output4").innerHTML = m
})

const btn7 = document.getElementById("btn7")
btn7.addEventListener("click", () => {
    let c = document.getElementById("cel").value
    far = (9/5)*c + 32
    f = `The Fahrenheit of ` + c + ` Celsius is: ` + far

    document.getElementById("output5").innerHTML = f
})

const btn8 = document.getElementById("btn8")
btn8.addEventListener("click", () => {
    let c = document.getElementById("coo").value
    calories = 30*c
    cal = `The total amount of calories you have eaten is: ` + calories

    document.getElementById("output6").innerHTML = cal
})

const btn9 = document.getElementById("btn9")
btn9.addEventListener("click", () => {
    let m = document.getElementById("male").value
    let f = document.getElementById("fem").value

    tot = parseInt(m) + parseInt(f)
    mp = (m/tot)*100
    fp = (f/tot)*100
    per = `The total students in the class is : ` + tot +`. The percentage of males in the class is: ` + mp +`. The percentage of females in the class is: ` + fp

    document.getElementById("output7").innerHTML = per
})