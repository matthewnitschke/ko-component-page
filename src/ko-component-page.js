ko.components.register("ko-component-page", {
  viewModel: {
    createViewModel: function(params, componentInfo){
      var self = {};

      var nodes = componentInfo.templateNodes;

      self.parametersComponent = {};
      self.examplesComponent = {};

      for(var i = 0; i < nodes.length; i++){
        if (nodes[i].localName === "ko-component-parameters"){
          self.parametersComponent = nodes[i];
        } else if (nodes[i].localName === "ko-component-examples"){
          self.examplesComponent = nodes[i];
        }
      }

      self.hideAllTabs = function(){
        document.querySelector("ko-component-parameters").style.display = 'none';
        document.querySelector("ko-component-examples").style.display = 'none';
      }

      self.parametersTabClicked = function(){
        self.hideAllTabs();
        document.querySelector("ko-component-parameters").style.display = '';
      }

      self.examplesTabClicked = function(){
        self.hideAllTabs();
        document.querySelector("ko-component-examples").style.display = '';
      }

      return self;
    }
  },
  template: `
  <div class='component-page'>
    <div class='center'>
      <div class='component-tab-button selected' data-bind='click: parametersTabClicked'>Parameters</div>
      <div class='component-tab-button' data-bind='click: examplesTabClicked'>Examples</div>
    </div>
    <!-- ko template: { nodes: $componentTemplateNodes } --><!-- /ko -->
  </div>
  `
});

ko.components.register("ko-component-parameters", {
  viewModel: function(params){
    var self = this;

    self.parameters = params.parameters;

    self.requiredParameters = ko.computed(function(){
      return ko.utils.arrayFilter(self.parameters, function(parameter) {
          if (parameter.required == null || parameter.required == undefined || !parameter.required){
            return false;
          } else {
            return true;
          }
      });
    });

    self.optionalParameters = ko.computed(function(){
      return ko.utils.arrayFilter(self.parameters, function(parameter) {
          if (parameter.required == null || parameter.required == undefined || !parameter.required){
            return true;
          } else {
            return false;
          }
      });
    })

  },
  template: `
  <div class='component-tab-title'>Parameters</div>
  <div class='component-parameters-group-label'>required</div>
  <div data-bind='foreach: requiredParameters' class='component-parameters-group'>
    <ko-component-parameter params='{data: $data}'></ko-component-parameter>
    <div class='component-parameter-separator' data-bind="visible: $index() < $parent.requiredParameters().length - 1"></div>
  </div>
  <div class='component-parameters-group-label'>optional</div>
  <div data-bind='foreach: optionalParameters' class='component-parameters-group'>
    <ko-component-parameter params='{data: $data }'></ko-component-parameter>
    <div class='component-parameter-separator' data-bind="visible: $index() < $parent.optionalParameters().length - 1"></div>
  </div>
  `
});

ko.components.register("ko-component-parameter", {
  viewModel: function(params){
    params = params.data;

    this.name = params.name;
    this.type = params.type;
    this.description = params.description;
  },
  template: `
  <div class='component-parameter-item'>
    <div class='component-parameter-name' data-bind='text: name'></div>
    <div class='component-parameter-info'>
      <span data-bind='text: type' class='component-parameter-type'></span>
      <div data-bind='text: description' class='component-parameter-description'></div>
    </div>
  </div>
  `
})

ko.components.register("ko-component-examples",{
  viewModel: function(){},
  template: `
  <div>
    <div class='component-tab-title'>Examples</div>
    <!-- ko template: { nodes: $componentTemplateNodes } --><!-- /ko -->
  </div>
  `
})

ko.components.register("ko-component-example", {
  viewModel: {
    createViewModel: function(params, componentInfo){

      var nodes = componentInfo.templateNodes;
      var html = "";
      var js = "";
      var vm = {};

      for(var i = 0; i < nodes.length; i++){
        if (nodes[i].localName === "ko-component-example-script"){
          js = nodes[i].innerHTML;
          vm = eval("(" + nodes[i].innerHTML + ")");
        } else if (nodes[i].nodeName === "#text"){
          html += nodes[i].data;
        } else {
          html += nodes[i].outerHTML;
        }
      }

      vm.html = html;
      vm.js = js;

      return {
        vm: vm,
        label: ko.unwrap(params.label) ? params.label : '',
        description: ko.unwrap(params.description) ? params.description : ''
      };
    }
  },
  template: `
  <div class='component-page-wrapper'>
    <div class='component-label' data-bind='text: label'></div>
    <div class='component-description' data-bind='text: description'></div>
    <div class='component-wrapper' data-bind="with: vm">
      <div class='component-example-wrapper' data-bind='template: { nodes: $componentTemplateNodes }'></div>
      <div class='component-markup-header'>html</div>
      <pre><code class='language-markup' data-bind="text: html"></code></pre>
      <div style='margin-top:1rem' data-bind='visible: js.length > 0' class='component-markup-header'>js</div>
      <pre data-bind='visible: js.length > 0'><code class='language-javascript' data-bind="text: js"></code></pre>
    </div>
  </div>
  `
});

ko.components.register("ko-component-example-script", {
  viewModel: function(){},
  template: "<div></div>"
});
