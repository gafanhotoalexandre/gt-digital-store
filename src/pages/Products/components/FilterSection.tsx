interface FilterSectionProps {
  title: string
  options: string[]
  inputType: 'checkbox' | 'radio'
  name?: string
}

export function FilterSection({
  title,
  options,
  inputType,
  name,
}: FilterSectionProps) {
  return (
    <div>
      <h3 className='text-lg font-semibold mb-2'>{title}</h3>
      <div className='flex flex-col gap-2'>
        {options.map((option, index) => (
          <label key={index} className='flex items-center'>
            <input type={inputType} name={name} className='mr-2' />
            {option}
          </label>
        ))}
      </div>
    </div>
  )
}
