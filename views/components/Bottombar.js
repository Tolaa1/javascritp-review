let Bottombar = {
  render: async () => {
    let view = /*html*/ `
      <footer class="footer">
          <div class="content has-text-centered">
              <p>
                 Sorry books not availabe call again !!!
              </p>
          </div>
      </footer>
      `;
    return view;
  },
  after_render: async () => {}
};

export default Bottombar;
