#NODE JS Sample App for OAuth
=====================================
<p>
Welcome to the Intuit Developer's Node JS OAuth Sample App.
</p>
<p>
This sample app is meant to provide a working example of oAuth management.
</p>
<p>

OAuth Management APIs consists of the following:

<ul>
<li>Intuit OAuth Service URLs - URLs to use to access Intuit OAuth Services.</li>
<li>Request token URL - Request token endpoint to retrieve request token and secret</li> 
<li>Access token URL - Access token endpoint to retrieve access token and secret </li>
<li>Authorize URL - To authorize access to the third party app</li>
</ul>
</p>
<p>

This is not a seed project to be taken cart blanche and deployed to your production environment. Certain concerns are not addressed at all in our samples (e.g. security, privacy, scalability). In our sample apps, we strive to strike a balance between clarity, maintainability, and performance where we can. However, clarity is ultimately the most important quality in a sample app.

</p>

## Table of Contents

* [Prerequisites](#prerequisites)
* [First Use Instructions](#first-use-instructions)
* [Running the app](#running-the-app)
* [Project Structure](#project-structure)

## Prerequisites

1. ![Alt text](images/require.JPG "Pre-Requisite")
2. Developer.intuit.com account
3. An app on developer.intuit.com and the associated app token, consumer key, and consumer secret.

## Configuration
![Alt text](images/config.JPG "Configurations")

## Dependencies
![Alt text](images/depend.JPG "Dependencies")

## First Use Instructions:

- Clone the GitHub repo to your workspace

Note: This sample is used for understanding how oauth works

- Configure the app tokens: Go to your app on developer.intuit.com and copy the OAuth Consumer Key and OAuth Consumer Token from the keys tab. Add these values to the file node_modules\app\config.js in our oauth-node folder.

- Make sure you specify a port which is not used.

- Run npm install to make sure all the dependencies are installed from package.json

## Run the App:

Once the sample app code is on your computer, follow the steps below to run the app:

- Run the command node app.js 

![Alt text](images/listen.JPG "Listener")

- Go to Browser -> localhost:3001 -> Enter

![Alt text](images/index.JPG "Index")

- Connect your app to Quickbooks, by clicking on Connect to QuickBooks button and follow the instructions on the screen.

![Alt text](images/connect.JPG "Connect")

![Alt text](images/authorize.JPG "Authorize")

- After successfully connecting the app to QuickBooks.

- You shous view the access token and access secret. Refer the screen shot section.

![Alt text](images/result.JPG "access tokens")

## How Oauth Works

-- The following simple sequence diagram should help you understand the flow.

![Alt text](images/seq.png "sequence diagram on oauth")

## Understanding the http flow.

![Alt text](images/fiddle.JPG "Fiddler request look")

#	Result	Protocol	Host	URL	Body	Caching	Content-Type	Process	Comments	Custom	ClientConnected	
2	302	HTTPS	appcenter.intuit.com	/Connect/SessionStart?grantUrl=http%3A%2F%2Flocalhost%3A3001%2Fconnect&datasources=quickbooks	14,918	private, s-maxage=0	text/html; charset=utf-8	chrome:3052			14:29:24.276	
3	302	HTTP	localhost:3001	/connect	262		text/html; charset=utf-8	chrome:3052			14:29:26.059	
5	302	HTTPS	appcenter.intuit.com	/Connect/Begin?oauth_token=qyprdH5jx5DpTtdA5ODRNYgTjgKow5OVhgM5XY6P176r1bDM	14,967	private, s-maxage=0	text/html; charset=utf-8	chrome:3052			14:29:27.511	
7	200	HTTPS	appcenter.intuit.com	/Connect/CompanySelection?oauth_token=qyprdH5jx5DpTtdA5ODRNYgTjgKow5OVhgM5XY6P176r1bDM	10,958	private, s-maxage=0	text/html; charset=utf-8	chrome:3052			14:29:38.325	
22	200	HTTPS	appcenter.intuit.com	/Connect/Authorize?oauth_token=qyprdH5jx5DpTtdA5ODRNYgTjgKow5OVhgM5XY6P176r1bDM&realmId=1292747760	11,050	private, s-maxage=0	text/html; charset=utf-8	chrome:3052			14:29:38.325	
52	302	HTTPS	appcenter.intuit.com	/Connect/Authorize	15,048	private, s-maxage=0	text/html; charset=utf-8	chrome:3052			14:29:38.325	
60	200	HTTP	localhost:3001	/callback/?oauth_token=qyprdH5jx5DpTtdA5ODRNYgTjgKow5OVhgM5XY6P176r1bDM&oauth_verifier=pc9v6uq&realmId=1292747760&dataSource=QBO	132		text/html; charset=utf-8	chrome:3052			14:29:53.972	
62	200	HTTP	localhost:3001	/display	284		text/html; charset=utf-8	chrome:3052			14:29:53.972	
63	304	HTTP	localhost:3001	/images/success.jpg	0	public, max-age=0		chrome:3052			14:29:53.972	


## How does your SSL handshake look

- Make sure you have your port 443 open for SSL handshake to commit to intuit server.

![Alt text](images/ssl.JPG "SSL Handshake")

## Feedback

Your feed back is appreciated and it will motivate us to improve the app. Please send your valuable feedback to sumod_madhavan@intuit.com. I will try my best to incorporate the valid requests.
 
## Contributing to the Repository ###

If you find any issues or opportunities for improving this respository, fix them!  Feel free to contribute to this project by [forking](http://help.github.com/fork-a-repo/) this repository and make changes to the content.  Once you've made your changes, share them back with the community by sending a pull request. Please see [How to send pull requests](http://help.github.com/send-pull-requests/) for more information about contributing to Github projects. Please help in writing test cases to the Test Project.

## Reporting Issues ###

If you find any issues with this demo that you can't fix, feel free to report them in the issue section of this repository.



