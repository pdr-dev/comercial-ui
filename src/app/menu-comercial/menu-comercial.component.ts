import { Component, OnInit } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-comercial',
  templateUrl: './menu-comercial.component.html',
  styleUrls: ['./menu-comercial.component.css']
})
export class MenuComercialComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      { label: 'Início', icon: 'pi pi-home' },
      { label: 'Oportunidades', icon: 'pi pi-briefcase' },
      { label: 'Configurações', icon: 'pi pi-cog' }
    ];
  }

}
