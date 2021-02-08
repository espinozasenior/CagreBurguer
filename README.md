# Esquina Caliente

## Preámbulo

Nos acaban de enviar un correo con una solicitud para un nuevo proyecto. Hay un
restautante que nos ha contactado porque quieren que alguien les construya una
interfaz donde puedan tomar pedidos usando una tablet.

Como punto de partida,
nos comparten el siguiente correo recibido del cliente:

> Somos **Esquina Caliente**, una cadena de comida rápida 24hrs.
>
> Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida, y para
> expandirnos necesitamos un sistema que nos ayude a tomar los pedidos de los
> clientes.
>
> Tenemos 1 menú bien sencillo:
>
> | Item                      |Precio|
> |---------------------------|------|
> | Cafe americano            |    5 |
> | Cafe con leche            |    7 |
> | Sandwich de jamón y queso |   10 |
> | Jugo natural              |    7 |

## Introducción

Partiendo de los requerimientos de negocio detallados en el correo del cliente,
nos piden construir **una interfaz que permita a los cajeros tomar los pedidos
en una tablet, y desde ahí se puedan enviar a cocina** a través de un backend del
que nos darán detalles más adelante.

El primer paso de este proyecto debe ser convertir el menú descrito por el
cliente en una estructura que podamos poner en un archivo JSON para después
_pintar_ en la pantalla.

Nuestra interfaz debe mostrar el menú, cada uno. El usuario debe poder ir eligiendo que _productos_
agregar y la interfaz debe ir mostrando el _resumen del pedido_ con el total.

## Objetivos

El objetivo principal de este proyecto es construir una
_interfaz web_ usando el _framework_ elegido (React o Vue). Todos estos
frameworks de front-end atacan el mismo problema: **cómo mantener la interfaz y
el estado sincronizados**. Así que esta experiencia espera familiarizarse con
el concepto de _estado de pantalla_, y cómo cada cambio sobre el estado se va a
ir reflejando en la interfaz (por ejemplo, cada vez que agregamos un _producto_
a un _pedido_, la interfaz debe actualizar la lista del pedido y el total).

Finalmente, la interfaz debe estar diseñada específicamente para correr en
**tablets**.

Tópicos: _react_, _redux_, _vue_, _nuxt_

## Consideraciones generales

**No es INDISPENSABLE completar la totalidad del proyecto. Si por alguna razón
no pudiste culminarlo IGUAL comunícate con nosotros para evaluar el progreso y
si por otras razones crees no poder tener el tiempo suficiente para hacerlo
(por ejemplo: tu actual trabajo te lo imposibilita) pero te crees capaz de tener
la destreza para realizarlo, IGUAL comunícate con nosotros**

La lógica del proyecto debe estar implementada completamente en TypeScript,
HTML y CSS y empaquetada de manera automatizada.
Debes elegir entre [React](https://reactjs.org/) o [Vue](https://vuejs.org/)

La aplicación debe ser un _Single Page App_. Los pedidos los tomaremos desde una
_tablet_, pero **no queremos una app nativa**, sino una web app que sea
**responsive**. También necesitamos botones
grandes para escoger los productos, y el estado actual del pedido siempre
visible para poder confirmar con el cliente.

La aplicación debe hacer uso de `npm-scripts` y contar con scripts `start`,
`test`, `build` y `deploy`, que se encarguen de arrancar, correr las pruebas,
empaquetar y desplegar la aplicación respectivamente.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_,
_lines_ y _branches_.

Por otro lado, la parte de la interfaz no está incluida, por lo cual, deberás de
definir la estructura de carpetas y archivos que consideres necesaria, puedes
guiarte de las convenciones del framework elegido. Por ende, los tests y el
setup necesario para ejecutarlos serán realizados por ti.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio.

## Parte obligatoria

### Definición del producto

En el `README.md` cuéntanos qué decisiones de diseño tomaste, incluye bocetos
tipo _story board_, info de despliegue e instrucciones para developers
(dependencias, instalación, tests, ...).

### UI

#### Tomar pedidos

* Ingresar nombre del cliente.
* Filtrar _menú_ por _desayuno_ y _resto del día_.
* Agregar ítem al pedido.
* Eliminar ítem del pedido.
* Mostrar _resumen_ de pedido con todos los items y el total.
* Enviar a cocina (esto debe guardar el pedido).

#### Ver/atender pedidos

* Vista de pedidos pendientes
* Marcar pedido como listo
* Ver historial de pedidos

#### Autenticación

* Inicio de sesión

### UX

* Debe **verse bien y funcionar bien en tablets**.
* Queremos botones grandes para fácil uso en pantallas táctiles (touch screens).
* Queremos el estado actual del pedido siempre visible mientras tomamos un
  pedido.
* Queremos que sea accesible y que funcione bien en tablets.

## BACKEND

El Back-End del proyecto puede estar desarrollado en **Node (Nest.js es un plus) o Java (Spring Boot es una plus)**. Si crees conveniente basar toda la información (Base de datos) a través de un JSON no hay problema, tampoco es necesario que la información se almacene permanentemente porque al final lo que más nos interesa es el aspecto Frontend y el estilo de programación backend.

## Entregables

- Debe poder ser desplegado implementando [docker-compose](https://docs.docker.com/compose/).
- Realizar un Commit de su proyecto, enviar un Pull Request al branch con su NOMBRE, y notificar a la siguiente dirección de correo electrónico **telentohumano@kambista.com**
- Crear un archivo comprimido (.zip o .rar) de su proyecto y enviar a la siguiente dirección de correo electrónico **telentohumano@kambista.com**.

## Evaluación

### Tech

| Habilidad | Nivel esperado |
|-----------|----------------|
| **JavaScript/TypeScript** | |
| Estilo | 4
| Nomenclatura/semántica | 3
| Funciones/modularidad | 3
| Estructuras de datos | 3
| Tests | 3
| **Backend** | |
| Estructura de código | 4
| Acoplamiento | 3
| Semántica | 2
| **CSS** | |
| DRY | 2
| Responsive | 2
| **SCM** | |
| Git | 2
| GitHub | 2
| **CS** | |
| Lógica | 2
| Arquitectura | 1
| Patrones/paradigmas | n/a

## Primeros pasos

1. Haz un _fork_ de este repo (en GitHub).

2. Clona tu _fork_ en tu computadora:

   ```sh
   git clone git@github.com:<tu-usuario-de-github>/kambista-esquina-caliente.git
   cd kambista-esquina-caliente
   ```

3. Crea una rama a partir de `master` utilizando su nombre completo para empezar a trabajar. Por ejemplo:

   ```sh
   git checkout -b luis-espinoza
   ```
4. Llegado a este punto ya puedes comenzar a trabajar.

## Pistas / Tips

### Frameworks / libraries

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Vue](https://vuejs.org/)
* [NestJS](https://nestjs.com/)
* [Spring Boot](https://spring.io/projects/spring-boot/)
* [docker-compose](https://docs.docker.com/compose/)

## Checklist

### General

* [ ] Producto final sigue los lineamientos del diseño.
* [ ] Estética y fluidez de los elementos y procesos.

### `README.md`

* [ ] Documenta proceso de diseño.
* [ ] Incluye info para developers (deps, instalación, uso, despliegue, testing,
  ...).

### Tests

* [ ] 70% o más en cobertura de _statements_.
* [ ] 70% o más en cobertura de _functions_.
* [ ] 70% o más en cobertura de _lines_.
* [ ] 70% o más en cobertura de _branches_.

### UI

#### Tomar pedidos

* [ ] Ingresar nombre del cliente.
* [ ] Desplegar _menú_.
* [ ] Agregar ítem al pedido.
* [ ] Eliminar ítem del pedido.
* [ ] Mostrar _resumen_ de pedido con todos los items y el total.
* [ ] Enviar a cocina.
