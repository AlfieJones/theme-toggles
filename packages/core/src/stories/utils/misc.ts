export const getSVG = (name: string, prefix: string) => {
  return fetch(name)
    .then((response) => response.text())
    .then((data) => {
      const ids = data.match(/id="(.*)"/g);
      ids?.forEach((fullId) => {
        const id = fullId.replace("id=", "").replaceAll('"', "");
        data = data.replaceAll(id, `${prefix}-${id}`);
      });
      return data;
    });
};
