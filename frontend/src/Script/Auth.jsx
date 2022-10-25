const IsAdmin=()=>{
    if(JSON.parse(sessionStorage.getItem("users")) === null) {
        return false;
    }else{
        return JSON.parse(sessionStorage.getItem("users")).role !== "admin";
    }

}

const IsSeller=()=>{
    if(JSON.parse(sessionStorage.getItem("users")) === null) {
        return false;
    }else{
        return JSON.parse(sessionStorage.getItem("users")).role !== "seller";
    }
}

const IsLoggedIn=()=>{
    if(JSON.parse(sessionStorage.getItem("users")) === null) {
        return false;
    }else{
        return JSON.parse(sessionStorage.getItem("users")).username !== "";
    }
}

export {IsAdmin,IsSeller,IsLoggedIn}