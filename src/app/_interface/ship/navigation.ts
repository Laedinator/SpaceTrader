export interface Navigation {
  systemSymbol: string;
  waypointSymbol: string;
  route: {
    destination: {
      symbol: string;
      type: string;
      systemSymbol: string;
      x: 0;
      y: 0;
    };
    origin: {
      symbol: string;
      typ: string;
      systemSymbol: string;
      x: number;
      y: number;
    };
    departureTime: Date;
    arrival: Date;
  };
  status: string;
  flightMode: string;
}
