import React from 'react';
import Image from 'next/image';
import { Product } from '../models/interfaces';

type CardProps = {
    product: Product;
};

const Card: React.FC<CardProps> = ({ product }) => {
    return (
        <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition">
            <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                className="rounded-md mx-auto"
            />
            <h2 className="text-lg font-bold mt-4 text-gray-800">{product.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{product.description}</p>
            <p className="text-lg font-semibold text-blue-600 mt-2">€{product.price.toFixed(2)}</p>
            <div className="flex items-center mt-2">
                <span className="text-yellow-500 mr-1">⭐ {product.rating.rate}</span>
                <span className="text-gray-500 text-sm">({product.rating.count} avaliações)</span>
            </div>
        </div>
    );
};

export default Card;
