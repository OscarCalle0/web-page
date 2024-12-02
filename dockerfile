# Utilizar la imagen oficial de Nginx basada en Alpine Linux (ligera y rápida)
FROM nginx:alpine

# Eliminar archivos innecesarios de la imagen base para mantenerla ligera
RUN rm -rf /usr/share/nginx/html/*

# Copiar el contenido del proyecto al directorio donde Nginx sirve archivos
COPY . /usr/share/nginx/html

# Exponer el puerto 80 para que la aplicación sea accesible desde el host
EXPOSE 80

# Comando para iniciar el servidor Nginx en modo "sin demonio" (necesario para Docker)
CMD ["nginx", "-g", "daemon off;"]
