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
  errorMessage: String;
  testData: any;

  constructor(private projectService: ProjectService) {
    this.testData = [
      {
        category: "Digital",
        name: "Epson ProSense Animated Banners for BestBuy.com",
        thumbnail: "../assets/img/digital-1.jpg",
        screenshot: "../assets/img/portfolio/shared/digital-epson-best-buy-full-100.jpg",
        mobileScreenshot: "../assets/img/portfolio/shared/mobile/digital-epson-best-buy-full-100.jpg",
        designers: [
          {
            name: "Edwin Gil",
            description: "Design and layout"
          },
          {
            name: "Bryan Tan",
            description: "HTML5 development"
          }
        ],
      },
      {
        category: "Digital",
        name: "Epson Home Cinema Campaign for BestBuy.com",
        thumbnail: "../assets/img/digital-2.jpg",
        screenshot: "../assets/img/portfolio/shared/digital-epson-best-buy-landing-full-100.jpg",
        mobileScreenshot: "../assets/img/portfolio/shared/mobile/digital-epson-best-buy-landing-full-100.jpg",
        designers: [
          {
            name: "Edwin Gil",
            description: "Design and layout"
          },
          {
            name: "Bryan Tan",
            description: "HTML5 development"
          }
        ],
      },
      {
        category: "Digital",
        name: "Southern California Edison Solar & You",
        thumbnail: "../assets/img/digital-3.jpg",
        screenshot: "../assets/img/portfolio/shared/digital-sce-solar-full-100.jpg",
        mobileScreenshot: "../assets/img/portfolio/shared/mobile/digital-sce-solar-full-100.jpg",
        designers: [
          {
            name: "Edwin Gil",
            description: "Design and layout"
          },
          {
            name: "Bryan Tan",
            description: "HTML5 development, animation production, web accessibility"
          }
        ],
      },
      {
        category: "Digital",
        name: "Amazon Sony Online Experience",
        thumbnail: "../assets/img/digital-5.jpg",
        screenshot: "../assets/img/portfolio/shared/digital-amazon-sony-full-100.jpg",
        mobileScreenshot: "../assets/img/portfolio/shared/mobile/digital-amazon-sony-full-100.jpg",
        designers: [
          {
            name: "Edwin Gil",
            description: "Design and layout"
          },
          {
            name: "Bryan Tan",
            description: "HTML5 development, animation production"
          }
        ],
      },
      {
        category: "Print",
        name: "Thinfilm Annual Report",
        thumbnail: "../assets/img/digital-7.jpg",
        screenshot: "../assets/img/portfolio/shared/digital-thinfilm-full-100.jpg",
        mobileScreenshot: "../assets/img/portfolio/shared/mobile/digital-thinfilm-full-100.jpg",
        designers: [
          {
            name: "Edwin Gil",
            description: "Design and layout"
          },
          {
            name: "Bryan Tan",
            description: "Print production"
          }
        ],
      },
      {
        category: "Print",
        name: "Epson Display Solutions Ads",
        thumbnail: "../assets/img/digital-8.jpg",
        screenshot: "../assets/img/portfolio/shared/digital-epson-projector-ads-full-100.jpg",
        mobileScreenshot: "../assets/img/portfolio/shared/mobile/digital-epson-projector-ads-full-100.jpg",
        designers: [
          {
            name: "Edwin Gil",
            description: "Design and layout"
          },
          {
            name: "Bryan Tan",
            description: "Print production"
          }
        ],
      },
      {
        category: "Print",
        name: "Mopria Alliance Datasheets",
        thumbnail: "../assets/img/digital-9.jpg",
        screenshot: "../assets/img/portfolio/shared/digital-mopria-full-100.jpg",
        mobileScreenshot: "../assets/img/portfolio/shared/mobile/digital-mopria-full-100.jpg",
        designers: [
          {
            name: "Edwin Gil",
            description: "Design and layout"
          },
          {
            name: "Bryan Tan",
            description: "Print production"
          }
        ],
      },
      {
        category: "Print",
        name: "Southern California Edison Charge Ready Quarterly Report",
        thumbnail: "../assets/img/digital-11.jpg",
        screenshot: "../assets/img/portfolio/shared/digital-sce-charge-ready-full-100.jpg",
        mobileScreenshot: "../assets/img/portfolio/shared/mobile/digital-sce-charge-ready-full-100.jpg",
        designers: [
          {
            name: "Edwin Gil",
            description: "Design and layout"
          },
          {
            name: "Bryan Tan",
            description: "Print production"
          }
        ],
      },
      
    ]
   }

   

  ngOnInit() {
    // for (let i = 0; i < this.testData.length; i++) {
    //   this.submitProject(this.testData[i])
    // }
  }

  submitProject() {
    //service to post project to Database
    this.projectService.createProject(this.project)
    .subscribe(
      data => console.log('Project Posted Success'),
      error => console.log('Error posting Project')
    )
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
