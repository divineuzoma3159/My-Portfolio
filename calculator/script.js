const button = document.querySelectorAll('#myBtn');
const myInput = document.querySelector('#myInput');
let express = "";
 button.forEach(init => {
    init.addEventListener('click',() => {
        express += init.innerHTML;
         myInput.value = express;  
    });
});
function clearAll(){
    if(myInput.value){
        myInput.value = "";
        express = "";
    }
}
function deleteOne(){
    myInput.value = myInput.value.slice(0,-1);
    express = ""
}
function evaluation(){
    try{
     let result = eval(express);
    express = result.toString();
     myInput.value = result;
    }catch(error){
        myInput.value = "Error";
        express = "";
    }
}