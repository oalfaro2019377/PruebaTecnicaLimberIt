import { Component, OnInit } from '@angular/core';
import { ServicesService, Region } from 'src/app/services/services.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar-region',
  templateUrl: './modificar-region.component.html',
  styleUrls: ['./modificar-region.component.css']
})
export class ModificarRegionComponent implements OnInit {

  region: Region = {
    id: '',
    nombre: ''
  };

  constructor(private servicio: ServicesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.region.id = params['id'];
      console.log(this.region.id);
    });
  }

  modificar() {
    this.servicio.updateRegion(this.region.id, this.region).subscribe(
      res => {
        alert('Región Actualizada');
        this.router.navigate(['/Regiones']);
      },
      err => alert(err)
    );
  }

}