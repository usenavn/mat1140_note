# Ring, ordnet ring, summering.
## Definisjon 1.10
Vi betrakter en mengde $R$, utstyrt med to avbildninger kalt addisjon $(+)$ og multiplikasjon $(\times)$:
<center><img src="./def1.10.1.png" style="height= 90%"></center>
og to utvalgte elementer $0$ og $1$.<br>
Vi sier at $(\mathcal{R}, +, 0, 1)$ er en ring dersom:

* addisjon er assosiativ, kommutativ, har neutralt element $0$ og hvert element $x$ har en invers (som skrives $−x$).
* multiplikasjon er assosiativ og har neutralt element $1$.
* multiplikasjon distribuerer over addisjon, i den forstand at for alle $(x, y, z\in \mathcal{R})$ har vi:
<center><img src="./def1.10.2.png" style="height= 90%"></center>
Med andre ord krever vi at $(\mathcal{R},+, 0)$ er en kommutativ gruppe, at $(\mathcal{R},×, 1)$ er en monoide, og at multiplikasjon distribuerer over addisjon.

## Definisjon 1.11
La R være en ring.
* Vi sier at $\mathcal{R}$ er triviell dersom 0 = 1. Da har vi $\mathcal{R} = \{0\}$.
* Vi sier at $\mathcal{R}$ er kommutativ dersom multiplikasjonen er kommutativ.
* Vi sier at $\mathcal{R}$ er et integritetsdomene dersom $\mathcal{R}$ er ikke-triviell, kommutativ og hvis vi har: $$\forall x,y \quad xy=0\implies (x=0 \lor y=0)$$
* Vi sier vi at $\mathcal{R}$ er en kropp dersom $\mathcal{R}$ er ikke-triviell, kommutativ og alle elementer bortsett fra $0$ har en multiplikativ invers.

## Definisjon 1.12
La $\mathcal{R}$ være utstyrt med addisjon og multiplikasjon slik at vi har å gjøre med en kommutativ ring. Anta videre at $\mathcal{R}$ er utstyrt med en orden $\leq$. Vi sier at ordenen er kompatibel med addisjon og multiplikasjon når følgende holder: $$\forall x,y,z \quad x\leq y\implies x+z\leq y+z$$ $$\forall x,y \quad (0\leq x\land 0\leq y)\implies 0\leq xy$$
En *ordnet ring* er en ring utstyrt med en orden som er kompatibel med addisjon og multiplikasjon. 

En *totalt ordnet ring* er ordnet ring der ordenen er total, mens en partielt ordnet ring er en ordnet ring der ordenen er partiell.

## Aksiom 1.1
De hele tallene utgjør en ikke-triviell ordnet ring $\mathbb{Z}$ slik at vi kan gjøre induksjonsbevis for å etablere egenskaper ved de positive hele tallene, også kalt de naturlige tallene.

Fra dette perspektivet utgjør de naturlige tallene en mengde $\mathbb{N}$ deﬁnert som: $$\mathbb{N} =\{x\in \mathbb{Z} \; :\; x\geq 0\}$$
og vi antar altså følgende prinsipp: La $P$ være en egenskap deﬁnert på $\mathbb{N}$ (med andre ord har vi et utsagn $P(n)$ for hver $n ∈ \mathbb{N}$. Dersom vi har:
* $P(0)$ er sant,
* $∀n ∈ \mathbb{N} \quad P(n)\implies P(n + 1)$,<br>
kan vi konkludere at, for hver $n ∈ \mathbb{N}$ har vi $P(n)$.

## Deﬁnisjon 1.13 
(Summasjonstegn). La $A$ være utstyrt med en addisjon (assossiativ, kommutativ med neutralt element $0$). Vi deﬁnerer summen til følger $(u_k)_{k∈[m,n]}$, ved induksjon på $n (n ≥ m)$. Vi krever at: $$\sum_{k=m}^{m}u_k=u_m$$ $$\sum_{k=m}^{n+1}u_k=(\sum_{k=m}^{n}u_k)+u_{n+1}\; \text{hvis}\; n\geq m$$
Vi føyer også til følgende deﬁnisjon: $$\sum_{k=m}^{n}u_k=0\; \text{hvis}\; n< m $$

## Teorem 1.16
La $x$ og $y$ være kommuterende elementer i en ring. Da har vi, for hver $n\in \mathbb{N}$ : $$(x+y)^n =\sum_{k=0}^{n}\binom{n}{k}x^k y^{n-k}$$

## Teorem 1.18
La $\sigma : [m,n]\to [m,n]$ være en bijeksjon. Da har vi: $$\sum_{k=m}^{n}u_k=\sum_{k=m}^{n}u_{\sigma (k)}$$

## Deﬁnisjon og Proposisjon 1.14
La $(u_i)_{i\in I}$ være en familie i $A$, indeksert av en endelig mengde $I$ med kardinalitet $n\geq 0$. For hver $m\in \mathbb{Z}$, hver bijeksjon $σ : [m, m + n − 1]\to I$ kan vi danne summen: $$\sum_{k=m}^{m+n-1}u_{\sigma (k)}$$ Den er uavhengig av valg av $m$ og $\sigma$ og kalles summen til familien, og skrives: $$\sum_{i\in I} u_i$$ Når $I$ er tom definerer vi: $$\sum_{i\in I} u_i=0$$