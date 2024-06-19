#### Git Repo

Existe una carpeta invisible* en cada repo llamada `.git` en la que se
almacena el historial de cambios de tu repositorio

Si queremos crear un repositorio de git, nosotros tenemos que crear un
nuevo proyecto con el comando `git init`

Ahora si además de crear el repositorio deseas añadir un `Readme.md` puedes
usar los siguentes comandos:

```bash
mkdir <name-project> #creo un directorio para el repo
git init
touch Readme.md #creo el archivo "Readme.md"
vim Readme.md #abro el archivo con vim, usa "code" para abrirlo con vscode
#hago cambios en el archivo
git commit -ma "Añado el Readme"
```

#### Clonación

Nosotros podemos clonar un repositorio de 3 formas: HTTPS, SSH y CLI de Github

##### HTTPS

```bash
git clone https https://github.com/MacrossBitXD/github-examples.git
cd github-examples
```
> Si necesitas acceder a un repositorio, del cual no eres propietario
> puedes pedirle al propietario que te genere un token de acceso con sus
> respectivos permisos, eso el lo puede hacer [aquí](https://github.com/settings/token?type=beta)
> o tu simplemente puedes hacer un PR

Por Ultimo, recordad que si ingresas con un token personal, debes ingresar
ese token cuando te pidan tu contraseña de github

##### SSH

```bash
git clone git@github.com:MacrossBitXD/github-examples git
cd github-examples
```

Tu necesitas crear tu propia clave SSH, y añadir tu llave publica en
[github](https://github.com/settings/keys). La generas con el siguente comando:

```bash
ssh-keygen -t rsa #RSA es el algotirmo de encriptación
```

Recuerda tambien añadir
la privada a tu pc con el comando:

```bash
eval 'ssh-agent -s'
ssh-add <path-private-key>
```

Por ultimo testea la conexion con el siguente comando:

```bash
ssh -T git@github.com
```

##### GLI

Por ultimo es la Ultima forma de usar github

#### Commits

Cuando quieres hacer un commit de tu codigo puedes escribir `git commit`
el cual apre un editor que sirve para agregar un mensaje de descripción a
tu commit

```bash
git commit
```

Una forma sencilla de hacer un commit y agregar el mensaje en el 
mismo comando es usando:

```bash
git commit -m "<your message>" #La flag (bandera) "-m" es una abreviatura
#                               "message", con esta linea te ahorras abrir
#                               el editor
```


Para cambiar el editor por defecto de los mensajes de los commits
tienes que cambiar la variable global `core.editor`, para ello usa
el siguiente comando:

```bash
git config --global core.editor <name-your-editor> #Para vscode usa "code --wait"
```

#### Branches

Enlista las ramas de tu proyecto con el siguente comando:

```bash
git branch
```

Para crear una rama usas el siguente comando:

```bash
git branch <name-branch>
```

Para cambiar de una rama a otra usas el siguiente comando:

```bash
git checkout <name-brach-to-move>
```

#### Remote

#### Stashing

#### Merging

#### Add

Cuando queremos incluir los cambios en un commit, nosotros 
usamos el comando `git add`. Es muy comun usar `git add .`
debido a que el punto significa incluir a todos los cambios


```bash
git add Readme.md #Añado solo al archivo "Readme"
git add .
```

#### Reset

Cuando por equivocación enviamos cambios que no queriamos al
commit podemos usar el comando `git reset`.

```bash
git add .
git reset
```

> Git reset permite revertir cambios de un commit

#### Archivo Git config

El archivo `git config` es el espacio en el disco que almacena
el valor de todas las configuraciones globales, como email, nombre

```bash
git config --list #Permite ver el archivo "Git config"
```

Cuando instalas git por primera vez, uno de los pasos recomendados
a hacer es configurar las variables globales como `name` (tu nombre)
y `email` (tu email), puedes hacerlo usando los siguientes comandos


```bash
git config --global user.name <your name> #Configuras tu nombre
git config --global user.email <your email> #Configuras tu email
```


#### Log

Si necesitas ver el historial de commits en forma de arbol usa
`git log`. Es una forma visual de ver la historia de cambios en 
tu proyecto.

#### Push

Cuando deseas traer los cambios realizados con anterioridad del
repositorio remoto utiliza `git push`. Este comando se encarga
de traer todos los cambios hechos en el repositorio remoto
que se hicieron desde la ultima vez que clonaste o traiste el
ultimo cambio. Su uso es recomendable, tanto que por convension
se debe hacer un `git push` antes de enviar los cambios que
realizaste en tu repositorio local al remoto

```bash
git push
git pull origin main
```