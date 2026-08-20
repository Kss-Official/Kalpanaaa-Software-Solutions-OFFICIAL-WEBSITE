import { useEffect, useState } from 'react';

type SpringConfig = {
  tension?: number;
  friction?: number;
  mass?: number;
};

// Simplified lightweight spring hook for basic transition management
// For more complex animations, we recommend framer-motion, 
// but this keeps the bundle small for simple layout morphs.
export const useSpring = (initialValue: number, config?: SpringConfig) => {
  const [value, setValue] = useState(initialValue);
  
  // Expose a setter that can be hooked up to CSS transition styles in the component
  const setSpringValue = (newValue: number) => {
    setValue(newValue);
  };

  // The actual spring physics are handled by the CSS vars we added to index.css:
  // e.g., transition: all var(--duration-normal) var(--ease-spring);
  
  return [value, setSpringValue] as const;
};
