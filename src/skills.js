import './styles/skills.scss';

function Main() {
  return (
    <section className="skills">
      <div className="wrapper">
        <div className="container">
          <div class="header">
            <h2>
              SKILLS
            </h2>
            <h3>
              다룰 수 있는 도구들
            </h3>
          </div>
          <ul>
            <li>
              <div class="image-container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png" alt="" width="100px" />
              </div>
              HTML5
            </li>
            <li>
              <div class="image-container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png" alt="" width="100px" />
              </div>
              CSS3
            </li>
            <li>
              <div class="image-container">
                <img src="https://cdn.cdnlogo.com/logos/j/69/javascript.svg" alt="" width="100px" />
              </div>
              JavaScript
            </li>
            <li>
              <div class="image-container">
                <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/jquery_vertical_logo_icon_169489.png" alt="" width="100px" />
              </div>
              jQuery
            </li>
            <li>
              <div class="image-container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" alt="" width="100px" />
              </div>
              React
            </li>
            <li>
              <div class="image-container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="" width="100px" />
              </div>
              Python
            </li>
            <li>
              <div class="image-container">
                <img src="https://www.adrenalina.es/wp-content/uploads/2020/04/desarrollador-ruby-on-rails.png" alt="" width="100px" />
              </div>
              RAILS
            </li>
            <li>
              <div class="image-container">
                <img src="https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png" alt="" width="100px" />
              </div>
              Sass
            </li>
            <li>
              <div class="image-container">
                <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="" width="100px" />
              </div>
              git
            </li>
            <li>
              <div class="image-container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="" width="100px" />
              </div>
              Typescript
            </li>
          </ul>
          <div className="description">
            <div class="html5">
              뫄뫄뫄를 힐 수 있어여
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
