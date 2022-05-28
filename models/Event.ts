import { Airtable } from "./Airtable"

export interface Event extends Airtable {
  "fields": {
    "name": string;
    "body": string;
    "short_body": string;
    "date": Date;
    "place": string;
  };
}