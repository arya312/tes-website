const express = require('express');
const Response = require('./Response');

module.exports = class App {
    routes = {
        get: [],
        post: [],
        put: [],
        patch: [],
        delete: []
    };

    port = 4000;
    express = express();
    router = express.Router();

    createExpressHandlerWrapper(handler) {
        return async (request, response) => {
            try {
                const handlerResponse = await handler(request, response, this);

                if (handlerResponse === null || handlerResponse === undefined) {
                    response.status(200);
                }
                else {
                    if (handlerResponse instanceof Response) {
                        handlerResponse.modifyResponse(response);
                    }
                    else if (typeof handlerResponse === 'object') {
                        response.json(handlerResponse);
                    }
                    else {
                        response.send(handlerResponse);
                    }
                }
            }
            catch (e) {
                console.error(e);
            }
        };
    }

    get(route, handler, middleware = []) {
        this.router.get(route, ...middleware, this.createExpressHandlerWrapper(handler));
    }

    post(route, handler, middleware = []) {
        this.router.post(route, ...middleware, this.createExpressHandlerWrapper(handler));
    }

    put(route, handler, middleware = []) {
        this.router.put(route, ...middleware, this.createExpressHandlerWrapper(handler));
    }

    patch(route, handler, middleware = []) {
        this.router.patch(route, ...middleware, this.createExpressHandlerWrapper(handler));
    }

    delete(route, handler, middleware = []) {
        this.router.delete(route, ...middleware, this.createExpressHandlerWrapper(handler));
    }

    start() {
        this.express.use('/api', this.router);
        return new Promise(r => this.express.listen(this.port, r));
    }
}