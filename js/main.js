/*===== RENDER SNEAKERS =====*/ 
let allSneakers = [];

const getSneakers = async () => {
    try{
        const response = await fetch('../assets/json/sneakers.json')
        if(response.status === 200){
            const mySneakers = await response.json()
            return mySneakers.sneakers
        }else if(response.status === 404){
            console.log("Error 404. API URL not found");
        }
    }catch(error){
        console.log(error);
    }
}

const renderAllSneakers = async () => {
    const $sneakers = document.getElementById("sneakers");
    allSneakers = await getSneakers();

    let cardSneakers = "";

    allSneakers.map((sneaker)=>{
        cardSneakers += `
        <article class="sneaker">
            <img src="${sneaker.imageProduct}" alt="" class="sneake__img">
            <span class="sneaker__name">${sneaker.titleProduct}</span>
            <span class="sneaker__price">${sneaker.price}</span>
            <a href="" class="button-light">Add to Cart <i class='bx bx-right-arrow-alt button-icon'></i></a>
        </article>
        `
    })

    $sneakers.innerHTML = cardSneakers;
}

renderAllSneakers();

/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener("click", ()=>{
            nav.classList.toggle("show");
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

/*===== REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link");
const navMenu = document.getElementById("nav-menu");

function linkAction(){
    navMenu.classList.toggle("show");
}

navLink.forEach(n => n.addEventListener("click", linkAction))


/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute("id")
        // console.log(sectionId);

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav__menu a[href*="+sectionId +"]").classList.add("active");
        }else{
            document.querySelector(".nav__menu a[href*="+sectionId +"]").classList.remove("active");
        }
    })
}

/*===== CHANGE COLOR HEADER =====*/ 
window.onscroll = ()=>{
    const nav = document.getElementById("header");
    if(this.scrollY >= 200) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
}

/*===== SHOPPING CART=====*/
