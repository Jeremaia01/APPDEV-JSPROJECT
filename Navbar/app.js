// navbar
const navTog = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navTog.addEventListener('click', () => {
    console.log("I am clicked.")
    console.log(links.classList)
    console.log(links.classList.contains('links'))
    // if(links.classList.contains('show-links')){
    //     links.classList.remove('show-links')
    // }
    // else{
    //     links.classList.add('show-links')
    // }
    links.classList.toggle('show-links')
})