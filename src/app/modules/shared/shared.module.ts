import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieGridComponent } from './movie-grid/movie-grid.component';
import { Top10inIndiaComponent } from './top10in-india/top10in-india.component';
import { LatestReleaseComponent } from './latest-release/latest-release.component';

export const SHARED_COMPONENTS = [
    MovieGridComponent,
    Top10inIndiaComponent,
    LatestReleaseComponent,
]

@NgModule({
    declarations: [
        ...SHARED_COMPONENTS,
    ],
    exports: [...SHARED_COMPONENTS,],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
