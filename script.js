const aboutMe = document.getElementById('aboutMe');
function moveInto(){//To move into the about section from the nav
    aboutMe.scrollIntoView({behavior:'smooth'});
    aboutMe.style.animation = `flooring ${1}s ease-in-out`;
     const measuer = aboutMe.getBoundingClientRect();
     if(measuer.top > 50){
        aboutMe.style.marginTop = `${10}rem`;
        aboutMe.style.marginBottom = `${9}rem`;
     }
}
const mySkills = document.getElementById('mySkills');
function moveInto1(){//To move into the skill section from the nav
    mySkills.scrollIntoView({behavior:'smooth'});
    mySkills.style.animation = `flooring ${1}s ease-in-out`;
        const measuer = aboutMe.getBoundingClientRect();
     if(measuer.top > 50){
        mySkills.style.marginTop = `${10}rem`;
        mySkills.style.marginBottom = `${9}rem`;
     }
}
const myProjects = document.getElementById('myProjects');
function moveInto2(){//To move into the project section from the nav
    myProjects.scrollIntoView({behavior:'smooth'});
    myProjects.style.animation = `flooring ${1}s ease-in-out`;
     const measuer = aboutMe.getBoundingClientRect();
     if(measuer.top > 50){
        myProjects.style.marginTop = `${10}rem`;
        myProjects.style.marginBottom = `${9}rem`;
     }
}
const myContact = document.getElementById('myContact');
function moveInto3(){//To move into the contact section from the nav
    myContact.scrollIntoView({behavior:'smooth'});
}
function moverAll(){//To move into the projects section from the hero section
  myProjects.scrollIntoView({behavior:'smooth'});
   myProjects.style.animation = `flooring ${1}s ease-in-out`;
        const measuer = aboutMe.getBoundingClientRect();
     if(measuer.top > 50){
        aboutMe.style.marginTop = `${10}rem`;
        aboutMe.style.marginBottom = `${9}rem`;
     }
}
function moverAll1(){//To move into the skills section from the about section
    mySkills.scrollIntoView({behavior:'smooth'});
    mySkills.style.animation = `flooring ${1}s ease-in-out`;
        const measuer = aboutMe.getBoundingClientRect();
     if(measuer.top > 50){
        mySkills.style.marginTop = `${10}rem`;
        mySkills.style.marginBottom = `${9}rem`;
     }
}
function moverAll2(){//To move into the project section from the skill section
    myProjects.scrollIntoView({behavior:'smooth'});
    myProjects.style.animation = `flooring ${1}s ease-in-out`;
    const measuer = aboutMe.getBoundingClientRect();
     if(measuer.top > 50){
        myProjects.style.marginTop = `${10}rem`;
        myProjects.style.marginBottom = `${9}rem`;
     }
}

// function moverAll3(){
//         myContact.scrollIntoView({behavior:'smooth'});
// }
const myWeather = document.querySelector('#myWeather');
const myCalc = document.querySelector('#myCalc');
myCalc.addEventListener("click",e => {//To move to the calculator page
    const confirmer = confirm("Are you sure you want to go to the Calculator?")
    if(!confirmer){
        e.preventDefault()
    }
});
myWeather.addEventListener("click",e => {//To move to the Weather App page
    const confirmer = confirm("Are you sure you want to go to the Weather App?")
    if(!confirmer){
        e.preventDefault()
    }
});



