(summary)=

# Probability density function

**Summary.** A probability density function (pdf) is a {doc}`probability distribution <probability_distribution>` associated with a continuous {doc}`random variable <random_variable>`. Its probability densities can be converted into probabilities by integrating over ranges of the associated random variable.

:::{div}
:class: tags-box

**Tags:** <span class="tag-pill">{doc}`probability distribution <probability_distribution>`</span>  <span class="tag-pill">{doc}`random variable <random_variable>`</span> 

:::

<!-- hidden-tag:statistics -->

## Definition

A probability density function (pdf) $p(x)$ is a function associated with a continuous random variable $x$, which assigns concrete probability densities $P(x = X)$ to unique outcomes $X$ of the random process associated with the random variable $x$. By definition, all probabilities of a random process must integrate to one, that is to say $\int_{-\infty}^{\infty} p(X) = 1$. Probability densities cannot be negative: $p(x) \geq 0$.

## Intuition

The element below illustrates a range of different pdfs. Observe that not all pdfs have the same support (*support*: range of input values which yield non-zero output). For instance, pdfs like the Gaussian pdf or the Laplace pdf have infinite support $p(-\infty < x < \infty) > 0$, whereas the beta pdf is only defined between zero and one.

<div style="float: right; width: 100%; margin: 10px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);">
    <iframe src="https://maxramgraber.github.io/MASTER/main/_static/elements/probability_density_function.html" style="width: 100%; aspect-ratio: 2 / 1; border: none; border-radius: 8px;"></iframe>
    <div style="text-align: justify; padding: 5px; font-size: 14px; font-family: Arial, sans-serif; color: #555;">
        <strong>Interactive element.</strong> Select a pdf from the dropdown menu, then adjust the sliders of its parameters to see how they affect its shape. 
    </div>
</div>

```{div} sticky-variable-table
### Nomenclature
| Variable  | Description  |
|-------|--------|
| $x$ | continuous random variable |
| $X$ | a specific outcome $X \in x$ |
| $p(x)$ | probability density function |
```

<div id="sticky-iframe-container" background="white">
  <button id="toggle-iframe">↔</button>
  <iframe id="sticky-iframe" src="https://maxramgraber.github.io/MASTER/main/_static/elements/navigation.html" style="width: 100%; aspect-ratio: 2 / 1; border: none; border-radius: 8px; background: white"></iframe>
</div>
