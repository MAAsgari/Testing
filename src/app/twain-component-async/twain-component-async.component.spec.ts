import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwainComponentAsyncComponent } from './twain-component-async.component';

describe('TwainComponentAsyncComponent', () => {
  let component: TwainComponentAsyncComponent;
  let fixture: ComponentFixture<TwainComponentAsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwainComponentAsyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwainComponentAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
