let Error404 = {
  render: async () => {
    let view = /*html*/ `
          <section class="section">
              <h1> rented out </h1>
          </section>
      `;
    return view;
  },
  after_render: async () => {}
};
export default Error404;
