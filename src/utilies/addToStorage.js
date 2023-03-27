const addToStorage = (id) =>{

    let shopingCard = {};

    let storedShoppingCard = localStorage.getItem('card');

    if(storedShoppingCard){
        shopingCard = JSON.parse(storedShoppingCard);

    }
    // console.log(shopingCard);
    let quantity = shopingCard[id]
    if(quantity){
        let newQuantity = quantity + 1;
        shopingCard[id] = newQuantity;
    }else{
        shopingCard[id] = 1;
    }

    localStorage.setItem('card', JSON.stringify(shopingCard))


    // let shopingCard = {};
    // let storedCard = localStorage.getItem('card')

    // if(storedCard){
    //     shopingCard = JSON.parse(storedCard)
    // }

    // let quantity = shopingCard[id];
    // if (quantity) {
    //     const newQuantity = quantity + 1;
    //     shopingCard[id] = newQuantity;        
    // }else{
    //     shopingCard[id] = 1;
    // }
    // localStorage.setItem('card', JSON.stringify(shopingCard))




}
export {addToStorage}
