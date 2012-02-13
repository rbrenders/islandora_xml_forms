Drupal.behaviors.xmlFormElementPages = function(context) {
  var pages = {
    tabs: null,
    init: function () {
      var load = '.xml-form-elements-pages';
      this.tabs = $(load).tabs({
        fx: {
          slide: 'toggle'
        }
      });
      $('.xml-form-elements-page-back').each(function() {
        $(this).click(function(event){
          var tab = $(this).parent().parent();
          pages.back(tab);
          event.preventDefault();
        });
      });
    },
    back: function(tab) {
      var selected = tab.tabs("option", "selected"); 
      selected = selected - 1;
      tab.tabs('select', selected);
    },
    next: function(tab) {
      var selected = tab.tabs("option", "selected"); 
      selected = selected + 1;
      tab.tabs('select', selected);
    }
  }
  pages.init(true);
  $("div.xml-form-elements-pages > div.ui-tabs-panel").ajaxComplete(function(event, request, settings) {
    var tabs = $(event.currentTarget).parent();
    pages.next(tabs);
  });
}