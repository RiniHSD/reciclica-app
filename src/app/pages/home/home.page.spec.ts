import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { callbackify } from 'util';
import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomePage);
    router =  TestBed.get(Router)
    
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to pickup calls', () => {
    spyOn(router, 'navigate');
    component.pickupCalls()
    expect(router).toHaveBeenCalledWith(['pickup-calls']);
  });
  it('should go to pickup call', () => {
    spyOn(router, 'navigate');
    component.pickupCall()
    expect(router).toHaveBeenCalledWith(['pickup-call']);
  });
});
