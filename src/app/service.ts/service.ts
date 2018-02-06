import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
  export class ProjectService{

    projects: any;

    constructor(private http:Http) {

    }

    ngOnInit() {
    }

    //IP
    baseUrl = 'http://localhost:8080/'

    //get request
    getProjects(): Observable<any> {
      return this.http
      .get(this.baseUrl + 'api/projects')
      .map((response: Response)=> response.json());
    }

    //post request to create new project from add_project.component
    createProject(projectDetails) {
      return this.http
      .post(this.baseUrl + 'api/projects', projectDetails)
      .map((response: Response) => response.json());
    }

  }