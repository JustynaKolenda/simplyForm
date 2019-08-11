"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.required = function (value) { return value ? undefined : 'Required'; };
exports.email = function (value) {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined;
};
//# sourceMappingURL=ValidationForm.js.map