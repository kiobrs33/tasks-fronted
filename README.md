# Proyecto DEMO de tareas

Hecho por Rene Lozano Ramos

# Descripcion del proyecto
Es un proyecto CRUD de tareas

Tecnologias usadas para el fronted
    React Js
    Axios
    UseContext
    UseReducer
    Estilos con SASS y metodologia BEM
    Iconos se Fontawesome

Tecnologias para BACKED
    Java
    Spring Boot
    Para la manipulacion de datos RELACIONES se uso JPA(Java Persistence API)
    Para la comunucacion con base de datos se uso controlador MYSQL
    MySQL como base de datos


# FRONTEND
Para la conexion con la API sebe condigurar el archivo ".ENV.DEVELOPMENT", se encuentra en la raiz del proyecto ReactJs

Para instalar las modulos de la App ejecute
## `npm install`

Para ejecutar el proyecto ejecute el siguiente comando
### `npm start`


# BACKEND
Para la comunicacion correcta con la API, se debe configurar CORS en el archivo src/main/java/com/example/demo/DemoApplications
Debera escribir la URL que se podra conectar a la API

Para el BACKEND, si desea conectarse a la base de datos de su equipo debe configurar el archivo APPLICATION PROPERTIES en la carpeta src/main/resources

La base de datos ya debera estar creada y cambiar los siguiente datos
cambiar por el suyo
url = 127.0.0.1:3306/testbd

spring.datasource.url=jdbc:mysql://127.0.0.1:3306/testbd
spring.datasource.username=root
spring.datasource.password=123456
spring.jpa.hibernate.ddl-auto=update

Para ejecutar el api
## `mvnw.cmd spring-boot:run`
