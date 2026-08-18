export const fetchAbsoluteTime = async (): Promise<Date> => {
  try {
    // Primary: timeapi.io (more stable than worldtimeapi)
    const response = await fetch('https://timeapi.io/api/Time/current/zone?timeZone=UTC', {
      cache: 'no-store'
    });
    if (response.ok) {
      const data = await response.json();
      // timeapi.io returns dateTime without a 'Z', so we must append it to parse as UTC
      return new Date(data.dateTime + 'Z');
    }
  } catch (error) {
    // Fallback if API fails
  }
  return new Date();
};
