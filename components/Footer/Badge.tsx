export function Badge() {
  return (
    <div className="flex h-[20px] w-min items-center rounded-[0.25rem] bg-purple-100 p-1">
      <div className="gap-[10px] px-1">
        <span className="text-xs leading-[140%] tracking-normal text-purple-800 uppercase">
          Beta
        </span>
      </div>
    </div>
  )
}
