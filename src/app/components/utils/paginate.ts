const paginate = (items: any[], pageNumber: number, PageSize: number) => {
  const startIndex = (pageNumber - 1) * PageSize;
  return [...items].splice(startIndex, PageSize);
};

export default paginate;
