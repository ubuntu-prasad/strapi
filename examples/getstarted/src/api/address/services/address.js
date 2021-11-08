const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::address.address', {
  find() {
    return {
      results: [],
      pagination: {
        foo: 'bar',
      },
    };
  },
});
