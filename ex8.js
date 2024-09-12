function resolverSistemaLinear(a, b, c, d, e, f) {
  // Calculando o denominador comum
  const denominador = a * e - b * d;

  // Verificando se o denominador é zero (sistema sem solução única)
  if (denominador === 0) {
    console.log("O sistema não possui solução única.");
    return;
  }

  // Calculando os valores de x e y
  const x = (c * e - b * f) / denominador;
  const y = (a * f - c * d) / denominador;

  // Imprimindo os resultados
  console.log(`x = ${x}`);
  console.log(`y = ${y}`);
}

// Exemplo de uso:
resolverSistemaLinear(2, 3, 7, 3, 4, 8);