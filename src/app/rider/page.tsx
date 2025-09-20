'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Clock, Star, ArrowLeft, Menu, User } from 'lucide-react';

export default function RiderPage() {
  const [selectedRide, setSelectedRide] = useState<string>('');
  const [searchValue, setSearchValue] = useState('');

  const rideOptions = [
    {
      id: 'uberx',
      name: 'UberX',
      price: '$12-15',
      time: '3 min',
      description: 'Affordable, everyday rides',
      icon: '🚗',
      seats: '1-4'
    },
    {
      id: 'comfort',
      name: 'Comfort',
      price: '$18-22',
      time: '5 min',
      description: 'Newer cars with extra legroom',
      icon: '🚙',
      seats: '1-4'
    },
    {
      id: 'xl',
      name: 'UberXL',
      price: '$24-28',
      time: '8 min',
      description: 'Extra seats for up to 6 people',
      icon: '🚐',
      seats: '1-6'
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
    <div className="min-h-screen bg-white text-gray-900 relative">
      {/* Header */}
      <div className="relative z-20 bg-white border-b border-gray-100">
        <div className="flex items-center justify-between px-4 py-3">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-semibold">Set pickup location</h1>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600" />
            </div>
          </button>
        </div>
      </div>

      {/* Enhanced Map Area */}
      <div className="relative flex-1 bg-gray-100 overflow-hidden">
        {/* Realistic Map Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-gray-100">
          {/* Street Grid Pattern */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="streets" patternUnits="userSpaceOnUse" width="80" height="60">
                <rect width="80" height="60" fill="transparent"/>
                <path d="M 0 30 L 80 30" stroke="#e5e7eb" strokeWidth="2"/>
                <path d="M 40 0 L 40 60" stroke="#e5e7eb" strokeWidth="2"/>
              </pattern>
              <pattern id="blocks" patternUnits="userSpaceOnUse" width="160" height="120">
                <rect width="160" height="120" fill="transparent"/>
                <rect x="10" y="10" width="140" height="100" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1"/>
              </pattern>
            </defs>

            <rect width="100%" height="100%" fill="url(#blocks)"/>
            <rect width="100%" height="100%" fill="url(#streets)"/>

            {/* Major Roads */}
            <path d="M 0 200 L 800 200" stroke="#d1d5db" strokeWidth="4"/>
            <path d="M 0 400 L 800 400" stroke="#d1d5db" strokeWidth="4"/>
            <path d="M 200 0 L 200 600" stroke="#d1d5db" strokeWidth="4"/>
            <path d="M 600 0 L 600 600" stroke="#d1d5db" strokeWidth="4"/>

            {/* Parks/Green Areas */}
            <rect x="250" y="80" width="120" height="80" fill="#dcfce7" rx="8"/>
            <rect x="500" y="320" width="80" height="80" fill="#dcfce7" rx="8"/>

            {/* Water Feature */}
            <ellipse cx="150" cy="500" rx="60" ry="30" fill="#dbeafe"/>
          </svg>

          {/* User Location Pin with Pulse Effect */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg z-10 relative"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600/30 rounded-full animate-ping"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-600/10 rounded-full animate-ping animation-delay-300"></div>
            </div>
          </div>

          {/* Enhanced Driver Car Icons */}
          {nearbyDrivers.map((driver) => (
            <div
              key={driver.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
              style={{
                left: `${20 + (driver.id * 15)}%`,
                top: `${30 + (driver.id * 10)}%`,
              }}
            >
              <div
                className="w-8 h-8 bg-black rounded-lg shadow-lg flex items-center justify-center transform transition-transform hover:scale-110"
                style={{
                  transform: `rotate(${driver.rotation}deg)`,
                }}
              >
                <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                <div className="absolute w-1 h-1 bg-white rounded-full top-1 left-1/2 transform -translate-x-1/2"></div>
              </div>
            </div>
          ))}

          {/* Route Suggestion Line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <path
              d="M 400 300 Q 450 250 500 280 Q 550 310 600 290"
              stroke="#3b82f6"
              strokeWidth="3"
              fill="none"
              strokeDasharray="10,5"
              className="animate-pulse opacity-60"
            />
          </svg>
        </div>

        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50">
            <span className="text-lg font-bold text-gray-700">+</span>
          </button>
          <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50">
            <span className="text-lg font-bold text-gray-700">−</span>
          </button>
        </div>

        {/* Current Location Indicator */}
        <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg border border-gray-200">
          <div className="flex items-center space-x-2 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700 font-medium">123 Main Street, New York</span>
          </div>
        </div>

        {/* Center Location Button */}
        <div className="absolute bottom-1/2 right-4 transform translate-y-1/2">
          <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <Navigation className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Bottom Sheet - Search and Ride Options */}
      <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl max-h-[70vh] overflow-hidden">
        {/* Handle */}
        <div className="flex justify-center py-2">
          <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
        </div>

        {/* Search Section */}
        <div className="px-4 pb-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <span className="text-gray-500 text-xs">FROM</span>
                <div className="text-gray-900 font-medium">123 Main Street</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-xl">
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div className="flex-1">
                <span className="text-gray-500 text-xs">TO</span>
                <input
                  type="text"
                  placeholder="Where to?"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="w-full bg-transparent text-gray-900 placeholder-gray-400 outline-none font-medium"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Ride Options */}
        <div className="px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-black">Choose a ride</h2>
            <span className="text-sm text-gray-500">
              <Clock className="w-4 h-4 inline mr-1" />
              {rideOptions.find(r => r.id === selectedRide)?.time || '3-8 min'}
            </span>
          </div>

          <div className="space-y-2 max-h-60 overflow-y-auto">
            {rideOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedRide(option.id)}
                className={`w-full p-4 rounded-xl border transition-all duration-200 ${
                  selectedRide === option.id
                    ? 'border-black bg-gray-50'
                    : 'border-gray-200 bg-white hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{option.icon}</div>
                    <div className="text-left">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-black">{option.name}</h3>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {option.seats}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm">{option.description}</p>
                      <div className="flex items-center space-x-1 mt-1">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span className="text-gray-400 text-xs">{option.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-black">{option.price}</div>
                    <div className="text-xs text-gray-500">Est. total</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Request Ride Button */}
          <div className="py-4 bg-white sticky bottom-0">
            <button
              className={`w-full py-4 rounded-xl font-medium text-white transition-all duration-200 ${
                selectedRide
                  ? 'uber-button shadow-lg'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
              disabled={!selectedRide}
            >
              {selectedRide
                ? `Choose ${rideOptions.find(r => r.id === selectedRide)?.name}`
                : 'Select a ride option'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}