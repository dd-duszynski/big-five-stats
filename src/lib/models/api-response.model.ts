export type APIResponseType<T> = {
  response: T;
  parameters: APIResponseParametersType;
  get: string;
  errors: any;
  results: number;
  paging: {
    current: number;
    total: number;
  };
};

export type APIResponseParametersType = {
  /* TODO_DD: it is not complete, there are more properties */
  league: string;
  season: string;
};
