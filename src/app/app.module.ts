import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

import { AppComponent } from './app.component';
import { PainelNegociacaoComponent } from './painel-negociacao/painel-negociacao.component';
import { DialogEditNegociacaoComponent } from './dialog-edit-negociacao/dialog-edit-negociacao.component';
import { DialogShowNegociacaoComponent } from './dialog-show-negociacao/dialog-show-negociacao.component';
import { DialogAddNegociacaoComponent } from './dialog-add-negociacao/dialog-add-negociacao.component';

@NgModule({
  declarations: [
    AppComponent,
    PainelNegociacaoComponent,
    DialogAddNegociacaoComponent,
    DialogEditNegociacaoComponent,
    DialogShowNegociacaoComponent,
  ],
  entryComponents: [PainelNegociacaoComponent, DialogAddNegociacaoComponent, DialogEditNegociacaoComponent, DialogShowNegociacaoComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

    TableModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    DialogModule,
    DynamicDialogModule
  ],
  providers: [MessageService, DialogService, DynamicDialogRef, DynamicDialogConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
