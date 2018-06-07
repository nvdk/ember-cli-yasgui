ember-cli-yasgui
==============================================================================

Ember wrapper for [http://about.yasgui.org](YASGUI). This addon provides an components to interact with yasgui from ember. 

Installation
------------------------------------------------------------------------------

```
ember install ember-cli-yasgui
```


Usage
------------------------------------------------------------------------------

The following components are available:
* `yasgui-integration`
```
// simple usage
{{yasgui-integration}}

// extended usage
{{#yasgui-integration as |yasgui|}}
  {{input type='text' value='http://dbpedia.org/sparql' onchange=(action (mut 'endpoint'))}}
  {{yasgui.query endpoint=endpoint}}
  {{yasgui.results}}
{{/yasqui-integration}}

```
* `yasgui-query-editor`

* `yasgui-result-view`

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-cli-yasgui`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `npm test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
