import { Routes } from '@angular/router';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import { AgentDetailsComponent } from '../components/agent-details/agent-details.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    title: 'home',
  },
  {
    path: 'agent-details',
    component: AgentDetailsComponent,
    title: 'Agent details',
  },
];
