# About
- This is the backend for my personal website, hosted on AWS Lambda via the serverless framework (https://www.serverless.com/)

# Instructions (for myself)
- Check the `LOCAL` variable in `app.ts`
- Check the CORS origin URL in `app.ts`
- Follow instructions at https://github.com/dougmoscrop/serverless-http/issues/34#issuecomment-637040059 for API Gateway configuration
- Check if S3 Bucket exists with same name in `app.ts` (multer)
- Check domain DNS records (CNAME to S3 bucket, Domain Forwarding to Backend (api.example.com))
- Check backend environment variables
- Check REACT_APP_API environment variable for frontend
- For a locally hosted backend, create a `.env` file with your MongoDB URI inside (`URI=<URI>`). Don't forget to specify which DB to connect to: `.../<DBName>?retryWrites`
```
URI="<URI>"
```
- For a serverless backend (AWS), create an `env.json` file with `URI` as a key instead:
```json
{
    "URI": "<URI>"
}
```
- Deploy with `serverless deploy` after configuration.
