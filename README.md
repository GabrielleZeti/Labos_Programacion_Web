# Labos_Programacion_Web
# Gabriel Antonio Urquilla Zetino 00056122
Autenticación vs Autorización

La autenticación verifica la identidad del usuario (quién eres), como validar email y contraseña en el login. La autorización determina qué permisos tiene el usuario (qué puedes hacer), como acceder a rutas protegidas después de estar autenticado.

Función del Token JWT

El token JWT sirve para manejar el acceso seguro a la API. Después de un login exitoso, se genera un token que contiene información del usuario. Este token debe enviarse en las peticiones a endpoints protegidos para verificar que el usuario está autenticado y autorizado a usar recursos como las rutas CRUD de usuarios. JWT permite mantener sesiones sin estado en el servidor.
[Labo08.pdf](https://github.com/user-attachments/files/23280042/Labo08.pdf)
