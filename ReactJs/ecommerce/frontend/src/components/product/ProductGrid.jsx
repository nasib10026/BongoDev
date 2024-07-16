import { useEffect } from 'react';
import { useProducts } from '../../api/hooks';
import { ProductCard } from './ProductCard';


const ProductsEmptyState = () => <h1>No products to display</h1>;

export const ProductGrid = ({searchQuery}) => {
  const { isLoading,products,searchProducts } = useProducts();
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   //base url banate pari etake.Ejonno axios config kora lagbe.http.js e config korbo.http ekhane under the hood axios
  //   //so ekhon etake custom hook e niye jawa jabe product fetching er beparta
  //   http
  //     .get('http://localhost:5000/api/products') 
  //     .then((res) => {
  //       setProducts(res.data);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  useEffect(()=>{
    searchProducts(searchQuery);

  },[searchQuery]);
  
  if(isLoading){
    return <div>Loading....</div>
  }
  return (
    
    <div className="grid grid-cols-3 gap-4">
      {products.length === 0 ? (
        <ProductsEmptyState />
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};
