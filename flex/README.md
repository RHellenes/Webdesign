# Kjapp intro til flex-box

&nbsp; 

## `display: flex;`
Aller først er det viktig at man vet hvordan flex-box fungerer. I motsetning til `float` som man setter på elementer man har lyst til å flytte på så er det foreldre elementet man setter `display: flex;` på. Child-elements her blir kalt flex items, og forelder for flex container. 

```
.container 
  ┬ 
  └─ .child
  └─ .child
  └─ .child
```

`display: flex;` fungerer på alle* child-elements uavhengig av hva de heter  

*gitt at de ikke har en `position: absolute/ fixed e.l.` som gjør at de bryter ut av den naturlige flowen. 


```
.body
  ┬ 
  └─ .header
  └─ .main
  └─ .footer
```

```css
.container {
  display: flex;
}
```

— Flex

&nbsp; 

## `flex-direction`

Flex-direction forandrer aksen du jobber med. Det er 2 akser; main og cross. Main aksen er av default row (rad) og går horisontalt over skjermen. cross er da alltid på tvers av main — så den er da vertikal som default. Det er kun hovedaksen vi endrer.  

Den kan ta 6 forskjellige verdier:

| Verdi            | Beskrivelse                                                                                    |
| :--------------- | :--------------------------------------------------------------------------------------------- |
| `row`            | Gjør at hovedaksen er horisontal — **venstre mot høyre**                                       |
| `row-reverse`    | Det samme som row, men setter child elements i reversert rekkefølge. — **Høyre mot venstre**   |
| `column`         | Setter hovedaksen til vertikal som en kolonne — **topp til bunn.**                             |
| `column-reverse` | Samme som column, men i  men setter child elements i reversert rekkefølge. — **bunn til topp** |
| `initial`        | Setter den tilbake til default verdi                                                           |
| `inherit`        | Her setter du elementet til å arve foreldre elementets `flex-direction` – om den har noe       |



Dette settes også på foreldre elementet

```css
.container {
  display: flex;
  flex-direction: column;
}
```




## `flex-wrap`
Som default tvinger flex-box alle child elementene til å være på en linje. Er child-elementene totaltsett for brede til å kunne få plass, blir de skalert ned. f.eks. 50% + 30% + 50% = 130% — for bred til å kunne få plass i 100%, men blir skalert ned til å passe 100%. For å fikse dette setter man på `flex: wrap;` Da vil elementer hoppe ned på en ny linje om det ikke er plass. 

| Verdi          | Beskrivelse                                                                               |
| :------------- | :---------------------------------------------------------------------------------------- |
| `nowrap`       | Default verdi — alle child-elementene skal være på en linje og skaleres ned om nødvendig. |
| `wrap`         | Elementene vil falle på ny linje om det ikke er plass.                                    |
| `wrap-reverse` | Samme som wrap, men i reversert rekkefølge                                                |
| `initial`      | Setter den tilbake til default verdi                                                      |
| `inherit`      | Her setter du elementet til å arve foreldre elementets `flex-wrap` – om den har noe       |

&nbsp; 

## `justify-content` && `align-items`


Her er det viktig å forstå `flex-direction`

- `justify-content` — forteller hvordan child elementene skal fordele seg på hovedaksen 
- `align-items` — forteller hvordan child elementene skal fordele seg på kryssaksen 


Om `flex-direction` er uendret eller har verdien `row` vil følgende skje:

- `justify-content` vil fortelle hvordan elementene skal fordele seg i horisontal retning. 
- `align-items` vil fortelle hvordan elementene skal fordele seg i vertikal retning. 