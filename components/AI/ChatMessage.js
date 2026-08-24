import React, { memo } from 'react'

function ChatMessage({ message = {}, isBot = false }) {
  const bubbleStyles = isBot
    ? 'bg-blue-100 text-black rounded-bl-sm'
    : 'bg-green-100 text-black rounded-br-sm'

  const renderMessage = (text = '') => {
    const parts = text.split(/(\*\*.*?\*\*)/g)

    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index}>
            {part.slice(2, -2)}
          </strong>
        )
      }

      return part
    })
  }

  return (
    <div
      className={`flex px-3 py-2 ${
        isBot ? 'justify-start' : 'justify-end'
      }`}
    >
      <div
        className={`
          max-w-[85%] md:max-w-[95%]
          rounded-2xl px-4 py-3 shadow-sm
          break-words whitespace-pre-line
          ${bubbleStyles}
        `}
      >
        <p className='text-xs leading-relaxed'>
          {renderMessage(message?.text || '')}
        </p>
      </div>
    </div>
  )
}

export default memo(ChatMessage)