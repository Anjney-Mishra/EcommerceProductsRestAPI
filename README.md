
# Ecommerce Product REST API 

It is product api where we can get products and according to query parameters of URL we can perform certain actions and features



## Installation

Clone the repository

```bash
git clone https://github.com/Anjney-Mishra/EcommerceProductsRestAPI.git
```
Install Node Packages
```bash
npm install
```
Run Command
```bash
npm run dev
```
## API Reference

#### Get all products

```http
  GET http://localhost:5000/api/products
```



#### Limit the products and pagination

```http
  GET http://localhost:5000/api/products?limit=${limitNumber}&page=${pagenumber}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `limitNumber`      | `number` | Number of products to fetch  **Default**.3|
| `pageNumber`      | `number` | Page Number **Default**.3|

#### Select Operation
Number of fields to show
Seperate fields by comma ***,***

```http
  GET http://localhost:5000/api/products?select=name,company,price
```

#### Searching
Search By Name

```http
  GET http://localhost:5000/api/products?name=${searchName}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `searchName`      | `String` | Searching by name|

Search By Company
```http
  GET http://localhost:5000/api/products?company=${companyName}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `companyName`      | `String` | Searching by name|

Search By Featured

```http
  GET http://localhost:5000/api/products?featured=${value}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `value`      | `Boolean` | ***Required***|

Multiple Search Fields

```http
  GET http://localhost:5000/api/products?name=iphone&company=apple&featured=true
```

#### Sorting
Sort By price Ascending
```http
  GET http://localhost:5000/api/products?sort=price
```
Sort By price Descending (Add ***-*** before price)
```http
  GET http://localhost:5000/api/products?sort=-price
```
Similarly with Name

```http
  GET http://localhost:5000/api/products?sort=name
```
```http
  GET http://localhost:5000/api/products?sort=-name
```
Sort By Name and Price both
```http
  GET http://localhost:5000/api/products?sort=name,price
```

#### Combine the paramater for custom searching,filtering and pagination

```http
  GET http://localhost:5000/api/products?name=iphone&sort=price&page=1&limit=5
```
    
