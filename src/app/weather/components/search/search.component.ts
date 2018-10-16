import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  public formGroup: FormGroup;

  @Input()
  public set value(city: string) {

    if (!this.formGroup) {
      return;
    }

    this.formGroup.patchValue({
      city
    });
  }

  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  public onSearch: EventEmitter<string> = new EventEmitter(null);

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      city: [null, [Validators.required]]
    });
  }

  search() {
    this.onSearch.emit(this.formGroup.value.city);
  }
}
