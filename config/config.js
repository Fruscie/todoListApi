module.exports = {
    //ubah DB yang sudah di bold dengan host mongodb masing-masing
    DB: process.env.HOST ? process.env.HOST : 'mongodb+srv://admin:inipassword@gg-6csk1.mongodb.net/learnit-react?retryWrites=true&w=majority',
    //learnit-react?retryWrites=true&w=majority',
    APP_PORT: process.env.PORT? process.env.PORT:80,
};
//aa