import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaVideoPanelComponent } from './mia-video-panel.component';

describe('MiaVideoPanelComponent', () => {
  let component: MiaVideoPanelComponent;
  let fixture: ComponentFixture<MiaVideoPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaVideoPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaVideoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
