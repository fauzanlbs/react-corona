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
       <p style={{fontSize:28, fontWeight:'bold', textAlign:'center'}}>INFORMASI UPDATE DATA COVID 19</p>
       <p style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Sumber: https://covid19.mathdro.id/api </p>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default App;