const fetchGitHubProfile = async () => {
  const response = await fetch(`https://api.github.com/users/pdt1806`);
  const data = await response.json();
  const { bio } = data;

  document.getElementById("card-desc").innerHTML = bio;
};

const lazyLoadingYoutubeVideos = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll(".video-container");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const iframe = document.createElement("iframe");
            iframe.src = entry.target.getAttribute("data-src");
            iframe.allowFullscreen = true;
            entry.target.appendChild(iframe);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    videos.forEach((video) => {
      observer.observe(video);
    });
  });
};

const closeNoti = () => {
  document.getElementById("header-noti").style.display = "none";
};

fetchGitHubProfile();
lazyLoadingYoutubeVideos();
