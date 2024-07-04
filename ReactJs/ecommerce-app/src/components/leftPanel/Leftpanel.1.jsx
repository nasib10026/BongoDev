import { ProductGrid } from "../product/ProductGrid";
import { FilterSection } from "./FilterSection";
import { LeftPanelHeader } from "./LeftPanelHeader";

export function Leftpanel() {
    const headerTitle = 'Simple E-commerce App';
    const products = [
        {
          id: 1,
          name: 'Gaming Laptop',
          price: 1500,
          image: 'https://via.placeholder.com/150',
          categories: ['Laptops', 'Gaming'],
        },
        {
          id: 2,
          name: 'Wireless Mouse',
          price: 50,
          image: 'https://via.placeholder.com/150',
          categories: ['Accessories', 'Peripherals'],
        },
        {
          id: 3,
          name: 'Mechanical Keyboard',
          price: 100,
          image: 'https://via.placeholder.com/150',
          categories: ['Accessories', 'Peripherals'],
        },
        {
          id: 4,
          name: 'External Hard Drive',
          price: 120,
          image: 'https://via.placeholder.com/150',
          categories: ['Storage', 'Accessories'],
        },
        {
          id: 5,
          name: 'Graphics Card',
          price: 500,
          image: 'https://via.placeholder.com/150',
          categories: ['Components', 'Gaming'],
        },
        {
          id: 6,
          name: 'Portable SSD',
          price: 200,
          image: 'https://via.placeholder.com/150',
          categories: ['Storage', 'Accessories'],
        },
        {
          id: 7,
          name: 'Gaming Monitor',
          price: 300,
          image: 'https://via.placeholder.com/150',
          categories: ['Monitors', 'Gaming'],
        },
        {
          id: 8,
          name: 'All-in-One Printer',
          price: 150,
          image: 'https://via.placeholder.com/150',
          categories: ['Peripherals', 'Printers'],
        },
      ];
    return (<div>
        <LeftPanelHeader title = {headerTitle}/>
        <FilterSection/>
        <ProductGrid products = {products}/>
    </div>);
}
