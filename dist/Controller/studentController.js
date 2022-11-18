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
exports.getStudentController = exports.StudentController = void 0;
const db_1 = __importDefault(require("../Config/db"));
const studentService_1 = require("../Service/studentService");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const StudentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    ;
    let response = {
        status: 'error',
        msg: 'Something went wrong.'
    };
    try {
        const data = req.body;
        const querys = yield (0, studentService_1.verifystudentService)(db_1.default, data);
        var values = Promise.all(querys);
        var datas = yield values;
        console.log(datas[0]);
        if (datas[0] === false) {
            console.log("ok");
            const query = yield (0, studentService_1.createService)(db_1.default, data);
            let anothervalue = Promise.all(query);
            let another = yield anothervalue;
            console.log(another);
            if (another[0] === 'success') {
                response = {
                    status: 'success',
                    msg: 'Data  Created.'
                };
            }
            else {
                console.log('bad');
            }
        }
        else {
            response = {
                status: 'failed',
                msg: 'Data Already Created.'
            };
        }
    }
    catch (err) {
        console.log(err);
        response = {
            status: 'error',
            msg: 'Ops! Something went wrong. Please try again later.'
        };
    }
    finally {
        res.send(response);
    }
});
exports.StudentController = StudentController;
const getStudentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let response = {
        status: 'error',
        msg: 'Something went wrong.'
    };
    try {
        const querys = yield (0, studentService_1.getstudentService)(db_1.default);
        var values = Promise.all(querys);
        var datas = yield values;
        console.log(datas);
        if (datas) {
            response = {
                status: 'success',
                msg: 'Data Found Successfully.',
                data: datas
            };
        }
        else {
            response = {
                status: 'failed',
                msg: 'Data Already Created.'
            };
        }
    }
    catch (err) {
        console.log(err);
        response = {
            status: 'error',
            msg: 'Ops! Something went wrong. Please try again later.'
        };
    }
    finally {
        res.send(response);
    }
});
exports.getStudentController = getStudentController;
