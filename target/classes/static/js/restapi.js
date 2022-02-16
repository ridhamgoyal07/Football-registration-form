let playerData;
const registerPlayer = (formData)=>{
    fetch("http://localhost:8080/api/player" , {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(formData)
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
        if(data.status == 201){
            window.alert(data.message);
        }else if(data.status == 409){
            window.alert(data.message);
        }else{
            window.alert("Failed to Register !!");
        }
    }).catch((err)=>{
        window.alert("Some Other Error!!");
        console.log(err);
    })
};

const getUser = (username) =>{
    fetch(`http://localhost:8080/api/player/${username}` , {
        method : "GET",
        headers : {
            "Content-Type" : "application/json"
        }
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
        if(data.status == 200){
//            window.alert(data.message);
            playerData = data;
            receiveDataButton.removeAttribute("disabled")
//            console.log(playerData);
        }else{
            if(data.status == 404){
            // window.alert(data.message);
                console.log(data.message);
            }else if(data.status == 400){
            // window.alert(data.message);
                 console.log(data.message);
            }else{
            // window.alert("New User");
                console.log("New user");
            }
            receiveDataButton.setAttribute("disabled" , "true")
        }
    }).catch((err)=>{
        window.alert("Some Other Error!!");
//        console.log(err);
        receiveDataButton.setAttribute("disabled" , "true");
    })
}

const fillFormData = ()=>{
    username.value = playerData.data.username;
    firstName.value = playerData.data.firstName;
    lastName.value = playerData.data.lastName==null?"":playerData.data.lastName;
    countryCode.value = playerData.data.countryCode;
    phoneNumber.value = playerData.data.phoneNumber;
    switchEmail.checked = true;
    email.disabled = false;
    email.value = playerData.data.email;
    ageGroup.value = playerData.data.age ;
    address.value = playerData.data.address==null?"":playerData.data.address;
    pincode.value = playerData.data.pin_code;
    fillCountryData();
    country.value = playerData.data.country;
    fillStateData(country.value);
    state.value = playerData.data.state;
    fillCityData(state.value);
    city.value = playerData.data.city;
    Array.from(teams).forEach((e)=>{
        if(e.value == playerData.data.desiredTeam){
            e.checked = true;
            return;
        }
    });

    let positions = playerData.data.desiredPosition.split(",");
    Array.from(position).forEach((e)=>{
        if(positions.includes(e.value)){
            e.checked = true;
        }
    });
    submit.style.display = "none";
    updateButton.style.display = "block";
}

const updatePlayer = (formData , username)=>{
    fetch(`http://localhost:8080/api/player/${username}` , {
            method : "PUT",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(formData)
        }).then((response)=>{
            return response.json();
        }).then((data)=>{
            if(data.status == 200){
                window.alert(data.message);
            }else if(data.status == 404){
                window.alert(data.message);
            }else{
                window.alert("Failed to Update !!");
            }
        }).catch((err)=>{
            window.alert("Some Other Error!!");
            console.log(err);
        })
}