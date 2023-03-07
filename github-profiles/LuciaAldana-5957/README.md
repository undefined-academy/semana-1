## LuciaAldana#5957

[Mi perfil de GitHub](https://github.com/luciaaldana)

---

## Hi there 👋

<img display="block" src="https://assets.website-files.com/5e51c674258ffe10d286d30a/5e53517fc6b2492d63287d6d_peep-11.png" height="150" display="block"/>

# `LUCIA ALDANA CASTILLO`

# `👩‍💻 I'm Frontend Developer` [![luciaaldana](https://img.shields.io/github/followers/luciaaldana?style=social)](https://github.com/luciaaldana)

I am currently working at Aconcagua Software Spain, as a `Frontend Developer with ReactJs and React Native`.  
You can see more on my Linkedin profile:

<a href="https://www.linkedin.com/in/luciaaldanacastillo" target="_blank"><img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" /></a>

## `📚 My GitHub Stats`

<img src="https://github-readme-stats.vercel.app/api?username=luciaaldana&show_icons=true&theme=graywhite" alt="LuciaAldana-5957" />

I love to learn. And I look for solutions that are posted for different problems or questions about how to solve something and they help me a lot,  
so I leave some answers on Stackoverflow ([you can find my Stackoverflow profile here](https://stackoverflow.com/users/19827435/lucia-aldana))  
and I also create some Gists with some processes hoping to give back some of that help.

## `🌟 Gists`

### I have created some gists, [_you can see them all here_](https://gist.github.com/luciaaldana) or choose from the list:

| Topic                | Detail                                                      | Link                                                                       |
| -------------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------- |
| Store                | Create store with React-Rudux and Toolkit                   | [🔗](https://gist.github.com/luciaaldana/d5445118263020994c33be1578144208) |
| Routes               | Create Private and public routes with React router dom v6   | [🔗](https://gist.github.com/luciaaldana/383b73e3546773dbb0a4ac762fff0660) |
| Alias                | Create absolute path in Vite project React TS (alias)       | [🔗](https://gist.github.com/luciaaldana/7343c77b56e02a1ab7ed2903c01a843d) |
| Internationalization | Translations with I18n                                      | [🔗](https://gist.github.com/luciaaldana/540d60b401bea06672f03ea01db80aab) |
| Map                  | Using map and creating markers with Mapbox GL JS With React | [🔗](https://gist.github.com/luciaaldana/9796f682a692963e4f68791d7240883d) |

✨ I hope it helps you.

## `👾 Alias`

I have created some aliases to use in my projects:

| Alias | Command                                                     | Description                                            |
| ----- | ----------------------------------------------------------- | ------------------------------------------------------ |
| gbs   | (\*)                                                        | list of branches ordered towards the most used         |
| dnp   | 'rm -rf ./node_modules && rm -f package-lock.json && npm i' | Delete node modules and package.lock and install (npm) |

(\*) command gbs :
`for k in $(git branch| sed s/^..//); do echo -e $(git log --color=always -1 --pretty=format:"%Cgreen%ci %Cblue%cr%Creset" $k --)\\t"$k";done \\ | sort`

## `🔥 Shortcut`

Print in console with detail of the element (file, line number...):

```javascript
{
    "key": "ctrl+shift+l",
    "command": "editor.action.insertSnippet",
    "when": "editorTextFocus",
    "args": {
      "snippet": "console.log('🔥 ${RELATIVE_FILEPATH} > line: ${TM_LINE_NUMBER} > ${TM_SELECTED_TEXT}:$2', ${TM_SELECTED_TEXT}$1);"
    },
  },
```

Print in console a javascript value to a JSON string:

```javascript
    {
        "key": "ctrl+j",
        "command": "editor.action.insertSnippet",
        "when": "editorTextFocus",
        "args": {
          "snippet": "console.log(JSON.stringify({ ${TM_SELECTED_TEXT} }, null, 2));"
        },
      },
```

## `🤖 My most used commands`

| Command                             | SHORCUTS OH MY ZSH       | Description                                                                   |
| ----------------------------------- | ------------------------ | ----------------------------------------------------------------------------- |
| `git add .`                         | `ga .`                   | we move the modified files from our working directory to the ready state.     |
| `git commit -a -m 'description...'` | `gcam 'description...' ` | We save the changes you have in the staging area.                             |
| `git push`                          | `gp`                     | We push changes from a local repository to a remote repository.               |
| `git pull`                          | `gl`                     | We download content from a remote repository by updating the local repository |
| `git checkout name-branch`          | `gco name-branch`        | We move to the branch 'name-branch' that is already created                   |
| `git checkout -b name-new-branch`   | `gco -b name-new-branch` | We move to the 'name-branch' branch that we are creating                      |

If you like these `SHORCUTS OH MY ZSH`, I leave the complete list [here](https://kapeli.com/cheat_sheets/Oh-My-Zsh_Git.docset/Contents/Resources/Documents/index).
