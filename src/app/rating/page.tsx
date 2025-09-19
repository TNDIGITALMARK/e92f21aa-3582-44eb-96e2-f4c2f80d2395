'use client';

import React, { useState } from 'react';
import { ArrowLeft, Star, MapPin, Clock, DollarSign, MessageCircle } from 'lucide-react';

export default function RatingPage() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedTip, setSelectedTip] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string[]>([]);
  const [comment, setComment] = useState('');

  const driver = {
    name: 'Michael K.',
    rating: 4.92,
    photo: '👨‍🦱',
    vehicle: {
      make: '2019 Toyota Camry',
      color: 'Silver',
      plate: 'ABC-1234'
    }
  };

  const tripSummary = {
    pickup: '123 Main Street',
    destination: '456 Park Avenue',
    distance: '2.3 mi',
    duration: '12 min',
    fare: '$18.50',
    date: 'Today, 3:24 PM'
  };

  const tipOptions = [10, 15, 20, 25];

  const feedbackOptions = [
    'Clean car',
    'Great conversation',
    'Safe driving',
    'On time',
    'Friendly',
    'Professional',
    'Smooth ride',
    'Good music'
  ];

  const handleStarClick = (starRating: number) => {
    setRating(starRating);
  };

  const handleFeedbackToggle = (option: string) => {
    setFeedback(prev =>
      prev.includes(option)
        ? prev.filter(f => f !== option)
        : [...prev, option]
    );
  };

  const handleSubmitRating = () => {
    // Handle rating submission
    console.log({
      rating,
      tip: selectedTip,
      feedback,
      comment
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="relative z-20 p-4 bg-slate-800/50 backdrop-blur-sm">
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full bg-slate-700 hover:bg-slate-600">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-lg font-semibold">Rate Your Trip</h1>
            <p className="text-slate-400 text-sm">{tripSummary.date}</p>
          </div>
        </div>
      </div>

      {/* Trip Summary Map */}
      <div className="relative h-32 bg-slate-800 mx-4 mt-4 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
          {/* Route visualization */}
          <svg className="absolute inset-0 w-full h-full">
            <path
              d="M 30 80 Q 120 40 220 60"
              stroke="#3B82F6"
              strokeWidth="2"
              fill="none"
            />
          </svg>

          {/* Start point */}
          <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
            <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>

          {/* End point */}
          <div className="absolute top-1/2 right-12 transform -translate-y-1/2">
            <div className="w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
          </div>
        </div>

        {/* Trip info overlay */}
        <div className="absolute bottom-2 left-2 right-2 flex justify-between text-xs">
          <div className="bg-slate-800/90 px-2 py-1 rounded text-slate-300">
            {tripSummary.distance}
          </div>
          <div className="bg-slate-800/90 px-2 py-1 rounded text-slate-300">
            {tripSummary.duration}
          </div>
          <div className="bg-slate-800/90 px-2 py-1 rounded text-white font-semibold">
            {tripSummary.fare}
          </div>
        </div>
      </div>

      {/* Driver Profile */}
      <div className="mx-4 mt-6 bg-slate-800 rounded-lg border border-slate-700 p-6">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-slate-700 rounded-full flex items-center justify-center text-3xl">
            {driver.photo}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white">{driver.name}</h3>
            <div className="flex items-center space-x-2 mt-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-slate-300">{driver.rating}</span>
              <span className="text-slate-400">• Driver rating</span>
            </div>
            <p className="text-slate-400 text-sm mt-1">
              {driver.vehicle.make} • {driver.vehicle.color}
            </p>
          </div>
        </div>
      </div>

      {/* Rating Section */}
      <div className="mx-4 mt-6 bg-slate-800 rounded-lg border border-slate-700 p-6">
        <h3 className="text-lg font-semibold text-white mb-4 text-center">
          How was your trip with {driver.name.split(' ')[0]}?
        </h3>

        {/* Star Rating */}
        <div className="flex justify-center space-x-2 mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleStarClick(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="p-2 transition-transform hover:scale-110"
            >
              <Star
                className={`w-10 h-10 transition-colors ${
                  star <= (hoverRating || rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-slate-600'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Feedback Categories */}
        {rating > 0 && (
          <>
            <h4 className="text-md font-semibold text-white mb-3">
              What went well? (Optional)
            </h4>
            <div className="grid grid-cols-2 gap-2 mb-6">
              {feedbackOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => handleFeedbackToggle(option)}
                  className={`p-3 rounded-lg border text-sm transition-all ${
                    feedback.includes(option)
                      ? 'border-blue-400 bg-blue-400/10 text-white'
                      : 'border-slate-600 bg-slate-700/50 text-slate-300 hover:border-slate-500'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Comment Box */}
            <div className="mb-6">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Leave a comment for your driver (optional)"
                className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 resize-none focus:border-blue-400 focus:outline-none"
                rows={3}
              />
            </div>
          </>
        )}
      </div>

      {/* Tip Section */}
      {rating >= 4 && (
        <div className="mx-4 mt-6 bg-slate-800 rounded-lg border border-slate-700 p-6">
          <h3 className="text-lg font-semibold text-white mb-4 text-center">
            Add a tip for great service
          </h3>
          <div className="grid grid-cols-4 gap-3 mb-4">
            {tipOptions.map((tip) => (
              <button
                key={tip}
                onClick={() => setSelectedTip(selectedTip === tip ? null : tip)}
                className={`p-4 rounded-lg border text-center transition-all ${
                  selectedTip === tip
                    ? 'border-green-400 bg-green-400/10'
                    : 'border-slate-600 bg-slate-700/50 hover:border-slate-500'
                }`}
              >
                <div className="text-lg font-bold text-white">${tip}%</div>
                <div className="text-xs text-slate-400">
                  ${((parseFloat(tripSummary.fare.slice(1)) * tip) / 100).toFixed(2)}
                </div>
              </button>
            ))}
          </div>
          <p className="text-slate-400 text-sm text-center">
            100% of your tip goes to your driver
          </p>
        </div>
      )}

      {/* Submit Button */}
      <div className="p-4 mt-6">
        <button
          onClick={handleSubmitRating}
          disabled={rating === 0}
          className={`w-full py-4 rounded-lg font-semibold text-white transition-all ${
            rating > 0
              ? 'bg-blue-500 hover:bg-blue-600 shadow-lg'
              : 'bg-slate-600 cursor-not-allowed'
          }`}
        >
          Submit Rating
        </button>

        <button className="w-full py-3 mt-3 text-slate-400 hover:text-white transition-colors">
          Skip for now
        </button>
      </div>

      {/* Trip Details Summary */}
      <div className="mx-4 mb-6 bg-slate-800/50 rounded-lg border border-slate-700 p-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-slate-400" />
            <div>
              <div className="text-slate-400">From</div>
              <div className="text-white">{tripSummary.pickup}</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-slate-400" />
            <div>
              <div className="text-slate-400">To</div>
              <div className="text-white">{tripSummary.destination}</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-slate-400" />
            <div>
              <div className="text-slate-400">Duration</div>
              <div className="text-white">{tripSummary.duration}</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <DollarSign className="w-4 h-4 text-slate-400" />
            <div>
              <div className="text-slate-400">Fare</div>
              <div className="text-white">{tripSummary.fare}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}