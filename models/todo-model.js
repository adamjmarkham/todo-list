
$(document).ready(function(){

    var ToDoItem = Backbone.Model.extend({

        defaults: function() {
            return {
                title: "empty todo...",
                order: MyToDos.nextOrder(),
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

    var ToDoList = Backbone.Collection.extend({

        model: ToDoItem,

        localStorage: new Backbone.localStorage("my-todo-list"),

        done: function(){
            return this.filter(function(todoitem){ return todoitem.get('done'); });
        },

        remaining: function(){
            return this.without.apply(this, this.done());
        },

        nextOrder: function() {
            if (!this.length) return 1;
            return this.last().get('order') + 1;
        },

        comparator: function(todo) {
            return todo.get('order');
        }
    });

    var MyToDos = new ToDoList;
});
