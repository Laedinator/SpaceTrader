import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipOverviewItemComponent } from './ship-overview-item.component';

describe('ShipOverviewItemComponent', () => {
  let component: ShipOverviewItemComponent;
  let fixture: ComponentFixture<ShipOverviewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipOverviewItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShipOverviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
