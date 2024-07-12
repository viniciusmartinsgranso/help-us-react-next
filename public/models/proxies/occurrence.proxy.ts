import { BaseProxy } from "./base.proxy";
import { OccurrenceTypeEnum } from "../enums/occurrence-type.enum";
import { UserProxy } from "./user.proxy";

export class OccurrenceProxy extends BaseProxy {
  title: string;
  description: string;
  type: OccurrenceTypeEnum;
  lat: number;
  long: number;
  userId: number;
  user: UserProxy;
  imageUrl?: string;
}