let Navbar = {
  render: async () => {
    let view = /*html*/ `
           <nav class="navbar" role="navigation" aria-label="main navigation">
              <div class="container">
                  <div class="navbar-brand">
                      <a class="navbar-item" href="/#/">
                          <img src="https://s3.amazonaws.com/libapps/accounts/114722/images/library_support-1632912_1920.jpg" width="112" height="28">
                      </a>
                      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                          
                      </a>
                  </div>
                  <div id="navbarBasicExample" class="navbar-menu is-active" aria-expanded="false">
                      <div class="navbar-start">
                          <a class="navbar-item" href="/#/">
                              Books
                          </a>
                          <a class="navbar-item" href="/#/about">
                              Students
                          </a>
                          <a class="navbar-item" href="/#/secret">
                              RentedBooks
                          </a>
                      </div>
                      <div class="navbar-end">
                          <div class="navbar-item">
                              <div class="buttons">
                                  <a class="button is-primary" href="/#/register">
                                      <strong>Sign up</strong>
                                  </a>
                                  <a class="button is-light">
                                      Log in
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </nav>
      `;
    return view;
  },
  after_render: async () => {}
};

export default Navbar;
