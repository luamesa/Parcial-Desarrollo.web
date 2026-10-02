# API REST de Gestión de Cursos y Películas

Backend desarrollado con **Node.js, Express y MongoDB** como proyecto académico de desarrollo web.

La aplicación implementa una API REST para la gestión de usuarios, cursos y películas, incorporando autenticación mediante **JWT**, cifrado de contraseñas con **bcryptjs**, middleware para validación de tokens y control de acceso mediante roles.

## Características

* Registro de usuarios.
* Inicio de sesión.
* Cifrado de contraseñas.
* Autenticación mediante JWT.
* Validación de tokens mediante middleware.
* Gestión de cursos.
* Gestión y consulta de películas.
* Búsqueda de películas mediante filtros.
* Control de acceso basado en roles.
* Persistencia de información mediante MongoDB y Mongoose.
* API REST organizada mediante controladores, modelos, rutas y helpers.

## Tecnologías

* **Node.js**
* **Express 5**
* **MongoDB**
* **Mongoose**
* **JavaScript**
* **JWT**
* **bcryptjs**
* **Moment.js**
* **Body Parser**
* **npm**

## Arquitectura

El proyecto utiliza una estructura organizada por responsabilidades:

```text
Parcial-Desarrollo.web/
│
├── controllers/
│   ├── course.controller.js
│   ├── movie.controller.js
│   └── users.js
│
├── helpers/
│   └── auth.js
│
├── models/
│   ├── course.model.js
│   ├── movie.model.js
│   └── users.js
│
├── routes/
│   ├── course.route.js
│   ├── movie.route.js
│   └── user.js
│
├── application.js
├── index.js
├── .env.example
├── .gitignore
├── package.json
└── package-lock.json
```

### Controllers

Contienen la lógica de las operaciones de la API:

* `users.js` — registro y autenticación de usuarios.
* `course.controller.js` — creación de cursos.
* `movie.controller.js` — creación, consulta y filtrado de películas.

### Models

Definen los esquemas utilizados por MongoDB mediante Mongoose:

* `users.js`
* `course.model.js`
* `movie.model.js`

### Routes

Definen los endpoints disponibles en la API:

* `user.js`
* `course.route.js`
* `movie.route.js`

### Helpers

`auth.js` contiene la generación y validación de tokens JWT.

## Autenticación

El sistema utiliza JWT para proteger los recursos que requieren autenticación.

El flujo es:

```text
Registro
   │
   ▼
Contraseña cifrada con bcryptjs
   │
   ▼
Login
   │
   ▼
Generación de JWT
   │
   ▼
Authorization: Bearer <token>
   │
   ▼
Middleware validateToken
   │
   ▼
Acceso a recursos protegidos
```

Los tokens incluyen información del usuario, su correo, rol y tiempo de expiración.

## Roles

Los usuarios cuentan con un campo `rol`.

El rol predeterminado es:

```text
usuario basico
```

Determinadas operaciones sobre películas verifican el rol del usuario antes de permitir la acción.

## Endpoints

### Usuarios

| Método | Endpoint           | Autenticación | Descripción                  |
| ------ | ------------------ | ------------- | ---------------------------- |
| `POST` | `/api/user/create` | No            | Registrar usuario            |
| `POST` | `/api/user/login`  | No            | Iniciar sesión y obtener JWT |

### Cursos

| Método | Endpoint      | Autenticación | Descripción    |
| ------ | ------------- | ------------- | -------------- |
| `POST` | `/api/course` | JWT           | Crear un curso |

### Películas

| Método | Endpoint             | Autenticación | Descripción                       |
| ------ | -------------------- | ------------- | --------------------------------- |
| `POST` | `/api/movies/create` | JWT + rol     | Crear una película                |
| `GET`  | `/api/movies/all`    | JWT           | Obtener todas las películas       |
| `GET`  | `/api/movies/search` | JWT           | Buscar películas mediante filtros |

### Filtros de películas

El endpoint:

```text
GET /api/movies/search
```

utiliza parámetros de consulta para filtrar películas por:

* año de lanzamiento;
* precio máximo.

Ejemplo:

```text
/api/movies/search?ano=2020&precio=50000
```

## Modelos de datos

### Usuario

```text
User
├── email
├── password
└── rol
```

El campo `password` almacena la contraseña procesada mediante bcryptjs.

### Curso

```text
Course
├── name
├── duration
└── price
```

### Película

```text
Movie
├── titulo
├── director
├── anoLanzamiento
├── productora
└── precio
```

## Configuración

### Requisitos

Para ejecutar el proyecto localmente se requiere:

* Node.js
* npm
* MongoDB

### Instalación

Clonar el repositorio:

```bash
git clone https://github.com/luamesa/Parcial-Desarrollo.web.git
```

Entrar en el proyecto:

```bash
cd Parcial-Desarrollo.web
```

Instalar dependencias:

```bash
npm install
```

### Variables de entorno

Crear un archivo `.env` basado en `.env.example`:

```env
JWT_SECRET=tu_clave_secreta
MONGODB_URI=mongodb://localhost:27017/desarrolloweb
PORT=2708
```

### Ejecución

Iniciar el servidor:

```bash
node index.js
```

Por defecto, la API se ejecuta en:

```text
http://localhost:2708
```

## Base de datos

El proyecto utiliza MongoDB como sistema de almacenamiento.

La conexión se configura mediante:

```env
MONGODB_URI
```

La aplicación utiliza Mongoose para definir los modelos y realizar operaciones sobre la base de datos.

## Seguridad

El proyecto incorpora diferentes mecanismos de seguridad:

* Contraseñas protegidas mediante bcryptjs.
* Autenticación basada en JWT.
* Middleware de validación de tokens.
* Variables sensibles mediante `.env`.
* Control de acceso mediante roles.
* `.gitignore` para evitar publicar variables de entorno y dependencias.

## Proyecto académico

Este proyecto fue desarrollado como parte del proceso académico de formación en desarrollo web.

Su objetivo es demostrar conocimientos en:

* Desarrollo de APIs REST.
* Node.js y Express.
* Bases de datos MongoDB.
* Modelado con Mongoose.
* Autenticación y autorización.
* Manejo de contraseñas.
* Middleware.
* Diseño de una arquitectura backend organizada.

## Autor

**Luis Angel Mesa Cuervo**

Estudiante de Ingeniería Informática.
