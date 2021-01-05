import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Table } from 'reactstrap';

const format = Intl.NumberFormat("en-US").format;


export default function Covid() {
  const [countries, setCountries] = useState([]);

  function getData() {
    axios.get('https://corona.lmao.ninja/v2/countries?sort=cases')
      .then((resp) => setCountries(resp.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => getData(), [])

  console.log(countries);

  return (
    <div>
      <h1>Covid Cases</h1>
      <Table dark striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Total cases</th>
            <th>Today cases</th>
            <th>Today Recovered</th>
          </tr>
        </thead>
        <tbody>
          {countries.map(country =>
            <tr key={country.country}>
              <td>{country.country}</td>
              <td>{format(country.cases)}</td>
              <td>{country.todayCases ? format(country.todayCases) : <span className="text-danger">No Data</span>}</td>
              <td>{format(country.todayRecovered)}</td>
            </tr>)}
        </tbody>
      </Table>
    </div>
  )
}
