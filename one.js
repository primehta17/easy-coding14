function validatePin(pin) {
    if(pin.length===4 || pin.length===6){
        if(Number(pin)){
            return "Valid";
        }
        
    }
    return "Invalid";
}
console.log(validatePin("12345"));