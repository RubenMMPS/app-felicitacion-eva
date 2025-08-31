import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 🔴 Importa esto

type Star = {
  id: number;
  top: string; // porcentaje strings "12%"
  left: string; // percentage strings "45%"
  opened: boolean;
  title: string;
  text: string;
  img?: string; // ruta en assets si tienes imagen para la nota
};

@Component({
  selector: 'app-felicitacion-eva',
  imports: [CommonModule],
  templateUrl: './felicitacion-eva.component.html',
  styleUrl: './felicitacion-eva.component.css',
})
export class FelicitacionEvaComponent {
  // Configura aquí tus recuerdos / notas (6-8 es buena cantidad para móvil)
  stars: Star[] = [
    {
      id: 1,
      top: '12%',
      left: '18%',
      opened: false,
      title: 'Incógnita',
      text: 'Te preguntarás, que coño hace este tio hablandome ahora? La vrd no lo sé ni yo.',
      img: 'assets/fotos/foto1.jpg',
    },
    {
      id: 2,
      top: '22%',
      left: '72%',
      opened: false,
      title: 'Momento',
      text: 'Estos meses he estado con una espina clavada pensado en el momento para hablarte y supongo que aprobechando que te hago la felicitación te lo digo ya de paso.',
      img: 'assets/fotos/foto2.jpg',
    },
    {
      id: 3,
      top: '45%',
      left: '50%',
      opened: false,
      title: 'El Tema',
      text: 'La vrd cuando lo dejasteis no tenía ni idea de que hacer, no estaba seguro de como iban a ser las cosas ni de si querias cortar relación.',
      img: 'assets/fotos/foto3.jpg',
    },
    {
      id: 4,
      top: '50%',
      left: '86%',
      opened: false,
      title: 'Persona de 10',
      text: 'Pero lo cierto es que por mi parte me sigues pareciendo una persona de 10 que me gustaría mantener cerca, no te quiero perder... Te acuerdas de la felicitación que me hiciste el año pasado? me encantó porq me demostrate que valoras las cosas que hacen por ti y que te importan las personas que te rodean.',
      img: 'assets/fotos/foto4.jpg',
    },
    {
      id: 5,
      top: '68%',
      left: '20%',
      opened: false,
      title: 'Conclusión',
      text: 'En resumen, eres una persona con la que me lo paso genial y me gustaría seguir pasando tiempo contigo llendo a tomar algo de vez en cuando. No pretendo presionarte ni agobiarte, solo que sepas que me importas y que no quiero perderte.',
      img: 'assets/fotos/foto5.jpg',
    },
    {
      id: 6,
      top: '78%',
      left: '72%',
      opened: false,
      title: 'Hoy es tu día',
      text: 'Bueno que no se me olvide, ¡¡ Muchisimas felicidades preciosa !! No haria una página web para cualquiera, he escrito tantas lineás de código porq de verdad me importas y no quiero perder el contacto con una persona con la que me lo paso tan bien y ha impactado tanto en mi vida.',
      img: 'assets/fotos/foto6.jpg',
    },
  ];

  // nota abierta (null si ninguna)
  activeStar: Star | null = null;

  // control de animación temporal (clase "burst")
  burstingId: number | null = null;

  // abrir nota (se llama al hacer tap en la estrella)
  openStar(star: Star) {
    // si ya está abierta, solo la mostramos otra vez
    this.activeStar = star;
    // marcar como abierta en el array
    const found = this.stars.find((s) => s.id === star.id);
    if (found) found.opened = true;

    // animación "burst" temporal: para aplicar clase CSS durante 700ms
    this.burstingId = star.id;
    setTimeout(() => (this.burstingId = null), 700);
  }

  // cerrar nota
  closeNote() {
    this.activeStar = null;
  }

  // comprobar si ya abrió todas
  allOpened(): boolean {
    return this.stars.every((s) => s.opened);
  }

  // reiniciar (útil para testing o volver a empezar)
  reiniciar() {
    this.stars.forEach((s) => (s.opened = false));
    this.activeStar = null;
    this.burstingId = null;
  }
}
