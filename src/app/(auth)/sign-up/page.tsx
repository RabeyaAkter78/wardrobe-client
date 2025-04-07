"use client";
// import SocialLogin from "@/components/Shared/SocialLogin/SocialLogin";
import { Button, Checkbox, Form, Input, Flex, Typography } from "antd";
import Link from "next/link";

const SignUp = () => {
  const onFinish = (values:any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className=" py-16 md:py-0 h-[100vh] w-full flex items-center justify-center ">
      <Form
        name="login"
        initialValues={{ remember: true }}
        style={{ maxWidth: 550 }}
        onFinish={onFinish}
        layout="vertical"
        className=" rounded-2xl w-[450px] s"
      >
        <div className="mb-4 text-center">
          <h2
            style={{ color: "white" }}
            className=" text-center text-2xl md:text-5xl font-bold mb-6"
          >
            Sign Up
          </h2>
          <Typography.Text className=" text-center text-base ">
            {" "}
            Please enter your name, email and password to continue
          </Typography.Text>
        </div>
        <Form.Item
          name="name"
          label={<p className=" text-md">Name</p>}
          style={{}}
        >
          <Input
            required
            style={{ padding: "6px" }}
            className=" text-md"
            placeholder="Your Name"
          />
        </Form.Item>
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
          <Flex justify="space-between" align="center" className="">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox
                required
                className="  text-md hover: text-md"
              >
                Accept terms of services
              </Checkbox>
            </Form.Item>
          </Flex>
        </Form.Item>
        <p className=" text-center mb-5">
          Already have an Account?
          <Link href="/sign-in" className=" pl-2">
            Login
          </Link>
        </p>

        <Form.Item className="text-center">
          <button
            className="bg-primary text-white   px-10 py-2 rounded-md shadow-lg"
            type="submit"
          >
            Sign Up
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
