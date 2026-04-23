import { useState } from 'react';
import { Sparkles, ArrowLeft, Navigation, Info } from 'lucide-react';
import { DaySelector } from './DaySelector';
import { RouteList } from './RouteList';
import { MapCanvas } from './MapCanvas';
import { LocationCard } from './LocationCard';

interface MapRoutePageProps {
  onNavigate?: (view: string) => void;
}

export function MapRoutePage({ onNavigate }: MapRoutePageProps) {
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState<'luxury' | 'comfort' | 'budget'>('comfort');
  const [selectedLocation, setSelectedLocation] = useState<any>(null);

  const routeData = {
    day1: {
      locations: [
        {
          id: 'start',
          type: 'start',
          name: '上海出发点',
          address: '上海市浦东新区',
          time: '09:00',
          position: { x: 15, y: 50 },
        },
        {
          id: 'hotel1',
          type: 'hotel',
          name: '西湖宠物友好酒店',
          address: '杭州市西湖区北山街道88号',
          time: '11:30',
          rating: 4.8,
          price: '¥680/晚',
          hours: '24小时',
          petFriendly: true,
          position: { x: 40, y: 45 },
          features: ['宠物欢迎礼包', '宠物床垫', '24小时前台'],
          reviews: '酒店对宠物非常友好，房间整洁，服务周到',
        },
        {
          id: 'spot1',
          type: 'spot',
          name: '西湖苏堤',
          address: '杭州市西湖区苏堤',
          time: '14:00',
          rating: 4.9,
          price: '免费',
          hours: '全天开放',
          petFriendly: true,
          position: { x: 45, y: 52 },
          features: ['宠物可入园', '饮水点', '遮阴区'],
          reviews: '景色优美，适合遛狗，有专门的宠物活动区域',
        },
        {
          id: 'hospital1',
          type: 'pet-hospital',
          name: '杭州宠颐生24小时动物医院',
          address: '杭州市西湖区文二西路',
          time: '沿途备用',
          rating: 4.7,
          hours: '24小时营业',
          position: { x: 42, y: 38 },
          features: ['24小时急诊', '宠物ICU', '专业医师'],
          reviews: '设施完善，医生专业，应急首选',
        },
        {
          id: 'cafe1',
          type: 'restaurant',
          name: '湖畔宠物友好咖啡馆',
          address: '杭州市西湖区湖滨路',
          time: '16:30',
          rating: 4.6,
          price: '¥80/人',
          hours: '10:00-22:00',
          petFriendly: true,
          position: { x: 48, y: 48 },
          features: ['宠物餐点', '户外座位', '宠物玩具'],
          reviews: '环境优雅，宠物可以在户外区域休息',
        },
      ],
    },
    day2: {
      locations: [
        {
          id: 'spot2',
          type: 'spot',
          name: '太子湾公园',
          address: '杭州市西湖区南山路',
          time: '08:30',
          rating: 4.8,
          price: '免费',
          hours: '06:00-18:00',
          petFriendly: true,
          position: { x: 50, y: 58 },
          features: ['花海景观', '宠物可入园', '拍照圣地'],
          reviews: '春季樱花盛开，是带宠物拍照的好地方',
        },
        {
          id: 'spot3',
          type: 'spot',
          name: '云栖竹径',
          address: '杭州市西湖区云栖路',
          time: '15:00',
          rating: 4.7,
          price: '¥20',
          hours: '08:00-17:00',
          petFriendly: true,
          position: { x: 65, y: 45 },
          features: ['竹林小径', '阴凉舒适', '宠物友好'],
          reviews: '竹林深处很凉快，狗狗很喜欢',
        },
        {
          id: 'hospital2',
          type: 'pet-hospital',
          name: '云栖宠物医院',
          address: '杭州市西湖区云栖小镇',
          time: '沿途备用',
          rating: 4.5,
          hours: '09:00-21:00',
          position: { x: 68, y: 50 },
          features: ['常规诊疗', '疫苗接种', '宠物美容'],
          reviews: '环境干净，价格合理',
        },
      ],
    },
    day3: {
      locations: [
        {
          id: 'spot4',
          type: 'spot',
          name: '龙井村',
          address: '杭州市西湖区龙井路',
          time: '09:00',
          rating: 4.8,
          price: '免费',
          hours: '全天开放',
          petFriendly: true,
          position: { x: 55, y: 40 },
          features: ['茶园步道', '宠物可入', '自然风光'],
          reviews: '茶香四溢，可以带狗狗在茶园散步',
        },
        {
          id: 'end',
          type: 'end',
          name: '返回上海',
          address: '杭州→上海',
          time: '13:30',
          position: { x: 80, y: 50 },
        },
      ],
    },
  };

  const currentRoute = routeData[`day${selectedDay}` as keyof typeof routeData];

  return (
    <div className="h-screen flex flex-col bg-[var(--cream-white)]">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-[var(--border)] bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--light-sage)] via-white to-[var(--muted-orange)] opacity-40"></div>

        <div className="relative px-8 py-6">
          <div className="max-w-[1600px] mx-auto">
            {/* Back Button */}
            <button
              onClick={() => onNavigate?.('planning')}
              className="mb-4 flex items-center gap-2 px-4 py-2 rounded-xl text-[var(--deep-blue)] hover:bg-white/60 transition-all duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" strokeWidth={2} />
              <span className="text-sm font-medium">返回行程规划</span>
            </button>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--sage-green)] to-[var(--warm-orange)] flex items-center justify-center shadow-md">
                  <Navigation className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h1 className="text-2xl font-semibold text-[var(--deep-blue)]">
                    路线地图 · 空间视图
                  </h1>
                  <p className="text-sm text-[var(--muted-foreground)] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    查看每日路线和关键点位
                  </p>
                </div>
              </div>

              {/* Day Selector */}
              <DaySelector
                selectedDay={selectedDay}
                onSelectDay={setSelectedDay}
                totalDays={3}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="px-8 py-4 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-blue-200">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Info className="w-5 h-5 text-blue-500" strokeWidth={2} />
            <p className="text-sm text-blue-800">
              点击地图标记查看详情 · 路线已优化通勤时间 · 沿途已定位{' '}
              <span className="font-semibold">{currentRoute.locations.filter(l => l.type === 'pet-hospital').length}</span>{' '}
              家宠物医院
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="px-3 py-1.5 bg-white/80 rounded-lg border border-green-200">
              <span className="text-sm font-medium text-green-700">
                {currentRoute.locations.filter(l => l.petFriendly).length} 个宠物友好点位
              </span>
            </div>
            <div className="px-3 py-1.5 bg-white/80 rounded-lg border border-purple-200">
              <span className="text-sm font-medium text-purple-700">
                共 {currentRoute.locations.length} 个关键点
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full max-w-[1600px] mx-auto px-8 py-6 flex gap-6">
          {/* Left: Route List */}
          <div className="w-96 flex-shrink-0">
            <RouteList
              locations={currentRoute.locations}
              selectedLocation={selectedLocation}
              onSelectLocation={setSelectedLocation}
            />
          </div>

          {/* Right: Map */}
          <div className="flex-1 relative">
            <MapCanvas
              locations={currentRoute.locations}
              selectedLocation={selectedLocation}
              onSelectLocation={setSelectedLocation}
            />
          </div>
        </div>
      </div>

      {/* Location Detail Card */}
      {selectedLocation && selectedLocation.type !== 'start' && selectedLocation.type !== 'end' && (
        <LocationCard
          location={selectedLocation}
          onClose={() => setSelectedLocation(null)}
        />
      )}
    </div>
  );
}
