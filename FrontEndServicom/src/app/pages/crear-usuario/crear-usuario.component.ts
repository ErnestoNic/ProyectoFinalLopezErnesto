import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';//para FORM REACTIVOS

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  constructor(public fb: FormBuilder) { }

  formCrearUsuario = this.fb.group({
    nombre:["", [Validators.required, Validators.pattern(/^([A-Z]|[a-z])+$/)]],
    apellido:["", [Validators.required, Validators.pattern(/^([A-Z]|[a-z])+$/)]],
    tipo_doc:["", Validators.required],
    numero_doc:["", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    email:["", [Validators.required, Validators.email]],
    telefono:["", Validators.pattern(/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/)],
    fecha_nacimiento:["", [Validators.required, Validators.pattern(/^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/)]],
    password:[]
    
  });

  submit(){
    const value = this.formCrearUsuario.valid
    console.log(value)

  }

  ngOnInit(): void {
  }

}
