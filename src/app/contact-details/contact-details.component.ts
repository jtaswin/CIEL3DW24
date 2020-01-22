import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  contact:Contact;

  constructor(private contactService:ContactService) { }

  ngOnInit() {
    this.contact = this.contactService.getContacts()[0];
  }

}
