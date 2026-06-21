"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Input, TextArea, Button, Card } from "@heroui/react";
import { FaCircleCheck, FaLock, FaArrowLeft, FaLocationDot, FaScaleBalanced, FaHourglassHalf, FaPaw, FaCalendarCheck } from "react-icons/fa6";

export default function AnimalsPage() {
  const [animals, setAnimals] = useState([]);
  
  // --- Navigation & Booking States ---
  const [activeAnimal, setActiveAnimal] = useState(null); // null = show grid list, animal object = show detail page
  const [showBookingSection, setShowBookingSection] = useState(false); // Controls whether the form panel is expanded
  const [isLoggedIn, setIsLoggedIn] = useState(false);     // Simulated login guard
  const [showToast, setShowToast] = useState(false);       // Toast trigger
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setAnimals(data))
      .catch((err) => console.error("Error loading json:", err));
  }, []);

  // --- Handlers ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    
    setShowToast(true);
    
    setFormData({ name: "", email: "", phone: "", address: "" });
    setShowBookingSection(false);
    setActiveAnimal(null);
    
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleBackToMarketplace = () => {
    setActiveAnimal(null);
    setShowBookingSection(false); 
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 p-4 sm:p-6 md:p-12 relative">
      
      {showToast && (
        <div className="fixed top-5 left-4 right-4 sm:left-auto sm:right-5 z-50 flex items-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-xl shadow-xl font-medium text-sm transition-all animate-bounce max-w-md mx-auto sm:mx-0">
          <FaCircleCheck className="text-lg shrink-0" />
          <span>Booking processed successfully! (Data cleared)</span>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        
        {activeAnimal ? (
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Back Button */}
            <button 
              onClick={handleBackToMarketplace}
              className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-blue-950 transition-colors uppercase tracking-wider py-1"
            >
              <FaArrowLeft /> Back to Marketplace
            </button>

            {/* Profile Detail Layout */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-100 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Side: Big Image Display */}
              <div className="relative w-full aspect-square bg-slate-100 rounded-2xl overflow-hidden">
                <Image
                  src={activeAnimal.image}
                  alt={activeAnimal.name}
                  fill
                  className="object-cover"
                  priority
                />
                <span className="absolute top-3 left-3 bg-blue-950 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                  {activeAnimal.category}
                </span>
              </div>

              {/* Right Side: Data Info Fields */}
              <div className="flex flex-col justify-between py-1">
                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wide text-blue-600">{activeAnimal.breed}</span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950 mt-0.5">{activeAnimal.name}</h2>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{activeAnimal.description}</p>

                  <div className="grid grid-cols-2 gap-2 text-[11px] sm:text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <FaScaleBalanced className="text-slate-400 shrink-0" />
                      <span className="truncate">Weight: <strong className="text-slate-800">{activeAnimal.weight} kg</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5 min-w-0">
                      <FaHourglassHalf className="text-slate-400 shrink-0" />
                      <span className="truncate">Age: <strong className="text-slate-800">{activeAnimal.age} Yrs</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5 min-w-0">
                      <FaPaw className="text-slate-400 shrink-0" />
                      <span className="truncate">Type: <strong className="text-slate-800">{activeAnimal.category}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5 min-w-0">
                      <FaLocationDot className="text-red-500 shrink-0" />
                      <span className="truncate font-semibold text-slate-800">{activeAnimal.location}</span>
                    </div>
                  </div>
                </div>

                {/* Price and Book Now Button */}
                <div className="pt-4 border-t border-slate-100 mt-4 flex flex-wrap sm:flex-nowrap items-center justify-between gap-4">
                  <div>
                    <span className="block text-[10px] uppercase text-slate-400 font-bold">Total Valuation Price</span>
                    <span className="text-xl sm:text-2xl font-black text-blue-950">৳{activeAnimal.price?.toLocaleString('en-IN')}</span>
                  </div>

                  {!showBookingSection && (
                    <Button 
                      onClick={() => setShowBookingSection(true)}
                      className="bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow-sm transition-transform active:scale-95 w-full sm:w-auto"
                    >
                      <FaCalendarCheck size={14} className="mr-1" /> Book Now
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {showBookingSection && (
              <Card className="bg-white border rounded-2xl p-4 sm:p-6 shadow-xs flex flex-col gap-4 animate-fade-in">
                <div>
                  <h3 className="text-base font-bold text-blue-950">Secure Appointment Booking</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Fill out your profile criteria below to coordinate processing.</p>
                </div>

                {!isLoggedIn ? (
                  /* Login Required  */
                  <div className="flex flex-col items-center justify-center p-6 border border-dashed border-slate-200 rounded-xl bg-slate-50 text-center gap-3">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-full">
                      <FaLock size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-700">Authentication Shield Engaged</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">You must be authorized to submit details for {activeAnimal.name}.</p>
                    </div>
                    <Button 
                      size="sm" 
                      color="primary" 
                      className="font-semibold text-xs rounded-xl px-5"
                      onClick={() => setIsLoggedIn(true)}
                    >
                      Simulate Log In
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-700">Full Name</label>
                        <Input
                          required
                          type="text"
                          placeholder="Enter your full name"
                          name="name"
                          size="md"
                          variant="bordered"
                          className="bg-white text-slate-900 rounded-xl"
                          classNames={{
                            input: "text-slate-900 placeholder:text-slate-400 bg-white",
                            inputWrapper: "border-slate-200 hover:border-slate-400 focus-within:!border-blue-950 bg-white shadow-xs"
                          }}
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-700">Email Address </label>
                        <Input
                          required
                          type="email"
                          placeholder="Enter your email address"
                          name="email"
                          size="md"
                          variant="bordered"
                          className="bg-white text-slate-900 rounded-xl"
                          classNames={{
                            input: "text-slate-900 placeholder:text-slate-400 bg-white",
                            inputWrapper: "border-slate-200 hover:border-slate-400 focus-within:!border-blue-950 bg-white shadow-xs"
                          }}
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700">Phone Number </label>
                      <Input
                        required
                        type="tel"
                        placeholder="Enter your phone number"
                        name="phone"
                        size="md"
                        variant="bordered"
                        className="bg-white text-slate-900 rounded-xl"
                        classNames={{
                          input: "text-slate-900 placeholder:text-slate-400 bg-white",
                          inputWrapper: "border-slate-200 hover:border-slate-400 focus-within:!border-blue-950 bg-white shadow-xs"
                        }}
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700"> Address </label>
                      <TextArea
                        required
                        placeholder="Provide your complete shipping address"
                        name="address"
                        size="md"
                        variant="bordered"
                        rows={3}
                        className="bg-white text-slate-900 rounded-xl"
                        classNames={{
                          input: "text-slate-900 placeholder:text-slate-400 bg-white",
                          inputWrapper: "border-slate-200 hover:border-slate-400 focus-within:!border-blue-950 bg-white shadow-xs"
                        }}
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="bg-blue-950 hover:bg-blue-900 text-white font-bold text-sm w-full py-4 mt-2 rounded-xl transition-colors shadow-md"
                    >
                      Confirm Booking 
                    </Button>
                  </form>
                )}
              </Card>
            )}
          </div>
        ) : (
          
          <>
            <header className="mb-10 text-center ">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-blue-950">
                Online Marketplace
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                All animals are showing here. Click details to look over specifics.
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {animals.map((animal) => (
                <div key={animal.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 flex flex-col justify-between shadow-xs">
                  
                  {/* Image Container */}
                  <div className="h-48 relative bg-slate-100">
                    <Image
                      src={animal.image}
                      alt={animal.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      {animal.category}
                    </span>
                  </div>

                  <div className="p-5 flex-1">
                    <div className='flex justify-between items-center gap-2'>       
                      <span className="text-xs font-semibold text-black truncate">{animal.breed}</span>
                      <span className='text-black text-xs shrink-0'>📍 {animal.location}</span>
                    </div>
                    <h3 className="text-lg font-bold text-blue-900 mt-0.5">{animal.name}</h3>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2">{animal.description}</p>
                    
                    <div className="flex gap-4 mt-4 pt-3 border-t border-slate-100 text-xs text-slate-600">
                      <div>Weight: <span className="font-bold text-slate-800">{animal.weight} kg</span></div>
                      <div>Age: <span className="font-bold text-slate-800">{animal.age} Years</span></div>
                    </div>
                  </div>

                  {/* Pricing & Button Row */}
                  <div className="p-5 pt-0 flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <span className="block text-[10px] uppercase text-slate-400 font-bold">Price</span>
                      <span className="text-lg sm:text-xl font-extrabold text-blue-900 block truncate">৳{animal.price?.toLocaleString('en-IN')}</span>
                    </div>
                    
                    <button 
                      onClick={() => setActiveAnimal(animal)}
                      className="bg-blue-950 hover:bg-blue-600 text-white px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold transition-colors shadow-xs shrink-0"
                    >
                      View Details
                    </button>
                  </div>

                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}