import request from "~/utils/request";

type UploadImage = {
  image: File;
};

type UploadedImage = {
  idImage: string;
};

const endpoints = {
  upload: (data: UploadImage) => {
    const formData = new FormData();

    formData.append("image", data.image);

    return request.post<UploadedImage>("/images", formData);
  },
};

export default endpoints;
