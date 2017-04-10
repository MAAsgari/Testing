import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TwainComponentAsyncComponent } from './twain-component-async.component';
import { UserService } from './../services/userservice.service';

describe('TwainComponentAsyncComponent (component with an async service promise)', () => {
  let comp: TwainComponentAsyncComponent;
  let fixture: ComponentFixture<TwainComponentAsyncComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let userService;
  let spy: jasmine.Spy;

  const testQuote = 'Test Quote';

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwainComponentAsyncComponent],
      providers: [UserService],
    });

    fixture = TestBed.createComponent(TwainComponentAsyncComponent);
    comp = fixture.componentInstance;

    // TwainService actually injected into the component
    userService = fixture.debugElement.injector.get(UserService);

    // Setup spy on the `getQuote` method
    //By chaining the spy with and.returnValue, all calls to the function will return a specific value.
    spy = spyOn(userService, 'getquote')
      .and.returnValue(Promise.resolve(testQuote));

    // Get the Twain quote element by CSS selector (e.g., by class name)
    de = fixture.debugElement.query(By.css('.twain'));
    el = de.nativeElement;
  });

  it('should not show quote before OnInit', () => {
    expect(el.textContent).toBe('', 'nothing displayed');
    expect(spy.calls.any()).toBe(false, 'getQuote not yet called');
  });

  it('should still not show quote after component initialized', () => {
    fixture.detectChanges();
    // getQuote service is async => still has not returned with quote
    expect(el.textContent).toBe('...', 'no quote yet');
    expect(spy.calls.any()).toBe(true, 'getQuote called');
  });


  it('should show quote after getQuote promise (async)', async(() => {
    fixture.detectChanges();

    fixture.whenStable().then(() => { // wait for async getQuote
      fixture.detectChanges();        // update view with quote
      expect(el.textContent).toBe(testQuote);
    });
  }));


  it('should show quote after getQuote promise (fakeAsync)', fakeAsync(() => {
    fixture.detectChanges();
    //The tick function is one of the Angular testing utilities and a companion to fakeAsync. You can only call it within a fakeAsync body.
    //Calling tick() simulates the passage of time until all pending asynchronous activities finish, including the resolution of the getQuote promise in this test case.
    tick();                  // wait for async getQuote
    fixture.detectChanges(); // update view with quote
    expect(el.textContent).toBe(testQuote);
  }));
});
