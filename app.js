const annualPrice =document.getElementsByClassName("annual-price");
const monthlyPrice =document.getElementsByClassName("monthly-price");
let active= false;
const toggle = ()=> {
    console.log(annualPrice);
    active = !active
    if (active){
        Array.from(annualPrice).forEach((price)=>{
            price.classList.add("hidden");     
        })
        Array.from(monthlyPrice).forEach((price)=>{
            price.classList.remove("hidden");     
        })
    }else {
        Array.from(monthlyPrice).forEach((price)=>{
            price.classList.add("hidden");     
        })
        Array.from(annualPrice).forEach((price)=>{
            price.classList.remove("hidden");     
        })
    }
}