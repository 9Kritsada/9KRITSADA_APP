function Button(props) {
  const {name, link, icon} = props
  return (
    <div className="bg-[#EDE7B1] drop-shadow-lg hover:bg-[#eee273] rounded py-1 px-1  flex justify-center items-center">
      <a href={link} target="_blank" rel="noopener noreferrer" className=" text-[#000000] text-[12px]">
        <i class={`font-semibold ${icon}`}></i> {name.toUpperCase()}
      </a>
    </div>
  )
}

export default Button;