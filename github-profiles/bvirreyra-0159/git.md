# GIT DESARROLLO COLABORATIVO

## Configuración inicial

Luego de instalar se debe realizar la configuracion inicial (nombre / email).

Tres coniguraciones:

```
--system : para todos los usuarios del sistema
--global : especifica para mi usuario
--local : especifico para el repositorio de git en el que trabaje actualmente
```

```
git config --opcion user.name "Nombre"
git config --opcion user.email "email@email.com"
```

Se recomienda hacer la configuracion global y luego alguna local para un proyecto en particular

## Ejemplo de configuración:

```
git config --global user.name "Boris"
git config --global user.email "email@email.com"
```

### Cómo verifico mi configuración actual?

```
git config user.name

git config user.email

git config --list
```

### Puedo cambiar el editor de texto para Git?

```
Ejemplo para Visual Studio en Windows (es un ejemplo, hay que poner la ruta donde esté instalado en la PC de cada uno):

$ git config --global core.editor "C:\Users\[Usuario]\AppData\Local\Programs\Microsoft VS Code\Code.exe" --wait

A veces si agregan varias veces los editores, quedan todos en la configuración y hay errores. Podemos “limpiar” los editores con:

git config --unset-all core.editor
Inicializar Repositorio (en mi máquina local)
```

Tenemos que acceder a la carpeta que hayamos creado:

```
> > git init
> > Initialized empty Git repository in ....
```

Esto crea un subdirectorio llamado .git que contiene toda la informacion necesario para el seguimiento de los archivos.

## Qué es un repositorio?

Es la carpeta .git dentro de un proyecto.
Áreas de un Repositorio

GIT tiene tres estados principales: staged , modified , commited

```
staged: marco un archivo modificado para que sea un cambio en un commit
modified: cuando cambio un archivo
commited: los datos se guardan en el historial
```

Esto nos lleva a tres secciones:

[![imagen](1.avif)]

## Área de Staging (Preparación)

Para pasar un archivo a la zona de staging uso el comando add

Hay algunas opciones:

```
git add -A pasa todos los archivos modificados
git add . todos los archivos (pero no cuenta si borramo un archivo)
git add nombre_archivo paso 1 archivo solo
```

## Chequear Estado

En todo momento podemos verificar en que estado estan nuestros archivos

```
>> git status

On branch master
No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   index.html
```

![imagen](2.avif)

## Remover de Staging

Luego de realizar un cambio, podemos pasarlo a la zona de staging como ya vimos. Y si deseamos regresarlo:

```
>> git rm --cached index.html
```

Si ahora chequeamos el estado:

```
>> git status

On branch master
No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        index.html
```

## Crear un commit (Foto)

Cuando creamos un commit, generamos un registro en la historia del arbol de seguimientos de git.

```
>> git commit      #  se abre el editor y queda a la espera
```

hint: Waiting for your editor to close the file...

Podemos agregar un mensaje en el commit, guardamos el archivo, y lo cerramos:

[master (root-commit) 0dccb56] Primer commit
1 file changed, 11 insertions(+)
create mode 100644 index.html

Luego si chequeo el estado:

```
>> git status
```

On branch master
nothing to commit, working tree clean

## Commit - Versión corta

Para evitar que se abra el editor, podemos agregar una opcion al comando

```
>> git commit -m "Agregar cambio"
```

## Modificar último commit

En caso que quiera corregir el mensaje del ultimo commit

```
>> git commit --amend
```

## Para ver el historial de commits, usamos el comando log

```
>> git log
```

Hay algunas opciones para usar:

```
>> git log -n    # muestas los n ultimos commits

>> git log --oneline   # da una version simplificada de los commits
```

## Repositorio Remoto (Github)

Github es el host de almacenamiento de repositorios GIT mas grande.

Que es un Repositorio Remoto?

```
* Son versiones del proyecto que se encuentran alojados en Internet o en algun punto de la red.
* Nos va a servir no solo para llevar control del proyecto, sino para trabajar de forma colaborativa
```

![imagen](3.avif)

## Crear un Repositorio Remoto

Desde la interfaz de Github vamos a Respositories → New

```
* Elegimos el nombre y creamos el repo
* Si no elegimos agregar nada por defecto, el repo va estar vacio y github no da unos recomendados
* Primero creamos un proyecto nuevo localmente (e inicializamos git)
* Agregamos algun archivo y hacemos commit
```

```
git remote add origin https://github.com/XXX/XXXXX.git  # aca poner su direccion https
git push -u origin master
```

## Clonar un Repositorio Remoto

```
>> git clone https://github.com/usuario/nombre_repo.git
```

Para clonar crear el nombre de carpeta deseado:

```
>> git clone https://github.com/usuario/nombre_repo.git nuevo_nombre
```

## Mostrar Repositorios Remotos

Podemos listar las direcciones remotas que tengamos

```
>> git remote -v

origin  https://github.com/xxx/xxxx.git (fetch)

origin  https://github.com/xxx/xxxx.git (push)
```

## Agregar un Repositorio Remoto

```
>> git remote add [nombr][url]       # nombre se suele tomar origin por defecto
```

## Eliminar Vínculo a Repositorio Remoto

```
>> git remote rm [nombre]
```

### Cómo obtengo la información del Repositorio Remoto?

Para recuperar datos de los repositorios remotos

```
>> git fetch nombre_remoto
* Trae los cambio que haya en remoto que no tenga todavia en el local
* Este comando solo trae la informacion y la deja disponible en el repo local.
```

### Cuál es la diferencia entre fetch / pull ?

```
* git fetch me guarda los cambios en una carpeta interna oculta (origin/master )
* La podemos ver con git branch -a
* Pero esto no me agrega los cambios automaticamente.
* En cambio el comando git pull origin  realiza esa descarga de los cambio en el remoto y tambien me los agrega localmente.
```

### Cómo envío la información al Repositorio Remoto?

Cuando estamos contentos con los cambios locales (commits) , los podemos compartir al repo remoto.

```
>> git push [nombre_remoto] [nombre_rama]
```

### Ejemplo

```
>> git push origin master
```

### Comando corto:

```
>> git push   # usa por defecto origin y la rama en la que este, por defecto master
```

## Fork

Github permite a los desarrolladores colaborar en proyectos por medio de esta herramienta.

```
* Al hacer fork de un repo, se nos copia a nuestro github.
```

### Pasos

```
* Hacer fork de un repositorio
* Hacer clone local
* Crear una rama nueva
* Generar cambios y commits
* Hacer push (a nuetro repositorio)
* Abrir pull request (me da la opcion de elegir una rama en mi repositorio y una rama donde quiero hacer merge en el repositorio origina)
* El administrador del repositorio original revisara el pull request, pedira cambios o aprobara para hacer merge.
```
