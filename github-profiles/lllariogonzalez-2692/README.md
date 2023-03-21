# Hello, I'm Mario Gonzalez

I'm a **FullStack JavaScript Developer** from **Argentina**.

Previously I worked as an audiovisual producer, graphic designer and sound designer, also as an administrator, but I have always been passionate about technology and today I am in search of it.

> Link to my **[GitHub](https://github.com/lllariogonzalez)**

## Terminal useful commands

|  Command ~$  |  Description                                           |
| ------------ | ------------------------------------------------------ |
| **ls**       | List contents, option **-a** for all files and folders |
| **pwd**      | Displays the path to the current directory             |
| **cd**       | Change directory                                       |
| **mkdir**    | Make directory                                         |
| **touch**    | Create empty files                                     |
| **mv**       | Move or rename files and directories                   |
| **rm**       | Delete files and directories, option **-r** recursive  |
| **cat**      | Read a file, function to con**cat**enar                |
| **clear**    | Clean Terminal                                         |
| **alias**    | List alias                                             |

## Useful alias commands

> Alias to list the top 10 most used commands

```bash
alias mostused='history | awk '\''{print $2}'\''| sort | uniq -c | sort -nr | head -n 10'
```

> Alias to filter search by parameters

```bash
alias findd="ls ~/ | grep $1"
findd Do
```
> To save them permanently do it in .bashrc or in .zshrc with VSCode

```bash
echo $SHELL
# /bin/bash
code ~/.bashrc
```
