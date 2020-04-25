import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PosterInCanvasComponent } from './component/poster-in-canvas/poster-in-canvas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'poster-in-canvas',
    pathMatch: 'full',
  },
  {
    path: 'poster-in-canvas',
    component: PosterInCanvasComponent,
    data: { title: 'Poster In Canvas' },
  },
  {
    path: 'poster-in-dom',
    redirectTo: 'poster-in-canvas',
    pathMatch: 'full',
    data: { title: 'Poster In DOM' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
