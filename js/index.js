// import countryData from "./countryDummyData.js";


let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let phoneNumber = document.getElementById("phoneNumber");
let switchEmail = document.getElementById("switchEmail");
let email = document.getElementById("email");
let ageGroup = document.getElementById("ageGroup");
let teams = document.querySelectorAll(`input[name=team]`);
let position = document.querySelectorAll(`input[name=position]`);
let pincode = document.getElementById("pincode");
let country  = document.getElementById("country");
let state = document.getElementById("state");
let city = document.getElementById("city");
let submit = document.getElementById("submit");

email.disabled = true;

// console.log(countryData , statesData , cityData);

let validateFirstName = (e)=>{
    let regex = /[^A-z]/;
    let txt = e.target.value;
    let result = regex.test(txt);
    if (result == true) {
        e.target.style.border = "1px solid red";
    } else {
        e.target.style.border = "0.5px inset rgb(118, 118, 118)";
    }
    return result;
}

let validatePhoneNumber = (e)=>{
    let regex = /\D/;
    let txt = e.target.value;
    let result = regex.test(txt);
    if (result == true) {
        e.target.style.border = "1px solid red";
    } else {
        e.target.style.border = "0.5px inset rgb(118, 118, 118)";
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

let validateEmail = (e)=>{
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let txt = e.target.value;
    let result = txt.match(regex);
    // console.log(result);
    if (result == null) {
        e.target.style.border = "1px solid red";
    } else {
        e.target.style.border = "0.5px inset rgb(118, 118, 118)";
    }
    return (result==null)?false:true;
}


let ageValue = (e)=>{
    // console.log(e.target.value);
    if(e.target.value==-1){
        e.target.style.border = "1px solid red";
        window.alert("Please select your age group!");
    }else {
        e.target.style.border = "0.5px inset rgb(118, 118, 118)";
    }
}

let validatePinCode = (e)=>{
    let regex = /\D/;
    let txt = e.target.value;
    let result = regex.test(txt);
    if (result == true) {
        e.target.style.border = "1px solid red";
    } else {
        e.target.style.border = "0.5px inset rgb(118, 118, 118)";
    }
    return result;
}

let fillCountryData = ()=>{
    let innerTxt = country.innerHTML;
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

let isDesiredTeamSelected = ()=>{
    let vl ;
    Array.from(teams).forEach((e)=>{
        if(e.checked)
            vl  = e.value;
    });
    if(vl==null || vl==undefined){
        window.alert("Please Select the Desired Team");
    }
}
let isDesiredPositionSelected = ()=>{
    let vl ;
    Array.from(position).forEach((e)=>{
        if(e.checked)
            vl  = e.value;
    });
    if(vl==null || vl==undefined){
        window.alert("Please Select the Desired Position");
    }
}

let isEmailDataFilled = ()=>{
    let vl = email.value;
    if(vl=="" || vl==null){
        window.alert("Please Enter Your Email!!");
    }
}

// document.querySelectorAll(`input[name=position]:checked`))
// function validateLastName(e) {
//     let regex = /^([A-z]*)\s?\B/g;
//     let txt = e.target.value;
//     let result = regex.test(txt);
//     if (result == false) {
//         e.target.style.border = "1px solid red";
//     } else {
//         e.target.style.border = "0.5px inset rgb(118, 118, 118)";
//     }
//     return result;
// }


firstName.addEventListener("keyup",(e)=>{
    let result = validateFirstName(e);
});
firstName.addEventListener("change",(e)=>{
    let result = validateFirstName(e);
    if(result==true){
        window.alert("Only alhabets are allowed in First Name Field");
        firstName.focus();
    }
});

lastName.addEventListener("keyup" , (e)=>{
    // let result = validateLastName(e);
    let result = validateFirstName(e);
});
lastName.addEventListener("change",(e)=>{
    let result = validateFirstName(e);
    if(result==true){
        window.alert("Only alhabets are allowed in Last Name Field");
        e.target.focus();
    }
});
phoneNumber.addEventListener("keyup", (e)=>{
    let result = validatePhoneNumber(e);
});
phoneNumber.addEventListener("change" , (e)=>{
    if(e.target.value.length!=10){
        window.alert("Phone Number should be 10 digits long!!");
        phoneNumber.focus()
    }
    let result = validatePhoneNumber(e);
    if(result==true){
        window.alert("Only number digits are allowed and should be of length 10");
        e.target.focus();
    }
});
switchEmail.addEventListener("change" , (e)=>{
    toggleEmail(e);
});
email.addEventListener("keyup" , (e)=>{
    let result = validateEmail(e);
});
email.addEventListener("change" , (e)=>{
    let result = validateEmail(e);
    if(result==false){
        window.alert("Invalid Email!!");
        e.target.focus();
    }
});
ageGroup.addEventListener("input", (e)=>{
    ageValue(e);
});
pincode.addEventListener("keyup", (e)=>{
    let result = validatePinCode(e);
});
pincode.addEventListener("change" , (e)=>{
    if(e.target.value.length!=6){
        window.alert("Pin Code should be 6 digits long!!");
        e.target.focus();
    }
    let result = validatePinCode(e);
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

submit.addEventListener("click",(e)=>{
    // e.preventDefault();;
    isEmailDataFilled();
    isDesiredTeamSelected();
    isDesiredPositionSelected();
});
