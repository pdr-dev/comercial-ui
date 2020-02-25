import { Component, OnInit } from '@angular/core';
import { OportunidadeService } from '../oportunidade.service';

import { DialogService } from 'primeng/dynamicdialog';
import { DialogShowNegociacaoComponent } from '../dialog-show-negociacao/dialog-show-negociacao.component';
import { DialogEditNegociacaoComponent } from '../dialog-edit-negociacao/dialog-edit-negociacao.component';
import { DialogAddNegociacaoComponent } from '../dialog-add-negociacao/dialog-add-negociacao.component';

@Component({
  selector: 'app-painel-negociacao',
  templateUrl: './painel-negociacao.component.html',
  styleUrls: ['./painel-negociacao.component.css']
})
export class PainelNegociacaoComponent implements OnInit {

  oportunidade = {};
  oportunidades = [];

  constructor(
    private oportunidadeService: OportunidadeService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.oportunidadeService.listar().subscribe(resposta => this.oportunidades = <any>resposta);
  }

  excluir(oportunidade: any): void {
    this.oportunidades = this.oportunidades.filter(h => h !== oportunidade);
    this.oportunidadeService.excluir(oportunidade).subscribe();
  }

  showDialog(oportunidade: any): void {
    const ref = this.dialogService.open(DialogShowNegociacaoComponent, {
      data: {
        oportunidade
      },
      header: 'Oportunidade',
      width: '70%',
      contentStyle: { "max-height": "350px", "overflow": "auto" }
    });
  }

  addDialog() {
    const ref = this.dialogService.open(DialogAddNegociacaoComponent, {
      header: 'Cadastro',
      width: '70%',
      contentStyle: { "max-height": "350px", "overflow": "auto" }
    });
  }

  updateDialog(oportunidade: any) {
    const ref = this.dialogService.open(DialogEditNegociacaoComponent, {
      data: {
        oportunidade
      },
      header: 'Editar',
      width: '70%',
      contentStyle: { "max-height": "350px", "overflow": "auto" }
    });
  }

  exportReport(){
    this.oportunidadeService.exportReport();
  }

}
