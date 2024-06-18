export type APIResponseType<T> = {
  response: T;
  parameters: APIResponseParametersType;
};

export type APIResponseParametersType = {
  /* TODO_DD: it is not complete, there are more properties */
  league: string;
  season: string;
};
