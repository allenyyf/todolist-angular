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
var Item = (function () {
    function Item() {
        // @Output() updateItemData:EventEmitter<Item> = new EventEmitter();
        this.removeItemNum = new core_1.EventEmitter();
        this.content = "";
        this.status = false;
        this.id = 1;
    }
    Item.prototype.toggleItemStatus = function (item) {
        console.log(item);
        return item.status = !item.status;
    };
    Item.prototype.removeItem = function (id) {
        this.removeItemNum.emit(id);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Item)
    ], Item.prototype, "item", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Item.prototype, "removeItemNum", void 0);
    Item = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "todo-item",
            templateUrl: "item.component.html",
            styleUrls: ["item.component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], Item);
    return Item;
}());
exports.Item = Item;
