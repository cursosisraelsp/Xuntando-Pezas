describe('Funciones básicas', () => {
  function suma(a, b) {
    return a + b;
  }

  test('suma 1 + 2 debería ser 3', () => {
    expect(suma(1, 2)).toBe(3);
  });
});

