ember-cli-yasgui
==============================================================================

Ember wrapper for [http://about.yasgui.org](YASGUI). This addon provides an components to interact with yasgui from ember. 


Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above


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

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
