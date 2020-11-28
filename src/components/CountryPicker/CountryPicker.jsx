import React from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import {fetchCountries} from '../../ api';
import styled from 'styled-components';

const FormControl = styled.div`
    width: 30%;
    margin-bottom: 30px !important;
`;

const Countries = ({ handleCountryChange}) =>{
    const [countries, setCountries] = useState([]);
    useEffect(()=> {
        const fetchAPI = async () => {
            setCountries(await fetchCountries());
        };

        fetchAPI();
    }, []);
    return(
        <FormControl className={StyleSheet.formControl} >
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Unitied States</option>
                {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
};

export default Countries;