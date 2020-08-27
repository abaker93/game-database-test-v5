import React from 'react';
import Header from './Header';
import Sort from './Sort';
import IconGrid from './IconGrid';
import '../Styles/Styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tableHeaders: [
        { name: 'Total Consoles', type: 'function' },
        { name: 'CIB', type: 'function' },
        { name: 'Loose', type: 'function' },
        { name: 'Other', type: 'function' },
        { name: 'SIB', type: 'function' },
        { name: 'Digital', type: 'function' },
        { name: 'Paid [Consoles]', type: 'function' },
        { name: 'Paid [Games]', type: 'function' },
        { name: 'Paid', type: 'formula' },
        { name: 'Value [Consoles]', type: 'function' },
        { name: 'Value [Games]', type: 'function' },
        { name: 'Value', type: 'formula' },
        { name: 'Appreciation', type: 'formula' },
        { name: 'Want [Console]', type: 'function' },
        { name: 'Want [Games]', type: 'function' },
        { name: 'Company', type: 'single-select' },
        { name: 'Games [Link]', type: 'link-to-record' },
        { name: 'Consoles [Link]', type: 'link-to-record' },
        { name: 'Consoles', type: 'single-line-text' },
        { name: 'Wish List', type: 'formula' },
        { name: 'Amiibo', type: 'link-to-record' },
        { name: 'Paid [Amiibo]', type: 'function' },
        { name: 'Value [Amiibo]', type: 'function' },
        { name: 'Want [Amiibo]', type: 'function' },
        { name: 'Games copy', type: 'link-to-record' },
        { name: 'Controllers copy', type: 'link-to-record' }
      ]
    }
  }

  render() {
    return (
      <div id="app" className="teal light-mode">
        <Header />
        <Sort tableHeaders={this.state.tableHeaders} />
        <IconGrid />
      </div>
    );
  }
}

export default App;
