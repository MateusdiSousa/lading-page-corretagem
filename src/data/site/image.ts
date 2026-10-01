


export function getImageUrl(path: string, width = 1200) {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

    let imageKitEndpoint = import.meta.env.PUBLIC_IMAGEKIT_URL_ENDPOINT?.replace(/\/$/, "");

  if (!imageKitEndpoint) {
    console.warn(
      "PUBLIC_IMAGEKIT_URL_ENDPOINT não está configurado."
    );

    return `/${path.replace(/^\/+/, "")}`;
  }

  const cleanPath = path.replace(/^\/+/, "");

  return `${imageKitEndpoint}/tr:w-${width},q-auto,f-auto/${cleanPath}`;
}