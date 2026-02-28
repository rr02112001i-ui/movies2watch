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

        const nativeContainer = document.getElementById('container-3e70a842bc19a8f377401e5146461b69');

        const visibleAds = [
            { id: 'native', src: '//fundingfashioned.com/3e70a842bc19a8f377401e5146461b69/invoke.js' },
            { id: 'social', src: '//fundingfashioned.com/52/62/46/526246064cec0e3511e7120cb93157a0.js' }
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
            if(document.querySelector(`script[src*="e7a1c6460d6b72895ba5c25ad65ec4e2"]`)) return;
            const popunder = document.createElement('script');
            popunder.src = '//fundingfashioned.com/e7/a1/c6/e7a1c6460d6b72895ba5c25ad65ec4e2.js'; 
            document.head.appendChild(popunder);
        }, 3500);

        initialized.current = true;
    }
  }, [countryCode]);

  return <>{children}</>;
}