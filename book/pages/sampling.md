(summary)=

# Sampling

**Summary.** Sampling is the process of generating realizations from a {doc}`discrete <probability_distribution>` or {doc}`continuous <probability_density_function>`.

:::{div}
:class: tags-box

**Tags:** <span class="tag-pill">{doc}`probability density function <probability_density_function>`</span> <span class="tag-pill">{doc}`cumulative distribution function <cumulative_distribution_function>`</span> 

:::

<!-- hidden-tag:statistics -->

## Definition

How do computers generate samples from univariate probability distributions? By default, computers are only capable of generating pseudo-random numbers uniformly distributed between zero and one. However, if we know the inverse $F^{-1}(u) = x$ of the {doc}`cumulative distribution function <cumulative_distribution_function>` $F(x)$ of the underlying {doc}`pdfs <probability_density_function>` $p(x)$, we can use this inverse to transform uniform random values into random values from the pdf:


$$
x = F^{-1}(u),
$$

where $u \sim \mathcal{U}(0,1)$ is a sample from a uniform distribution between zero and 1, and $x \sim p(x)$ follows the desired probability distribution.


## Intuition

A visual representation of the role of a cdf is provided below. Observe that the higher the value of $x$, at which we evaluate the cdf, the larger the area we integrate over, and the higher the corresponding non-exceedance probability.

<div style="float: right; width: 100%; margin: 10px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);">
    <iframe src="https://maxramgraber.github.io/MASTER/main/_static/elements/sampling.html" style="width: 100%; aspect-ratio: 2 / 1; border: none; border-radius: 8px;"></iframe>
    <div style="text-align: justify; padding: 5px; font-size: 14px; font-family: Arial, sans-serif; color: #555;">
        <strong>Interactive element.</strong> Change the distributions in the dropdown menu or adjust the speed of the simulation.
    </div>
</div>

```{div} sticky-variable-table
### Nomenclature
| Variable  | Description  |
|-------|--------|
| $x$ | sample from $p(x)$ |
| $p(x)$ | probability density function |
| $F(x)$ | cumulative distribution function |
| $F^{-1}(x)$ | inverse cumulative distribution function |
| $u$ | sample from $\mathcal{U}(0,1)$ |
| $\mathcal{U}(0,1)$ | uniform pdf between $0$ and $1$ |
```

<div id="sticky-iframe-container" background="white">
  <button id="toggle-iframe">↔</button>
  <iframe id="sticky-iframe" src="https://maxramgraber.github.io/MASTER/main/_static/elements/navigation.html" style="width: 100%; aspect-ratio: 2 / 1; border: none; border-radius: 8px; background: white"></iframe>
</div>
