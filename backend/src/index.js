const App = require("./core/App");
const fs = require('fs/promises');
const path = require("path");

const app = new App();

async function loadRoutes(dir) {
    const files = await fs.readdir(dir);

    for await (const file of files) {
        const stat = await fs.lstat(path.join(dir, file));

        if (stat.isDirectory()) {
            await loadRoutes(path.join(dir, file));
        }
        else {
            require(path.join(dir, file))(app);
        }
    }
}

(async () => {
    await loadRoutes(path.resolve(__dirname, 'routes'));

    app.start().then(() => {
        console.log("API listening at port " + app.port);
    }).catch(console.error);
})();