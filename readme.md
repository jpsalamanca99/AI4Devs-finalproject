## Índice

0. [Ficha del proyecto](#0-ficha-del-proyecto)
1. [Descripción general del producto](#1-descripción-general-del-producto)
2. [Arquitectura del sistema](#2-arquitectura-del-sistema)
3. [Modelo de datos](#3-modelo-de-datos)
4. [Especificación de la API](#4-especificación-de-la-api)
5. [Historias de usuario](#5-historias-de-usuario)
6. [Tickets de trabajo](#6-tickets-de-trabajo)
7. [Pull requests](#7-pull-requests)

---

## 0. Ficha del proyecto

### **0.1. Tu nombre completo:** Juan Pablo Salamanca Cortes

### **0.2. Nombre del proyecto:** Asistente de organización de torneos

### **0.3. Descripción breve del proyecto:** 
El proyecto busca facilitar la organización de torneos con modelo hibrido, con una fase de grupos preliminares y eliminación directa.

### **0.4. URL del proyecto:**


> Puede ser pública o privada, en cuyo caso deberás compartir los accesos de manera segura. Puedes enviarlos a [alvaro@lidr.co](mailto:alvaro@lidr.co) usando algún servicio como [onetimesecret](https://onetimesecret.com/).

### 0.5. URL o archivo comprimido del repositorio
https://github.com/jpsalamanca99/AI4Devs-finalproject


---

## 1. Descripción general del producto

### **1.1. Objetivo:**
La organizacion de torneos en el club de tenis de mesa WhiteBall en Bogotá es una tarea ardua que actualmente se lleva de forma completamente manual, basandose en el uso de plantillas impresas para su organización y control. Este proyecto busca auntomatizar dicho proceso con el fin de optimizar tiempos, mantener un control de los resultados de los jugadores y reducir la huella ecologica generada por el club.

### **1.2. Características y funcionalidades principales:**
- Organización de los torneos: se necesirta inscribir una lista inicial de jugadores a partir de la cual se debe generar automaticamente la fase de grupos del torneo, mostrando el orden de los partidos y los jugadores

- Seguimiento de los partidos: se debe permitir registrar el resultado de cada partido en puntos y sets ganados por cada jugador

- Seguimineto del torneo: a partir de los resultados de la fase de grupos se debe generar la fase de eliminación directa, en esta fase se podrá hacer el mismo seguimiento de los partidos que en la fase de grupos

- Historico de torneos: al finalizar el torneo los resultados deben ser almacenados para ser consultados posteriormente

### **1.3. Diseño y experiencia de usuario:**

> Proporciona imágenes y/o videotutorial mostrando la experiencia del usuario desde que aterriza en la aplicación, pasando por todas las funcionalidades principales.

### **1.4. Instrucciones de instalación:**

#### Base de datos
- Se debe tener instalado el programa docker-compose.
- Para crear el contenedor con la base de datos abra una terminal y navegue a la carpeta infra/db del proyecto
- Ejecute el comando <docker-compose up -d>

#### Backend
- Se debe tenr instalado node.js version 20 y npm version 10
- En una terminal navegue hasta la carpeta backend del proyecto
- Utilice el comando <npm install> para instalar las dependencias del proyecto
- Configure un archivo .env con las variables mostradas en el archivo .example.env
- Utilice el comando <npm run migrator up> para ejecutar las migraciónes en la base de datos
- Si desea generar datos de prueba utilice el comando <npm run seeder up>. Este comando creara 2 organizadores y 80 jugadores de prueba para utilizar las demás operaciones que expone el API

#### Frontend



---

## 2. Arquitectura del Sistema

### **2.1. Diagrama de arquitectura:**
![alternative text](https://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/jpsalamanca99/AI4Devs-finalproject/refs/heads/main/documentation/architectureDiagram.txt)

### **2.2. Descripción de componentes principales:**

#### Frontend
Fue hecho en node.js usando como libreria principal REACT. Consume el API expuesto por el backend para generar vistas y persistir información.

#### Backend
Fue hecho en node.js usando como librerias principales express y sequelize. Expone una API REST procesa las peticiones enviadas por el frontend.

#### Base de datos
Fue creada usando el motor PostgreSQL. Las tablas se crean utilizando migraciónes de sequelize en la aplicación backend.

### **2.3. Descripción de alto nivel del proyecto y estructura de ficheros**

El proyecto consta de cuatro carpetas principales:
- Una para el backend, que sigue una estructura basica de archivos para las rutas de la API y los controladores.
- Una carpeta para el frontend que sigue una estructura basica de proyectos basados en REACT para separar vistas de componentes.
- Una carpeta de infraestructura, que contiene los scripts de configuración del ambiente local y CI/CD
- Una carpeta de documentación que contiene los diagramas de componentes y entidad-relación al igual que la definición del API en formato swagger

### **2.4. Infraestructura y despliegue**

> Detalla la infraestructura del proyecto, incluyendo un diagrama en el formato que creas conveniente, y explica el proceso de despliegue que se sigue

### **2.5. Seguridad**

> Enumera y describe las prácticas de seguridad principales que se han implementado en el proyecto, añadiendo ejemplos si procede

---

## 3. Modelo de Datos

### **3.1. Diagrama del modelo de datos:**

![alternative text](https://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/jpsalamanca99/AI4Devs-finalproject/refs/heads/main/documentation/entityRelationDiagram.txt)

### **3.2. Descripción de entidades principales:**
# Descripción de Entidades

## Organizador (Organizer)
- **Identificador**: uuid
- **Nombre**: string
- **NID**: string (posiblemente un número de identificación)

El Organizador es la entidad responsable de crear y gestionar torneos. Cada organizador puede tener múltiples torneos asociados.

## Torneo (Tournament)
- **Identificador**: uuid
- **Nombre**: string
- **Fecha**: timestamp

Un Torneo es un evento organizado que contiene grupos, brackets y jugadores. Está asociado a un Organizador y puede tener múltiples grupos y brackets.

## Grupo (Group)
- **Identificador**: uuid
- **Número de grupo**: int
- **Mesa**: string

Un Grupo representa una subdivisión dentro de un torneo, posiblemente para la fase de grupos. Cada grupo puede contener varios jugadores.

## Bracket (Bracket)
- **Identificador**: uuid
- **Etapa**: string
- **Orden**: integer

Un Bracket representa una etapa o fase específica del torneo, como cuartos de final, semifinales, etc. Está asociado a un torneo específico.

## Jugador (Player)
- **Identificador**: uuid
- **Nombre**: string

Un Jugador es un participante en el torneo. Puede participar en múltiples torneos, pertenecer a varios grupos y jugar varios partidos.

## Partido (Match)
- **Identificador**: uuid
- **Jugador A Set 1**: int
- **Jugador A Set 2**: int
- **Jugador A Set 3**: int
- **Jugador B Set 1**: int
- **Jugador B Set 2**: int
- **Jugador B Set 3**: int

Un Partido representa un enfrentamiento entre dos jugadores. Registra los puntajes de hasta tres sets para cada jugador.

## Relaciones

1. Un Organizador puede tener muchos Torneos.
2. Un Torneo puede tener muchos Grupos.
3. Un Torneo puede tener muchos Brackets.
4. Un Torneo puede tener muchos Jugadores, y un Jugador puede participar en muchos Torneos.
5. Un Jugador puede jugar muchos Partidos, y un Partido es jugado por dos Jugadores.
6. Un Grupo puede tener muchos Jugadores, y un Jugador puede pertenecer a muchos Grupos.

Esta estructura permite una organización flexible de torneos, con la capacidad de manejar diferentes etapas (grupos y brackets) y seguir el progreso de los jugadores a través de múltiples partidos.

---

## 4. Especificación de la API

[Especificación en openAPI](documentation/apiSpecification.yml)

---

## 5. Historias de Usuario
La lista completa de historias de usuario esta detallada en el archivo prompts, aca se resumen en 3 historias de usuario principales 

**Historia de Usuario 1: Selección de jugadores**
Como organizador quiero selccionar una lista de 64 jugadores para registrarlos en el torneo, en caso de que el jugador aun no este registrado en el sistema quiero poder registrarlo, en caso de no tener 64 jugadores seleccionados los campos restantes deben llenarse con "jugadores bye".

**Historia de Usuario 2: Generación de grupos**
Como organizador quiero generar a partir deu una lista de 64 jugadores, 16 grupos de 4 jugadores cada uno y se les asignara una numero de mesa donde jugaran las partidos de la fase de cuadros.

**Historia de Usuario 3: Recolección de resultados y fase de llaves**
Como organizador quiero recolectar los resultados de los partidos de la fase de cuadros para determinar los resultados y decidir que jugadores avanzaran a la fase de llaves.

---

## 6. Tickets de Trabajo

# Ticket 1
## Replicar el modelo entidad-relación en una base de datos PostgreSQL

**ID del Ticket:** DB-001  
**Prioridad:** Alta

## Resumen
Implementar el modelo entidad-relación para el asistente de torneos en una base de datos PostgreSQL, incluyendo las tablas y sus relaciones.

## Descripción
Las siguientes entidades y sus relaciones deben ser creadas en la base de datos PostgreSQL:

1. **Organizador**
   - **Campos:**
     - `id` (UUID, Clave Primaria)
     - `name` (String, No Nulo)
     - `nid` (String, No Nulo)

2. **Torneo**
   - **Campos:**
     - `id` (UUID, Clave Primaria)
     - `name` (String, No Nulo)
     - `date` (Timestamp, No Nulo)
     - `organizer_id` (UUID, Clave Foránea que referencia a Organizador)

3. **Jugador**
   - **Campos:**
     - `id` (UUID, Clave Primaria)
     - `name` (String, No Nulo)

4. **Grupo**
   - **Campos:**
     - `id` (UUID, Clave Primaria)
     - `group_number` (Integer, No Nulo)
     - `table` (String, No Nulo)
     - `tournament_id` (UUID, Clave Foránea que referencia a Torneo)

5. **Partido**
   - **Campos:**
     - `id` (UUID, Clave Primaria)
     - `player_a_set_one` (Integer)
     - `player_a_set_two` (Integer)
     - `player_a_set_three` (Integer)
     - `player_b_set_one` (Integer)
     - `player_b_set_two` (Integer)
     - `player_b_set_three` (Integer)
     - `group_id` (UUID, Clave Foránea que referencia a Grupo)

6. **Cuadro**
   - **Campos:**
     - `id` (UUID, Clave Primaria)
     - `stage` (String, No Nulo)
     - `order` (Integer, No Nulo)
     - `tournament_id` (UUID, Clave Foránea que referencia a Torneo)

## Criterios de Aceptación
- Todas las tablas deben ser creadas con los campos y tipos de datos especificados.
- Las restricciones de clave foránea deben ser configuradas adecuadamente para hacer cumplir las relaciones.
- Se debe aplicar un indexado apropiado para mejorar el rendimiento de las consultas.
- Las migraciones deben ser documentadas para el despliegue.
- Se deben crear casos de prueba para verificar la estructura de las tablas.

## Notas Adicionales
- Utilizar [pgAdmin](https://www.pgadmin.org/) o una herramienta similar para la gestión de la base de datos.
- Asegurarse de que el esquema de la base de datos siga las mejores prácticas en convenciones de nombres y normalización.
- Documentar cualquier cambio o decisión tomada durante la implementación en el repositorio del proyecto.


# Ticket 2
# Desarrollar la Acción de Crear para la Entidad Jugador

**ID del Ticket:** API-002  
**Prioridad:** Alta

## Resumen
Implementar la acción "crear" para la entidad Jugador en la API del organizador de torneos utilizando Node.js, Express y Sequelize.

## Descripción
Desarrollar un endpoint de API para permitir la creación de un nuevo jugador en la base de datos. El endpoint debe validar la entrada e interactuar con la base de datos PostgreSQL a través de Sequelize.

### Endpoint
- **POST** `/api/players`

### Cuerpo de la Solicitud
La solicitud debe incluir un objeto JSON con la siguiente estructura:
```json
{
  "id": "string (UUID)",
  "name": "string (No Nulo)"
}

```
### Validación
Asegurarse de que:
- El campo nombre sea una cadena no vacía.

### Respuestas
201 Creado

En caso de creación exitosa, responder con el objeto del jugador creado:
```json
{
  "id": "string (UUID)",
  "name": "string"
}
```

400 Solicitud Incorrecta

Si la validación falla, responder con un mensaje de error:
```json
{
  "error": "Validation error message"
}
```
## Criterios de Aceptación
- El endpoint debe ser implementado y probado.
- La validación de entrada debe manejar todos los casos especificados.
- Debe haber un manejo adecuado de errores para problemas inesperados.
- Asegurarse de que las pruebas unitarias cubran la funcionalidad de creación.
## Notas Adicionales
- Utilizar Sequelize como ORM para interactuar con la base de datos PostgreSQL.
- Seguir el estilo y la estructura de código existente del proyecto.
- Documentar cualquier cambio realizado en la API o en el esquema de la base de datos.
- Actualizar Postman o la documentación de la API para incluir el nuevo endpoint.

**Ticket 3**
# Crear Vista de Lista de Jugadores en React

**ID del Ticket:** UI-003  
**Prioridad:** Media

## Resumen
Desarrollar un componente de React para mostrar una lista de jugadores registrados obtenidos de la API. Esta vista debe ser fácil de usar y permitir al organizador seleccionar jugadores para el torneo de manera sencilla.

## Descripción
Crear un componente de React que obtenga y muestre la lista de jugadores registrados desde la API. El componente debe permitir al organizador ver, buscar y seleccionar jugadores.

### Requisitos
- Obtener la lista de jugadores desde el endpoint de la API: `GET /api/players`
- Mostrar la lista en un formato de tabla con las siguientes columnas:
  - **ID**
  - **Nombre**
- Implementar una funcionalidad de búsqueda para filtrar jugadores por nombre.
- Proporcionar una casilla de verificación junto a cada jugador para su selección.
- Incluir un botón para confirmar la selección de jugadores para el torneo.

### Estructura del Componente
- **PlayerList** (Componente principal)
  - Obtiene los datos de los jugadores
  - Muestra los jugadores en una tabla
  - Implementa la funcionalidad de búsqueda y selección

### Interacción del Usuario
- Al cargar, el componente debe mostrar todos los jugadores registrados.
- La entrada de búsqueda debe filtrar la lista mostrada en tiempo real.
- Los jugadores seleccionados deben ser almacenados en el estado del componente para su posterior procesamiento.

## Criterios de Aceptación
- El componente debe obtener y mostrar correctamente los datos de los jugadores desde la API.
- La funcionalidad de búsqueda debe funcionar correctamente y actualizar la lista mostrada.
- La selección de jugadores debe reflejarse en el estado del componente.
- El código debe adherirse a la estructura y las pautas de estilo del proyecto existente.

## Notas Adicionales
- Utilizar componentes funcionales y hooks de React (por ejemplo, `useEffect`, `useState`).
- Asegurarse de manejar errores adecuadamente para la llamada a la API.
- Probar el componente por su capacidad de respuesta y usabilidad.
- Documentar cualquier gestión del estado y propiedades que se pasen a los componentes hijos.

## Referencias
- Documentación de React: [React](https://reactjs.org/)
- Axios para solicitudes a la API: [Axios](https://axios-http.com/)

---

## 7. Pull Requests

**Pull Request 1**
https://github.com/jpsalamanca99/AI4Devs-finalproject/pull/1#issue-2543690248

**Pull Request 2**
https://github.com/jpsalamanca99/AI4Devs-finalproject/pull/2