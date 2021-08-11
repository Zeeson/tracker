import { Component, OnInit } from '@angular/core';
// button toggle service
import { UiService } from "../../services/ui.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router"
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Tracker Application';
  showAddTask: boolean;
  subscription: Subscription


  constructor(private uiService: UiService, private router: Router) { 
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) => this.showAddTask = value)
  }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.uiService.toggleAddTask()
  }

  hasRoute(route: string){
    return this.router.url === route
  }
}
 