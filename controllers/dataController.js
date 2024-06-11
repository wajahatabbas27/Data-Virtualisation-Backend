const { fetchData, processData, saveData } = require('../services/dataService');

const getData = async (req, res) => {
    try {
        const data = await fetchData();
        const processedData = processData(data);

        // saving the data to the database
        // await saveData(processData);
        console.log("data coming to frontend: ",processedData);
        res.json({data: processedData});
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error',err.message);
    }
};

module.exports = { getData }; 