import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  term ='';
  filterData = [
    {
      firstName: 'Celestine',
      lastName: 'Schimmel',
      address: '7687 Jadon Port'
    },
    {
      firstName: 'Johan',
      lastName: 'Ziemann PhD',
      address: '156 Streich Ports'
    },
    {
      firstName: 'Lizzie',
      lastName: 'Schumm',
      address: '5203 Jordon Center'
    },
    {
      firstName: 'Gavin',
      lastName: 'Leannon',
      address: '91057 Davion Club'
    },
    {
      firstName: 'Lucious',
      lastName: 'Leuschke',
      address: '16288 Reichel Harbor'
    }
  ]

  constructor() {}

}
