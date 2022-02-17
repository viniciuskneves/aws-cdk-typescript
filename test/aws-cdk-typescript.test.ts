import * as cdk from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import * as AwsCdkTypescript from "../lib/aws-cdk-typescript-stack";

test("AWS CDK Typescript Stack example", () => {
  const app = new cdk.App();
  // WHEN
  const stack = new AwsCdkTypescript.AwsCdkTypescriptStack(app, "MyTestStack");
  // THEN
  const template = Template.fromStack(stack);
  expect(template).toMatchSnapshot();
});
