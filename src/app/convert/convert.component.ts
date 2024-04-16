import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.css'
})
export class ConvertComponent {
  //properties length
  convertlengthfrom: number = 0;
  reultlength: number = 0;

  //methods length
  meterToFoot(): void {
    this.reultlength = this.convertlengthfrom * 3.28084;
  }

  footToMeter(): void {
    this.reultlength = this.convertlengthfrom * 0.3048;
  }


  //properties degrees
  convertdegreesfrom: number = 0;
  reultdegrees: number = 0;

  //methods degrees
  celsiusToFahrenheit(): void {
    this.reultdegrees = this.convertdegreesfrom * 1.8 + 32;
  }

  fahrenheitToCelcius(): void {
    this.reultdegrees = (this.convertdegreesfrom - 32) * 0.5556;
  }
}
