import { Component, OnInit } from '@angular/core';

import { OportunidadeService } from '../oportunidade.service';

import { MessageService } from 'primeng/api';

import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-dialog-add-negociacao',
  templateUrl: './dialog-add-negociacao.component.html',
  styleUrls: ['./dialog-add-negociacao.component.css']
})
export class DialogAddNegociacaoComponent implements OnInit {

  oportunidade = {};
  oportunidades = [];

  constructor(
    private oportunidadeService: OportunidadeService,
    private messageService: MessageService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {

  }

  ngOnInit() {
  }

  consultar() {
    this.oportunidadeService.listar().subscribe(resposta => this.oportunidades = <any>resposta);
  }

  adicionar() {
    this.oportunidadeService.adicionar(this.oportunidade).subscribe(() => {
      this.oportunidade = {};
      this.consultar();

      this.messageService.add({
        severity: 'success',
        summary: 'Oportunidade adicionada com sucesso.'
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
