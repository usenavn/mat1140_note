# 7 Ordnede ringer, hele tall, induksjon
## Definition 7.1
La $\mathcal{R}$ være utstyrt med addisjon og multiplikasjon slik at vi har å gjøre med en kommutativ ring. Anta videre at $\mathcal{R}$ er utstyrt med en orden $\leq$. Vi sier at ordenen er kompatibel med addisjon og multiplikasjon når følgende holder: $$\forall x,y,z \quad x\leq y\implies x+z\leq y+z$$ $$\forall x,y \quad (0\leq x\land 0\leq y)\implies 0\leq xy$$ En *ordnet ring* er en ring utstyrt med en orden som er kompatibel med addisjon og multiplikasjon. En *totalt ordnet ring* er ordnet ring der ordenen er total, mens en *partielt ordnet ring* er en ordnet ring der ordenen er partiell.

## Aksiom 7.1
(Induksjon) La $P$ være en egenskap definert på $\mathbb{N}$ (mao. har vi et utsagn $P(n)$ for hver $n\in \mathbb{N}$). Dersom vi har:
* $P(0)$ er sant,
* $\forall n\in I_m \quad P(n)\implies P(n+1)$

## Teorem 7.1
La $A$ være en ikke-tom mengde. En følge i $A$ er en avbildning fra $\mathbb{N}$ til $A$.