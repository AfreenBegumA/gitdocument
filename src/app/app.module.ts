import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewmovieService } from './viewmovie.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { AdminComponent } from './admin/admin.component';
import { EditComponent } from './edit/edit.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
//import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    FavoriteComponent,
    AdminComponent,
    EditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //NgbModule,
    
  ],
  providers: [ViewmovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
