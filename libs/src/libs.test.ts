import { libs } from './libs.ts';
import { assertEquals } from 'https://deno.land/std@0.172.0/testing/asserts.ts';

Deno.test('should return "libs"', () => {
  assertEquals(libs(), 'libs');
});
