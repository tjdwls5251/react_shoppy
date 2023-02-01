import React from 'react';
import {BsCartFill} from 'react-icons/bs';
import useCart from '../hooks/useCart';

export default function CartStatus() {
  const {
    cartQuery : {data:products} 
  } = useCart();

  return (
    <div className="relative">
      <BsCartFill className="text-4xl" />
      {products && (
        <p className="text-sm bg-brand rounded-full font-bold absolute text-center w-6 h-6 text-white -top-2 -right-2">
          {products.length}
        </p>
      )}
    </div>
  );
}

