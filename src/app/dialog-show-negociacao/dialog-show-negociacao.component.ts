import { Component, OnInit } from '@angular/core';

import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { DialogService } from 'primeng/dynamicdialog';
import { DialogEditNegociacaoComponent } from '../dialog-edit-negociacao/dialog-edit-negociacao.component';

@Component({
  selector: 'app-dialog-show-negociacao',
  templateUrl: './dialog-show-negociacao.component.html',
  styleUrls: ['./dialog-show-negociacao.component.css']
})
export class DialogShowNegociacaoComponent implements OnInit {

  oportunidade = {};

  constructor(
    private dialogService: DialogService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) { }

  ngOnInit() {
    this.oportunidade = this.config.data.oportunidade;
  }

  updateDialog(oportunidade: any) {
    this.ref.close();
    const ref = this.dialogService.open(DialogEditNegociacaoComponent, {
      data: {
        oportunidade
      },
      header: 'Editar',
      width: '70%',
      contentStyle: { "max-height": "350px", "overflow": "auto" }
    });
  }

}
