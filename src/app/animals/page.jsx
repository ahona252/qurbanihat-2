"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // <-- ADDED THIS MISSING IMPORT TO FIX THE ERROR

export default function AnimalsPage() {
  const [animals, setAnimals] = useState([]);

  // Fetch data directly from public/data.json when the page loads
  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setAnimals(data))
      .catch((err) => console.error("Error loading json:", err));
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Clean Header */}
        <header className="mb-10 text-center ">
          <h1 className="text-3xl font-bold tracking-tight text-blue-950">
            Online Marketplace
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            All animals are showing here.
          </p>
        </header>

        {/* Card Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {animals.map((animal) => (
            <div key={animal.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 flex flex-col justify-between shadow-xs">
              
              {/* Image Container */}
              <div className="h-48 relative bg-slate-100">
                <Image
                  src={animal.image}
                  alt={animal.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <span className="absolute top-2 left-2 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  {animal.category}
                </span>
              </div>

              {/* Content Segment */}
              <div className="p-5 flex-1">
                <div className='flex gap-32'>       
                  <span className="text-xs font-semibold text-black">{animal.breed}</span>
                  <span className='text-black text-xs'>📍Location : {animal.location}</span>
                </div>
                <h3 className="text-lg font-bold text-blue-900 mt-0.5">{animal.name}</h3>
                <p className="text-xs text-slate-500 mt-2 line-clamp-2">{animal.description}</p>
                
                {/* Metrics Info Row */}
                <div className="flex gap-4 mt-4 pt-3 border-t border-slate-100 text-xs text-slate-600">
                  <div>Weight: <span className="font-bold text-slate-800">{animal.weight} kg</span></div>
                  <div>Age: <span className="font-bold text-slate-800">{animal.age} Years</span></div>
                </div>
              </div>

              {/* Pricing & Button Row */}
              <div className="p-5 pt-0 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] uppercase text-slate-400 font-bold">Price</span>
                  <span className="text-xl font-extrabold text-blue-900">৳{animal.price.toLocaleString('en-IN')}</span>
                </div>
                {/* This will now work perfectly since Link is defined */}
                <Link href={`/animals/${animal.id}`}> 
                  <button className="bg-blue-950 hover:bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors">
                    View Details
                  </button>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}