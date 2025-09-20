'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Clock, Shield, Menu } from 'lucide-react';

export const dynamic = 'force-dynamic'

export default function HomePage() {
  const features = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Reliable rides',
      description: 'Get where you need to go with the tap of a button'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Always on time',
      description: 'Arrive at your destination when you need to'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Safety first',
      description: 'We build safety into every part of your experience'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="relative z-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-black">Uber</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-black transition-colors font-medium">Ride</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors font-medium">Drive</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors font-medium">Business</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors font-medium">About</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="uber-button-outline px-4 py-2 text-sm font-medium">
                Log in
              </button>
              <button className="uber-button px-4 py-2 text-sm font-medium">
                Sign up
              </button>
              <button className="md:hidden p-2">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight">
                Go anywhere with Uber
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-lg">
                Request a ride, hop in, and go. Choose from a variety of ride options.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/rider"
                  className="uber-button px-6 py-3 text-base font-medium inline-flex items-center justify-center"
                >
                  Get a ride
                </Link>
                <button className="uber-button-outline px-6 py-3 text-base font-medium">
                  Learn more
                </button>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="text-left">
                    <div className="text-gray-900 mb-2">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-black mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="relative">
                <div className="bg-white rounded-lg shadow-lg p-6 relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Plan your ride</h3>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 flex-1">Pickup location</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-3 h-3 bg-black rounded-full"></div>
                      <span className="text-gray-700 flex-1">Destination</span>
                    </div>
                    <button className="w-full uber-button py-3 text-base font-medium">
                      See prices
                    </button>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-200 rounded-full opacity-20"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gray-200 rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              It's easier in the apps
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Download the Uber app for the fastest, most reliable rides.
              Or become a driver and earn money on your schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="uber-card p-8 text-center">
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">
                Download the Rider app
              </h3>
              <p className="text-gray-600 mb-6">
                Get reliable rides in minutes
              </p>
              <button className="uber-button w-full py-3 font-medium">
                Get the app
              </button>
            </div>

            <div className="uber-card p-8 text-center">
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚗</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">
                Drive with Uber
              </h3>
              <p className="text-gray-600 mb-6">
                Make money driving on your schedule
              </p>
              <button className="uber-button-outline w-full py-3 font-medium">
                Sign up to drive
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold text-black mb-4">Uber</h4>
              <p className="text-gray-600 text-sm">
                Move the way you want
              </p>
            </div>
            <div>
              <h5 className="text-black font-semibold mb-3">Company</h5>
              <ul className="text-gray-600 text-sm space-y-2">
                <li><a href="#" className="hover:text-black">About us</a></li>
                <li><a href="#" className="hover:text-black">Our offerings</a></li>
                <li><a href="#" className="hover:text-black">Newsroom</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-black font-semibold mb-3">Products</h5>
              <ul className="text-gray-600 text-sm space-y-2">
                <li><a href="#" className="hover:text-black">Ride</a></li>
                <li><a href="#" className="hover:text-black">Drive</a></li>
                <li><a href="#" className="hover:text-black">Business</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-black font-semibold mb-3">Global citizenship</h5>
              <ul className="text-gray-600 text-sm space-y-2">
                <li><a href="#" className="hover:text-black">Safety</a></li>
                <li><a href="#" className="hover:text-black">Diversity</a></li>
                <li><a href="#" className="hover:text-black">Sustainability</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-600 text-sm">&copy; 2024 Uber Technologies Inc.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-black text-sm">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-black text-sm">Terms</a>
              <a href="#" className="text-gray-600 hover:text-black text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}