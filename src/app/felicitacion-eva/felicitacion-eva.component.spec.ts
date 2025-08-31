import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FelicitacionEvaComponent } from './felicitacion-eva.component';

describe('FelicitacionEvaComponent', () => {
  let component: FelicitacionEvaComponent;
  let fixture: ComponentFixture<FelicitacionEvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FelicitacionEvaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FelicitacionEvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
