import { Component, OnInit } from '@angular/core';
import { OportunidadeService } from '../oportunidade.service';

import { MessageService } from 'primeng/api';

import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-dialog-edit-negociacao',
  templateUrl: './dialog-edit-negociacao.component.html',
  styleUrls: ['./dialog-edit-negociacao.component.css']
})
export class DialogEditNegociacaoComponent implements OnInit {

  oportunidade = {};
  oportunidades = [];

  constructor(
    private oportunidadeService: OportunidadeService,
    private messageService: MessageService,
    private dialogService: DialogService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) { }

  ngOnInit() {
    this.oportunidade = this.config.data.oportunidade;
  }

  consultar() {
    this.oportunidadeService.listar().subscribe(resposta => this.oportunidades = <any>resposta);
  }

  alterar(oportunidade: any) {
    this.oportunidadeService.alterar(oportunidade).subscribe(() => {
      this.oportunidade = {};
      this.consultar();

      this.messageService.add({
        severity: 'sucess',
        summary: 'Oportunidade alterada com sucesso.'
      });
      this.ref.close();
    },
      resposta => {
        let msg = 'Erro inesperado! Tente novamnete.';

        if (resposta.error.message) {
          msg = resposta.error.message;
        }

        this.messageService.add({
          severity: 'error',
          summary: msg
        })
      });
  }
}
