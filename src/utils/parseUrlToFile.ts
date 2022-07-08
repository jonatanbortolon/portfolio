import File from "../typings/Files";

function parseUrlToFile(
  url: string,
  files: File[],
  indexFile: string = "index"
): number {
  const uri: string[] = url.split("/");
  uri.splice(0, 1);

  const fileIndex: number = files.findIndex(
    (file) => file.name === (uri[0] || indexFile)
  );

  return fileIndex;
}

export default parseUrlToFile;
