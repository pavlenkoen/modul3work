export interface IHotel {
  id: number;
  name: string;
  description?: string;
  imgSrc?: string;
  price?: number;
  country?: string;
  hot?: boolean;
  countryListId: number;
  rusName?: string;
}

export interface ICountry {
  id: number;
  name: string;
  description?: string;
  imgSrc?: string;
}

export interface IUser {
  id?: number;
  email?: any;
  password?: string;
}
