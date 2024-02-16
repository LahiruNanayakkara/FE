import { Component } from '@angular/core';
import { navItemsList } from '../navs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  isCollapsed = true;
  navItems = navItemsList;
}
