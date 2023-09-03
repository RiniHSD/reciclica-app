import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, ReactiveFormsModule]
    }).compileComponents() 
    fixture = TestBed.createComponent(LoginPage);
    router = TestBed.get(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create form init', () => {
    component.ngOnInit();

    expect(component).not.toBeUndefined();
  });

  it('should go to home page when login', () => {
    spyOn(router, 'navigate');
    component.login();

    expect(router).toHaveBeenCalledWith(['home']);
  });
  
  it('should go to register page', () => {
    spyOn(router, 'navigate');
    component.register();

    expect(router).toHaveBeenCalledWith(['register']);
  });
});
