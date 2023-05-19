import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { RecetasDetailComponent } from './recetasDetail.component';
import { RecetaDetail } from '../recetasDetail';

describe('RecetasDetailComponent', () => {
  let component: RecetasDetailComponent;
  let fixture: ComponentFixture<RecetasDetailComponent>;
  let debug: DebugElement;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetasDetailComponent);
    component = fixture.componentInstance;




    for(let i = 0; i < 3; i++) {
      const receta = new RecetaDetail(

        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.sentence()
      );
      recetas.push(receta);
    }
  fixture.detectChanges();
   debug = fixture.debugElement;
});
