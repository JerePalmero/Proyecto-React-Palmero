
import dataProduct from "../components/ItemList/Items";


export default function getProducts() {
    return new Promise((resolve) =>  {
setTimeout ( ()=> resolve (dataProduct), 2000);
});
}

