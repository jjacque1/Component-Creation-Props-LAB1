import "./App.css";

import { AlertBox } from "./components/AlertBox/AlertBox";
import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";
import { ProductDisplay } from "./components/ProductDisplay/ProductDisplay";

function App() {
  const user = {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Software Engineer",
  };

  const user2 = {
    id: "2",
    name: "Mary Jane",
    email: "mary.dojane@example.com",
    role: "Ai Engineer",
  };

  const product = {
    id: "8",
    name: "Cook-Book",
    price: 29.99,
    description: "Award winning cook book, best seller, over 5000 copies sold",
    imageUrl: "Cook-Book.png",
    inStock: true,
  };

  const product2 = {
    id: "13",
    name: "Scooter",
    price: 129.99,
    description: "Fastest scooter ever made, 0 to 60mph in 5 seconds",
    imageUrl: "scooter.png",
    inStock: true,
  };

  return (
    <div>
      <AlertBox
        type="info"
        message="Edit Profile below."
        onClose={() => alert("Bye-bye")}
      ></AlertBox>

      <UserProfileCard
        user={user2}
        showEmail={true}
        showRole={true}
        onEdit={(id) => alert(`Edit user ${id}`)}
      ></UserProfileCard>

      <UserProfileCard
        user={user}
        showEmail={true}
        showRole={true}
        onEdit={(id) => alert(`Edit user ${id}`)}
      ></UserProfileCard>

      <div className="mt-24">
        <AlertBox
          type="info"
          message="Add Product to cart."
          onClose={() => alert("Bye-bye")}
        ></AlertBox>
      </div>

      <ProductDisplay
        product={product}
        showDescription={true}
        showStockStatus={true}
        freeDelivery="$19.99 Delivery fee"
        onAddToCart={(name) => alert(`${name} added to cart successfully`)}
      ></ProductDisplay>

      <ProductDisplay
        product={product2}
        showDescription={true}
        showStockStatus={true}
        freeDelivery="Free Delivery"
        onAddToCart={(name) => alert(`${name} added to cart successfully`)}
      ></ProductDisplay>
    </div>
  );
}

export default App;
