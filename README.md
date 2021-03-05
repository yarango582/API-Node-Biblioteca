# Servidor Node Biblioteca

_Proyecto servidor nodejs API con crud para sistema de biblioteca basico_

## Comenzando 🚀

_A continuación detallo el proceso para el uso del servidor_


### Pre-requisitos 📋

_Por favor verifica lo siguientes programas_

```
Postgres SQL, si eras usuario de linux:

ejecutar los siguientes comandos en la terminal

sudo apt update

sudo apt install postgresql postgresql-contrib

sudo -i -u postgres

createdb nombre_de_la_base_de_datos

Si eres usuario de Windows descargar postgres desde acá: https://www.postgresql.org/download/

Ya con Postgres instalado y la base de datos creada, vamos al siguiente paso.

```

### Instalación 🔧


_Una vez clonado el repositorio vamos a instalar las dependecias del proyecto con npm_

```
npm install
```

_Con las dependencias ya instaladas, vamos a configurar las variables de entorno,
Para esto se debe modificar el archivo .env_example_

```
Configurar las varibales de entorno dentro del archivo

DB_HOST=
DB_USERNAME=
DB_NAME=
DB=PASSWORD=
PORT=

Cambiar el nombre del archivo .env_example al siguiente: .env

```

_Ahora vamos a realizar las migraciones a la base de datos con Sequelize, para esto debemos ir a la terminal y ejecutar lo siguiente:_

```
desde la raiz del proyecto ejecutar:

sequelize-cli db:migrate

```

_Debemos correr el servidor de nodejs:_

```
Desde la terminal ejecuta el siguiente comando:

npm run dev

Esto hará iniciar el servidor en el puerto seleccionado

```

_Para finalizar debemos ir a la siguiente ruta, la cual contiene la documentación
de cada uno de los endpoints de la API:_
```
http://127.0.0.1:PUERTO/api-docs/

Cambiar el host en caso de no usar el local

```


## Autor ✒️

* **Yeison Arango** - [yarango582](https://github.com/yarango582)
