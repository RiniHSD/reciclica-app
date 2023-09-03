import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { LoadingReducer } from 'src/store/loading/loading.reducers';

import { LoadingComponent } from './loading.component';
import { Store, StoreModule } from '@ngrx/store';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingComponent ],
      imports: [
        IonicModule.forRoot(), 
        StoreModule.forRoot([]),
        StoreModule.forFeature("loading", LoadingReducer)
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should hide loading component when it is not loading', () => {
    const compiled = fixture.nativeElement;

    expect(compiled.querrySelected(".backdrop")).toBeNull();
  });
});
