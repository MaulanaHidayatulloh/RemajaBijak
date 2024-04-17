var data_dummy3 = {
  articles: [
      {
          "source": {
            "id": null,
            "name": "TMZ"
          },
          "author": "TMZ Staff",
          "title": "5 Film Ini Tampilkan Kisah Masa Pubertas Remaja Ini Tayang di Netflix Loh, Buruan Nonton!",
          "description": "Penuh lika-liku dan problematika, ini rekomendasi film bertema masa pubertas yang bisa ditonton di Netflix....",
          "url": "https://MomsMoney.Id/",
          "urlToImage": "/asset/Meangirls2.png",
          "publishedAt": "2024-03-29T16:20:37Z",
          "content": "Penuh lika-liku dan problematika, ini rekomendasi film bertema masa pubertas yang bisa ditonton di Netflix...."
        },
        {
          "source": {
            "id": null,
            "name": "TMZ"
          },
          "author": "TMZ Staff",
          "title": "Perlunya Pendekatan Radikal dalam Maraknya Kasus Seks Bebas Remaja di Indonesia!",
          "description": "Kasus seks bebas remaja cukup ramai diperbincangkan di media Indonesia....",
          "url": "https://GentaAndalas.com/",
          "urlToImage": "/asset/Ilus-Zahra1.png",
          "publishedAt": "2024-03-29T16:20:37Z",
          "content": "Kasus seks bebas remaja cukup ramai diperbincangkan di media Indonesia...."
        },
        {
          "source": {
            "id": null,
            "name": "TMZ"
          },
          "author": "TMZ Staff",
          "title": "Bentuk Pelecehan Seksual yang Perlu Diketahui Sobat Maja!",
          "description": "Kasus seks bebas remaja cukup ramai diperbincangkan di media Indonesia....",
          "url": "https://Halodoc.com/",
          "urlToImage": "/asset/Harus-Tahu-Ini-Perbedaan-Pelecehan-Seksual-dan-Seks-Konsensual1.png",
          "publishedAt": "2024-03-29T16:20:37Z",
          "content": "Kasus seks bebas remaja cukup ramai diperbincangkan di media Indonesia...."
        }
  ],
  status: "ok",
  totalResults: 15177
}

var data_dummyAll = {
  articles: [
      {
          "source": {
            "id": null,
            "name": "TMZ"
          },
          "author": "TMZ Staff",
          "title": "Kesehatan Reproduksi Remaja: Permasalahan dan Upaya Pencegahan",
          "description": "Penuh lika-liku dan problematika, ini rekomendasi film bertema masa pubertas yang bisa ditonton di Netflix....",
          "url": "https://Yankes.Kemenkes/",
          "urlToImage": "/asset/image32.png",
          "publishedAt": "2024-03-29T16:20:37Z",
          "content": "Penuh lika-liku dan problematika, ini rekomendasi film bertema masa pubertas yang bisa ditonton di Netflix...."
        },
        {
          "source": {
            "id": null,
            "name": "TMZ"
          },
          "author": "TMZ Staff",
          "title": "7 Pencegahan Infeksi Menular Seksual yang Bisa Diterapkan!",
          "description": "Kasus seks bebas remaja cukup ramai diperbincangkan di media Indonesia....",
          "url": "https://Siloamhospital.com/",
          "urlToImage": "/asset/image33.png",
          "publishedAt": "2024-03-29T16:20:37Z",
          "content": "Kasus seks bebas remaja cukup ramai diperbincangkan di media Indonesia...."
        },
        {
          "source": {
            "id": null,
            "name": "TMZ"
          },
          "author": "TMZ Staff",
          "title": "6 Contoh Pergaulan Bebas yang Harus Dihindari! Kamu Harus Baca Sobat!",
          "description": "Kasus seks bebas remaja cukup ramai diperbincangkan di media Indonesia....",
          "url": "https://Kumparan.com/",
          "urlToImage": "/asset/image34.png",
          "publishedAt": "2024-03-29T16:20:37Z",
          "content": "Kasus seks bebas remaja cukup ramai diperbincangkan di media Indonesia...."
        },
        {
          "source": {
            "id": null,
            "name": "TMZ"
          },
          "author": "TMZ Staff",
          "title": "Perlunya Pendekatan Radikal dalam Maraknya Kasus Seks Bebas Remaja di Indonesia!",
          "description": "Kasus seks bebas remaja cukup ramai diperbincangkan di media Indonesia....",
          "url": "https://GentaAndalas.com/",
          "urlToImage": "/asset/Ilus-Zahra1.png",
          "publishedAt": "2024-03-29T16:20:37Z",
          "content": "Kasus seks bebas remaja cukup ramai diperbincangkan di media Indonesia...."
        },
  ],
  status: "ok",
  totalResults: 15177
}
document.addEventListener('DOMContentLoaded', function() {
  fetchAllNews();
  fetchSexNewsTop3();

  function fetchAllNews() {
      var url = 'https://newsapi.org/v2/everything?q=sex&apiKey=90167420aa9c42d0b1d630f02300f3f9';
      fetchNewsAll(url, 'all-sex-news-container');
  }

  function fetchSexNewsTop3() {
      var url = 'https://newsapi.org/v2/everything?q=sex&apiKey=90167420aa9c42d0b1d630f02300f3f9&pageSize=3';
      fetchNews(url, 'Top3-sex-news-container');
  }

  function fetchNews(url, containerId) {
      var req = new Request(url);

      fetch(req)
          .then(function(response) {
              return response.json();
          })
          .then(function(data) {
              // menggunakan data dummy
              displayData(data_dummy3, containerId);
          });
  }

  function fetchNewsAll(url, containerId) {
      var req = new Request(url);

      fetch(req)
          .then(function(response) {
              return response.json();
          })
          .then(function(data) {
              // mengguanakan data dummy
              displayDataAll(data_dummyAll, containerId);
          });
  }


  function displayDataAll(data_dummyAll) {
      var articles = data_dummyAll.articles;
      var swiperWrapper = document.querySelector('.swiper-wrapper');
  
      articles.forEach(function(article) {    
          var articleElement = document.createElement('div');
          articleElement.classList.add('swiper-slide');
  
          var titleElement = document.createElement('h2');
          titleElement.textContent = article.title;
  
          var imageElement = document.createElement('img');
          imageElement.src = article.urlToImage;
          imageElement.width = 400;
          imageElement.height = 300;
          imageElement.style.borderRadius = '10px';
  
          var urlElement = document.createElement('p');
          var urlParts = article.url.split('/');
          var formattedUrl = urlParts[2];
          urlElement.textContent = formattedUrl;
          urlElement.style.color = '#cf4647';
  
          var dash = document.createElement('p');
          dash.textContent = '-';
  
          var publishedAt = document.createElement('p');
          var date = new Date(article.publishedAt);
          var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
          publishedAt.textContent = date.toLocaleDateString('id-ID', options);
          publishedAt.style.color = '#707070';
  
          var textContainer = document.createElement('div');
  
          var metaContainer = document.createElement('div');
          metaContainer.classList.add('meta-containerAll');
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
      var swiper = new Swiper('.swiper-container', {
          slidesPerView: 'auto',
          spaceBetween: 5,
          freeMode: true,
      });
  }    
  
  

  function displayData(data_dummy3, containerId) {
      var articles = data_dummy3.articles;
      var container = document.getElementById(containerId);

      articles.forEach(function(article) {
          var articleElement = document.createElement('div');
          articleElement.classList.add('article');

          var titleElement = document.createElement('h2');
          titleElement.textContent = article.title;
          titleElement.style.color = '#cf4647';

          var contentElement = document.createElement('p');
          contentElement.textContent = article.content;

          var imageElement = document.createElement('img');
          imageElement.src = article.urlToImage;
          imageElement.width = 400;
          imageElement.height = 300;
          imageElement.style.borderRadius = '10px';

          var urlElement = document.createElement('p');
          var urlParts = article.url.split('/');
          var formattedUrl = urlParts[2];
          urlElement.textContent = formattedUrl;
          urlElement.style.color = '#cf4647';

          var dash = document.createElement('p');
          dash.textContent = '-';

          var publishedAt = document.createElement('p');
          var date = new Date(article.publishedAt);
          var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
          publishedAt.textContent = date.toLocaleDateString('id-ID', options);
          publishedAt.style.color = '#707070';

          var flexContainer = document.createElement('div');
          flexContainer.classList.add('flex-container');

          var textContainer = document.createElement('div');
          textContainer.classList.add('text-container');
          textContainer.appendChild(titleElement);
          textContainer.appendChild(contentElement);

          var metaContainer = document.createElement('div');
          metaContainer.classList.add('meta-container');
          metaContainer.appendChild(urlElement);
          metaContainer.appendChild(dash);
          metaContainer.appendChild(publishedAt);

          textContainer.appendChild(metaContainer);

          flexContainer.appendChild(imageElement);
          flexContainer.appendChild(textContainer);

          articleElement.appendChild(flexContainer);

          container.appendChild(articleElement);

          articleElement.addEventListener('click', function() {
              window.location.href = "/menu/detailArticle.html";
          });
      });
  }


  // Menambahkan tombol kembali
  var backButton = document.createElement('button');
  backButton.textContent = '< Kembali';
  backButton.style.color = '#cf4647';
  backButton.classList.add('back-button');
  backButton.style.marginLeft = '120px'
  backButton.style.fontSize = '20px'
  backButton.style.backgroundColor = 'transparent'


  // Menambahkan event listener untuk tombol kembali
  backButton.addEventListener('click', function() {
      history.back(); // Kembali ke halaman sebelumnya
  });

  // Menambahkan tombol kembali ke dalam kontainer atau elemen lainnya di halaman Anda
  var backButtonContainer = document.querySelector('.back-button-container'); // Gantikan dengan selector yang sesuai
  backButtonContainer.appendChild(backButton);
});
