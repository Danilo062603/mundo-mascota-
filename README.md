# 🐶 Mundo Mascota Web

Aplicación web moderna para la compra de productos para mascotas y el agendamiento de citas veterinarias.

---

## 📖 Tabla de contenidos

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

---

## 📌 Descripción

**Mundo Mascota** es una plataforma que centraliza servicios para el cuidado de mascotas en un solo lugar:

* 🛒 Compra de productos
* 📅 Agendamiento de citas veterinarias
* 📱 Interfaz responsive
* ⚡ Experiencia rápida y sencilla

---

## ⚙️ Funcionalidades

| Función                           | Estado |
| --------------------------------- | ------ |
| Catálogo de productos             | ✅      |
| Carrito de compras (localStorage) | ✅      |
| Agendamiento de citas             | ✅      |
| Confirmación de citas             | ✅      |
| Backend con API REST              | 🔄     |
| Base de datos MySQL               | 🔄     |

---

## 🛠️ Stack Tecnológico

### Frontend

* HTML5
* CSS3 (Flexbox + Grid)
* JavaScript

### Backend

* Node.js
* Express.js

### Base de Datos

* MySQL

---

## 🧠 Arquitectura

* **Patrón:** MVC (Modelo - Vista - Controlador)
* **Estilo:** Cliente - Servidor
* **Comunicación:** API REST

---

## 📁 Estructura del Proyecto

```
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
```

---

## 🔗 Rutas y Endpoints

| Método | Endpoint           | Descripción       |
| ------ | ------------------ | ----------------- |
| GET    | /api/productos     | Obtener productos |
| GET    | /api/productos/:id | Obtener producto  |
| POST   | /api/citas         | Crear cita        |
| GET    | /api/citas         | Listar citas      |
| PUT    | /api/citas/:id     | Actualizar cita   |
| DELETE | /api/citas/:id     | Eliminar cita     |

---

## 🧾 Entidades

### Producto

```json
{
  "id": "number",
  "nombre": "string",
  "precio": "number",
  "descripcion": "string",
  "stock": "number"
}
```

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
}
```

---

## ▶️ Cómo Ejecutar

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
```

---

## 📊 Estado del Proyecto

```
🟡 Frontend: COMPLETO
🟠 Backend: EN DESARROLLO
🟢 API: FUNCIONANDO
🔴 Base de datos: EN PROCESO
```

---

## 👨‍💻 Autores

* Danilo Ramírez
* Julián Ramírez
* Luis David Correa
* Carlos Andrés Arroyave

---

## 📚 Información Académica

* **Curso:** IF2003 - Programación Web
* **Institución:** Institución Universitaria de Envigado

---

## 📝 Notas

Proyecto académico enfocado en:

* Diseño de interfaz
* Arquitectura MVC
* Desarrollo de API REST

El sistema seguirá evolucionando con autenticación y base de datos completa.
