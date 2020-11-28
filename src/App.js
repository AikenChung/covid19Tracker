import React from 'react';

import { Card, CountryPicker, Chart} from './components';
import { fetchData } from './api/';
import image from './images/image.png';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Img = styled.img`
  width: 370px;
  margin-top: 50px;
`;

class App extends React.Component{
  state = {
    data:{},
    country:''
  }

  async componentDidMount(){
    const data = await fetchData();
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country: country});
  }

  render(){
    const { data, country} = thhis.state;
    return(
      <Div>
        <img className='covidImg' src={image} alt="COVID-19" />
        <Cards data = {data} />
        < CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={ data } country={country} />
      </Div>
    );
  }
}

export default App;
