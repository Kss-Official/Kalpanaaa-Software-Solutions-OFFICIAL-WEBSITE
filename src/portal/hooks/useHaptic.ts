export type HapticFeedbackType = 'light' | 'medium' | 'heavy' | 'success' | 'error' | 'warning';

export const triggerHaptic = (type: HapticFeedbackType = 'light') => {
  if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
    switch (type) {
      case 'light':
        window.navigator.vibrate(10);
        break;
      case 'medium':
        window.navigator.vibrate(20);
        break;
      case 'heavy':
        window.navigator.vibrate(40);
        break;
      case 'success':
        window.navigator.vibrate([50, 30, 50]);
        break;
      case 'error':
        window.navigator.vibrate([30, 50, 30, 50, 30]);
        break;
      case 'warning':
        window.navigator.vibrate([20, 40, 60]);
        break;
      default:
        window.navigator.vibrate(10);
    }
  }
};

export const useHaptic = () => {
  return { triggerHaptic };
};
