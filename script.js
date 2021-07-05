//selectors
const hamburgerIcon = document.querySelector('.hamBurger');
const linksContainer = document.querySelector('.linksContainer');
const links = document.querySelectorAll('.links')

//eventListeners

hamburgerIcon.addEventListener('click',()=>{
    if(linksContainer.classList.contains('clicked')){
        linksContainer.classList.remove('clicked');
        links.forEach(link => {
            link.setAttribute("style","visibility: hidden;")
        })
        
    }
    else{
        linksContainer.classList.add('clicked');
        links.forEach(link => {
            link.setAttribute("style","visibility: visible;")
        })
        
    }
})

const wisth = screen.availWidth
console.log(wisth)

