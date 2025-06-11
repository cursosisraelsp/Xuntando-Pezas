"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUser = void 0;
const isUser = (userFormAcceso, usuarioBBDD) => {
    return userFormAcceso.username === usuarioBBDD.NAME_USER_TRABALLADOR && userFormAcceso.pwd === usuarioBBDD.PWD_TRABALLADOR;
};
exports.isUser = isUser;
