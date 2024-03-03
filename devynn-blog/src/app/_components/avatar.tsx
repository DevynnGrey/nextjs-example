type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center" data-testid='hero-post-avatar-container'>
      <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} data-testid={`${name}` + `-avatar-image`}/>
      <div className="text-xl font-bold" data-testid={`${name}` + `-avatar-name-text`}>{name}</div>
    </div>
  );
};

export default Avatar;
