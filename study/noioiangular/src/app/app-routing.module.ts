import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionComponent } from './collection/collection.component';
import { ElementComponent } from './element/element.component';

const routes: Routes = [
  {path: "element", component:ElementComponent},
  {path: "collection", component:CollectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
