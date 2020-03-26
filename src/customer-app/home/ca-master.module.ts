import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MasterComponent } from './ca-master.component';
import { HelloComponent } from './ca-hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ MasterComponent, HelloComponent ],
  bootstrap:    [ MasterComponent ]
})
export class MasterModule { }
