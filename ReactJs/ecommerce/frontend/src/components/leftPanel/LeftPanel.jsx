import { useOutletContext } from 'react-router-dom';
import { ProductGrid } from '../product';
import { FilterSection } from './FilterSection';

export function LeftPanel() {
  const { searchQuery } = useOutletContext();

  return (
    <div>
      <FilterSection />
      <ProductGrid searchQuery={searchQuery} />
    </div>
  );
}
