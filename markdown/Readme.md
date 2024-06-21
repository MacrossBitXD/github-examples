# Markdown con Ejemplos

Tratare de cubrir los siguientes temas en este markdown

- [Cabeceras](#cabeceras)
- [Listas ordenadas](#listas-ordenadas)
- [Listas desordenadas](#listas-desordenadas)
- [Texto con formato](#texto-con-formato)
- [Citas](#citas)
- [Definiciones](#definiciones)
- [Tablas](#tablas)
- [Links](#links)
- [Imagenes](#imagenes)
- [Pie de Pagina](#pie-de-pagina)
- [Barra de separación](#barra-de-separación)
- [Checklist](#checklist)
- [Emojis](#emojis)
- [Subindices y Superindices](#subindices-y-superindices)

## Cabeceras

Las cabeceras son texto con formato de titulo, es decir intentan darle un tamaño adecuado dependiendo de la importancia del texto. Existen 6 tipos de tamaño, van desde el más pequeño (H6) hasta el más grande (H1).
La forma en que se utilizan es colocando al principio de cada linea n cantidad de numerales (#) seguido de un espacio y el texto a formatear:

###### H6
##### H5
#### H4
### H3
## H2
# H1

Tambien puedes formar una cabecera grande usando 3 iguales (=):

Titulo<br>
\===

Titulo
===

## Listas Ordenadas

Son listas enumeradas que tratan de ordenar numericamente una serie de elementos. Se utilizan iniciando la linea con un numero (teniendo en cuenta el orden), un punto, un espacio y 
el texto: <br>

1\. texto

1. Me levanto
2. Me baño
3. Desayuno
4. Estudio
5. Almuerzo<br>etc.

## Listas desordenadas

Son listas que no tienen un orden especifico en sus elementos. Son tan sencillas que para implementarlas solo tienes que usar un guion (-) y un espacio entre el texto:

\- texto

- Youtube
- Vimeo
- Dailymotion
- Utreon

A diferencia de las ordenadas, estas tienen la capacidad de tener sublistas en los items:

\- texto <br>
`tab`\* texto

- item
  * subitem
  * subitem 2
- item 2

## Texto con Formato

Podemos darle formato al texto con algunos caracteres especiales:

### Negrita

Para darle negrita a un texto solo tienes que rodear un texto con 2 * , así:

\*\*Hola mundo!!\*\*

**Hola mundo!!**

### Italica

Para darle un formato de italica al texto solo rodea con 1 _ al texto:

\_\_Hola mundo!!\_\_

_Hola Mundo!!_

### Tachado

Para darle un formato de tachado al texto solo necesitas
rodear al texto con 2 ~ :

\~\~Hola mundo!!\~\~

~~Hola Mundo!!!~~

### Codigo

Para darle formato de codigo a un texto rodealo con 3 \` .
Puedes especificar el lenguaje de programación del codigo
colocando su nickname al lado de los 3 \` primeros:

\`\`\`bash<br>
cd home<br>
\`\`\`

```python
print("Hola Mundo")
```

Tambien puedes hacer el codigo de una linea rodeandolo de solo un ` al texto:

\`texto\`

`console.log("Hola mundo!!")`

## Definiciones

Si deseas darle formato al texto tipo diccionario usa ":" :

termino <br>
: definición

<dl>
  <dt>Goma</dt>
  <dd>Sustancia viscosa e incristalizable que naturalmente, o mediante incisiones, fluye de diversos vegetales, después de seca es soluble en agua e insoluble en el alcohol y el éter, y que disuelta en agua sirve para pegar o adherir cosas.</dd>
  <dd>Tira o banda elástica</dd>
  <dt>Gomaespuma</dt>
  <dd>Producto industrial de látex o sintético, esponjoso y blando </dd>
</dl>

Cabe recalcar que esto solo esta disponible para algunos procesadores de markdown



## Citas

Pudes citar un texto usando el signo mayor que (>) al inicio de cada linea:

\> cita

> _"Pienso luego existo"_, Rene Descartes

Tambien puedes hacer citas de varias lineas colocando por cada una un simbolo de mayor que:

>El principito fue a ver nuevamente a las rosas:<br>
> _"Ustedes no son de ningún modo parecidas a mi rosa, ustedes no son nada aún – les dijo.
> – Nadie las ha domesticado y ustedes no han domesticado a nadie. Ustedes son como era mi zorro. No era más que un zorro parecido a cien mil otros. Pero me hice amigo de él, y ahora es único en el mundo."_<br>
>**Un fragmento del Principito**

## Tablas

Las tablas se utilizan para organizar textos en columnas y filas, guardando una relacion entre el significado de las cabeceras de las tablas. Para usarlas es muy facil, 
rodea al texto con | para formar una columna, hazlo con la primera fila (que es de las cabezeras) y despues de las mismas haz la misma cantidad de columnas con ":-:" dentro, ya por ultimo haz las filas que deseas:

Para las Cabeceras:

\| Cabecera |<br>
\| :-: |

Para los campos:

| campo |

| Columna 1 | Columna 2 | Columna 3 |
| :-: | :-: | :-: |
| campo 1 | campo 2 | campo 3 |
| campo 1a | campo 2a | campo 3a |

## Links

Para introducir links en markdown tienes que colocar dentro de 2 corchetes cuadrados "[ ]" el texto del link y al link rodearlo de corchetes circulares "( )", todo junto en este orden:

\[Texto]\(link)

[Google](https://google.com)<br>
[Wikipedia](https://es.wikipedia.org/wiki/Wikipedia:Portada)

Markdown tambien tiene soporte para links automaticos, que son utiles para los correos electronicos:

\<correo>

<address@example.com>

## Imagenes

Si sabes introducir enlaces tambien sabes introducir imagenes, es el mismo formato más un signo de exclamación al comienzo (!) :

\!\[Texto Alternativo\]\(link\)

![Un perro corriendo](imagen.png)

## Pie de pagina

Para colocar un pie de pagina se utilizan los corchetes cuadrados para introducir la referencia. La diferencia con los links es que podras ver un cuadro de dialogo sobre la pagina al mantener el cursor arriba de la referencia:

\[*numero de Referencia\] "texto del cuadro de dialogo"

Wikipedia tambien habla de Markdown [*1]. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Aquí hay una guía en ingles [*2] .Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

[*1]: https://es.wikipedia.org/wiki/Markdown  "Wikipedia: Markdown es un lenguaje de marcado ligero creado por John Gruber y Aaron Swartz que trata de conseguir la máxima legibilidad y facilidad de publicación tanto en su forma de entrada como de salida, inspirándose en muchas convenciones existentes para marcar mensajes de correo electrónico usando texto plano."
[*2]: https://www.markdownguide.org/ "Markdown Guide: The Markdown Guide is a free and open-source reference guide that explains how to use Markdown, the simple and easy-to-use markup language you can use to format virtually any document."

## Barra de Separación

Cuando desees separar un contenido de otro utiliza las barras de separación, se implementan colocando 3 guiones (-) de seguido:

\-\-\-

---

## Checklist

Las checklist son utiles cuando quieres tener un recordatorio de tareas esten o no cumplidas. Para implementarlas usa la siguiente notación:

\- \[estado\] tarea

- [ ] Lave los platos
- [x] Bote la basura
- [ ] Hice mi desayuno 

## Emojis

Para incluir emojis, tienes que dentro de puntos dobles (:) añadir la palabra clave del emoji, todas son en ingles.

:palabra clave:

Feliz :smile: `:smile:` <br>
Dormido :sleeping: `:sleeping:` <br>
Furioso :rage: `:rage:` <br>

Aquí tienes la [lista completa de los emojis](https://gist.github.com/rxaviers/7360908).

## Subindices y Superindices

Para añadir subindices o superindices debes utilizar ~ o ^ respectivamente entre el texto a modificar

texto~(texto del subindice)~texto <br>
texto^(texto del superindice)^texto

H~2~O

X^2^
