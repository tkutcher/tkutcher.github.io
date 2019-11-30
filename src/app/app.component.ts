import { Component } from '@angular/core';

interface IProfileLink {
  name: string;
  iconClass: string;
  listItemClass: string;
  hexColor: string;
  handle: string;
  link: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tkutcher-github-io';

  profiles: IProfileLink[] = [
    {
      name: "linkedin",
      iconClass: "icon-linkedin",
      listItemClass: "tk-linkedin",
      hexColor: "3b5998",
      handle: "",
      link: "https://www.linkedin.com/in/tim-kutcher-a7831416a/"
    },
    {
      name: "facebook",
      iconClass: "icon-facebook",
      listItemClass: "tk-facebook",
      hexColor: "3b5998",
      handle: "",
      link: "https://www.facebook.com/tim.kutcher.3"
    },
    {
      name: "instagram",
      iconClass: "icon-instagram",
      listItemClass: "tk-instagram",
      hexColor: "3b5998",
      handle: "@tkutcher_",
      link: "https://www.instagram.com/tkutcher_/"
    },
    {
      name: "twitter",
      iconClass: "icon-twitter",
      listItemClass: "tk-twitter",
      hexColor: "3b5998",
      handle: "@tkutcher_",
      link: "https://twitter.com/tkutcher_"
    },
    {
      name: "youtube",
      iconClass: "icon-youtube",
      listItemClass: "tk-youtube",
      hexColor: "3b5998",
      handle: "",
      link: "https://www.youtube.com/channel/UCHq9PYerV7OnYbJw5EHKQlA"
    },
    {
      name: "github",
      iconClass: "icon-github",
      listItemClass: "tk-github",
      hexColor: "3b5998",
      handle: "@tkutcher",
      link: "https://github.com/tkutcher"
    },
    {
      name: "gitlab",
      iconClass: "icon-gitlab",
      listItemClass: "tk-gitlab",
      hexColor: "3b5998",
      handle: "@tkutcher",
      link: "https://gitlab.com/tkutcher"
    },
    {
      name: "stack-overflow",
      iconClass: "icon-stack-overflow",
      listItemClass: "tk-stack-overflow",
      hexColor: "3b5998",
      handle: "@tplusk",
      link: "https://stackoverflow.com/users/9970629/tplusk"
    },
  ]

}
