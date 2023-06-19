import { Component, OnInit } from '@angular/core';
import { ServicesService, Region } from 'src/app/services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regiones',
  templateUrl: './regiones.component.html',
  styleUrls: ['./regiones.component.css']
})
export class RegionesComponent implements OnInit {

  region: Region={
    id:'',
    nombre:''
  };
  ListarRegiones: Region[];
  
  constructor(private servicio: ServicesService, private router: Router) { }

  ngOnInit(): void {
    this.listarRegiones();
  }

  listarRegiones(){
    this.servicio.getRegiones().subscribe(
      res =>{
        this.ListarRegiones = <any>res;
      },
      err=>{
        console.log(err)
      }
    )
  }

  deleteRegion(id:string){
    this.servicio.deleteRegion(id).subscribe(
      res =>{
        alert('Region Eliminada');
        this.listarRegiones()
      },
      err => alert(err)
    );
  }

  setRegion(){
    delete this.region.id;
    this.servicio.setRegion(this.region).subscribe(
      res =>{
        alert('Región agregada');
        this.listarRegiones()
      },
      err => alert(err)
    );
  }

  updateRegion(id:string){
    this.router.navigate(['/ModificarRegion/'+id]);
  }
}
