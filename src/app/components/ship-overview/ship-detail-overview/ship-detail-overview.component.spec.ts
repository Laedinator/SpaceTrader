import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipDetailOverviewComponent } from './ship-detail-overview.component';

describe('ShipDetailOverviewComponent', () => {
  let component: ShipDetailOverviewComponent;
  let fixture: ComponentFixture<ShipDetailOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipDetailOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShipDetailOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
