import { getUserProfile } from "./user.service.js";

export const getProfile = async(req , res) =>{
    try {
        const user = await getUserProfile(req.user.userId);
        if(!user){
            return res.status(404).json({error : "User not found"});
        }
        res.json(user);
    } catch (error) {
        res.status(400).json({error : error.message});
    }
}