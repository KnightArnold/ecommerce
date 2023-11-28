const defaultOptions = {
    significantDigits: 0,
    thousandsSeparator: '.',
    decimalSeparator: ',',
    symbol: '$'
  }
  
  const CurrencyFormatter = (value, options) => {
    if (typeof value !== 'number') value = 0.0
    options = { ...defaultOptions, ...options }
    value = value.toFixed(options.significantDigits)
  
    const [currency, decimal] = value.split(',')    
    return decimal ? `${options.symbol} ${currency.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      options.thousandsSeparator
    )}${options.decimalSeparator}${decimal}`
    :
    `${options.symbol} ${currency.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        options.thousandsSeparator
      )}`
  }

  
export default CurrencyFormatter;