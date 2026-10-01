


export function getImageUrl(path: string, width = 1200) {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }
  
  let imageKitEndpoint = "https://ik.imagekit.io/zdhwy5gez";

  const cleanPath = path.replace(/^\/+/, "");

  return `${imageKitEndpoint}/tr:w-${width},q-auto,f-auto/${cleanPath}`;
}