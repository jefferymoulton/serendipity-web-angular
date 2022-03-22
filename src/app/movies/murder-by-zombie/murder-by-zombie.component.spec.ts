import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MurderByZombieComponent } from './murder-by-zombie.component';

describe('MurderByZombieComponent', () => {
  let component: MurderByZombieComponent;
  let fixture: ComponentFixture<MurderByZombieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MurderByZombieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MurderByZombieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
