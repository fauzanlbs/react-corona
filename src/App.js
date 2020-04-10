import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';

import image from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
       <h1 style={{fontSize:19,textAlign:'center', color:'rgb(164, 164, 179)'}}>INFO UPDATE COVID 19</h1>
       <p style={{fontSize:15, color:'rgb(164, 164, 179)', fontWeight:'bold', textAlign:'center', fontVariant:'small-caps', fontVariantCaps:'all-small-caps'}}>Sumber: https://covid19.mathdro.id/api </p>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default App;