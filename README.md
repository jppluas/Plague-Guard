# Plague Guard

Plague Guard es una aplicación web diseñada para comunicarse y gestionar trampas de feromonas utilizadas para el control de plagas. La aplicación permite a los usuarios monitorizar el estado de sus trampas, recibir notificaciones sobre la actividad de plagas y realizar acciones como activar, desactivar o eliminar trampas.

## Características

- **Monitorización de trampas:** Visualiza el estado de tus trampas de feromonas.
- **Gestión de trampas:** Añade, activa, desactiva y elimina trampas fácilmente.
- **Notificaciones:** Recibe alertas sobre la actividad de plagas.
- **Información del usuario:** Gestiona tu perfil y detalles de pago.
- **Versiones de la aplicación:** Alterna entre la versión gratuita y la versión paga, eliminando anuncios en la versión paga.

## Tecnologías Utilizadas

### Frontend

- **React:** Librería para la construcción de interfaces de usuario.
- **TypeScript:** Superset de JavaScript que añade tipos estáticos.
- **Vite:** Herramienta de desarrollo rápida para proyectos web modernos.

### Librerías y Herramientas

- **Firebase:** Plataforma para el desarrollo de aplicaciones móviles y web.
  - **firebase:** Utilizada para la autenticación y la base de datos en tiempo real.
  - **react-firebase-hooks:** Hooks para trabajar con Firebase en aplicaciones React.
- **React Router:** Librería para el manejo de rutas en aplicaciones React.
  - **react-router-dom:** Versión para aplicaciones web.
- **SweetAlert:** Librería para mostrar alertas y cuadros de diálogo atractivos.
  - **sweetalert2**
- **FontAwesome:** Conjunto de iconos vectoriales y herramientas sociales.
  - **@fortawesome/fontawesome-svg-core**
  - **@fortawesome/free-solid-svg-icons**
  - **@fortawesome/react-fontawesome**

### Desarrollo

- **ESLint:** Herramienta para encontrar y arreglar problemas en el código JavaScript/TypeScript.
  - **@typescript-eslint/eslint-plugin**
  - **@typescript-eslint/parser**
  - **eslint-plugin-react-hooks**
  - **eslint-plugin-react-refresh**
- **TypeScript:** Lenguaje de programación que extiende JavaScript.
- **Vite:** Herramienta de construcción y servidor de desarrollo.

## Instalación y Uso

### Requisitos

- Node.js
- npm (o yarn)

### Pasos

1. Clona el repositorio:
   ```sh
   git clone https://github.com/tu-usuario/plague-guard.git
   cd plague-guard
   ```

2. Instala las dependencias:

   ``` sh
  npm install
    ```

3. Inicia el servidor de desarrollo:
   ``` sh
  npm run dev
   ```

Abre tu navegador y ve a http://localhost:3000.

### Scripts Disponibles
- npm run dev: Inicia el servidor de desarrollo.
- npm run build: Compila la aplicación para producción.
- npm run lint: Ejecuta ESLint para encontrar y arreglar problemas en el código.
- npm run preview: Sirve la aplicación compilada para producción.

### Estructura del Proyecto
- src/: Carpeta principal del código fuente.
- components/: Componentes React reutilizables.
- context/: Archivos para la gestión del contexto global de la aplicación.
- styles/: Archivos CSS.
- firebaseConfig.ts: Configuración de Firebase.
- App.tsx: Componente principal de la aplicación.
- main.tsx: Punto de entrada de la aplicación.

### Contribuciones
Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request en GitHub.

### Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.


