import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatRadioModule } from '@angular/material/radio'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { FormsModule } from '@angular/forms'
import {MatSelectModule} from '@angular/material/select'

const Material = [
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatCardModule,
  MatButtonModule,
  FormsModule,
  MatSelectModule
]

@NgModule({
  declarations: [],
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
