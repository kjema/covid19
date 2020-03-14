import React, { useState, SyntheticEvent } from 'react';
import { Dropdown, Select } from 'semantic-ui-react';
import useStats from '../utils/useStats';
import { Stats } from './Stats';

interface Props {}

export const CountrySelector: React.FC<Props> = () => {
  const { stats, loading, error } = useStats(
    'https://covid19.mathdro.id/api/countries'
  );
  const [selectedCountry, setSelectedCountry] = useState('Sweden');

  const countryOptions = (countries: any) => {
    return Object.entries<string>(countries).map(([country, code]) => {
      return {
        key: code,
        value: country,
        text: country
      };
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}>
      <Dropdown
        search
        selection
        options={countryOptions(stats.countries)}
        placeholder="Select Country"
        defaultValue={selectedCountry}
        onChange={(event: SyntheticEvent, data: any) => {
          setSelectedCountry(data.value);
        }}
      />
    </Stats>
  );
};
