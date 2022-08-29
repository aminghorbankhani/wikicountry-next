interface Country{
  name: string,
  nativeName: string,
  subregion: string,
  flag: string,
  capital: any,
  region: string,
  population: number,
  alpha3Code: string,
  currencies: [{
    name: string,
  }],
  languages: [{
    name: string,
  }],
  borders?: string[],
  topLevelDomain?: string[]
}

export default Country;
