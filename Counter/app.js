const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

console.log(btns)
let count=0
btns.forEach((btn) => {
    console.log(btn)

    btn.addEventListener('click', (button) =>{
        console.log(button.currentTarget.classList)

        const styles = button.currentTarget.classList
        if(styles.contains('decrease')){
            console.log("Decrease is pressed.")
            count--
        }
        else if(styles.contains('increase')){
            console.log("Increase is pressed.")
            count++
        }
        else if(styles.contains('random')){
            getRandomNum()
        }
        else if(styles.contains('increase5')){
            console.log("Increase by 5 is pressed.")
            count+=5
        }
        else if(styles.contains('decrease5')){
            console.log("Decrease by 5 is pressed.")
            count-=5
        }
        else{
            console.log("Reset is pressed.")
            count = 0
        }

        if(count > 0){
            value.style.color = "green"
        }
        else if(count == 0){
            value.style.color = "black"
        }
        else if(count < 0){
            value.style.color = "red"
        }

        value.textContent = count
    })
})

getRandomNum = () =>{
    if(count>0){
        console.log("Random is pressed.")
        count = Math.floor(Math.random() * 101)* -1;
    }
    else if (count<0){
        count = Math.floor(Math.random() * 101);
    }
    else{
        count = Math.floor(Math.random() * 101);
    }
}