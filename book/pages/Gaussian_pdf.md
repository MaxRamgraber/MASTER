(summary)=

# Gaussian pdf

**Summary.** A Gaussian pdf (also known as a *normal pdf*) is a common type of {doc}`probability density function <probability_density_function>`.

:::{div}
:class: tags-box

**Tags:** <span class="tag-pill">{doc}`probability density function <probability_density_function>`</span>  <span class="tag-pill">{doc}`linear transformation <linear_transformation>`</span> 

:::

<!-- hidden-tag:statistics -->

## Definition

A Gaussian probability density function is defined as follows:

$$
\begin{aligned}
    \mathcal{N}(x) &= \frac{1}{\sqrt{2 \pi \sigma^2}} \exp\left(-\frac{(x - \mu)^2}{2 \sigma^2} \right) && \text{in one dimension}\\
    \mathcal{N}(x) &= \frac{1}{(2\pi)^{k/2} |\boldsymbol{\Sigma}|^{1/2}} \exp\left( -\frac{1}{2} (\mathbf{x} - \boldsymbol{\mu})^\top \boldsymbol{\Sigma}^{-1} (\mathbf{x} - \boldsymbol{\mu}) \right) && \text{in multiple dimensions}\\
\end{aligned}
$$

where $\mu$ is the distribution's mean, and $\sigma$ (in 1D: *standard deviation*) or $\boldsymbol{\Sigma}$ (in higher dimensions: *covariance matrix*) parametrize the distribution's spread around the mean. 

## Intuition

Gaussian pdfs are a very common type of {doc}`pdf <probability_density_function>`, as they are extremely recursive: *conditioning* or *marginalizing* a Gaussian pdf yields another, lower-dimensional Gaussian pdf. Likewise, applying a {doc}`linear transformation <linear_transformation>` to a Gaussian pdf yields another Gaussian pdf. 

In higher dimensions, the Gaussian is parametrized by a covariance matrix, which consists of a correlation between the (scalar) random variables in its row and column, multiplied by the standard deviation of the random variable in its row and its column. The element below illustrates how the mean and covariance affect the shape of a two-dimensional Gaussian pdf.

<div style="float: right; width: 100%; margin: 10px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);">
    <iframe src="https://maxramgraber.github.io/MASTER/main/_static/elements/Gaussian_pdf.html" style="width: 100%; aspect-ratio: 3 / 1; border: none; border-radius: 8px;"></iframe>
    <div style="text-align: justify; padding: 5px; font-size: 14px; font-family: Arial, sans-serif; color: #555;">
        <strong>Interactive element.</strong> Drag the handles to adjust the mean, marginal standard deviations, and correlation. Observe how the statistical moments and the associated distribution changes. 
    </div>
</div>

```{div} sticky-variable-table
### Nomenclature
| Variable  | Description  |
|-------|--------|
| $x$ | continuous random variable |
| $p(x)$ | probability density function |
| $\mathcal{N}$ | Gaussian pdf |
| $\mu$ | scalar mean |
| $\boldsymbol{\mu}$ | multivariate mean |
| $\sigma$ | standard deviation |
| $\boldsymbol{\Sigma}$ | covariance matrix |
```

<div id="sticky-iframe-container" background="white">
  <button id="toggle-iframe">↔</button>
  <iframe id="sticky-iframe" src="https://maxramgraber.github.io/MASTER/main/_static/elements/navigation.html" style="width: 100%; aspect-ratio: 2 / 1; border: none; border-radius: 8px; background: white"></iframe>
</div>
