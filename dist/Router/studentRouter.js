"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentController_1 = require("../Controller/studentController");
const router = (0, express_1.Router)();
router.post('/create', studentController_1.StudentController);
router.get('/get', studentController_1.getStudentController);
exports.default = router;
