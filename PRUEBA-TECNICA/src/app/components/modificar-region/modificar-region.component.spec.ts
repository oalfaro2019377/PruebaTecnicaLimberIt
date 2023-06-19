import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarRegionComponent } from './modificar-region.component';

describe('ModificarRegionComponent', () => {
  let component: ModificarRegionComponent;
  let fixture: ComponentFixture<ModificarRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
