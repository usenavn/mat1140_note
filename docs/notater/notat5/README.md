# Familier av mengder, in-, sur-, bi-jeksjon.
## Aksiom 4.1
Dersom $\mathcal{A}$ er en mengde bestående av mengder, kan de sistnevnte føyes sammen til en stor mengde, kalt unionen til $\mathcal{A}$, som skrives:$$\cup \mathcal{A}=\{x : \exists A\in \mathcal{A} \quad x\in A\}$$ Med en slik notasjon får vi: $$\cup \{A,B\}=A\cup B$$ Tilsvarende kan man deﬁnere, når $\mathcal{A}$ er en ikke-tom mengde bestående av mengder: $$\cap \mathcal{A}=\{x : \forall A\in \mathcal{A} \quad x\in A \}$$ Merk at vi har: $$\cap \{A,B\}=A\cap B$$

## Deﬁnisjon 4.1
(Familier). La $U$ være en mengde og $I$ en annen mengde. En familie delmengder av $U$ indeksert av $I$ er en avbildning fra $I$ til $\mathcal{P}(U)$.<br>
&nbsp;&nbsp;&nbsp;&nbsp; Når $A$ er en familie indeksert av $I$ er det vanlig å skrive $A$ i heller enn $A_i$ for verdien til $A$ i $i\in I$ og å betegne familien $A$ som $(A_i)_{i\in I}$. Merk at vi skriver verdimengden til $A$ som: $$\{A_i : i\in I \}$$

## Deﬁnisjon 4.2
La $U$ være en mengde og $(A_i)_{i\in I}$ en familie delmengder av U.<br>
Vi deﬁnerer snittet til familien ved: $$\cap _{i\in  I} \; A_i =\{x\in U : \forall i\in I\quad x\in A_i \}$$ og unionen ved: $$\cup _{i\in  I} \; A_i =\{x\in U : \exists i\in I\quad x\in A_i \}$$ Disse nye deﬁnisjonene tilsvarer de gamle ved at: $$\cap _{i\in I}\; A_i = \cap \{A_i : i\in I\}$$ og $$\cup _{i\in I}\; A_i = \cup \{A_i : i\in I\}$$

## Deﬁnisjon 4.3
La $I$ og $U$ være en mengder og $$(A_i)_{i\in I}$ en familie delmengder av $U$. Vi deﬁnerer: $$\underset{i\in I}{\prod} A_i=\{f\in U^I : \forall i\in I\quad f(i)\in A_i \}$$

## Aksiom 4.2
(Utvalgsaksiomet). La $(A_i)_{i\in I}$ være en familie mengder. Vi har da: $$(\forall i\in I\quad A_i\neq \emptyset)\implies \underset{i\in I}{\prod} A_i \neq \emptyset$$ Med andre ord, dersom hver 
$A_i \neq\emptyset$ kan vi velge et element $f(i) \in A_i$ for hver $i\in I$. Da vil $f$ være et element i $\underset{i\in I}{\prod} A_i$. Grunnen til at det trengs et aksiom er at $I$ kan være uendelig, slik at man gjør uendelig mange valg simultant.

## Definisjon 4.4
La $f : A\to B$ være en avbildning.<br>
* Vi sier at $f$ er *injektiv* dersom: $$\forall x,x' \in A\quad f(x)=f(x')\implies x=x'$$
* Vi sier at $f$ er *surjektiv* dersom: $$\forall y\in B \;\exists x\in A\quad f(x)=y$$
* Vi sier at $f$ er *bijektiv* dersom $f$ er både injektiv og surjektiv.

## Definisjon 4.5
Når $f$ er bijektiv, inversavbildningen til $f$ skrives $f^{-1}$.

## Teorem 4.8
(Cantor) La $A$ være en mengde. Det finnes ingen surjeksjon $A\to \mathcal{P}(A)$. Det finnes heller ingen injekson $\mathcal{P} (A)\to A$.