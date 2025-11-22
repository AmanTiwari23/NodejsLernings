const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dvboic0p4',
    api_key: '124758111429937',
    api_secret: '76YIkSLYZ3qSaPwF-1RpmnF1wZQ'
});

module.exports = cloudinary;