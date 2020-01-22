import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts:Array<Contact>;

  constructor(private contactService:ContactService) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

}
