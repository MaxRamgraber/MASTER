(summary)=

# Cumulative distribution function

**Summary.** A cumulative distribution function (cdf) integrates a {doc}`discrete <probability_distribution>` or {doc}`continuous <probability_density_function>` from $-\infty$ to a specified value $-\infty < X < \infty$. Thereby, it provides the non-exceedance probability $p(X \leq x)$ of the probability distribution $p$.

:::{div}
:class: tags-box

**Tags:** <span class="tag-pill">{doc}`probability density function <probability_density_function>`</span> 

:::

<!-- hidden-tag:statistics -->

## Definition

A cumulative distribution function (cdf) $F(x)$ is obtained by integrating a pdf $p(x)$:

$$
F(x) = \int_{-\infty}^{x} p(t) dt.
$$

Since all {doc}`pdfs <probability_density_function>` must by definition integrate to $1$, and since the output of a cdf is a non-exceedance probability, its output always lies between $0 \leq F(x) \leq 1 \; \forall x$. The *inverse* of a cdf is also often used to {doc}`sample <sampling>` the associated pdf by drawing a random number from a uniform distribution $u\sim\mathcal{U}(0,1)$ and mapping it with the inverse cdf $X\sim p(F^{-1}(Z))$.

## Intuition

A visual representation of the role of a cdf is provided below. Observe that the higher the value of $x$, at which we evaluate the cdf, the larger the area we integrate over, and the higher the corresponding non-exceedance probability.

<div style="float: right; width: 100%; margin: 10px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);">
    <iframe src="https://maxramgraber.github.io/MASTER/main/_static/elements/cumulative_distribution_function.html" style="width: 100%; aspect-ratio: 2 / 1; border: none; border-radius: 8px;"></iframe>
    <div style="text-align: justify; padding: 5px; font-size: 14px; font-family: Arial, sans-serif; color: #555;">
        <strong>Interactive element.</strong> Hover your mouse over either subplot and observe how the pdf and cdf change.
    </div>
</div>

```{div} sticky-variable-table
### Nomenclature
| Variable  | Description  |
|-------|--------|
| $x$ | continuous random variable |
| $X$ | a specific outcome $X \in x$ |
| $p(x)$ | probability density function |
| $F(x)$ | cumulative distribution function |
| $F^{-1}(u)$ | inverse cumulative distribution function |
```

<div id="sticky-iframe-container" background="white">
  <button id="toggle-iframe">↔</button>
  <iframe id="sticky-iframe" src="https://maxramgraber.github.io/MASTER/main/_static/elements/navigation.html" style="width: 100%; aspect-ratio: 2 / 1; border: none; border-radius: 8px; background: white"></iframe>
</div>
