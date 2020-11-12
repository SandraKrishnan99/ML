id=document.getElementById("id");
pid=document.getElementById("id_valid");
names=document.getElementById("name");
pname=document.getElementById("name_valid");
emaill=document.getElementById("email");
evali=document.getElementById("email_valid");
function idvalid(){
if(/[^a-zA-Z0-9]/.test(id.value)){
        console.log(id.value);
        pid.innerHTML="Only AlphanumericS";
        Submit.disabled=true;
        id.style.borderColor="red";
        return false;}
    else{
        pid.innerHTML="";
        Submit.disabled=false;
        id.style.borderColor="green";
        return true;
    }
}

function namevalid(){
    console.log(names.value);
    if(/[^a-zA-Z]/.test(names.value)){
        console.log(names.value);
        pname.innerHTML="Only Alphabets";
        Submit.disabled=true;
        names.style.borderColor="red";
        return false;}
    else{
        pname.innerHTML="";
        Submit.disabled=false;
        names.style.borderColor="green";
        return true;}

}
function evalid(){
    var n;
    if(!emaill.value.includes('@')){
        evali.innerHTML="Include '@'";
        emaill.style.borderColor="red";
        Submit.disabled=true;
        return false;
    }
    else
    {
    n=emaill.value.indexOf("@");
    evali.innerHTML="";    
    }
    if(!emaill.value.includes('.',n)){
        evali.innerHTML="Include '.'";
        Submit.disabled=true;
        emaill.style.borderColor="red";
        return false;
    }
    else 
    {
        evali.innerHTML="";
        Submit.disabled=false;
        emaill.style.borderColor="green";
        return true;
    }
}
/*---------------------------------------------PHONE NUMBER---------------------------------------------------*/
no=document.getElementById("num");
pno=document.getElementById("numbervalid");
function nvalid(){
        if(no.value.length!=10){
            //console.log(no);
            pno.innerHTML="Phone number should have 10 digits";
            Submit.diabled=true;
            no.style.borderColor="red";
            return false;
        }
        else{
            pno.innerHTML="";
            Submit.disabled=false;
            no.style.borderColor="green";
            return true;
        }
    }
/*---------------------------------------------PHONE NUMBER---------------------------------------------------*/

/*--------------------------------------------------DOB-------------------------------------------------------*/
dates=document.getElementById("date");
pdate=document.getElementById("datevalid");
function dvalid(){
    var p=/^\d{1,2}\/\d{1,2}\/\d{4}$/;
    var c=/^\d{1,2}\\\d{1,2}\\\d{4}$/;
    var t=/^\d{1,2}\-\d{1,2}\-\d{4}$/;
    if(!dates.value.match(p)&&!dates.value.match(c)&&!dates.value.match(t)){
        //console.log(dates);
        
        pdate.innerHTML="Date Invalid";
        Submit.disabled=true;
        dates.style.borderColor="red";
        return false;
    }
    else{
        pdate.innerHTML="";
        Submit.disabled=false;
        dates.style.borderColor="green";
        return true;
    }

}
/*--------------------------------------------------DOB-------------------------------------------------------*/


/*--------------------------------------------------SELECT----------------------------------------------------*/
quali=document.getElementById("select");
qualvalid=document.getElementById("qualvalid");
function qual(){
if(select.value!="Qualification"){
    qualvalid.innerHTML="";
    Submit.disabled=false;
    quali.style.borderColor="green";
    return true;

}
else{
    qualvalid.innerHTML="Select Qualification";
        Submit.disabled=true;
        quali.style.borderColor="red";
        return false;
    }
}
/*--------------------------------------------------SELECT----------------------------------------------------*/

/*--------------------------------------------------PASSWORD----------------------------------------------------*/
pwd=document.getElementById("pwd");
vpwd=document.getElementById("passwordvalid");
rpwd=document.getElementById("rpwd");
vrpwd=document.getElementById("Repasswordvalid");
function passwordvalid(){
    if(pwd.value.length<8){
        vpwd.innerHTML="Must be 8 characters long!";
        pwd.style.borderColor="red";
        Submit.disabled=true;
        return false;
    }
    else{
        vpwd.innerHTML="";
        pwd.style.borderColor="green";
        Submit.disabled=false;
        return true;
    }

}
function repasswordvalid(){
    if(pwd.value!=rpwd.value){
        vrpwd.innerHTML="Password doesn't match";
        rpwd.style.borderColor="red";
        Submit.disabled=true;
        return false;
    }
    else{
        vrpwd.innerHTML="";
        rpwd.style.borderColor="green";
        Submit.disabled=false;
        return true;

    }
}

/*--------------------------------------------------PASSWORD----------------------------------------------------*/

/*--------------------------------------------------ADRESS------------------------------------------------------*/
add=document.getElementById("address");
vadd=document.getElementById("addresvalid");
function addressvalid(){
    if(add.value.length<5){
        console.log(add.value);
        vadd.innerHTML="Length must be between 20-100";
        add.style.borderColor="red";
        Submit.disabled=true;
        return false;
    }
    else{
        vadd.innerHTML="";
        add.style.borderColor="green";
        Submit.disabled=false;
        return true;
    }
}


/*--------------------------------------------------ADRESS------------------------------------------------------*/

function subm(){
    return(idvalid()&&namevalid()&&evalid()&&nvalid()&&dvalid()&&qual()&&passwordvalid()&&repasswordvalid()&&addressvalid());
}
function ale(){
    if((id.value&&names.value&&emaill.value&&no.value&&dates.value&&pwd.value&&rpwd.value&&add.value)==""){
        alert("Fill All The Details:");
    }
    else{
        alert(names.value+" "+"Successfully Registered!");
    }
}

    












/*--------------------------------------------------PASSWORD----------------------------------------------------*/
