import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarSupervisorComponent } from './modificar-supervisor.component';

describe('ModificarSupervisorComponent', () => {
  let component: ModificarSupervisorComponent;
  let fixture: ComponentFixture<ModificarSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarSupervisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
