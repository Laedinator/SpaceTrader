import { Injectable } from '@angular/core';
import { Agent } from '../../_interface/agent';

@Injectable({
  providedIn: 'root',
})
export class AgentDetailService {
  agent: Agent | undefined;

  constructor() {}

  getAgentDetails() {}
}
