document.addEventListener("DOMContentLoaded", ()=>{
    const navbar=document.getElementById('Navbar')

    document.addEventListener('scroll', ()=>{
        const scrollY=window.scrollY

        if( scrollY > 100 ) {
            navbar.classList.add('white-nav')
        } else{
            navbar.classList.remove('white-nav')
        }

        console.log(window.scrollY)
    })
})