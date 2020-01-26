import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [HeaderComponent],
    entryComponents: [],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule
    ],
    exports: [HeaderComponent]
  })
export class headermodule{}