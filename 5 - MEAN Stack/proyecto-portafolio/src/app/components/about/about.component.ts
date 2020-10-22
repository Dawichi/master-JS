import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public resume: string;
  public content: string;

  constructor() {
    this.title = 'About me';
    this.subtitle = "Hi there! I'm David Fajardo (@Dawichi) from Spain.";
    this.resume = "I'm a self-taught full-stack web developer and a titled System Admin.";
    this.content = "I love learning new technologies! I try to use best practices and gradually improve my programming skills. Currently specially focused on MEAN Stack apps and learning ReactJS.";
  }

  ngOnInit(): void {
    
  }

}
