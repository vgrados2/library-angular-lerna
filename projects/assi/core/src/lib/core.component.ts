import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-core',
  template: `
    <p>
      core works 11!
    </p>
  `,
  styles: []
})
export class CoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
