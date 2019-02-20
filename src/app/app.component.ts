import { Component } from '@angular/core';
import { Form } from  '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  title = 'app';
  nombre:string = "";
  constructor(){
    console.log("Nombre: ",this.nombre);
    
  }

  mostrar(){
    console.log("Nombre: ",this.nombre);

    if(this.nombre.length === 0){
      console.log("Está vacio");
      
    }

  }
}
