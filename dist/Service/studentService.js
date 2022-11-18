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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getstudentService = exports.verifystudentService = exports.createService = void 0;
const createService = (db, data) => __awaiter(void 0, void 0, void 0, function* () {
    var list = [];
    const query = 'INSERT INTO  STUDENT_DETAILS (NAME,EMAIL,ADDRESS,DEPARTMENT,PHONENUMBER,STATE,CITY,COUNTRY,PINCODE) VALUES(?,?,?,?,?,?,?,?,?);';
    const querydata = [data.name, data.email, data.address, data.department, data.phone, data.state, data.city, data.country, data.pincode];
    const p = new Promise(function (resolve, reject) {
        db.get(query, querydata, (err, data) => {
            if (err) {
                throw err;
            }
            resolve('success');
        });
    });
    list.push(p.then(function (fromresolve) {
        return fromresolve;
    }).catch(function (fromReject) {
        return fromReject;
    }));
    return list;
});
exports.createService = createService;
const verifystudentService = (db, data) => __awaiter(void 0, void 0, void 0, function* () {
    let list = [];
    const query = "SELECT * FROM STUDENT_DETAILS WHERE NAME=? AND  PHONENUMBER =? AND DEPARTMENT=?";
    const querydata = [data.name, data.phone, data.department];
    const p = new Promise(function (resolve, reject) {
        db.get(query, querydata, (err, data) => {
            if (err) {
                throw err;
            }
            if (data === undefined) {
                resolve(false);
            }
            resolve(data);
        });
    });
    list.push(p.then(function (fromresolve) {
        return fromresolve;
    }).catch(function (fromReject) {
        return fromReject;
    }));
    return list;
});
exports.verifystudentService = verifystudentService;
const getstudentService = (db, data) => __awaiter(void 0, void 0, void 0, function* () {
    let list = [];
    const query = "SELECT * FROM STUDENT_DETAILS;";
    const p = new Promise(function (resolve, reject) {
        db.all(query, (err, data) => {
            if (err) {
                throw err;
            }
            console.log(data);
            resolve(data);
        });
    });
    list.push(p.then(function (fromresolve) {
        return fromresolve;
    }).catch(function (fromReject) {
        return fromReject;
    }));
    return list;
});
exports.getstudentService = getstudentService;
