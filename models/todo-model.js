
$(document).ready(function(){

    var ToDoItem = Backbone.Model.extend({

        defaults: function() {
            return {
                title: "empty todo...",
                order: Todos.nextOrder(),
                done: false
            };
        },

        initialize: function() {
            if (!this.get("title")) {
                this.set({"title": this.defaults().title});
            }
        },

        toggle: function() {
            this.save({done: !this.get("done")});
        }
    });
});
