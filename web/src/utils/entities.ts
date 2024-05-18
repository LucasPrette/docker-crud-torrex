import { ENTITIES_TYPES, type Entities } from "~/constants/entities";

export const isValidEntity = (entity: string): entity is Entities =>
  // @ts-expect-error
  typeof ENTITIES_TYPES[entity] === "string";
