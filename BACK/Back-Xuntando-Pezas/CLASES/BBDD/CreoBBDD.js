"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreoBBDD = void 0;
const sqlite3_1 = __importDefault(require("sqlite3"));
const sqlite_1 = require("sqlite");
class CreoBBDD {
    constructor(infobasedatos) {
        this.basedatos = infobasedatos.bbdd;
        this.rutaBBDD = infobasedatos.ruta;
        this.creoBBDD(infobasedatos.sentenciaTablas);
    }
    openDb() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, sqlite_1.open)({
                filename: `${this.rutaBBDD}/${this.basedatos}`,
                driver: sqlite3_1.default.Database
            });
        });
    }
    /**
     * @function conexionBBDD é unha función asíncrona
     * @returns devolve a execución da base de datos
     */
    conexionBBDD() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.openDb();
        });
    }
    creoBBDD(sentenciaCreacionTablas) {
        return __awaiter(this, void 0, void 0, function* () {
            (yield this.conexionBBDD()).exec(`${sentenciaCreacionTablas}`).catch(error => console.error("O erro é: ", error));
            //(await this.openDb()).exec(`${sentenciaCreacionTablas}`)
        });
    }
}
exports.CreoBBDD = CreoBBDD;
