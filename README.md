🍳 Blog de Recetas - Backend
- 
Backend completo para un blog de recetas con sistema de autenticación y autorización por roles.

####
![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=flat)

![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white&style=flat)

![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=flat)

![MongoDB](https://img.shields.io/badge/JWT-Auth-orange)

####
🌟 Características principales
- 
👥 Roles de usuario

- Visitantes sin registro: Solo pueden ver la página de inicio
- Usuarios registrados: Pueden ver detalles de recetas
- Administradores: Acceso completo al CRUD de recetas

####
🔐 Autenticación Segura
- 
- Registro de usuarios
- JWT con clave secreta para administradores
- Contraseñas hasheadas con bcrypt
- Tokens expiran en 3 horas
- Middleware de verificación de roles
- Validación de datos con express-validator

####
📊 Base de Datos
- 
- MongoDB Atlas (cloud)
- Modelos para usuarios y recetas
- Consultas optimizadas

####
🚀 Tecnologías utilizadas
- 
- Node.js - Entorno de ejecución
- Express.js - Framework web
- MongoDB Atlas - Base de datos en la nube
- Mongoose - ODM para MongoDB
- JWT - JSON Web Tokens
- bcrypt - Encriptación de contraseñas
- CORS - Manejo de origenes cruzados
- express-validator	7.x	Validación de datos
- CORS	2.x	Cross-origin requests
- Morgan	1.x	Logging de requests


####
📦 Instalación y configuración
- 
- 1 Clonar el repositorio:
````
git clone https://github.com/Lucaspozziok64/blogRecetas-backend.git
cd tu-repo
````
- 2 Instalar dependecias:
````
npm install
````
- 
- 3 Configurar variables de entorno:
````
cp .env.example .env
````

Editar el archivo .env:
````
PORT=3000
MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/blog-recetas
JWT_SECRET=tu_clave_secreta_jwt_muy_segura
ADMIN_SECRET=clave_secreta_para_ser_admin
````

- 4 Ejecutar la aplicación:
````
# Desarrollo
npm run dev

# Producción
npm start
````

####
🚀 Despliegue en Vercel
- 
Configuración automática

- El proyecto incluye vercel.json para despliegue automático:
````
{
  "version": 2,
  "builds": [
    {
      "src": "src/app.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "src/app.js"
    }
  ]
}
````

####
🤝 Contribuir
- 
- Fork el proyecto
- Crear rama: git checkout -b feature/nueva-funcionalidad
- Commit: git commit -m 'Agregar nueva funcionalidad'
- Push: git push origin feature/nueva-funcionalidad
- Abrir Pull Request

####
👨‍💻 Autor
- 
- Lucas Figueroa
- 💼 [LinkedIn](https://linkedin.com/in/lucas-figueroa-579b0b30b)
- 📬 lukafigueroa64@gmail.com

