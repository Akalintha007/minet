import Avatar from "@mui/material/Avatar";

interface AvatarProps {
  alt: string | undefined;
  src: string;
}

const AvatarComponent = (props: AvatarProps) => {

  const {alt, src} = props;

  return <Avatar alt={ alt } src={ src } />;
};

export default AvatarComponent;