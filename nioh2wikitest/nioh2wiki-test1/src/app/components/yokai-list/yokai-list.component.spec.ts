import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YokaiListComponent } from './yokai-list.component';

describe('YokaiListComponent', () => {
  let component: YokaiListComponent;
  let fixture: ComponentFixture<YokaiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YokaiListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YokaiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
