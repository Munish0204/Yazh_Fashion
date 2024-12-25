import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SearchResults = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { filteredProducts, searchTerm } = location.state || { filteredProducts: [], searchTerm: "" };

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div>
            <h2>Search Results for "{searchTerm}"</h2>
            <button onClick={handleBackClick}>Go Back</button>
            <div>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id}>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>
                                <strong>Price:</strong> ₹{product.off_price}{" "}
                                <s>₹{product.std_price}</s>
                            </p>
                        </div>
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </div>
    );
};

export default SearchResults;
