export const useLocalStorage = () => {
  //Setter
  const handleSave = (startupInfo) => {
    const startups = localStorage.getItem('startups') ?? '[]';
    const parsedStartups = JSON.parse(startups);

    parsedStartups.push(startupInfo);

    const stringifiedStartups = JSON.stringify(parsedStartups);
    
    localStorage.setItem('startups', stringifiedStartups);
  };
  //Fin setter

  //Getter
  const getStartups = localStorage.getItem('startups') ?? '[]';
  const parsedStartups = JSON.parse(getStartups);
  //Fin getter
  return [parsedStartups, handleSave]
};