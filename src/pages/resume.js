import React from "react"

import SEO from "../components/seo"

const SecondPage = () => (
  <div>
    <SEO title="Page two" />
    <h1 class="resume-title">Resume.</h1>
    <hr />
    <div class="resume-container">
      <div class="resume-container_content">
        <div class="content">
          <h1>
            {" "}
            Greentrust - <span class="dates">(Aug.2016- Oct.2017)</span>
          </h1>
          <em>
            {" "}
            <p>
              {" "}
              Helped build a successful web app that allow users search
              environmental technologies
            </p>
          </em>
          <ul>
            <li>
              Turn a Design Sketch into static a static Html Css UI using
              bootstrap CSS
            </li>
            <li>
              {" "}
              Communicated with an external API with Jquery AJAX methods{" "}
            </li>
            <li>
              Implemented error handling with jQuery Added functionalities and
              search inputs with jQuery{" "}
            </li>
            <li> Wrote Documentation for codebase Maintenance</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default SecondPage
