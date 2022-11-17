import multer from "multer";
import path from "node:path";

export const upload = multer({
  storage: multer.diskStorage({
    destination: (req, arq, cb) => {
      cb(null, path.join(__dirname, "../../public/images"));
    },
    filename(req, file, cb) {
      const name = `${Date.now()}-${file.originalname} `.trim();
      cb(null, name);
    }
  })

});
