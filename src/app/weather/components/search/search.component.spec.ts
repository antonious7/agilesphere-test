import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SearchComponent } from './search.component';

import Spy = jasmine.Spy;
import { ReactiveFormsModule } from '@angular/forms';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [
        ReactiveFormsModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit types value when search clicked', () => {
    const element: HTMLInputElement = fixture.nativeElement.querySelector('#city');
    const mockValue = 'test';

    spyOn(component.onSearch, 'emit').and.callThrough();
    element.value = mockValue;
    element.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    const button: HTMLElement = fixture.nativeElement.querySelector('button');
    button.click();

    fixture.detectChanges();

    expect(component.onSearch.emit).toHaveBeenCalledWith(mockValue);
  });
});
