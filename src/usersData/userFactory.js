export const userFactory = (user) => ({
  name: 'Mads L. Klausen',
  email: 'MadsLKlausen@jourrapide.com',
  path: 'https://google.com',
  id: 1,
  ...user,
});
