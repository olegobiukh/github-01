export const getRepos = (value, setData) => {
  try {
    fetch(`https://api.github.com/search/users?q=${value}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.items);
      });
  } catch (e) {
    console.error(e);
    setData(null);
  }
};

export const getUser = (value, setData) => {
  try {
    fetch(`https://api.github.com/users/${value}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  } catch (e) {
    console.error(e);
    setData(null);
  }
};

export const getUserRepos = (value, setData) => {
  try {
    fetch(`https://api.github.com/users/${value}/repos`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  } catch (e) {
    console.error(e);
    setData(null);
  }
};
