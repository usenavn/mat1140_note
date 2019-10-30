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