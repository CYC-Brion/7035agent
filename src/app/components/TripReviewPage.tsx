import { useState } from 'react';
import { ArrowLeft, Star, MapPin, Hotel, PawPrint, Shield, DollarSign, Calendar, ChevronRight } from 'lucide-react';

interface TripReviewPageProps {
  onNavigate?: (view: string) => void;
}

export function TripReviewPage({ onNavigate }: TripReviewPageProps) {
  const tripData = {
    name: 'Hangzhou 3-Day Pet-Friendly Trip',
    dates: 'May 15-17, 2026',
    hotel: 'West Lake Pet-Friendly Hotel',
    rating: 4.5,
  };

  const spending = [
    { category: 'Hotel', amount: '¥2,040', percentage: 45 },
    { category: 'Transport', amount: '¥630', percentage: 14 },
    { category: 'Meals', amount: '¥890', percentage: 20 },
    { category: 'Attractions', amount: '¥520', percentage: 12 },
    { category: 'Other', amount: '¥420', percentage: 9 },
  ];

  const totalSpent = spending.reduce((sum, item) => sum + parseInt(item.amount.replace(/[¥,]/g, '')), 0);

  const placesVisited = [
    { name: 'West Lake Scenic Area', type: 'Nature', petFriendly: true },
    { name: 'Prince Bay Park', type: 'Park', petFriendly: true },
    { name: 'Yunqi Bamboo Trail', type: 'Nature', petFriendly: true },
    { name: 'Longjing Tea Village', type: 'Culture', petFriendly: true },
  ];

  const petMilestones = [
    { label: 'Pet-friendly stops completed', value: '4', icon: PawPrint },
    { label: 'Total distance walked', value: '12.5 km', icon: MapPin },
    { label: 'Days without incidents', value: '3', icon: Shield },
    { label: 'New places explored', value: '4', icon: Star },
  ];

  const [userRating, setUserRating] = useState(4.5);

  return (
    <div className="min-h-screen bg-[var(--cream-white)]">
      {/* Header */}
      <div className="border-b border-[var(--border)] bg-white">
        <div className="max-w-5xl mx-auto px-8 py-6">
          <button
            onClick={() => onNavigate?.('home')}
            className="mb-4 flex items-center gap-2 px-3 py-1.5 rounded-lg text-[var(--muted-foreground)] hover:text-[var(--deep-blue)] hover:bg-[var(--soft-grey)] transition-all group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" strokeWidth={2} />
            <span className="text-sm font-medium">Back to Home</span>
          </button>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-[var(--deep-blue)] mb-1">
                Trip Review
              </h1>
              <p className="text-sm text-[var(--muted-foreground)]">
                {tripData.name} • {tripData.dates}
              </p>
            </div>

            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-6 h-6 cursor-pointer transition-colors ${
                    star <= userRating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'
                  }`}
                  strokeWidth={2}
                  onClick={() => setUserRating(star)}
                />
              ))}
              <span className="ml-2 text-lg font-semibold text-[var(--deep-blue)]">{userRating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-8 py-8">
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Spending Summary */}
          <div className="col-span-2">
            <div className="bg-white rounded-xl border border-[var(--border)] overflow-hidden">
              <div className="p-5 border-b border-[var(--border)] bg-gradient-to-r from-blue-50 to-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-blue-600" strokeWidth={2} />
                    <h3 className="font-semibold text-[var(--deep-blue)]">Spending Breakdown</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[var(--muted-foreground)]">Total Spent</p>
                    <p className="text-2xl font-bold text-[var(--sage-green)]">¥{totalSpent.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {spending.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-[var(--deep-blue)]">{item.category}</span>
                      <span className="text-sm font-semibold text-[var(--deep-blue)]">{item.amount}</span>
                    </div>
                    <div className="h-2 bg-[var(--soft-grey)] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[var(--sage-green)] to-[var(--warm-orange)]"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trip Stats */}
          <div className="bg-white rounded-xl border border-[var(--border)] overflow-hidden">
            <div className="p-5 border-b border-[var(--border)] bg-gradient-to-r from-green-50 to-white">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-green-600" strokeWidth={2} />
                <h3 className="font-semibold text-[var(--deep-blue)]">Trip Stats</h3>
              </div>
            </div>

            <div className="p-6 space-y-4 text-sm">
              <div>
                <p className="text-[var(--muted-foreground)] mb-1">Duration</p>
                <p className="font-semibold text-[var(--deep-blue)]">3 days</p>
              </div>
              <div>
                <p className="text-[var(--muted-foreground)] mb-1">Hotel</p>
                <p className="font-semibold text-[var(--deep-blue)]">{tripData.hotel}</p>
              </div>
              <div>
                <p className="text-[var(--muted-foreground)] mb-1">Places Visited</p>
                <p className="font-semibold text-[var(--deep-blue)]">{placesVisited.length} locations</p>
              </div>
              <div>
                <p className="text-[var(--muted-foreground)] mb-1">Pet Companion</p>
                <p className="font-semibold text-[var(--deep-blue)]">Biscuit</p>
              </div>
            </div>
          </div>
        </div>

        {/* Places Visited */}
        <div className="bg-white rounded-xl border border-[var(--border)] overflow-hidden mb-8">
          <div className="p-5 border-b border-[var(--border)] bg-gradient-to-r from-[var(--light-sage)] to-white">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[var(--sage-green)]" strokeWidth={2} />
              <h3 className="font-semibold text-[var(--deep-blue)]">Places Visited</h3>
            </div>
          </div>

          <div className="p-6 grid grid-cols-2 gap-4">
            {placesVisited.map((place, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-[var(--border)] hover:border-[var(--sage-green)] hover:shadow-sm transition-all">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-[var(--deep-blue)]">{place.name}</h4>
                  {place.petFriendly && (
                    <PawPrint className="w-4 h-4 text-green-600" strokeWidth={2} />
                  )}
                </div>
                <span className="text-sm text-[var(--muted-foreground)]">{place.type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pet Milestones */}
        <div className="bg-white rounded-xl border border-[var(--border)] overflow-hidden mb-8">
          <div className="p-5 border-b border-[var(--border)] bg-gradient-to-r from-orange-50 to-white">
            <div className="flex items-center gap-2">
              <PawPrint className="w-5 h-5 text-[var(--warm-orange)]" strokeWidth={2} />
              <h3 className="font-semibold text-[var(--deep-blue)]">Pet Milestones</h3>
            </div>
          </div>

          <div className="p-6 grid grid-cols-4 gap-4">
            {petMilestones.map((milestone, idx) => {
              const Icon = milestone.icon;
              return (
                <div key={idx} className="p-4 rounded-lg bg-[var(--soft-grey)] text-center">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--sage-green)] to-[var(--warm-orange)] flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <p className="text-2xl font-bold text-[var(--sage-green)] mb-1">{milestone.value}</p>
                  <p className="text-xs text-[var(--muted-foreground)]">{milestone.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Safety Summary */}
        <div className="bg-white rounded-xl border border-[var(--border)] overflow-hidden mb-8">
          <div className="p-5 border-b border-[var(--border)] bg-gradient-to-r from-green-50 to-white">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" strokeWidth={2} />
              <h3 className="font-semibold text-[var(--deep-blue)]">Safety Summary</h3>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-green-600" strokeWidth={2} />
                </div>
                <p className="font-semibold text-[var(--deep-blue)] mb-1">No Incidents</p>
                <p className="text-sm text-[var(--muted-foreground)]">Trip completed safely</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
                  <Hotel className="w-8 h-8 text-blue-600" strokeWidth={2} />
                </div>
                <p className="font-semibold text-[var(--deep-blue)] mb-1">Pet-Friendly Hotel</p>
                <p className="text-sm text-[var(--muted-foreground)]">Excellent service</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-3">
                  <PawPrint className="w-8 h-8 text-purple-600" strokeWidth={2} />
                </div>
                <p className="font-semibold text-[var(--deep-blue)] mb-1">Pet Health</p>
                <p className="text-sm text-[var(--muted-foreground)]">Healthy throughout</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action */}
        <button
          onClick={() => onNavigate?.('home')}
          className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-[var(--sage-green)] to-[var(--warm-orange)] text-white font-medium shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
        >
          <span>Plan Another Trip</span>
          <ChevronRight className="w-5 h-5" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
