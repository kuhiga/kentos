import { v4 as uuidv4 } from 'uuid';

type SendEventProps = {
  eventName: string;
  eventData: Record<string, string>;
};
const getTemporaryId = (): string => {
  const tempId = localStorage.getItem('temporaryUserId') ?? undefined;
  if (!tempId) {
    const newTempId: string = uuidv4();
    localStorage.setItem('temporaryUserId', newTempId);
    return newTempId;
  }
  return tempId;
};

export const sendEvent = async ({
  eventName,
  eventData,
}: SendEventProps): Promise<void> => {
  const source = getTemporaryId();
  if (window.location.href.indexOf('localhost') > -1) {
    console.log(`user is ${source}`);
    console.log(`${eventName} event triggered`);
    console.log(`event data is ${JSON.stringify(eventData)}`);
    return;
  }
  try {
    const response = await fetch('https://kentos-server.deno.dev/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: eventName, source, data: eventData }),
    });
    if (response.ok) {
      const responseData = await response.json();
      console.log('API Response:', responseData);
    } else {
      console.error('API Request failed:', response.statusText);
    }
  } catch (error) {
    console.error('Error during API request:', error);
  }
};
