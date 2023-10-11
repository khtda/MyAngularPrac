import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YokaiDetailsComponent } from './yokai-details.component';

describe('YokaiDetailsComponent', () => {
  let component: YokaiDetailsComponent;
  let fixture: ComponentFixture<YokaiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YokaiDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YokaiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
