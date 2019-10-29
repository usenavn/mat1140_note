# Set Theory Axioms
Specifically, ZFC is a collection of approximately 9 axioms (depending on convention and precise formulation) that, taken together, define the core of mathematics through the usage of set theory. More formally, ZFC is a predicate logic equipped with a binary relation ∈, which refers to set membership and is read as "in". To be clear, it is said that a∈b when **a** is an element of **b**.
<!--more-->
## Notation
In general, statements in set theory are expressed using first-order logic, which uses a number of quantifiers (or logical symbols):

- $\in$ means "is in", as in the introduction.
- $\forall$ means "for all"; e.g. $\forall n\in \mathbb{R} : n^2 \geq 0$ (translated: for all real $n, n^2 \geq 0$) is a way of expressing the trivial inequality.
- $\exists$ means "there exists"; e.g. $\forall x\in \mathbb{R} (\exists y\in \mathbb{R} : y^3=x)$ (translated: for all real $x$, there exists a real $y$ such that y^3=x) is a way of stating that every real number has a real cube root.
- $\equiv$ means "is equivalent to". For example, $x^3>0\equiv x>0$ is a way of expressing the fact that $x^3$ is positive if and only if $x$ is positive.
- $\implies$ means "implies". For example, $x>0 \implies x^2>0$ s a way of expressing the fact that the square of a positive number is positive. Note that $x>0\not\equiv 2>0$, since $x^2>0 \implies x>0$ is a false statement (e.g. for $x=−1$).
- $\land$ means "logical and"; e.g. $n^2>0\land n^3 < 0$ is a way of expressing the fact that $n^2$ is positive and $n^3$ is negative; i.e. $n$ is negative.

This allows for the axioms in ZFC to be stated succinctly using symbols, as in the following section.

### Formal Definition (Axioms)
The axioms of ZFC can be stated in several equivalent ways, and have slightly different names and logical formulations depending on the source. Of course, each individual source will have a rigorous correct treatment of the axioms, one of which follows:

## Axiom of extensionality
$$∀u(u∈X≡u∈Y)⟹X=Y$$
::: tip
In other words, if $u \in X \iff u\in Y$ for all $u$, then $X=Y$. In plain language, this statement is equivalent to "If two sets have the same elements, they are the same set."
:::
## Axiom of pairing
$$∀a∀b∃z∀x(x∈z≡(x=a∨x=b)),$$
where $\lor$ denotes the logical or quantifier.
::: tip
In other words, for all $a$ and $b$, there exists a $z$ such that for all $x$, $x \in Z$ is equivalent to the statement "$x=a$ or $x=b$". In plain language, this statement is equivalent to "Given two elements, there exists a set containing exactly those two elements."
:::
## Axiom of comprehension
$$∀X∀p∃Y∀u(u∈Y≡(u∈X∧ϕ(u,p))),$$
where $\land$ is the logical and quantifier, and $\phi$ is an arbitrary property.

![Axiom of comprehension](./aoc.png)

*Axiom of comprehension: the elements of $A$ satisfying $\phi$ form a new set $B$*
::: tip
In plain language, this statement is equivalent to "Given any property $\phi$ and set $X$, there exists a set containing all elements of $X$ that satisfy $\phi$." In informal terms, a subset of a set can be constructed by a succinct rule; e.g. the rule "$x$ even" applied to the set of integers results in a new set.
:::

## Axiom of union
$$∀X∃Y∀u(u∈Y≡∃z(z∈X∧u∈z)),$$
where $\land$ is the logical and qualifier.
::: tip
In other words, for all $X$ there exists a $Y$ such that for all $u$, $u \in Y$ is equivalent to the statement "There exists $z$ such that $z \in X$ and $u\in z$." In plain language, there exists a set $Y$ consisting of the union of all elements of $X$.
:::
## Axiom of power set
$$∀X∃Y∀u(u∈Y≡u⊆X)$$
::: tip
In other words, for any set $X$, there exists a set $Y$ whose elements are subsets of $X$. In plain language, this axiom states that the power set of $X$ exists.
:::
## Axiom of infinity
$$∃S(∅∈S∧(∀x∈S(x∪{x}∈S)))$$
::: tip
In simpler terms, an infinite set exists.
:::
## Axiom of replacement
If $F$ is any function, then for any set $X$ there exists a set $Y=F(X)={F(x),x∈X}$. The statement in logical quantifiers is more complex.

![Axiom of replacement](./aor.png)

*A function takes any set $A$ to a new set $B=F(A)$*

## Axiom of regularity
$$∀S(S\neq ∅⟹(∃x∈S:S∩x=∅))$$
::: tip
In other words, for all non-empty sets $S$, there exists an element of $S$ that is disjoint with $S$ (shares no elements with $S$). This has two major consequences:
:::
- No set can be an element of itself. This resolves Russell's paradox.
- Every set has a smallest element with respect to ∈.

These 8 axioms define a consistent theory, **ZF** (though, of course, it is very difficult to prove that this system is consistent). When the axiom of choice is added to the eight axioms above, the theory becomes **ZFC** (the "C" for choice), and it is this system that is commonly used as the foundation of mathematics.