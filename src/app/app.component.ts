import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'Local storage';
  favorites = new Array();
  favorite = {code: "", description: ""}

  store(){
    console.log("store")
    this.favorites.push({code: "TA", description: "In Gandhinagar"});
    this.favorites.push({code: "Bacancy", description: "In Ahmedabad"});
    this.favorites.push({code: "Radixweb", description: "In Gandhinagar"})

    var stringToStore = JSON.stringify(this.favorites);
    ProChartStorage.setItem("test.local.favorites", stringToStore);
  }

  get(){
    var fromStorage = ProChartStorage.getItem("test.local.favorites");
    var objectsFromStorage = JSON.parse(fromStorage)
    console.log(objectsFromStorage)
  }

  getById(valueToFind : string){
    var fromStorage = ProChartStorage.getItem("test.local.favorites");
    var objectsFromStorage = JSON.parse(fromStorage)
    console.log(objectsFromStorage);

    var toFind = objectsFromStorage.filter(function( obj ) {
      return obj.code == valueToFind;
    });

    console.log(toFind);
  }

  removeById(valueToFind){
    var fromStorage = ProChartStorage.getItem("test.local.favorites");
    var objectsFromStorage = JSON.parse(fromStorage)
    console.log(objectsFromStorage);

    var toFind = objectsFromStorage.filter(function( obj ) {
      return obj.code == valueToFind;
    });

    
    var index = objectsFromStorage.findIndex(x => x.code===valueToFind);

    if(index>=0){
      objectsFromStorage.splice(index, 1);
      var stringToStore = JSON.stringify(objectsFromStorage);
      ProChartStorage.setItem("test.local.favorites", stringToStore);
    }

  }

}

var ProChartStorage = {

    getItem: function (key) {
        return localStorage.getItem(key);
    },

    setItem: function (key, value) {
       console.log(" setItem")
       localStorage.setItem(key, value);
    },

    removeItem: function (key) {
        return localStorage.removeItem(key);
    },

    clear: function () {
        var keys = new Array();
        for (var i = 0, len = localStorage.length; i < len; i++) {
            var key = localStorage.key(i);
            if (key.indexOf("setItem") != -1 || key.indexOf("setItem") != -1)
                keys.push(key);
        }
        for (var i = 0; i < keys.length; i++)
            localStorage.removeItem(keys[i]);
    }

}