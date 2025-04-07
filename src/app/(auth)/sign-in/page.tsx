/* eslint-disable react/no-unescaped-entities */
"use client";
import { Checkbox, Form, Input, Flex, Typography } from "antd";
import Link from "next/link";

const SignIn = () => {
  const onFinish = (values:any) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className=" h-[100vh] py-16 md:py-0 md:h-[100vh] w-full flex items-center justify-center">
      <Form
        name="login"
        initialValues={{ remember: true }}
        style={{ maxWidth: 550 }}
        onFinish={onFinish}
        layout="vertical"
        className=" rounded-2xl w-[450px] "
      >
        <div className="mb-4 text-center">
          <h2
            className="text-primary text-center text-3xl md:text-5xl font-bold mb-6"
          >
         Sign In
          </h2>
          <Typography.Text className=" text-center text-base ">
            Please enter your email and password to continue
          </Typography.Text>
        </div>

        <Form.Item
          name="email"
          label={<p className=" text-md">Email</p>}
          style={{}}
        >
          <Input
            required
            style={{ padding: "6px" }}
            className=" text-md"
            placeholder="Your Email"
          />
        </Form.Item>
        <Form.Item name="password" label={<p className=" text-md">Password</p>}>
          <Input
            required
            style={{ padding: "6px" }}
            className=" text-md"
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <div className="flex items-center justify-between">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox
                required
                className="  text-md hover: text-md"
              >
                Accept terms of services
              </Checkbox>
            </Form.Item>
            <p className=" ">
              <Link href="/forgate-password">Forgot Password</Link>
            </p>
          </div>
        </Form.Item>
        <p className=" text-center mb-5">
          Don't have an Account?
          <Link href="/sign-up" className=" pl-2">
            Sign Up
          </Link>
        </p>
        <Form.Item className="text-center">
            <Link href="/">
          <button
            className="bg-primary  text-white px-10 py-2 rounded-md shadow-lg"
            type="submit"
          >
            Log In
          </button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;
