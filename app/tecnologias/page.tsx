'use client';

import React from 'react';
import tecnologias from '@/app/data/tecnologias.json';
import Card from '@/app/components/Card';

export default function TecnologiasPage() {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Tecnologias Aprendidas</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {tecnologias.map((tech, index) => (
                    <Card key={index} product={tech} />
                ))}
            </div>
        </div>
    );
}
