ko.components.register("ko-component-page", {
  viewModel: {
    createViewModel: function(params, componentInfo){

      var nodes = componentInfo.templateNodes;
      var html = "";
      var js = "";
      var vm = {};

      for(var i = 0; i < nodes.length; i++){
        if (nodes[i].localName === "ko-component-page-script"){
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

ko.components.register("ko-component-page-script", {
  viewModel: function(){},
  template: "<div></div>"
});
