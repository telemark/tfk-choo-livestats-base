# tfk-choo-livestats-base

Livestats pages from Firebase based on [Choo](https://github.com/yoshuawuyts/choo)

## Usage

Clone the git repo

```sh
$ git clone
```

Change the [config](config/index.js) to match your environment.

```javascript
{
  databaseURL: 'https://tfk-livestats.firebaseio.com', // Your firebase URL
  databaseEntrypoint: 'skoleskys', // Entrypoint for stats
  appTitle: 'Livestatistikk skoleskyss.t-fk.no' // Title for statspage
}
```

Run build

```sh
$ npm run build
```

Serve the content in the dist-folder from a webserver of your choice

## Development

```sh
$ npm run dev
```

## License
[MIT](LICENSE)

