'use client';

import Image from 'next/image';
import Link from 'next/link';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import FooterForm from '../FooterForm';
import { loginFormSchema } from './constant';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const LoginForm = () => {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    console.log(values);
  }
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`flex h-[100vh] font-normal`}>
      <div className="md:relative md:block w-[50%] hidden">
        {
          <Image
            src="/images/login1.png"
            alt="image login"
            fill
            className="overflow-auto"
          />
        }
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`space-y-8 lg:px-[77px] px-6 md:w-[50%] lg:w-[50%] w-full overflow-hidden overflow-y-scroll
            md:pt-[120px] pt-6
          `}
        >
          <section className="flex flex-col gap-3">
            <div className="text-6xl font-bold mb-2">Login</div>

            <span className="text-2xl font-normal ">
              Don&apos;t have an account yet?
              <Link
                href="/register"
                className="text-primaryColor hover:cursor-pointer lg:ml-2"
              >
                Register
              </Link>
            </span>
          </section>
          {/* BODY */}
          <div className=" w-full pb-4 lg:mr-4 md:mr-4">
            {/* <div className={`flex gap-8 mt-4`}> */}
            <FormField
              name="username"
              render={({ field }) => (
                <FormItem
                  className={`mt-4 
                             w-full
                           leading-6 group text-[#6A6A6A]`}
                >
                  <FormControl className="p-10 ">
                    <Input
                      type="text"
                      {...field}
                      className=" leading-6 px-5 pb-7 focus-visible:border-[#0E81A5] focus-visible:ring-0  focus-visible:ring-offset-0 placeholder:text-[16px] placeholder:text-gray-300 text-[16px] "
                      placeholder="Your name"
                    />
                  </FormControl>
                  <div className="relative">
                    <FormLabel className="absolute bottom-12 left-5 text-[#A19E9E] text-sm font-medium group-focus-within:text-[#76C6D1]">
                      User Name
                    </FormLabel>
                  </div>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              render={({ field }) => (
                <FormItem
                  className={`mt-4 
                             w-full
                           leading-6 group text-[#6A6A6A]`}
                >
                  <FormControl className="p-10 ">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      {...field}
                      className=" leading-6 px-5 pb-7 focus-visible:border-[#0E81A5] focus-visible:ring-0  focus-visible:ring-offset-0 placeholder:text-[16px] placeholder:text-gray-300 text-[16px] "
                      placeholder="********"
                    />
                  </FormControl>
                  <div className="relative">
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
                    <FormLabel className="absolute bottom-12 left-5 text-[#A19E9E] text-sm font-medium group-focus-within:text-[#76C6D1]">
                      Password
                    </FormLabel>
                  </div>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="relative w-full mb-5 ">
              <Link
                className="login-form-forgot absolute right-0 hover:cursor-pointer z-10 text-[16px] font-normal text-text hover:text-primaryColor"
                href="/forgot-password"
              >
                Forgot password
              </Link>
            </div>
          </div>

          {/* FOOTER */}
          <Button
            className="login-form-button w-full rounded-full flex p-8 items-center justify-center text-white font-bold text-2xl mt-4"
            variant={'btnPrimary'}
          >
            Login
          </Button>

          <FooterForm />
        </form>
      </Form>

      {/* Footer */}
    </div>
  );
};

export default LoginForm;
