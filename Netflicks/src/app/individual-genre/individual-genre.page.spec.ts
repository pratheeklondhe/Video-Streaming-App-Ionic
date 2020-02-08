import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndividualGenrePage } from './individual-genre.page';

describe('IndividualGenrePage', () => {
  let component: IndividualGenrePage;
  let fixture: ComponentFixture<IndividualGenrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualGenrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndividualGenrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
