const resolveRoutes = route => {
  if (rouroute.length <= 3) {
    let validRoute = route === '/' ? route : '/:id';
    return validRoute;
  }
  return `/${route}`;
};

export default resolveRoutes;
