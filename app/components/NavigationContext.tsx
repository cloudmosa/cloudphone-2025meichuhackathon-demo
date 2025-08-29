'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface NavigationContextType {
  leftHighlighted: boolean;
  rightHighlighted: boolean;
  centerHighlighted: boolean;
  highlightLeft: () => void;
  highlightRight: () => void;
  highlightCenter: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [leftHighlighted, setLeftHighlighted] = useState(false);
  const [rightHighlighted, setRightHighlighted] = useState(false);
  const [centerHighlighted, setCenterHighlighted] = useState(false);

  const highlightLeft = () => {
    setLeftHighlighted(true);
    setTimeout(() => setLeftHighlighted(false), 200);
  };

  const highlightRight = () => {
    setRightHighlighted(true);
    setTimeout(() => setRightHighlighted(false), 200);
  };

  const highlightCenter = () => {
    setCenterHighlighted(true);
    setTimeout(() => setCenterHighlighted(false), 200);
  };

  return (
    <NavigationContext.Provider value={{
      leftHighlighted,
      rightHighlighted,
      centerHighlighted,
      highlightLeft,
      highlightRight,
      highlightCenter
    }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}