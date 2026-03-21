import React, { useState } from 'react'

function ProductModal({ product, closeModal, addToCart, cart }) {
    const [message, setMessage] = useState("");

    const handleAddToCart = (product) => {
        if (cart && cart.find(item => item.id === product.id)) {
            setMessage("Item already added to the cart");
            setTimeout(() => setMessage(""), 1500);
            return;
        }
        addToCart(product);
        setMessage("Successfully added to cart");
        setTimeout(() => setMessage(""), 1500);
    };

    return (
        <div className='modal-backdrop'>
            <div className="modal">
                <button className='close-btn' onClick={closeModal}>X</button>
                <img src={product.image} alt={product.title} className='modal-image' />
                <h2>{product.title}</h2>
                <p><strong>Category:</strong>{product.category}</p>
                <p><strong>Price:</strong> {Math.round(product.price * 85)}</p>
                <p className='description'>{product.description}</p>
                <button className='add-btn' onClick={() => handleAddToCart(product)}>
                    Add to Cart
                </button>
                {message && (
                    <div style={{
                        marginTop: 12,
                        background: message === "Successfully added to cart" ? '#c8e6c9' : '#ffe0b2',
                        color: message === "Successfully added to cart" ? '#256029' : '#e65100',
                        borderRadius: 6,
                        padding: '8px 0',
                        fontWeight: 500,
                        textAlign: 'center',
                        transition: 'opacity 0.3s'
                    }}>
                        {message}
                    </div>
                )}
            </div>
        </div >
    )
}

export default ProductModal