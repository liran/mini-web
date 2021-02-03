import Image from 'next/image';

const OptimizationImage = () => {
  return (
    <Image
      src={require('./girl.png')}
      width={1004}
      height={986}
      layout="responsive"
      alt="Optimization Picture"
    />
  );
};

export default OptimizationImage;
