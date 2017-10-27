"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var item_component_1 = require("./item.component");
var handle_data_1 = require("./handle-data");
var List = (function () {
    function List(handleData) {
        this.handleData = handleData;
        this.newItem = new item_component_1.Item();
        this.items = [];
        this.showItems = [];
        this.id = 0;
        this.clickTab = "all";
        this.showItems = this.items;
    }
    List.prototype.addItem = function () {
        if (this.newItem.content !== "") {
            this.setId(this.newItem);
            this.items.push(this.newItem);
            this.getListItem();
            this.newItem = new item_component_1.Item();
            console.log(this.items);
            this.updateData();
        }
    };
    List.prototype.removeItem = function (id) {
        this.items = this.items.filter(function (item) { return item.id !== id; });
        this.getListItem();
        this.updateData();
    };
    // updateItem(updateItem:Item){
    //     let num = this.items.findIndex((item)=>{ return item.id == updateItem.id})
    //     this.items[num].content = updateItem.content
    // }
    List.prototype.setId = function (item) {
        if (!this.items.length) {
            item.id = 1;
        }
        else {
            item.id = this.items[this.items.length - 1].id + 1;
        }
    };
    List.prototype.getListItem = function () {
        if (this.clickTab === "all") {
            this.showAllItems();
        }
        else if (this.clickTab === "todo") {
            this.showTodoItems();
        }
        else if (this.clickTab === "done") {
            this.showDoneItems();
        }
    };
    List.prototype.showAllItems = function () {
        this.showItems = this.items;
        this.clickTab = "all";
        this.updateData();
    };
    List.prototype.showTodoItems = function () {
        this.showItems = this.items.filter(function (item) { return item.status == false; });
        this.clickTab = "todo";
        this.updateData();
    };
    List.prototype.showDoneItems = function () {
        this.showItems = this.items.filter(function (item) { return item.status == true; });
        this.clickTab = "done";
        this.updateData();
    };
    List.prototype.clearDoneItems = function () {
        this.items = this.items.filter(function (item) { return item.status == false; });
        this.getListItem();
        this.updateData();
    };
    List.prototype.updateData = function () {
        var data = {
            tabName: "",
            Items: []
        };
        var DataItems = [];
        data.tabName = this.clickTab;
        this.items.forEach(function (item) {
            var data = {
                content: item.content,
                id: item.id,
                status: item.status };
            DataItems.push(data);
        });
        data.Items = DataItems;
        this.handleData.updateData(data);
    };
    List = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "items-list",
            templateUrl: "list.component.html",
            styleUrls: ["list.component.css"]
        }), 
        __metadata('design:paramtypes', [handle_data_1.HandleData])
    ], List);
    return List;
}());
exports.List = List;
