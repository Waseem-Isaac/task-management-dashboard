import { AbstractControl } from '@angular/forms';

export function quillRequiredValidator(control: AbstractControl) {
  const value = control.value;
  // Strip HTML tags and check if there's actual text
  const text = value?.replace(/<[^>]*>/g, '').trim();
  return text ? null : { required: true };
}