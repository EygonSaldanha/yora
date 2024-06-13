import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

export interface UploaderFileParams {
  file: Buffer;
  filePath: string;
  fileName: string;
  bucket: string;
}

export interface UploaderFileResponse {
  fileName: string;
  url: string;
}

export class UploadFileS3Provider {
  async upload(params: UploaderFileParams): Promise<UploaderFileResponse> {
    const region = "us-east-1";

    if (!process.env.S3_ACCESS_KEY_ID || !process.env.S3_SECRET_ACCESS_KEY) {
      throw new Error();
    }

    const s3Client = new S3Client({
      region,
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
      },
    });

    const fileName = `${Date.now()} - teste.txt`; //${params.fileName}`; criar nome do arquivo para não sobrescrever
    const path = `${fileName}`; // concatenação do path com o fileName para montar o caminho do arquivo
    // const fileName = "teste.txt"

    const object = new PutObjectCommand({
      Bucket: "yora-bucket", //params.bucket, // edler
      Key: path,
      Body: "teste", //params.file // Buffer do arquivo
    });

    await s3Client.send(object);

    const url = `https://${params.bucket}.s3.${region}.amazonaws.com/${path}`;
    return {
      fileName,
      url,
    };
  }
}
