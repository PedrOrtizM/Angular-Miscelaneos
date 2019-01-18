import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private router:ActivatedRoute ) {
// para obtener el mismo parametro que se le está pasando al componente padre
      this.router.parent.params.subscribe(data =>{
        console.log("Ruta hija nuevo")
        console.log(data)
      })


   }

  ngOnInit() {
  }

}
