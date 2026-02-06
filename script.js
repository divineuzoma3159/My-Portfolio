const aboutMe = document.getElementById('aboutMe');
function moveInto(){
    aboutMe.scrollIntoView({behavior:'smooth'});
    aboutMe.style.animation = `flooring ${1}s ease-in-out`;
     const measuer = aboutMe.getBoundingClientRect();
     if(measuer.top > 50){
        aboutMe.style.marginTop = `${10}rem`;
        aboutMe.style.marginBottom = `${9}rem`;
     }
}
const mySkills = document.getElementById('mySkills');
function moveInto1(){
    mySkills.scrollIntoView({behavior:'smooth'});
    mySkills.style.animation = `flooring ${1}s ease-in-out`;
        const measuer = aboutMe.getBoundingClientRect();
     if(measuer.top > 50){
        mySkills.style.marginTop = `${10}rem`;
        mySkills.style.marginBottom = `${9}rem`;
     }
}
const myProjects = document.getElementById('myProjects');
function moveInto2(){
    myProjects.scrollIntoView({behavior:'smooth'});
    myProjects.style.animation = `flooring ${1}s ease-in-out`;
     const measuer = aboutMe.getBoundingClientRect();
     if(measuer.top > 50){
        myProjects.style.marginTop = `${10}rem`;
        myProjects.style.marginBottom = `${9}rem`;
     }
}
const myContact = document.getElementById('myContact');
function moveInto3(){
    myContact.scrollIntoView({behavior:'smooth'});
}
function moverAll(){
    aboutMe.scrollIntoView({behavior:'smooth'});
    aboutMe.style.animation = `flooring ${1}s ease-in-out`;
        const measuer = aboutMe.getBoundingClientRect();
     if(measuer.top > 50){
        aboutMe.style.marginTop = `${10}rem`;
        aboutMe.style.marginBottom = `${9}rem`;
     }
}
function moverAll1(){
    mySkills.scrollIntoView({behavior:'smooth'});
    mySkills.style.animation = `flooring ${1}s ease-in-out`;
        const measuer = aboutMe.getBoundingClientRect();
     if(measuer.top > 50){
        mySkills.style.marginTop = `${10}rem`;
        mySkills.style.marginBottom = `${9}rem`;
     }
}
function moverAll2(){
    myProjects.scrollIntoView({behavior:'smooth'});
    myProjects.style.animation = `flooring ${1}s ease-in-out`;
    const measuer = aboutMe.getBoundingClientRect();
     if(measuer.top > 50){
        myProjects.style.marginTop = `${10}rem`;
        myProjects.style.marginBottom = `${9}rem`;
     }
}
function moverAll3(){
        myContact.scrollIntoView({behavior:'smooth'});
}