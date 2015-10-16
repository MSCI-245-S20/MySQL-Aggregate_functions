var sqltest = require("./fw-sqltest-select.js");


var tasks = [
  [
    "Get the requested data in a single select query",
    "SELECT MIN(stock) AS less_stock, MAX(created_at) AS most_recent_product, MAX(price) AS product_max_price FROM e_store.products"
  ]
];


sqltest.init("sql-6-3.sql", "e_store", tasks);
