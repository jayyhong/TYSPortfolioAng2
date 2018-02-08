import { Component, AfterViewInit, NgZone } from "@angular/core";
import { ProjectService } from "./service.ts/service";
import { FileUploader } from 'ng2-file-upload';
import "./app.js";

declare var initializeAnimation: any;
declare var jquery:any;
declare var $ :any;

const URL = 'http://localhost:8080/api/upload';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  providers: [ProjectService],
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  projects: any;
  errorMessage: String;
  imgPath: any;
  submitShow: any;
  arrayOfPaths = [];


  public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  constructor(private projectService: ProjectService, private zone:NgZone) {
    this.submitShow = false;
  }
  
  //Assign this.projects with db information
  ngOnInit() {
    this.getAllProjects()
        //ng2-file-upload
        this.uploader.onAfterAddingFile = (file) => {
          file.withCredentials = false;
        }
        this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
          //============Console log to see upload details================//
          console.log("ImageUpload:uploaded", item, status, response);
          console.log("UPLOAD DETAILS", response)
          //=============================================================//
          this.imgPath = ".." + response.slice(4)
          this.arrayOfPaths.push(this.imgPath);
          //===========Console log to see path images are saved========//
          console.log(this.imgPath)
          console.log(this.arrayOfPaths)
          //===========================================================//
          this.project.thumbnail = this.arrayOfPaths[0];
          this.project.screenshot = this.arrayOfPaths[1]
          this.project.mobileScreenshot = this.arrayOfPaths[2]
          if (this.arrayOfPaths.length === 3) {
            this.arrayOfPaths = [];
          }
        }
  }
  
  //Adds animation on click functionality imported from app.js file
  //fires off after view has loaded
  ngAfterViewInit() {
    setTimeout(()=> {
      this.animationStart();
    },150)
  }

  submitShowToggle() {
    this.submitShow = true;
  }

  animationStart() {
    initializeAnimation();
  }
  
  //.get request to DB for projects
  getAllProjects() {
    this.projectService.getProjects()
      .subscribe(
        data => this.projects = data.projects,
        error => console.log('Error getting projects'),
      )
  }

  submitProject() {
    this.uploader.uploadAll();
    //service to post project to Database
    this.projectService.createProject(this.project)
    .subscribe(
      data => console.log('Project Posted Success'),
      error => console.log('Error posting Project'),
    )
    //get request to rerender
    this.getAllProjects()
    setTimeout(() => {this.animationStart()}, 1000)
    //reset submit button
    this.submitShow = false;
    //reset input fields
    this.project.category = "";
    this.project.name = "";
    this.project.body = "";
    this.project.thumbnail = "";
    this.project.screenshot = "";
    this.project.mobileScreenshot ="";
    this.project.designers[0].name = "";
    this.project.designers[0].description = "";
    this.project.designers[1].name = "";
    this.project.designers[1].description = "";
  }

  //project data sent to database
  project = {
    category: null,
    name: null,
    body: null,
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
