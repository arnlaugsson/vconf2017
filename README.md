# Virtual Conference Suggested Talks
On December 22nd 2017 - Virtual Con will be held. We received a lot of interesting talks to choose from. 

This project makes the data available for usage via a GraphQL portal.

To install: `npm install`
To run: `npm start`

To see info on the available fields for the suggested talks:

```
{
  __type(name: "talk") {
		name
		fields {
			name
			type {
				name
			}
		}
	}
}
```

Then fetch the info you might like to see, with something like:

```
{
  talks {
	title
    speaker
	twitter_handle
}
```
