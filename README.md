# Next.js Dynamic Ecommerce

This is a sample Next.js project for a dynamic ecommerce website.

## Getting Started

### Prerequisites

Make sure you have the following installed on your local machine:

- [Node.js](https://nodejs.org) (version 14 or higher)

### Installation

1. Clone the project repository by running the following command in your terminal:

```
git clone https://github.com/basarballioz/nextjs-dynamic-ecommerce.git
```

2. Navigate to the project folder:

```
cd nextjs-dynamic-ecommerce
```

3. Install the dependencies by running the following command:

```
npm install
```

4. Run the Development Environment

```
npm run dev
```

- The development server will start and the project will be accessible at http://localhost:3000 in your web browser.

5. How to run tests (JEST) ?

```
npm test
```

## IF API SERVICE CRASHES, YOU CAN START JSONSERVER LOCAL (IN ORDER TO WORK WITH DUMMY DATA)

### HOW TO RUN IT

```
npm install -g json-server
json-server --watch db.json --port 3001 
```
Then, run the development environment (npm run dev)
Lastly go into **config/config.js** and change **apiURL** variable to http://localhost:3001/data (default jsonserver port and endpoint)


## Contributing
- Contributions are welcome! If you find any issues or want to contribute to the project, feel free to open a pull request.

