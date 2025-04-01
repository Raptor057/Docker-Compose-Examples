# Docker-Compose-Examples

Este repositorio contiene ejemplos de configuración de Docker Compose para diferentes servicios. En este caso, se incluye una configuración para SQL Server 2022.

## Estructura del Proyecto


### Archivos principales

- **`.env`**: Contiene las variables de entorno necesarias para configurar el contenedor de SQL Server.
- **`.env.example`**: Ejemplo de archivo `.env` con comentarios explicativos.
- **`docker-compose.yml`**: Archivo de configuración de Docker Compose para levantar el contenedor de SQL Server.
- **`ReadMe.MD`**: Documentación adicional sobre el comportamiento de reinicio de los contenedores.

## Configuración

1. Copia el archivo `.env.example` y renómbralo como `.env`:
   ```bash
   cp "SQL Server 2022/.env.example" "SQL Server 2022/.env"
   ```

2. Edita el archivo `.env` para configurar las siguientes variables:
   - `SA_PASSWORD`: Contraseña para el usuario `SA`. Debe cumplir con los requisitos de seguridad.
   - `SQL_VOLUME`: Ruta al directorio donde se almacenarán los datos de SQL Server.
   - `COMPOSE_PROJECT_NAME`: Nombre del proyecto para evitar conflictos con otros contenedores.

## Uso

1. Asegúrate de que Docker y Docker Compose estén instalados en tu sistema.
2. Navega al directorio `SQL Server 2022`:
   ```bash
   cd "SQL Server 2022"
   ```
3. Levanta el contenedor con el siguiente comando:
   ```bash
   docker-compose up -d
   ```
4. Verifica que el contenedor esté corriendo:
   ```bash
   docker ps
   ```

## Notas

- El contenedor utiliza la imagen oficial de SQL Server 2022: `mcr.microsoft.com/mssql/server:2022-latest`.
- El comportamiento de reinicio del contenedor está configurado como `unless-stopped`. Para más información, consulta el archivo [`ReadMe.MD`](SQL%20Server%202022/ReadMe.MD).

## Licencia

Este proyecto no tiene una licencia específica. Puedes usarlo como referencia o adaptarlo según tus necesidades.
```

Este archivo proporciona una descripción clara del proyecto, instrucciones de configuración y uso, y enlaces a los archivos relevantes. Puedes adaptarlo según sea necesario.