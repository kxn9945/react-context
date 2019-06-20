import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component{
  static contextType = LanguageContext;
  render() {
    return (
      <div>
        Select languate:
        <i className="flag us" onClick={() => this.context.onLanguageChange('english')} />
        <i className="flag th" onClick={() => this.context.onLanguageChange('thai')}/>
      </div>
    )
  }
}

export default LanguageSelector;
