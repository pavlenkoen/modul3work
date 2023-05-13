export interface iHotel {
  id?: number;
  name?: string;
  description?: string;
  imgSrc?: string;
  price?: number;
  country?: string;
  hot?: boolean;
  countryListId?: number;
  rusName?: string;
}

export interface iCountry {
  name?: string;
  description?: string;
  imgSrc?: string;
}
