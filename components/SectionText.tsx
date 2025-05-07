import { JSX } from 'react'
import { Button, type ButtonProps } from './Button'
import { Line } from './icons/line'

type SectionTextSizes = 'h4' | 'h6'
type SectionTextAlignment = 'left' | 'right' | 'center'

interface SectionTextProps {
  alignment: SectionTextAlignment
  buttons?: {
    button2?: ButtonProps
    button3?: ButtonProps
  }
  // caption?: string
  headline1?: string
  headline2?: string
  highlightWord?: string
  text?: string
}

export function SectionText(props: SectionTextProps) {
  function getAlignmentClass(alignment: SectionTextAlignment) {
    const collection: Record<SectionTextAlignment, string> = {
      center: 'center',
      left: 'start',
      right: 'start',
    }
    return collection[alignment]
  }

  const alignmentJustify = getAlignmentClass(props.alignment)

  function renderHeadline(
    headlineSize: SectionTextSizes,
    headline?: string,
    highlightWord?: string
  ): JSX.Element[] | null {
    if (!headline) return null

    const highlightLineHeightClass: Record<SectionTextSizes, string> = {
      h4: 'h-[21px] lg:h-[30px]',
      h6: 'h-[11px] lg:h-[20px]',
    }

    const words = headline.split(' ')
    const headlineElement = words.map((word, index) => {
      const isHighlight = word === highlightWord
      return (
        <span key={index} className="relative mr-2 inline-block">
          {isHighlight && (
            <Line
              className={`absolute top-[0.76em] -z-10 ${highlightLineHeightClass[headlineSize]} w-[113%]`}
            />
          )}
          {word}
        </span>
      )
    })

    return headlineElement
  }

  return (
    <div className={`flex flex-col gap-6 text-${props.alignment}`}>
      <div className={`relative flex flex-col items-${alignmentJustify} gap-2`}>
        {/* {props.caption && <p>{props.caption}</p>} */}
        {props.headline1 && (
          <h4 className="flex flex-wrap lg:text-7xl">
            {renderHeadline('h4', props.headline1, props.highlightWord)}
          </h4>
        )}
        {props.headline2 && (
          <h6 className="flex flex-wrap">
            {renderHeadline('h6', props.headline2, props.highlightWord)}
          </h6>
        )}
      </div>

      {props.text && (
        <p
          className={`leading-[140%] lg:mb-[5px] lg:text-2xl lg:leading-[160%] text-${alignmentJustify}`}
        >
          {props.text}
        </p>
      )}

      <div className={`flex justify-${alignmentJustify} gap-6`}>
        {props.buttons?.button2 && (
          <Button
            variant={props.buttons.button2?.variant}
            text={props.buttons.button2.text}
            iconLeft={props.buttons.button2?.iconLeft}
          />
        )}
        {props.buttons?.button3 && (
          <Button
            variant={props.buttons.button3?.variant}
            text={props.buttons.button3.text}
            iconLeft={props.buttons.button3?.iconLeft}
          />
        )}
      </div>
    </div>
  )
}
