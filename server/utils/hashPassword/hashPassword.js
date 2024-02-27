import bcryptjs from "bcryptjs";
export const hashPassword = async (password) => {
    const saltRounds = 10;
    const hash = await bcryptjs.hash(password, saltRounds);
    return hash;
}
