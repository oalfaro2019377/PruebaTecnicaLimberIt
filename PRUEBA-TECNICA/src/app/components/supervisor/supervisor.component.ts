import { Component, OnInit } from '@angular/core';
import { ServicesService, Supervisor } from 'src/app/services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.css']
})
export class SupervisorComponent implements OnInit {

  supervisor: Supervisor={
    id:'',
    nombre:'',
    apellido: '',
    regionId: ''
  };
  ListarSupervisores: Supervisor[];

  constructor(private servicio: ServicesService, private router: Router) { }

  ngOnInit(): void {
    this.listarSupervisores();
  }

  listarSupervisores(){
    this.servicio.getSupervisores().subscribe(
      res =>{
        this.ListarSupervisores = <any>res;
      },
      err=>{
        console.log(err)
      }
    )
  }

  deleteSupervisor(id:string){
    this.servicio.deleteSupervisor(id).subscribe(
      res =>{
        alert('Supervisor Eliminad');
        this.listarSupervisores()
      },
      err => alert(err)
    );
  }

  setSupervisor(){
    delete this.supervisor.id;
    this.servicio.setRegion(this.supervisor).subscribe(
      res =>{
        alert('Supervisor agregado');
        this.listarSupervisores()
      },
      err => alert(err)
    );
  }

  updateSupervisor(id:string){
    this.router.navigate(['/ModificarSupervisor/'+id]);
  }

}
