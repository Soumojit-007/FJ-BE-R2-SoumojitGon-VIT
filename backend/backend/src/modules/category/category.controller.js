import { createCategory , getCategories , deleteCategory } from "./category.service.js";

export const create = async(req , res) =>{
    try { 
        console.log("BODY RECEIVED:", req.body);
        const category = await createCategory(req.user.userId, req.body);

        res.status(201).json(category);
    } catch (error) {
        res.status(400).json({error : error.message});
    }
};

export const getAll = async(req,res) =>{
    try {
        const categories = await getCategories(req.user.userId);
        res.json(categories);
    } catch (error) {
        res.status(400).json({error : error.message});
    }
};

export const remove = async(req,res) =>{
    try {
        await deleteCategory(req.user.userId , req.params.id);
        res.json({message : "Category deleted"});
    } catch (error) {
        res.status(400).json({error : error.message});
    }
}