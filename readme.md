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
> Documenta de manera precisa las instrucciones para instalar y poner en marcha el proyecto en local (librerías, backend, frontend, servidor, base de datos, migraciones y semillas de datos, etc.)

---

## 2. Arquitectura del Sistema

### **2.1. Diagrama de arquitectura:**
![alternative text](https://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/jpsalamanca99/AI4Devs-finalproject/refs/heads/main/documentation/architectureDiagram.txt)

### **2.2. Descripción de componentes principales:**

> Describe los componentes más importantes, incluyendo la tecnología utilizada

### **2.3. Descripción de alto nivel del proyecto y estructura de ficheros**

> Representa la estructura del proyecto y explica brevemente el propósito de las carpetas principales, así como si obedece a algún patrón o arquitectura específica.

### **2.4. Infraestructura y despliegue**

> Detalla la infraestructura del proyecto, incluyendo un diagrama en el formato que creas conveniente, y explica el proceso de despliegue que se sigue

### **2.5. Seguridad**

> Enumera y describe las prácticas de seguridad principales que se han implementado en el proyecto, añadiendo ejemplos si procede

### **2.6. Tests**

> Describe brevemente algunos de los tests realizados

---

## 3. Modelo de Datos

### **3.1. Diagrama del modelo de datos:**

![alternative text](https://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/jpsalamanca99/AI4Devs-finalproject/refs/heads/main/documentation/entityRelationDiagram.txt)

### **3.2. Descripción de entidades principales:**

> Recuerda incluir el máximo detalle de cada entidad, como el nombre y tipo de cada atributo, descripción breve si procede, claves primarias y foráneas, relaciones y tipo de relación, restricciones (unique, not null…), etc.

---

## 4. Especificación de la API

> Si tu backend se comunica a través de API, describe los endpoints principales (máximo 3) en formato OpenAPI. Opcionalmente puedes añadir un ejemplo de petición y de respuesta para mayor claridad

---

## 5. Historias de Usuario

> Documenta 3 de las historias de usuario principales utilizadas durante el desarrollo, teniendo en cuenta las buenas prácticas de producto al respecto.

**Historia de Usuario 1**

**Historia de Usuario 2**

**Historia de Usuario 3**

---

## 6. Tickets de Trabajo

> Documenta 3 de los tickets de trabajo principales del desarrollo, uno de backend, uno de frontend, y uno de bases de datos. Da todo el detalle requerido para desarrollar la tarea de inicio a fin teniendo en cuenta las buenas prácticas al respecto. 

**Ticket 1**

**Ticket 2**

**Ticket 3**

---

## 7. Pull Requests

> Documenta 3 de las Pull Requests realizadas durante la ejecución del proyecto

**Pull Request 1**

**Pull Request 2**

**Pull Request 3**
