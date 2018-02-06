import { Component, AfterViewInit } from "@angular/core";
import { ProjectService } from "./service.ts/service";
import "./app.js";

declare var initializeAnimation: any;
declare var jquery:any;
declare var $ :any;

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
  
  //Assign this.projects with db information
  ngOnInit() {
    this.getAllProjects()
  }
  
  //Adds animation on click functionality imported from app.js file
  //fires off after view has loaded
  ngAfterViewInit() {
    setTimeout(()=> {
      this.animationStart();
      console.log("ngafterviewchecked")
    },150)
  }

  animationStart() {
    initializeAnimation();
  }
  
  //.get request to DB for projects
  getAllProjects() {
    this.projectService.getProjects()
      .subscribe(
        data => this.projects = data.projects,
        error => console.log('Error getting projects')
      )
  }


}
