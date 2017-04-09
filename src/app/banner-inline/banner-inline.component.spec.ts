import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BannerComponent } from './banner-inline.component';


describe('BannerComponent (inline component)', () => {
  let comp: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerComponent],// declare the test component
    });
    //Call configureTestingModule within a beforeEach so that TestBed can reset itself to a base state before 
    //each test runs.

    fixture = TestBed.createComponent(BannerComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
    //The createComponent method returns a ComponentFixture, a handle on the test environment surrounding the created component.
    //The fixture provides access to the component instance itself and to the DebugElement, which is a handle on the component's DOM element.

  });


  it('no title in the DOM until manually call `detectChanges`', () => {
    expect(el.textContent).toEqual('');
  });

  //Jasmine runs the beforeEach function before each of these tests
  it('should display original title', () => {
    //Each test tells Angular when to perform change detection by calling fixture.detectChanges(). 
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.title);
  });

  it('should display a different test title', () => {
    comp.title = 'Test Title';
    fixture.detectChanges();
    expect(el.textContent).toContain('Test Title');
  });

});