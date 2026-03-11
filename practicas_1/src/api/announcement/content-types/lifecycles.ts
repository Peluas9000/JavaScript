export default {
  async afterUpdate(event) {},

  async afterCreate({ params, data, result }) {
    if (data.title !== undefined && data.title !== result.title) {
      console.log("Simulating email: new announcement created");
      data.message = "Simulating email: new announcement created";
    }
  },

  async beforeCreate(event) {},

  async beforeUpdate({ data, result }) {
    if (data.title !== undefined && data.title !== result.title) {
      data.title = "";
      Object.assign(data, {
        title: data.title.toUpperCase(),
        slug: data.slug.toUpperCase(),
        message: data.message.toUpperCase(),
      });
      data.updateCount = result.updateCount + 1;
    }

    console.log(
      `Titulo: ${data.title} - Slug: ${data.slug} - Message: ${data.message} - Update Count: ${data.updateCount}`,
    );
  },
};
