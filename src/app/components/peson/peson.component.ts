import { NotifService } from './../../services/notif-service.service';
import { Subject } from 'rxjs/Rx';
import { IPerson } from './../../models/IPerson';
import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-peson',
  templateUrl: './peson.component.html',
  styleUrls: ['./peson.component.css']
})
export class PesonComponent implements OnInit {
  listPersons : any = [];
  filtredPersons : any = [];
  PersonName : string = "";
  selectedItem : number;
  dtTrigger = new Subject();
  dtOptions: DataTables.Settings = {};
  constructor(private personService:PersonService, private notifService : NotifService) {
    this.init();
   }


  private init()
   {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10        
      };  

      this.selectedItem = -1;
      this.personService.getPersons() .then( response => {
        this.listPersons = response.json() as IPerson[];
        this.filtredPersons = this.listPersons.slice(0);
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      
      }).catch((resp) => {
        console.log(resp);
        this.notifService.error("Server Exception was raised");
      });
   }
  ngOnInit() {
  }

}
