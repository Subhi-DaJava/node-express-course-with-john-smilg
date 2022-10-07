// 06/10/2022
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);  // GET / 2022
    //res.send('Testing');
    next();

}
module.exports = logger;