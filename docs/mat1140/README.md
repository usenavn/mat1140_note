# [MAT 1140 – Strukturer og argumenter](https://www.uio.no/studier/emner/matnat/math/MAT1140/h19/index.html "MAT 1140 - Strukturer og argumenter")

## Kort om emnet
MAT1140 er en første innføring i abstrakt matematikk. Emnet introduserer matematiske strukturer som er felles for mange fagområder, og det gir studentene trening i å argumentere matematisk. Emnet forutsetter ikke faglige kunnskaper utover videregående skole (R1+R2), men det er en fordel å ha vært eksponert for matematisk argumentasjon. MAT1140 gir et solid grunnlag for videre arbeid med teoretiske matematikkemner.

## Hva lærer du?
Etter å ha fullført emnet:

- vet du hvordan man analyserer det logiske forholdet mellom enkle utsagn, kjenner vanlige bevisteknikker, og kan presentere egne matematiske argumenter på en klar og velorganisert måte ved hjelp av korrekt notasjon og terminologi;

- kjenner du mengdebegrepet og de Boolske operasjonene, kan gjennomføre argumenter med mengder og familier av mengder, kjenner kardinalitetsbegrepet og de viktigste egenskapene til tellbare mengder;

- kjenner du funksjons- og relasjonsbegrepene, kan bruke funksjoner og relasjoner til å beskrive matematiske sammenhenger, og kan gjenkjenne og bruke ekvivalensrelasjoner og partielle ordninger;

- vet du hvordan hele tall er bygget opp av primtall, kan argumentere med restklasser, og kjenner karakteriseringer av pytagoreiske tripler og kvadratsummer;

- kjenner du de grunnleggende egenskapene til noen algebraiske strukturer, spesielt ringer og kropper, og hvordan dette belyser eksempler som reelle tall og polynomer;

- kjenner du utvalgsaksiomet og Zorns lemma og kan gjennomføre argumenter basert på dem.

## 1 Logikk
### **Utsagn**
Et *utsagn* har en sannhetsverdi, som enten er $0$ (usant) eller $1$ (sant). Det er ikke viktig hvilke symboler man bruker for usant og sant, man kan for eksempel også bruke $\bot$ og $\top$ dersom man foretrekker det. Vårt ønske er å bestemme sannhetsverdien til (kompliserte) utsagn.

* negasjon: $\neg P$, "ikke $P$"
* konjunksjon: $P\land Q$, "$P$ og $Q$"
* disjunksjon: $P\lor Q$, "$P$ eller $Q$"
* implikasjon: $P\Rightarrow Q$, "$P$ impliserer $Q$"; "hvis $P$ så $Q$"; "$P$ medfører $Q$"
* ekvivalens: $P\iff Q$, "$P$ er ekvivalent med $Q$"; "$P$ hvis og bare hvis $Q$"

### **Egenskaper** 
Dersom $P$ er en *egenskap* og $x$ et objekt, skrives utsagnet "$x$ har egenskapen $P$" også $P(x)$, som uttales "$P$ av $x$".

* Eksistensiell kvantor: $\exists xP(x)$, "Det eksisterer $x$ slik at $P(x)$"; "Det eksisterer $x$ med egenskap $P$"
* Universell kvantor: $\forall xP(x)$, "For alle $x$ har vi at $P(x)$"; "Alle $x$ har egenskap $P$"

### **Mengder** 
Det matematisk konseptet *mengde* har sitt opphav i vår intuisjon om samlinger av objekter. Utsagnet at objekt $x$ tilhører mengden $A$ skrives $x\in A$, som uttales "$x$ tilhører $A$" eller "$x$ er element av $A$". Et element i $A$ er altså et objekt som tilhører $A$.

### **Relasjoner** 
*Relajsoner* kan tolkes som egenskaper ved par. At paret $(x,y)$ har egenskapen $R$ skrives $R(x,y)$, som uttales "$R$ av $x$ komma $y$". Evt. $xRy$.

### **Negasjon**
$\neg(P\land Q) \iff (\neg P\lor \neg Q)$<br>
$\neg(P\lor Q) \iff (\neg P\land \neg Q)$<br>
$\neg(P\Rightarrow Q) \iff (P\land \neg Q)$<br>
$\neg(P\iff Q) \iff ((P\land \neg Q)\lor (\neg P\land Q))$<br>
$\neg(\forall x\ P(x)) \iff (\exists x\ \neg P(x))$<br>
$\neg(\exists x\ P(x)) \iff (\forall x\ \neg P(x))$<br>
$\neg(\forall x\in A\quad P(x)) \iff (\exists x\in A\quad \neg P(x))$<br>
$\neg(\exists x\in A\quad P(x)) \iff (\forall x\in A\quad \neg P(x))$<br>

## 2 Bevis

### **Lemma 2.1** 
La $n\in \mathbb{Z}$. Da er $n$ et partall eller et oddetall, og ikke begge deler.

### **Lemma 2.2** 
La $n\in \mathbb{N}$. Vi definerer en følge $u_{k\in\mathbb{N}}$ induktivt slik: Først definerer vi:$$u_0=n$$ Så lar vi $k\in \mathbb{N}$ og antar at vi har definert $u_0,\cdots ,u_k$. Dersom $u_k$ er et partall definerer vi: $$u_{k+1}=(u_k)/2$$ og hvis ikke definerer vi: $$u_{k+1}=u_k$$ Da er følgen $(u_k)_{k\in \mathbb{N}}$ stasjonær.

### **Lemma 2.3** 
Anta $n\in \mathbb{Z}$. Hvis $n^2$ er et partall, så er $n$ et partall.

### **Lemma 2.4** 
For alle $n\in \mathbb{Z}$, hvis $n>0$ så $n\geq 1$.

## 3 Mengder
### **Aksiom 3.1**
(Likhet av mengder). La $A$ og $B$ være mengder. Da er $A$ og $B$ like hvis og bare hvis de har akkurat de samme elementene. Det vil si:$$(A=B)\iff (\forall x\quad x\in A \iff x\in B)$$

### **Definisjon 3.1** 
Vi sier at en egenskap $P$ er *mengdedannende* dersom det finnes en mengde $A$ slik at: $$\forall x\quad x\in A\iff P(x)$$ Det følger i såfall av likhetsaksiomet at $A$ er entydig bestemt av $P$. Vi bruker følgende notasjon: $$A=\{x\; :\; P(x)\}$$

### **Definisjon 3.2** 
En mengde $A$ er *tom* dersom den ikke har noen elementer. Det vil si: $$\forall x\quad x\notin A$$

### **Aksiom 3.2** 
Egenskapen $\langle\langle x\; :\; x\neq x\rangle\rangle$ er mengdedannende, slik at det finnes en tom mengde. Den tomme mengden skrives $\emptyset$.

### **Aksiom 3.3** 
Gitt et objekt $x$ vil egenskapen $\langle\langle y\; : \; y=x\rangle\rangle$ være mengdedannende. Vi skriver $$\{x\}=\{y\; :\; y=x\}$$ Mengder av denne typen kalles *ettpunktsmengder*.

### **Aksiom 3.4** 
(Spesialisering). Dersom $A$ er en mengde og $P$ en egenskap, er egenskapen $\langle\langle x\; :\; x\in A\land P(x)\rangle\rangle$ mengdedannende. Vi forkorter: $$\{x\in A\; :\; P(x)\}=\{x\; :\; x\in A\land P(x)\}$$

### **Definisjon 3.4** 
Gitt mengder $A$ og $B$ kan vi definere:<br>
* *snittet* av $A$ og $B$: $A\cap B=\{x\in A\; :\; x\in B\}$
* *differansen* av $A$ og $B$: $A\backslash B=\{x\in A\; :\; \neg(x\in B)\}$
* *unionen* av $A$ og $B$: $A\cup B=\{x\in A\; :\; x\in A\lor x\in B\}$

### **Aksiom 3.5** 
Gitt mengder $A$ og $B$ er egenskapen $\langle\langle x\; :\; x\in A\lor x\in B\rangle\rangle$ mengdedannende.

### **Definisjon 3.5** 
Når $B\subseteq A$ er det vanglig å kalle $A\backslash B$ for komplementet til $B$ i $A$ og man kan bruke notasjonen $\mathcal{C}_A(B)=A\backslash B$. Evt. $\mathcal{C}(B)=B^{\mathcal{C}}=A\backslash B$.

### **Aksiom 3.6** 
Dersom $A$ er en mengde utgjør delmengdene til $A$ en mengde, kalt *potensmengden* til $A$, som skrives $\wp (A)$:$$\wp (A)=\{B\; :\; B\subseteq A\}$$

### **Aksiom 3.7** 
Gitt mengder $A$ og $B$ er *produktet* av $A$ og $B$ veldeinert ved: $$A\times B=\{z\; : \; \exists x\in A \;\;\; \exists y\in B \;\;\; z=(x,y)\}$$ Det er vanlig å omskrive: $$A\times B=\{(x,y)\; :\; x\in A\land y\in B\}$$

### **Definisjon 3.6** 
En *graf* er en mengde bestående av par. Gitt mengder $A$ og $B$ er en graf fra $A$ til $B$ en delmengde av $A\times B$.

### **Lemma 3.1** 
Dersom $f\; :\; A\to B$, $g\; :\; B\to C$ og $h\; :\; C\to D$ har vi $h\circ (g\circ f)=(h\circ g)\circ f$

## 4 Mer om mengder
### **Aksiom 4.1** 
Dersom $\mathcal{A}$ er en mengde bestående av mengder, kan de sistnevnte føyes sammen til en stor mengde, kalt unionen til $\mathcal{A}$, som skrives:$$\cup \mathcal{A}=\{x : \exists A\in \mathcal{A} \quad x\in A\}$$ Med en slik notasjon får vi: $$\cup \{A,B\}=A\cup B$$ Tilsvarende kan man deﬁnere, når $\mathcal{A}$ er en ikke-tom mengde bestående av mengder: $$\cap \mathcal{A}=\{x : \forall A\in \mathcal{A} \quad x\in A \}$$ Merk at vi har: $$\cap \{A,B\}=A\cap B$$

### **Deﬁnisjon 4.1** 
(Familier). La $U$ være en mengde og $I$ en annen mengde. En familie delmengder av $U$ indeksert av $I$ er en avbildning fra $I$ til $\mathcal{P}(U)$.<br>
&nbsp;&nbsp;&nbsp;&nbsp; Når $A$ er en familie indeksert av $I$ er det vanlig å skrive $A$ i heller enn $A_i$ for verdien til $A$ i $i\in I$ og å betegne familien $A$ som $(A_i)_{i\in I}$. Merk at vi skriver verdimengden til $A$ som: $$\{A_i : i\in I \}$$

### **Deﬁnisjon 4.2** 
La $U$ være en mengde og $(A_i)_{i\in I}$ en familie delmengder av U.<br>
Vi deﬁnerer snittet til familien ved: $$\cap _{i\in  I} \; A_i =\{x\in U : \forall i\in I\quad x\in A_i \}$$ og unionen ved: $$\cup _{i\in  I} \; A_i =\{x\in U : \exists i\in I\quad x\in A_i \}$$ Disse nye deﬁnisjonene tilsvarer de gamle ved at: $$\cap _{i\in I}\; A_i = \cap \{A_i : i\in I\}$$ og $$\cup _{i\in I}\; A_i = \cup \{A_i : i\in I\}$$

### **Deﬁnisjon 4.3** 
La $I$ og $U$ være en mengder og $$(A_i)_{i\in I}$ en familie delmengder av $U$. Vi deﬁnerer: $$\underset{i\in I}{\prod} A_i=\{f\in U^I : \forall i\in I\quad f(i)\in A_i \}$$

### **Aksiom 4.2** 
(Utvalgsaksiomet). La $(A_i)_{i\in I}$ være en familie mengder. Vi har da: $$(\forall i\in I\quad A_i\neq \emptyset)\implies \underset{i\in I}{\prod} A_i \neq \emptyset$$ Med andre ord, dersom hver 
$A_i \neq\emptyset$ kan vi velge et element $f(i) \in A_i$ for hver $i\in I$. Da vil $f$ være et element i $\underset{i\in I}{\prod} A_i$. Grunnen til at det trengs et aksiom er at $I$ kan være uendelig, slik at man gjør uendelig mange valg simultant.




## Set Theory Axioms
Specifically, ZFC is a collection of approximately 9 axioms (depending on convention and precise formulation) that, taken together, define the core of mathematics through the usage of set theory. More formally, ZFC is a predicate logic equipped with a binary relation ∈, which refers to set membership and is read as "in". To be clear, it is said that a∈b when **a** is an element of **b**.
<!--more-->
### Notation
In general, statements in set theory are expressed using first-order logic, which uses a number of quantifiers (or logical symbols):

- $\in$ means "is in", as in the introduction.
- $\forall$ means "for all"; e.g. $\forall n\in \mathbb{R} : n^2 \geq 0$ (translated: for all real $n, n^2 \geq 0$) is a way of expressing the trivial inequality.
- $\exists$ means "there exists"; e.g. $\forall x\in \mathbb{R} (\exists y\in \mathbb{R} : y^3=x)$ (translated: for all real $x$, there exists a real $y$ such that y^3=x) is a way of stating that every real number has a real cube root.
- $\equiv$ means "is equivalent to". For example, $x^3>0\equiv x>0$ is a way of expressing the fact that $x^3$ is positive if and only if $x$ is positive.
- $\implies$ means "implies". For example, $x>0 \implies x^2>0$ s a way of expressing the fact that the square of a positive number is positive. Note that $x>0\not\equiv 2>0$, since $x^2>0 \implies x>0$ is a false statement (e.g. for $x=−1$).
- $\land$ means "logical and"; e.g. $n^2>0\land n^3 < 0$ is a way of expressing the fact that $n^2$ is positive and $n^3$ is negative; i.e. $n$ is negative.

This allows for the axioms in ZFC to be stated succinctly using symbols, as in the following section.

#### Formal Definition (Axioms)
The axioms of ZFC can be stated in several equivalent ways, and have slightly different names and logical formulations depending on the source. Of course, each individual source will have a rigorous correct treatment of the axioms, one of which follows:

### Axiom of extensionality
$$∀u(u∈X≡u∈Y)⟹X=Y$$
::: tip
In other words, if $u \in X \iff u\in Y$ for all $u$, then $X=Y$. In plain language, this statement is equivalent to "If two sets have the same elements, they are the same set."
:::
### Axiom of pairing
$$∀a∀b∃z∀x(x∈z≡(x=a∨x=b)),$$
where $\lor$ denotes the logical or quantifier.
::: tip
In other words, for all $a$ and $b$, there exists a $z$ such that for all $x$, $x \in Z$ is equivalent to the statement "$x=a$ or $x=b$". In plain language, this statement is equivalent to "Given two elements, there exists a set containing exactly those two elements."
:::
### Axiom of comprehension
$$∀X∀p∃Y∀u(u∈Y≡(u∈X∧ϕ(u,p))),$$
where $\land$ is the logical and quantifier, and $\phi$ is an arbitrary property.

![Axiom of comprehension](./aoc.png)

*Axiom of comprehension: the elements of $A$ satisfying $\phi$ form a new set $B$*
::: tip
In plain language, this statement is equivalent to "Given any property $\phi$ and set $X$, there exists a set containing all elements of $X$ that satisfy $\phi$." In informal terms, a subset of a set can be constructed by a succinct rule; e.g. the rule "$x$ even" applied to the set of integers results in a new set.
:::

### Axiom of union
$$∀X∃Y∀u(u∈Y≡∃z(z∈X∧u∈z)),$$
where $\land$ is the logical and qualifier.
::: tip
In other words, for all $X$ there exists a $Y$ such that for all $u$, $u \in Y$ is equivalent to the statement "There exists $z$ such that $z \in X$ and $u\in z$." In plain language, there exists a set $Y$ consisting of the union of all elements of $X$.
:::
### Axiom of power set
$$∀X∃Y∀u(u∈Y≡u⊆X)$$
::: tip
In other words, for any set $X$, there exists a set $Y$ whose elements are subsets of $X$. In plain language, this axiom states that the power set of $X$ exists.
:::
### Axiom of infinity
$$∃S(∅∈S∧(∀x∈S(x∪{x}∈S)))$$
::: tip
In simpler terms, an infinite set exists.
:::
### Axiom of replacement
If $F$ is any function, then for any set $X$ there exists a set $Y=F(X)={F(x),x∈X}$. The statement in logical quantifiers is more complex.

![Axiom of replacement](./aor.png)

*A function takes any set $A$ to a new set $B=F(A)$*

### Axiom of regularity
$$∀S(S\neq ∅⟹(∃x∈S:S∩x=∅))$$
::: tip
In other words, for all non-empty sets $S$, there exists an element of $S$ that is disjoint with $S$ (shares no elements with $S$). This has two major consequences:
:::
- No set can be an element of itself. This resolves Russell's paradox.
- Every set has a smallest element with respect to ∈.

These 8 axioms define a consistent theory, **ZF** (though, of course, it is very difficult to prove that this system is consistent). When the axiom of choice is added to the eight axioms above, the theory becomes **ZFC** (the "C" for choice), and it is this system that is commonly used as the foundation of mathematics.

## Functions
### Injective, Surjective and Bijective
A function is a way of matching the members of a set "A" **to** a set "B":

![function mapping](./function-mapping.svg)

- A ***General Function*** points from each member of "A" to a member of "B".

    It ***never*** has one "A" pointing to more than one "B", so ***one-to-many*** is not OK in a function (so something like "f(x) = 7 ***or*** 9" is not allowed)

    But more than one "A" can point to the same "B" (***many-to-one is OK***)

- ***Injective*** means we won't have two or more "A"s pointing to the same "B".

    So ***many-to-one is NOT OK*** (which is OK for a general function).

    As it is also a function ***one-to-many is not OK***

    But we can have a "B" without a matching "A"

    Injective is also called "***One-to-One***"

- ***Surjective*** means that every "B" has ***at least one*** matching "A" (maybe more than one).

    There won't be a "B" left out.

- ***Bijective*** means both Injective and Surjective together.

    So there is a perfect "***one-to-one correspondence***" between the members of the sets.

    (But don't get that confused with the term "One-to-One" used to mean injective).
::: warning
Bijective functions have an <b><i>inverse</i></b> !

If every "A" goes to a unique "B", and every "B" has a matching "A" then we can go back and forwards without being led astray.
:::
### On A Graph
So let us see a few examples to understand what is going on.

When ***A*** and ***B*** are subsets of the Real Numbers we can graph the relationship.

Let us have ***A*** on the x axis and ***B*** on y, and look at our first example:

![vertical-line-test](./vertical-line-test.svg)

This is ***not a function*** because we have an ***A*** with many ***B***. It is like saying f(x) = 2 ***or*** 4

It fails the "Vertical Line Test" and so is not a function. But is still a valid relationship, so don't get angry with it.

Now, a general function can be like this:

![function-general-graph](./function-general-graph.svg)
*A General Function*

It CAN (possibly) have a ***B*** with many ***A***. For example sine, cosine, etc are like that. Perfectly valid functions.

But an "***Injective Function***" is stricter, and looks like this:

![function-injective-graph](./function-injective-graph.svg)
*"Injective" (one-to-one)*

In fact we can do a "Horizontal Line Test":

::: warning
To be <i><b>Injective</b></i>, a Horizontal Line should never intersect the curve at 2 or more points.
:::

So:

  - If it passes the vertical line test it is a function
  - If it also passes the horizontal line test it is an injective function

## Peanos aksiomer

### 1 Tall

Hva er egentlig tall? Tanken her, er ikke å si hva tall er, hva deres interne struktur muligens kan være,men å si hva vi kan gjøre med dem, sett utenifra. Vi er vant til å addere og multiplisere tall, og sammenlikne dem, for eksempel, men er disse operasjonene uavhengige av hverandre? Kan de muligens avledes fra et enklere og mer grunnleggende konsept? Her skal vi ta utgangspunkt i en tellemekanisme, som vi tenker oss at består i å legge til én. Vi påstår at $0$ er et naturlig tall, og at hvert naturlige tall n har en suksessor $S(n)$. Vi tenker oss her at $S(n) = n + 1$, men at addisjon vil være en operasjon vi skal definere senere, ved hjelp av $S$. Vi forholder oss i utgangspunktet bare til at mengden $\mathbb{N}$ er utstyrt med et spesielt element $0\in \mathbb{N}$ og en avbildning $S : \mathbb{N} \to \mathbb{N}$. Akkurat hva trenger man å vite om $0$ og $S$ for at alle andre egenskaper ved de naturlige tallene skal kunne utledes? Det vanligste settet med aksiomer for $0$ og $S$ kalles Peanos aksiomer.

### 1.1 Naturlige tall
**Peanos aksiomer**. Det naturlige tallene utgjør en mengde N slik at følgende gjelder:

**Aksiom 1.1** (Peanos aksiomer)

* Mengden $\mathbb{N}$ er utstyrt med:
    * et valg av element $0\in \mathbb{N}$, kalt null,
    * et avbildning $S : \mathbb{N} \to \mathbb{N}$, kalt suksessorfunksjonen.
* Elementet $0$ er ikke i verdimengden til $S$.
* Avbildningen $S$ er injektiv.
* (Induksonsbevis) La $P$ være en egenskap på $\mathbb{N} slik at:
    * $P(0)$,
    * $\forall n\in\mathbb{N}\; P(n) \implies P(S(n))$.
    * Da holder $\forall n\in\mathbb{N}\; P(n)$.

Vi bemerker at den induserte avbildningen $S : \mathbb{N} \to \mathbb{N} \backslash \{0\}$ må være en bijeksjon:

**Proposisjon 1.1** *Avbildningen $S : \mathbb{N} \to \mathbb{N} \backslash \{0\}$ er surjektiv.*

*Bevis*: Vi viser det ved induskjon. For hver $n\in \mathbb{N}$ har vi $P(n)$ være utsagnet:<br>
(i) Vi har da $P(0)$.<br>
(ii) La $n\in \mathbb{N}$. Utsagnet $P(S(n))$ er sant, dermed er utsagnet $P(n)\implies P(S(n))$ sant.<br>
&nbsp;&nbsp;&nbsp;&nbsp; Det første vi skal gjøre er å definere addisjon på $\mathbb{N}$. Man kan forsåvidt formulere et aksiom om at det finnes en avbilding $+ : \mathbb{N}\times\mathbb{N} \to \mathbb{N}$ slik at, for alle $m, n\in \mathbb{N}$:
$$m+0=m$$
$$m + S(n) = S(m + n)$$

Fra dette kan man utlede alle andre egenskaper ved $+$, ved induksjonsprinsippet.

**Definisjon 1.1**. La $A$ være en ikke-tom mengde. En *følge* i $A$ er en avbildning $u : N \to A$. Når $u : N \to A$ er en følge er det vanlig å skrive u$_n$ heller enn $u(n)$, for verdien til $u$ i $n$, også omtalt som leddet til $u$ med indeks $n$.

*Eksempel 1.2* Man kan danne en følge av primtallene...<br>
&nbsp;&nbsp;&nbsp;&nbsp; Gitt en mengde $A$, et element $x\in A$ og en avbildning $f: A\to A$ kan vi ønske å danne en følge viss fire første ledd er: $$x,f(x),f(f(x)),f(f(f(x))),\cdots$$
Følgende teorem gir en presis tolkning av hva vi har i tankene, når vi skriver "..."

**Teorem 1.2** *La $A$ være en ikke-tom mengde. La $x\in A$ og la $f: A\to A$ være en avbildning. Da finnes det en og bare en følge $u : \mathbb{N} \to A$ slik at $u_0=x$ og $\forall n\in \mathbb{N}\quad u_{S(n)} = f(u_n)$*

**Addisjon**<br>
**Teorem 1.3** *Det finnes en og bare en avbildning $+ : \mathbb{N}\times\mathbb{N}\to\mathbb{N}$ slik at:* $$m+0=m$$ $$m + S(n) = S(m + n)$$

**Teorem 1.4** *Regneregler for addisjon. Vi har, for alle $m, n, p \in N$*:
$$(m+n)+p=m+(n+p)$$
$$m+0=0+m=m$$
$$m + n = n + m$$
$$m + p = n + p \implies m = n$$

**Orden**<br>
**Definisjon 1.2** Vi definerer en ordensrelasjon på $\mathbb{N}$: $$m\leq n \iff (\exists p\in \mathbb{N}\quad m+p=n)$$

**Lemma 1.1** *For alle $m, n\in \mathbb{N}$ har vi: $m<n\implies S(m)\leq n$*

**Teorem 1.5** *Forrige definisjon gir en ordensrelasjon på $\mathbb{N}$. Denne ordenener total.*

**Teorem 1.6** *Mengden $\mathbb{N}$ er velordnet.*

**Definisjon 1.3** (Substraksjon) La $m, n\in \mathbb{N}$. Når $m\leq n$ lar vi $n-m$ være det elementet i $\mathbb{N} som tilfredsstiller $m+(n-m)=n$.

### 1.2 Hele tall

**Definisjon.** Det er et problem, dersom man bare forholder seg til naturligetall, at substraksjon ikke alltid er definert. Mer eksplisitt: likninger av typen $m+p=n$, hvor la oss si, $m$ og $n$ er gitt i $\mathbb{N}$, mens $p$ er ukjent i $\mathbb{N}$, lar seg ikkealltid løse. Vi kan være mer presise: likningen lar seg løse bare når $m\leq n$. Innføringen av såkalte negative tall bøter på dette problemet.

**Aksiom 1.2** De hele tallene er en mengde $\mathbb{Z}$ som inneholder $\mathbb{N}$ og som erutstyrt med en avbildning $- : \mathbb{Z} \to \mathbb{Z}$ slik at $- \circ - = id_\mathbb{Z}$ og, når vi definerer: $$- \mathbb{N}=\{-n \; :\; n\in \mathbb{N}\}$$ får vi: $$\mathbb{N}\cup - \mathbb{N}=\mathbb{Z}$$ $$\mathbb{N}\cap - \mathbb{N}=\{0\}$$

**Proposisjon 1.7** *For alle $k\in \mathbb{Z}$ har vi $k=−k$ hvis og bare hvis $k= 0$.*