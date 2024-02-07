export interface ShipMount {
  symbol: string;
  name: string;
  description: string;
  strength: number;
  deposits: [string];
  requirements: {
    power: number;
    crew: number;
    slots: number;
  };
}
