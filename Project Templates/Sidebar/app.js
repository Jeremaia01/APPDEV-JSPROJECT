const toggleBtn=document.querySelector('.sidebar-toggle')
const closeBtn=document.querySelector('.close-btn')
const sidebar=document.querySelector('.sidebar')

toggleBtn.addEventListener('click', () =>{
    console.log("THe button is clicked")
    sidebar.classList.toggle('show-sidebar')
})
closeBtn.addEventListener('click', () =>{
    console.log('Close button is clicked.')
    sidebar.classList.remove('show-sidebar')
})