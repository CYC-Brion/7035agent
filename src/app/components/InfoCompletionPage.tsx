import { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, AlertCircle, ArrowLeft } from 'lucide-react';
import { UserInfoForm } from './UserInfoForm';
import { PetInfoForm } from './PetInfoForm';
import { TripInfoForm } from './TripInfoForm';
import { PlanSummary } from './PlanSummary';

interface InfoCompletionPageProps {
  onNavigate?: (view: string) => void;
}

export function InfoCompletionPage({ onNavigate }: InfoCompletionPageProps) {
  const [formData, setFormData] = useState({
    // User Info
    travelers: '1',
    budget: '',
    pace: '',
    transport: '自驾',

    // Pet Info
    petType: '金毛犬',
    petAge: '3',
    petWeight: '35',
    healthStatus: '',
    heatSensitive: false,
    stressSensitive: false,

    // Trip Info
    destination: '杭州',
    startDate: '',
    duration: '3',
    dailyHours: '',
    hotelArea: '',
  });

  const [errors, setErrors] = useState<string[]>([]);

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field
    setErrors(prev => prev.filter(e => !e.includes(field)));
  };

  const validateForm = () => {
    const newErrors: string[] = [];

    if (!formData.budget) newErrors.push('预算');
    if (!formData.pace) newErrors.push('旅行节奏');
    if (!formData.healthStatus) newErrors.push('宠物健康状态');
    if (!formData.startDate) newErrors.push('出发日期');
    if (!formData.dailyHours) newErrors.push('每日游玩时长');
    if (!formData.hotelArea) newErrors.push('酒店区域');

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleGenerate = () => {
    if (validateForm()) {
      console.log('Generating trip plan with:', formData);
      // Navigate to planning page
      if (onNavigate) {
        onNavigate('planning');
      }
    }
  };

  const completionRate = () => {
    const total = 13;
    const filled = Object.values(formData).filter(v => v !== '' && v !== false).length;
    return Math.round((filled / total) * 100);
  };

  return (
    <div className="min-h-screen bg-[var(--cream-white)]">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--light-sage)] via-white to-[var(--muted-orange)] opacity-40"></div>

        <div className="relative px-8 py-8">
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <button
              onClick={() => onNavigate?.('home')}
              className="mb-4 flex items-center gap-2 px-4 py-2 rounded-xl text-[var(--deep-blue)] hover:bg-white/60 transition-all duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" strokeWidth={2} />
              <span className="text-sm font-medium">返回对话</span>
            </button>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--sage-green)] to-[var(--warm-orange)] flex items-center justify-center shadow-md">
                <Sparkles className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-[var(--deep-blue)]">
                  完善您的旅行信息
                </h1>
                <p className="text-sm text-[var(--muted-foreground)]">
                  AI 会根据这些信息为您生成最优方案
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-[var(--deep-blue)]">
                  信息完整度
                </span>
                <span className="text-sm font-semibold text-[var(--sage-green)]">
                  {completionRate()}%
                </span>
              </div>
              <div className="h-2.5 bg-white rounded-full overflow-hidden border border-[var(--border)] shadow-sm">
                <div
                  className="h-full bg-gradient-to-r from-[var(--sage-green)] to-[var(--warm-orange)] transition-all duration-700 ease-out"
                  style={{ width: `${completionRate()}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex gap-8">
          {/* Left: Forms */}
          <div className="flex-1 space-y-6">
            <UserInfoForm data={formData} onChange={updateField} />
            <PetInfoForm data={formData} onChange={updateField} />
            <TripInfoForm data={formData} onChange={updateField} />
          </div>

          {/* Right: Summary */}
          <div className="w-96">
            <PlanSummary data={formData} errors={errors} />
          </div>
        </div>

        {/* Bottom Action */}
        <div className="mt-8 sticky bottom-0 z-10 animate-[fadeInUp_0.5s_ease-out_0.3s_both]">
          <div className="flex items-center justify-between p-6 bg-white rounded-2xl border border-[var(--border)] shadow-lg backdrop-blur-sm">
            <div className="flex-1">
              {errors.length > 0 ? (
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-5 h-5 text-amber-500" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--deep-blue)] mb-1">
                      还有 {errors.length} 项必填信息未完成
                    </p>
                    <p className="text-xs text-[var(--muted-foreground)]">
                      {errors.join('、')}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-500" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--deep-blue)] mb-1">
                      信息已完整，可以生成行程
                    </p>
                    <p className="text-xs text-[var(--muted-foreground)]">
                      AI 将为您规划最佳路线和宠物友好地点
                    </p>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={handleGenerate}
              className="ml-6 px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--sage-green)] to-[var(--warm-orange)] text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 active:scale-100 transition-all duration-300 flex items-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              disabled={errors.length > 0}
            >
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" strokeWidth={2.5} />
              <span className="text-base">生成智能行程</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
