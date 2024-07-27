export const addRankPositionMapper = <T>(data: T[] | undefined) => {
  if (!data || !data.length) return [];
  return data.map((item, index) => ({ ...item, rank: index + 1 }));
};
