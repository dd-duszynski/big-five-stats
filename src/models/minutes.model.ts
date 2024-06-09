export type MinutesType = {
  '0-15': MinutesDetailsType;
  '16-30': MinutesDetailsType;
  '31-45': MinutesDetailsType;
  '46-60': MinutesDetailsType;
  '61-75': MinutesDetailsType;
  '76-90': MinutesDetailsType;
  '91-105': MinutesDetailsType;
  '106-120': MinutesDetailsType;
};

export type MinutesDetailsType = {
  total: number;
  percentage: string;
};
