// import countryData from "./countryDummyData.js";

let username = document.getElementById("userName");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let countryCode = document.getElementById("countryCode");
let phoneNumber = document.getElementById("phoneNumber");
let switchEmail = document.getElementById("switchEmail");
let email = document.getElementById("email");
let ageGroup = document.getElementById("ageGroup");
let teams = document.querySelectorAll(`input[name=team]`);
let position = document.querySelectorAll(`input[name=position]`);
let address = document.getElementById("address");
let pincode = document.getElementById("pincode");
let country  = document.getElementById("country");
let state = document.getElementById("state");
let city = document.getElementById("city");
let submit = document.getElementById("submit");
let receiveDataButton = document.getElementById("receiveDataButton");
let updateButton = document.getElementById("updateButton");

email.disabled = true;
receiveDataButton.disabled = true;

let validateUsername = (target)=>{
    let regex = /[^A-z0-9]/;
    let txt = target.value;
    let result = regex.test(txt);
    if(result == true){
        target.style.border = "1px solid red";
    }else {
        target.style.border = "0.5px inset rgb(118, 118, 118)";
    }
    return result;

}

let validateFirstName = (target)=>{
    let regex = /[^A-z]/;
    let txt = target.value;
    // console.log("target: " , target);
    let result = regex.test(txt);
    if (result == true) {
        target.style.border = "1px solid red";
    } else {
        target.style.border = "0.5px inset rgb(118, 118, 118)";
    }
    return result;
}

let validatePhoneNumber = (target)=>{
    let regex = /\D/;
    let txt = target.value;
    let result = regex.test(txt);
    
    if (result == true || target.value.length!=10) {
        target.style.border = "1px solid red";
    } else {
        target.style.border = "0.5px inset rgb(118, 118, 118)";
    }
    return result;
}

let toggleEmail = (e)=>{
    if(e.target.checked == true){
        email.disabled = false;
    }else{
        email.disabled = true;
    }
}

let validateEmail = (target)=>{
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let txt = target.value;
    let result = txt.match(regex);
    // console.log(result);
    if (result == null) {
        target.style.border = "1px solid red";
    } else {
        target.style.border = "0.5px inset rgb(118, 118, 118)";
    }
    return (result==null)?false:true;
}


let ageValue = (target)=>{
    // console.log(e.target.value);
    if(target.value==-1){
        target.style.border = "1px solid red";
        window.alert("Please select your age group!");
    }else {
        target.style.border = "0.5px inset rgb(118, 118, 118)";
    }
}

let validatePinCode = (target)=>{
    let regex = /\D/;
    let txt = target.value;
    let result = regex.test(txt);
    if (result == true || target.value.length!=6 ) {
        target.style.border = "1px solid red";
    } else {
        target.style.border = "0.5px inset rgb(118, 118, 118)";
    }
    return result;
}

let fillCountryData = ()=>{
    let innerTxt = `<option value="">Select your State</option>`;
    countryData.forEach((e)=>{
        innerTxt += `<option value = "${e}">${e}</option>\n`;
    });
    country.innerHTML = innerTxt;
}

let fillStateData = (vl)=>{
    let innerTxt = "";
    statesData[vl].forEach((e)=>{
        innerTxt += `<option value = "${e}">${e}</option>\n`;
    });
    state.innerHTML = innerTxt;
}

let fillCityData = (vl)=>{
    let innerTxt = "";
    cityData[vl].forEach((e)=>{
        innerTxt += `<option value = "${e}">${e}</option>\n`;
    });
    city.innerHTML = innerTxt;
}

let isDesiredTeamSelectedOrValue = ()=>{
    let vl ;
    Array.from(teams).forEach((e)=>{
        if(e.checked)
            vl  = e.value;
    });
    if(vl==null || vl==undefined){
        return undefined;
    }
    return vl;
}
let isDesiredPositionSelectedOrValue = ()=>{
    let vl ;
    let values = [];
    Array.from(position).forEach((e)=>{
        if(e.checked){
            vl  = e.value;
            values.push(e.value);
        }
    });
    if(vl==null || vl==undefined){
        return undefined;
    }
//    console.log(values);
    return values.toString();
}

let isEmailDataFilled = ()=>{
    let vl = email.value;
    if(vl=="" || vl==null){
        window.alert("Please Enter Your Email!!");
    }
    return vl;
}

username.addEventListener("keyup" , (e)=>{
    let result = validateUsername(e.target);
});

username.addEventListener("change" , (e)=>{
    let result = validateUsername(e.target);
    if(result==true){
        window.alert("Only alhabets and numbers are allowed in Username Field");
        username.focus();
    }else{
        getUser(username.value);
    }
})

firstName.addEventListener("keyup",(e)=>{
    let result = validateFirstName(e.target);
});
firstName.addEventListener("change",(e)=>{
    let result = validateFirstName(e.target);
    if(result==true){
        window.alert("Only alhabets are allowed in First Name Field");
        firstName.focus();
    }
});

lastName.addEventListener("keyup" , (e)=>{
    // let result = validateLastName(e);
    let result = validateFirstName(e.target);
});
lastName.addEventListener("change",(e)=>{
    let result = validateFirstName(e.target);
    if(result==true){
        window.alert("Only alhabets are allowed in Last Name Field");
        e.target.focus();
    }
});
phoneNumber.addEventListener("keyup", (e)=>{
    let result = validatePhoneNumber(e.target);
});
phoneNumber.addEventListener("change" , (e)=>{
    if(e.target.value.length!=10){
        window.alert("Phone Number should be 10 digits long!!");
        phoneNumber.focus()
    }
    let result = validatePhoneNumber(e.target);
    if(result==true){
        window.alert("Only number digits are allowed and should be of length 10");
        e.target.focus();
    }
});
switchEmail.addEventListener("change" , (e)=>{
    toggleEmail(e);
});
email.addEventListener("keyup" , (e)=>{
    let result = validateEmail(e.target);
});
email.addEventListener("change" , (e)=>{
    let result = validateEmail(e.target);
    if(result==false){
        window.alert("Invalid Email!!");
        e.target.focus();
    }
});     
ageGroup.addEventListener("input", (e)=>{
    ageValue(e.target);
});
pincode.addEventListener("keyup", (e)=>{
    let result = validatePinCode(e.target);
});
pincode.addEventListener("change" , (e)=>{
    if(e.target.value.length!=6){
        window.alert("Pin Code should be 6 digits long!!");
        e.target.focus();
    }
    let result = validatePinCode(e.target);
    if(result==true){
        window.alert("Only number digits are allowed and should be of length 6");
        e.target.focus();
    }
});
fillCountryData();
country.addEventListener("change" , (e)=>{
    let vl = e.target.value;
    fillStateData(vl);
    let  vl2 = state.value;
    fillCityData(vl2);
});
state.addEventListener("click", (e)=>{
    let vl = e.target.value;
    fillCityData(vl);
});

receiveDataButton.addEventListener("click" , (e)=>{
    e.preventDefault();
    fillFormData();
})

let getFormData = ()=>{
    let data  = {
        username : username.value,
        firstName : firstName.value,
        lastName : lastName.value ? lastName.value : null,
        countryCode : countryCode.value,
        phoneNumber : phoneNumber.value,
        email : email.value,
        age : ageGroup.value,
        desiredTeam : isDesiredTeamSelectedOrValue() ? isDesiredTeamSelectedOrValue() : null,
        desiredPosition : isDesiredPositionSelectedOrValue() ? isDesiredPositionSelectedOrValue() : null,
        address : address.value ? address.value : null,
        pin_code : pincode.value==""?null:pincode.value,
        country : country.value,
        city : city.value,
        state : state.value
        
    };
    return data;
}

let validatedRequiredData = ()=>{
    if(
        username.value=="" ||
        firstName.value=="" ||
        phoneNumber.value=="" ||
        email.value=="" ||
        ageGroup.value=="" ||
        isDesiredTeamSelectedOrValue()==undefined ||
        isDesiredPositionSelectedOrValue() == undefined ||
        country == "" ||
        state == "" ||
        city == "" ||
        pincode == ""
    ){
        window.alert("Please fill up the Required fields !!");
        return false;
    }else{
        return true;
    }
}

let validateFieldData = ()=>{
    if(
        validateUsername(username) ||
        validateFirstName(firstName) ||
        validateFirstName(lastName) ||
        validatePhoneNumber(phoneNumber) ||
        !validateEmail(email) ||
        validatePinCode(pincode) 

    ){
        window.alert("Invalid Data Entry!! \nPlease Check it..");
        return false
    }else{
        return true;
    }

};

let validateCompleteForm = ()=>{
    let req1 = validatedRequiredData();
    if(req1==true){
        return validateFieldData() ? true : false;
    }else{
        return false;
    }

}


submit.addEventListener("click",(e)=>{
    e.preventDefault();
    let req = validateCompleteForm();
    if(req==false){
        return ;
    }else{
        let formData = getFormData();
        registerPlayer(formData);
    }
});


updateButton.addEventListener("click",(e)=>{
    e.preventDefault();
    let req = validateCompleteForm();
    if(req==false){
        return ;
    }else{
        let formData = getFormData();
        updatePlayer(formData,username.value);
    }
});
