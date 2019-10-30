# Ekvivalens- og ordens-relasjoner.
## Definisjon 5.1
(Relasjoner) La $A$ være en mengde utstyrt med en relasjon som gitt $(x, y)\in A\times A$ påstår at $x\triangle y$, som uttales «$x$ triangel $y$». Vi sier at relasjonen er<br>
* refleksiv dersom:<br> $\forall x\in A\quad x\triangle x$
* symetrisk dersom:<br> $\forall x,y\in A\quad x\triangle y\iff y\triangle x$
* antisymetrisk dersom:<br> $\forall x,y\in A\quad (x\triangle y\land y\triangle x)\implies x=y$
* transitiv dersom:<br> $\forall x,y,z\in A\quad (x\triangle y\land y\triangle z)\implies x\triangle z$

## Definisjon 5.2
(Ekvivalenser) Vi sier at en relasjon er en ekvivalens når den er reﬂeksiv, symetrisk og transitiv.

## Definisjon 5.3
(Ordener) La $A$ være en mengde og $\triangle$ være en relasjon på $A$. Vi sier at $\triangle$ er en *orden* når den er reﬂeksiv, antisymetrisk og transitiv.<br>
&nbsp;&nbsp;&nbsp;&nbsp; La $x, y \in A$. Vi sier at $x$ og $y$ er sammenliknbare dersom: $$x\triangle y\lor y\triangle x$$ Vi sier at $\triangle$ er en total orden dersom alle elementer er sammenliknbare. Hvis en orden ikke nødvendigvis er total, kan vi poengtere det ved å si at den er *partiell*.

## Deﬁnisjon 5.4
La $A$ være utstyrt med en ordensrelasjon som vi skriver $\leq$. La $B$ være en delmengde av $A$ og la $a\in A$. Vi sier at:<br>
* $a$ er en *nedre skranke* for $B$ dersom $(\forall x\in B\quad a\leq x)$.
* $a$ er et *minimalt* element i $B$ dersom $a\in B$ og $(\forall x\in B\quad x\leq a\implies x = a)$. Dette kan også skrives $a\in B$ og $(\forall x\in B\quad \neg(x < a))$.
* $a$ er et *minimum* i $B$ dersom $a\in B$ og $(\forall x\in B\quad a\leq x)$. Når dette er tilfellet er $a$ entydig bestemt av $B$ og skrives min$B$. Vi kan også si at $a$ er det minste elementet i $B$.

*Øvre skranke*, *maksimalt* element, *maksimum* (max$B$, største element), deﬁneres tilsvarende. Vi sier også at:<br>
* $a$ er et *inﬁmum* av $B$ dersom det er et maksimum i mengden av nedre skranker til $B$. Når dette er tilfellet er $a$ entydig bestemt av $B$ og skrives inf$B$.

*Supremun* er deﬁnert på tilsvarende måte og skrives sup$B$ når det eksisterer.

## Definisjon 5.5
La $(A, \leq)$ og $(B, \leq)$ være to ordnede mengder og la $f : A\to B$ være en avbildning. Vi sier at $f$ er *voksende* dersom: $$\forall x,y\in A \quad x\leq y\implies f(x)\leq f(y)$$ og *strengt voksende* dersom: $$\forall x,y\in A \quad x < y\implies f(x) < f(y)$$ *Avtagende* og *strengt avtagende* deﬁneres ved å reversere ulikhetene blant bildene. Vi sier at $f$ er *monoton* hvis den er voksende eller avtagende.

## Deﬁnisjon 5.6
En binær operasjon på en mengde $A$ er en avbildning fra $A\times A$ til $A$.

## Deﬁnisjon 5.7
La $\star : A\times A \to A$ være en operasjon. For $x, y\in A$ skriver vi $x\star y$ i stedet for $\star(x, y)$.<br>
* Vi sier at operasjonen er assosiativ dersom: $$\forall x,y,z\in A\quad (x\star y)\star z=x\star (y\star z)$$
* Vi sier at $e\in A$ er et neutralt element dersom: $$\forall x\in A\quad e\star x=x\star e=x$$
* Vi sier at to elementer $x, y\in A$ kommuterer dersom: $x\star y = y\star x$.
* Vi sier at operasjonen er kommutativ dersom $x$ og $y$ kommuterer for alle $x, y\in A$.

## Definisjon 5.8
La $A$ være utstyrt med en assosiativ operasjon og et neutralt element $e$. La $x\in A$. Vi sier at $x$ er invertibel dersom det ﬁnnes $y\in A$ slik at $xy = yx = e$. I såfall er $y$ entydig bestemt av $x$ og kalles inversen til $x$.<br>
&nbsp;&nbsp;&nbsp;&nbsp; Et neutralt element for en assosiativ lov er alltid invertibelt, med seg selv som invers.

## Deﬁnisjon 5.9
La $A$ være utstyrt med en operasjon $\star$. Man sier at en delmengde $B$ av $A$ er stabil under $\star$ dersom: $$\forall x,y\in B\quad x\star y \in B$$ I såfall kan man utstyre $B$ med den såkalte induserte operasjonen:

<center><img src="./def5.9.png" style="height:90%;"></center>

## Definisjon 5.10
La $B$ være utstyrt med en operasjon $\star$. La $A$ være en ikke
tom mengde. Vi utstyrer $B^A$ med en operasjon også kalt $\star$ som følger. For $f, g\in B^A$ definerer vi $f\star g\in B^A$ ved: $$\forall x\in A\quad (f\star g)(x)=f(x)\star g(x)$$

## Definisjon 5.11
Vi betrakter en mengde $\mathcal{R}$, utstyrt med to avbildninger kalt addisjon $(+)$ og multiplikasjon $(\times)$:

<center><img src="./def5.11.png" style="height:90%;"></center>

og to utvalgte elementer $0$ and $1$.<br>
&nbsp;&nbsp;&nbsp;&nbsp; Vi sier at $(\mathcal{R},+,\times , 0, 1)$ er en ring dersom:
* addisjon er assosiativ, kommutativ, har neutralt element $0$ og hvert
element $x$ har en invers (som skrives $−x$).
* multiplikasjon er assosiativ og har neutralt element $1$.
* multiplikasjon distribuerer over addisjon, i den forstand at for alle $x, y, z\in R$ har vi: $$(x+y)z=xz+yz$$ $$z(x+y)=zx+zy$$

## Definisjon 5.12
La $\mathcal{R}$ være en ring.
* Vi sier at $\mathcal{R}$ er triviell dersom $0 = 1$. Da har vi $\mathcal{R} = \{0\}$.
* Vi sier at $\mathcal{R}$ er kommutativ dersom multiplikasjonen er kommutativ.
* Dersom $\mathcal{R}$ er ikke-triviell, kommutativ og hvis vi har: $$\forall x,y \quad xy=0\implies (x=0\lor y=0)$$ sier vi at $\mathcal{R}$ er et integritetsdomene.
* Dersom $\mathcal{R}$ er ikke-triviell, kommutativ og alle elementer bortsett fra $0$ har en multiplikativ invers, sier vi at $\mathcal{R}$ er en kropp.