import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>Welcome to HomePage</h1>
      <p>
        Go to <Link to="/products">Products</Link>
      </p>
    </>
  );
}

export default HomePage;
