https://github.com/therojo/therojo.git

# Guillermo Rojo

:runner:

## 
Soy **Mexicano**, Ingeniero en Sistemas y actualmente desarrollo en PHP, Elixir y NodeJs, haciendo desarrollo BackEnd, uso los frameworks Yii2 y Phoenix

## Ejemplo de los alias que estoy usando actualmente, son pocos,pero ire agregando mas, estos alias puedes agregarlos en el archivo ~/.bash_aliases, el 
cual es absorbido o incluido en ~/.bashrc

```
1. alias gow="cd /var/www/html"
2. alias init_phx="cd ~/elixir2022/app; sudo iex -S mix phx.server"
3. alias godu="cd ~/dumps/"
4. alias glog="git log --oneline --decorate --graph"
5. alias cafe="cat /dev/urandom | hexdump | grep --color=always 'ca fe' | more"
6. alias mostused="history | awk '{print $2}' | sort | uniq -c | sort -nr | head -n 10"
```

*El segundo alias lo que hace es ir a un proyecto de phoenix(elixir) y arrancar el server, el alias incluye dos comandos, uno ir a la carpeta del proyecto, la cual se ejecuta o delimitia con ; y luego se ejecuto el segundo comando.*

## Lista de algunos comandos de linux aprendidos en Semana 1, Clase 1

|#|Comando|Descripción|
|--|--- |--- |
|1| Ctrl+r           | Busqueda de un comando ejecutado, se realiza en consola y busca en el history de comandos ejecutados, su uso es para no volver a teclearlo, solo lo buscas y lo ejecutas con los cambios que ocupes hacerle
|2| cat ruta_archivo \| grep palabra          | Muestra las lineas(texto) de un determinado archivo y que estas contengan la palabra especificada por grep|
|3| hexdump               | Muestra el contenido de un archivo en un formato hexadecimal, octal o decimal de acuerdo al parametro que se le especifique|
|4| ls         | Lista el contenido de la ruta actual|
|5| \| more          | Pagina los resultados del comando anterior, por ejemplo ls -la \| more|
