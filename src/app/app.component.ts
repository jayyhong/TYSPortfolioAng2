import { Component } from "@angular/core";
import "./app.js";
import { ProjectService } from "./service.ts/service";

declare var app: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  providers: [ProjectService],
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  id: any;
  testProjects: any;
  projects: any;
  htmlToAdd: any;
  errorMessage: string;

  constructor(private projectService: ProjectService) {

    this.projects = [
      {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
    // this.getAllProjects()
  }

  // getAllProjects() {
  //   this.projectService.getProjects()
  //     .subscribe(
  //       projects => this.projects = projects,
  //       error => this.errorMessage = <any>error
  //     );
  //     console.log(this.projects)
  // }

  // addInnerHtml(id) {
  //   for (let i = 0; i < this.projects[id + 1].designers.length; i++)
  //   this.htmlToAdd = this.projects[id + 1].designers[i].name + ": " + this.projects[id + 1].designers[i].description
  // }

}
