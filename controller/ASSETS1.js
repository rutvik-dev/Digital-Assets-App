var Asset = require('../model/ASSETS')

// === CREATE ASSETS  ===
let CreateAssets = async function (req, res, next) {
    try {
        const { name, type, value  , userId } = req.body;
        const CreateAssets = await Asset.create({ name, type, value ,userId });

        res.status(201).json({
            status: "success",
            message: 'Create Assets successfully',
            Data: CreateAssets
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}


// READ ASSETS
let ReadAssets = async function (req, res, next) {
    try {
        const id = req.params.id;
        const ReadAssets = await Asset.findById(id).populate('userId');

        res.status(201).json({
            status: "success",
            message: 'Read Assets successfully',
            Data: ReadAssets
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}

// UPDATE ASSETS
let UpdateAssets = async function (req, res, next) {
    try {
        const id = req.params.id;
        const UpdateAssets = await Asset.findByIdAndUpdate(id,req.body,{new:true}).populate('userId');

        res.status(201).json({
            status: "success",
            message: 'Update Asset successfully',
            Data: UpdateAssets
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}


// DELETE ASSETS
let DeleteAssets = async function (req, res, next) {
    try {
        const id = req.params.id;
        const DeleteAssets = await Asset.findByIdAndDelete(id);

        res.status(201).json({
            status: "success",
            message: 'Delete Assets successfully',
            Data: DeleteAssets
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}




module.exports = {CreateAssets,ReadAssets,UpdateAssets,DeleteAssets}