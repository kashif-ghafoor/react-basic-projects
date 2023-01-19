// AWS.config.update({
//   accessKeyId: "AKIAUTEXLE6CIURJMRNZ",
//   accessSecretKey: "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",
//   region: "us-east-1",
// });
var credentials = new AWS.SharedIniFileCredentials({ profile: "default" });
AWS.config.credentials = credentials;

console.log(process.env.AWS_ACCESS_KEY_ID);
// AWS.config.getCredentials(function (err) {
//   if (err) console.log(err.stack);
//   // credentials not loaded
//   else {
//     console.log("Access key:", AWS.config.credentials.accessKeyId);
//   }
// });
