import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router'
import { BarsamComponentModule } from './barsamcomponent.module';

@NgModule({
	imports: [
		RouterModule.forChild([
			{path:'',component: BarsamComponentModule}
		])
	],
	exports: [
		RouterModule
	]
})
export class BarsamComponentRoutingModule {}
