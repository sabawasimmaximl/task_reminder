"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var tasks = [
            { tname: "Cleaning", tdoer: 1, remtime: '' },
            { tname: "Boiler Heating", tdoer: 1, remtime: '' },
            { tname: "Freezing", tdoer: 1, remtime: '' },
            { tname: "Amplify", tdoer: 1, remtime: '' },
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