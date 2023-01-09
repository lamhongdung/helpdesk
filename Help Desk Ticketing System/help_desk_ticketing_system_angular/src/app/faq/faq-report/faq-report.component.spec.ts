import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqReportComponent } from './faq-report.component';

describe('FaqReportComponent', () => {
  let component: FaqReportComponent;
  let fixture: ComponentFixture<FaqReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
