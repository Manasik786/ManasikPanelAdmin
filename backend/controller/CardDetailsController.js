const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const cloudinary = require("cloudinary");
const CardDetails = require("../models/CardDetails")
const sendEmail = require("../utils/sendEmail")
// const { Translate } = require('@google-cloud/translate');
// const translate = require('google-translate-api');
exports.CreateCardList = catchAsyncErrors(async (req, res, next) => {
    let images = [];
    const { CardDescriptions, CardType, flag } = req.body

    if (typeof req.body.images === "string") {
        images.push(req.body.images);
    } else {
        images = req.body.images;
    }
    console.log(req.body, "as")
    // console.log(req.body.images, "ab")

    const imagesLinks = [];
    for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i], {
            folder: "AviationsFolder",
        });
        console.log(result);
        imagesLinks.push({
            public_id: result.public_id,
            url: result.secure_url,
        });
    }

    req.body.images = imagesLinks
    console.log(req.body)
    const data = await CardDetails.create(req.body);

    res.status(201).json({
        success: true,
        data,
    })
})
exports.GetCardItems = catchAsyncErrors(async (req, res, next) => {
    const data = await CardDetails.find();
    res.status(200).json({
        success: true,
        data,
    })
})

exports.DeleteCardItems = catchAsyncErrors(async (req, res, next) => {
    const data = await CardDetails.findById(req.params.id)
    if (!data) {
        return next(new ErrorHandler("data  not found ", 404))
    }
    for (let i = 0; i < data.images.length; i++) {
        await cloudinary.v2.uploader.destroy(data.images[i].public_id);
    }
    await data.remove();
    res.status(200).json({
        success: true,
        message: "Data deleted successfully "
    })
})
exports.UpdateCardItems = catchAsyncErrors(async (req, res, next) => {
    let data = await CardDetails.findById(req.params.id)
    // const { Position, Name, Phone, Email, Gender, Nationality, CV, Applied } = req.body

    if (!data) {
        return next(new ErrorHander("Data not found", 404));
    }
    let images = []
    if (typeof req.body.images === "string") {
        images.push(req.body.images);
    }
    else {
        images = req.body.images;
    }
    if (images !== undefined) {
        for (let i = 0; i < data.images.length; i++) {
            await cloudinary.v2.uploader.destroy(data.images[i].public_id);
        }

        const imagesLinks = [];

        for (let i = 0; i < images.length; i++) {
            const result = await cloudinary.v2.uploader.upload(images[i], {
                folder: "AviationsFolder",
            });

            imagesLinks.push({
                public_id: result.public_id,
                url: result.secure_url,
            });
        }

        req.body.images = imagesLinks;
    }
    data = await CardDetails.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    })
    console.log(data)
    res.status(200).json({
        success: true,
        data,
    });
})
exports.SendComplaintLead = catchAsyncErrors(async (req, res, next) => {
    const { useremail, message } = req.body
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!useremail) {
        return next(new ErrorHandler("please write email", 404))
    }
    if (!pattern.test(useremail)) {
        return next(new ErrorHandler("Write Valid Email", 404))
    }
    try {
        sendEmail({
            email: useremail,
            subject: "Manasik Aviation",
            message,
        })
        res.status(200).json({
            success: true,
            message: "your complaint is forwarded to the administration"
        })
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }

})
exports.Arabicgetdata = catchAsyncErrors(async (req, res, next) => {
    const data = await CardDetails.find();
    // translate('Ik spreek Engels', { to: 'en' }).then(res => {
    //     console.log(res.text);
    //     //=> I speak English
    //     console.log(res.from.language.iso);
    //     //=> nl
    // }).catch(err => {
    //     console.error(err);
    // });
    await someFunction(data)
    res.status(200).json({
        success: true,
        data,
    })
})
async function someFunction(Requesteddata) {
    // // Imports the Google Cloud client library
    // const {Translate} = require('@google-cloud/translate');

    // // Instantiates a client
    // const translate = new Translate({projectId});

    // // The text to translate
    // const text = 'Hello, world!';

    // // The target language
    // const target = 'fr';

    // // Translates some text into French
    // const [translation] = await translate.translate(text, target);
    // console.log(`Text: ${text}`);
    // console.log(`Translation: ${translation}`);
    // const axios = require("axios");

    // const encodedParams = new URLSearchParams();
    // encodedParams.append("q", Requesteddata);
    // encodedParams.append("target", "ar");
    // encodedParams.append("source", "en");

    // const options = {
    //     method: 'POST',
    //     url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
    //     headers: {
    //         'content-type': 'application/x-www-form-urlencoded',
    //         'Accept-Encoding': 'application/gzip',
    //         'X-RapidAPI-Key': 'f313a34ec0msh6029aebdd8e7206p17ec91jsn0ed6d1a996a9',
    //         'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    //     },
    //     data: encodedParams
    // };

    // axios.request(options).then(function (response) {
    //     console.log(response.data);
    //     console.log(response.data.data)
    // }).catch(function (error) {
    //     console.error(error);
    // });
    var translate = require('yandex-translate')(key);

    translate.translate('You can burn my house, steal my car, drink my liquor from an old fruitjar.', { to: 'ru' }, function (err, res) {
        console.log(res.text);
    });

    translate.detect('Граждане Российской Федерации имеют право собираться мирно без оружия, проводить собрания, митинги и демонстрации, шествия и пикетирование', function (err, res) {
        // res.lang -> 'ru'
    });
}
