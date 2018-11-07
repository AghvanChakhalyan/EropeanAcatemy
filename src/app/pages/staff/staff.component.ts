import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  public teachers = [
    {
      name: 'Hasmik',
      surname: 'Eghiazaryan',
      img: 'hasmik'
    },
    {
      name: 'Narine',
      surname: 'Azaryan',
      img: 'narine'
    },
    {
      name: 'Sahkanush',
      surname: 'Sanosyan',
      img: 'shkanush'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
