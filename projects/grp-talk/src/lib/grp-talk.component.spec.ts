import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrpTalkComponent } from './grp-talk.component';

describe('GrpTalkComponent', () => {
  let component: GrpTalkComponent;
  let fixture: ComponentFixture<GrpTalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrpTalkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrpTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
