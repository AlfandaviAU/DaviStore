function navSlide() {
    const nav = document.querySelector('.nav-links');
    const triplebar = document.querySelector('.triplebar');
    const navLinks = document.querySelectorAll('.nav-links li');


    nav.classList.toggle('nav-active');
    triplebar.classList.toggle('toggle');

    navLinks.forEach((link,index)=>{
        if (link.style.animation){
            link.style.animation = '';
        } else{
            link.style.animation=  'navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s';
        }
    })

    
    
}

// function buttonBois(){
//   const main = document.querySelector('.buttonBoi');


// }

const datajson = {
  "books": [
    {
      "judul": "Untuk Apa Seni",
      "primer": {
        "url-foto": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1392706216l/20837627.jpg",
        "harga": 60000
      },
      "deskripsi": {
        "penulis": "Bambang Sugiharto, dkk",
        "penerbit": "Pustaka Matahari",
        "penyunting": "Bambang Sugiharto"
      }
    },
    {
      "judul": "Warisan Sejarah Arianisme",
      "primer": {
        "url-foto": "https://pustaka.iainbukittinggi.ac.id/wp-content/uploads/2018/12/arian-198x300.jpg",
        "harga": 97000
      },
      "deskripsi": {
        "judul-asli": "Archetypal Heresy: Arianism Through the Centuries",
        "penulis": "Maurice Wiles",
        "penerjemah": "Zaenal Muttaqin",
        "penerbit": "Pustaka Matahari",
        "penerbit-asli": "Oxford University Press, Inc."
      }
    },
    {
      "judul": "Sejarah Filsafat Kontemporer: Jerman dan Inggris",
      "primer": {
        "url-foto": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1551165807l/4309628._SX318_.jpg",
        "harga": 70000
      },
      "deskripsi": {
        "penulis": "K. Bertens",
        "penerbit": "PT Gramedia Pustaka Utama"
      }
    },
    {
      "judul": "Sejarah Filsafat Kontemporer: Prancis",
      "primer": {
        "url-foto": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1243418656l/6498943.jpg",
        "harga": 63000
      },
      "deskripsi": {
        "penulis": "K. Bertens",
        "penerbit": "PT Gramedia Pustaka Utama"
      }
    },
    {
      "judul": "Semiotika dan Hipersemiotika",
      "primer": {
        "url-foto": "https://s2.bukalapak.com/img/7734600261/large/IMG_20170912_134621_scaled.jpg",
        "harga": 120000
      },
      "deskripsi": {
        "penulis": "Yasraf Amir Piliang",
        "penerbit": "Pustaka Matahari"
      }
    },
    {
      "judul": "Epistemologi Dasar",
      "primer": {
        "url-foto": "https://togamas.com/css/images/items/potrait/JPEGG_5905_Epistemologi_Dasar.jpg",
        "harga": 60000
      },
      "deskripsi": {
        "penulis": "J. Sudarminta",
        "penerbit": "Penerbit Kanisius"
      }
    },
    {
      "judul": "Teori-Teori Etika",
      "primer": {
        "url-foto": "https://s2.bukalapak.com/img/2027491742/large/Buku_Teori_Teori_Etika_karya_Gordon_Graham.jpg",
        "harga": 96000
      },
      "deskripsi": {
        "penulis": "Nusamedia",
        "penerbit": "Gordon Graham"
      }
    }
  ]
}

// function readJSON(filename){
//     const fs = require('fs');
//     function jsonReader(filePath, cb) {
//         fs.readFile(filePath, (err, fileData) => {
//             if (err) {
//                 return cb && cb(err)
//             }
//             try {
//                 const object = JSON.parse(fileData)
//                 return cb && cb(null, object)
//             } catch(err) {
//                 return cb && cb(err)
//             }
//         })
//     }
//     jsonReader(filename, (err, data) => {
//         if (err) {
//             console.log(err)
//             return
//         }
//         for (let i=0; i < data.length; i++) {
//             console.log(data[i].ArcanaName) // => "Infinity Loop Drive"
//         }
//     })
// }

// readJSON('./Data.json');
// 13
// function generateArticle(asu){
//     // const main = document.createElement('article');
//     // main.className = 'card';
//     // document.body.appendChild(main);
//     document.getElementById(asu).innerHTML =  '<article class="card"><header class="card-header"><p>Arcana Monkey King</p><h2>Great Sage\'s Reckoning</h2><img src="logo-mk.png"></header><div class="arcana"><div class="arcana-price-prefix">Rp 270.000,-</div><div class="tags"><a href="#">Buy Now</a></div></article>';
// }

function generateArticleBatch(){
  for (let i = 0; i < datajson.books.length; i++){
    var node = document.createElement("ARTICLE"); 
    node.className = "card";
    node.innerHTML = innerHTMLgen(datajson.books[i],i+1);
    document.getElementById("card-batch").appendChild(node);
  }
  
  // document.getElementById("card-batch").innerHTML = 'asu';
  // generateArticle()
}

function innerHTMLgen(data,i){
  return '<header class="card-header"><h2><a href="page'+[i]+'.html">'+data.judul+'</a></h2><img src="'+data.primer["url-foto"]+'"></header><div class="arcana"><div class="arcana-price-prefix">Rp '+hargaizer(data.primer["harga"])+'.000,-</div><div class="tags"><a href="page'+[i]+'.html">Buy Now</a></div>';
}

function asu(){
    console.log('aasu');
}

function hargaizer(num){
  return parseInt(num/1000);
}
// generateArticle("asu");
// asu();


function descBook(i){
  var node = document.createElement("ARTICLE"); 
  // node.className = "card";
  node.innerHTML = '<header class="card-header"><h2>'+datajson.books[i].judul+'</h2><img src="'+datajson.books[i].primer["url-foto"]+'"></header><div class="arcana"><div class="arcana-price-prefix">Rp '+hargaizer(datajson.books[i].primer["harga"])+'.000,-</div><div class="tags"><a href="page'+[i+1]+'.html">Buy Now</a></div>';
  document.getElementById("card-batch").appendChild(node);

  var node = document.createElement("ARTICLE"); 
  // node.className = "card";
  if (datajson.books[i].deskripsi.penyunting){
    node.innerHTML = '<header class="card-header"><h2> Oleh : '+datajson.books[i].deskripsi.penulis+'</h2></header><h3></h3>'+datajson.books[i].deskripsi.penerbit+'<div class="arcana"><div class="arcana-price-prefix">Penyunting : '+datajson.books[i].deskripsi.penyunting+'</div>';
  }else{
    if (datajson.books[i].deskripsi.penerjemah){
      node.innerHTML = '<header class="card-header"><h2> Oleh : '+datajson.books[i].deskripsi.penulis+'</h2></header><h3></h3>'+datajson.books[i].deskripsi.penerbit+'<div class="arcana"><div class="arcana-price-prefix">Judul Asli : '+datajson.books[i].deskripsi["judul-asli"]+'<div class="arcana-price-prefix">Penerjemah : '+datajson.books[i].deskripsi["penerjemah"]+'<div class="arcana-price-prefix">Penerbit Asli : '+datajson.books[i].deskripsi["penerbit-asli"]+'</div>';
    }else{
      node.innerHTML = '<header class="card-header"><h2> Oleh : '+datajson.books[i].deskripsi.penulis+'</h2></header><h3></h3>'+datajson.books[i].deskripsi.penerbit;
    }
  }
  document.getElementById("card-batch").appendChild(node);
}

// console.log(descBook(0));
// generateArticle("asu2");

// console.log(datajson[0].ArcanaName);
// console.log(datajson.books[0].primer["url-foto"]);

// console.log(innerHTMLgen(datajson.books[0]));
// console.log(hargaizer("20000"));