import { useState } from 'react';
import { Sparkles, Send, MapPin, Hotel, Heart, FileText, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface HomeDashboardProps {
  onNavigate?: (view: string) => void;
}

export function HomeDashboard({ onNavigate }: HomeDashboardProps) {
  const [inputValue, setInputValue] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePlan = () => {
    if (inputValue.trim()) {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        onNavigate?.('info');
      }, 1500);
    }
  };

  const quickActions = [
    { icon: MapPin, label: 'Plan a pet-friendly trip', action: () => onNavigate?.('info') },
    { icon: Hotel, label: 'Find pet-friendly hotels', action: () => {} },
    { icon: Heart, label: 'Find nearby pet hospitals', action: () => {} },
    { icon: FileText, label: 'Resume a previous trip', action: () => onNavigate?.('planning') },
  ];

  const readinessFields = [
    { label: 'Destination', value: '', status: 'missing' },
    { label: 'Travel dates', value: '', status: 'missing' },
    { label: 'Trip length', value: '', status: 'missing' },
    { label: 'Budget', value: '', status: 'missing' },
    { label: 'Transport', value: '', status: 'missing' },
    { label: 'Pet profile', value: 'Biscuit, Golden Retriever', status: 'ready' },
    { label: 'Health notes', value: '', status: 'missing' },
    { label: 'Emergency contact', value: '', status: 'missing' },
  ];

  const readyCount = readinessFields.filter(f => f.status === 'ready').length;
  const totalCount = readinessFields.length;

  return (
    <div className="h-screen flex flex-col bg-[var(--cream-white)]">
      {/* Header */}
      <div className="border-b border-[var(--border)] bg-white">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--sage-green)] to-[var(--warm-orange)] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-base font-semibold text-[var(--deep-blue)]">
                Pet-Friendly Travel Planner
              </h1>
              <p className="text-xs text-[var(--muted-foreground)]">
                Plan smarter trips with your pet
              </p>
            </div>
          </div>

          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--warm-orange)] to-[var(--sage-green)] flex items-center justify-center text-white text-xs font-medium">
            AC
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full max-w-7xl mx-auto px-8 py-8 flex gap-8">
          {/* Left: Main Planning Area */}
          <div className="flex-1 flex flex-col">
            {/* Hero Input */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[var(--deep-blue)] mb-2">
                Where should we take your pet next?
              </h2>
              <div className="relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handlePlan()}
                  placeholder="Take my golden retriever from Shanghai to Hangzhou for 3 days, budget around ¥5,000..."
                  disabled={isProcessing}
                  className="w-full pl-5 pr-32 py-4 rounded-xl border border-[var(--border)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--sage-green)]/30 focus:border-[var(--sage-green)] transition-all text-base shadow-sm"
                />
                <button
                  onClick={handlePlan}
                  disabled={isProcessing || !inputValue.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[var(--sage-green)] to-[var(--warm-orange)] text-white text-sm font-medium hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" strokeWidth={2} />
                      <span>Planning...</span>
                    </>
                  ) : (
                    <>
                      <span>Start Planning</span>
                      <Send className="w-4 h-4" strokeWidth={2} />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-[var(--deep-blue)] mb-4">
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {quickActions.map((action, idx) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={idx}
                      onClick={action.action}
                      className="flex items-center gap-4 p-5 rounded-xl bg-white border border-[var(--border)] hover:border-[var(--sage-green)] hover:shadow-sm transition-all group text-left"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                      </div>
                      <span className="text-sm font-medium text-[var(--deep-blue)] group-hover:text-[var(--sage-green)] transition-colors">
                        {action.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* AI Hint */}
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <h4 className="text-sm font-semibold text-blue-900 mb-1">
                      AI Assistant
                    </h4>
                    <p className="text-sm text-blue-700 leading-relaxed">
                      The assistant will ask follow-up questions if key details are missing. You can also skip ahead and fill in the trip details manually.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Trip Readiness Panel */}
          <div className="w-96 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-[var(--border)] shadow-sm overflow-hidden sticky top-8">
              {/* Header */}
              <div className="p-5 border-b border-[var(--border)] bg-gradient-to-br from-[var(--light-sage)] to-white">
                <h3 className="font-semibold text-[var(--deep-blue)] mb-2">
                  Trip Readiness
                </h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[var(--muted-foreground)]">
                    {readyCount} of {totalCount} complete
                  </span>
                  <span className="font-semibold text-[var(--sage-green)]">
                    {Math.round((readyCount / totalCount) * 100)}%
                  </span>
                </div>
                <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[var(--sage-green)] to-[var(--warm-orange)] transition-all duration-700"
                    style={{ width: `${(readyCount / totalCount) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Fields */}
              <div className="p-5 space-y-3 max-h-96 overflow-y-auto">
                {readinessFields.map((field, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-lg border transition-all ${
                      field.status === 'ready'
                        ? 'bg-green-50 border-green-200'
                        : field.status === 'needs-update'
                        ? 'bg-amber-50 border-amber-200'
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-[var(--deep-blue)]">
                        {field.label}
                      </span>
                      {field.status === 'ready' ? (
                        <CheckCircle2 className="w-4 h-4 text-green-600" strokeWidth={2.5} />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-gray-400" strokeWidth={2} />
                      )}
                    </div>
                    <p
                      className={`text-sm ${
                        field.status === 'ready'
                          ? 'text-green-700 font-medium'
                          : 'text-gray-400 italic'
                      }`}
                    >
                      {field.value || 'Not set'}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div className="p-5 border-t border-[var(--border)]">
                <button
                  onClick={() => onNavigate?.('info')}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[var(--sage-green)] text-[var(--sage-green)] font-medium hover:bg-[var(--light-sage)] transition-all"
                >
                  Complete Trip Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
