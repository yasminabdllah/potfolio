import { Component } from '@angular/core';

@Component({
  selector: 'app-servises',
  templateUrl: './servises.component.html',
  styleUrl: './servises.component.css'
})
export class ServisesComponent {
  sErveces=[
    { photo: '' ,
      name:"Custom Web Application Development",
      description:"Develop tailored web applications using Angular that meet specific business or client needs, focusing on user experience and performance."
    },
    {photo:"",
      name:"Single Page Applications (SPAs)",
    description:"Build efficient SPAs that provide a seamless user experience without full-page reloads, leveraging Angular's dynamic routing and data binding."
  },
  {photo:"",
    name:"Responsive Design Implementation",
  description:"Ensure websites and applications are fully responsive, providing an optimal viewing experience across devices, using CSS, Bootstrap, and Angular's built-in tools."
},
{ photo:"",
  name:"Performance Optimization",
description:"Optimize web applications for speed and performance by minimizing bundle sizes, lazy loading, and other Angular optimization techniques."
}

  ]

}
