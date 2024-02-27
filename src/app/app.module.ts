import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatCardModule,
  MatChipsModule,
  MatToolbarModule,
  MatListModule,
} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCardModule,
    MatChipsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
  ],

  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [MatIconRegistry],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
