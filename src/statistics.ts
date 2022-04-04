/**
 * @description
 * Chart datapoints object.
 */
export interface ChartData {
  x: number;
  y: number;
}

export interface AppOpenLogs {
  creationDate: {
    nanoseconds: number;
    seconds: number;
  };
  logs: string[];
  uid: string;
}
