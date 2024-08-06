export type PerMinutesType = {
  '0-15': PerMinutesDetailsType;
  '16-30': PerMinutesDetailsType;
  '31-45': PerMinutesDetailsType;
  '46-60': PerMinutesDetailsType;
  '61-75': PerMinutesDetailsType;
  '76-90': PerMinutesDetailsType;
  '91-105': PerMinutesDetailsType;
  '106-120': PerMinutesDetailsType;
};

type PerMinutesDetailsType = {
  total: number;
  percentage: string;
};
