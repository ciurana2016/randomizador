import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { slideInOut, fadeInOut } from './animations/app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInOut(), fadeInOut()]
})
export class AppComponent {
  /*  En que ventana nos encontramos ?
      true = Personas
      false = Preguntas
  */
  ventana = true;
  // Listas con el contenido del usuario
  personas: Array<string> = [];
  preguntas: Array<string> = [];
  // Respuesta aleatoria del programal
  persona: string;
  pregunta: string;
  // Variables para la animacion de la respuesta (ya que primero "se lo piensa")
  pensandoRespuesta = false;
  hayRespuesta = false;

  borrar(elemento: string) {
    if (this.ventana === true) {
      this.personas.splice(this.personas.indexOf(elemento), 1);
    }else {
      this.preguntas.splice(this.preguntas.indexOf(elemento), 1);
    }
  }

  onFormSubmit(form: NgForm) {
    if (this.ventana === true) {
      this.personas.push(form.value.userInput);
    }else {
      this.preguntas.push(form.value.userInput);
    }
    form.onReset();
  }

  randomizar() {
    this.persona = this.personas[Math.floor(Math.random() * this.personas.length)];
    this.pregunta = this.preguntas[Math.floor(Math.random() * this.preguntas.length)];
    this.pensandoRespuesta = true;
    setTimeout(() => {
      this.pensandoRespuesta = false;
      this.hayRespuesta = true;
    }, 2000);
  }

  cerrarRespuesta() {
    this.hayRespuesta = false;
  }

}
