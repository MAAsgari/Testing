import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WelcomedependencyComponent } from './welcomedependency.component';
import { UserService } from './../services/userservice.service';

describe('WelcomedependencyComponent', () => {
  let comp: WelcomedependencyComponent;
  let fixture: ComponentFixture<WelcomedependencyComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let userServiceStub;
  let userService;


  beforeEach(() => {
    // stub UserService for test purposes
    userServiceStub = {
      isLoggedIn: true,
      user: { name: 'Test User' }
    };

    TestBed.configureTestingModule({
      declarations: [WelcomedependencyComponent],
      providers: [{ provide: UserService, useValue: userServiceStub }]
    });

    fixture = TestBed.createComponent(WelcomedependencyComponent);
    comp = fixture.componentInstance;

    // UserService from the root injector
    //userService = TestBed.get(UserService);//it doesn't work i use the code below

    // UserService actually injected into the component
    userService = fixture.debugElement.injector.get(UserService);


    //  get the "welcome" element by CSS selector (e.g., by class name)
    de = fixture.debugElement.query(By.css('.welcome'));
    el = de.nativeElement;
  });


  it('should welcome the user', () => {
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).toContain('Welcome', '"Welcome ..."');
    expect(content).toContain('Test User', 'expected name');
    // expect(content).toContain('ali', '"ali name"');
    // expect(content).toContain('sheri', 'sheri name');
  });

  it('should welcome "Bubba"', () => {
    userService.user.name = 'Bubba'; // welcome message hasn't been shown yet
    fixture.detectChanges();
    expect(el.textContent).toContain('Bubba');
  });

  it('should request login if not logged in', () => {
    userService.isLoggedIn = false; // welcome message hasn't been shown yet
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).not.toContain('Welcome', 'not welcomed');
    expect(content).toMatch(/log in/i, '"log in"');
  });
});
