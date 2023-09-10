import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';
import { ErrorMessageModule } from 'src/app/components/error-message/error-message.modul';
//import { Geolocation } from '@capacitor/geolocation';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    ReactiveFormsModule,
    ErrorMessageModule
  ],
  declarations: [
    RegisterPage
  ],
  providers: [Geolocation]

})
export class RegisterPageModule {}
