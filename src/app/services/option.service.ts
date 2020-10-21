import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionService {
  private _optionValue = 0;

  get OptionValue(): number {
    return this._optionValue;
  }
  set OptionValue(value: number) {
    this._optionValue = value;
  }

  constructor() { }

}
