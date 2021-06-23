import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserContactComponent } from './user-contact/user-contact.component';
import { UserAddressComponent } from './user-address/user-address.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserProfileComponent,
    UserContactComponent,
    UserAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
