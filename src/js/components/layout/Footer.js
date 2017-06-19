import React from "react";


export default class Footer extends React.Component {
  render() {
    const footerStyles = {
      marginTop: "30px",
    };

    return (
      <footer style={footerStyles}>
            <div id ="footer">
              <a href="http://perso.esiee.fr/~perrina"> Alizee Perrin</a>
              - ESIEE Paris 2017 - F. Febvay Design's
            </div>
      </footer>
    );
  }
}
