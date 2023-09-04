# Session Store

```js
...
    sessionSaveSession: <ExpressSessionStoreModule>,
...
```

- `ExpressSessionStoreModule` - Express.js session store module, for example 'session-file-store', or 'connect-mongodb-session', etc.
- The easiest module however would be `connect-mongo`, here is an example below:

```js
const MongoStore = require('connect-mongo')

const Dashboard = new DBD.Dashboard({
    ...
    sessionSaveSession: MongoStore.create({ mongoUrl: 'mongodb://mongodb0.example.com:27017' })
    ...
})
```

And thats all! Thats all you need to retain all user sessions after a dashboard restart.
