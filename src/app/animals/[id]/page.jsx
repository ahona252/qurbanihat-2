import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { promises as fs } from 'fs';
import path from 'path';

export default async function AnimalDetails({ params }) {
  // Await the parameters from the dynamic URL route
  const { id } = await params;

  // Read data securely directly from the local project file system
  const filePath = path.join(process.cwd(), 'public', 'data.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(fileContents);

  // Find the matching item based on the ID parameter
  const animal = data.find((item) => item.id === parseInt(id));

  // Catch-all fall through if id parameter is invalid or not found
  if (!animal) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 p-4">
        <div className="text-center bg-white p-8 rounded-2xl border border-gray-100 shadow-sm max-w-sm">
          <p className="text-lg font-bold text-red-600">Animal Not Found</p>
          <p className="text-sm text-gray-500 mt-1">The animal you are looking for might have been sold or removed.</p>
          <Link href="/animals" className="mt-5 inline-block bg-blue-950 text-white px-5 py-2 rounded-xl text-xs font-semibold hover:bg-blue-900 transition-colors">
            Back to Marketplace
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-4 md:p-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: Image Gallery View */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="h-72 sm:h-[450px] relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm group">
            <Image
              src={animal.image}
              alt={animal.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
            <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">
              {animal.category}
            </span>
          </div>
          
          
        </div>

        {/* RIGHT COLUMN: Professional Information Dashboard */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            {/* Title Block */}
            <div className="border-b border-gray-100 pb-5">
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-md">
                {animal.breed}
              </span>
              <h1 className="text-2xl md:text-3xl font-black text-gray-900 mt-3 tracking-tight">
                {animal.name}
              </h1>
              <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                📍 Location: <span className="font-semibold text-gray-800">{animal.location}</span>
              </p>
            </div>

            {/* Spec Metrics Cards Grid */}
            <div className="grid grid-cols-2 gap-4 my-6">
              <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-100/50">
                <span className="block text-[10px] uppercase font-bold tracking-wider text-gray-400">Live Weight</span>
                <span className="text-lg font-black text-gray-800 mt-0.5 block">{animal.weight} kg</span>
              </div>
              <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-100/50">
                <span className="block text-[10px] uppercase font-bold tracking-wider text-gray-400">Animal Age</span>
                <span className="text-lg font-black text-gray-800 mt-0.5 block">{animal.age} Years</span>
              </div>
            </div>

            {/* Description Paragraph */}
            <div className="my-6">
              <h4 className="text-xs uppercase font-bold tracking-wider text-gray-400 mb-2">Seller Overview</h4>
              <p className="text-sm text-gray-600 leading-relaxed bg-gray-50/50 p-4 rounded-2xl border border-gray-50">
                {animal.description}
              </p>
            </div>
          </div>

          {/* Checkout / Footer Deal Container */}
          <div className="border-t border-gray-100 pt-6 mt-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="block text-[10px] uppercase text-gray-400 font-bold tracking-wider">Total Asking Price</span>
                <span className="text-3xl font-black text-blue-900 tracking-tight">
                  ৳{animal.price.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="text-right text-xs text-gray-400 font-medium">
                Fixed Price <br />
                <span className="text-emerald-600 font-bold">● Available</span>
              </div>
            </div>

            {/* Main CTA Row */}
            <div className="grid grid-cols-4 gap-3">
              <Link href="/animals" className="col-span-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-center py-3.5 rounded-xl text-xs transition-colors flex items-center justify-center">
                Back
              </Link>
              <button className="col-span-3 bg-blue-950 hover:bg-blue-900 text-white font-bold py-3.5 rounded-xl text-xs tracking-wide transition-colors shadow-xs">
                Contact Seller & Purchase
              </button>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}