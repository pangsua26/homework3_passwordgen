var charArray=[];
var specialChar=["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];
var numericChar=["1","2","3","4","5","6","7","8","9","0"];
var lowerCaseChar=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseChar=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];


function generatePassword() {

    var passwordString="";

    var passwordLength=parseInt(prompt("How many characters would you like your password to contain?"));
    while(passwordLength < 8 || passwordLength > 128 || typeof(passwordLength) != "number" || passwordLength === NaN || passwordLength === null)

    var special=confirm("Click OK to confirm including special charaters.");
    var numeric=confirm("Click OK to confirm including numeric characters.");
    var lowerCase=confirm("Click OK to confirm incluidng lowercase characters.");
    var upperCase=confirm("Click OK to confirm including uppercase characters.");
    

    if (lowerCase==true){
        caseArray.push(lowerCaseChar);
    
    }
    if (upperCase==true){
        caseArray.push(upperCaseChar)
    
    }
    if (numeric==true){
        caseArray.push(numericChar)
        
    }
    if (special==true){
        caseArray.push(specialChar)
    }

    for (var i=0;i<passwordLength;i++){

        var randomCharArrayNum;
        var selectedCharArray;
        var randomCharNum;
        var randomChar;

        randomCharArrayNum= parseInt(Math.floor(Math.random()*caseArray.length));
        selectedCharArray=caseArray[randomCharArrayNum];
        randomCharNum=Math.floor(Math.random()*selectedCharArray.length);
        randomChar=selectedCharArray[randomCharNum];
        passwordString+=randomChar;
    }

    passwordEntry.textContent=passwordString;  

}

var generateButton=document.getElementById("generateButton");
var passwordEntry=document.getElementById("passwordEntry");
generateButton.onclick()= generatePassword;
