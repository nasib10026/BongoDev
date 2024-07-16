import { getProducts } from "../../api/services";
import { ProductGrid } from "../product";
import { FilterSection } from "./FilterSection";
import { LeftPanelHeader } from "./LeftPanelHeader";

export function Leftpanel() {
    const headerTitle = 'Simple E-commerce App';
    //const products = getProducts();//grid e 
    return (<div>
        <LeftPanelHeader title = {headerTitle}/>
        <FilterSection/>
        <ProductGrid/>
    </div>);
}
