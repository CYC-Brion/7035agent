import { useState } from 'react';
import { Sparkles, Map, RefreshCw, Crown, Star, DollarSign, ArrowLeft } from 'lucide-react';
import { PlanTabs } from './PlanTabs';
import { DayItineraryCard } from './DayItineraryCard';
import { PlanOverviewSidebar } from './PlanOverviewSidebar';

type PlanType = 'luxury' | 'comfort' | 'budget';

interface PlanningResultPageProps {
  onNavigate?: (view: string) => void;
}

export function PlanningResultPage({ onNavigate }: PlanningResultPageProps) {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('comfort');

  const plans = {
    luxury: {
      name: '高端方案',
      icon: Crown,
      budget: '¥6,800',
      description: '五星酒店 + 私享体验',
      color: 'purple',
    },
    comfort: {
      name: '舒适方案',
      icon: Star,
      budget: '¥3,200',
      description: '四星酒店 + 优质景点',
      color: 'blue',
    },
    budget: {
      name: '经济方案',
      icon: DollarSign,
      budget: '¥1,800',
      description: '经济型酒店 + 精选景点',
      color: 'green',
    },
  };

  const itinerary: Record<PlanType, any[]> = {
    luxury: [
      {
        day: 1,
        date: '4月25日 周五',
        items: [
          {
            time: '09:00',
            type: 'transport',
            title: '从上海出发',
            duration: '2小时',
            method: '专车接送',
            distance: '180km',
            note: '宠物专车服务，配备宠物安全座椅',
          },
          {
            time: '11:30',
            type: 'checkin',
            title: '五星酒店入住',
            location: '杭州西溪悦榕庄',
            rating: 5.0,
            petFriendly: true,
            note: '宠物管家服务 + 定制宠物SPA',
          },
          {
            time: '14:00',
            type: 'activity',
            title: '西溪湿地私人游船',
            location: '西溪湿地',
            duration: '2.5小时',
            petFriendly: true,
            weather: '☀️ 24°C 适宜',
            note: '包船游览，宠物可同行',
          },
          {
            time: '17:00',
            type: 'rest',
            title: '下午茶时光',
            location: '酒店私人庭院',
            duration: '1.5小时',
            petFriendly: true,
          },
          {
            time: '19:00',
            type: 'dinner',
            title: '米其林餐厅',
            location: '湖畔居',
            petFriendly: true,
            note: '户外用餐区可携宠',
          },
        ],
      },
      {
        day: 2,
        date: '4月26日 周六',
        items: [
          {
            time: '09:00',
            type: 'activity',
            title: '灵隐寺私人导览',
            location: '灵隐景区VIP通道',
            duration: '2小时',
            petFriendly: true,
            weather: '🌤 22°C 适宜',
          },
          {
            time: '12:00',
            type: 'lunch',
            title: '素斋精品餐',
            duration: '1.5小时',
          },
          {
            time: '15:00',
            type: 'activity',
            title: '龙井茶园私享体验',
            location: '御茶园',
            duration: '2.5小时',
            petFriendly: true,
            note: '茶艺师一对一教学',
          },
        ],
      },
      {
        day: 3,
        date: '4月27日 周日',
        items: [
          {
            time: '09:00',
            type: 'activity',
            title: '西湖游船',
            location: '西湖',
            duration: '1.5小时',
            petFriendly: true,
          },
          {
            time: '11:30',
            type: 'checkout',
            title: '酒店退房',
          },
          {
            time: '13:00',
            type: 'transport',
            title: '返回上海',
            duration: '2小时',
            method: '专车接送',
            distance: '180km',
          },
        ],
      },
    ],
    comfort: [
      {
        day: 1,
        date: '4月25日 周五',
        items: [
          {
            time: '09:00',
            type: 'transport',
            title: '从上海出发',
            duration: '2小时',
            method: '自驾',
            distance: '180km',
            note: '建议提前准备宠物晕车药',
          },
          {
            time: '11:30',
            type: 'checkin',
            title: '酒店入住',
            location: '西湖宠物友好酒店',
            rating: 4.8,
            petFriendly: true,
            note: '酒店提供宠物欢迎礼包',
          },
          {
            time: '14:00',
            type: 'activity',
            title: '西湖苏堤漫步',
            location: '苏堤春晓',
            duration: '2小时',
            petFriendly: true,
            weather: '☀️ 24°C 适宜',
            note: '沿湖有宠物饮水点和休息区',
          },
          {
            time: '16:30',
            type: 'rest',
            title: '休息时间',
            location: '宠物友好咖啡馆',
            duration: '1小时',
            note: '避开下午高温时段',
          },
          {
            time: '18:00',
            type: 'dinner',
            title: '晚餐推荐',
            location: '湖滨路宠物餐厅',
            petFriendly: true,
          },
        ],
      },
      {
        day: 2,
        date: '4月26日 周六',
        items: [
          {
            time: '08:30',
            type: 'activity',
            title: '太子湾公园',
            location: '宠物可入园区域',
            duration: '2.5小时',
            petFriendly: true,
            weather: '🌤 22°C 适宜',
            note: '春季花开，适合拍照',
          },
          {
            time: '12:00',
            type: 'lunch',
            title: '午餐休息',
            duration: '1.5小时',
            note: '宠物需充分休息',
          },
          {
            time: '14:00',
            type: 'transport',
            title: '前往云栖小镇',
            duration: '30分钟',
            method: '自驾',
            distance: '12km',
          },
          {
            time: '15:00',
            type: 'activity',
            title: '云栖竹径',
            location: '云栖竹径景区',
            duration: '2小时',
            petFriendly: true,
            weather: '🌿 阴凉舒适',
            note: '树荫遮蔽，适合宠物活动',
          },
          {
            time: '17:30',
            type: 'rest',
            title: '宠物友好茶室',
            duration: '1小时',
            petFriendly: true,
          },
        ],
      },
      {
        day: 3,
        date: '4月27日 周日',
        items: [
          {
            time: '09:00',
            type: 'activity',
            title: '龙井问茶',
            location: '龙井村',
            duration: '2小时',
            petFriendly: true,
            weather: '☀️ 23°C 适宜',
            note: '可携带宠物的茶园步道',
          },
          {
            time: '12:00',
            type: 'checkout',
            title: '酒店退房',
            note: '检查宠物用品',
          },
          {
            time: '13:30',
            type: 'transport',
            title: '返回上海',
            duration: '2小时',
            method: '自驾',
            distance: '180km',
            note: '避开返程高峰',
          },
        ],
      },
    ],
    budget: [
      {
        day: 1,
        date: '4月25日 周五',
        items: [
          {
            time: '09:00',
            type: 'transport',
            title: '从上海出发',
            duration: '2小时',
            method: '自驾',
            distance: '180km',
          },
          {
            time: '11:30',
            type: 'checkin',
            title: '快捷酒店入住',
            location: '如家精选（西湖店）',
            rating: 4.2,
            petFriendly: true,
          },
          {
            time: '13:30',
            type: 'activity',
            title: '西湖北线漫步',
            location: '断桥残雪',
            duration: '2小时',
            petFriendly: true,
            weather: '☀️ 24°C 适宜',
          },
          {
            time: '16:00',
            type: 'rest',
            title: '街边咖啡店',
            duration: '1小时',
          },
          {
            time: '18:00',
            type: 'dinner',
            title: '本地特色小吃',
            location: '河坊街',
          },
        ],
      },
      {
        day: 2,
        date: '4月26日 周六',
        items: [
          {
            time: '08:00',
            type: 'activity',
            title: '灵隐寺游览',
            location: '灵隐景区',
            duration: '2.5小时',
            petFriendly: true,
            weather: '🌤 22°C 适宜',
            note: '宠物需牵绳',
          },
          {
            time: '11:30',
            type: 'lunch',
            title: '简餐',
            duration: '1小时',
          },
          {
            time: '14:00',
            type: 'activity',
            title: '九溪烟树',
            location: '九溪',
            duration: '2小时',
            petFriendly: true,
            note: '溪水清凉，宠物喜欢',
          },
        ],
      },
      {
        day: 3,
        date: '4月27日 周日',
        items: [
          {
            time: '09:00',
            type: 'activity',
            title: '南山路散步',
            location: '南山路',
            duration: '1.5小时',
            petFriendly: true,
          },
          {
            time: '11:00',
            type: 'checkout',
            title: '酒店退房',
          },
          {
            time: '12:00',
            type: 'transport',
            title: '返回上海',
            duration: '2小时',
            method: '自驾',
            distance: '180km',
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[var(--cream-white)]">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-[var(--border)] bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--light-sage)] via-white to-[var(--muted-orange)] opacity-40"></div>

        <div className="relative px-8 py-6">
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <button
              onClick={() => onNavigate?.('info')}
              className="mb-4 flex items-center gap-2 px-4 py-2 rounded-xl text-[var(--deep-blue)] hover:bg-white/60 transition-all duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" strokeWidth={2} />
              <span className="text-sm font-medium">返回信息补全</span>
            </button>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--sage-green)] to-[var(--warm-orange)] flex items-center justify-center shadow-md">
                  <Sparkles className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h1 className="text-2xl font-semibold text-[var(--deep-blue)]">
                    杭州宠物友好三日游
                  </h1>
                  <p className="text-sm text-[var(--muted-foreground)] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    AI 智能规划已完成 · 已优化路线和时间分配
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onNavigate?.('map')}
                  className="px-5 py-2.5 rounded-xl border-2 border-[var(--border)] bg-white hover:border-[var(--sage-green)] hover:shadow-md transition-all duration-300 flex items-center gap-2 group"
                >
                  <Map className="w-4 h-4 text-[var(--sage-green)] group-hover:scale-110 transition-transform" strokeWidth={2} />
                  <span className="font-medium text-[var(--deep-blue)]">查看地图</span>
                </button>

                <button
                  onClick={() => onNavigate?.('emergency')}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[var(--sage-green)] to-[var(--warm-orange)] text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 group"
                >
                  <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" strokeWidth={2} />
                  <span>应急重规划</span>
                </button>
              </div>
            </div>

            {/* Plan Tabs */}
            <PlanTabs
              plans={plans}
              selectedPlan={selectedPlan}
              onSelectPlan={setSelectedPlan}
            />
          </div>
        </div>
      </div>

      {/* AI Badge */}
      <div className="max-w-7xl mx-auto px-8 pt-6">
        <div className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl border border-blue-200">
          <Sparkles className="w-5 h-5 text-purple-500" strokeWidth={2.5} />
          <p className="text-sm text-[var(--deep-blue)]">
            AI 已根据
            <span className="font-semibold text-purple-700 mx-1">天气预报</span>·
            <span className="font-semibold text-blue-700 mx-1">交通路况</span>·
            <span className="font-semibold text-green-700 mx-1">宠物友好度</span>·
            <span className="font-semibold text-orange-700 mx-1">宠物健康状态</span>
            为您优化行程
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex gap-8">
          {/* Left: Itinerary */}
          <div className="flex-1 space-y-6">
            {itinerary[selectedPlan]?.map((day, idx) => (
              <DayItineraryCard key={`${selectedPlan}-${idx}`} day={day} index={idx} />
            )) || (
              <div className="text-center py-12">
                <p className="text-[var(--muted-foreground)]">暂无行程数据</p>
              </div>
            )}
          </div>

          {/* Right: Overview */}
          <div className="w-96">
            <PlanOverviewSidebar plan={selectedPlan} />
          </div>
        </div>
      </div>
    </div>
  );
}
