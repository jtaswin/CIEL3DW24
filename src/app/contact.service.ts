import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { DATA } from './data';

@Injectable()
export class ContactService {

  protected contacts:Array<Contact> = new Array<Contact>();

  constructor() {
    DATA.forEach((value) => {
      let newContact = Object.assign(new Contact, value);
      this.contacts.push(newContact);
    });
  }

  getContacts()
  {
    return this.contacts;
  }

}
