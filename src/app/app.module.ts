import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatsModule } from './chats/chats.module';
import { MountainSceneModule } from './components/mountain-scene/mountain-scene.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        AppRoutingModule,
        ChatsModule,
        MountainSceneModule,
        MatToolbarModule
    ]
})
export class AppModule { }
