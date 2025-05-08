---
title: Regression Model Evaluation Metrics
description: Random notes on regression model evaluation metrics, and some base/side knowledge.
date: 2025-05-08 18:23:00 +0900
categories: [study]
tags: [AI, study]
pin: false
math: true
mermaid: true
image:
  path: /assets/img/regression/title.png
---
## Introduction: The Essence of Regression Models

When we talk about prediction models, we're typically referring to one of two main types:

- **Regression models**: These produce continuous outputs (like predicting house prices, temperature, or stock values)
- **Classification models**: These generate categorical or binary outputs (like predicting yes/no, spam/not spam, or classifying images)

Regression models attempt to find relationships between variables to predict continuous numeric values. But how do we know if our regression model is any good? This is where evaluation metrics come in.

## Theoretical Foundation of Evaluation Metrics

### Residuals: The Building Blocks

At the core of regression evaluation is the concept of **residuals** - the differences between predicted values and actual observed values:

$$\text{Residual} = y_i - \hat{y}_i$$

Where __$$y_i$$__ is the actual value and __$$\hat{y}_i$$__ is the predicted value.

### Bias and Error

**Bias** represents systematic errors in predictions. Ideally, the sum of residuals should be close to zero, indicating that your model isn't consistently over or under-predicting values.

### The Modeling Cycle

The process typically flows from model construction to evaluation to refinement:

1. Build the model
2. Evaluate the model
3. Improve the model
4. Repeat until reaching satisfactory performance

## Quick Reference: Metrics Comparison Table

| Metric | Range | Interpretation | Best For | Limitations |
|--------|-------|----------------|----------|-------------|
| MAE | [0, ∞) | Average error magnitude | General use, robust to outliers | Not differentiable |
| MSE | [0, ∞) | Average squared error | Optimization | Sensitive to outliers |
| RMSE | [0, ∞) | Error in original units | Easy interpretation | Sensitive to outliers |
| R² | (-∞, 1] | Explained variance | Model comparison | Increases with features |
| MAPE |  [0, ∞) | Percentage error | Business contexts | Biased, undefined at zero |
| SMAPE | [0, 2] | Symmetric % error | Forecasting | Unintuitive range |

## Basic Evaluation Metrics

### Mean Absolute Error (MAE)

Mean Absolute Error measures the average magnitude of errors without considering their direction.

#### Formula:

$$\text{MAE} = \frac{1}{n}\sum_{i=1}^{n}|y_i - \hat{y}_i|$$

#### Advantages:
- **Intuitive interpretation**: Directly represents the average error magnitude
- **Robust to outliers**: Doesn't amplify the effect of outliers
- **Unit preservation**: Maintains the original unit dimension
- **Straightforward**: Directly reflects the average deviation

#### Limitations:
- **Equal error weighting**: Assumes all error magnitudes are equally important
- **Optimization challenges**: Not easily differentiable at zero
- **Scale dependence**: Difficult to compare across different datasets

> MAE is like a ruler that measures the average distance between predictions and reality, without caring about the direction of the error.
{: .prompt-info }

### Mean Squared Error (MSE) and Root Mean Squared Error (RMSE)

MSE calculates the average of squared differences between predicted and actual values. RMSE brings the metric back to the original units.

#### MSE Formula:

$$\text{MSE} = \frac{1}{n}\sum_{i=1}^{n}(y_i - \hat{y}_i)^2$$

#### RMSE Formula:

$$\text{RMSE} = \sqrt{\frac{1}{n}\sum_{i=1}^{n}(y_i - \hat{y}_i)^2}$$

#### Advantages:
- **Penalizes larger errors**: Due to the squared term
- **Differentiable**: Easier to use in optimization algorithms
- **Unbiased predictions**: Minimizing MSE leads to centered predictions

#### Limitations:
- **Outlier sensitivity**: Heavily influenced by outliers
- **Interpretation difficulty**: MSE is not in original units (RMSE solves this)
- **Unit variance**: Cannot directly compare across different datasets

> If MAE is a ruler, then MSE is a magnifying glass that emphasizes larger errors. RMSE converts that magnified view back to the original scale.
{: .prompt-info }

### Coefficient of Determination (R²)

R² represents the proportion of variance in the dependent variable that can be explained by the independent variables.

#### Formula:

$$R^2 = 1 - \frac{RSS}{TSS}$$

Where:
- RSS (Residual Sum of Squares): $$\sum(y_i - \hat{y}_i)^2$$
- TSS (Total Sum of Squares): $$\sum(y_i - \bar{y})^2$$

#### Interpretation:
- Ranges typically from 0 to 1 (can be negative for very poor models)
- Higher values indicate better fit (more variance explained)
- An R² of 0.75 means the model explains 75% of the variance

#### Advantages:
- **Scale-independent**: Can compare models across different target variables
- **Intuitive percentage**: Easy to understand as "percent of variance explained"
- **Widely recognized**: Standard reporting metric in statistics

#### Limitations:
- **Always increases** with additional features (even irrelevant ones)
- **No penalty** for model complexity (unlike adjusted R²)
- **Can be misleading** if model assumptions are violated
- **Not ideal for time series** or non-linear relationships

> R² is like a school grade for your model - it tells you what percentage of the test your model got right, but doesn't tell you where it made mistakes.
{: .prompt-info }

## Advanced Evaluation Metrics

### Percentage-Based Errors

#### Mean Absolute Percentage Error (MAPE)

MAPE measures the percentage difference between actual and predicted values.

$$\text{MAPE} = \frac{1}{n}\sum_{i=1}^{n}\left|\frac{y_i - \hat{y}_i}{y_i}\right| \times 100\%$$

#### Advantages and Limitations of MAPE:
- **Business-friendly**: Easy to communicate as a percentage
- **Scale-independent**: Useful for comparing across different datasets
- **Issues with zeros**: Undefined when actual values are zero
- **Asymmetric penalty**: Penalizes over-forecasting more than under-forecasting

#### Symmetric Mean Absolute Percentage Error (SMAPE)

SMAPE attempts to address MAPE's asymmetry problem:

$$\text{SMAPE} = \frac{1}{n}\sum_{i=1}^{n}\left|\frac{y_i - \hat{y}_i}{(y_i + \hat{y}_i)/2}\right| \times 100\%$$

#### Advantages of SMAPE:
- **Bounded range**: Output is limited to [0%, 200%]
- **More balanced**: Treats over and under-predictions more equally
- **Handles zeros better**: Though still problematic when both values are zero

### Logarithmic Error Metrics

#### Mean Squared Logarithmic Error (MSLE)

MSLE applies logarithmic transformation before calculating squared error:

$$\text{MSLE} = \frac{1}{n}\sum_{i=1}^{n}(\log(y_i + 1) - \log(\hat{y}_i + 1))^2$$

#### Root Mean Squared Logarithmic Error (RMSLE):

$$\text{RMSLE} = \sqrt{\text{MSLE}}$$

These metrics are particularly useful for:
- Data with exponential growth patterns
- Cases where errors at lower values should be penalized more than at higher values
- Datasets with a wide range of values

### Information Criteria

#### Akaike Information Criterion (AIC) and Bayesian Information Criterion (BIC)

These metrics help balance model fit with complexity:

$$\text{AIC} = 2k - 2\ln(L)$$
$$\text{BIC} = \ln(n)k - 2\ln(L)$$

Where:
- k is the number of model parameters
- L is the likelihood function
- n is the number of observations

These metrics:
- Penalize models with more parameters
- Help prevent overfitting
- Cannot be compared across different datasets

## How to Choose the Right Evaluation Metric?

### Key Considerations

1. **What is the impact of outliers?**
   - If outliers should be heavily penalized: MSE/RMSE
   - If outliers shouldn't dominate evaluation: MAE

2. **Is over-prediction or under-prediction more costly?**
   - If both are equally important: Symmetric measures like RMSE or MAE
   - If one direction is more costly: Consider asymmetric measures or custom loss functions

3. **Do you need relative or absolute measures?**
   - For comparing across datasets: R², MAPE
   - For interpretation in original units: RMSE, MAE

### General Selection Guidelines

- **Optimize one primary metric** during model training
- **Evaluate with multiple metrics** to understand different aspects of performance
- **Consider domain standards** - some fields have conventional metrics
- **Understand limitations** of each metric in your specific context

## Conclusion: Best Practices

Understanding regression model evaluation metrics is crucial for building effective predictive models. Different metrics highlight different aspects of model performance:

- **MAE**: Best for understanding average error magnitude
- **MSE/RMSE**: Best for optimization and when large errors are important
- **R²**: Best for explaining variance and model comparison
- **MAPE/SMAPE**: Best for business contexts requiring percentage interpretation
- **MSLE/RMSLE**: Best for exponential data and when relative errors matter

Remember that the ultimate goal isn't just to optimize metrics but to create models that generalize well to new, unseen data and provide valuable insights for your specific problem.

> In regression modeling, metrics are your compass, guiding you toward better predictions and deeper understanding of your data's story.
{: .prompt-tip }

## References
1. A Comprehensive Overview of Regression Evaluation Metrics, <https://developer.nvidia.com/blog/a-comprehensive-overview-of-regression-evaluation-metrics/#entry-content-comments>, By Eryk Lewinson
2. James, G., Witten, D., Hastie, T., & Tibshirani, R. (2013). *An Introduction to Statistical Learning*.
3. Chai, T., & Draxler, R. R. (2014). *Root mean square error (RMSE) or mean absolute error (MAE)?*
4. Willmott, C. J., & Matsuura, K. (2005). *Advantages of the mean absolute error (MAE) over the root mean square error (RMSE)*.

---
