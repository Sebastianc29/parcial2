/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { faker } from '@faker-js/faker';
import { RecetasListComponent } from './recetasList.component';
import { HttpClientModule } from '@angular/common/http';
import { Receta } from '../recetas';
import { RecetaService } from '../recetas.service';
import { RecetaDetail } from '../recetasDetail';

describe('RecetaListComponent', () => {
  let component: RecetasListComponent;
  let fixture: ComponentFixture<RecetasListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ RecetasListComponent ],
      providers: [RecetaService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetasListComponent);
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
      component.recetas.push(receta);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 <div.col.mb-2> elements', () => {
    expect(debug.queryAll(By.css('div.col.mb-2'))).toHaveSize(3)
  });

  it('should have 3 <card.p-2> elements', () => {
    expect(debug.queryAll(By.css('div.card.p-2'))).toHaveSize(3)
  });

  it('should have 3 <img> elements', () => {
    expect(debug.queryAll(By.css('img'))).toHaveSize(3)
  });

  it('should have 3 <div.card-body> elements', () => {
    expect(debug.queryAll(By.css('div.card-body'))).toHaveSize(3)
  });
  it('should have the corresponding src to the receta image and alt to the receta name', () => {
   debug.queryAll(By.css('img')).forEach((img, i)=>{
     expect(img.attributes['src']).toEqual(
       component.recetas[i].imangen)

     expect(img.attributes['alt']).toEqual(
       component.recetas[i].nombre)
   })
 });

 it('should have h5 tag with the receta.name', () => {
   debug.queryAll(By.css('h5.card-title')).forEach((h5, i)=>{
     expect(h5.nativeElement.textContent).toContain(component.recetas[i].nombre)
   });
 });


 it('should have 2 <div.col.mb-2> elements and the deleted recetas should not exist', () => {
  const receta = component.recetas.pop()!;
  fixture.detectChanges();
  expect(debug.queryAll(By.css('div.col.mb-2'))).toHaveSize(2)

  debug.queryAll(By.css('div.col.mb-2')).forEach((selector, i)=>{
    expect(selector.nativeElement.textContent).not.toContain(receta.nombre);
  });
});

});
