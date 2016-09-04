# ko-component-page
![image](https://cloud.githubusercontent.com/assets/6363089/18228085/759662a2-71f9-11e6-8472-54aa62b847b5.png)

ko-component-page is a knocoutjs version of google polymer's iron-component-page

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

