import React from 'react';

const defaultOptions = {
  significantDigits: 0,
  thousandsSeparator: ',',
  decimalSeparator: '.',
  symbol: 'UGX'
}

const currencyFormatter = (value, options) => {
  if (typeof value !== 'number') value = 0.0
  options = { ...defaultOptions, ...options }
  value = value.toFixed(options.significantDigits)

  const [currency, decimal] = value.split('.')
  return `${options.symbol} ${currency.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    options.thousandsSeparator
  )}`
}

export function CnumberFormat({ value }) {
  return (

    currencyFormatter(value)
  );
}