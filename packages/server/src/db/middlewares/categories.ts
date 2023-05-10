import Categories from "../models/categories.model"

export const getCategories = async()=>{
    return await Categories.find({})
}

export const createCategories = async (name: string)=>{
    return await Categories.create({name})
}