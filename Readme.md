# setup:

- Clone the Repository: Use the "git clone" command to clone the repository and navigate into the project directory.

- Install Dependencies: Ensure you have Node.js and npm installed. Run "npm install" to install the necessary dependencies.

- Environment Variables: Create a .env file in the root directory and add any required environment variables.

In this case add:
PORT=5001
MONGO_URI=your_mongo_uri_here  (your mongoDB uri will come here )
EXTERNAL_API_URL=https://api.example.com/data

- Run the Server: Use "npm run dev" to start the server.

- Test the Server: Open your browser and go to http://localhost:5001 to check if the server is running. Visit http://localhost:5000/api/data to see the cryptocurrency data average.


## Explanation:

- Initialize the Project: Set up the Node.js environment and install necessary dependencies.
- Created the server in the index.js file at root and there used the middlewears like CORS and also created routes.
- Configure the Database: Connect to MongoDB using Mongoose and store the connection string in environment variables.
- Create Models: Define a schema for MongoDB inside the dataEntry.js file inside the models folder.
- Inside the api.js file called the routes and creating the get api and executing the getData from controllers file.
- Saving the Average data on every time the api hit in mongoDB.
- fetched the data from https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd coin gecko api and average it inside the dataService.js file inside the services folder.
- The functions to fetchData, processData and save data are called inside the dataControllers file where we create the get api which is sending the average and also saving the average eachtime inside the mongoDB database.

- (Note): if you donot need to add data to mongoDB all you have to do is to comment the connectDB function inside the index.js file and also comment the     await saveData(processData)  -- this line inside the dataController.js file.



