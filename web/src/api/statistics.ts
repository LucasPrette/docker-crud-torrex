import { Entities } from "~/constants/entities";
import request from "~/utils/request";

export type StatisticsCounter = Record<Entities, number>;

const endpoints = {
  counter: () => request.get<StatisticsCounter>("/statistics/counter"),
};

export default endpoints;
