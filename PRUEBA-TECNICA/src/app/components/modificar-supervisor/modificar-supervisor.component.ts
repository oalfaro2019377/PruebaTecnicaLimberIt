import { Component, OnInit } from '@angular/core';
import { ServicesService, Supervisor } from 'src/app/services/services.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar-supervisor',
  templateUrl: './modificar-supervisor.component.html',
  styleUrls: ['./modificar-supervisor.component.css']
})
export class ModificarSupervisorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
