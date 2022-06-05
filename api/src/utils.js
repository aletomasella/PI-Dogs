const filterData = (data) => {
  return {
    id: data.id,
    weight: data.metric,
    height: data.metric,
    name: data.name,
    expectedLifetime: data.life_span,
    temperament: data.temperament ? data.temperament.split(",") : null,
    origin: data.origin ? data.origin.split(",") : null,
    image: data.image.url ? data.image.url : null,
    group: data.breed_group,
    idealUse: data.bred_for,
  };
};

const filterDataForNamesSearch = (data) => {
  return {
    id: data.id,
    weight: data.metric,
    height: data.metric,
    name: data.name,
    expectedLifetime: data.life_span,
    temperament: data.temperament ? data.temperament.split(",") : null,
    origin: data.origin ? data.origin.split(",") : null,
    group: data.breed_group,
    idealUse: data.bred_for,
  };
};

module.exports = {
  filterData,
  filterDataForNamesSearch,
};
