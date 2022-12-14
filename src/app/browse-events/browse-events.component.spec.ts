import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseEventsComponent } from './browse-events.component';

describe('BrowseEventsComponent', () => {
  let component: BrowseEventsComponent;
  let fixture: ComponentFixture<BrowseEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
