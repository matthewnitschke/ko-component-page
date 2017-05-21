# ko-component-page
ko-component-page is a knockoutjs version of google polymer's [iron-component-page](https://github.com/PolymerElements/iron-component-page)

Working [demo](https://matthewnitschke.github.io/ko-component-page/)

# Installation

### Yeoman
See [generator-ko-component-page](https://github.com/matthewnitschke/generator-ko-component-page) for how the generator works
```
npm install generator-ko-component-page -g

cd /your-directory

yo ko-component-page
```

### Manually
First install via npm
```
npm install ko-component-page
```

Then include in your project
```html
<link rel="stylesheet" href="node_modules/ko-component-page/dist/ko-component-page.css">
<script src="node_modules/ko-component-page/dist/ko-component-page.js"></script>
```

# Usage
ko-component-page consists of 6 different components

```html
<!-- Main wrapper component -->
<ko-component-page></ko-component-page>

<!-- Parameter wrapper component -->
<ko-component-parameters></ko-component-parameters>

<!-- Parameter component -->
<ko-component-parameter></ko-component-parameter>

<!-- Example wrapper component -->
<ko-component-examples></ko-component-examples>

<!-- Example component -->
<ko-component-example></ko-componen-example>

<!-- Example script component -->
<ko-component-example-script></ko-component-example-script>
```

They are used as follows
```html
<ko-component-page>
  <ko-component-parameters>
    <ko-component-parameter params="{...}"></ko-component-parameter>
  </ko-component-parameters>
  
  <ko-component-examples>
    <!-- Markup here -->
    <ko-component-example-script>
      {
        // values here
      }
    </ko-component-example-script>
  </ko-component-examples>
  
</ko-component-page>
```

There are two sections to the ko-component page, parameters and examples


## Parameters
![image](https://cloud.githubusercontent.com/assets/6363089/18236495/c22b22f2-72e3-11e6-842b-697f84a78a08.png)

Parameters are each of the values the params property can accept. Each ko-component-parameter component must be inside the ko-component-parameters component.

```html
<ko-component-parameters>
  <!-- the required property tells ko-component-parameters where to put it's self -->
  <ko-component-parameter required params="{name: 'name', type: 'string', description: 'a description'}"></ko-component-parameter>
  
  <!-- if no required property exsists, the parameter is optional -->
  <ko-component-parameter params="{name: 'name', type: 'string', description: 'a description'}"></ko-component-parameter>

</ko-component-parameters>
```

## Examples
![image](https://cloud.githubusercontent.com/assets/6363089/18228085/759662a2-71f9-11e6-8472-54aa62b847b5.png)

examples are when you can show the functionality of your component

```html
<ko-component-page params="{label: '<Component Label>'}">
  <!-- Put your markup for the component here -->
  <ko-component-page-script>
  {
    // put your observables for the component here
  }
  </ko-component-script>
</ko-component-page>
```

