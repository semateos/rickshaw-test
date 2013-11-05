if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to rickshaw-test.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });

  Template.hello.rendered = function(){

      var graph = new Rickshaw.Graph( {
          element: document.querySelector("#chart"), 
          width: 500, 
          height: 200, 
          series: [{
              color: 'steelblue',
              data: [ 
                  { x: 0, y: 40 }, 
                  { x: 1, y: 49 }, 
                  { x: 2, y: 38 }, 
                  { x: 3, y: 30 }, 
                  { x: 4, y: 32 } ]
          }]
      });

      graph.render();
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
