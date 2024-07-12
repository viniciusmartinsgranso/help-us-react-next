import { BaseProxy } from "./base.proxy";
import { OccurrenceProxy } from "./occurrence.proxy";

export class UserProxy extends BaseProxy {
  name: string;
  email: string;
  city: string;
  occurrences?: OccurrenceProxy[];
}