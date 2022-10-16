module.exports = class Response {
    body = '';
    code = 200;
    headers = {};

    constructor(code = 200, body = '', headers = {}) {
        this.body = body;
        this.code = code;
        this.headers = headers;
    }

    setCode(code) {
        this.code = code;
        return this;
    }

    setBody(body) {
        this.body = body;
        return this;
    }

    setHeaders(headers) {
        this.headers = headers;
        return this;
    }

    addHeader(name, value) {
        this.headers[name] = value;
        return this;
    }

    modifyResponse(res) {
        res.status(this.status).set(this.headers).send(this.body);
    }
}