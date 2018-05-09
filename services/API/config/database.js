module.exports = (mongoose, config) => {
    const database = mongoose.connection;
    mongoose.Promise = Promise;
    mongoose.connect(config.database, {
        promiseLibrary: global.Promise
    });
    database.on('error', error=> console.log(`Ошибка соединения с БД: $(error`));
    database.on('connected', ()=> console.log(`Установленно соединение с БД`));
    database.on('disconnected', ()=> console.log(`Разорвано соединение с БД`));
    process.on('SIGINIT', ()=>{
        database.close(() =>{
            console.log('Сервер прекратил работу, соединение закрыто');
            process.exit(0)
        })
    });

};