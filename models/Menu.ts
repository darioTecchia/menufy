import { Airtable, Attachment } from "./Airtable"

export interface Menu extends Airtable {
  "fields": {
    "cocktails": string[];
    "name": string;
    "description": string;
    "attachments": Attachment[];
    "order": number;
  }
}