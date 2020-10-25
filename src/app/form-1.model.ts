/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Form1Model {
  first_name?: string;
  last_name: string;
  address?: {
    street_1?: string;
    street_2?: string;
    city?: string;
    state?:
      | "AL"
      | "AK"
      | "AS"
      | "AZ"
      | "AR"
      | "CA"
      | "CO"
      | "CT"
      | "DE"
      | "DC"
      | "FM"
      | "FL"
      | "GA"
      | "GU"
      | "HI"
      | "ID"
      | "IL"
      | "IN"
      | "IA"
      | "KS"
      | "KY"
      | "LA"
      | "ME"
      | "MH"
      | "MD"
      | "MA"
      | "MI"
      | "MN"
      | "MS"
      | "MO"
      | "MT"
      | "NE"
      | "NV"
      | "NH"
      | "NJ"
      | "NM"
      | "NY"
      | "NC"
      | "ND"
      | "MP"
      | "OH"
      | "OK"
      | "OR"
      | "PW"
      | "PA"
      | "PR"
      | "RI"
      | "SC"
      | "SD"
      | "TN"
      | "TX"
      | "UT"
      | "VT"
      | "VI"
      | "VA"
      | "WA"
      | "WV"
      | "WI"
      | "WY";
    zip_code?: string;
    [k: string]: unknown;
  };
  birthday?: string;
  notes?: string;
  phone_numbers?: {
    type: "cell" | "home" | "work";
    number: string;
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}
