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

  public async sendEvent({ deviceId, eventType }: SendEventProps) {
    const eventData = {
      api_key: this.apiKey,
      events: [
        {
          device_id: deviceId,
          event_type: eventType,
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
      return res.json();
    } catch (e: any) {
      console.error('Error sending event to Amplitude:', e);
      throw e;
    }
  }
}
