import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RoutingService } from '../services/routing.service';
import { EntryWrapperComponent } from './entry-wrapper/entry-wrapper.component';
import { LoginComponent } from './login/login.component';
import { RecoverComponent } from './recover/recover.component';
import { RegisterComponent } from './register/register.component';
import { TerminateComponent } from './terminate/terminate.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  providers: [
    RoutingService
  ],
  declarations: [
    EntryWrapperComponent,
    LoginComponent,
    RecoverComponent,
    RegisterComponent,
    TerminateComponent
  ],
  exports: [
    LoginComponent,
    RecoverComponent,
    RegisterComponent,
    TerminateComponent
  ]
})
export class EntryModule { }
