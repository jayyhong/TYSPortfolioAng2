import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service.ts/service';

@Component({
  selector: 'app-add-project',
  providers: [ProjectService],
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  category: String;
  name: String;
  thumbnail: String;
  screenshot: String;
  mobileScreenshot: String;
  designers: any;
  projects: any;
  errorMessage: String;

  constructor(private projectService: ProjectService) {

   }

  ngOnInit() {

  }

  submitProject() {
    //service to post project to Database
    console.log(this.project);
  }

  project = {
    category: null,
    name: null,
    thumbnail: null,
    screenshot: "",
    mobileScreenshot: "",
    designers: [
      {
        name: "",
        description: ""
      },
      {
        name: "",
        description: ""
      }
    ]
  }

}
