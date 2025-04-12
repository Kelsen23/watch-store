import ProductCard from "./components/ProductCard.js";
import Sidebar from "./components/Sidebar"
import { data } from "./db/data";

const App = () => {
  return (
    <div>
      <Sidebar />
      <div className="p-4 flex flex-wrap justify-center items-center">
        {data.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default App
