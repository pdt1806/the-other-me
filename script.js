const fetchGitHubProfile = async () => {
  const response = await fetch(`https://api.github.com/users/pdt1806`);
  const data = await response.json();
  const { bio } = data;

  document.getElementById("card-desc").innerHTML = bio;
};

fetchGitHubProfile();
