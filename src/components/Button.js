import React from 'react';
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext';


class Button extends React.Component{
  //add property to the class need to be contextType exactly
  //using this.context approach
  //static contextType = LanguageContext;

  //OR USE CONSUMER APPROACH
  // TO pull multiple different context object
        // <LanguageContext.Consumer>
        //   {(value) => this.renderSubmit(value)}
        // </LanguageContext.Consumer>
  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'ส่ง';
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
      <LanguageContext.Consumer>
        {({language}) => this.renderSubmit(language)}
      </LanguageContext.Consumer>
      </button>
    )
  }

  render() {
    //const text = this.context === 'english' ? 'Submit' : 'ส่ง';

    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)   }

      </ColorContext.Consumer>
    );
  }
}

export default Button;
