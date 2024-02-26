import lifeIndication from '../lifeIndication';

test.each([
  ['healthy', {
    name: 'Маг',
    health: 90,
  }],
  ['wounded', {
    name: 'Маг',
    health: 45,
  }],
  ['critical', {
    name: 'Маг',
    health: 15,
  }],
])('testing indication life %s status in %o  ', (status, obj) => {
  const result = lifeIndication(obj);
  expect(result).toBe(status);
});
