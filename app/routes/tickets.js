import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {

    var promise = new Promise(function(resolve) {
      setTimeout(function () {
        resolve([
          {
            titulo: "Ticket 1",
            description: "desc 1",
            solucion: "solucion 1",
            fecha: "10-10-10"
          },
          {
            titulo: "Ticket 2",
            description: "desc 2",
            solucion: "solucion 2",
            fecha: "10-10-10"
          }
        ]);
      }, 5000);
    });

    return promise;
  }
});
