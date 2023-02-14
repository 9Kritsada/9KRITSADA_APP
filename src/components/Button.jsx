function Button(props) {
  const {name, link, icon} = props
  return (
    <div className="bg-[#F5CB5C] drop-shadow-lg hover:bg-[#F8DB8C] rounded py-1 px-1  flex justify-center items-center">
      <a href={link} target="_blank" rel="noopener noreferrer" className=" text-[#242423] text-[12px]">
        <i class={`font-semibold ${icon}`}></i> {name.toUpperCase()}
      </a>
    </div>
  )
}

export default Button;