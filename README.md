#  MINESWEEPER-CLIENT


Minesweeper API Cliente

## Insallation

```sh
npm install --save minesweeper-client
```

## Usage

```js
const minesweeper = require('minesweeper-client')

const client = minesweeper.createClient()

const userId = '2142'

client.getUserGames(userId).then(users => {
  // do something with users
}).catch(err => {
  // do something with users
})
```

Or using callbacks

```js
client.getUserGames(userId, (err, users) => {
  // do something with err or users
})