
## Instalacion

```bash
$ npm install
```

## Iniciando app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

Como motor de base de datos se utiliza SQLite, por lo que no es necesario instalar ninguna base de datos externa, y ya contiene datos de prueba.

## Swagger url

http://localhost:3000/api

## Uso

Para las ventas, las rutas `GET /products`, `GET /products/:id` y `POST /sales` son las que se pueden usar, las cuales son publicas.

Para las rutas de administracion, se debe usar el token de autenticacion que se genera al iniciar sesion con el usuario `david` y la contraseña `1234`.

Existe otro usuario `francisco` con contraseña `4321`, quien tiene acceso a todos los endpoints, salvo los decorados con `@Roles('admin')`.

Para loguearse, se debe usar la ruta `POST /auth/login` con el body:

```json
{
  "username": "string",
  "password": "string"
}
```

El endpoint de `POST /auth/login` devuelve un token que se debe usar en las cabeceras de las peticiones a los endpoints de administracion, usando el boton `Authorize` de swagger.

## Pendientes 

Mejorar la seguridad (por ejemplo las passwords estan en texto plano, lol), agregar tests (aunque siendo un crud, tanto sentido no tiene), etc.
