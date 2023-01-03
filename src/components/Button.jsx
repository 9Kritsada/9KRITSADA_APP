function Button(props) {
  const {name, link, icon} = props
  return (
    <div className="min-[320px]:basis-auto basis-full mb-3">
      <a href={link} target="_blank" rel="noopener noreferrer" className=" cursor-pointer px-4 py-1 bg-[#DCD6F7] text-[#424874] mx-[0.25em] rounded drop-shadow-lg md:text-[14px] text-[12px] hover:opacity-80">
        <i class={`font-semibold ${icon}`}></i> {name.toUpperCase()}
      </a>
    </div>
  )
}

export default Button;