import { ENTITIES_TYPES, type TranslatedEntities } from "~/constants/entities";

export const isValidEntity = (entity: any): entity is TranslatedEntities =>
  Object.values(ENTITIES_TYPES).includes(entity);
