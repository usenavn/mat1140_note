# 1 Logikk
## **Utsagn**
Et *utsagn* har en sannhetsverdi, som enten er $0$ (usant) eller $1$ (sant). Det er ikke viktig hvilke symboler man bruker for usant og sant, man kan for eksempel også bruke $\bot$ og $\top$ dersom man foretrekker det. Vårt ønske er å bestemme sannhetsverdien til (kompliserte) utsagn.

* negasjon: $\neg P$, "ikke $P$"
* konjunksjon: $P\land Q$, "$P$ og $Q$"
* disjunksjon: $P\lor Q$, "$P$ eller $Q$"
* implikasjon: $P\Rightarrow Q$, "$P$ impliserer $Q$"; "hvis $P$ så $Q$"; "$P$ medfører $Q$"
* ekvivalens: $P\iff Q$, "$P$ er ekvivalent med $Q$"; "$P$ hvis og bare hvis $Q$"

## **Egenskaper** 
Dersom $P$ er en *egenskap* og $x$ et objekt, skrives utsagnet "$x$ har egenskapen $P$" også $P(x)$, som uttales "$P$ av $x$".

* Eksistensiell kvantor: $\exists xP(x)$, "Det eksisterer $x$ slik at $P(x)$"; "Det eksisterer $x$ med egenskap $P$"
* Universell kvantor: $\forall xP(x)$, "For alle $x$ har vi at $P(x)$"; "Alle $x$ har egenskap $P$"

## **Mengder** 
Det matematisk konseptet *mengde* har sitt opphav i vår intuisjon om samlinger av objekter. Utsagnet at objekt $x$ tilhører mengden $A$ skrives $x\in A$, som uttales "$x$ tilhører $A$" eller "$x$ er element av $A$". Et element i $A$ er altså et objekt som tilhører $A$.

## **Relasjoner** 
*Relajsoner* kan tolkes som egenskaper ved par. At paret $(x,y)$ har egenskapen $R$ skrives $R(x,y)$, som uttales "$R$ av $x$ komma $y$". Evt. $xRy$.

## **Negasjon**
$\neg(P\land Q) \iff (\neg P\lor \neg Q)$<br>
$\neg(P\lor Q) \iff (\neg P\land \neg Q)$<br>
$\neg(P\Rightarrow Q) \iff (P\land \neg Q)$<br>
$\neg(P\iff Q) \iff ((P\land \neg Q)\lor (\neg P\land Q))$<br>
$\neg(\forall x\ P(x)) \iff (\exists x\ \neg P(x))$<br>
$\neg(\exists x\ P(x)) \iff (\forall x\ \neg P(x))$<br>
$\neg(\forall x\in A\quad P(x)) \iff (\exists x\in A\quad \neg P(x))$<br>
$\neg(\exists x\in A\quad P(x)) \iff (\forall x\in A\quad \neg P(x))$<br>
