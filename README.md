### Open Weather API

Lets take our API call functionality up a notch by working with an API that requires a (free) password known as an API key.

First, create an account at https://www.weatherapi.com/

Lets look at the documentation for the API together. Once you get a key, enter it into the input, enter a city in, and hit the response button. You should see your call, and the data. The url should look something like this

```
`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`
```


We can do our usual HTML set up creating a text input, a button, and some empty text elements, and then using DOM manipulation to populate them:

```html

<input id="textInput" placeholder="enter city here" />
<button id="submitButton"> Click Here </button>

<h1 id="cityName"> </h1>
<h2 id="temp"> </h2>

```

and populate with as much data as you would like, based off of the API's response


Your JS may look something like this

```js

const apiKey = your api key
const button = document.querySelector(The Button!)
const input = document.querySelector(The Input!).value
```

Test your API call by logging your data into the console, then render it on screen to see your live information on screen!
