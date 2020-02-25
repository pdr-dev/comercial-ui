import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Oportunidade } from './oportunidade';

@Injectable({
  providedIn: 'root'
})
export class OportunidadeService {

  apiUrl = "http://localhost:8080/oportunidades/";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  httpOptionsReport = {
    headers: new HttpHeaders({ 'Content-Type': 'application/force-download' })
  }

  constructor(private httpClient: HttpClient) { }

  listar() {
    return this.httpClient.get(this.apiUrl, this.httpOptions);
  }

  adicionar(oportunidade: any) {
    return this.httpClient.post(this.apiUrl, oportunidade, this.httpOptions);
  }

  alterar(oportunidade: any): Observable<any> {
    const id = oportunidade.id;
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.put<Oportunidade>(url, oportunidade, this.httpOptions);
  }

  excluir(oportunidade: any | number): Observable<Oportunidade> {
    const id = typeof oportunidade === 'number' ? oportunidade : oportunidade.id;
    const url = `${this.apiUrl}/${id}`;

    return this.httpClient.delete<Oportunidade>(url, this.httpOptions);
  }

  exportReport() {
    const report = "report";
    const all = "lista";
    this.httpClient.get(`${this.apiUrl}/${report}/${all}`, this.httpOptionsReport);
  }

}
