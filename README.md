# Paises Angular

## Cocode:
Creamos proyecto 
Creamos módulo con componentes
Para el navbar,  podemos crear el componente en un módulo o el componente "suelto"
Crear la interface, bien el módulo de países o bien en la carpeta app. O dentro de app, en una carpeta interfaces
Para home, 404error  y países guiarse por el ejemplo anterior
Paises:
Para el formulario, tomar como referencia, el tema de la receta, Para ver los datos, emplear un card de Bootstrap o una tabla de Bootstrap


## PDF Evaluación Angular
Instrucciones:
• Crear un proyecto nuevo en Angular con el nombre Países Angular. OK
• Crear un módulo con el nombre paginas. Dentro de este módulo crear los siguientes componentes: OK
home, paises, error404 OK
• Crear un componente con el nombre navbar fuera del módulo paginas. Este componente no irá en el módulo
anterior. OK
El navbar tendrá dos links de navegación, el principal irá a la página home y el otro irá a la página
países. OK

• Desarrollar la interface necesaria para dar tipo a la estructura con la que vamos a trabajar. Ver la estructura
del JSON en la url https://restcountries.com/v3.1/all Ok

Contenidos de las páginas:
• home
o Incluir un título con el texto Evaluación Angular y un subtítulo con nuestro nombre OK
• error
o Incluir un título con el texto Recurso no encontrado OK


• paises
o Distribuiremos los contenidos en dos columnas:
▪ Columna izquierda:
• Desarrollaremos un formulario con un input para introducir una moneda.
• La moneda será de introducción obligatoria. Si nos desplazamos al input y nos vamos
sin introducir localidad aparecerá un mensaje notificando que la moneda es de
introducción obligatoria. OK
• Al hacer el submit buscaremos los resultados de esa moneda en la url: OK
o https://restcountries.com/v3.1/currency/euro, siendo euro la moneda
introducida en el formulario. OK
▪ Columna derecha 
• Desarrollar una tabla en la que aparecerán los resultados de la búsqueda. Por cada
país visualizaremos el nombre, la capital, su bandera en una imagen y un enlace a
Google maps.
Extra:
• Visualizar los datos de países en una tabla de PrimeNg
• Desarrollar el input y sus validaciones con componentes PrimeNg