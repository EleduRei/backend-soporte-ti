# Sistema de Gestión de Solicitudes de Soporte TI

Backend desarrollado con NestJS para una empresa de servicios tecnológicos de la Región de Ñuble diseñado para gestionar los requerimientos de soporte de sus clientes asegurando un control ordenado de cada caso.

## Requisitos Previos
* Node.js instalado en el equipo.
* Servidor MySQL en ejecución (ejemplo XAMPP, MySQL).
* Git para el control de versiones.

## Configuración de Variables de Entorno
Cree un archivo ` .env ` en la raíz del proyecto con la siguiente estructura (reemplace con sus credenciales locales, no publique contraseñas reales en GitHub):

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD= tu contraseña de mysql o XAMPP
DB_NAME=soporte_ti

## Instalación y Ejecución
1. Instalar las dependencias del proyecto:
   ` npm install `

2. Crear una base de datos vacía en MySQL llamada ` soporte_ti `.

3. Levantar el servidor:
   ` npm run start:dev `

4. Acceder a la documentación de Swagger para probar la API:
   http://localhost:3000/api

## Endpoints Implementados
* GET /solicitudes: Lista todas las solicitudes registradas.

* GET /solicitudes/buscar: Busca solicitudes aplicando filtros por estado, prioridad y/o categoría (ejemplo `?estado=Pendiente&prioridad=Alta`).

* GET /solicitudes/:id: Consulta el detalle de una solicitud específica por su ID.

* POST /solicitudes: Registra una nueva solicitud. Aplica automáticamente el estado "Pendiente" (RN05).

* PUT /solicitudes/:id: Actualiza los datos de una solicitud existente. Bloquea el retorno de "Finalizada" a "Pendiente" (RN09).

* DELETE /solicitudes/:id: Elimina una solicitud. Bloquea la eliminación si el estado es "En Proceso" (RN08).

## Registro de Etapas de Desarrollo
* Etapa 1 - Arquitectura inicial: Creación del proyecto base con NestJS, generación del módulo, controlador, servicio y estructura principal de la aplicación.

* Etapa 2 - Persistencia y validación: Integración de TypeORM y MySQL, configuración de variables de entorno, creación de la entidad, definición de DTOs con `class-validator` y habilitación del `ValidationPipe` global.

* Etapa 3 - Funcionalidad y reglas: Implementación completa del CRUD, habilitación de la búsqueda combinada, control de errores HTTP coherentes (400, 404) y programación de las 10 reglas de negocio requeridas por el caso (RN01 a RN10).

* Etapa 4 - Pruebas y versión final: Incorporación de SwaggerModule en `/api`, habilitación de CORS, revisión técnica del código y pruebas funcionales de todos los endpoints y restricciones de estado



## Capturas de Pantalla y Evidencias de Funcionamiento

<details>
  <summary><b>1. Vista General de Swagger y Schemas DTOs (/api)</b></summary>
  <br>
  <p align="center">
    <img src="./assets/Captura de pantalla 2026-09-11 092636.png" alt="Swagger Overview" width="100%">
  </p>
</details>

<details>
  <summary><b>2. Endpoint POST /solicitudes (Crear Solicitud - Body de Entrada)</b></summary>
  <br>
  <p align="center">
    <img src="./assets/Captura de pantalla 2026-09-11 094133.png" alt="POST Body Request" width="100%">
  </p>
</details>

<details>
  <summary><b>3. Respuesta Exitosa POST /solicitudes (201 Created)</b></summary>
  <br>
  <p align="center">
    <img src="./assets/Captura de pantalla 2026-09-11 094147.png" alt="POST Response 201" width="100%">
  </p>
</details>

<details>
  <summary><b>4. Endpoint GET /solicitudes (Listar Todo)</b></summary>
  <br>
  <p align="center">
    <img src="./assets/Captura de pantalla 2026-09-11 094202.png" alt="GET All Response 200" width="100%">
  </p>
</details>

<details>
  <summary><b>5. Endpoint GET /solicitudes/buscar (Filtros Query)</b></summary>
  <br>
  <p align="center">
    <img src="./assets/Captura de pantalla 2026-09-11 094221.png" alt="GET Search Response 200" width="100%">
  </p>
</details>

<details>
  <summary><b>6. Endpoint GET /solicitudes/:id (Obtener por ID)</b></summary>
  <br>
  <p align="center">
    <img src="./assets/Captura de pantalla 2026-09-11 094257.png" alt="GET By ID Response 200" width="100%">
  </p>
</details>

<details>
  <summary><b>7. Endpoint PUT /solicitudes/:id (Actualizar Estado)</b></summary>
  <br>
  <p align="center">
    <img src="./assets/Captura de pantalla 2026-09-11 094709.png" alt="PUT Request Body" width="100%">
    <br><br>
    <img src="./assets/Captura de pantalla 2026-09-11 094723.png" alt="PUT Response 200" width="100%">
  </p>
</details>

<details>
  <summary><b>8. Endpoint DELETE /solicitudes/:id (Eliminar Solicitud)</b></summary>
  <br>
  <p align="center">
    <img src="./assets/Captura de pantalla 2026-09-11 200817.png" alt="DELETE Request Response 200" width="100%">
  </p>
</details>