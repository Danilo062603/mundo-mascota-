# 🐶 Mundo Mascota Web

Aplicación web moderna para la compra de productos para mascotas y el agendamiento de citas veterinarias.
=======
Una aplicación web moderna para la compra de productos para mascotas y agendamiento de citas veterinarias.


---

##  Tabla de contenidos

<<<<<<< HEAD
* [Descripción](#descripción)
* [Funcionalidades](#funcionalidades)
* [Stack Tecnológico](#stack-tecnológico)
* [Arquitectura](#arquitectura)
* [Estructura del Proyecto](#estructura-del-proyecto)
* [Rutas y Endpoints](#rutas-y-endpoints)
* [Entidades](#entidades)
* [Cómo Ejecutar](#cómo-ejecutar)
* [Estado del Proyecto](#estado-del-proyecto)
* [Autores](#autores)
=======
- [Descripción](#descripción)
- [Funcionalidades](#funcionalidades)
- [Stack Tecnológico](#stack-tecnológico)
- [Arquitectura](#arquitectura)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Rutas y Endpoints](#rutas-y-endpoints)
- [Entidades Principales](#entidades-principales)
- [Cómo Ejecutar](#cómo-ejecutar)
- [Estado del Proyecto](#estado-del-proyecto)
- [Autores](#autores)
>>>>>>> a12065657fa94c853e147e9a18bc376c0486b549

---

##  Descripción

<<<<<<< HEAD
**Mundo Mascota** es una plataforma que centraliza servicios para el cuidado de mascotas en un solo lugar:

* 🛒 Compra de productos
* 📅 Agendamiento de citas veterinarias
* 📱 Interfaz responsive
* ⚡ Experiencia rápida y sencilla

---

##  Funcionalidades

| Función                           | Estado |
| --------------------------------- | ------ |
| Catálogo de productos             | ✅      |
| Carrito de compras (localStorage) | ✅      |
| Agendamiento de citas             | ✅      |
| Confirmación de citas             | ✅      |
| Backend con API REST              | 🔄     |
| Base de datos MySQL               | 🔄     |
=======
**Mundo Mascota** es una plataforma integral que centraliza servicios esenciales para el cuidado de mascotas:

✅ Catálogo completo de productos  
✅ Sistema de compras (en fase de simulación)  
✅ Agendamiento de citas veterinarias  
✅ Confirmación automática de citas  
✅ Interfaz 100% responsive  

---

##  Funcionalidades Principales

| Funcionalidad | Descripción | Estado |
|---|---|---|
| 🛒 Productos | Catálogo con filtros y búsqueda | ✅ Implementado |
| 💳 Compras | Sistema simulado | 🔄 En desarrollo |
| 📅 Citas | Reserva de citas veterinarias | ✅ Implementado |
| ✔️ Confirmación | Validación de citas | ✅ Implementado |
| 📱 Responsive | Adaptado a todos los dispositivos | ✅ Implementado |
>>>>>>> a12065657fa94c853e147e9a18bc376c0486b549

---

##  Stack Tecnológico

<<<<<<< HEAD
### Frontend

* HTML5
* CSS3 (Flexbox + Grid)
* JavaScript

### Backend

* Node.js
* Express.js

### Base de Datos

* MySQL
=======
### **Frontend** (Actual)
- ✓ HTML5 (Semántico)
- ✓ CSS3 (Flexbox y Grid)
- ✓ JavaScript (Vanilla)

### **Backend** (Planeado)
- ⏳ Node.js + Express.js
- ⏳ Validación de datos
- ⏳ API REST

### **Base de Datos** (Planeado)
- ⏳ MySQL
- ⏳ Gestión de usuarios
- ⏳ Historial de compras y citas
>>>>>>> a12065657fa94c853e147e9a18bc376c0486b549

---

##  Arquitectura

<<<<<<< HEAD
* **Patrón:** MVC (Modelo - Vista - Controlador)
* **Estilo:** Cliente - Servidor
* **Comunicación:** API REST
=======
- **Patrón:** MVC (Modelo - Vista - Controlador)
- **Estilo:** Cliente - Servidor
- **Comunicación:** API REST (planeada)
>>>>>>> a12065657fa94c853e147e9a18bc376c0486b549

---

##  Estructura del Proyecto

```
<<<<<<< HEAD
mundo-mascota-main/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── productosController.js
│   │   └── citasController.js
│   ├── models/
│   │   ├── productoModel.js
│   │   └── citaModel.js
│   ├── routes/
│   │   ├── productos.js
│   │   └── citas.js
│   └── app.js
│
├── public/
│   ├── css/
│   ├── js/
│   ├── img/
│   ├── index.html
│   ├── productos.html
│   ├── citas.html
│   ├── carrito.html
│   └── confirmacion.html
│
├── data/
├── docs/
├── package.json
└── README.md
=======
mundo-mascota-web/
│
├── models/              # Definición de entidades
├── views/               # Archivos HTML
├── controllers/         # Lógica de negocio
├── public/              # Estilos e imágenes
│   ├── css/
│   ├── js/
│   └── img/
├── index.html           # Página principal
└── README.md            # Este archivo
>>>>>>> a12065657fa94c853e147e9a18bc376c0486b549
```

---

<<<<<<< HEAD
##  Rutas y Endpoints

| Método | Endpoint           | Descripción       |
| ------ | ------------------ | ----------------- |
| GET    | /api/productos     | Obtener productos |
| GET    | /api/productos/:id | Obtener producto  |
| POST   | /api/citas         | Crear cita        |
| GET    | /api/citas         | Listar citas      |
| PUT    | /api/citas/:id     | Actualizar cita   |
| DELETE | /api/citas/:id     | Eliminar cita     |

---

##  Entidades

### Producto

```json
{
  "id": "number",
  "nombre": "string",
  "precio": "number",
  "descripcion": "string",
=======
## 🖥️ Vistas Implementadas

| Vista | Descripción |
|---|---|
| 🏠 Home | Página principal con bienvenida |
| 🛍️ Productos | Listado completo de productos |
| 📝 Agendar Cita | Formulario para reservar citas |
| ✅ Confirmación | Resumen de cita agendada |

---

## 🔗 Rutas y Endpoints

| Vista | Ruta | Método | Endpoint | Descripción |
|---|---|---|---|---|
| Productos | `/productos` | GET | `/api/productos` | Obtener lista de productos |
| Detalle | `/productos/:id` | GET | `/api/productos/:id` | Obtener un producto |
| Crear Cita | `/citas` | POST | `/api/citas` | Registrar nueva cita |
| Listar Citas | `/citas` | GET | `/api/citas` | Obtener citas |
| Editar Cita | `/citas/:id` | PUT | `/api/citas/:id` | Actualizar cita |
| Cancelar | `/citas/:id` | DELETE | `/api/citas/:id` | Eliminar cita |

---

## 🧾 Entidades Principales

### **Producto**
```json
{
  "id": "string (UUID)",
  "nombre": "string (requerido)",
  "precio": "number (> 0)",
  "descripcion": "string (opcional)",
  "categoria": "string",
>>>>>>> a12065657fa94c853e147e9a18bc376c0486b549
  "stock": "number"
}
```

<<<<<<< HEAD
### Cita

```json
{
  "id": "number",
  "nombre": "string",
  "mascota": "string",
  "fecha": "date",
  "servicio": "string",
  "telefono": "string",
  "email": "string"
=======
### **Cita Veterinaria**
```json
{
  "id": "string (UUID)",
  "nombre": "string (requerido)",
  "mascota": "string (requerido)",
  "fecha": "date (requerido)",
  "servicio": "string (requerido)",
  "telefono": "string (requerido)",
  "email": "string (requerido)"
>>>>>>> a12065657fa94c853e147e9a18bc376c0486b549
}
```

---

##  Cómo Ejecutar

<<<<<<< HEAD
### 1. Clonar repositorio

```bash
git clone https://github.com/Danilo062603/mundo-mascota.git
cd mundo-mascota
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar backend

```bash
node backend/app.js
```

Servidor en:

```
http://localhost:3000
=======
### **Opción 1: Directamente en el navegador**
```bash
git clone https://github.com/Danilo062603/mundo-mascota.git
cd mundo-mascota
# Abre index.html en tu navegador
```

### **Opción 2: Con servidor local**
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# Accede a: http://localhost:8000
>>>>>>> a12065657fa94c853e147e9a18bc376c0486b549
```

---

##  Estado del Proyecto

```
<<<<<<< HEAD
🟡 Frontend: COMPLETO
🟠 Backend: EN DESARROLLO
🟢 API: FUNCIONANDO
🔴 Base de datos: EN PROCESO
=======
🟡 Fase 1: Frontend sin Backend (EN DESARROLLO)
├── ✅ Diseño de interfaz
├── ✅ Estructura HTML
├── ✅ Estilos CSS
├── 🔄 Interactividad JavaScript
└── ⏳ Integración con Backend

🟠 Fase 2: Backend (PLANEADO)
├── ⏳ Servidor Express.js
├── ⏳ Base de datos MySQL
├── ⏳ Autenticación de usuarios
└── ⏳ API REST completa
>>>>>>> a12065657fa94c853e147e9a18bc376c0486b549
```

---

##  Autores

<<<<<<< HEAD
* Danilo Ramírez
* Julián Ramírez
* Luis David Correa
* Carlos Andrés Arroyave
=======
| Nombre | Rol |
|---|---|
| **Danilo Ramírez** | Desarrollador |
| **Julián Ramírez** | Desarrollador |
| **Luis David Correa** | Desarrollador |
| **Carlos Andrés Arroyave** | Desarrollador |
>>>>>>> a12065657fa94c853e147e9a18bc376c0486b549

---

## 📚 Información Académica

<<<<<<< HEAD
* **Curso:** IF2003 - Programación Web
* **Institución:** Institución Universitaria de Envigado
=======
- **Curso:** IF2003 - Programación Web
- **Institución:** Institución Universitaria de Envigado
- **Nivel:** Primer Avance
>>>>>>> a12065657fa94c853e147e9a18bc376c0486b549

---

##  Notas

<<<<<<< HEAD
Proyecto académico enfocado en:

* Diseño de interfaz
* Arquitectura MVC
* Desarrollo de API REST

El sistema seguirá evolucionando con autenticación y base de datos completa.
=======
> Este proyecto corresponde al **primer avance del curso**, enfocado en:
> - Diseño de interfaz
> - Prototipado
> - Definición de arquitectura
> 


---

**Última actualización:** 2026-04-18 14:30:21
>>>>>>> a12065657fa94c853e147e9a18bc376c0486b549
