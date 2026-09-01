import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackroomsConfig } from '../backrooms.config';

// Tipo para los objetos interactivos
interface BackroomObject {
  id: number;
  type: 'vhs' | 'door' | 'photo' | 'memory' | 'gift';
  position: { top: string; left: string };
  size: number; // Multiplicador de tamaño (1 = tamaño normal, 1.2 = 20% más grande, etc)
  icon: string;
  title: string;
  subtitle?: string;
  content: any;
  opened: boolean;
  isActive?: boolean;
}

// Estados de la experiencia
type GameState = 'INTRO' | 'LEVEL_00' | 'EXPLORATION' | 'OBJECT_OPENED' | 'ALL_OBJECTS_FOUND' | 'EXIT' | 'FINALE';

@Component({
  selector: 'app-felicitacion-eva',
  imports: [CommonModule],
  templateUrl: './felicitacion-eva.component.html',
  styleUrl: './felicitacion-eva.component.css',
})
export class FelicitacionEvaComponent implements OnInit, OnDestroy {
  config = BackroomsConfig;
  
  // Estados
  currentState: GameState = 'INTRO';
  objects: BackroomObject[] = [];
  activeObject: BackroomObject | null = null;
  
  // Control de animaciones
  showDoorError = false;
  showDoorRevelation = false;
  objectFoundCount = 0;
  
  // Para pequeños eventos aleatorios
  randomEvent: string | null = null;
  randomEventTimeout: any;
  randomEventTimers: any[] = [];
  
  // Para timing y animaciones
  timeElapsed = '00:00:00';
  startTime: number = 0;
  timeInterval: any;
  
  // Control de transiciones
  showExitTransition = false;
  exitTransitionStep = 0;

  constructor() {
    // Inicializar objetos desde config
    this.objects = this.config.objects.map(obj => ({
      ...obj,
      opened: false,
      isActive: false,
    } as BackroomObject));
  }

  ngOnInit(): void {
    // Iniciar experiencia en pantalla INTRO
    this.currentState = 'INTRO';
    document.body.style.backgroundColor = '#1a1a1a';
    document.body.style.overflow = 'hidden';
  }

  ngOnDestroy(): void {
    // Limpiar timers
    if (this.timeInterval) clearInterval(this.timeInterval);
    this.randomEventTimers.forEach(t => clearTimeout(t));
  }

  // ============================================
  // NAVEGACIÓN DE ESTADOS
  // ============================================

  startExperience(): void {
    this.currentState = 'LEVEL_00';
    this.startTime = Date.now();
    this.startTimer();
    this.scheduleRandomEvents();
  }

  openObject(obj: BackroomObject): void {
    if (obj.opened) return; // Ya fue abierto
    
    this.activeObject = obj;
    this.currentState = 'OBJECT_OPENED';
    
    // Si es una puerta, mostrar el flujo especial
    if (obj.type === 'door') {
      this.showDoorError = true;
      setTimeout(() => {
        this.showDoorRevelation = true;
      }, 1200);
    }
  }

  closeObject(): void {
    if (this.activeObject) {
      // Marcar como abierto
      this.activeObject.opened = true;
      this.activeObject.isActive = true;
      this.objectFoundCount = this.objects.filter(o => o.opened).length;
      
      // Simular animación de "brillo" al objeto
      this.activeObject = null;
      
      // Volver a exploración
      this.currentState = 'EXPLORATION';
      this.showDoorError = false;
      this.showDoorRevelation = false;
      
      // Comprobar si todos fueron encontrados
      if (this.objectFoundCount === this.config.objects.length) {
        setTimeout(() => {
          this.currentState = 'ALL_OBJECTS_FOUND';
        }, 600);
      }
    }
  }

  exitLevel(): void {
    this.showExitTransition = true;
    this.exitTransitionStep = 0;
    
    // Transición 1: Glitch/Fade
    setTimeout(() => {
      this.exitTransitionStep = 1;
    }, 800);
    
    // Transición 2: Mostrar LEVEL COMPLETE
    setTimeout(() => {
      this.currentState = 'EXIT';
      this.showExitTransition = false;
    }, 1600);
    
    // Transición 3: Mostrar mensaje intermedio
    setTimeout(() => {
      this.currentState = 'FINALE';
      document.body.style.backgroundColor = '#f5f0e8';
    }, 4000);
  }

  getWhatsappLink(): string {
    const message = encodeURIComponent(this.config.finale.whatsappText);
    return `https://wa.me/${this.config.whatsappNumber}?text=${message}`;
  }

  // ============================================
  // UTILIDADES
  // ============================================

  startTimer(): void {
    this.timeInterval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
      const hours = Math.floor(elapsed / 3600);
      const minutes = Math.floor((elapsed % 3600) / 60);
      const seconds = elapsed % 60;
      this.timeElapsed = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
  }

  scheduleRandomEvents(): void {
    // Limpiar eventos anteriores
    this.randomEventTimers.forEach(t => clearTimeout(t));
    this.randomEventTimers = [];
    
    // Programar eventos aleatorios
    this.config.randomEvents.forEach(event => {
      const timer = setTimeout(() => {
        if (this.currentState === 'EXPLORATION' || this.currentState === 'LEVEL_00') {
          this.randomEvent = event.text;
          
          if (event.followUp) {
            setTimeout(() => {
              this.randomEvent = event.followUp || null;
              setTimeout(() => {
                this.randomEvent = null;
              }, 1500);
            }, event.followUpDelay || 1500);
          } else {
            setTimeout(() => {
              this.randomEvent = null;
            }, 2500);
          }
        }
      }, event.delay);
      
      this.randomEventTimers.push(timer);
    });
  }

  // Reiniciar (para testing)
  restart(): void {
    this.currentState = 'INTRO';
    this.objects.forEach(o => o.opened = false);
    this.activeObject = null;
    this.objectFoundCount = 0;
    this.timeElapsed = '00:00:00';
    this.showDoorError = false;
    this.showDoorRevelation = false;
    this.showExitTransition = false;
    
    if (this.timeInterval) clearInterval(this.timeInterval);
    this.randomEventTimers.forEach(t => clearTimeout(t));
    
    document.body.style.backgroundColor = '#1a1a1a';
  }
}
