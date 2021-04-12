// Enter in terminal: http-server ==> then Etner in browser: localhost:8080/index.html ==> then ctrl+Shift+R

function render() {
    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render();
}

spinnerPage.render();

let CATALOG = [];

//Local Server:
//server/catalog.json   

//Get API:
//http://myjson.com/
//https://api.myjson.com/bins/esicc

fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;

        setTimeout(() => {
            spinnerPage.handlerClear();
            render();
        }, 1000)

    })
    .catch(error => {
        spinnerPage.handlerClear();
        errorPage.render();
    })