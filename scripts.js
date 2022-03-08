var signupArr =[];
var loginArr =[];

function signUpValidation(){
var fname = document.getElementById("n1").value;
var lname = document.getElementById("n2").value;
var signmobNum = document.getElementById("m1").value;
var signupPwd = document.getElementById("p1").value;
var birthField = document.getElementById("DOB_field").value;

//code for paassword validation
    if(fname == null || fname == ""){
        alert("Name field can't be blank");
        return false;
    }
    if(lname == null || lname == ""){
        alert("Name field can't be blank");
        return false;
    }
        if(signmobNum == null || signmobNum == ""){
        alert("Enter valid mobile number");
        return false;
    }
        if(signupPwd.length<6){
        alert("Password must be atleaset 6 char long");
        return false;
    }
        if(birthField == null || birthField ==""){
        alert("Select your Birth DOB");
        return false;
    }
        if(document.getElementById('Male').checked == false && document.getElementById('Female').checked == false 
        && document.getElementById('Custom').checked == false ) { 
        alert("Please select your gender");
        return false;
    }
        var radio = document.querySelector('input[name=sex]:checked').value;
        signupArr.push([fname,lname,signmobNum,signupPwd,birthField,radio]);//signup array
        console.log(signupArr);
        alert("User registered");
     }   
        function login(){
            var logMobNum = document.getElementById("l1").value;
            var logMobPwd = document.getElementById("l2").value;
            
            for(let i=0;i<signupArr.length;i++){
                var innerArray=signupArr[i];
               var phone= innerArray[2];
               var pass=  innerArray[3];
               console.log('phone :'+phone+'pass :'+pass);     
            }
            if(logMobNum == null && logMobNum == "" || logMobNum == null && logMobNum == ""){
                alert("Please register");
                }
                if(phone === logMobNum && pass != logMobPwd){
                alert("Incorrect password");
                    }
                    if(phone != logMobNum && pass != logMobPwd){
                    alert("Please register");
                        }
                        if(phone === logMobNum && pass === logMobPwd){
                        alert("success");
                            }
    }       
/*  var radio = document.querySelector('input[name=sex]:checked').value;
        signupArr.push([fname,lname,signmobNum,signupPwd,birthField,radio]);//signup array
        console.log(signupArr);
        localStorage.setItem("locStr",JSON.stringify(signupArr));
        alert("User registered");
     }   
        function login(){
            var logMobNum = document.getElementById("l1").value;
            var logMobPwd = document.getElementById("l2").value;
            var storedItems = JSON.parse(localStorage.getItem("locStr"));
            console.log(storedItems);
            for(let i=0;i<storedItems.length;i++){
                var innerArray=storedItems[i];
               var phone= innerArray[2];
               var pass=  innerArray[3];
               console.log('phone :'+phone+'pass :'+pass); */
