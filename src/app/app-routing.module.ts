import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PosterInCanvasComponent } from './component/poster-in-canvas/poster-in-canvas.component';
import { PosterInFabricComponent } from './component/poster-in-fabric/poster-in-fabric.component';

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
    path: 'poster-in-fabric',
    component: PosterInFabricComponent,
    data: { title: 'Poster In Fabric' },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, enableTracing: true, useHash: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
