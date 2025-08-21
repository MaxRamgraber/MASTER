(summary)=

# The Kolmogorov-Smirnov test

**Summary.** The Kolmogorov-Smirnov test is a test for goodness-of-fit between two {doc}`probability distributions <probability_distribution>` by quantifying the maximum differences between their {doc}`cumulative distribution functions <cumulative_distribution_function>`.

:::{div}
:class: tags-box

**Tags:** <span class="tag-pill">{doc}`cumulative distribution function <cumulative_distribution_function>`</span>  <span class="tag-pill">{doc}`probability distribution <probability_distribution>`</span>

:::

<!-- hidden-tag:statistics -->

## Definition

The Kolmogorov-Smirnov test is a useful test to compare the similarity of two (usually univariate) probability distributions. It is usually used to either test if (1) two sets of samples come from the same distribution, or (2) whether a set of samples comes from a parametric probability distribution. Here, we will consider the second case. The quantifies this similarity with a statistic

$$
D = \operatorname{sup}_x|\hat{F}(x)-F(x)|
$$

where $D$ is the test statistic, $\operatorname{sup}_x$ is the supremum of the set distances between the two distributions. $\hat{F}(x)$ is the empirical cumulative distribution and $F(x)$ the parametric cumulative distribution function.

## Intuition

Intuitively, the KS-test quantifies the largest difference between the two CDFs under consideration. Experiment with the interactive element below. Select a PDF and adjust its parameters, observe how the KS $D$-value varies as it quantifies the difference between the empirical distribution and the selected PDF. Which distribution (with what parameters) generated the samples represented in the empirical distribution?

<div style="float: right; width: 100%; margin: 10px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);">
    <iframe src="https://maxramgraber.github.io/MASTER/main/_static/elements/KS_test.html" style="width: 100%; aspect-ratio: 2 / 1; border: none; border-radius: 8px;"></iframe>
    <div style="text-align: justify; padding: 5px; font-size: 14px; font-family: Arial, sans-serif; color: #555;">
        <strong>Interactive element. The Kolmogorov-Smirnov test.</strong> 
    </div>
</div>

```{div} sticky-variable-table
### Nomenclature
| Variable  | Description  |
|-------|--------|
| $D$ | Kolmogorov-Smirnov test statistic |
| $x$ | random variable |
| $\hat{F}(x)$ | empirical DF |
| $F(x)$ | parametric PDF |
```

<div id="sticky-iframe-container" background="white">
  <button id="toggle-iframe">↔</button>
  <iframe id="sticky-iframe" src="https://maxramgraber.github.io/MASTER/main/_static/elements/navigation.html" style="width: 100%; aspect-ratio: 2 / 1; border: none; border-radius: 8px; background: white"></iframe>
</div>
