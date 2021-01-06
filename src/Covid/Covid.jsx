import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Table, Button, Spinner } from 'reactstrap';

const format = Intl.NumberFormat("en-US").format;


export default function Covid() {
  const [countries, setCountries] = useState([]);
  const [isFetching, setFetching] = useState(false);

  // eslint-disable-next-line
  function getDataPromises() {
    axios.get('https://disease.sh/v3/covid-19/countries?sort=cases')
      .then((resp) => setCountries(resp.data))
      .catch((err) => console.log(err));
  }

  async function getData() {
    try {
      setFetching(true);
      const resp = await axios.get('https://disease.sh/v3/covid-19/countries?sort=cases');
      setCountries(resp.data);
    } catch (err) {
      console.log(err);
    } finally {
      setFetching(false);
    }
  }

  useEffect(() => getData(), []);

  return (
    <div>
      <h1>Covid Cases</h1>
      <Button color="primary" className="my-3" onClick={getData} >Refresh Data</Button>
      { isFetching ?
        <div>
          <Spinner color="primary" />
        </div> :
        <Table dark striped hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Flags</th>
              <th>Total cases</th>
              <th>Today cases</th>
              <th>Today Recovered</th>
            </tr>
          </thead>
          <tbody>
            {countries.map(country =>
              <tr key={country.country} style={{ cursor: "pointer" }} onClick={() => alert("wow")}  >
                <td>{country.country}</td>
                <td><img
                  src={country.countryInfo.flag}
                  height={30}
                  alt={"flag of " + country.country}
                />
                </td>
                <td>{format(country.cases)}</td>
                <td>{country.todayCases ? format(country.todayCases) : <span className="text-danger">No Data</span>}</td>
                <td>{format(country.todayRecovered)}</td>
              </tr>)}
          </tbody>
        </Table>}
    </div>
  )
}
