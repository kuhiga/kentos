export const config = {
  AMPLITUDE_API_KEY: Deno.env.get('AMPLITUDE_API_KEY') ?? '',
  AMPLITUDE_API_URL: 'https://api2.amplitude.com/2/httpapi',
};
