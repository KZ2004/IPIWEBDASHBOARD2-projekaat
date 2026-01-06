import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SleepComponent } from './sleep.component';
import { FormsModule } from '@angular/forms';

describe('SleepComponent', () => {
  let component: SleepComponent;
  let fixture: ComponentFixture<SleepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SleepComponent, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SleepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
