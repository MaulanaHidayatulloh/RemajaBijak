// var url = ' https://newsapi.org/v2/everything?q=health&apiKey=90167420aa9c42d0b1d630f02300f3f9';

// var req = new Request(url);

// fetch(req)
//     .then(function(response) {
//         console.log('masuk', response.json());
//     })

document.addEventListener("DOMContentLoaded", function () {
  fetchAllNews();
  fetchSexNewsTop3();

  function fetchAllNews() {
    var url =
      "https://newsapi.org/v2/everything?q=sex&apiKey=90167420aa9c42d0b1d630f02300f3f9";
    fetchNewsAll(url, "all-sex-news-container");
  }

  function fetchSexNewsTop3() {
    var url =
      "https://newsapi.org/v2/everything?q=sex&apiKey=90167420aa9c42d0b1d630f02300f3f9&pageSize=3";
    fetchNews(url, "Top3-sex-news-container");
  }

  function fetchNews(url, containerId) {
    var req = new Request(url);

    fetch(req)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        displayData(data, containerId);
      });
  }

  function fetchNewsAll(url, containerId) {
    var req = new Request(url);

    fetch(req)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        displayDataAll(data, containerId);
      });
  }

  // function displayDataAll(data, containerId) {
  //     var articles = data.articles;
  //     var container = document.getElementById(containerId);

  //     articles.forEach(function(article) {
  //         if (article.content === "[Removed]" || article.content.includes("[+100 chars]")) {
  //             return;
  //         }

  //         var contentContainsKeywords = checkForKeywords(article.content);

  //         if (!contentContainsKeywords) {
  //             return;
  //         }

  //         var articleElement = document.createElement('div');
  //         articleElement.classList.add('articleAll');

  //         var titleElement = document.createElement('h2');
  //         titleElement.textContent = article.title;
  //         titleElement.style.color = '#00000';

  //         var imageElement = document.createElement('img');
  //         imageElement.src = article.urlToImage;
  //         imageElement.width = 400;
  //         imageElement.height = 300;
  //         imageElement.style.borderRadius = '10px';

  //         var urlElement = document.createElement('p');
  //         var urlParts = article.url.split('/');
  //         var formattedUrl = urlParts[2];
  //         urlElement.textContent = formattedUrl;
  //         urlElement.style.color = '#cf4647';

  //         var dash = document.createElement('p');
  //         dash.textContent = '-';

  //         var publishedAt = document.createElement('p');
  //         var date = new Date(article.publishedAt);
  //         var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  //         publishedAt.textContent = date.toLocaleDateString('id-ID', options);
  //         publishedAt.style.color = '#707070';

  //         var textContainer = document.createElement('div');
  //         textContainer.classList.add('text-containerAll');
  //         textContainer.appendChild(titleElement);

  //         var metaContainer = document.createElement('div');
  //         metaContainer.classList.add('meta-containerAll');
  //         metaContainer.appendChild(urlElement);
  //         metaContainer.appendChild(dash);
  //         metaContainer.appendChild(publishedAt);

  //         textContainer.appendChild(metaContainer);

  //         articleElement.appendChild(imageElement);
  //         articleElement.appendChild(textContainer);

  //         container.appendChild(articleElement);
  //     });

  //     // Tambahkan kode berikut untuk membuat konten dapat di-swipe
  //     var scrollContainer = document.getElementById(containerId);
  //     scrollContainer.addEventListener('scroll', function() {
  //         var maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

  //         if (scrollContainer.scrollLeft === maxScrollLeft) {
  //             // Anda bisa menambahkan logika untuk memuat lebih banyak berita jika diinginkan
  //         }
  //     });
  // }
  function displayDataAll(data) {
    var articles = data.articles;
    var swiperWrapper = document.querySelector(".swiper-wrapper");

    articles.forEach(function (article) {
      if (
        article.content === "[Removed]" ||
        article.content.includes("[+100 chars]")
      ) {
        return;
      }

      var contentContainsKeywords = checkForKeywords(article.content);

      if (!contentContainsKeywords) {
        return;
      }

      var articleElement = document.createElement("div");
      articleElement.classList.add("swiper-slide");

      var titleElement = document.createElement("h2");
      titleElement.textContent = article.title;

      var imageElement = document.createElement("img");
      imageElement.src = article.urlToImage;
      imageElement.width = 400;
      imageElement.height = 300;
      imageElement.style.borderRadius = "10px";

      var urlElement = document.createElement("p");
      var urlParts = article.url.split("/");
      var formattedUrl = urlParts[2];
      urlElement.textContent = formattedUrl;
      urlElement.style.color = "#cf4647";

      var dash = document.createElement("p");
      dash.textContent = "-";

      var publishedAt = document.createElement("p");
      var date = new Date(article.publishedAt);
      var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      publishedAt.textContent = date.toLocaleDateString("id-ID", options);
      publishedAt.style.color = "#707070";

      var textContainer = document.createElement("div");

      var metaContainer = document.createElement("div");
      metaContainer.classList.add("meta-containerAll");
      metaContainer.appendChild(urlElement);
      metaContainer.appendChild(dash);
      metaContainer.appendChild(publishedAt);

      textContainer.appendChild(metaContainer);
      textContainer.appendChild(titleElement);

      articleElement.appendChild(imageElement);
      articleElement.appendChild(textContainer);

      swiperWrapper.appendChild(articleElement);
    });

    // Inisialisasi Swiper setelah semua elemen ditambahkan
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 5,
      freeMode: true,
    });
  }

  function displayData(data, containerId) {
    var articles = data.articles;
    var container = document.getElementById(containerId);

    articles.forEach(function (article) {
      if (
        article.content === "[Removed]" ||
        article.content.includes("[+100 chars]")
      ) {
        return;
      }

      var contentContainsKeywords = checkForKeywords(article.content);

      if (!contentContainsKeywords) {
        return;
      }

      var articleElement = document.createElement("div");
      articleElement.classList.add("article");

      var titleElement = document.createElement("h2");
      titleElement.textContent = article.title;
      titleElement.style.color = "#cf4647";

      var contentElement = document.createElement("p");
      contentElement.textContent = article.content;

      var imageElement = document.createElement("img");
      imageElement.src = article.urlToImage;
      imageElement.width = 400;
      imageElement.height = 300;
      imageElement.style.borderRadius = "10px";

      var urlElement = document.createElement("p");
      var urlParts = article.url.split("/");
      var formattedUrl = urlParts[2];
      urlElement.textContent = formattedUrl;
      urlElement.style.color = "#cf4647";

      var dash = document.createElement("p");
      dash.textContent = "-";

      var publishedAt = document.createElement("p");
      var date = new Date(article.publishedAt);
      var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      publishedAt.textContent = date.toLocaleDateString("id-ID", options);
      publishedAt.style.color = "#707070";

      var flexContainer = document.createElement("div");
      flexContainer.classList.add("flex-container");

      var textContainer = document.createElement("div");
      textContainer.classList.add("text-container");
      textContainer.appendChild(titleElement);
      textContainer.appendChild(contentElement);

      var metaContainer = document.createElement("div");
      metaContainer.classList.add("meta-container");
      metaContainer.appendChild(urlElement);
      metaContainer.appendChild(dash);
      metaContainer.appendChild(publishedAt);

      textContainer.appendChild(metaContainer);

      flexContainer.appendChild(imageElement);
      flexContainer.appendChild(textContainer);

      articleElement.appendChild(flexContainer);

      container.appendChild(articleElement);
    });
  }

  function checkForKeywords(content) {
    var keywords = [
      "sex",
      "education",
      "sexual health",
      "reproductive health",
      "contraception",
      "pregnancy",
      "std",
      "stds",
      "sexually transmitted disease",
      "sexually transmitted diseases",
    ];
    content = content.toLowerCase();
    for (var i = 0; i < keywords.length; i++) {
      if (content.includes(keywords[i])) {
        return true;
      }
    }

    return false;
  }
});
