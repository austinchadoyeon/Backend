# Shopper Backend

## About
After completing "Atelier", my front-end React project where users can browse several items from an external API on a modern accessible interface, I wanted to initialize a reliable, compatible, and scalable back-end server and database to replace the external API. Shopper Backend consists of a RESTful API server that connects to a postgreSQL database and provides fast responses to requests (less than 30ms).

Using supplied mock data containing over 1 million products (and 5 million+ different styles, sizes, and descriptions), I designed and seeded a postgreSQL database. Since the mock data was supplied in CSV files, I used Node stream to transfer the large amounts of data into the database. Queries of the database were optimized using indices at foreign keys across tables, which reduced real-time query latency from over 80ms to less than 30ms. Query data was also manipulated to return response objects identical to the ones returned from requests to the external API in my front-end project. Local load testing was done using Artillery.io.

While this application can serve as a RESTful local API, the goal of this project was to launch AWS EC2 instances and scale it to handle greater amounts of requests (20,000+ requests/min). Loader.io was used to stress-test the application, and NGINX was used as the load balancer. The results of stress testing this application after launching 1 instance vs. 2 instances with round robin load balancing can be seen below.

![Single Instance Result](database/results/singleInstance.png)

![Two Scaled Instances Result]
()
## Features
-


## Getting Started

1. Install dependencies using `$ npm install`

2. Download PostgreSQL (if not already installed) and create the database and tables by running the .sql file in PostgreSQL.
```
$ psql postgres
$ \i database/productDetails/pdschema.sql
```

3. Create a new file in the database folder, named "connection.js" and use the exampleConnection.js file as a template for creating the pool connection to the newly created database (you must use your own specific username and password that was set up for your postgreSQL).

4. Seed the database by running the files in the productDetails folder. **Please note that the CSV files were not uploaded onto Github due to the sheer size of the files. However, once downloaded, create a new "data" folder in the "database" folder and upload the CSV files into there (otherwise the pathways in the seeding files will not direct to the right source!). Seed the files by calling node in the terminal of the root. Example:
```
$ node database/productDetails/seedProducts.js
```

5. Initialize the server on localhost:3000 using `$ npm start`

## Application Structure



## Credits

## License