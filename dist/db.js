"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect('mongodb+srv://prakashved0702:ved1234@ved.0lhfau3.mongodb.net/', {});
exports.default = mongoose_1.default.connection;
//# sourceMappingURL=db.js.map