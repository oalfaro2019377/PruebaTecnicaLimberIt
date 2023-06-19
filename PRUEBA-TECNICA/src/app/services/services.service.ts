import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  url = '/api';

  constructor(private http: HttpClient) { }

  //REGIONES
  getRegiones(){
    return this.http.get(this.url+'/getRegiones');
  }

  deleteRegion(id:string){
    return this.http.delete(this.url+'/deleteSupervisor/'+id);
  }

  setRegion(region:Region){
    return this.http.post(this.url+'/setSupervisor', region);
  }

  updateRegion(id:string, region:Region){
    return this.http.put(this.url+'/updateSupervisor/'+id, region);
  }

  //SUPERVISORES
  getSupervisores(){
    return this.http.get(this.url+'/getSupervisores');
  }

  deleteSupervisor(id:string){
    return this.http.delete(this.url+'/deleteRegion/'+id);
  }

  setSupervisor(supervisor:Supervisor){
    return this.http.post(this.url+'/setRegion', supervisor);
  }

  updateSupervisor(id:string, supervisor:Supervisor){
    return this.http.put(this.url+'/updateRegion/'+id, supervisor);
  }
  //VENDEDORES
  //VENTAS
}

export interface Region{
  id: string;
  nombre: string
}

export interface Supervisor{
  id: string;
  nombre: string;
  apellido: string;
  regionId: string;
}