import { Injectable, RendererFactory2, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  renderer: Renderer2;
  
  constructor(private rendererfactory:RendererFactory2,
    @Inject(DOCUMENT) private document: Document ) { 
    this.renderer = this.rendererfactory.createRenderer(null, null);
  }

    enableDarkMode() {
      this.renderer.addClass(this.document.body, 'dark-theme');
    }

    enableLightMode() {
      this.renderer.removeClass(this.document.body, 'dark-theme');
    }

}
