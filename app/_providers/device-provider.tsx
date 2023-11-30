'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Device = 'desktop' | 'tablet' | 'mobile';

export const DeviceContext = createContext<Device | null>(null);

export function useDevice() {
  const context = useContext(DeviceContext);

  if (!context) {
    throw new Error('Use DeviceProvider in a parent component');
  }

  return context;
}

export default function DeviceProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [device, setDevice] = useState<Device | null>(null);

  useEffect(() => {
    const updateDevice = () => {
      const windowInnerWidth = window.innerWidth;

      switch (true) {
        case windowInnerWidth <= 700: {
          setDevice('mobile');
          break;
        }

        case windowInnerWidth <= 1120: {
          setDevice('tablet');
          break;
        }

        default: {
          setDevice('desktop');
        }
      }
    };

    updateDevice();

    window.addEventListener('resize', updateDevice);

    return () => window.removeEventListener('resize', updateDevice);
  }, []);

  return (
    <DeviceContext.Provider value={device}>{children}</DeviceContext.Provider>
  );
}
