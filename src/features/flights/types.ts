export type FlightFilters = {
  price: {
    min: number;
    max: number;
  };
  departureTime: {
    min: number; // دقیقه از 00:00
    max: number;
  };
  airlines: string[];
  stops: 'all' | 'direct' | 'one' | 'two+';
  airports: string[];
  flightTypes: string[];
};

export const initialFilters: FlightFilters = {
  price: { min: 6000000, max: 60000000 },
  departureTime: { min: 0, max: 1440 }, // 24 ساعت
  airlines: [],
  stops: 'all',
  airports: [],
  flightTypes: [],
};