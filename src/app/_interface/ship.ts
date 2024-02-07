import { Navigation } from './ship/navigation';
import { ShipCargo } from './ship/shipCargo';
import { ShipCooldown } from './ship/shipCooldown';
import { ShipCrew } from './ship/shipCrew';
import { ShipEngine } from './ship/shipEngine';
import { ShipFrame } from './ship/shipFrame';
import { ShipFuel } from './ship/shipFuel';
import { ShipModules } from './ship/shipModules';
import { ShipMount } from './ship/shipMount';
import { ShipReactor } from './ship/shipReactor';
import { ShipRegistration } from './ship/shipRegistration';

export interface Ship {
  symbol: string;
  registration: ShipRegistration;
  nav: Navigation;
  cooldown: ShipCooldown;
  cargo: ShipCargo;
  fuel: ShipFuel;
  crew: ShipCrew;
  frame: ShipFrame;
  reactor: ShipReactor;
  engine: ShipEngine;
  modules: [ShipModules];
  mounts: [ShipMount];
}
