import React from "react";
import { useCartStore } from "../../context/CartStore";

function Cart({ handleCloseCart }) {
  const { cart, increaseQuantity, decreaseQuantity } = useCartStore(
    (state) => ({
      cart: state.cart,
      increaseQuantity: state.increaseQuantity,
      decreaseQuantity: state.decreaseQuantity,
    })
  );

  return (
    <div className="font-[Segoe UI] p-5 relative w-[450px] h-[85vh] max-h-full bg-[#505050] overflow-y-scroll md:w-[350px]">
      <div className="absolute right-5 text-2xl cursor-pointer">
        <i className="fa-solid fa-xmark" onClick={handleCloseCart}></i>
      </div>
      <h2 className="text-center font-[Segoe UI] text-[#679509]">Cart Items</h2>
      {cart.length === 0 ? (
        <p className="absolute top-1/2 left-1/2 font-bold capitalize text-base transform -translate-x-1/2 -translate-y-1/2">
          No items in cart
        </p>
      ) : (
        <div className="w-[350px] mt-8 relative md:w-[300px]">
          {cart.map((item) => (
            <div
              key={item.id}
              className="my-4 pb-4 flex items-center justify-center gap-4 border-b border-[#ddd]"
            >
              <img
                src={item.FirstImgSrc}
                alt={item.title}
                className="w-[100px]"
              />
              <div className="product_info">
                <h3>{item.info}</h3>
                <p className="py-1">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <div className="flex items-center justify-center gap-1 text-[22px]">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="p-0 w-[30px] h-[30px] border-none rounded-full flex items-center justify-center text-[22px] font-bold text-[#679509]"
                >
                  -
                </button>
                {item.quantity}
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="p-0 w-[30px] h-[30px] border-none rounded-full flex items-center justify-center text-[22px] font-bold text-[#679509]"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
