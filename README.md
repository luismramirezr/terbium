# Terbium
An AWS based e-mail service.

## About
The aim of this project is to provide an accessible e-mail client based on AWS services, such as S3, SES, SQS, DynamoDB, Lambda, among others.

**It's not intended to serve as an e-mail server.**

The idea is to have AWS as the e-mail sender/receiver gateway and a web client to access (read and send) those e-mails.

## Services and Technologies

A bunch of services will be required, therefore many technologies will be used, such as:

| Technologies         | Services               |
|----------------------|------------------------|
| ReactJS + Typescript | Web client             |
| Route53              | DNS                    |
| Cloudfront           | CDN                    |
| DynamoDB             | Database               |
| S3                   | E-mail storage         |
| Lambda               | Backend                |
| SES                  | E-mail's sending       |
| SNS                  | E-mail's events        |
| SQS                  | E-mail's sending queue |

*This list is not definitive and may be updated.*

## Cost estimate

As this service will be based in a serverless structure, the more it it's used, the greater the cost. For a normal use, it's desired to have a cost less than $ 5.00/month.

## Service Design

- Web client is a React.JS application stored in a S3 bucket which is delivered by a Cloudfront Distribution hooked to a domain registered in Route53

- The web client access the DynamoDB database throught a Lambda function

- This Lambda function can queue e-mails send request from the user into a SQS which is consumed by another Lambda.

- The Lambda uses SES to send the e-mail.

- The SES is the gateway to send and receive e-mails. When an e-mail is sent, its status is updated in DynamoDB.

- When the sent e-mail produces an event (read, bounce, etc.), it's provided to a Lambda throught SNS. This event is written in DynamoDB.

- When receiveing an e-mail, SES saves the e-mail in a S3 bucket and triggers a Lambda to read it from the S3 bucket and parse it. Its data is saved in DynamoDB.