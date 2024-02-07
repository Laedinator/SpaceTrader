import { Routes } from '@angular/router';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import { AgentDetailsComponent } from '../components/agent-details/agent-details.component';
import { ShipOverviewComponent } from '../components/ship-overview/ship-overview.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    title: 'home',
  },
  {
    path: 'agent',
    component: AgentDetailsComponent,
    title: 'Agent details',
  },
  {
    path: 'ships',
    component: ShipOverviewComponent,
    title: 'Ship details',
  },
];
