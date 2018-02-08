import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service.ts/service';
import { FileUploader } from 'ng2-file-upload';

const URL = 'http://localhost:8080/api/upload';

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
  errorMessage: String;
  testData: any;
  imgPath: any;
  
  public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  constructor(private projectService: ProjectService) {

   }

  ngOnInit() {
    //ng2-file-upload
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    }
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      console.log("ImageUpload:uploaded", item, status, response);
      console.log("UPLOAD DETAILS", response)
      this.imgPath = ".." + response.slice(4)
      console.log(this.imgPath)
      this.project.thumbnail = this.imgPath;
      console.log(this.project)
    }
  }

  submitProject() {
    //service to post project to Database
    this.projectService.createProject(this.project)
    .subscribe(
      data => console.log('Project Posted Success'),
      error => console.log('Error posting Project'),
    )
    //get request to rerender
    this.projectService.getProjects()
  }

  //project data sent to database
  project = {
    category: null,
    name: null,
    //body
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
    //next link
  }

}
