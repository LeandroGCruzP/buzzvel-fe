import { Button, type ButtonProps } from './Button'
import { Line } from './icons/line'

interface SectionTextProps {
  alignment: 'left' | 'right'
  buttons?: {
    button2?: ButtonProps
    button3?: ButtonProps
  }
  caption?: string
  headline1: string
  headline2?: string
  highlightWord?: string
  text: string
}

export function SectionText(props: SectionTextProps) {
  const alignmentJustify = props.alignment === 'left' ? 'start' : 'end'
  const words = props.headline1.split(' ')
  const headline = words.map((word, index) => {
    const isHighlight = word === props.highlightWord

    return (
      <span key={index} className="relative mr-2 inline-block">
        {isHighlight && (
          <Line className="absolute top-[0.76em] -z-10 h-[18px] w-[113%]" />
        )}
        {word}
      </span>
    )
  })

  return (
    <div className={`flex flex-col gap-6 text-${props.alignment}`}>
      <div className={`relative flex justify-${alignmentJustify} gap-2`}>
        {props.caption && <p>{props.caption}</p>}
        {props.headline1 && (
          <h4 className="font-heading-4 flex flex-wrap">{headline}</h4>
        )}
        {props.headline2 && <p>{props.headline2}</p>}
      </div>

      {props.text && <p className="font-body-m">{props.text}</p>}

      <div className={`flex justify-${alignmentJustify} gap-6`}>
        {props.buttons?.button2 && (
          <Button
            variant={props.buttons.button2?.variant}
            text={props.buttons.button2.text}
            icon={props.buttons.button2?.icon}
          />
        )}
        {props.buttons?.button3 && (
          <Button
            variant={props.buttons.button3?.variant}
            text={props.buttons.button3.text}
            icon={props.buttons.button3?.icon}
          />
        )}
      </div>
    </div>
  )
}
