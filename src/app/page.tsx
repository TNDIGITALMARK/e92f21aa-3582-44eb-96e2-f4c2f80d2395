'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Clock, Shield, Smartphone } from 'lucide-react';

export const dynamic = 'force-dynamic'

export default function HomePage() {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Request Rides App',
      description: 'Book rides instantly with our mobile-first platform'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Intelligent Matching',
      description: 'Advanced algorithms match you with nearby drivers'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safety First',
      description: 'Comprehensive safety features and driver screening'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="relative z-20 p-4 bg-slate-800/50 backdrop-blur-sm border-b border-slate-700">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold text-blue-400">RYDE</h1>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-slate-300 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">Drivers</a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">Company</a>
          </nav>
          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-semibold transition-colors">
            Sign Up
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Your Journey,
            <br />
            <span className="text-blue-400">Reimagined</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Experience the future of transportation with seamless rides,
            intelligent matching, and safety at every turn.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/rider"
              className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Download the App
            </Link>
            <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all">
              Learn More
            </button>
          </div>

          {/* Network Animation */}
          <div className="relative w-full h-64 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent rounded-xl">
              {/* Network nodes */}
              <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-300 rounded-full animate-pulse delay-300"></div>
              <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-blue-500 rounded-full animate-pulse delay-700"></div>
              <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-blue-300 rounded-full animate-pulse delay-500"></div>
              <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-blue-400 rounded-full animate-pulse delay-1000 transform -translate-x-1/2 -translate-y-1/2"></div>

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.2"/>
                  </linearGradient>
                </defs>
                <path
                  d="M 64 64 L 200 85 L 85 170 L 200 192 L 128 128"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-white mb-4">
            Seamless Mobility
          </h3>
          <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Experience transportation reimagined with cutting-edge technology
            and user-centric design.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-400 transition-all">
                <div className="text-blue-400 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h4>
                <p className="text-slate-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="text-blue-400 mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Real-Time Tracking</h4>
              <p className="text-slate-300 text-sm">Track your ride in real-time with precise GPS updates</p>
            </div>

            <div className="bg-blue-600 rounded-xl p-6 text-center">
              <h4 className="text-lg font-semibold text-white mb-2">Multiple Payment Options</h4>
              <p className="text-blue-100 text-sm">Choose from various payment methods for your convenience</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="text-blue-400 mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Safety First</h4>
              <p className="text-slate-300 text-sm">Comprehensive background checks and safety features</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-4">
            Ready to Ride?
          </h3>
          <p className="text-blue-100 text-xl mb-8">
            Join millions of users who trust RYDE for their daily transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/rider"
              className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-block"
            >
              Start Riding
            </Link>
            <Link
              href="/tracking"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-block"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-2xl font-bold text-blue-400 mb-4">RYDE</h4>
              <p className="text-slate-400 text-sm">
                Revolutionizing transportation with technology and trust.
              </p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-3">Product</h5>
              <ul className="text-slate-400 text-sm space-y-2">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Download</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-3">Company</h5>
              <ul className="text-slate-400 text-sm space-y-2">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-3">Contact</h5>
              <ul className="text-slate-400 text-sm space-y-2">
                <li><a href="#" className="hover:text-white">Support</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Safety</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2024 RYDE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}