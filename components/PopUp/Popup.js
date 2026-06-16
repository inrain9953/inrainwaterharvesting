import React, { useState, useRef, useCallback, memo } from 'react'
import Image from 'next/image'
import CallIcon from '@mui/icons-material/Call'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import CloseIcon from '@mui/icons-material/Close'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { TypeAnimation } from 'react-type-animation'
import ChatMessage from '../AI/ChatMessage'
import ThreePIcon from '@mui/icons-material/ThreeP'

const ChatWindow = memo(
  ({
    isMobile,
    messages,
    input,
    setInput,
    handleSubmit,
    isLoading,
    messagesEndRef,
    closeChat
  }) => {
    return (
      <div
        className={`
          fixed z-50 rounded-2xl shadow-2xl border bg-white
          transition-all duration-300 ease-in-out
          ${
            isMobile
              ? 'bottom-0 left-0 right-0 h-[78vh] md:hidden m-3'
              : 'hidden md:flex bottom-36 right-26 w-[300px] h-[450px]'
          }
        `}
      >
        <div className='flex flex-col w-full h-full'>
          {/* Header */}
          <div className='flex items-center justify-between border-b p-2'>
            <div className='flex items-center gap-3'>
              <Image
                src='/ai-bot.webp'
                alt='AI Bot'
                width={45}
                height={45}
                className='rounded-full'
                priority
              />
              <div>
                <h3 className='font-semibold text-sm'>InRain Assistant</h3>
                <span className='text-xs text-gray-500'>
                  <TypeAnimation
                    sequence={['Hi! Ask InRain', 3000]}
                    repeat={Infinity}
                  />
                </span>
              </div>
            </div>
            <button
              onClick={closeChat}
              className='rounded-full p-2 hover:bg-gray-100'
            >
              <CloseIcon fontSize='small' />
            </button>
          </div>

          {/* Messages */}
          <div className='flex-1 overflow-y-auto px-2 py-3'>
            {messages.map((message, i) => (
              <ChatMessage key={i} message={message} isBot={message.isBot} />
            ))}
            {isLoading && (
              <div className='text-center text-sm text-gray-500 py-2'>
                Thinking...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className='relative border-t p-3'>
            <input
              type='text'
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder='Ask me anything about InRain...'
              disabled={isLoading}
              className='
                w-full rounded-xl border border-gray-300
                px-4 py-3 pr-12 text-sm
                focus:outline-none focus:ring-2
                focus:ring-blue-500
              '
            />
            <button
              type='submit'
              disabled={isLoading}
              className='
                absolute right-5 top-1/2
                -translate-y-1/2 rounded-full
                p-2 text-blue-500
                hover:bg-blue-50
              '
            >
              <ArrowUpwardIcon />
            </button>
          </form>
        </div>
      </div>
    )
  }
)

ChatWindow.displayName = 'ChatWindow'

const PopUp = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const messagesEndRef = useRef(null)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const toggleChat = useCallback(() => {
    setIsChatOpen(prev => !prev)
  }, [])

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault()
      const trimmedInput = input.trim()
      if (!trimmedInput || isLoading) return

      const userMessage = { text: trimmedInput, isBot: false }
      setMessages(prev => [...prev, userMessage])
      setInput('')
      setIsLoading(true)

      try {
        const response = await fetch('/api/askinrain', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ question: trimmedInput })
        })
        const data = await response.json()
        setMessages(prev => [
          ...prev,
          {
            text: data.answer || 'No response found.',
            isBot: true,
            sources: data.sources || []
          }
        ])
      } catch (error) {
        console.error(error)
        setMessages(prev => [
          ...prev,
          { text: 'Sorry, something went wrong!', isBot: true }
        ])
      } finally {
        setIsLoading(false)
      }
    },
    [input, isLoading]
  )

  // Shared transition classes for each child button
  const childClasses = delay =>
    `flex items-center gap-3 transition-all duration-300 ease-out ${delay} ${
      isMenuOpen
        ? 'opacity-100 translate-y-0 pointer-events-auto'
        : 'opacity-0 translate-y-4 pointer-events-none'
    }`

  return (
    <>
      {/* FAB Stack */}
      <div className='fixed bottom-13 right-7 z-50 md:bottom-20 md:right-10 flex flex-col items-end gap-3'>
        {/* AI Button */}
        <div className={childClasses('delay-[120ms]')}>
          <span className='rounded-xl bg-sky-500 px-2 py-1 text-xs text-white whitespace-nowrap'>
            Ask InRain
          </span>
          <Image
            src='/ai-bot.webp'
            alt='AI Assistant'
            width={52}
            height={52}
            priority
            onClick={toggleChat}
            className='cursor-pointer rounded-full border-2 border-black hover:scale-110 transition-transform duration-300'
          />
        </div>

        {/* Call Button */}
        <div className={childClasses('delay-[70ms]')}>
          <span className='rounded-xl bg-sky-500 px-2 py-1 text-xs text-white whitespace-nowrap'>
            Call us
          </span>

          <a
            href='tel:+919910220794'
            className='flex items-center justify-center w-[52px] h-[52px] rounded-full bg-sky-500 hover:scale-110 transition-transform duration-300'
          >
            <CallIcon sx={{ color: 'white' }} />
          </a>
        </div>

        {/* WhatsApp Button */}
        <div className={childClasses('delay-[20ms]')}>
          <span className='rounded-xl bg-green-500 px-2 py-1 text-xs text-white whitespace-nowrap'>
            WhatsApp
          </span>

          <a
            href='https://wa.me/919910220794'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center w-[52px] h-[52px] rounded-full bg-green-500 hover:scale-110 transition-transform duration-300'
          >
            <WhatsAppIcon sx={{ color: 'white' }} />
          </a>
        </div>

        {/* Main "Get Help" Trigger */}
        <div className='flex items-center gap-1 transition-all duration-300 ease-out'>
          <span className='rounded-xl bg-sky-500 px-2 py-1 text-xs text-white whitespace-nowrap'>
            Get Help
          </span>
          <button
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label='Get Help'
            className='flex items-center gap-2 rounded-full bg-sky-700 px-3 py-3 text-sm font-medium text-white border-2 border-sky-600 hover:scale-105 active:scale-95 transition-transform duration-200'
          >
            {isMenuOpen ? (
              <CloseIcon
                fontSize='large'
                className={`transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
                }`}
              />
            ) : (
              <ThreePIcon fontSize='large' />
            )}
          </button>
        </div>
      </div>

      {/* Chat Windows */}
      {isChatOpen && (
        <>
          <ChatWindow
            isMobile
            messages={messages}
            input={input}
            setInput={setInput}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            messagesEndRef={messagesEndRef}
            closeChat={toggleChat}
          />
          <ChatWindow
            messages={messages}
            input={input}
            setInput={setInput}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            messagesEndRef={messagesEndRef}
            closeChat={toggleChat}
          />
        </>
      )}
    </>
  )
}

export default memo(PopUp)
