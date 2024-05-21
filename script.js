import Toast from "./toast/toast.js";
const toastInstance = new Toast();

const dataCompany = {
    companyName: '©MTech',
    companyColor1: '#2b2b2b',
    companyColor2: '#f2f1f1',
    companyColorButton1: '#bfaff2',
    companyColorButton2: '#f8d57e',
    imageIlustration: 'img/Screenshot.svg',
    imageIlustrationBackground: 'img/bg.svg',
}

const container = document.querySelector('.container');

const elementsHeader = {
    companyName: document.querySelector('.company-name'),
    contact: document.querySelector('#contact'),
    header: document.querySelector('#header'),
    services: document.querySelector('#services'),
    social: document.querySelector('#social')
}

const elementsMain = {
    textH1: document.querySelector('.text-big'),
    textH2: document.querySelector('.text-small'),
    knowMore: document.querySelector('#know-more'),
    imageIlustration: document.querySelector('.image-ilustration'),
    main: document.querySelector('#main')
}

const elementsMenu = {
    iconHamburguer: document.querySelector('#open-menu'),
    menu: document.querySelector('.menu')
}

window.sr = ScrollReveal({ reset: true });
sr.reveal('.container', { duration: 500 });

elementsHeader.header.style.backgroundColor = `${dataCompany.companyColor1}`
elementsHeader.companyName.innerHTML = `${dataCompany.companyName}`
elementsHeader.companyName.style.color = '#ffffff'
elementsHeader.contact.style.backgroundColor = `${dataCompany.companyColorButton1}`
elementsMain.knowMore.style.backgroundColor = `${dataCompany.companyColorButton2}`
elementsMain.main.style.backgroundColor = `${dataCompany.companyColor1}`
elementsMain.imageIlustration.style.backgroundImage = `url(${dataCompany.imageIlustration})`

elementsHeader.companyName.addEventListener('click', function(){
    if(actualColor === dataCompany.companyColor1){
        elementsHeader.header.style.backgroundColor = `${dataCompany.companyColor2}`
        elementsMain.main.style.backgroundColor = `${dataCompany.companyColor2}`
        elementsHeader.companyName.style.color = 'black'
        elementsMain.textH1.style.color = 'black'
        elementsMain.textH2.style.color = 'black'
        elementsHeader.services.style.color = 'black'
        elementsHeader.social.style.color = 'black'

        actualColor = dataCompany.companyColor2
    } 

    else if(actualColor === dataCompany.companyColor2){
        elementsHeader.header.style.backgroundColor = `${dataCompany.companyColor1}`
        elementsMain.main.style.backgroundColor = `${dataCompany.companyColor1}`
        elementsHeader.companyName.style.color = 'white'
        elementsMain.textH1.style.color = 'white'
        elementsMain.textH2.style.color = 'white'
        elementsHeader.services.style.color = 'white'
        elementsHeader.social.style.color = 'white'
        
        actualColor = dataCompany.companyColor1
    }
})

elementsHeader.services.addEventListener('click', function(){
    toastInstance.createToast(toastInstance.types.alert, toastInstance.texts.emDesenvolvimento)
})

elementsHeader.social.addEventListener('click', function(){
    toastInstance.createToast(toastInstance.types.alert, toastInstance.texts.emDesenvolvimento)
})

elementsHeader.contact.addEventListener('click', function(){
    toastInstance.createToast(toastInstance.types.alert, toastInstance.texts.emDesenvolvimento)
})

elementsMain.knowMore.addEventListener('click', function(){
    toastInstance.createToast(toastInstance.types.alert, toastInstance.texts.emDesenvolvimento)
})