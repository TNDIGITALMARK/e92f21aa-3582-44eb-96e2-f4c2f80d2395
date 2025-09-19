'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Phone, MessageCircle, Navigation, Clock, MapPin, Star, ChevronDown, ChevronUp } from 'lucide-react';

export default function TrackingPage() {
  const [rideStatus, setRideStatus] = useState('driver_en_route'); // driver_en_route, arrived, in_progress, completed
  const [eta, setEta] = useState(5);
  const [showDetails, setShowDetails] = useState(false);

  const driver = {
    name: 'Michael K.',
    rating: 4.92,
    photo: '👨‍🦱',
    vehicle: {
      make: '2019 Toyota Camry',
      color: 'Silver',
      plate: 'ABC-1234'
    },
    phone: '+1 (555) 123-4567'
  };

  const tripDetails = {
    pickup: '123 Main Street',
    destination: '456 Park Avenue',
    distance: '2.3 mi',
    estimatedTime: '12 min',
    fare: '$18.50'
  };

  const statusSteps = [
    { id: 'confirmed', label: 'Ride Confirmed', completed: true },
    { id: 'driver_en_route', label: 'Driver En Route', completed: rideStatus !== 'driver_en_route' },
    { id: 'arrived', label: 'Driver Arrived', completed: ['in_progress', 'completed'].includes(rideStatus) },
    { id: 'in_progress', label: 'Trip in Progress', completed: rideStatus === 'completed' },
    { id: 'completed', label: 'Trip Completed', completed: rideStatus === 'completed' }
  ];

  useEffect(() => {
    // Simulate status progression
    const timer = setTimeout(() => {
      if (rideStatus === 'driver_en_route' && eta > 0) {
        setEta(eta - 1);
        if (eta === 1) {
          setRideStatus('arrived');
        }
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [rideStatus, eta]);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="relative z-20 p-4 bg-slate-800/50 backdrop-blur-sm">
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full bg-slate-700 hover:bg-slate-600">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-lg font-semibold">Your Ride</h1>
            <p className="text-slate-400 text-sm">UberX • {tripDetails.fare}</p>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="px-4 py-6 bg-slate-800/30">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-white">
              {rideStatus === 'driver_en_route' && `Arriving in ${eta} min`}
              {rideStatus === 'arrived' && 'Your driver is here'}
              {rideStatus === 'in_progress' && 'On the way'}
              {rideStatus === 'completed' && 'Trip completed'}
            </h2>
            <p className="text-slate-400">
              {rideStatus === 'driver_en_route' && 'Driver is on the way to pick you up'}
              {rideStatus === 'arrived' && 'Look for your driver outside'}
              {rideStatus === 'in_progress' && 'Enjoy your ride'}
              {rideStatus === 'completed' && 'Thank you for riding with us'}
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-400">{eta > 0 ? `${eta}m` : '0m'}</div>
            <div className="text-slate-400 text-sm">ETA</div>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between items-center">
          {statusSteps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center">
              <div className={`w-3 h-3 rounded-full border-2 ${
                step.completed || step.id === rideStatus
                  ? 'bg-blue-500 border-blue-500'
                  : 'border-slate-500'
              }`} />
              {index < statusSteps.length - 1 && (
                <div className={`h-0.5 w-12 mt-1 ${
                  step.completed ? 'bg-blue-500' : 'bg-slate-600'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Map Area */}
      <div className="relative h-64 bg-slate-800 mx-4 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
          {/* Simulated route line */}
          <svg className="absolute inset-0 w-full h-full">
            <path
              d="M 50 180 Q 150 100 250 80"
              stroke="#3B82F6"
              strokeWidth="3"
              fill="none"
              strokeDasharray="5,5"
              className="animate-pulse"
            />
          </svg>

          {/* Driver location */}
          <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
              <span className="text-xs">🚗</span>
            </div>
          </div>

          {/* User location */}
          <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
            <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
          </div>
        </div>

        <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg">
          <Navigation className="w-4 h-4 text-slate-900" />
        </button>
      </div>

      {/* Driver Info Card */}
      <div className="mx-4 mt-4 bg-slate-800 rounded-lg border border-slate-700">
        <div className="p-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center text-2xl">
              {driver.photo}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white">{driver.name}</h3>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-slate-300">{driver.rating}</span>
              </div>
              <p className="text-slate-400 text-sm">
                {driver.vehicle.make} • {driver.vehicle.color} • {driver.vehicle.plate}
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="p-3 bg-slate-700 rounded-full hover:bg-slate-600">
                <Phone className="w-5 h-5 text-white" />
              </button>
              <button className="p-3 bg-slate-700 rounded-full hover:bg-slate-600">
                <MessageCircle className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Expandable Trip Details */}
        <div className="border-t border-slate-700">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full p-4 flex items-center justify-between hover:bg-slate-700/30"
          >
            <span className="text-slate-300">Trip Details</span>
            {showDetails ? (
              <ChevronUp className="w-4 h-4 text-slate-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-slate-400" />
            )}
          </button>

          {showDetails && (
            <div className="px-4 pb-4 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Pickup</span>
                <span className="text-white">{tripDetails.pickup}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Destination</span>
                <span className="text-white">{tripDetails.destination}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Distance</span>
                <span className="text-white">{tripDetails.distance}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Estimated Time</span>
                <span className="text-white">{tripDetails.estimatedTime}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Fare</span>
                <span className="text-white font-semibold">{tripDetails.fare}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action Button */}
      <div className="p-4 mt-6">
        {rideStatus === 'arrived' && (
          <button
            onClick={() => setRideStatus('in_progress')}
            className="w-full py-4 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-white"
          >
            Start Trip
          </button>
        )}
        {rideStatus === 'in_progress' && (
          <button className="w-full py-4 bg-slate-700 rounded-lg font-semibold text-white cursor-default">
            Trip in Progress...
          </button>
        )}
        {rideStatus === 'driver_en_route' && (
          <button className="w-full py-4 bg-red-600 hover:bg-red-700 rounded-lg font-semibold text-white">
            Cancel Ride
          </button>
        )}
      </div>
    </div>
  );
}