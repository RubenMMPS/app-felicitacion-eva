/**
 * CONFIGURACIÓN CENTRALIZADA DE THE BACKROOMS EXPERIENCE
 * 
 * Edita este archivo para personalizar:
 * - Nombre y mensajes
 * - Contenido de los 5 objetos
 * - Fotografías
 * - Número de WhatsApp
 * - Felicitación final
 */

export const BackroomsConfig = {
  // ============================================
  // INFORMACIÓN PERSONAL
  // ============================================
  
  name: 'Eva', // Nombre de la cumpleañera - PERSONALIZA ESTO
  whatsappNumber: '34653252303', // Número sin + - PERSONALIZA ESTO
  
  // ============================================
  // INTRO / PELÍCULA
  // ============================================
  
  intro: {
    director: 'Rubén', // Tu nombre para "UNA PELÍCULA DE..."
    title: 'THE BACKROOMS',
    subtitle: 'Una experiencia de cumpleaños',
    warning: 'Has entrado en un nivel desconocido.',
    level: 'NIVEL 00',
    buttonText: 'COMENZAR',
  },

  // ============================================
  // INTERFAZ DEL NIVEL
  // ============================================
  
  level: {
    header: 'NIVEL 00',
    recording: 'REC ●',
    objective: 'Encuentra la salida.',
  },

  // ============================================
  // EVENTO: PEQUEÑOS DETALLES DURANTE LA EXPERIENCIA
  // (Aparecen de forma aleatoria en pequeños popups)
  // ============================================
  
  randomEvents: [
    { text: '¿Estás segura de que estás sola?', delay: 8000 },
    { text: 'CORRE.', delay: 12000, followUp: 'TE VEO', followUpDelay: 1500 },
    { text: 'Hay algo detrás de ti.', delay: 15000 },
  ],

  // ============================================
  // LOS 5 OBJETOS / ARCHIVOS
  // ============================================
  
  objects: [
    {
      id: 1,
      type: 'vhs', // 'vhs' | 'door' | 'photo' | 'memory' | 'gift'
      position: { top: '15%', left: '12%' },
      size: 2, // Multiplicador de tamaño (1 = 100%, 1.2 = 120%, 0.8 = 80%, etc)
      icon: 'assets/icons/camaraa.png', // Ruta a la imagen del icono
      title: 'ARCHIVO #01',
      subtitle: 'RECUERDO ENCONTRADO',
      content: {
      text: `ARCHIVO DE VIGILANCIA #001

Se ha encontrado una grabación.

La cámara llevaba funcionando 4 horas y 37 minutos.

Durante todo ese tiempo no ocurrió absolutamente nada.

Hasta que apareciste tú.

No sabemos cómo has llegado aquí.

Pero tenemos pruebas.`,
      image: '',
    },
    },
    {
      id: 2,
      type: 'door',
      position: { top: '25%', left: '75%' },
      size: 1.1, // Multiplicador de tamaño
      icon: 'assets/icons/cucaracha.png', // Ruta a la imagen del icono
      title: 'PUERTA DESCONOCIDA',
      content: {
      prompt: '¿Quieres acercarte?',
      error: 'La cucaracha te está mirando.',
      revelation: '...y parece reconocerte.',
      text: `ARCHIVO #002

Se ha identificado una forma de vida.

Es una cucaracha.

Lleva aquí más tiempo que tú.

Según nuestros registros, parece tener más posibilidades de sobrevivir a las Backrooms.

No sabemos quién de las dos debería preocuparse.`,
      image: '',
      },
    },
    {
      id: 3,
      type: 'photo',
      position: { top: '55%', left: '50%' },
      size: 2.5, // Multiplicador de tamaño
      icon: 'assets/icons/dd.png', // Ruta a la imagen del icono
      title: 'ENTIDAD ENCONTRADA',
      subtitle: 'SE ACERCA',
  content: {
    text: `⚠️ ADVERTENCIA

Se ha detectado una presencia en este nivel.

No parece humana.

Los registros indican que esta entidad lleva tiempo
siguiendo a los visitantes del complejo.

No mires demasiado tiempo la imagen.

Y, sobre todo...

NO TE GÍRES.`,
    image: '',
  },
    },
    {
      id: 4,
      type: 'memory',
      position: { top: '65%', left: '18%' },
      size: 1, // Multiplicador de tamaño
      icon: 'assets/icons/vhs.png', // Ruta a la imagen del icono
      title: 'ARCHIVO #04',
      subtitle: 'Otro recuerdo recuperado.',
      content: {
      text: `ARCHIVO #004  
(Este párrafo es largo, sigue scrolleando hasta el final)

Entre todo este caos hemos encontrado algo inesperado.

Un recuerdo.

Una fotografía de dos supervivientes antes de conocer
los horrores de este nivel.

AÑO: 2022
UBICACIÓN: IES LAS ENCINAS
ESTADO: FELICES Y COMPLETAMENTE INOCENTES

Tras analizar la imagen se ha detectado una anomalía.

La superviviente de la derecha presenta una altura
considerablemente superior a la del superviviente de la izquierda.

Los expertos continúan investigando cómo es posible
que dos personas de la misma edad puedan presentar
semejante diferencia de tamaño.

HIPÓTESIS ACTUAL:

Ella mide bastante.

Él simplemente... no.`,
     image: 'assets/fotos/recuerdoo.jpg',
      },
    },
    {
      id: 5,
      type: 'gift',
      position: { top: '78%', left: '70%' },
      size: 2, // Multiplicador de tamaño (más grande para destacar)
      icon: 'assets/icons/rataa.png', // Ruta a la imagen del icono
      title: 'OBJETO FINAL ENCONTRADO',
      subtitle: '5 / 5',
      content: {
      text: `OBJETO FINAL IDENTIFICADO.

Después de analizar todos los datos...

hemos encontrado al responsable de que estés aquí.

La rata.

Sí.

La rata.

Ella es quien controla este nivel.

Y nos ha confirmado algo importante:

Hoy es tu cumpleaños.

Por lo tanto, ha autorizado tu salida.

No preguntes por qué.

Es mejor no saberlo.`,
      },
    },
  ],

  // ============================================
  // PANTALLA FINAL / FELICITACIÓN
  // ============================================
  
  finale: {
    // Transición
    exitText: 'SALIDA ENCONTRADA',
    exitButton: 'SALIR DEL NIVEL',
    
    // Pantalla intermedia
    levelComplete: 'NIVEL COMPLETADO',
    foundExit: 'Has encontrado la salida.',
    butSomething: '...pero había algo esperándote fuera.',
    
    // Felicitación final - El nombre se añade dinámicamente
    greeting: '¡¡ FELIZ CUMPLEAÑOS !!',
    message: `Estoy trabajando en un proyecto para ponerlo en el cv por lo que no he tenido mucho tiempo para hacer la felicitación, pero espero que te haya gustado y haya estado a la altura de lo que merece una persona como tú, no hemos quedado mucho este año pero las veces que hemos quedado me lo he pasado genial. Eres una persona maravillosa y tienes una forma de ser que hace que al menos yo me lo pase bastante bien contigo. He sacado esta idea de una de las pocas veces que hemos quedado, asique me gustaría que me dieses más ideas para el año que viene XD. Pero bueno eso muchisimas felicidades y espero que hayas pasado un día de puta madre, me alegro de tenerte como amiga y no cambiaría eso por nada. Un besito de parte del enano cabezón 🫶`,
    
    // Botones finales
    whatsappButton: '💬 ESCRÍBEME',
    whatsappText: `Me ha gustado tanto la felicitación que te voy a presentar una amiga, que te lo mereces.`,
  },

  // ============================================
  // MENSAJES AUXILIARES
  // ============================================
  
  messages: {
    objectsFound: 'Objetos encontrados:',
    allObjectsFound: '¡Todos los objetos encontrados!',
    timeUnknown: 'Tiempo desconocido',
  },
};