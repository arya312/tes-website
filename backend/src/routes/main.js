const MainController = require('../controllers/MainController');

module.exports = app => {
    app.get('/', MainController.index);
};