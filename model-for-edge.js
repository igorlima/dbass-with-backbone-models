define(['backbone'], function(Backbone) {

  return Backbone.Model.extend({

    initialize: function( options ) {
      this.set( options );
    }

  });

});
