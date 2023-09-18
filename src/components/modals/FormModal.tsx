'use client';

import Image from 'next/image';
import Link from 'next/link';

import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { ImageFooter } from '@/config/types/formAuth/imageFooter.type';

import { Button } from '../ui/button';

import {
  forgotPasswordFormSchema,
  loginFormSchema,
  registerFormSchema,
} from '@/app/(auth)/constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

interface TitleFormType {
  title: string;
  subLabel?: string;
  urlName?: string;
  url?: string;
}
interface BodyFormType {
  nameField: string;
  type: string;
  placeholder?: string;
  nameLabel?: string;
  checkWidth?: boolean;
}
interface ModalProps {
  image?: string;
  listTitle: TitleFormType[];
  actionLabel: string;
  locationImage?: string;
  imageFooter?: ImageFooter[];
  otherLabel?: string;
  listBody: BodyFormType[];
}
const Modal = ({
  image,
  listTitle,
  actionLabel,
  locationImage,
  imageFooter,
  otherLabel,
  listBody,
}: ModalProps) => {
  const formSchema =
    actionLabel === 'Login'
      ? loginFormSchema
      : actionLabel === 'Register'
      ? registerFormSchema
      : forgotPasswordFormSchema;

  const defaultValues =
    actionLabel === 'Login'
      ? {
          username: '',
          password: '',
        }
      : actionLabel === 'Register'
      ? {
          firstname: '',
          lastname: '',
          email: '',
          username: '',
          password: '',
        }
      : {
          email: '',
          password: '',
          confirmpassword: '',
        };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  const [firstTittle] = listTitle;
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  console.log('re render ', showPassword);
  return (
    <div
      className={`flex h-[100vh] font-normal ${locationImage ? 'flex-row-reverse' : ''}`}
    >
      <div className="md:relative md:block w-[50%] hidden">
        {image && <Image src={image} alt="image login" fill className="overflow-auto" />}
      </div>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`space-y-8 lg:px-[77px] px-6 md:w-[50%] lg:w-[50%] w-full overflow-hidden overflow-y-scroll ${
            actionLabel === 'Register' ? 'md:pt-[80px] pt-7' : 'md:pt-[120px] pt-6'
          }`}
        >
          <section className="flex flex-col gap-3">
            {actionLabel.trim() === 'Register' || actionLabel === 'Change Password' ? (
              <span className="text-2xl font-normal text-[#858D92]">Start For Free</span>
            ) : null}
            {firstTittle.title ? (
              <div className="text-6xl font-bold mb-2">{firstTittle.title}</div>
            ) : null}
            {firstTittle.subLabel ? (
              <span className="text-2xl font-normal ">
                {firstTittle.subLabel}
                <Link
                  href={firstTittle.url ? firstTittle.url : '/'}
                  className="text-primaryColor hover:cursor-pointer lg:ml-2"
                >
                  {firstTittle.urlName}
                </Link>
              </span>
            ) : null}
          </section>
          {/* BODY */}
          <div className=" w-full pb-4 lg:mr-4 md:mr-4">
            {listBody?.map((item, index) => (
              <React.Fragment key={item.nameField}>
                {item.checkWidth && listBody[index + 1]?.checkWidth && (
                  <div className={`flex gap-8 mt-4`}>
                    <FormField
                      name={item.nameField}
                      render={({ field }) => (
                        <FormItem
                          className={`mt-4 
                             w-[48%]
                           leading-6 group text-[#6A6A6A]`}
                        >
                          <FormControl className="p-10 ">
                            <Input
                              type={item.type}
                              {...field}
                              className=" leading-6 px-5 pb-7 focus-visible:border-[#0E81A5] focus-visible:ring-0  focus-visible:ring-offset-0 placeholder:text-[16px] placeholder:text-gray-300 text-[16px] "
                              placeholder={item.placeholder}
                            />
                          </FormControl>
                          <div className="relative">
                            <FormLabel className="absolute bottom-12 left-5 text-[#A19E9E] text-sm font-medium group-focus-within:text-[#76C6D1]">
                              {item.nameLabel}
                            </FormLabel>
                          </div>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      name={listBody[index + 1].nameField}
                      render={({ field }) => (
                        <FormItem
                          className={`mt-4 w-[48%]
                             leading-6 group text-[#6A6A6A]`}
                        >
                          <FormControl className="p-10 ">
                            <Input
                              type={listBody[index + 1].type}
                              {...field}
                              className=" leading-6 px-5 pb-7 focus-visible:border-[#0E81A5] focus-visible:ring-0  focus-visible:ring-offset-0 placeholder:text-[16px] placeholder:text-gray-300 text-[16px] "
                              placeholder={listBody[index + 1].placeholder}
                            />
                          </FormControl>
                          <div className="relative">
                            <FormLabel className="absolute bottom-12 left-5 text-[#A19E9E] text-sm font-medium group-focus-within:text-[#76C6D1]">
                              {listBody[index + 1].nameLabel}
                            </FormLabel>
                          </div>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {!item.checkWidth && (
                  <FormField
                    name={item.nameField}
                    render={({ field }) => (
                      <FormItem
                        className={`mt-4 ${
                          item.checkWidth ? 'w-[47%]' : 'w-full'
                        } leading-6 group text-[#6A6A6A]`}
                      >
                        <FormControl className="p-10 ">
                          <Input
                            type={
                              item.type === 'password' && showPassword
                                ? 'text'
                                : item.type
                            }
                            {...field}
                            className=" leading-6 px-5 pb-7 focus-visible:border-[#0E81A5] focus-visible:ring-0  focus-visible:ring-offset-0 placeholder:text-[16px] placeholder:text-gray-300 text-[16px] "
                            placeholder={item.placeholder}
                          />
                        </FormControl>
                        <div className="relative">
                          {item.nameField == 'password' ? (
                            <>
                              {showPassword ? (
                                <AiOutlineEye
                                  className="absolute right-5 bottom-7 hover:cursor-pointer"
                                  onClick={handleShowPassword}
                                />
                              ) : (
                                <AiOutlineEyeInvisible
                                  className="absolute right-5 bottom-7 hover:cursor-pointer"
                                  onClick={handleShowPassword}
                                />
                              )}
                            </>
                          ) : (
                            <></>
                          )}

                          <FormLabel className="absolute bottom-12 left-5 text-[#A19E9E] text-sm font-medium group-focus-within:text-[#76C6D1]">
                            {item.nameLabel}
                          </FormLabel>
                        </div>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </React.Fragment>
            ))}

            {firstTittle.title == 'Login' ? (
              <div className="relative w-full mb-5 ">
                <Link
                  className="login-form-forgot absolute right-0 hover:cursor-pointer z-10 text-[16px] font-normal text-text hover:text-primaryColor"
                  href="/forgot-password"
                >
                  Forgot password
                </Link>
              </div>
            ) : null}
          </div>

          {/* FOOTER */}
          <Button
            className="login-form-button w-full rounded-full flex p-8 items-center justify-center text-white font-bold text-2xl mt-4"
            variant={'btnPrimary'}
          >
            {actionLabel}
          </Button>

          {otherLabel && (
            <>
              <div className="before:content-[''] before:mr-2 after:content-[''] after:ml-2 before:w-[20%] before:h-[1px] before:block flex after:h-[1px] after:w-[20%] after:block before:bg-[#373535] after:bg-[#373535] items-center justify-center">
                <span className="m-6 text-xl">{otherLabel}</span>
              </div>
              <div className="flex gap-14 items-center justify-center pb-4">
                {imageFooter?.map((item) => (
                  <Image
                    key={item.src}
                    src={item.src}
                    width={item.width}
                    height={item.height}
                    alt={item.alt}
                    className="hover:cursor-pointer"
                  />
                ))}
              </div>
            </>
          )}
        </form>
      </FormProvider>
      {/* Footer */}
    </div>
  );
};

export default Modal;
