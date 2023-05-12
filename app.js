const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a Yen
    let valueInYen = valueInDollar * 106.58;
    // retornamos el valor
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    // convertimos el valor a Pound
    let valueInPound = valueInYen * 0.00625;
    // retornamos el valor
    return valueInPound;
}

// Exportar todas las funciones en un solo objeto
module.exports = {
  fromEuroToDollar,
  fromDollarToYen,
  fromYenToPound,
};
