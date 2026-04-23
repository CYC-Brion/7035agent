import { useState } from 'react';
import { ArrowLeft, AlertTriangle, Zap } from 'lucide-react';
import { AlertBanner } from './AlertBanner';
import { AffectedPlan } from './AffectedPlan';
import { AlternativePlan } from './AlternativePlan';
import { EmergencySidebar } from './EmergencySidebar';

interface EmergencyReplanPageProps {
  onNavigate?: (view: string) => void;
}

export function EmergencyReplanPage({ onNavigate }: EmergencyReplanPageProps) {
  const [selectedAlternative, setSelectedAlternative] = useState(0);

  const emergencyType = 'weather'; // 'weather' | 'traffic' | 'closure' | 'pet-health'

  const alerts = [
    {
      type: 'weather',
      severity: 'high',
      title: '暴雨橙色预警',
      message: '杭州西湖景区 14:00-18:00 有强降雨，建议调整行程',
      time: '刚刚',
    },
  ];

  const affectedItems = [
    {
      time: '14:00',
      title: '西湖苏堤漫步',
      reason: '暴雨预警，户外活动不安全',
      impact: 'high',
    },
    {
      time: '16:30',
      title: '湖畔咖啡馆',
      reason: '因暴雨可能提前关闭',
      impact: 'medium',
    },
  ];

  const alternatives = [
    {
      id: 1,
      name: '方案A · 室内备选',
      recommended: true,
      changes: [
        {
          time: '14:00',
          original: '西湖苏堤漫步',
          alternative: '浙江省博物馆',
          type: 'spot',
          reason: '室内场馆，宠物可寄存',
          distance: '2.5km',
          duration: '15分钟',
          petFriendly: false,
          petService: '提供宠物寄存服务',
        },
        {
          time: '16:30',
          original: '湖畔咖啡馆',
          alternative: '酒店休息',
          type: 'rest',
          reason: '返回酒店，宠物更舒适',
          distance: '1.2km',
          duration: '8分钟',
          petFriendly: true,
        },
      ],
      summary: {
        totalTime: '约 23 分钟通勤',
        saved: '节省 1.5 小时',
        petComfort: '高',
      },
    },
    {
      id: 2,
      name: '方案B · 延后执行',
      recommended: false,
      changes: [
        {
          time: '18:30',
          original: '西湖苏堤漫步',
          alternative: '西湖夜游 (雨后)',
          type: 'spot',
          reason: '雨后空气清新，气温适宜',
          distance: '同原计划',
          duration: '同原计划',
          petFriendly: true,
        },
      ],
      summary: {
        totalTime: '延后 4.5 小时',
        saved: '无',
        petComfort: '中',
      },
    },
  ];

  return (
    <div className="h-screen flex flex-col bg-[var(--cream-white)]">
      {/* Alert Banner */}
      <AlertBanner alerts={alerts} />

      {/* Header */}
      <div className="relative overflow-hidden border-b border-[var(--border)] bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50 via-red-50 to-amber-50 opacity-60"></div>

        <div className="relative px-8 py-6">
          <div className="max-w-[1600px] mx-auto">
            <button
              onClick={() => onNavigate?.('planning')}
              className="mb-4 flex items-center gap-2 px-4 py-2 rounded-xl text-[var(--deep-blue)] hover:bg-white/60 transition-all duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" strokeWidth={2} />
              <span className="text-sm font-medium">返回原计划</span>
            </button>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-md">
                    <AlertTriangle className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  {/* Pulse ring */}
                  <div className="absolute inset-0 rounded-xl bg-orange-400 animate-ping opacity-20"></div>
                </div>
                <div>
                  <h1 className="text-2xl font-semibold text-[var(--deep-blue)]">
                    行中应急重规划
                  </h1>
                  <p className="text-sm text-[var(--muted-foreground)] flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-orange-500 animate-pulse" strokeWidth={2.5} />
                    AI 正在为您生成替代方案
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="px-4 py-2 bg-orange-100 rounded-xl border border-orange-300 shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                    <span className="text-sm font-medium text-orange-700">
                      {affectedItems.length} 个节点受影响
                    </span>
                  </div>
                </div>

                <div className="px-4 py-2 bg-red-100 rounded-xl border border-red-300 shadow-sm">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500" strokeWidth={2} />
                    <span className="text-sm font-medium text-red-700">
                      14:00 开始受影响
                    </span>
                  </div>
                </div>

                <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--sage-green)] to-[var(--warm-orange)] text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 active:scale-100 transition-all duration-300 flex items-center gap-2">
                  <Zap className="w-4 h-4" strokeWidth={2.5} />
                  <span>立即执行方案</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full max-w-[1600px] mx-auto px-8 py-6 flex gap-6">
          {/* Left: Affected Plan */}
          <div className="w-80 flex-shrink-0">
            <AffectedPlan items={affectedItems} />
          </div>

          {/* Center: Alternatives */}
          <div className="flex-1 overflow-y-auto">
            <div className="space-y-6">
              {alternatives.map((alt, idx) => (
                <AlternativePlan
                  key={alt.id}
                  plan={alt}
                  isSelected={selectedAlternative === idx}
                  onSelect={() => setSelectedAlternative(idx)}
                />
              ))}
            </div>
          </div>

          {/* Right: Emergency Resources */}
          <div className="w-96 flex-shrink-0">
            <EmergencySidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
