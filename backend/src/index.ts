require("dotenv").config();
import express from "express";
import cors from "cors";
import { Response, Request } from "express";
import { supabase } from "./utils/supabse"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// app.post('/signup', async (req: Request, res: Response) => {
//     const { email, password } = req.body;
//     const { user, session, error } = await supabase.auth.signUp({
//         email,
//         password,
//     });

//     if (error) return res.status(400).json({ error: error.message });
//     return res.status(200).json({ user, session });
// });

app.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    // const { user, session, error } = await supabase.auth.signIn({
    //     email,
    //     password,
    // });

    // if (error) return res.status(400).json({ error: error.message });
    // return res.status(200).json({ user, session });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
