'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Clock, Star } from 'lucide-react';

export default function RiderPage() {
  const [selectedRide, setSelectedRide] = useState<string>('');
  const [searchValue, setSearchValue] = useState('');

  const rideOptions = [
    {
      id: 'uberx',
      name: 'UberX',
      price: '$12-15',
      time: '3 min away',
      description: 'Affordable, everyday rides',
      icon: '🚗'
    },
    {
      id: 'comfort',
      name: 'Uber Comfort',
      price: '$18-22',
      time: '5 min away',
      description: 'Newer cars with more space',
      icon: '🚙'
    },
    {
      id: 'xl',
      name: 'Uber XL',
      price: '$24-28',
      time: '8 min away',
      description: 'Extra seats for up to 6',
      icon: '🚐'
    }
  ];

  const nearbyDrivers = [
    { id: 1, lat: 40.7589, lng: -73.9851, rotation: 45 },
    { id: 2, lat: 40.7614, lng: -73.9776, rotation: 120 },
    { id: 3, lat: 40.7505, lng: -73.9934, rotation: 270 },
    { id: 4, lat: 40.7550, lng: -73.9840, rotation: 180 },
    { id: 5, lat: 40.7480, lng: -73.9860, rotation: 90 }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* Header */}
      <div className="relative z-20 p-4 bg-slate-800/50 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-400">RYDE</h1>
          <button className="p-2 rounded-full bg-slate-700 hover:bg-slate-600">
            <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
              <span className="text-slate-900 font-bold text-sm">U</span>
            </div>
          </button>
        </div>
      </div>

      {/* Map Area */}
      <div className="relative h-96 bg-slate-800 overflow-hidden">
        {/* Simulated Map Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="border border-slate-600/30"></div>
              ))}
            </div>
          </div>

          {/* User Location Pin */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
              <div className="absolute -top-2 -left-2 w-10 h-10 bg-blue-500/20 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Driver Car Icons */}
          {nearbyDrivers.map((driver) => (
            <div
              key={driver.id}
              className="absolute w-6 h-6 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${20 + (driver.id * 15)}%`,
                top: `${30 + (driver.id * 10)}%`,
                transform: `rotate(${driver.rotation}deg) translate(-50%, -50%)`
              }}
            >
              <div className="w-6 h-6 bg-white rounded-sm shadow-lg flex items-center justify-center">
                <span className="text-xs">🚗</span>
              </div>
            </div>
          ))}
        </div>

        {/* Current Location Indicator */}
        <div className="absolute bottom-4 left-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-3 border border-slate-700">
          <div className="flex items-center space-x-2 text-sm">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span className="text-slate-300">123 Main Street</span>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative z-10 -mt-8 mx-4">
        <div className="bg-white rounded-lg shadow-xl p-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-slate-600 text-sm">123 Main Street</span>
            </div>
            <div className="flex items-center space-x-3 p-3 border-2 border-dashed border-slate-300 rounded-lg">
              <MapPin className="w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Where to?"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="flex-1 bg-transparent text-slate-900 placeholder-slate-500 outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Ride Options Panel */}
      <div className="flex-1 bg-slate-900 mt-6 mx-4">
        <div className="bg-slate-800 rounded-t-xl border border-slate-700">
          <div className="p-4 border-b border-slate-700">
            <h2 className="text-lg font-semibold text-white">Choose a ride</h2>
            <p className="text-slate-400 text-sm">5-8 drivers nearby</p>
          </div>

          <div className="space-y-3 p-4">
            {rideOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedRide(option.id)}
                className={`w-full p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedRide === option.id
                    ? 'border-blue-400 bg-blue-400/10'
                    : 'border-slate-600 bg-slate-700/50 hover:border-slate-500'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{option.icon}</div>
                    <div className="text-left">
                      <h3 className="font-semibold text-white">{option.name}</h3>
                      <p className="text-slate-400 text-sm">{option.description}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span className="text-slate-400 text-xs">{option.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-white">{option.price}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Request Ride Button */}
          <div className="p-4">
            <button
              className={`w-full py-4 rounded-lg font-semibold text-white transition-all duration-200 ${
                selectedRide
                  ? 'bg-blue-500 hover:bg-blue-600 shadow-lg'
                  : 'bg-slate-600 cursor-not-allowed'
              }`}
              disabled={!selectedRide}
            >
              {selectedRide ? 'Request Ride' : 'Choose a ride option'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}