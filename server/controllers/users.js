const Users = require('../models/users')

const getAllUsers = async(req,res) => {
  try {
      const users = await Users.find({})
      return res.status(201).json({"users":users})

  } catch (error) {
      return res.status(404).json({"message":error})
  }
}

const deleteUser = async(req,res) => {
    try {
        const {userName : userName} = req.params
        await Users.deleteOne({userName:userName});
        return res.status(201).json({"message":"Deleted Successfully"})

    } catch (error) {
        return res.status(404).json({"message":error})
    }
}

const addUser = async(req,res) => {
    try {
        const user = await Users.create(req.body)
        return res.status(201).json({"newUser":user})

    } catch (error) {
        return res.status(404).json({"message":error})
    }
}

const getUser = async(req,res) => {
    try {
        const {userName : userName} = req.params
        const user = await Users.findOne({userName:userName})
        return res.status(201).json({"user":user})

    } catch (error) {
        return res.status(404).json({message:error})
    }
}

const updateGeneralDetails = async(req,res) => {
    try {
        const {userName : userName} = req.params

        let user = await Users.findOne({userName:userName})
        const versionIndex = (user.contentVersions).length - 1;

        const updateDetails = req.body;

        let name = updateDetails.name;
        let logo = updateDetails.logo;
        let socialMedia = updateDetails.socialMedia;
        let src = updateDetails.src;
        let caption = updateDetails.caption;
        let email = updateDetails.email;
        let phoneNumber = updateDetails.phoneNumber;


        user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.userDetails.name`] : name}},{new:true})
        user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.userDetails.logo`] : logo}},{new:true})
        user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.userDetails.socialMedia`] : socialMedia}},{new:true})
        user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.homePagePoster.src`] : src}},{new:true})
        user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.homePagePoster.caption`] : caption}},{new:true})
        user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.contactDetails.email`] : email }},{new:true})
        user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.contactDetails.phoneNumber`] : phoneNumber}},{new:true})

        return res.status(201).json({"updatedUser":user});

    } catch (error) {
        console.log(error)
        return res.status(404).json({message:"Failed Update"})
    }
}

const publishVersion = async(req,res)=>{
    const {userName : userName} = req.params
    let user = await Users.findOne({userName:userName})
    let contentVersions = user.contentVersions

    let versionIndex = contentVersions.length - 1

    if(versionIndex==-1)
    {
       contentVersions.push({})
    }
    else
    {
        contentVersions.push(contentVersions[index]);
    }
}

module.exports = {getAllUsers,addUser,getUser , updateGeneralDetails , publishVersion , deleteUser}
