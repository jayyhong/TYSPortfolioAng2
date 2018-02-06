import { Component, AfterViewChecked } from "@angular/core";
import { ProjectService } from "./service.ts/service";
import "./app.js";

declare var initializeAnimation: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  providers: [ProjectService],
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  id: any;
  projects: any;

  constructor(private projectService: ProjectService) {
  }
  
  ngOnInit() {
    this.getAllProjects()
  }
  
  ngAfterViewChecked() {
    this.animationAdd();
  }
  
  getAllProjects() {
    this.projectService.getProjects()
      .subscribe(
        data => this.projects = data.projects,
        error => console.log('Error getting projects')
      )
  }

  animationAdd() {
    initializeAnimation();
  }

}
