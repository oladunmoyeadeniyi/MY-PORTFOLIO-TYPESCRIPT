export type Down_svg = {
  classes?: string;
  linkTo?: string;
};

export type imageProps = {
  Img: string;
  ImgAlt: string;
  ImgClasses: string;
};

export type sectionProps = {
  sectionId: string;
  sectionClasses: string;

  sectionImg: string;
  sectionImgAlt: string;
  sectionImgClasses: string;

  sectionDetailsClasses?: string;
  sectionDetailsName: string;

  downSVG?: boolean;
  DownSVGClasses: string;
  DownSVGLinkTo: string;

  orderButton?: boolean;
};
