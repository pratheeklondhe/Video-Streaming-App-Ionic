import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ThemeService } from './theme.service';
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  isDarkMode = true;
  darkModeColor = '#231f20';
  lightModeColor = '#fff';
  role: string;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private themeService: ThemeService,
    private router: Router,
    private event: Events
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString(this.lightModeColor);
      this.splashScreen.hide();

      this.platform.backButton.subscribeWithPriority(0 , () => {
        if (this.router.url !== '/home') {
          this.router.navigate([this.router.url]);
        }
      });

      this.toggleTheme();
      this.registerEvent();
    });
  }

  registerEvent() {
    this.event.subscribe('role', data => {
      this.role = data.role;
    });
  }

  toggleTheme() {
    if (this.isDarkMode) {
      this.isDarkMode = false;
      this.themeService.enableDarkMode();
      this.statusBar.backgroundColorByHexString(this.darkModeColor);
    } else {
      this.isDarkMode = true;
      this.themeService.enableLightMode();
      this.statusBar.backgroundColorByHexString(this.lightModeColor);
    }
  }

  logout() {
    window.localStorage.clear();
    window.sessionStorage.clear();
    this.isDarkMode = true;
    this.toggleTheme();
    // this.router.navigateByUrl('');
  }

  checkStatus() {
    return this.router.url === '/';
  }

}
