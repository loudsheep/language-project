import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearningTreeComponent } from './comps/learning-tree/learning-tree.component';
import { LessonContentComponent } from './comps/lesson-content/lesson-content.component';
import { ProfileComponent } from './comps/profile/profile.component';
import { BookmarksComponent } from './comps/bookmarks/bookmarks.component';
import { DictionaryComponent } from './comps/dictionary/dictionary.component';
import { AboutComponent } from './comps/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LearningTreeComponent,
    LessonContentComponent,
    ProfileComponent,
    BookmarksComponent,
    DictionaryComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
