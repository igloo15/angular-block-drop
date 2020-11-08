import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './modules/angular-material.module';
import { BlockComponent } from './components/block/block.component';
import { AreaComponent } from './components/area/area.component';
import { InputComponent } from './components/input/input.component';
import { OutputComponent } from './components/output/output.component';


@NgModule({
  declarations: [
    BlockComponent,
    AreaComponent,
    InputComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [],
  exports: [
    BlockComponent,
    AreaComponent,
    InputComponent,
    OutputComponent
  ]
})
export class BlockDropModule { }
