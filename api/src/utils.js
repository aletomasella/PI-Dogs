const filterData = (data) => {
  return {
    id: data.id,
    weight: data.metric,
    height: data.metric,
    name: data.name,
    expectedLifetime: data.life_span,
    temperament: data.temperament ? data.temperament.split(",") : null,
    origin: data.origin ? data.origin.split(",") : null,
    image: data.image.url,
    group: data.breed_group,
  };
};

module.exports = {
  filterData,
};
