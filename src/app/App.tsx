import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { InfoCompletionPage } from './components/InfoCompletionPage';
import { PlanningResultPage } from './components/PlanningResultPage';
import { MapRoutePage } from './components/MapRoutePage';
import { EmergencyReplanPage } from './components/EmergencyReplanPage';
import { Header } from './components/Header';
import { ChatPanel } from './components/ChatPanel';
import { MainContent } from './components/MainContent';
import { SidebarPanel } from './components/SidebarPanel';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'info' | 'chat' | 'planning' | 'journey' | 'map' | 'emergency'>('home');

  // Show different pages based on view
  if (currentView === 'home') {
    return <HomePage onNavigate={(view) => setCurrentView(view as any)} />;
  }

  if (currentView === 'info') {
    return <InfoCompletionPage onNavigate={(view) => setCurrentView(view as any)} />;
  }

  if (currentView === 'planning') {
    return <PlanningResultPage onNavigate={(view) => setCurrentView(view as any)} />;
  }

  if (currentView === 'map') {
    return <MapRoutePage onNavigate={(view) => setCurrentView(view as any)} />;
  }

  if (currentView === 'emergency') {
    return <EmergencyReplanPage onNavigate={(view) => setCurrentView(view as any)} />;
  }

  return (
    <div className="h-screen flex flex-col bg-[var(--cream-white)]">
      {/* Header */}
      <Header currentView={currentView} onViewChange={setCurrentView} />

      {/* Main Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Chat Panel */}
        <div className="animate-[slideInLeft_0.5s_ease-out]">
          <ChatPanel />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 animate-[fadeInUp_0.6s_ease-out_0.1s_both]">
          <MainContent currentView={currentView} />
        </div>

        {/* Right Sidebar */}
        <div className="animate-[slideInLeft_0.5s_ease-out_0.2s_both] origin-right">
          <SidebarPanel />
        </div>
      </div>
    </div>
  );
}
