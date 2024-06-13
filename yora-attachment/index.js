import { S3Client } from "@aws-sdk/client-s3";

// Substitua 'your-region' pela região desejada, por exemplo, 'us-east-1'
const s3Client = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  },
});
async function uploadFile() {
  console.log("process.env>>>>", process.env);
  console.log(
    "process.env.S3_ACCESS_KEY_ID>>>>>>>>",
    process.env.S3_ACCESS_KEY_ID
  );
  if (!process.env.S3_ACCESS_KEY_ID || !process.env.S3_SECRET_ACCESS_KEY) {
    throw new Error();
  }

  const params = {
    Bucket: "yora-bucket",
    Key: "hello.txt",
    Body: "hello world",
  };

  await s3Client.send(object);
  // try {
  //   console.log("Upload realizado com sucesso:", data);
  // } catch (error) {
  //   console.error("Erro ao fazer upload:", error);
  // }
}

uploadFile();
