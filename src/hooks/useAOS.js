import { useEffect } from 'react';

export default function useAOS() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, []);
}
