const multer = require('multer');
const path = require('path');
// const fs = require('fs');

// const filePath = {
//     fs.exis
// }

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        console.log("file", file);
        cb(null, "src/uploads/")
    },
    filename: function (req, file, cb){
        // const extension = path.extname(file.originalname);
        const fileName = `${Date.now()}-${file.originalname}`;
        cb(null, fileName)
    }
});

const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf']

const fileFilter = (req, file, cb) =>{
    if(allowedTypes.includes(file.mimetype)){
        cb(null, true)
    }else{
        cb(new Error("Upload proper file format"), false)
    }
}

const upload = multer({
    storage:storage,
    fileFilter:fileFilter,
    limits: 3*1024*1024
});

module.exports = upload;