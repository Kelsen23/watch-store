import ProductCard from "./components/ProductCard.js";
import Sidebar from "./components/Sidebar";
import { data } from "./db/data";
import { useFilterStore } from "./store.js";

const App = () => {
  const { selectedCountries, selectedColors, selectedPriceRange } =
    useFilterStore();

  const filteredData = data.filter((item) => {
    const matchesColors =
      selectedColors.length === 0 ||
      Object.keys(item.img).some((color) => selectedColors.includes(color));

    const matchesCountry =
      selectedCountries.length === 0 ||
      selectedCountries.includes(item.country);

    const matchesPrice = selectedPriceRange
      ? item.price >= selectedPriceRange.min &&
        item.price <= selectedPriceRange.max
      : true;

    return matchesColors && matchesCountry && matchesPrice;
  });

  return (
    <div>
      <Sidebar />
      <div className="p-4 flex flex-wrap justify-center items-center">
        {filteredData.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
