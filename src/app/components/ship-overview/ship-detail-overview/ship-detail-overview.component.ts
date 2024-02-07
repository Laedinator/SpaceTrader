import { Component, Input } from '@angular/core';
import { Ship } from '../../../_interface/ship';
import { MatDivider } from '@angular/material/divider';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-ship-detail-overview',
  standalone: true,
  imports: [MatDivider, NgIf, NgFor],
  templateUrl: './ship-detail-overview.component.html',
  styleUrl: './ship-detail-overview.component.scss',
})
export class ShipDetailOverviewComponent {
  @Input() ship!: Ship;
}
