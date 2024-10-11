'use client';

import Main from '@/components/Layouts/Main';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FieldValues, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Avatar from '@/components/Elements/Avatar/Avatar';
import AnimatedDots from '@/components/Elements/Animation/AnimatedDot';
import IconScroller from '@/components/Elements/Animation/IconScroller';
import AboutData from '@/data/AboutData';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [index] = useState(0);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const form = useForm();
  const formContact = useRef(null);

  const icons = AboutData[index].info?.[0]?.icons ?? [];
  const duplicatedIcons = icons.concat(icons);

  const handleSubmit = async (data: FieldValues) => {
    setError(false);
    setSuccess(false);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        formContact.current!,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
        }
      );
      setSuccess(true);
      form.reset();
    } catch (error) {
      setError(true);
      console.error('Email sending error:', error);
    }
  };

  return (
    <Main>
      <div className='flex flex-col 2xl:flex-row justify-between items-center w-full px-0 xl:px-10 my-20'>
        {/* Image & Animation */}
        <div className='2xl:w-2/3 w-full max-h-[350px] flex items-center gap-x-10 2xl:pl-5 2xl:pr-10 overflow-hidden'>
          {/* Image */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 1.75 }}
            className='relative w-full lg:w-[520px] lg:h-[320px] xl:w-[320px] xl:h-[320px] lg:right-0 hidden lg:block'
          >
            <Avatar />
          </motion.div>

          {/* Animated Icons */}
          <div className='w-full overflow-hidden h-full hidden lg:flex flex-col justify-center items-center gap-2'>
            {AboutData[index].info?.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className='w-full mt-2 flex flex-1 flex-col md:flex-row max-w-max gap-2 items-center'
              >
                <IconScroller
                  variant='leftToRight'
                  icons={duplicatedIcons}
                  hoveredIcon={hoveredIcon}
                  setHoveredIcon={setHoveredIcon}
                />
                <IconScroller
                  variant='leftToRight'
                  icons={duplicatedIcons}
                  hoveredIcon={hoveredIcon}
                  setHoveredIcon={setHoveredIcon}
                />
              </div>
            ))}
            <div className='h-[150px]'>
              <AnimatedDots />
            </div>
            {AboutData[index].info?.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className='w-full mb-2 hidden lg:flex flex-1 flex-col md:flex-row max-w-max gap-2 items-center'
              >
                <IconScroller
                  variant='rightToLeft'
                  icons={duplicatedIcons}
                  hoveredIcon={hoveredIcon}
                  setHoveredIcon={setHoveredIcon}
                />
                <IconScroller
                  variant='rightToLeft'
                  icons={duplicatedIcons}
                  hoveredIcon={hoveredIcon}
                  setHoveredIcon={setHoveredIcon}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <Form {...form}>
          <form
            ref={formContact}
            onSubmit={form.handleSubmit(handleSubmit)}
            className='flex flex-col justify-center gap-8 w-full xl:1/2 2xl:w-1/3'
          >
            <h3 className='text-4xl'>
              Feel free to reach out to me with any inquiries or collaborations!
            </h3>
            <div className='flex flex-col gap-4'>
              <h5>Dear Yerikho William Tasilima,</h5>
              <div className='flex flex-col gap-8'>
                <FormField
                  control={form.control}
                  name='user_message'
                  render={({ field }) => (
                    <FormItem className='font-body'>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder='Type your message here.'
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='user_email'
                  render={({ field }) => (
                    <FormItem className='flex flex-col gap-y-2 font-body'>
                      <FormLabel>My email address:</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder='Enter your email here.'
                          type='email'
                        />
                      </FormControl>
                      <p className='font-light'>Regards</p>
                    </FormItem>
                  )}
                />
                <Button type='submit'>Send</Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </Main>
  );
};

export default ContactPage;
