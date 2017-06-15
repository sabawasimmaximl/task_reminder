"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var tasks = [
            { tname: ["Scaffolding", "test name"], tdoer: [1, 2], remtime: '' },
            { tname: ["Cleaning", "Cleaning 2"], tdoer: [2, 3, 4], remtime: '' },
            { tname: ["Boiler Heating"], tdoer: [0, 1, 2], remtime: '' },
            { tname: ["Heater Exchange"], tdoer: [4, 5, 6], remtime: '' }
        ];
        var heroes = [
            { id: 0, name: 'Zero', task: [tasks[0]] },
            { id: 1, name: 'Aster', task: [tasks[1]] },
            { id: 2, name: 'Niopa', task: [tasks[2]] },
            { id: 3, name: 'leglo', task: [tasks[3]] },
            { id: 4, name: 'Tornado', task: [tasks[0]] }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map