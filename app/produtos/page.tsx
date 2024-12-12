'use client';

import React from 'react';
import useSWR from 'swr';
import { Product } from '../models/interfaces';
import Card from '../components/Card';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Page() {
    const { data, error, isLoading } = useSWR<Product[]>('https://deisishop.pythonanywhere.com/api/products', fetcher);

    if (error) return <div>Erro ao carregar os produtos.</div>;
    if (isLoading) return <div>A carregar os produtos...</div>;
    if (!data) return <div>Sem dados disponíveis.</div>;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Produtos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
