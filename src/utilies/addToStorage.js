const addToStorage = (id) =>{
    let quantity = parseInt(localStorage.getItem(id));
    quantity ? localStorage.setItem(id , quantity+ 1) : localStorage.setItem(id, 1)


}
export {addToStorage}
