import type { Entities } from "~/constants/entities";
import request from "~/utils/request";
import { statisticsCacheKeys } from "./cache-keys";

export type StatisticsCounter = Record<Entities, number>;

const endpoints = {
  count: () =>
    request.get<StatisticsCounter>(
      "/statistics/count",
      statisticsCacheKeys.count()
    ),
};

export default endpoints;
