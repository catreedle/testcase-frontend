Projek dibuat dengan
### `npx create-react-app testcase`

Kemudian saya melakukan clean up dengan menghapus file-file yang tidak saya gunakan, menyisakan file App.css, App.js, index.css, index.js di direktori src dan file index.html di direktori public, dan .gitignore, package.json, yarn.lock di root dan node_modules. Serta mengedit isi konten file tertentu.

## Tools

Tools yang saya gunakan yaitu
    "bootstrap": "^4.3.1",
    "font-awesome": "^4.7.0",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-router-dom": "^5.1.2",
    "react-scripts": "3.2.0",
    "reactstrap": "^8.1.1"

yang ditambahkan melalui
## `yarn add bootstrap`
## `yarn add font-awesome`
## `yarn add react-dom`
## `yarn add react-router-dom`
## `yarn add reactstrap`

## Manajemen State dan Components
menggunakan useState dan useEffect dari hooks

## Authorization
dengan cara menyimpan token yang didapat dari user login di sessionStorage


## Cara Menjalankan Projek
Setelah Clone projek, run 
## `npm init`
## `npm instal`
untuk menginisasi node modules dan menginstal dependencies

## Projek Siap Dijalankan
dengan
## `npm start`
atau
## `yarn start`

Browser akan mengarahkan ke homepage berupa halaman Login. Kemudian user dapat memilih untuk Login atau Register dan mengisi data yang diminta.

Setelah berhasil Login, user diarahkan ke halaman Dashboard, dimana user dapat melihat semua produk, membuat produk baru, update, atau delete produk yang ada sesuai Authorization.
