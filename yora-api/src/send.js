import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

class UploadFileS3Provider {
  async upload(params) {
    const region = "us-east-1";

    if (!process.env.S3_ACCESS_KEY_ID || !process.env.S3_SECRET_ACCESS_KEY) {
      console.log(process.env);
      throw new Error();
    }

    const s3Client = new S3Client({
      region,
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
      },
    });

    const fileName = `${Date.now()} - teste.txt`;
    const path = `${fileName}`;

    const object = new PutObjectCommand({
      Bucket: "yora-bucket",
      Key: path,
      Body: "teste",
    });

    await s3Client.send(object);

    const url = `https://${params.bucket}.s3.${region}.amazonaws.com/${path}`;
    return {
      fileName,
      url,
    };
  }
}

// Exemplo de uso
(async () => {
  const provider = new UploadFileS3Provider();
  const result = await provider.upload({
    file: Buffer.from("conteudo do arquivo"), // Substitua pelo conteúdo real do arquivo
    filePath: "", // Não utilizado neste exemplo
    fileName: "nome_do_arquivo.txt", // Substitua pelo nome real do arquivo
    bucket: "yora-bucket", // Substitua pelo nome real do seu bucket
  });
  console.log(result);
})();
