const removeFromStorage = (id) =>{
    // console.log(id);
    let storedCard = JSON.parse(localStorage.getItem('card'))

    console.log(storedCard);
    delete storedCard[id];
    console.log(storedCard);


    localStorage.setItem('card', JSON.stringify(storedCard))
}

export {removeFromStorage}