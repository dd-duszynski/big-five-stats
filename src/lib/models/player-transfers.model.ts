export type PlayerTransfersType = {
  transfers: TransfersType[];
};

export interface TransfersType {
  date: string;
  type: string;
  teams: Teams;
}

interface Teams {
  in: In;
  out: Out;
}

interface In {
  id: number;
  name: string;
  logo: string;
}

interface Out {
  id: number;
  name: string;
  logo: string;
}
