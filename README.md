# ko-component-page
ko-component-page is a knockoutjs version of google polymer's [iron-component-page](https://github.com/PolymerElements/iron-component-page)

![image](https://cloud.githubusercontent.com/assets/6363089/18236495/c22b22f2-72e3-11e6-842b-697f84a78a08.png)

![image](https://cloud.githubusercontent.com/assets/6363089/18228085/759662a2-71f9-11e6-8472-54aa62b847b5.png)



# Installation
First install via npm
```
npm install ko-component-page
```

Then include in your project
```
<link rel="stylesheet" href="node_modules/ko-component-page/dist/ko-component-page.css">
<script src="node_modules/ko-component-page/dist/ko-component-page.js"></script>
```

# Usage

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

