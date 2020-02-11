import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ThemeService } from './theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  isDarkMode = true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private themeService: ThemeService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.toggleTheme();
    });
  }

  toggleTheme() {
    if (this.isDarkMode) {
      this.isDarkMode = false;
      this.themeService.enableDarkMode();
    } else {
      this.isDarkMode = true;
      this.themeService.enableLightMode();
    }
  }

  logout() {
    window.localStorage.clear();
    window.sessionStorage.clear();
    this.router.navigateByUrl('');
  }

}
