import { createMachine } from 'xstate';
type TrafficLightEvents = {
  type: 'NEXT';
};
type TrafficLightState =
  | {
      value: 'red';
      context: undefined;
    }
  | { value: 'green'; context: undefined }
  | { value: 'yellow'; context: undefined };
export const trafficLightMachine = createMachine<undefined, TrafficLightEvents, TrafficLightState>({
  id: 'traffic-light',
  initial: 'red',
  states: {
    green: {
      on: { NEXT: 'yellow' },
    },
    yellow: {
      on: { NEXT: 'red' },
    },
    red: {
      on: { NEXT: 'green' },
    },
  },
});
