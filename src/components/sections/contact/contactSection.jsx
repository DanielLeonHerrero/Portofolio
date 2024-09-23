import React from 'react'
import useSection from '../../../context/sectionContext/hook/useSection'
import SectionTitle from '../title/sectionTitle'
import { useTranslation } from 'react-i18next'
import Button from '../../button/buton'
import Social from '../../social/social'
import ContactBook from '../../svg/contactBook'
import LetterEnvelope from '../../svg/letterEnvelope'
import Phone from '../../svg/phone'

const ContactSection = () => {

  const { contactSection } = useSection()
  const { t } = useTranslation()

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, subject, message } = event.target.elements;
    window.location.href = `mailto:danielleon157@outlook.com?subject=${encodeURIComponent(subject.value)}&body=${t("contactSection.mail.form.bodyPart")} ${encodeURIComponent(name.value)}%0D%0A%0D%0A${encodeURIComponent(message.value)}`;
  };

  return (
    <div ref={contactSection} className="relative w-screen h-screen bg-contain bg-cover desktop:bg-fixed text-black dark:text-white" style={{ backgroundImage: "url(/images/contact_background.webp)" }}>
      <div className='absolute inset-0 bg-black opacity-50' />
      <div className='absolute inset-0 flex items-center justify-center p-5 md:p-24'>
        <section className="bg-white w-screen lg:max-w-3xl dark:bg-gray-900 flex flex-col gap-12 md:flex-row items-center p-5 text-center">
          <div className='md:h-96 md:w-1/2'>
            <div className='flex flex-col items-center md:items-start'>
              <SectionTitle svg={() => <LetterEnvelope />} title={t("contactSection.mail.title")} variant={'secondary'} />
            </div>
            <form className='flex flex-col gap-3 pr-4 pl-4 pt-6 md:pr-0' onSubmit={handleSubmit}>
              <input name='name' type='text' placeholder={t("contactSection.mail.form.name")} className='pl-2 w-full border rounded border-gray-300 h-9 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent dark:bg-gray-900 dark:border-gray-700' />
              <input name='subject' type='text' placeholder={t("contactSection.mail.form.subject")} className='pl-2 w-full border rounded border-gray-300 h-9 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent dark:bg-gray-900 dark:border-gray-700' />
              <textarea name='message' placeholder={t("contactSection.mail.form.message")} className='pl-2 w-full h-32 border rounded border-gray-300 h-9 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent dark:bg-gray-900 dark:border-gray-700' />
              <div className='w-full flex justify-center mt-3 md:mt-0'>
                <Button type={"submit"} text={t("contactSection.mail.form.button")} variant='primary' />
              </div>
            </form>
          </div>
          <div className='md:h-96 md:w-1/2'>
            <div className='flex flex-col items-center md:items-start'>
              <SectionTitle svg={() => <ContactBook />} title={t("contactSection.contact.title")} variant={'secondary'} />
            </div>
            <p className='pt-6 md:text-start'>{t('contactSection.contact.description')}</p>
            <div className='mt-3'>
              <div className='flex justify-center items-center'>
                <div className='w-5'>
                  <LetterEnvelope />
                </div>
                <p className='ml-2'>danielleon157@outlook.com</p>
              </div>
              <div className='flex justify-center items-center'>
                <div className='w-5'>
                  <Phone />
                </div>
                <p className='ml-2'>+34 604 34 30 87</p>
              </div>
            </div>
            <div className='flex justify-center mt-3'>
              <Social />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ContactSection