# Comandos Linux

## Comandos

| Comando | Descripción                                                      |
| ------- | ---------------------------------------------------------------- |
| ls      | Lista los archivos y directorios                                 |
| sort    | Ordena alfabéticamente una lista de archivos                     |
| cd      | Cambia de directorio                                             |
| pwd     | Muestra la ruta al directorio actual                             |
| tree    | Muestra la estructura de directorios y archivos en forma gráfica |
| mkdir   | Crea un directorio                                               |
| rmdir   | Borra directorios (los directorios deben estar vacíos).          |
| rm -d   | Borra directorios (los directorios pueden no estar vacíos)       |
| cp      | Copia archivos                                                   |
| rm      | Borra archivos                                                   |
| mv      | Mueve o renombra archivos y directorios                          |
| cat     | Muestra el contenido de uno o varios archivos                    |
| more    | Ve el contenido de los archivos página a página                  |
| less    | Ve el contenido de los archivos                                  |

## Alias

```bash
alias lt='ls --human-readable --size -1 -S --classify'
```

```bash
alias yep='sudo apt install $1'
```