import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./Product.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

/* import Pagination from "./Pagination"; */
function Product() {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState("all");
  const [filteredPosts, setFilteredPosts] = useState([]);
  /*  const [page, setPage] = useState(1); */
  /*   const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setpostPerPage] = useState(5); */

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setCategory(value);

    if (value === "all") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((item) => item.category === value);
      setFilteredPosts(filtered);
    }
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
        setFilteredPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  if (!filteredPosts) return <p>Loading....</p>;

  /* fetchMoreData = () => {}; */
  /*  const lastPostInde = currentPage * postPerPage;
  const firstPostIndex = lastPostInde - postPerPage;
  const currentPost = filteredPosts.slice(firstPostIndex, lastPostInde); */
  return (
    <>
      <div className="filter-container">
        <select
          onChange={handleFilterChange}
          value={category}
          className="category-select"
        >
          <option value="all">All</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>
      <div className="product-container">
        {filteredPosts.map((item) => (
          <div className="product-card" key={item.id}>
            <NavLink to={`/products/${item.id}`} className="product-link">
              <img src={item.image} alt={item.title} className="product-img" />
              <h3 className="product-title">
                {item.title.length > 20
                  ? `${item.title.slice(0, 20)}...`
                  : item.title}
              </h3>
            </NavLink>
            <p className="product-price">${item.price}</p>
            <NavLink to="/cart">
              <button
                className="add-to-cart-btn"
                onClick={() => dispatch(addToCart(item))}
              >
                Add to Cart
              </button>
            </NavLink>
          </div>
        ))}
      </div>
      {/*   <Pagination
        totalPosts={filteredPosts.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
      /> */}
    </>
  );
}

export default Product;
