import { Component, input, output } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIcon } from "@angular/material/icon";
import { MatTooltip } from "@angular/material/tooltip";

@Component({
  selector: 'app-icon-select-field',
  imports: [
    MatMenuModule,
    MatIcon,
    MatTooltip
],
  templateUrl: './icon-select-field.html',
  styleUrl: './icon-select-field.scss',
})
export class IconSelectField {
  matIcon = input<string>();
  tooltip = input<string>();
  onSelect = output<any>();
  options = input.required<any[]>();
  selectedOption = input<any>();
  bindLabel = input.required<string>();
  bindValue = input.required<string>();


  onSelectOption(option: any) {
    this.onSelect.emit(option);
  }
}
