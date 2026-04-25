import { useState } from 'react';
import { ProfilePage } from './components/ProfilePage';
import { HomeDashboard } from './components/HomeDashboard';
import { InfoCompletionPage } from './components/InfoCompletionPage';
import { LoadingPlanningPage } from './components/LoadingPlanningPage';
import { PlanningResultPage } from './components/PlanningResultPage';
import { MapRoutePage } from './components/MapRoutePage';
import { EmergencyReplanPage } from './components/EmergencyReplanPage';
import { SettingsPage } from './components/SettingsPage';
import { TripReviewPage } from './components/TripReviewPage';

export default function App() {
  const [currentView, setCurrentView] = useState<'profile' | 'home' | 'info' | 'loading' | 'planning' | 'map' | 'emergency' | 'settings' | 'review'>('profile');

  // Route to different pages
  if (currentView === 'profile') {
    return <ProfilePage onNavigate={(view) => setCurrentView(view as any)} />;
  }

  if (currentView === 'home') {
    return <HomeDashboard onNavigate={(view) => setCurrentView(view as any)} />;
  }

  if (currentView === 'info') {
    return <InfoCompletionPage onNavigate={(view) => setCurrentView(view as any)} />;
  }

  if (currentView === 'loading') {
    return <LoadingPlanningPage onNavigate={(view) => setCurrentView(view as any)} />;
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

  if (currentView === 'settings') {
    return <SettingsPage onNavigate={(view) => setCurrentView(view as any)} />;
  }

  if (currentView === 'review') {
    return <TripReviewPage onNavigate={(view) => setCurrentView(view as any)} />;
  }

  return null;
}
