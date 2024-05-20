import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './app/core/head/head.component';
import { MenuComponent } from './app/core/menu/menu.component';
import { AddContactComponent } from './app/components/add-contact/add-contact.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AddFromContactComponent } from './app/components/add-from-contact/add-from-contact.component';
import { ListContactsComponent } from './app/components/list-contacts/list-contacts.component';
import { EditContactComponent } from './pages/contacts/edit-contact/edit-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    MenuComponent,
    AddContactComponent,
    ContactsComponent,
    AddFromContactComponent,
    ListContactsComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
