# Kardinalitet
Poenget med tall kan man kanskje si er det å telle. In mengdeteorien ønsker man å telle antall elementer i en mengde, og det tallet man oppnår kalles da kardinaliteten til mengden. Overfører man denne terminologien tilbake til daglidagstale, blir det noe tungvint: man sier for eksempel at en edderkopp har $8$ bein, ikke at kardinaliteten til mengden av bein på en edderkopp er $8$.

I matematikk er det litt situasjonbetinget om det er best å si at det ﬁnnes $4$ avbildninger fra $\{0, 1\}$ til $\{0, 1\}$ eller at mengden av avbildninger fra $\{0, 1\}$ til $\{0, 1\}$ har kardinalitet $4$. Vi skal her innføre en notasjon som gjør det mulig å skrive det enda mer konsist: $$|\{0, 1\}^{\{0,1\}} | = 4$$
Mengdeteorien gjør det mulig å snakke om uendelige mengder (dvs mengder som ikke er endelige!) og det gjør det nødvendig å presisere hva vi har i tankene når vi snakker om kardinalitet: hvordan sammenlikne størrelsen på uendelige mengder? Utgangspunktet er at to endelige mengder er like store når det ﬁnnes en bijeksjon mellom dem. Bruker vi den samme deﬁnisjonen på uendelige mengder oppnår vi paradokser som at det ﬁnnes like mange naturlige partall som det ﬁnnes naturlige tall. Et annet paradoks er Hilberts hotell : der er det alltid plass til en ny gjest, selv om hotellet er fullt. Disse paradoksene er indikasjon på at teorien må bygges opp møysommelig, til og med for endelige mengder.

Denne måten å sammenlikne størrelse på uendelige mengder er ikke den eneste mulige. Når man snakker om volumet til, la oss si, et tredimensionalt legeme er det et annet begrep, for eksempel.

## Deﬁnisjon og Proposisjon 1.1
La $A$ være en mengde. Vi sier at $A$ er *endelig* dersom det ﬁnnes $n\in \mathbb{N}$ slik at det ﬁnnes en bijeksjon $\mathbb{N}_n\to A$. I såfall er $n$ entydig bestemt av $A$ og kalles kardinaliteten til $A$, og vi skriver $n = |A|$.

## Teorem 1.1
La $m, n\in \mathbb{N}$. Hvis det ﬁnnes en injeksjon $\mathbb{N}_m \to \mathbb{N}_n$ har vi $m\leq n$.

## Korollar 1.2
La $m, n\in N$. Hvis det ﬁnnes en bijeksjon $\mathbb{N}_m \to \mathbb{N}_n$ har vi $m = n$.

## Korollar 1.3
La $A$ og $B$ være to endelige mengder. Det ﬁnnes en bijeksjon fra $A$ til $B$ hvis og bare hvis $|A| = |B|$.

## Korollar 1.4
La $A$ og $B$ være to endelige mengder. Det ﬁnnes en injeksjon fra $A$ til $B$ hvis og bare hvis $|A| \leq |B|$.

## Korollar 1.5
La $A$ og $B$ være to endelige mengder. Det ﬁnnes en surjeksjon fra $A$ til $B$ hvis og bare hvis $|A|\geq |B|$.

## Teorem 1.6
La $A$ være en endelig mengde og $B$ en del av $A$. Da er $B$ endelig og $|B| \leq |A|$. I tillegg har vi: $$|B| = |A| \iff B = A.$$

## Korollar 1.7
La $A$ være en endelig mengde. Hvis $f : A\to A$ er en injeksjon er $f$ en bijeksjon.

## Korollar 1.8
La $A$ være en endelig mengde. Hvis $f : A\to A$ er en surjeksjon er $f$ en bijeksjon.

## Korollar 1.10
La $A$ og $B$ være to endelige mengder. Da er $A\cup B$ og $A\cap B$ endelige og: $$|A\cup B| + |A\cap B| = |A| + |B|$$

## Deﬁnisjon 2.1
En mengde sies å være uendelig dersom den ikke er endelig.

## Deﬁnisjon 2.2
Vi sier at en mengde $A$ er tellbar dersom det ﬁnnes en bijeksjon $\mathbb{N}\to A$.

## Deﬁnisjon 2.3
Vi sier at en mengde $A$ er høyst tellbar, dersom den er endelig eller tellbar.

## Korollar 2.4
La $A$ være en delmengde av en tellbar mengde. Da er $A$ enten endelig eller tellbar.

## Teorem 2.6
Det ﬁnnes en bijeksjon $\mathbb{N} \to \mathbb{N} \times \mathbb{N}$.

## Teorem 2.7
La $U$ og $I$ være mengder. Anta at $I$ er høyst tellbar. Anta videre at $(A_i)_{i\in I}$ er en familie delmengder av $U$ slik hver $A$ i er høyst tellbar. Da er $\cup _{i\in I} A_i$ i høyst tellbar.