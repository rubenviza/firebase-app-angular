import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAddingComponent } from './list-adding.component';

describe('ListAddingComponent', () => {
  let component: ListAddingComponent;
  let fixture: ComponentFixture<ListAddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAddingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
