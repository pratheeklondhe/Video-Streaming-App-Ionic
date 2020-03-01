import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenreEditModalPage } from './genre-edit-modal.page';

describe('GenreEditModalPage', () => {
  let component: GenreEditModalPage;
  let fixture: ComponentFixture<GenreEditModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreEditModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenreEditModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
