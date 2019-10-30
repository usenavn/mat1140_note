# Egenskaper, realsjoner, kvantorer. Bevis.
## Egenskaper 
Dersom $P$ er en *egenskap* og $x$ et objekt, skrives utsagnet "$x$ har egenskapen $P$" også $P(x)$, som uttales "$P$ av $x$".

* Eksistensiell kvantor: $\exists xP(x)$, "Det eksisterer $x$ slik at $P(x)$"; "Det eksisterer $x$ med egenskap $P$"
* Universell kvantor: $\forall xP(x)$, "For alle $x$ har vi at $P(x)$"; "Alle $x$ har egenskap $P$"

## Mengder 
Det matematisk konseptet *mengde* har sitt opphav i vår intuisjon om samlinger av objekter. Utsagnet at objekt $x$ tilhører mengden $A$ skrives $x\in A$, som uttales "$x$ tilhører $A$" eller "$x$ er element av $A$". Et element i $A$ er altså et objekt som tilhører $A$.

## Relasjoner
*Relajsoner* kan tolkes som egenskaper ved par. At paret $(x,y)$ har egenskapen $R$ skrives $R(x,y)$, som uttales "$R$ av $x$ komma $y$". Evt. $xRy$.

## Negasjon
$\neg(P\land Q) \iff (\neg P\lor \neg Q)$<br>
$\neg(P\lor Q) \iff (\neg P\land \neg Q)$<br>
$\neg(P\Rightarrow Q) \iff (P\land \neg Q)$<br>
$\neg(P\iff Q) \iff ((P\land \neg Q)\lor (\neg P\land Q))$<br>
$\neg(\forall x\ P(x)) \iff (\exists x\ \neg P(x))$<br>
$\neg(\exists x\ P(x)) \iff (\forall x\ \neg P(x))$<br>
$\neg(\forall x\in A\quad P(x)) \iff (\exists x\in A\quad \neg P(x))$<br>
$\neg(\exists x\in A\quad P(x)) \iff (\forall x\in A\quad \neg P(x))$<br>

## Lemma 2.1
La $n\in \mathbb{Z}$. Da er $n$ et partall eller et oddetall, og ikke begge deler.

## Lemma 2.2 
La $n\in \mathbb{N}$. Vi definerer en følge $u_{k\in\mathbb{N}}$ induktivt slik: Først definerer vi:$$u_0=n$$ Så lar vi $k\in \mathbb{N}$ og antar at vi har definert $u_0,\cdots ,u_k$. Dersom $u_k$ er et partall definerer vi: $$u_{k+1}=(u_k)/2$$ og hvis ikke definerer vi: $$u_{k+1}=u_k$$ Da er følgen $(u_k)_{k\in \mathbb{N}}$ stasjonær.

## Lemma 2.3 
Anta $n\in \mathbb{Z}$. Hvis $n^2$ er et partall, så er $n$ et partall.

## Lemma 2.4
For alle $n\in \mathbb{Z}$, hvis $n>0$ så $n\geq 1$.