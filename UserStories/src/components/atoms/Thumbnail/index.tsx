
interface ImgProps {
    img:string
}

const Thumbnail: React.FC<ImgProps> = ({img}) => {
  return (
    <div>
        <img src={img} alt=""/>
    </div>
  )
}

export default Thumbnail