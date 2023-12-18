import { AmplitudeGateway } from '../gateways/amplitude-gateway/amplitudeGateway.ts';
type SendAnalyticEventProps = {
  userId: string;
  eventType: string;
  eventData: Record<string, string>;
};
export const sendAnalyticEvent = async ({
  userId,
  eventType,
  eventData,
}: SendAnalyticEventProps): Promise<Response> => {
  try {
    const amp = new AmplitudeGateway();
    const res = await amp.sendEvent({ userId, eventType, data: eventData });

    if (res.ok) {
      const data = await res.json();

      return new Response(data, {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      const errorData = await res.json();
      throw new Error(
        `Send Analytics API request failed with status ${res.status}: ${errorData.message}`
      );
    }
  } catch (error) {
    console.error('Error sending analytics:', error.message);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
