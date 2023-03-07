![Foto encabezado](https://explore.cscc.edu/images/programs/full/CSCI.GAMEDV.AAS.jpg)

## Repositorio personal creado para uso del Bootcamp Full-stack JavaScript Developer

## ¡Bienvenido!
Mi nombre es _Daniel_, soy de 🇻🇪 Venezuela, **Administrador** de profesión, **Guitarrista clásico** y un **entusiasta de la informática**.

Poseo algunos conocimientos de `HTML` y `CSS` que he adquirido en cursos y de manera autodidácta; también poseo conocimientos elementales de `Mysql` y `PHP`.

Ahora, en términos más formales de trabajo, me gusta enfocarme en la automatización de **cualquier** proceso susceptible de ello, utilizando, obviamente la tecnología.

Inicio este Bootcamp gracias a [@glrodasz](https://github.com/glrodasz) con muchas expectativas positivas y presto a colaborar en lo que se pueda. 

Considero que la mejor manera de aprender algo, es **practicándolo** y **enseñándolo** a otros, así que, en este espacio, comenzaré a colocar mis notas que no son mas que  el producto de mis tropiezos y la solución a los mismos.

Estoy seguro de que podrán servirle a alguien más.

Si quieres visitar mi perfil de **GitHub** 👉 [@danielisho](https://github.com/Danielisho/pool_public)


> 📍 _Muchos te amarán por lo que eres y otros te odiarán por la misma razón, así que, **acostúmbrate**_ 📍

---



# ASIGNACIONES SEMANA 1


<a name="item0"></a>
## ÍNDICE DE ASIGNACIONES
* [Asignación 1](#item1) ➡️ Tabla en `Markdown` con al menos 5 comandos de la **terminal**.
* [Asignación 2](#item2) ➡️ Tabla con algunos comandos _Alias_ que considere pertinentes.
* [Asignación 3](#item3) ➡️ Uso del comando `11ty`.
* [Asignación 4](#item4) ➡️ Diferencia entre **Terminal Application** y **Terminal Emulator**
* [Asignación 5](#item5) ➡️ Comando `mv` ¿Por qué se usa para renombrar también?
* [Asignación 6](#item6) ➡️ Diferencias entre un Sistema de Control de versiones Distribuido y uno Centralizado 

---
<a name="item1"></a>
### Asignación  1


<details>
<summary>Tabla en `Markdown` con al menos 5 comandos de la terminal</summary>

  |COMANDO|EXPLICACIÓN|
|-------|-----------|
|`ls` <br><br> _"List"_|Lista los archivos y carpetas en el directorio actual <br> formato para usar **Indicadores**: <br><br> `ls <ruta del directorio> `: _Lista el contenido de otro      directorio_. <br><br> `ls /`: Lista el contenido del directorio principal. <br> <br> `ls ..`: para listar contenido un nivel arriba. <br><br> `ls ../..`: Para listar directorios 2 niveles arriba. <br><br> `ls ~`: Lista el contenido del directorio personal de usuario. <br><br> `ls -d */`: Lista **solo** directorios. <br><br> `ls *`: Lista el contenido del directorio y sus subdirectorios. <br><br> `ls -R`: Lista todos los archivos y directorios con sus sibdirectorios 😬 <br><br> `ls <directorio> -R`: Como el comando anterior puede tardar mucho, existe esta opción para listar todo pero de un único directorio 😅 <br><br> `ls -s`: Lista los directorios con sus tamaños. <br><br> `ls -l`: Lista el contenido de los directorios en formato lista con propiedades. `ls -lh`: Igual que el anterior pero añade el tamaño. <br><br> `ls -a`: Lista también los directorio o archivos ocultos. <br><br> `ls -l -a` , `ls -a -l` , `ls -la` , `ls -al`: Lista los directorios con información adicional incluyendo los ocultos. <br><br> `ls -t`: Lista ordenado por fecha de la última modificación. <br><br> `ls -tr`: Igual que el anterior pero invierte el orden. <br><br> `ls -S`: La lista la muestra por tamaño en orrden descendente. <br><br> `ls -Sr`: Igual que el anterior pero invierte el orden. ❗ OJO ❗ la **S** es mayúscula. <br><br> 🔥 BONUS TRACK 🔥 <br><br> `ls > mi_archivo.txt`: Imprime el resultado en un archivo. Puedo incluir todas las variantes anteriores y generar un archivo con el resultado. <br><br>|
|`pwd` <br><br>  _"Print Working Directory"_     | Muestra la ruta del directorio actual|
|`cd` <br><br> _"change directory"_ | `cd -`: Cambia al directorio anterior al directorio actual.<br><br> `cd ~`: Cambia al directorio de inicio del usuario.<br><br> `cd -P`: Se asegura de que se respeten los enlaces simbólicos y se utilice la ruta física del directorio 😕?.<br><br> |
|`cat` <br><br> "_Concatenate_"| `cat archivo.txt`: Muestra el contenido del archivo txt o varios archivos: <br><br> `cat archivo1 archivo2 archivo3` <br><br> Además de mostrar el contenido de un archivo en la salida estándar, el comando `cat` también se utiliza para concatenar archivos. <br>Para hacer esto, se utiliza el comando `cat` junto con la redirección estándar, de la siguiente manera: <br><br> `cat archivo1 archivo2 archivo3 ... > nuevo_archivo` <br><br>

  [SUBIR ⏫](#item0)
___

</details>



<a name="item2"></a>
### Asignación  2
<details>
<summary>Tabla con algunos comandos _Alias_ que considere pertinentes</summary>

Un `alias` en la terminal es un **atajo** o una **abreviación** que se puede crear para un comando largo o complejo. En lugar de escribir el comando completo cada vez que se necesite, se puede crear un `alias` corto y usar ese *alias* en su lugar.

Por ejemplo, en lugar de escribir el comando completo `git status` cada vez que se necesite verificar el estado de los archivos en **Git**, se puede crear un alias como `gs` y usar ese *alias* en su lugar. De esta manera, cuando se escriba `gs` en la terminal, se ejecutará automáticamente el comando `git status`.

Hay 2 formas de guardar los alias:
1. Una temporal, es decir, mientras se tenga iniciada la sesión en la terminal y
2. Una permanente. modificando un archivo de sistema.

##### Guardando *Alias* de manera temporal:

Simplemente se escribe el siguiente comando según la sintaxis:

`alias nuevo_alias= comando-original`
Ejemplo:

```Bash
alias ll='ls -alh'
```
Con este *alias* cada expandiremos las opciones al comando *listar archivos y carpetas* dándole más información al usuario.

##### Guardando *Alias* de manera permanente (Ubuntu):
Para guardar un alias de forma permanente en Ubuntu, se debe agregar el alias en el archivo de inicio de tu shell, en nuestro caso *Bash*.
1. Abrimos Nano (editor)

```Bash
nano ~/.bashrc
```
2. Desplazarse hasta el final del archivo y agregar una nueva línea para el nuevo *alias*. Por ejemplo, para crear un alias para el comando `ls -alh`, agregar la siguiente línea:

```Bash
alias ll='ls -alh'
```
3. Guardar los cambios y cerrar el archivo. En nano, presionando Ctrl + O para guardar y Ctrl + X para salir.
4. Para que los cambios tengan efecto en la sesión actual de la terminal, ejecutar el comando `source ~/.bashrc`. Este comando recarga el archivo de inicio de la shell Bash y aplica los cambios que se acaban de hacer.

```Bash
source ~/.bashrc
```


###### Asignación:

|COMANDO              | ALIAS   |                     EXPLICACIÓN                 |
|-------------------- | ------- |  -----------------------------------------------  |
|`ls -alh`            |`ll`     |**a** Muestra archivos ocultos <br> **l** usa formato largo para la lista <br> **h** coloca los tamaños de archivos|
|`sudo apt update && sudo apt dist-upgrade -y`| `actualizar`| Actualiza el Sistema|
|`git status`         | `gs`    | muestra el estado del directorio de trabajo y del área del entorno de ensayo|
|`cp -i`             | `cp`     | Para que siempre al copiar un archivo nos pida confirmación|
| `mv -i`            | `mv`     | Antes de sobreescribir un archivo pedirá confirmación.|
|`cd ../..`          |`.2`      |Para subir 2 niveles en la estructura de directorios.|
|`cd ../.. /..`      |`.3`      |Para subir 3 niveles en la estructura de directorios.|
|`curl -s https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py  python3 -` (*)| `fast`| Realizar test de velocidad|
<br>

(*) Este es el comando correcto:
```
curl -s https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py | python3 -
```



**TIPS**: Para listar todos los *alias* usamos el comando: `alias`

  
  [SUBIR ⏫](#item0)
___
</details>
  
  


<a name="item3"></a>
### Asignación  3
  
  <details>
<summary>Uso del comando 11ty </summary>


El comando `11ty` es una herramienta de línea de comandos para construir sitios web estáticos que se basan en plantillas HTML, CSS y JavaScript. `11ty` es una herramienta que se ejecuta en la terminal, y su objetivo principal **es convertir archivos Markdown, Nunjucks, Handlebars, Liquid, entre otros**, en archivos **HTML estáticos**.

Algunos de los comandos principales de `11ty` son:

1. `eleventy`: es el comando principal para generar un sitio web estático. Cuando ejecutas el comando `eleventy` en la terminal, `11ty` buscará los archivos de origen en el directorio actual y generará los archivos `HTML` estáticos en el directorio de destino.

2. `eleventy --serve`: este comando inicia un **servidor local** que muestra tu sitio web generado. Al ejecutar este comando, podrás ver los cambios en tiempo real a medida que los haces en los archivos fuente.

3. `eleventy --input=<directorio-de-entrada> --output=<directorio-de-salida>`: este comando te permite especificar los directorios de entrada y salida para la generación del sitio web. Por defecto, `11ty` busca los archivos fuente en el directorio actual y genera los archivos `HTML` en una <carpeta _site> en el mismo directorio. Con este comando, puedes especificar un directorio de entrada y de salida personalizado.

4. `eleventy --help`: este comando muestra la lista completa de opciones y comandos disponibles en `11ty`.


  
Se puede usar `11ty` para crear un sitio web estático y luego subirlo a un repositorio de GitHub:

1. Crear un nuevo repositorio en GitHub.

2. Clonar el repositorio en local usando el comando `git clone` en la terminal.

3. Crear un nuevo sitio web estático con `11ty`. Puedes hacerlo siguiendo los pasos anteriores 👆. <br> Por ejemplo, puedes crear un archivo de configuración .eleventy.js, agregar tus archivos fuente en el directorio **src** y ejecutar `eleventy` para generar el sitio web estático 😵

4. Copiar los archivos generados en el directorio de salida de `11ty` (por defecto, la carpeta _site) y pegarlo en la carpeta clonada del repositorio de GitHub en tu computadora.

5. En la terminal, navegar hasta el directorio clonado del repositorio de GitHub y ejecutar los siguientes comandos para subir los archivos al repositorio:
  ```sh
  git add .
git commit -m "Agregando archivos generados por 11ty"
git push origin master
  ```
  
6. Si todo va bien, los archivos se subirán al repositorio de GitHub y estarán disponibles para ver en línea. <br>

🚩 Recordar que estos son solo los _pasos generales_ y pueden variar según tu caso específico. 

[SUBIR ⏫](#item0)
___
</details>
  
  
  



<a name="item4"></a>
### Asignación  4
<details>
<summary>Diferencia entre Terminal Application y Terminal Emulator</summary><br>
  
La diferencia principal entre una _**terminal application**_ y un _**Terminal Emulator**_ es la **capa de abstracción que se utiliza para comunicarse con el sistema operativo** 😧 y **ejecutar comandos en la línea de comandos**. 😨 Lo sé, suena complicado. A ver si puedo explicarlo mejor: 
    

> La capa de abstracción se refiere a una interfaz que permite a los programas y usuarios interactuar con el sistema operativo y ejecutar comandos en la línea de comandos. Esta capa se conoce como la "interfaz de línea de comandos" **CLI** por sus siglas en inglés (Command Line Interface).<br><br>
La CLI es una forma de interactuar con el sistema operativo a través de un lenguaje de comandos. En lugar de utilizar una interfaz gráfica de usuario (GUI), donde se utilizan iconos y botones para realizar acciones, la **CLI** se basa en comandos de texto simples que se escriben en una terminal o consola. Estos comandos pueden ser utilizados para realizar una amplia variedad de tareas, como la navegación por el sistema de archivos, la gestión de procesos, la instalación de software y la configuración del sistema.<br><br>
La capa de abstracción permite que los programas y usuarios interactúen con la CLI de manera fácil y segura, ya que oculta detalles técnicos complejos del sistema operativo. Esto significa que los usuarios no necesitan conocer detalles técnicos específicos del sistema operativo para interactuar con él.

Ahora bien, una **Terminal Application** es un _**programa que proporciona una interfaz de usuario para ejecutar comandos en la línea de comandos**_. 
Ejemplos de terminal applications son la Terminal de **macOS**, el **símbolo del sistema de Windows** (CMD), la Terminal de **GNOME** en Linux, entre otros. <br><br>Estas aplicaciones **interactúan directamente con el sistema operativo** para enviar y recibir comandos y mostrar la salida de los mismos.

Por otra parte, un **Terminal Emulator** es un programa que **emula una terminal física**. En otras palabras, es un programa que simula el comportamiento de una terminal física y permite ejecutar comandos en la línea de comandos a través de una interfaz gráfica. <br> Ejemplos de terminal emulators son **xterm**, **Konsole**, **iTerm**, etc. <br> Estos programas **no interactúan directamente con el sistema operativo**, sino que emulan la funcionalidad de una terminal física y se comunican con el sistema operativo a través de un protocolo de comunicación (por ejemplo, el protocolo SSH para conectarse a un servidor remoto).

En resumen 😅, la diferencia principal entre una **Terminal Application** y un **Terminal Emulator** es que la primera interactúa directamente con el sistema operativo, mientras que la segunda emula una terminal física y se comunica con el sistema operativo a través de un protocolo de comunicación.

### Algunas Ventajas de las **Terminal Applications**:

1. Interactúan directamente con el sistema operativo, lo que puede ofrecer una mayor velocidad y eficiencia en la ejecución de comandos.
2. Algunas **Terminal Applications** pueden proporcionar características adicionales, como la capacidad de seleccionar y copiar texto, pestañas de terminal, la capacidad de personalizar la apariencia, etc.
3. Algunas **Terminal Applications** están diseñadas específicamente para trabajar con sistemas operativos particulares y pueden ofrecer una integración más profunda con el sistema operativo.
    
### Algunas desventajas de las **Terminal Applications**:

1. Por lo general, no son portables y solo funcionan en el sistema operativo para el que fueron diseñados.
2. No ofrecen la capacidad de conectarse a sistemas remotos de forma nativa.
3. Algunas terminal applications pueden ser más difíciles de usar para usuarios nuevos en la línea de comandos.

### Ventajas de los **Terminal Emulators**:

1. Ofrecen la capacidad de conectarse a sistemas remotos de forma nativa y ejecutar comandos en ellos.
2. Son más portables y pueden funcionar en diferentes sistemas operativos.
3. La mayoría de los terminal emulators son altamente personalizables y ofrecen una amplia variedad de características.

### Desventajas de los **Terminal Emulators**:

1. Debido a que emulan una terminal física, pueden ser menos eficientes en la ejecución de comandos.
2. Algunos usuarios pueden encontrar que la interfaz gráfica de los **Terminal Emulators** es menos intuitiva que la de las terminal applications.
3. La calidad de la experiencia de usuario puede variar significativamente según el terminal emulator que se esté utilizando.

En resumen, tanto las **Terminal Applications** como los **Terminal Emulators** tienen sus ventajas y desventajas, y la elección entre ellos dependerá de tus necesidades y preferencias. 🤘


[SUBIR ⏫](#item0)
___

</details>



<a name="item5"></a>
### Asignación  5
    
<details>
  <summary>¿Por qué se usa el comando `mv` también para renombrar archivos o carpetas?</summary><br>
  
El comando `mv` en la terminal de Linux/Unix se utiliza para **mover archivos o directorios de un lugar a otro**. Sin embargo, también se utiliza para cambiar el nombre de un archivo o directorio en la misma ubicación. Esto se debe a que, en Linux/Unix, un archivo o directorio **se identifica por su nombre y su ruta de acceso completa**. Al cambiar el nombre de un archivo o directorio, también se cambia su identidad, por lo tanto, para el sistema operativo, renombrar un archivo es equivalente a moverlo a una nueva ubicación con un nuevo nombre.

En resumen, el comando `mv` se utiliza tanto para mover como para renombrar archivos o directorios en Linux/Unix porque el cambio de nombre y la reubicación de archivos/directorios son operaciones equivalentes para el sistema operativo. 👍


[SUBIR ⏫](#item0)
___
  
  
</details>

    
<!--     -------------------------------------------------------------------------------------------- -->
<a name="item6"></a>
### Asignación  6
<details>
  <summary>Sistema de Control de versiones Distribuido vs Centralizado</summary><br>
  
La principal diferencia entre un **Sistema de Control de Versiones Distribuido** y uno **Centralizado** es la forma en que gestionan y almacenan los archivos y versiones de un proyecto.

En un **Sistema de Control de Versiones Centralizado**, todos los archivos y versiones de un proyecto se almacenan en un **único servidor centralizado**. Los desarrolladores trabajan en una copia local de los archivos, y para colaborar con otros miembros del equipo, deben conectarse al servidor centralizado y enviar sus cambios al repositorio central. El servidor centralizado es el punto de referencia único para el historial de cambios y versiones del proyecto.

Por otro lado, en un **Sistema de Control de Versiones Distribuido**, cada desarrollador tiene una copia local completa del repositorio, incluyendo todas las versiones y cambios del proyecto. Los desarrolladores pueden trabajar en sus propias copias locales y hacer cambios sin estar conectados al servidor centralizado. Luego, pueden sincronizar sus cambios con los demás desarrolladores mediante la combinación de los cambios y la actualización de las copias locales de los demás.

En un **Sistema de Control de Versiones Distribuido**, el servidor centralizado no es el punto de referencia único para el historial de cambios y versiones del proyecto, sino que cada copia local tiene una copia completa del repositorio con su historial de cambios. Esto hace que los sistemas distribuidos sean más descentralizados y permiten que los desarrolladores trabajen de forma más autónoma, ya que no dependen tanto del servidor centralizado para colaborar con los demás. 


[SUBIR ⏫](#item0)
___
  
  
</details>


