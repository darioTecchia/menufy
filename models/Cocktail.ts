import { Airtable } from "./Airtable"

export interface Cocktail extends Airtable {
  "fields": {
    "name": string;
    "description": string;
    "price": number;
    "menu": string[];
    "allergens": string;
    "ingredients": string;
  }
}