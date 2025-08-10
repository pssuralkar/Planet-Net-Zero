"use client";

import { createContext, useContext, ReactNode } from 'react';

interface SEOContextType {
  updateMetadata: (metadata: any) => void;
}

const SEOContext = createContext<SEOContextType | undefined>(undefined);

export function SEOProvider({ children }: { children: ReactNode }) {
  const updateMetadata = (metadata: any) => {
    // In a real application, this would update the document head
    // For now, we'll use Next.js built-in metadata API
    console.log('Updating metadata:', metadata);
  };

  return (
    <SEOContext.Provider value={{ updateMetadata }}>
      {children}
    </SEOContext.Provider>
  );
}

export function useSEO() {
  const context = useContext(SEOContext);
  if (context === undefined) {
    throw new Error('useSEO must be used within a SEOProvider');
  }
  return context;
}