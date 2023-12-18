// deno-lint-ignore-file no-explicit-any
import { config } from './config/index.ts';
import { SendEventProps } from './types.ts';

export class AmplitudeGateway {
  apiKey: string;
  apiUrl: string;
  constructor() {
    this.apiKey = config.AMPLITUDE_API_KEY;
    this.apiUrl = config.AMPLITUDE_API_URL;
  }

  public async sendEvent({ userId, eventType, data }: SendEventProps) {
    if (this.apiKey === '') {
      throw new Error('api key is invalid');
    }
    const eventData = {
      api_key: this.apiKey,
      events: [
        {
          user_id: userId,
          event_type: eventType,
          data: JSON.stringify(data),
          timestamp: new Date().toISOString(),
        },
      ],
    };
    try {
      const res = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
        },
        body: JSON.stringify(eventData),
      });
      return res;
    } catch (e: any) {
      console.error('Error sending event to Amplitude:', e);
      throw e;
    }
  }
}
