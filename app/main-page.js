const createMapViewModel = require("./main-view-model").createMapViewModel;

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = createMapViewModel();
}
exports.onNavigatingTo = onNavigatingTo;