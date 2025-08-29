'use client';

import { useEffect } from 'react';
import { useNavigation } from './NavigationContext';

export default function KeyboardHandler() {
  const { highlightLeft, highlightRight, highlightCenter } = useNavigation();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.key === 'F12' || event.key === 'Enter') {
        event.preventDefault();
        event.stopPropagation();
        
        if (event.key === 'Escape') {
          highlightLeft();
        } else if (event.key === 'F12') {
          highlightRight();
        } else if (event.key === 'Enter') {
          highlightCenter();
        }
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.key === 'F12' || event.key === 'Enter') {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    document.addEventListener('keydown', handleKeyDown, true);
    document.addEventListener('keyup', handleKeyUp, true);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
      document.removeEventListener('keyup', handleKeyUp, true);
    };
  }, [highlightLeft, highlightRight, highlightCenter]);

  return null;
}