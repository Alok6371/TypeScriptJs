"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getChai(kind) {
    if (typeof kind === "string") {
        return `making ${kind} chai....`;
    }
    return `Chai order: ${kind}`;
}
function serveChai(msg) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return `Serving default masala chai ${msg}`;
}
function orderChai(size) {
    if (size === "small") {
        return "Small Cutting Chai...";
    }
    if (size === "medium" || size === "large") {
        return "make extra chai";
    }
    return `chai order #${size}`;
}
// console.log(orderChai("medium"));
class kulahchai {
    serve() {
        return `Serving KUlad vhai`;
    }
}
class CuttingChai {
    serve() {
        return `Serving KUlad vhai`;
    }
}
function server(chai) {
    if (chai instanceof kulahchai) {
        return chai.serve();
    }
}
console.log(server);
//# sourceMappingURL=typenarrow.js.map