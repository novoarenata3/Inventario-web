# Servidor web Nginx para desplegar la aplicación estática
FROM nginx:alpine

# Copia los archivos del proyecto al directorio web público de Nginx
COPY . /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Inicia el servicio Nginx
CMD ["nginx", "-g", "daemon off;"]
