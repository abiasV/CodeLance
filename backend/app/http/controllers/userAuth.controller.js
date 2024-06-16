// const Controller = require("./controller");
// const {
//   generateRandomNumber,
//   toPersianDigits,
//   setAccessToken,
//   setRefreshToken,
//   verifyRefreshToken,
// } = require("../../../utils/functions");
// const createError = require("http-errors");
// const { UserModel } = require("../../models/user");
// const Kavenegar = require("kavenegar");
// const CODE_EXPIRES = 90 * 1000; //90 seconds in miliseconds
// const { StatusCodes: HttpStatus } = require("http-status-codes");
// const {
//   completeProfileSchema,
//   updateProfileSchema,
//   checkOtpSchema,
// } = require("../validators/user.schema");

// class userAuthController extends Controller {
//   constructor() {
//     super();
//     this.code = 0;
//     this.phoneNumber = null;
//   }
//   async getOtp(req, res) {
//     let { phoneNumber } = req.body;

//     if (!phoneNumber)
//       throw createError.BadRequest("شماره موبایل معتبر را وارد کنید");

//     phoneNumber = phoneNumber.trim();
//     this.phoneNumber = phoneNumber;
//     this.code = generateRandomNumber(6);

//     const result = await this.saveUser(phoneNumber);
//     if (!result) throw createError.Unauthorized("ورود شما انجام نشد.");

//     // send OTP
//     this.sendOTP(phoneNumber, res);
//   }
//   async checkOtp(req, res) {
//     await checkOtpSchema.validateAsync(req.body);
//     const { otp: code, phoneNumber } = req.body;

//     const user = await UserModel.findOne(
//       { phoneNumber },
//       { password: 0, refreshToken: 0, accessToken: 0 }
//     );

//     if (!user) throw createError.NotFound("کاربری با این مشخصات یافت نشد");

//     if (user.otp.code != code)
//       throw createError.BadRequest("کد ارسال شده صحیح نمیباشد");

//     if (new Date(`${user.otp.expiresIn}`).getTime() < Date.now())
//       throw createError.BadRequest("کد اعتبار سنجی منقضی شده است");

//     user.isVerifiedPhoneNumber = true;
//     await user.save();

//     // await setAuthCookie(res, user); // set httpOnly cookie
//     await setAccessToken(res, user);
//     await setRefreshToken(res, user);
//     let WELLCOME_MESSAGE = `کد تایید شد، به فرانت هوکس خوش آمدید`;
//     if (!user.isActive)
//       WELLCOME_MESSAGE = `کد تایید شد، لطفا اطلاعات خود را تکمیل کنید`;

//     return res.status(HttpStatus.OK).json({
//       statusCode: HttpStatus.OK,
//       data: {
//         message: WELLCOME_MESSAGE,
//         user,
//       },
//     });
//   }
//   async saveUser(phoneNumber) {
//     const otp = {
//       code: this.code,
//       expiresIn: Date.now() + CODE_EXPIRES,
//     };

//     const user = await this.checkUserExist(phoneNumber);
//     if (user) return await this.updateUser(phoneNumber, { otp });

//     return await UserModel.create({
//       phoneNumber,
//       otp,
//       // role: ROLES.USER,
//     });
//   }
//   async checkUserExist(phoneNumber) {
//     const user = await UserModel.findOne({ phoneNumber });
//     return user;
//   }
//   async updateUser(phoneNumber, objectData = {}) {
//     Object.keys(objectData).forEach((key) => {
//       if (["", " ", 0, null, undefined, "0", NaN].includes(objectData[key]))
//         delete objectData[key];
//     });
//     const updatedResult = await UserModel.updateOne(
//       { phoneNumber },
//       { $set: objectData }
//     );
//     return !!updatedResult.modifiedCount;
//   }
//   sendOTP(phoneNumber, res) {
//     const kaveNegarApi = Kavenegar.KavenegarApi({
//       apikey: `${process.env.KAVENEGAR_API_KEY}`,
//     });
//     kaveNegarApi.VerifyLookup(
//       {
//         receptor: phoneNumber,
//         token: this.code,
//         template: "registerVerify",
//       },
//       (response, status) => {
//         console.log("kavenegar message status", status);
//         if (response && status === 200)
//           return res.status(HttpStatus.OK).send({
//             statusCode: HttpStatus.OK,
//             data: {
//               message: `کد تائید برای شماره موبایل ${toPersianDigits(
//                 phoneNumber
//               )} ارسال گردید`,
//               expiresIn: CODE_EXPIRES,
//               phoneNumber,
//             },
//           });

//         return res.status(status).send({
//           statusCode: status,
//           message: "کد اعتبارسنجی ارسال نشد",
//         });
//       }
//     );
//   }
//   async completeProfile(req, res) {
//     await completeProfileSchema.validateAsync(req.body);
//     const { user } = req;
//     const { name, email, role } = req.body;

//     if (!user.isVerifiedPhoneNumber)
//       throw createError.Forbidden("شماره موبایل خود را تایید کنید.");

//     const duplicateUser = await UserModel.findOne({ email });
//     console.log(duplicateUser);
//     if (duplicateUser)
//       throw createError.BadRequest(
//         "کاربری با این ایمیل قبلا ثبت نام کرده است."
//       );

//     const updatedUser = await UserModel.findOneAndUpdate(
//       { _id: user._id },
//       { $set: { name, email, isActive: true, role } },
//       { new: true }
//     );
//     // await setAuthCookie(res, updatedUser);
//     await setAccessToken(res, updatedUser);
//     await setRefreshToken(res, updatedUser);

//     return res.status(HttpStatus.OK).send({
//       statusCode: HttpStatus.OK,
//       data: {
//         message: "اطلاعات شما با موفقیت تکمیل شد",
//         user: updatedUser,
//       },
//     });
//   }
//   async updateProfile(req, res) {
//     const { _id: userId } = req.user;
//     await updateProfileSchema.validateAsync(req.body);
//     const { name, email, biography, phoneNumber } = req.body;

//     const updateResult = await UserModel.updateOne(
//       { _id: userId },
//       {
//         $set: { name, email, biography, phoneNumber },
//       }
//     );
//     if (!updateResult.modifiedCount === 0)
//       throw createError.BadRequest("اطلاعات ویرایش نشد");
//     return res.status(HttpStatus.OK).json({
//       statusCode: HttpStatus.OK,
//       data: {
//         message: "اطلاعات با موفقیت آپدیت شد",
//       },
//     });
//   }
//   async refreshToken(req, res) {
//     const userId = await verifyRefreshToken(req);
//     const user = await UserModel.findById(userId);
//     await setAccessToken(res, user);
//     await setRefreshToken(res, user);
//     return res.status(HttpStatus.OK).json({
//       StatusCode: HttpStatus.OK,
//       data: {
//         user,
//       },
//     });
//   }
//   async getUserProfile(req, res) {
//     const { _id: userId } = req.user;
//     const user = await UserModel.findById(userId, { otp: 0 });

//     return res.status(HttpStatus.OK).json({
//       statusCode: HttpStatus.OK,
//       data: {
//         user,
//       },
//     });
//   }
//   logout(req, res) {
//     const cookieOptions = {
//       maxAge: 1,
//       expires: Date.now(),
//       httpOnly: true,
//       signed: true,
//       sameSite: "Lax",
//       secure: true,
//       path: "/",
//       domain:
//         process.env.NODE_ENV === "development" ? "localhost" : ".fronthooks.ir",
//     };
//     res.cookie("accessToken", null, cookieOptions);
//     res.cookie("refreshToken", null, cookieOptions);

//     return res.status(HttpStatus.OK).json({
//       StatusCode: HttpStatus.OK,
//       roles: null,
//       auth: false,
//     });
//   }
// }

// module.exports = {
//   UserAuthController: new userAuthController(),
// };

const twilio = require('twilio');
require('dotenv').config();
const createError = require("http-errors");
const { UserModel } = require("../../models/user");
const { generateRandomNumber, setAccessToken, setRefreshToken, verifyRefreshToken } = require("../../../utils/functions");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const { completeProfileSchema, updateProfileSchema, checkOtpSchema } = require("../validators/user.schema");
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } = process.env;

const CODE_EXPIRES = 90 * 1000; // 90 seconds in milliseconds
// Import the OTP service provider library
if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN) {
  throw new Error("TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN must be set in environment variables");
}

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;

// Function to generate OTP and initiate the sending process
async function getOtp(req, res) {
  let { phoneNumber } = req.body;

  if (!phoneNumber)
      throw createError.BadRequest("Enter a valid mobile number.");

  phoneNumber = phoneNumber.trim();
  const code = generateRandomNumber(6); // Generate OTP code

  console.log("code1=" + code);

  const result = await saveUser(phoneNumber, code);
  if (!result) throw createError.Unauthorized("Login failed.");

  // Send OTP using the new service provider
  await sendOTP(phoneNumber, code, res);
}

// Function to verify OTP and complete the authentication process
async function checkOtp(req, res) {
  await checkOtpSchema.validateAsync(req.body);
  const { otp: code, phoneNumber } = req.body;

  const user = await UserModel.findOne(
      { phoneNumber },
      { password: 0, refreshToken: 0, accessToken: 0 }
  );

  console.log("code=" + code + " phoneNumber=" + phoneNumber);

  if (!user) throw createError.NotFound("User with these credentials not found.");

  if (user.otp.code != code)
      throw createError.BadRequest("The sent code is not valid.");

  if (new Date(`${user.otp.expiresIn}`).getTime() < Date.now())
      throw createError.BadRequest("The verification code has expired.");

  user.isVerifiedPhoneNumber = true;
  await user.save();

  // Set access and refresh tokens
  await setAccessToken(res, user);
  await setRefreshToken(res, user);

  let WELLCOME_MESSAGE = `Code confirmed, welcome to Freelance Hub.`;
  if (!user.isActive)
      WELLCOME_MESSAGE = `Confirmed, Fill in details.`;

  return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
          message: WELLCOME_MESSAGE,
          user,
      },
  });
}

async function saveUser(phoneNumber, code) {
  const otp = {
      code: code,
      expiresIn: Date.now() + CODE_EXPIRES,
  };

  const user = await checkUserExist(phoneNumber);
  if (user) return await updateUser(phoneNumber, { otp });

  return await UserModel.create({
      phoneNumber,
      otp,
  });
}

async function checkUserExist(phoneNumber) {
  const user = await UserModel.findOne({ phoneNumber });
  return user;
}

async function updateUser(phoneNumber, objectData = {}) {
  Object.keys(objectData).forEach((key) => {
      if (["", " ", 0, null, undefined, "0", NaN].includes(objectData[key]))
          delete objectData[key];
  });
  const updatedResult = await UserModel.updateOne(
      { phoneNumber },
      { $set: objectData }
  );
  return !!updatedResult.modifiedCount;
}

// Function to send OTP using the new service provider (Twilio in this example)
// async function sendOTP(phoneNumber, res, code) {
//     const twilioClient = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
//     try {
//         const message = await twilioClient.messages.create({
//             body: `Your verification code is: ${code}`,
//             from: process.env.TWILIO_PHONE_NUMBER,
//             to: phoneNumber
//         });
//         console.log("Twilio message SID:", message.sid);
//         return res.status(HttpStatus.OK).send({
//             statusCode: HttpStatus.OK,
//             data: {
//                 message: `Verification code sent to mobile number: ${toPersianDigits(phoneNumber)}`,
//                 expiresIn: CODE_EXPIRES,
//                 phoneNumber,
//             },
//         });
//     } catch (error) {
//         console.error("Error sending OTP:", error);
//         return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
//             statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
//             message: "Error sending verification code."
//         });
//     }
// }

const sendOTP = async (phoneNumber, code, res) => {
  console.log("code2=" + code);
  console.log("to=" + phoneNumber);
  console.log("from=" + process.env.TWILIO_PHONE_NUMBER);

  const twilioClient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
  try {
    await twilioClient.messages.create(
      {
        body: `Your verification code is: ${code}`,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: phoneNumber
    });
      // console.log("Twilio message SID:", message.sid);
    return res.status(HttpStatus.OK).send({
        statusCode: HttpStatus.OK,
        data: {
            message: `Verification code sent to mobile number: ${phoneNumber}`,
            expiresIn: CODE_EXPIRES,
            phoneNumber,
        },
    });
  } catch (error) {
      console.error("Error sending OTP:", error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: "Error sending verification code."
      });
  }
};

const completeProfile = async (req, res) => {
  await completeProfileSchema.validateAsync(req.body);
  const { user } = req;
  const { name, email, role } = req.body;

  if (!user.isVerifiedPhoneNumber)
    throw createError.Forbidden("Verify your mobile number.");

  const duplicateUser = await UserModel.findOne({ email });
  console.log(duplicateUser);
  if (duplicateUser)
    throw createError.BadRequest(
      "User with this email has already registered."
    );

  const updatedUser = await UserModel.findOneAndUpdate(
    { _id: user._id },
    { $set: { name, email, isActive: true, role } },
    { new: true }
  );
  // await setAuthCookie(res, updatedUser);
  await setAccessToken(res, updatedUser);
  await setRefreshToken(res, updatedUser);

  return res.status(HttpStatus.OK).send({
    statusCode: HttpStatus.OK,
    data: {
      message: "Your information has been completed successfully.",
      user: updatedUser,
    },
  });
};

const updateProfile = async (req, res) => {
  const { _id: userId } = req.user;
  await updateProfileSchema.validateAsync(req.body);
  const { name, email, biography, phoneNumber } = req.body;

  const updateResult = await UserModel.updateOne(
    { _id: userId },
    {
      $set: { name, email, biography, phoneNumber },
    }
  );
  if (!updateResult.modifiedCount)
    throw createError.BadRequest("Information not edited.");
  return res.status(HttpStatus.OK).json({
    statusCode: HttpStatus.OK,
    data: {
      message: "Information updated successfully.",
    },
  });
};

const refreshToken = async (req, res) => {
  const userId = await verifyRefreshToken(req);
  const user = await UserModel.findById(userId);
  await setAccessToken(res, user);
  await setRefreshToken(res, user);
  return res.status(HttpStatus.OK).json({
    StatusCode: HttpStatus.OK,
    data: {
      user,
    },
  });
};

const getUserProfile = async (req, res) => {
  const { _id: userId } = req.user;
  const user = await UserModel.findById(userId, { otp: 0 });

  return res.status(HttpStatus.OK).json({
    statusCode: HttpStatus.OK,
    data: {
      user,
    },
  });
};

const logout = (req, res) => {
  const cookieOptions = {
    maxAge: 1,
    expires: Date.now(),
    httpOnly: true,
    signed: true,
    sameSite: "Lax",
    secure: true,
    path: "/",
    domain:
      process.env.NODE_ENV === "development" ? "localhost" : ".freelance.ca",
  };
  res.cookie("accessToken", null, cookieOptions);
  res.cookie("refreshToken", null, cookieOptions);

  return res.status(HttpStatus.OK).json({
    StatusCode: HttpStatus.OK,
    roles: null,
    auth: false,
  });
};

module.exports = {
    getOtp,
    checkOtp,
    saveUser,
    checkUserExist,
    updateUser,
    sendOTP,
    completeProfile,
    updateProfile,
    refreshToken,
    getUserProfile,
    logout
};
