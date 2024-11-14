import { Component } from '@angular/core';
import { ValueChangeEvent } from '@angular/forms';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent {

  public creadores = [
    {id: 'DC Comics', desc: "DC - Comics"},
    {id: 'Marvel Comics', desc: "Marvel - Comics"},
  ];
}
