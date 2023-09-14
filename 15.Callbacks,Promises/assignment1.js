const getOrderInfo =(callback)=>{
    returnSucessful((order)=>{
        callback(order);
    })
}


const returnSucessful = (callback)=>{
    placeOrder((order)=>{
        setTimeout(()=>{
            const sucessful = "successful";
             console.log("your ticket is booked",sucessful); 
            callback(sucessful);
        },2000)
        
    })
}

const placeOrder=(callback)=>{
    checkAvailable((available)=>{
        setTimeout(()=>{
            const order = "yes";
            console.log("your ticket is order :",order);
            callback(order);
        },2000)
    })
}

const checkAvailable=(callback)=>{
        setTimeout(()=>{
            const available = "yes";
            console.log("your ticket is available :",available);
            callback(available);
        },2000)
    }


function Notify (ticket){
    console.log("here is my notification",ticket);
}

getOrderInfo(Notify);
