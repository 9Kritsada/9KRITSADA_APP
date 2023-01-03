function Button(props) {
  const {name, link, icon} = props
  return (
    <div className="mb-3">
      <a href={link} target="_blank" rel="noopener noreferrer" className="font-thin cursor-pointer px-2 py-[.4em] bg-[#DCD6F7] text-[#424874] min-[320px]:mx-[0.25em] mx-[0.45em] rounded drop-shadow-lg min-[480px]:text-[14px] min-[320px]:text-[12px] text-[13px] hover:opacity-80">
        <i class={`font-semibold ${icon}`}></i> {name.toUpperCase()}
      </a>
    </div>
  )
}

export default Button;