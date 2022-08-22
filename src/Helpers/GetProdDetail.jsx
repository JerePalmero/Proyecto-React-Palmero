
import BasePrueba from "../components/ItemDietail/BasePrueba";

export default function GetProdDetail() {
    return new Promise((resolve) =>  {
setTimeout ( ()=> resolve (BasePrueba), 2000);
});
}



