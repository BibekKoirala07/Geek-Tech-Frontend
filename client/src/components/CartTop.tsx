function CartTop({
  handleSort,
  handleSearch,
  setModal,
}: {
  handleSearch: (query: string) => {};
  handleSort: (sortBy: string) => void;
  setModal: any;
}) {
  return (
    <div className="cart-top flex flex-wrap gap-10 align-middle bg-gray-300 my-5 p-4 rounded-lg">
      {/* Sorting Options */}
      {/* <div className="sorting">
        <label htmlFor="sort">Sort By: </label>
        <select id="sort">
          <option value="">Select</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div> */}

      <div className="flex gap-2">
        <p className="bg-red-500">Sort By:</p>
        <select id="sort" onChange={(e: any) => handleSort(e.target.value)}>
          <option value="">Select</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
        </select>
      </div>

      {/* Search Bar */}
      <div className="flex align-middle gap-3">
        <label htmlFor="">Search: </label>
        <input
          type="text"
          placeholder="Search products..."
          aria-label="Search products"
          className="p-1.5 rounded-lg px-3"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <div>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setModal(true)}
        >
          View Cart
        </button>
      </div>

      {/* Category Filter */}
      {/* <div className="category-filter">
        <label htmlFor="category">Filter By Category: </label>
        <select id="category">
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="footwear">Footwear</option>
          <option value="fitness">Fitness</option>
          <option value="home">Home Appliances</option>
        </select>
      </div> */}

      {/* Price Range Filter */}
      {/* <div className="price-filter">
        <label htmlFor="priceRange">Price Range: </label>
        <input type="number" id="minPrice" placeholder="Min Price" />
        <input type="number" id="maxPrice" placeholder="Max Price" />
      </div> */}

      {/* Tag Filters */}
      {/* <div className="tags-filter">
        <label>Filter By Tags: </label>
        <div className="tags">
          <label>
            <input type="checkbox" value="Best Seller" /> Best Seller
          </label>
          <label>
            <input type="checkbox" value="New Arrival" /> New Arrival
          </label>
          <label>
            <input type="checkbox" value="Limited Stock" /> Limited Stock
          </label>
        </div>
      </div> */}

      {/* Stock Filter */}
      {/* <div className="stock-filter">
        <label>
          <input type="checkbox" /> In Stock Only
        </label>
      </div> */}

      {/* Reset Filters */}
      {/* <div className="reset">
        <button>Reset Filters</button>
      </div> */}
    </div>
  );
}

export default CartTop;
