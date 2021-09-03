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


function sumharga(){
  var sum = 0;
  var arr_hasil = extractdata();
  for (var i = 0; i < datajson.books.length; i++){
    sum += (datajson.books[i].primer["harga"] * arr_hasil[i]);
  }

  // console.log(sum);
  
  if (document.getElementById("sumtotal") == null){
    var temp = document.createElement("p");
    temp.className = "totalhargahasil";
    temp.innerHTML = "<p>Total Harga : Rp "+hargaizer(sum)+".000,-</p>";
    document.getElementById("sumtotal").appendChild(temp);
  }else{
    document.getElementById("sumtotal").innerHTML = "<p>Total Harga : Rp "+hargaizer(sum)+".000,-</p>";
  }
  document.cookie = "price = "+sum+"";

}

function checkNull(){
  var num = 0;
  extractdata();
  for (let i = 0; i < newarr.length; i++) {
    if (newarr[i] != 0){
      num += 1;
    }
  }
  return num == 0;
}

function extractdata(){
  var newarr = [];
  for (let i = 0; i < datajson.books.length; i++){
    var data = Number(document.getElementById("quantity"+(i+1)).textContent);
    newarr[i] = (data);
  }
  // console.log("new");
  // console.log(newarr);
  // console.log(newarr[0]);
  // console.log(newarr[1]);
  document.cookie = "array = "+newarr+"";
  // console.log(getCookie("array"));
  // console.log(getCookie("array")[2]);
  return newarr;
}

function up(i){
  var data = Number(document.getElementById("quantity"+(i)).textContent);
  var newdata = data+=1;
  document.getElementById("quantity"+(i)).innerHTML = newdata;
}

function down(i){
  var data = Number(document.getElementById("quantity"+(i)).textContent);
  if(data!=0){
    var newdata = data-=1;
    document.getElementById("quantity"+(i)).innerHTML = newdata;
  }
}

function generateHtmlTable(data,i){
  return '<div class="anchor_table"><a href="page'+[i+1]+'.php">'+data.judul+'</a></div>';
}

function generateHtmlTablePrice(data,i){
  return '<div class="price_batch'+[i+1]+'">Rp.'+hargaizer(data.primer["harga"])+'.000,-';
}

function generateHtmlTableQuantity(i){
  if (getCookie("array")[0] == "["){
    return '<div class="quantity_batch tombol"><p id="quantity'+[i+1]+'">'+getCookie("array")[(2*i)+1]+'</p><button onclick="up('+[i+1]+')" class="up_button">+</button><button onclick="down('+[i+1]+')" class="down_button">-</button></div>';
  }else{
    return '<div class="quantity_batch tombol"><p id="quantity'+[i+1]+'">'+getCookie("array")[(2*i)]+'</p><button onclick="up('+[i+1]+')" class="up_button">+</button><button onclick="down('+[i+1]+')" class="down_button">-</button></div>';
  }
  
}

function generateTableBatch(){
  let table = document.createElement('table');
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');

  let row_1 = document.createElement('tr');
  let heading_1 = document.createElement('th');
  heading_1.innerHTML = "Nama Buku";
  let heading_2 = document.createElement('th');
  heading_2.innerHTML = "Harga";
  let heading_3 = document.createElement('th');
  heading_3.innerHTML = "Kuantitas";
  row_1.appendChild(heading_1);
  row_1.appendChild(heading_2);
  row_1.appendChild(heading_3);
  thead.appendChild(row_1);

  

  for (let i = 0; i < datajson.books.length; i++){
    let row_2 = document.createElement('tr');
    let row_2_data_1 = document.createElement('td');
    row_2_data_1.innerHTML = generateHtmlTable(datajson.books[i],i);
    let row_2_data_2 = document.createElement('td');
    row_2_data_2.innerHTML = generateHtmlTablePrice(datajson.books[i],i);
    let row_2_data_3 = document.createElement('td');
    row_2_data_3.innerHTML = generateHtmlTableQuantity(i);
    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    tbody.appendChild(row_2);
  }

  table.appendChild(thead);
  table.appendChild(tbody);

  // Adding the entire table to the body tag
  document.getElementById('main').appendChild(table);
}



 
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
  return '<header class="card-header"><h2 id="name"><a href="page'+[i]+'.php">'+data.judul+'</a></h2><img src="'+data.primer["url-foto"]+'"></header><div class="arcana"><div class="arcana-price-prefix">Rp '+hargaizer(data.primer["harga"])+'.000,-</div><div class="tags"><a href="page'+[i]+'.php">Buy Now</a></div>';
}

function asu(){
    console.log('aasu');
}

function addtocart(arr,data){
  arr.push(data);
}

function hargaizer(num){
  return parseInt(num/1000);
}
// generateArticle("asu");
// asu();


function descBook(i){
  var node = document.createElement("ARTICLE"); 
  // node.className = "card";
  node.innerHTML = '<header class="card-header"><h2 id="name">'+datajson.books[i].judul+'</h2><img src="'+datajson.books[i].primer["url-foto"]+'"></header><div class="arcana"><div class="arcana-price-prefix">Rp '+hargaizer(datajson.books[i].primer["harga"])+'.000,-</div><div class="tags"><a class="cart" href="app.php">Buy Now</a></div>';
  document.getElementById("card-batch").appendChild(node);

  var node = document.createElement("ARTICLE"); 
  // node.className = "card";
  if (datajson.books[i].deskripsi.penyunting){
    node.innerHTML = '<header class="card-header"><h2 id="name"> Oleh : '+datajson.books[i].deskripsi.penulis+'</h2></header><h3></h3>'+datajson.books[i].deskripsi.penerbit+'<div class="arcana"><div class="arcana-price-prefix">Penyunting : '+datajson.books[i].deskripsi.penyunting+'</div>';
  }else{
    if (datajson.books[i].deskripsi.penerjemah){
      node.innerHTML = '<header class="card-header"><h2 id="name"> Oleh : '+datajson.books[i].deskripsi.penulis+'</h2></header><h3></h3>'+datajson.books[i].deskripsi.penerbit+'<div class="arcana"><div class="arcana-price-prefix">Judul Asli : '+datajson.books[i].deskripsi["judul-asli"]+'<div class="arcana-price-prefix">Penerjemah : '+datajson.books[i].deskripsi["penerjemah"]+'<div class="arcana-price-prefix">Penerbit Asli : '+datajson.books[i].deskripsi["penerbit-asli"]+'</div>';
    }else{
      node.innerHTML = '<header class="card-header"><h2 id="name"> Oleh : '+datajson.books[i].deskripsi.penulis+'</h2></header><h3></h3>'+datajson.books[i].deskripsi.penerbit;
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


// COOKIE 

// function getUsername(){
//   return "<?php echo $_SESSION['username'] ?>";
// }

function checkACookieExists() {
  if (document.cookie.split(';').some((item) => item.trim().startsWith('username='))) {
    return true;
  }else{
    return false;
  }
}


function getCookie(cName) {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded.split('; ');
  let res;
  cArr.forEach(val => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  });
  return res;
}


