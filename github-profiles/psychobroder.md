https://github.com/Psychobroder

# bootcamp Undefined Shell

Lo que aprendi en la escuela de botes es...

Comandos básicos del sistema operativo

| command | description |
| ------ | ------ |
|date: | Muestra la fecha y hora del sistema actual. |
|uptime: | Muestra el tiempo transcurrido desde que inició el equipopor última vez. |
|cal: | Muestra un calendario del mes actual. |
|df: | Muestra el espacio libre actual en el disco duro. |
|whoami: | Muestra el nombre del usuario actual. |

Comandos para el manejo decarpetas
| command | description |
| ------ | ------ |
|ls:  | Lista los archivos de la carpeta actual, o de la ruta dada. Ej. ls Documents . |
| cd: | Nos permite navegar entre carpetas. Ej. cd Documents nos ubicaríaen /Users/<usuario>/Documents . |
| pwd: | Nos nuestra la ruta absoluta del directorio actual, así podemos saberen dónde estamos ubicados. |
| mkdir: | Crea una nueva carpeta dado un nombre para esa carpeta. Ej. mkdirhola |
| cp -r: | Nos permite copiar una carpeta dada una ruta inicial y una ruta final.Ej. cp -r hola alo . |
| rm -r:  | Nos permite eliminar una carpeta dada una ruta. Ej. rm -r hola .  |

Comandos para el manejode archivos

| command | description |
| ------ | ------ |
|touch: | Crea un archivo nuevo dada una ruta y/o nombre. Ej.touch chao . |
|cat: | Imprime el contenido de un archivo dada su ruta. Ej. catchao |
| 1more: | Es muy similar a cat solo que nos permite navegar usandocontroles tipo Vim |
| cp: | Es el comando que nos permite copiar archivos dada una ruta inicial y una rutafinal.|
| 1rm: | Nos permite eliminar un archivo dada una ruta. |
| mv: | Nos permite mover un archivo o carpeta dada una ruta inicial y una ruta final.Ej. mv adios /Users/<usuario>/Downloadsmv también es el comando que nos permite cambiar el nombre de un archivo ocarpeta. Ej. mv adios bye .|

Atajos de los comandos en laterminal
| command | description |
| ------ | ------ |
|Ctrl + c: | Si queremos cancelar el comando actual o la terminal no respondepodemos hacer uso de este atajo para detenerlo.|
|Ctrl + u: | Nos permite borrar la línea actual que estemos escribiendo en la terminal.|
|Ctrl + w: | Nos permite eliminar la última palabra de los comandos que estamosescribiendo en el momento.|
|Ctrl + a: | Nos permite movernos al inicio de la línea de comandos.|
|Ctrl + e: | Nos permite movernos al final de la línea de comandos.|
|Flecha abajo: | Nos muestra el comando siguiente de nuestro historial de comandos usados.|
|Alt + b: | Nos permite movernos entre las palabras de la línea de comandos actuales haciaatrás.|
|Alt + f: | Nos permite movernos entre las palabras de la línea de comandos actuales haciaadelante.|
|Ctrl + r: | Nos permite hacer una búsqueda de comandos en el historial. Si encontramos unresultado que no es el deseado, podemos seguir presionando Ctrl + r para rotar la búsqueda.|

## Comandos alias para la terminal

Supongamos que por alguna razón queremos filtrar las carpetas de nuestro directorio deusuario dada una palabra. Esto se podría hacer haciendo uso del comando ls y grep.ls ~/ | grep <palabra>

Podríamos hacer un alias del comando anterior y este recibiría de manera dinámica el parámetro que le indiquemos.

alias findd="ls ~/ | grep $1"

### Guardar los comandos aliasde manera permanente 

Para guardarlos de manera permanente enbash debe hacerse uso del archivo.bashrc mientras que para ~ Shell debehacerse uso del archivo .zshrc .


Según tu tipo de terminal puedes ejecutar:code ~/.bashrc o code ~/.zshrc . Sí no existen dichos archivos crea un nuevo, VS Code teayudara creando dicho archivo en blanco solo debes guardar.

solo tienes que pegar tu alias en unasola linea dentro de tu archivo ~/.bashrc o~/.zshrc .# `~/.bashrc` o `~/.zshrc`alias findd="ls ~/ | grep $1"

Comandos alias recomendadosLos comandos start y dev se suelen usar mucho
| shortcut | description |
| ------ | ------ |
| npmd | alias npmd="npm run dev" | 
|npms | alias npms="npm start"|
| alias rm="trash" |Para evitar eliminar permanente los archivos|
| cl="clear" |El comando de clear se suele usar muchoalias |
| gst | Git Status alias gst="git status"|

Recursos!https://git-tower.com/blog/command-line-cheat-sheet/–https://www.shortcutfoo.com/app/dojos/command-line–https://cheatography.com/davechild/cheat-sheets/linux-command-line/



## Practica

Vamos a crear una pequeña CV en Dillinger. 

- Luego vamos a copiar dicho contenido y crearemos un nuevo archivo Markdown en nuestro HOME.

- Finalmente haremos uso de 11ty para generar el HTML de dicho Markdown.

Crear un Github Profile README

- Este debe tener una pequeña descripción tuya tipo CV.
- Añade una tabla en Markdown (Obviamente) con al menos 5 comandos de la Terminal que hayas aprendido, de forma que tenga nombre del comando y descripción en columnas separadas. 

- Añade una sección con al menos 2 comandos alias que te parezcan útiles incluyendo columna de descripción.

- (Opcional) Clona tu repositorio y ejecuta 11ty como en la practica.

https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme
