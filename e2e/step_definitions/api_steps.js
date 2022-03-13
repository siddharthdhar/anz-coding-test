const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require('assert').strict
const restHelper = require('./utils/restHelper')
const apiKey = '71796ff0886fd85b4674a1bcd40d0db4'

Given('A Request {} with {} and "{}" API key', async (request, headers, missingOrValid) => {
    this.request = JSON.parse(request);
    this.headers = JSON.parse(headers);
    this.apiKey = missingOrValid.toLowerCase() === 'missing' ? '' : apiKey;

});

When('I send {} request to {}', async (method, url) => {
    let finalUrl = `${url}appid=${this.apiKey}`;
    switch (method) {
        case "GET":
            finalUrl = url.includes('{id}') ? finalUrl.replace('{id}', this.response.data.ID) : finalUrl;
            this.response = await restHelper.getData(finalUrl, this.headers,  this.request);
            break;
        case "POST":
            this.response = await restHelper.postData(finalUrl, this.headers,  this.request);
            break;
        case "PATCH":
            this.response = await restHelper.patchData(finalUrl, this.headers,  this.request);
            break;
        case "DELETE":
            this.response = await restHelper.deleteData(`${url}appid=${this.apiKey}`, this.headers,  this.request);
            break;
    }
    return this.response;
    
});

Then('I get a response code {int}', async (responseCode) => {
    assert.equal(this.response.status, responseCode);
});

Then('the error "{}"', async (errorMessage) => {
    assert.equal(this.response.data.message, errorMessage);
});

Then ('the response body matches the request sent', async () => {
    const requestData = this.request;
    const responseData = this.response.data;
    assert.equal(requestData.name, responseData.name);
    assert.equal(requestData.latitude, responseData.latitude);
    assert.equal(requestData.longitude, responseData.longitude);
    assert.equal(requestData.altitude, responseData.altitude);
    const url = `http://api.openweathermap.org/data/3.0/stations/${responseData.id}?appid=${this.apiKey}`
    await restHelper.deleteData(url, this.headers,  undefined);
});