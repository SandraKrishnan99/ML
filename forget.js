function showme(){
    document.getElementById("para").innerHTML="Every website has a purpose, a reason someone created it and others use it.To explore is to get out of the comfort zone, to venture to new terrain, to try new things, to explore the places that excite you and frighten you a little. May these quotes inspire you to be an explorer in all areas of your life.";
}

function evalid(){
    var n;
    if(!email.value.includes('@')){
        mailvalid.innerHTML="Include '@'";
        email.style.borderColor="red";
        submit.disabled=true;
        return false;
    }
    else
    {
    n=email.value.indexOf("@");
    mailvalid.innerHTML="";    
    }
    if(!email.value.includes('.',n)){
        mailvalid.innerHTML="Include '.'";
        submit.disabled=true;
        email.style.borderColor="red";
        return false;
    }
    else 
    {
        mailvalid.innerHTML="";
        submit.disabled=false;
        email.style.borderColor="green";
        return true;
    }
    
}
var p=document.getElementById("form");
function send(){
    if(p.email.value!=""){
        console.log(p.email.value);
         alert("Sent an OTP to The Email id : "  +p.email.value);
    }
    else{
        alert("No Email ID Entered");
    }
}