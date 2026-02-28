// components/layout/AdsterraLayoutWrapper.jsx
"use client";

import { useEffect, useRef } from 'react';
import { getAIOptimizer } from '../../utils/adsterra';

export default function AdsterraLayoutWrapper({ children, countryCode }) {
  const initialized = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !initialized.current) {
        const optimizer = getAIOptimizer();
        if (optimizer) {
            optimizer.setGeo(countryCode);
        }

        const nativeContainer = document.getElementById('container-d5b2d3535cc2a6e0c37ed7d883cbb3f8');

        const visibleAds = [
            { id: 'native', src: '//fundingfashioned.com/d5b2d3535cc2a6e0c37ed7d883cbb3f8/invoke.js' },
            { id: 'social', src: '//fundingfashioned.com/90/d6/d8/90d6d86c4ec906e7a4827896cb4ac44a.js' }
        ];

        visibleAds.forEach(s => {
            if(document.querySelector(`script[src="${s.src}"]`)) return;
            const el = document.createElement('script');
            el.src = s.src;
            el.async = true;
            
            // PERBAIKAN: Masukkan script native ke kontainer footer jika ada
            if (s.id === 'native' && nativeContainer) {
                nativeContainer.appendChild(el);
            } else {
                document.body.appendChild(el);
            }
        });

        setTimeout(() => {
            if(document.querySelector(`script[src*="56dcee286f6fd20715180bf1738dc2f1"]`)) return;
            const popunder = document.createElement('script');
            popunder.src = '//fundingfashioned.com/56/dc/ee/56dcee286f6fd20715180bf1738dc2f1.js'; 
            document.head.appendChild(popunder);
        }, 3500);

        initialized.current = true;
    }
  }, [countryCode]);

  return <>{children}</>;
}