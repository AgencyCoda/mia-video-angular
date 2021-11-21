import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaVideoCoreComponent } from './mia-video-core.component';

describe('MiaVideoCoreComponent', () => {
  let component: MiaVideoCoreComponent;
  let fixture: ComponentFixture<MiaVideoCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaVideoCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaVideoCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
