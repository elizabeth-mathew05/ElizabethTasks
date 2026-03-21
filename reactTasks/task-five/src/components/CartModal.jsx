import React from 'react';
import './CartModal.css';

function CartModal({ cart, onClose, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + Math.round(item.price * 85), 0);

  return (
    <div className='modal-backdrop'>
      <div className='cart-modal'>
        <button className='close-btn' onClick={onClose}>×</button>
        <h2 className='cart-title'>Cart</h2>
        {cart.length === 0 ? (
          <p className='cart-empty'>Your cart is empty.</p>
        ) : (
          <>
            <ul className='cart-list'>
              {cart.map((item) => (
                <li key={item.id} className='cart-item'>
                  <img src={item.image} alt={item.title} className='cart-item-image' />
                  <span className='cart-item-title'>{item.title}</span>
                  <span className='cart-item-price'>{Math.round(item.price * 85)}</span>
                  <button className='cart-remove-btn' onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className='cart-total'>
              <span>Total:</span> <span className='cart-total-amount'>₹{total}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartModal;
